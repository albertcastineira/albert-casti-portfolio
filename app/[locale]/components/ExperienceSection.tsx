import { Space_Grotesk } from "next/font/google";
import type { ExperienceLiterals } from "../../../i18n/literals";

type ExperienceSectionProps = {
  literals: ExperienceLiterals;
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export default function ExperienceSection({
  literals,
}: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="w-full flex justify-center px-4 py-8 md:min-h-screen md:items-center md:py-10"
    >
      <div className="w-full max-w-5xl md:max-h-[calc(100svh-5rem)] md:overflow-y-auto">
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
            <article
              key={`${job.company}-${job.period}`}
              className="relative bg-[#0A0A0A] border-l-4 border-(--primary) px-5 md:px-6 py-4 md:py-5"
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
              <h3
                className={`${spaceGrotesk.className} text-xl md:text-3xl leading-tight mb-2.5`}
              >
                <span className="text-(--primary) font-semibold">
                  {job.role}
                </span>
                <span className="text-white"> - {job.company}</span>
              </h3>
              <p className="text-[#8C8C8C] text-sm md:text-base leading-relaxed max-w-[90ch]">
                {job.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
