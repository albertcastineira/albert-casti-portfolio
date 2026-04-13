import { Space_Grotesk } from "next/font/google";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

type BaseButtonProps = {
  text: ReactNode;
  className?: string;
};

type AsButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type AsLinkProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = AsButtonProps | AsLinkProps;

export default function Button({
  text,
  className = "",
  ...props
}: ButtonProps) {
  const classes =
    `${spaceGrotesk.className} group cursor-pointer inline-flex items-center justify-center rounded-full bg-(--primary) px-6 md:px-8 py-2.5 md:py-3 text-base md:text-xl font-medium text-(--primary-foreground) transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(255,84,75,0.32)] hover:text-(--primary-foreground) active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary) focus-visible:ring-offset-2 focus-visible:ring-offset-[#131313] disabled:cursor-not-allowed disabled:opacity-60 disabled:transform-none disabled:shadow-none ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;

    return (
      <a href={href} className={classes} {...anchorProps}>
        {text}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = props as AsButtonProps;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {text}
    </button>
  );
}
