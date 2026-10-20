import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-canela",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "UNICO | Builders & Developers",
  description:
    "We design and build enduring spaces where everyday moments thrive. From solid foundations to intentional layouts, every detail is engineered to support the way you truly live.",
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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0a0c10] text-white font-sans selection:bg-[#c5a059]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
