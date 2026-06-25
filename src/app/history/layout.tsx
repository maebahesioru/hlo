import type { Metadata } from "next";

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
  return children;
}
