import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lusrodri.me"),
  title: {
    default: "Lucas Rodrigues | Engenheiro de Software",
    template: "%s | Lucas Rodrigues",
  },
  description:
    "Engenheiro de Software fascinado por tecnologias. Criador de logus.cloud, educando.app, ihatebackground.com e checkbefore.click.",
  keywords: [
    "Lucas Rodrigues",
    "Engenheiro de Software",
    "Desenvolvedor",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "logus.cloud",
    "educando.app",
    "ihatebackground.com",
    "checkbefore.click",
  ],
  authors: [{ name: "Lucas Rodrigues", url: "https://lusrodri.me" }],
  creator: "Lucas Rodrigues",
  publisher: "Lucas Rodrigues",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://lusrodri.me",
    siteName: "Lucas Rodrigues",
    title: "Lucas Rodrigues | Engenheiro de Software",
    description:
      "Engenheiro de Software fascinado por tecnologias. Criador de logus.cloud, educando.app, ihatebackground.com e checkbefore.click.",
    images: [
      {
        url: "/lusrodri-logo.png",
        width: 1200,
        height: 630,
        alt: "Lucas Rodrigues - Engenheiro de Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lusrodri",
    creator: "@lusrodri",
    title: "Lucas Rodrigues | Engenheiro de Software",
    description:
      "Engenheiro de Software fascinado por tecnologias. Criador de logus.cloud, educando.app, ihatebackground.com e checkbefore.click.",
    images: ["/lusrodri-logo.png"],
  },
  alternates: {
    canonical: "https://lusrodri.me",
  },
  icons: {
    icon: "/lusrodri-logo.png",
    shortcut: "/lusrodri-logo.png",
    apple: "/lusrodri-logo.png",
  },
  manifest: "/manifest.json",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://lusrodri.me" />
        <meta name="theme-color" content="#E9F5FF" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
