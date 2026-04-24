import { Square } from "lucide-react";
import { Space_Grotesk } from "next/font/google";
import type { ExperienceLiterals } from "../../../i18n/literals";
import SectionCard from "./SectionCard";

type ExperienceSectionProps = {
  literals: ExperienceLiterals;
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

function getDescriptionPoints(description: string) {
  return description
    .split(/(?<=[.!?])\s+/)
    .map((point) => point.trim())
    .filter(Boolean);
}

export default function ExperienceSection({
  literals,
}: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="futuristic-section w-full flex justify-center px-4 py-8 md:py-10 lg:min-h-screen lg:items-center"
    >
      <div data-aos="fade-up" data-aos-delay="110" className="w-full max-w-5xl">
        <div className="flex flex-col items-center text-center gap-4 mb-7 md:mb-8">
          <div className="section-kicker inline-flex items-center">
            <span className={`${spaceGrotesk.className} section-kicker-text`}>
              {literals.sectionLabel}
            </span>
          </div>
          <h2
            className={`${spaceGrotesk.className} text-white text-3xl md:text-5xl font-bold`}
          >
            {literals.title}
          </h2>
        </div>

        <div className="space-y-5 pb-2 md:space-y-6">
          {literals.jobs.map((job, index) => (
            <SectionCard
              key={`${job.company}-${job.period}`}
              variant="experience"
              aosDelay={index * 85}
              className="relative px-5 md:px-6 py-4 md:py-5"
            >
              {index === 0 && (
                <div className="absolute top-2 right-2 md:top-4 md:right-4">
                  <span
                    className={`${spaceGrotesk.className} inline-flex items-center justify-center text-center border-l-2 border-[#F9B5AC] bg-[#353535] px-2 py-1 text-[10px] leading-[1.15] text-[#F9B5AC] md:px-3 md:py-1 md:text-sm`}
                  >
                    {literals.currentJobLabel}
                  </span>
                </div>
              )}

              <p className={`${spaceGrotesk.className} ui-status-badge mb-3`}>
                {job.period}
              </p>
              <h3 className={`${spaceGrotesk.className} leading-tight mb-2.5`}>
                <span className="block text-white text-base md:text-xl">
                  {job.company}
                </span>
                <span className="block text-(--primary) font-semibold text-xl md:text-3xl">
                  {job.role}
                </span>
              </h3>
              <ul className="ui-muted-copy max-w-[90ch] space-y-2.5 text-sm md:text-base">
                {getDescriptionPoints(job.description).map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <Square
                      aria-hidden="true"
                      size={10}
                      className="mt-1.5 shrink-0 fill-current text-current"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </SectionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
