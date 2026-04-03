import Header from "./components/Header";
import AboutMeSection from "./components/AboutMeSection";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
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

  return (
    <main className="flex min-h-screen flex-col">
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
