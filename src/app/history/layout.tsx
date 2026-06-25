import type { Metadata } from "next";

const SITE_URL = "https://maebahesioru.github.io/hlo";

export const metadata: Metadata = {
  title: "沿革",
  description:
    "光淫文化解放機構（HLO）の沿革。2026年6月18日のアカウント開設からフォロワー400人達成までのあゆみ。",
  openGraph: {
    title: "沿革 | HLO",
    description:
      "2026年6月18日の設立からフォロワー400人達成までのあゆみ。",
  },
};

export default function HistoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "HLO トップ",
                item: SITE_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "沿革",
                item: `${SITE_URL}/history`,
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
