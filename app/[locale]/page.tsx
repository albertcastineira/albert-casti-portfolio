import Header from "./components/Header";
import AboutMeSection from "./components/AboutMeSection";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import AosInit from "./components/AosInit";
import { notFound } from "next/navigation";
import { isAppLocale, literals } from "../../i18n/literals";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  const pageLiterals = literals[locale];
  const projectsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name:
      locale === "es"
        ? "Proyectos de Albert Castineira"
        : "Albert Castineira Projects",
    itemListElement: pageLiterals.projects.items.map((project, index) => ({
      "@type": "SoftwareSourceCode",
      position: index + 1,
      name: project.title,
      description: project.description,
      ...("githubUrl" in project && project.githubUrl
        ? { codeRepository: project.githubUrl }
        : {}),
      ...("liveUrl" in project && project.liveUrl
        ? { url: project.liveUrl }
        : {}),
      programmingLanguage: project.technologies,
      author: {
        "@type": "Person",
        name: "Albert Castineira",
      },
    })),
  };

  return (
    <main className="flex min-h-screen flex-col">
      <AosInit />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      <Header
        locale={locale}
        literals={pageLiterals.header}
        languageSwitcherLiterals={pageLiterals.languageSwitcher}
      />
      <HeroSection literals={pageLiterals.hero} />
      <AboutMeSection literals={pageLiterals.aboutMeSection} />
      <ExperienceSection literals={pageLiterals.experience} />
      <ProjectsSection literals={pageLiterals.projects} />
      <Footer literals={pageLiterals.footer} />
    </main>
  );
}
