import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import { isAppLocale, literals } from "../../i18n/literals";
import { siteUrl } from "../../lib/seo";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const locales = ["en", "es"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = isAppLocale(locale) ? locale : "es";
  const pageTitle = "Albert Castineira | Full Stack Developer";
  const heroDescription = literals[resolvedLocale].hero.description;

  return {
    title: {
      absolute: pageTitle,
    },
    description: heroDescription,
    alternates: {
      canonical: `${siteUrl}/${resolvedLocale}`,
      languages: {
        es: `${siteUrl}/es`,
        en: `${siteUrl}/en`,
        "x-default": `${siteUrl}/es`,
      },
    },
    openGraph: {
      title: pageTitle,
      description: heroDescription,
      locale: resolvedLocale === "es" ? "es_ES" : "en_US",
      url: `${siteUrl}/${resolvedLocale}`,
      images: [
        {
          url: `${siteUrl}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "Albert Castineira portfolio preview",
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = isAppLocale(locale) ? locale : "es";

  const messages = await getMessages();
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Albert Castineira",
    alternateName: "Albert Dev",
    url: siteUrl,
    image: `${siteUrl}/AlbertCastiñeira.jpg`,
    jobTitle: "Full Stack Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barcelona",
      addressCountry: "ES",
    },
    sameAs: [
      "https://www.linkedin.com/in/albert-casti%C3%B1eira-aranda/",
      "https://github.com/albertcastineira",
    ],
  };
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Albert Castineira Portfolio",
    url: siteUrl,
    inLanguage: ["es", "en"],
    publisher: {
      "@type": "Person",
      name: "Albert Castineira",
    },
  };

  return (
    <html
      lang={resolvedLocale}
      className={`${interFont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#131313]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
