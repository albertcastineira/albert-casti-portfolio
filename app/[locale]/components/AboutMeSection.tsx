import { Space_Grotesk } from "next/font/google";
import { Code2, Languages, Layers3, ShieldCheck, Wrench } from "lucide-react";
import type { AboutMeLiterals } from "../../../i18n/literals";
import SectionCard from "./SectionCard";

type AboutMeSectionProps = {
  literals: AboutMeLiterals;
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

function getBlockIcon(title: string) {
  if (title === "SKILLS") {
    return ShieldCheck;
  }

  if (
    title === "LENGUAJES_DE_PROGRAMACION" ||
    title === "PROGRAMMING_LANGUAGES"
  ) {
    return Languages;
  }

  if (title === "FRAMEWORKS") {
    return Layers3;
  }

  if (title === "HERRAMIENTAS_&_IDE" || title === "TOOLS_&_IDE") {
    return Wrench;
  }

  return Code2;
}

export default function AboutMeSection({ literals }: AboutMeSectionProps) {
  return (
    <section
      id="about"
      className="futuristic-section w-full flex justify-center px-4 py-8 md:py-10 lg:min-h-screen lg:items-center"
    >
      <div
        data-aos="fade-up"
        data-aos-delay="80"
        className="w-full max-w-6xl flex flex-col justify-center"
      >
        <div className="flex flex-col items-center text-center gap-4 mb-8 md:mb-10">
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
          <p className="ui-muted-copy max-w-4xl text-center text-sm md:text-lg">
            {literals.description}
          </p>
        </div>

        <div className="w-full grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {literals.blocks.map((block, index) =>
            (() => {
              const BlockIcon = getBlockIcon(block.title);

              return (
                <SectionCard
                  key={block.title}
                  variant="about"
                  aosDelay={index * 90}
                  className="px-5 md:px-6 py-5 md:py-6"
                >
                  <div className="mb-6 flex items-center gap-3">
                    <div className="border border-(--ui-border-soft) bg-[#141414] p-2.5 text-(--primary)">
                      <BlockIcon size={18} aria-hidden="true" />
                    </div>
                    <h3
                      className={`${spaceGrotesk.className} text-white text-lg md:text-2xl leading-tight`}
                    >
                      {block.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-4 md:gap-5">
                    {block.items.map((item) => (
                      <span
                        key={item}
                        className={`${spaceGrotesk.className} border border-neutral-800 bg-[#151515] px-4 py-2 text-sm text-[#9A9A9A] md:text-base`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </SectionCard>
              );
            })(),
          )}
        </div>
      </div>
    </section>
  );
}
