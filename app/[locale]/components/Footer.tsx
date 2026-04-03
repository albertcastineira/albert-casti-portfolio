import { Space_Grotesk } from "next/font/google";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { FooterLiterals } from "../../../i18n/literals";

type FooterProps = {
  literals: FooterLiterals;
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export default function Footer({ literals }: FooterProps) {
  return (
    <footer className="w-full bg-[#0E0E0E] border-t border-neutral-900 p-4">
      <div
        className={`${spaceGrotesk.className} mx-auto flex w-full max-w-7xl items-center justify-between gap-4`}
      >
        <p className="text-xs text-[#8C8C8C] md:text-sm">
          {literals.copyright}
        </p>

        <div className="flex items-center gap-3">
          <a
            href={literals.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={literals.linkedinAriaLabel}
            className="text-[#8C8C8C] transition hover:text-(--primary)"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a
            href={literals.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={literals.githubAriaLabel}
            className="text-[#8C8C8C] transition hover:text-(--primary)"
          >
            <FaGithub className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
