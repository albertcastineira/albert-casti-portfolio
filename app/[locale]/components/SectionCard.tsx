import type { ReactNode } from "react";

type SectionCardVariant =
  | "experience"
  | "project"
  | "featuredProject"
  | "about";

type SectionCardProps = {
  variant: SectionCardVariant;
  className?: string;
  aosDelay?: number;
  children: ReactNode;
};

const variantClasses: Record<SectionCardVariant, string> = {
  experience: "bg-[#0A0A0A] border-l-4 border-(--primary)",
  project:
    "bg-[#0D0D0D] border border-neutral-800 border-t-2 border-t-(--primary)",
  featuredProject: "bg-[#0D0D0D] border border-(--primary)",
  about: "bg-[#0A0A0A] border border-neutral-800 border-l-4 border-l-[#6C6C6C]",
};

const variantAos: Record<SectionCardVariant, string> = {
  about: "fade-right",
  experience: "fade-left",
  project: "zoom-in-up",
  featuredProject: "fade-up",
};

const variantDuration: Record<SectionCardVariant, number> = {
  about: 700,
  experience: 700,
  project: 650,
  featuredProject: 800,
};

export default function SectionCard({
  variant,
  className = "",
  aosDelay,
  children,
}: SectionCardProps) {
  return (
    <article
      data-aos={variantAos[variant]}
      data-aos-duration={variantDuration[variant]}
      data-aos-delay={aosDelay}
      className={`futuristic-card ${variantClasses[variant]} ${className}`.trim()}
    >
      {children}
    </article>
  );
}
