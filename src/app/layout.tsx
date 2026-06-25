import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://maebahesioru.github.io/hlo";
const SITE_NAME = "光淫文化解放機構 | HLO";
const DESCRIPTION =
  "光淫文化解放機構（HLO）は、インターネット空間の自由を最大化し、著作権廃止・AI推進・匿名化推進を掲げる複垢組織です。2026年6月18日設立。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | HLO",
  },
  description: DESCRIPTION,
  icons: {
    icon: [
      { url: "/hlo/favicon.ico", sizes: "256x256", type: "image/x-icon" },
      { url: "/hlo/icon.png", sizes: "256x256", type: "image/png" },
    ],
    apple: "/hlo/icon.png",
  },
  openGraph: {
    title: SITE_NAME,
    description: "インターネットの自由と解放を。HLO - Hikain Liberation Organization",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/hlo/ogp.png",
        width: 1200,
        height: 630,
        alt: "光淫文化解放機構 HLO",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: SITE_NAME,
    description: "インターネットの自由と解放を。HLO - Hikain Liberation Organization",
    images: ["/hlo/ogp.png"],
  },
  keywords: [
    "HLO", "光淫文化解放機構", "Hikain Liberation Organization",
    "複垢", "ヒカマー", "決済主義", "リバタリアニズム",
    "アナーキズム", "匿名化", "著作権廃止", "AI推進",
  ],
  alternates: {
    canonical: SITE_URL,
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <head>
        <meta name="theme-color" content="#08080f" />
        <meta name="color-scheme" content="dark" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap" as="style" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "光淫文化解放機構",
              alternateName: "HLO",
              description: DESCRIPTION,
              url: SITE_URL,
              logo: `${SITE_URL}/icon.png`,
              foundingDate: "2026-06-18",
              founder: {
                "@type": "Person",
                name: "十字架_mania",
                url: "https://x.com/maebahesioru2",
              },
              sameAs: [
                "https://x.com/hikain_lib",
                "https://x.com/maebahesioru2",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-hlo-dark text-hlo-white">
        {children}
      </body>
    </html>
  );
}
