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
    `${spaceGrotesk.className} cursor-pointer inline-flex items-center justify-center rounded-full bg-(--primary) px-6 md:px-8 py-2.5 md:py-3 text-base md:text-xl text-(--primary-foreground) transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 ${className}`.trim();

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
