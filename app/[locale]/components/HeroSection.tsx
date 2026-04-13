import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { HeroLiterals } from "../../../i18n/literals";
import Badge from "./Badge";
import Button from "./Button";

type HeroSectionProps = {
  literals: HeroLiterals;
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export default function HeroSection({ literals }: HeroSectionProps) {
  const subject = encodeURIComponent("Portfolio contact");
  const mailtoHref = `mailto:${literals.contactEmail}?subject=${subject}`;

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100svh-80px)] flex items-center justify-center px-4 py-10 overflow-hidden"
    >
      <div className="absolute top-3 sm:top-4 md:top-6 lg:top-8 inset-x-0 pointer-events-none select-none">
        <div className="max-w-7xl mx-auto px-4 flex justify-end">
          <div
            className={`${spaceGrotesk.className} text-right text-[9px] sm:text-[10px] md:text-[12px] lg:text-[13px] tracking-wide leading-tight text-[#262626]`}
          >
            {literals.decoTopRight.map((line) => (
              <p className="text-[#262626]" key={line}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 inset-x-0 pointer-events-none select-none">
        <div className="max-w-7xl mx-auto px-4 flex justify-start">
          <div
            className={`${spaceGrotesk.className} text-[9px] sm:text-[10px] md:text-[12px] lg:text-[13px] tracking-wide leading-tight text-[#262626]`}
          >
            {literals.decoBottomLeft.map((line) => (
              <p className="text-[#262626]" key={line}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-10 gap-10 md:gap-14 items-center">
        <div className="md:col-span-4 flex justify-center">
          <div className="w-full max-w-55 md:max-w-[320px] aspect-square overflow-hidden border-4 border-white bg-neutral-900">
            <Image
              src="/AlbertCastiñeira.jpg"
              alt={literals.imageAlt}
              width={700}
              height={700}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left gap-5">
          <Badge literal={literals.badge} />
          <h1
            className={`${spaceGrotesk.className} text-white md:text-6xl text-4xl font-bold leading-tight max-w-3xl`}
          >
            {literals.title}
          </h1>
          <p className="text-[#8C8C8C] text-base md:text-lg leading-relaxed max-w-2xl">
            {literals.description}
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-5">
            <Button text={literals.button} href={mailtoHref} />
            <a
              href={literals.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--primary) hover:opacity-80 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-8 h-8 sm:w-9 sm:h-9" />
            </a>
            <a
              href={literals.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--primary) hover:opacity-80 transition"
              aria-label="GitHub"
            >
              <FaGithub className="w-8 h-8 sm:w-9 sm:h-9" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
