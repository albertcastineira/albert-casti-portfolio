import { Space_Grotesk } from "next/font/google";

type BadgeProps = {
  literal: string;
  className?: string;
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export default function Badge({ literal, className = "" }: BadgeProps) {
  return (
    <span
      className={`${spaceGrotesk.className} inline-flex items-center justify-center text-center leading-[1.15] bg-[#353535] border-l-2 border-[#F9B5AC] px-3 py-1 text-[#F9B5AC] ${className}`.trim()}
    >
      {literal}
    </span>
  );
}
