const siteUrl = new URL(
  process.env.SITE_URL || "https://unicospaces.com"
).origin;

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}