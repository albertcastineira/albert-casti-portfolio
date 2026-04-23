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
      className="w-full flex justify-center px-4 py-8 md:py-10 lg:min-h-screen lg:items-center"
    >
      <div className="w-full max-w-5xl">
        <div className="flex flex-col items-center text-center gap-4 mb-7 md:mb-8">
          <div className="inline-flex items-center border border-(--primary) px-6 py-1 text-(--primary)">
            <span className={`${spaceGrotesk.className} text-xs tracking-wide`}>
              {literals.sectionLabel}
            </span>
          </div>
          <h2
            className={`${spaceGrotesk.className} text-white text-3xl md:text-5xl font-bold`}
          >
            {literals.title}
          </h2>
        </div>

        <div className="space-y-5 md:space-y-6 pb-2">
          {literals.jobs.map((job, index) => (
            <SectionCard
              key={`${job.company}-${job.period}`}
              variant="experience"
              className="relative px-5 md:px-6 py-4 md:py-5"
            >
              {index === 0 && (
                <div className="absolute top-3 right-3 md:top-4 md:right-4 inline-flex items-center bg-[#222222] border-l-2 border-[#F9B5AC] px-3 py-1">
                  <span
                    className={`${spaceGrotesk.className} text-[#F9B5AC] text-xs tracking-wide`}
                  >
                    {literals.currentJobLabel}
                  </span>
                </div>
              )}

              <p className="text-[#7C7C7C] text-sm mb-3">{job.period}</p>
              <h3 className={`${spaceGrotesk.className} leading-tight mb-2.5`}>
                <span className="block text-white text-base md:text-xl">
                  {job.company}
                </span>
                <span className="block text-(--primary) font-semibold text-xl md:text-3xl">
                  {job.role}
                </span>
              </h3>
              <ul className="max-w-[90ch] space-y-2.5 text-[#8C8C8C] text-sm md:text-base leading-relaxed">
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
