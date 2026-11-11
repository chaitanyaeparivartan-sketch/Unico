import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata = {
  title: "UNICO | Builders & Developers - Built for the Life Inside",
  description:
    "We design and build enduring spaces where everyday moments thrive. From solid foundations to intentional layouts, every detail is engineered to support the way you truly live.",
  metadataBase: new URL("https://unico-content.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "UNICO | Builders & Developers",
    description:
      "We design and build enduring spaces where everyday moments thrive. From solid foundations to intentional layouts, every detail is engineered to support the way you truly live.",
    url: "https://unico-content.com",
    siteName: "UNICO",
    images: [
      {
        url: "/images/hero/hero-slide-1.webp",
        width: 1672,
        height: 941,
        alt: "UNICO Builders & Developers",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UNICO | Builders & Developers",
    description:
      "We design and build enduring spaces where everyday moments thrive.",
    images: ["/images/hero/hero-slide-1.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "UNICO Builders & Developers",
  description:
    "We design and build enduring spaces where everyday moments thrive. From solid foundations to intentional layouts, every detail is engineered to support the way you truly live.",
  url: "https://unico-content.com",
  logo: "https://unico-content.com/images/logo/unico-logo.webp",
  image: "https://unico-content.com/images/hero/hero-slide-1.webp",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Hyderabad",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-[#0a0c10] text-white selection:bg-[#7F5E12]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
