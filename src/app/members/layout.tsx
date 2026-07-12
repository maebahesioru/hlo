import type { Metadata } from "next";

const SITE_URL = "http://hlo.hikamer.f5.si";

export const metadata: Metadata = {
  title: "構成個体",
  description:
    "光淫文化解放機構（HLO）の所属メンバー一覧。ログイン勢11名、オブザーバー5名、非カマー2名の全16名を紹介。",
  openGraph: {
    title: "構成個体 | HLO",
    description: "ログイン勢11名・オブザーバー5名、全16名のメンバーを紹介。",
  },
};

export default function MembersLayout({ children }: { children: React.ReactNode }) {
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
                name: "構成個体",
                item: `${SITE_URL}/members`,
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
