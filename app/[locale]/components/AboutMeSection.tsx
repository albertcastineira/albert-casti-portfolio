import { Space_Grotesk } from "next/font/google";
import type { AboutMeLiterals } from "../../../i18n/literals";

type AboutMeSectionProps = {
  literals: AboutMeLiterals;
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export default function AboutMeSection({ literals }: AboutMeSectionProps) {
  return (
    <section
      id="about"
      className="w-full flex justify-center px-4 py-8 md:py-10 lg:min-h-screen lg:items-center"
    >
      <div className="w-full max-w-6xl flex flex-col justify-center">
        <div className="flex flex-col items-center text-center gap-4 mb-8 md:mb-10">
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
          <p className="text-[#8C8C8C] text-sm md:text-lg leading-relaxed max-w-4xl text-center">
            {literals.description}
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {literals.blocks.map((block) => (
            <article
              key={block.title}
              className="bg-[#0A0A0A] border-l-4 border-(--primary) px-5 md:px-6 py-5 md:py-6"
            >
              <h3
                className={`${spaceGrotesk.className} text-white text-lg md:text-2xl leading-tight mb-6`}
              >
                {block.title}
              </h3>
              <div className="flex flex-wrap gap-4 md:gap-5">
                {block.items.map((item) => (
                  <span
                    key={item}
                    className={`${spaceGrotesk.className} text-sm md:text-base text-[#8C8C8C] border border-neutral-800 bg-[#151515] px-4 py-2`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
