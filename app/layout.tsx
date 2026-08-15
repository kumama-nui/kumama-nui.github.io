import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kumama-nui.github.io"),
  title: "くままぬい / kumama_nui — Security Engineer",
  description:
    "Webアプリケーション診断・ペネトレーションテストの実務に従事し、脆弱性・攻撃技術を調査するSecurity Engineer / Vulnerability Researcher、くままぬいのポートフォリオ。",
  authors: [{ name: "くままぬい / kumama_nui" }],
  keywords: [
    "Security Engineer",
    "Vulnerability Researcher",
    "Web Security",
    "Penetration Testing",
    "kumama_nui",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://kumama-nui.github.io",
    siteName: "kumama_nui",
    title: "くままぬい / kumama_nui — Security Engineer",
    description:
      "Webアプリケーション診断・ペネトレーションテストの実務に従事し、脆弱性・攻撃技術の調査と検証を行っています。",
    images: [
      {
        url: "/og.png",
        width: 1734,
        height: 907,
        alt: "くままぬい — Security Engineer / Vulnerability Researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@kumama_nui",
    title: "くままぬい / kumama_nui — Security Engineer",
    description: "Security Engineer / Vulnerability Researcher based in Japan.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/avatar.png",
    apple: "/avatar.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080b18",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
