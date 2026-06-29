"use client";

import { motion } from "framer-motion";
import PageShell, { SectionHeading } from "@/lib/shell";
import { constitution, supplementary } from "@/lib/constitution";

const CHAPTER_NAMES = ["前文", "総則", "創設者及び本部", "会員", "役職", "意思決定及び投票", "活動及び公式アカウント", "アカウント管理及び安全", "処分", "外部連携及び財産", "解散", "改正"];

const PREAMBLE = [
  "本機構は、インターネットにおける表現の自由、匿名性及びプライバシーの尊重を基礎としつつ、デマ・ヘイトスピーチ・差別に反対し、創作の自由と多様な意見の共存を実現することを目指す。本憲法は、本機構の最高規範であり、本機構のすべての活動、決定及び下位の取決めは、本憲法に従わなければならない。",
];

function countArticles(): number {
  let n = 0;
  for (const ch of constitution) n += ch.articles.length;
  return n;
}

export default function RulesPage() {
  const totalArticles = countArticles();

  return (
    <PageShell>
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          <SectionHeading overline="CONSTITUTION" title="光淫文化解放機構憲法" as="h1" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-hlo-white/50 mb-2"
          >
            改正版 · 2026年6月29日施行 · 全{constitution.length}章 {totalArticles}条
          </motion.p>

          {/* ──── 前文 ──── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 p-6 md:p-10 border-l-[6px] border-hlo-red bg-white/[0.02]"
          >
            <h2 className="text-hlo-red text-lg font-black tracking-widest mb-4">前文</h2>
            {PREAMBLE.map((p, i) => (
              <p key={i} className="text-sm text-hlo-white/80 leading-relaxed">{p}</p>
            ))}
          </motion.div>

          {/* ──── 各章 ──── */}
          {constitution.map((chapter, ci) => (
            <motion.section
              key={chapter.num}
              id={`ch${chapter.num}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: ci * 0.03 }}
              className="mb-16"
            >
              {/* Chapter header */}
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/10">
                <div className="flex-shrink-0 w-10 h-10 bg-hlo-red flex items-center justify-center font-black text-sm text-white">
                  {chapter.num}
                </div>
                <h2 className="text-xl md:text-2xl font-black tracking-tight">
                  第{chapter.num}章　<span className="text-hlo-red/80">{chapter.title}</span>
                </h2>
              </div>

              {/* Articles */}
              <div className="space-y-8 pl-4 border-l-2 border-white/5">
                {chapter.articles.map((article) => (
                  <article key={article.num} className="pl-4">
                    <h3 className="text-sm font-black tracking-widest text-hlo-gold mb-3">
                      第{article.num}条（{article.title}）
                    </h3>
                    <div className="space-y-2">
                      {article.body.map((line, li) => (
                        <p
                          key={li}
                          className={`text-sm leading-relaxed ${
                            line.startsWith("　") || line.match(/^\d+\./)
                              ? "pl-4 text-hlo-white/60"
                              : "text-hlo-white/75"
                          }`}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </motion.section>
          ))}

          {/* ──── 附則 ──── */}
          {supplementary.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 p-6 md:p-10 border border-white/10 bg-white/[0.02]"
            >
              <h2 className="text-hlo-red text-lg font-black tracking-widest mb-6">附則</h2>
              <div className="space-y-6">
                {supplementary.map((s) => (
                  <div key={s.num}>
                    <p className="text-xs text-hlo-gold font-bold tracking-wider mb-1">
                      附則第{s.num}条（{s.title}）
                    </p>
                    {s.body.map((line, li) => (
                      <p key={li} className="text-sm text-hlo-white/70 leading-relaxed">{line}</p>
                    ))}
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ──── サイドバー目次 (PC) ──── */}
          <div className="hidden xl:block fixed right-8 top-32 w-48">
            <nav className="p-4 border border-white/10 bg-hlo-dark/95 backdrop-blur text-xs">
              <p className="text-hlo-red font-black tracking-widest mb-3 text-[10px]">目次</p>
              {CHAPTER_NAMES.map((name, i) => (
                <a
                  key={i}
                  href={i === 0 ? undefined : `#ch${i}`}
                  className="block py-1 text-hlo-white/40 hover:text-hlo-red transition-colors font-bold tracking-wider"
                >
                  {name}
                </a>
              ))}
            </nav>
          </div>

        </div>
      </section>
    </PageShell>
  );
}
