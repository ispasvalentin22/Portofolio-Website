import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import WavyLines from "@/components/WavyLines";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valentin Ispas | Full Stack Developer",
  description: "Personal portfolio showcasing my work, skills, and experience as a Full Stack Developer. Building premium and performant web applications.",
  keywords: ["Valentin Ispas", "Full Stack Developer", "React", "Next.js", "Portfolio", "Web Development"],
  openGraph: {
    title: "Valentin Ispas | Full Stack Developer",
    description: "Premium personal portfolio showcasing my software engineering projects and technical skills.",
    url: "https://your-portfolio-domain.vercel.app",
    siteName: "Valentin Ispas Portfolio",
    images: [
      {
        url: "/profile.jpg", // Replace with an absolute URL or specific OG image when deploying to your real domain
        width: 1200,
        height: 630,
        alt: "Valentin Ispas Portfolio Presentation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentin Ispas | Full Stack Developer",
    description: "Premium personal portfolio showcasing my software engineering projects and technical skills.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <ScrollProgress />
        <Navbar />
        <div className="background-wrapper">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
          <WavyLines />
        </div>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
