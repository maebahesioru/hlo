import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "光淫文化解放機構 | HLO - Hikain Liberation Organization",
  description:
    "光淫文化解放機構（HLO）は、インターネット空間の自由を最大化し、著作権廃止・AI推進・匿名化推進を掲げる複垢組織です。2026年6月18日設立。",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "256x256", type: "image/x-icon" },
      { url: "/icon.png", sizes: "256x256", type: "image/png" },
    ],
    apple: "/icon.png",
  },
  openGraph: {
    title: "光淫文化解放機構 | HLO",
    description:
      "インターネットの自由と解放を。HLO - Hikain Liberation Organization",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "光淫文化解放機構 | HLO",
    description:
      "インターネットの自由と解放を。HLO - Hikain Liberation Organization",
  },
  keywords: [
    "HLO",
    "光淫文化解放機構",
    "Hikain Liberation Organization",
    "複垢",
    "ヒカマー",
    "決済主義",
    "リバタリアニズム",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-hlo-dark text-hlo-white">
        {children}
      </body>
    </html>
  );
}
