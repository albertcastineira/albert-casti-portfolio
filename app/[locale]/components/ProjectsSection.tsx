import { ArrowUpRight, Hammer } from "lucide-react";
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
      className="futuristic-section w-full px-4 py-8 md:py-10 lg:min-h-screen"
    >
      <div
        data-aos="fade-up"
        data-aos-delay="140"
        className="mx-auto flex w-full max-w-6xl flex-col justify-center lg:min-h-[calc(100svh-5rem)]"
      >
        <div className="mb-8 flex flex-col items-center gap-4 text-center md:mb-10">
          <div className="section-kicker inline-flex items-center">
            <span className={`${spaceGrotesk.className} section-kicker-text`}>
              {literals.sectionLabel}
            </span>
          </div>
          <h2
            className={`${spaceGrotesk.className} text-3xl font-bold text-white md:text-5xl`}
          >
            {literals.title}
          </h2>
          <p className="ui-muted-copy max-w-4xl text-sm md:text-lg">
            {literals.description}
          </p>
        </div>

        <div className="grid gap-5 md:gap-6">
          <SectionCard
            variant="featuredProject"
            aosDelay={0}
            className="featured-project-glow shadow-[0_22px_50px_-30px_rgba(255,84,75,0.7)] p-5 md:p-8"
          >
            <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <p
                  className={`${spaceGrotesk.className} mb-3 inline-flex items-center border border-(--primary) bg-[#211312] px-3 py-1 text-[11px] tracking-[0.16em] text-(--primary)`}
                >
                  {literals.featuredLabel}
                </p>
                <h3
                  className={`${spaceGrotesk.className} text-2xl font-semibold text-white md:text-4xl`}
                >
                  {featuredProject.title}
                </h3>
                <p className="ui-muted-copy mt-4 max-w-2xl text-sm md:text-base">
                  {featuredProject.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {getLiveUrl(featuredProject) && (
                  <a
                    href={getLiveUrl(featuredProject)}
                    target="_blank"
                    rel="noreferrer"
                    className={`${spaceGrotesk.className} project-action-btn inline-flex items-center gap-2 rounded-full border border-(--primary) px-4 py-2 text-sm text-(--primary) transition hover:bg-(--primary) hover:text-black`}
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
                    className={`${spaceGrotesk.className} project-action-btn inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-sm text-white transition hover:border-white`}
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
            {otherProjects.map((project, index) => (
              <SectionCard
                key={project.title}
                variant="project"
                aosDelay={80 + index * 75}
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
                        className="project-icon-btn rounded-full border border-neutral-800 p-2 text-white"
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
                        className="project-icon-btn rounded-full border border-neutral-800 p-2 text-white"
                      >
                        <FaGithub className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="ui-muted-copy mb-6 text-sm md:text-base">
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

            <SectionCard
              variant="project"
              aosDelay={80 + otherProjects.length * 75}
              className="coming-soon-card flex h-full min-h-65 flex-col px-5 py-5 md:px-6 md:py-6"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <h3
                  className={`${spaceGrotesk.className} text-xl font-semibold leading-tight text-[#D0D0D0] md:text-2xl`}
                >
                  {literals.comingSoonTitle}
                </h3>
                <div className="rounded-full border border-[#454545] bg-[#1B1B1B] p-2 text-[#B5B5B5]">
                  <Hammer size={16} aria-hidden="true" />
                </div>
              </div>

              <p className="ui-muted-copy mb-6 text-sm md:text-base">
                {literals.comingSoonDescription}
              </p>

              <p
                className={`${spaceGrotesk.className} ui-status-badge mt-auto w-fit`}
              >
                {literals.workInProgressLabel}
              </p>
            </SectionCard>
          </div>
        </div>
      </div>
    </section>
  );
}
