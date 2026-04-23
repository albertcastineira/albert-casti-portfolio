import { ArrowUpRight } from "lucide-react";
import { Space_Grotesk } from "next/font/google";
import { FaGithub } from "react-icons/fa";
import type { ProjectsLiterals } from "../../../i18n/literals";
import SectionCard from "./SectionCard";

type ProjectsSectionProps = {
  literals: ProjectsLiterals;
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export default function ProjectsSection({ literals }: ProjectsSectionProps) {
  const [featuredProject, ...otherProjects] = literals.items;

  const getLiveUrl = (project: (typeof literals.items)[number]) =>
    "liveUrl" in project ? project.liveUrl : undefined;

  const getGithubUrl = (project: (typeof literals.items)[number]) =>
    "githubUrl" in project ? project.githubUrl : undefined;

  return (
    <section
      id="projects"
      className="w-full px-4 py-8 md:py-10 lg:min-h-screen"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-center lg:min-h-[calc(100svh-5rem)]">
        <div className="mb-8 flex flex-col items-center gap-4 text-center md:mb-10">
          <div className="inline-flex items-center border border-(--primary) px-6 py-1 text-(--primary)">
            <span className={`${spaceGrotesk.className} text-xs tracking-wide`}>
              {literals.sectionLabel}
            </span>
          </div>
          <h2
            className={`${spaceGrotesk.className} text-3xl font-bold text-white md:text-5xl`}
          >
            {literals.title}
          </h2>
          <p className="max-w-4xl text-sm leading-relaxed text-[#8C8C8C] md:text-lg">
            {literals.description}
          </p>
        </div>

        <div className="grid gap-5 md:gap-6">
          <SectionCard variant="featuredProject" className="p-5 md:p-8">
            <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <p
                  className={`${spaceGrotesk.className} mb-3 inline-flex items-center border border-(--primary) bg-[#211312] px-3 py-1 text-xs tracking-[0.24em] text-(--primary)`}
                >
                  {literals.featuredLabel}
                </p>
                <h3
                  className={`${spaceGrotesk.className} text-2xl font-semibold text-white md:text-4xl`}
                >
                  {featuredProject.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#8C8C8C] md:text-base">
                  {featuredProject.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {getLiveUrl(featuredProject) && (
                  <a
                    href={getLiveUrl(featuredProject)}
                    target="_blank"
                    rel="noreferrer"
                    className={`${spaceGrotesk.className} inline-flex items-center gap-2 rounded-full border border-(--primary) px-4 py-2 text-sm text-(--primary) transition hover:bg-(--primary) hover:text-black`}
                  >
                    {literals.liveLabel}
                    <ArrowUpRight size={16} />
                  </a>
                )}
                {getGithubUrl(featuredProject) && (
                  <a
                    href={getGithubUrl(featuredProject)}
                    target="_blank"
                    rel="noreferrer"
                    className={`${spaceGrotesk.className} inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-sm text-white transition hover:border-white`}
                  >
                    {literals.sourceLabel}
                    <FaGithub className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {featuredProject.technologies.map((technology) => (
                <span
                  key={technology}
                  className={`${spaceGrotesk.className} border border-neutral-800 bg-[#151515] px-4 py-2 text-sm text-[#BDBDBD]`}
                >
                  {technology}
                </span>
              ))}
            </div>
          </SectionCard>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {otherProjects.map((project) => (
              <SectionCard
                key={project.title}
                variant="project"
                className="flex h-full flex-col px-5 py-5 md:px-6 md:py-6"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <h3
                    className={`${spaceGrotesk.className} text-xl font-semibold leading-tight text-white md:text-2xl`}
                  >
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {getLiveUrl(project) && (
                      <a
                        href={getLiveUrl(project)}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${literals.liveLabel} ${project.title}`}
                        className="rounded-full border border-neutral-800 p-2 text-white transition hover:border-(--primary) hover:text-(--primary)"
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                    {getGithubUrl(project) && (
                      <a
                        href={getGithubUrl(project)}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${literals.sourceLabel} ${project.title}`}
                        className="rounded-full border border-neutral-800 p-2 text-white transition hover:border-(--primary) hover:text-(--primary)"
                      >
                        <FaGithub className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-[#8C8C8C] md:text-base">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-3">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className={`${spaceGrotesk.className} border border-neutral-800 bg-[#151515] px-3 py-2 text-xs text-[#BDBDBD] md:text-sm`}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </SectionCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
