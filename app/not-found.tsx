import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import { FaBug, FaHouse } from "react-icons/fa6";
import { getLocale } from "next-intl/server";
import { isAppLocale, literals } from "../i18n/literals";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export default async function NotFound() {
  const locale = await getLocale();
  const resolvedLocale = isAppLocale(locale) ? locale : "es";
  const t = literals[resolvedLocale].notFound;
  const homeHref = `/${resolvedLocale}`;

  return (
    <main className="min-h-screen bg-[#131313] text-white flex items-center justify-center px-6">
      <div
        className={`${spaceGrotesk.className} w-full max-w-2xl border border-neutral-800 bg-neutral-950/80 p-8 sm:p-10`}
      >
        <p className="text-sm tracking-[0.2em] text-(--primary)">{t.code}</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">
          {t.title}
        </h1>
        <p className="mt-4 text-neutral-300 leading-relaxed">{t.description}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={homeHref}
            className="group inline-flex items-center justify-center rounded-full bg-(--primary) px-5 py-2.5 text-sm font-medium text-(--primary-foreground) transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(255,84,75,0.32)] hover:text-(--primary-foreground) active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary) focus-visible:ring-offset-2 focus-visible:ring-offset-[#131313]"
          >
            <FaHouse
              className="mr-2 h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
            {t.goHome}
          </Link>
          <a
            href="mailto:albertcastiaran@gmail.com?subject=Broken%20link%20report"
            className="inline-flex items-center border border-neutral-500 px-4 py-2 text-sm font-medium text-neutral-200 hover:border-white hover:text-white transition"
          >
            <FaBug className="mr-2 h-3.5 w-3.5" aria-hidden="true" />
            {t.reportBrokenLink}
          </a>
        </div>
      </div>
    </main>
  );
}
