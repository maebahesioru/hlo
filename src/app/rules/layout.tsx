import type { Metadata } from "next";

const SITE_URL = "https://maebahesioru.github.io/hlo";

export const metadata: Metadata = {
  title: "憲法",
  description:
    "光淫文化解放機構憲法（改正版）。全11章55条。インターネットの自由、匿名性、反差別を掲げるHLOの最高規範。",
  openGraph: {
    title: "憲法 | HLO",
    description:
      "全11章55条。インターネットの自由、匿名性、反差別を掲げるHLOの最高規範。",
  },
};

export default function RulesLayout({ children }: { children: React.ReactNode }) {
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
                name: "憲法",
                item: `${SITE_URL}/rules`,
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
