const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

if (!configuredSiteUrl && process.env.NODE_ENV === "production") {
  throw new Error(
    "NEXT_PUBLIC_SITE_URL must be set in production to generate correct canonical URLs and sitemaps.",
  );
}

export const siteUrl = (configuredSiteUrl ?? "http://localhost:3000").replace(
  /\/+$/,
  "",
);

export const siteUrlObject = new URL(siteUrl);
