import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "構成個体",
  description:
    "光淫文化解放機構（HLO）の所属メンバー一覧。ログイン勢6名、オブザーバー5名、非カマー1名の全11名を紹介。",
  openGraph: {
    title: "構成個体 | HLO",
    description: "ログイン勢6名・オブザーバー5名、全11名のメンバーを紹介。",
  },
};

export default function MembersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
