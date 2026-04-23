import type { ReactNode } from "react";

type SectionCardVariant =
  | "experience"
  | "project"
  | "featuredProject"
  | "about";

type SectionCardProps = {
  variant: SectionCardVariant;
  className?: string;
  children: ReactNode;
};

const variantClasses: Record<SectionCardVariant, string> = {
  experience: "bg-[#0A0A0A] border-l-4 border-(--primary)",
  project:
    "bg-[#0D0D0D] border border-neutral-800 border-t-2 border-t-(--primary)",
  featuredProject:
    "bg-[#111111] border border-(--primary) shadow-[0_22px_50px_-30px_rgba(255,84,75,0.7)]",
  about: "bg-[#0A0A0A] border border-neutral-800 border-l-4 border-l-[#6C6C6C]",
};

export default function SectionCard({
  variant,
  className = "",
  children,
}: SectionCardProps) {
  return (
    <article className={`${variantClasses[variant]} ${className}`.trim()}>
      {children}
    </article>
  );
}
