import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["600", "800"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B2A6B",
};

export const metadata: Metadata = {
  title: "5e Serpraise | Corporate Training & Organizational Development",
  description:
    "5e Serpraise is an established HR, Corporate Training, and Organizational Development consulting organization. Enriching people. Strengthening organizations since 2003 in India & Australia.",
  icons: {
    icon: "/logo/5e-logo.svg",
    apple: "/logo/5e-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${manrope.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#EFE6D6] text-[#15151A] font-sans selection:bg-[#0B2A6B] selection:text-[#EFE6D6]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
