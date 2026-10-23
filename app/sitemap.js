const siteUrl = new URL(
  process.env.SITE_URL || "https://unicospaces.com"
).origin;

export default function sitemap() {
  return [
    {
      url: new URL("/", siteUrl).toString(),
    },
  ];
}