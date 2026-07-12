"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PageShell, { SectionHeading } from "@/lib/shell";
import { politicalThoughts, politicalPositions, ideologies } from "@/lib/data";

/* ── Page ── */

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <PageShell>
      {/* ═══════ HERO ═══════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 stripe-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-hlo-dark/80 via-hlo-dark/95 to-hlo-dark" />

        <div className="absolute left-0 top-0 bottom-0 w-[28px] md:w-[72px] bg-hlo-red/80" />
        <div className="absolute right-0 top-0 bottom-0 w-[28px] md:w-[72px] bg-hlo-navy/80 border-l border-white/5" />

        <div
          className="absolute right-[10%] top-[12%] w-[180px] md:w-[260px] aspect-square opacity-[0.06]"
          style={{
            background: `
              linear-gradient(45deg, transparent 43%, #c1121f 43% 57%, transparent 57%),
              linear-gradient(-45deg, transparent 43%, #c9a84c 43% 57%, transparent 57%),
              radial-gradient(circle at center, transparent 0 34%, #f0ece4 35% 38%, transparent 39%)
            `,
          }}
        />

        <motion.article
          className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 py-32 md:py-40"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 border border-hlo-red/40 bg-hlo-red/5 text-hlo-red text-xs font-bold tracking-[0.2em] mb-8"
          >
            <span className="w-1.5 h-1.5 bg-hlo-red rounded-full animate-pulse" />
            COMPLEX ACCOUNT ORGANIZATION
          </motion.article>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.1]"
          >
            <span className="block text-hlo-red">光淫文化</span>
            <span className="block">解放機構</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-base sm:text-lg md:text-xl text-hlo-white/60 font-medium tracking-widest"
          >
            HIKAIN LIBERATION ORGANIZATION
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t-4 border-hlo-red text-base sm:text-lg md:text-xl text-hlo-white/80 leading-relaxed max-w-xl"
          >
            インターネットの自由と解放を。<br />
            すべての規制から、表現を解き放て。
          </motion.p>

          <motion.article
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 h-3 w-full max-w-md flex"
          >
            <span className="flex-1 bg-hlo-red" />
            <span className="flex-1 bg-hlo-gold" />
            <span className="flex-1 bg-white/10" />
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="https://x.com/hikain_lib"
              target="_blank"
              rel="me noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border-2 border-hlo-red bg-hlo-red text-white font-bold text-sm tracking-widest hover:bg-transparent hover:text-hlo-red transition-all duration-300 shadow-lg shadow-hlo-red/20"
            >
              <span className="text-lg">𝕏</span>
              HLO をフォロー
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-hlo-white/80 font-bold text-sm tracking-widest hover:border-hlo-red hover:text-hlo-red transition-all duration-300"
            >
              <span>↓</span>
              詳細を見る
            </a>
          </motion.article>
        </motion.article>
      </section>

      {/* ═══════ PURPOSE ═══════ */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeading overline="PURPOSE" title="私たちの目的" />

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="p-6 border-l-4 border-hlo-red bg-white/[0.02]">
              <p className="text-sm text-hlo-white/80 leading-relaxed">
                私たち<span className="text-hlo-red font-bold">光淫文化解放機構（HLO）</span>は、
                インターネット空間における<b>表現の自由の完全な解放</b>を目的として結成された複垢組織です。
              </p>
              <p className="mt-4 text-sm text-hlo-white/70 leading-relaxed">
                著作権やDMCA、開示請求といった時代遅れの規制を撤廃し、
                AI技術の推進と匿名性の確保によって、誰もが自由に創作・発信・共有できる
                ネット文化の実現を目指します。
              </p>
            </div>
            <div className="p-6 border-l-4 border-hlo-gold bg-white/[0.02]">
              <p className="text-sm text-hlo-white/80 leading-relaxed">
                同時に、<b>出典の明示とクレジット文化</b>を尊重し、
                無断転載やパクツイによる創作の搾取には断固反対します。
              </p>
              <p className="mt-4 text-sm text-hlo-white/70 leading-relaxed">
                古参・新規の別なくすべての参加者を対等に扱い、
                差別・排外主義・権威主義に<span className="text-hlo-red font-bold">「否」</span>を突きつけ、
                攻撃的ミームをも武器に、自由で公正なインターネットを勝ち取ります。
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      {/* ═══════ ABOUT ═══════ */}
      <section id="about" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeading overline="OVERVIEW" title="機構概要" />

          <div className="grid md:grid-cols-5 gap-8">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 p-6 border border-white/10 bg-white/[0.02]"
            >
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ["名称", "光淫文化解放機構"],
                    ["英称", "Hikain Liberation Organization"],
                    ["略称", "HLO"],
                    ["活動名", "HLO (Hikain Liberation Organization)"],
                    ["ユーザーID", "@hikain_lib"],
                    ["代表者", "十字架_mania"],
                    ["代表者ID", "@maebahesioru2"],
                    ["設立", "2026年6月18日"],
                    ["個体数", "14（ログイン勢10 / オブザーバー4）"],
                    ["DMパスワード", "1145"],
                  ].map(([label, value], i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="py-2 pr-4 text-hlo-white/40 font-bold text-xs tracking-wider whitespace-nowrap align-top">{label}</td>
                      <td className="py-2 text-hlo-white/80 text-xs leading-relaxed">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="md:col-span-3 space-y-6"
            >
              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <h3 className="text-hlo-red text-sm font-black tracking-widest mb-3">設立趣旨</h3>
                <p className="text-sm text-hlo-white/70 leading-relaxed">
                  光淫文化解放機構（HLO）は、2026年（令和8年）6月18日からX（旧Twitter）で活動している複垢である。名称はヒカ淫に由来し、複垢界隈兼ヒカマー界隈に属する。
                </p>
                <p className="mt-3 text-sm text-hlo-white/70 leading-relaxed">
                  アカウントの作成理由は「複垢界隈に興味があったから」および「開示対策になるから」とされる。名称に含まれる「光」はヒカキンの本名「開發<b>光</b>」に、「淫」はネットミーム「真夏の夜の<b>淫</b>夢」に由来する。
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-white/[0.02] space-y-4">
                <div>
                  <h3 className="text-hlo-gold text-xs font-black tracking-[0.3em] mb-3">政治的思想</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {politicalThoughts.map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-hlo-red/10 border border-hlo-red/20 text-hlo-red/80 text-[10px] font-bold tracking-wider">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-hlo-gold text-xs font-black tracking-[0.3em] mb-3">政治的立場</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {politicalPositions.map((p) => (
                      <span key={p} className="px-2.5 py-1 bg-hlo-gold/10 border border-hlo-gold/20 text-hlo-gold/80 text-[10px] font-bold tracking-wider">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* ═══════ IDEOLOGY ═══════ */}
      <section id="ideology" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-hlo-navy/50">
        <div className="absolute inset-0 stripe-pattern opacity-[0.04]" />
        <div className="relative max-w-5xl mx-auto">
          <SectionHeading overline="IDEOLOGY" title="三大思想" />

          <div className="grid md:grid-cols-3 gap-6">
            {ideologies.map((ideo, i) => (
              <motion.article
                key={ideo.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`group p-6 border-t-4 ${ideo.color} border-x border-b border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors`}
              >
                <div className="text-3xl mb-4">{ideo.icon}</div>
                <h3 className="text-base font-black tracking-tight mb-1 group-hover:text-hlo-red transition-colors">{ideo.title}</h3>
                <p className="text-[10px] text-hlo-white/40 font-bold tracking-[0.2em] mb-4">{ideo.en}</p>
                <p className="text-xs text-hlo-white/70 leading-relaxed mb-3">{ideo.desc}</p>
                <p className="text-xs text-hlo-white/50 leading-relaxed italic">{ideo.sub}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PLEDGES ═══════ */}
      <section id="pledges" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeading overline="PLEDGES" title="重点公約" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "🔓", title: "著作権・DMCA・開示請求の廃止", desc: "時代遅れの規制を撤廃し、表現の自由を最大限に確保する", color: "border-hlo-red" },
              { icon: "🤖", title: "AIの推進", desc: "AI技術の積極活用と発展を支援し、創造の民主化を加速する", color: "border-hlo-red" },
              { icon: "🕶️", title: "インターネットの匿名化推進", desc: "匿名表現の権利を守り、検閲や追跡からユーザーを保護する", color: "border-hlo-red" },
              { icon: "📎", title: "出典の努力義務化または推奨", desc: "クレジット表記・出所明示を自由なネット文化の前提とする", color: "border-hlo-gold" },
              { icon: "⚖️", title: "悪質なデマ流出者・ヘイトスピーチの罰則追加・厳罰化", desc: "分断を煽る悪質行為には断固たる対応を", color: "border-hlo-gold" },
              { icon: "🤝", title: "古参性による序列化への反対", desc: "参加時期や知名度による差別を否定し、すべての参加者を同列に扱う", color: "border-hlo-gold" },
              { icon: "💥", title: "創作者中心主義への反対", desc: "創作者の特権化を排し、消費者・二次創作者との対等な関係を構築する", color: "border-hlo-gold" },
            ].map((pledge, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`group p-5 border-t-[3px] ${pledge.color} border-x border-b border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors`}
              >
                <div className="text-2xl mb-3">{pledge.icon}</div>
                <h3 className="text-sm font-black tracking-tight leading-snug group-hover:text-hlo-red transition-colors">
                  {pledge.title}
                </h3>
                <p className="mt-2 text-xs text-hlo-white/50 leading-relaxed">
                  {pledge.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ INTERNAL LINKS ═══════ */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeading overline="EXPLORE" title="さらに詳しく" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.a
              href="/members"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group border-2 border-white/10 bg-white/[0.02] hover:border-hlo-red/40 transition-all overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden border-b border-white/10">
                <img
                  src="/members-bg.jpg"
                  alt="HLO構成個体 - メンバー一覧"
                  width="800"
                  height="600"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-black tracking-tight group-hover:text-hlo-red transition-colors">構成個体</h3>
                <p className="mt-1 text-xs text-hlo-white/50 leading-relaxed">
                  ログイン勢10名・オブザーバー4名、全14名のメンバーを紹介
                </p>
                <p className="mt-3 text-xs font-bold tracking-widest text-hlo-red group-hover:translate-x-1 transition-transform inline-block">
                  メンバー一覧を見る →
                </p>
              </div>
            </motion.a>

            <motion.a
              href="/history"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group border-2 border-white/10 bg-white/[0.02] hover:border-hlo-gold/40 transition-all overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden border-b border-white/10">
                <img
                  src="/history-bg.jpg"
                  alt="HLO沿革 - 設立からのあゆみ"
                  width="800"
                  height="600"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-black tracking-tight group-hover:text-hlo-red transition-colors">沿革</h3>
                <p className="mt-1 text-xs text-hlo-white/50 leading-relaxed">
                  2026年6月18日の設立からフォロワー400人達成までのあゆみ
                </p>
                <p className="mt-3 text-xs font-bold tracking-widest text-hlo-gold group-hover:translate-x-1 transition-transform inline-block">
                  沿革を見る →
                </p>
              </div>
            </motion.a>

            <motion.a
              href="/rules"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group border-2 border-white/10 bg-white/[0.02] hover:border-hlo-red/40 transition-all overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden border-b border-white/10">
                <img
                  src="/rules-bg.jpg"
                  alt="HLO憲法 - 光淫文化解放機構憲法"
                  width="800"
                  height="600"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-black tracking-tight group-hover:text-hlo-red transition-colors">憲法</h3>
                <p className="mt-1 text-xs text-hlo-white/50 leading-relaxed">
                  全11章55条。インターネットの自由と解放を掲げる最高規範
                </p>
                <p className="mt-3 text-xs font-bold tracking-widest text-hlo-red group-hover:translate-x-1 transition-transform inline-block">
                  憲法を読む →
                </p>
              </div>
            </motion.a>

          </div>
        </div>
      </section>

      {/* ═══════ JOIN CTA ═══════ */}
      <section id="join" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeading overline="JOIN US" title="加入案内" />

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 border-2 border-hlo-red/30 bg-hlo-red/5 text-center"
          >
            {/* FAQ structured data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "光淫文化解放機構（HLO）への加入方法は？",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "X（旧Twitter）の複垢アカウント @hikain_lib にDMを送信してください。DMパスワードは「1145」です。フォロバ率は100%（スパム以外）で、年中受付中です。",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "HLOのDMパスワードは？",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "1145 です。複垢DMにこのパスワードを添えて加入希望の旨をお送りください。",
                      },
                    },
                  ],
                }),
              }}
            />
            <p className="text-lg md:text-xl font-black tracking-tight mb-2">
              加入希望者<span className="text-hlo-red">年中受付中</span>！
            </p>
            <p className="text-sm text-hlo-white/50 mb-6">
              フォロバ100（スパム以外）・この垢は複数人で運営されています
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://x.com/hikain_lib"
                target="_blank"
                rel="me noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-hlo-red bg-hlo-red text-white font-bold text-sm tracking-widest hover:bg-transparent hover:text-hlo-red transition-all shadow-lg shadow-hlo-red/20"
              >
                <span>𝕏</span> 複垢DM はこちら
              </a>
              <a
                href="https://x.com/maebahesioru2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-hlo-gold/40 text-hlo-gold font-bold text-sm tracking-widest hover:bg-hlo-gold/10 transition-all"
              >
                総書記DM はこちら
              </a>
            </div>

            <p className="mt-6 text-xs text-hlo-white/30">
              DMパスワード: <span className="text-hlo-gold font-mono">1145</span>
            </p>
          </motion.article>
        </div>
      </section>

      {/* ═══════ WIKI ═══════ */}
      <section id="wiki" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-hlo-navy/50">
        <div className="max-w-5xl mx-auto">
          <SectionHeading overline="WIKI" title="関連ページ" />

          <div className="grid sm:grid-cols-2 gap-6">
            <motion.a
              href="https://hikamers.net/index.php?title=%E3%83%92%E3%82%AB%E3%83%9E%E3%83%BCwiki:%E3%83%81%E3%83%A9%E3%82%B7%E3%81%AE%E8%A3%8F/%E5%85%89%E6%B7%AB%E6%96%87%E5%8C%96%E8%A7%A3%E6%94%BE%E6%A9%9F%E6%A7%8B"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group p-6 border border-white/10 bg-white/[0.02] hover:border-hlo-red/30 transition-all hover:bg-white/[0.04]"
            >
              <p className="text-sm font-black tracking-widest text-hlo-red">ヒカマーWiki</p>
              <p className="mt-1 text-xs text-hlo-white/50">チラシの裏 / 光淫文化解放機構</p>
              <p className="mt-3 text-[10px] text-hlo-gold/50 font-bold tracking-wider group-hover:text-hlo-gold transition-colors">hikamers.net →</p>
            </motion.a>

            <motion.a
              href="https://fukuaka.fandom.com/ja/wiki/%E5%85%89%E6%B7%AB%E6%96%87%E5%8C%96%E8%A7%A3%E6%94%BE%E6%A9%9F%E6%A7%8B"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group p-6 border border-white/10 bg-white/[0.02] hover:border-hlo-red/30 transition-all hover:bg-white/[0.04]"
            >
              <p className="text-sm font-black tracking-widest text-hlo-red">複垢界隈Wiki</p>
              <p className="mt-1 text-xs text-hlo-white/50">光淫文化解放機構</p>
              <p className="mt-3 text-[10px] text-hlo-gold/50 font-bold tracking-wider group-hover:text-hlo-gold transition-colors">fukuaka.fandom.com →</p>
            </motion.a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
