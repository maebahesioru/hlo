"use client";

import { motion } from "framer-motion";
import PageShell, { SectionHeading } from "@/lib/shell";
import { members, getAvatar } from "@/lib/data";

function MemberCard({ m, special, section }: { m: { name: string; role: string; id: string; since: string; special?: boolean }; special?: boolean; section: "login" | "observer" | "nonHikamar" }) {
  const borderColor = section === "login" ? (special ? "border-hlo-red/30 hover:border-hlo-red/50" : "border-white/10 hover:border-hlo-red/30") :
    section === "observer" ? "border-white/10 hover:border-hlo-gold/30" : "border-white/10 hover:border-white/30";
  const bg = section === "login" && special ? "bg-hlo-red/5" : "bg-white/[0.02]";

  return (
    <motion.a
      href={`https://x.com/${m.id.replace("@", "")}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`block p-4 border ${borderColor} ${bg} group transition-colors cursor-pointer`}
    >
      <div className="relative mb-3 overflow-hidden rounded-lg">
        <img
          src={getAvatar(m.id)}
          alt={`${m.name} (${m.id}) のプロフィール画像`}
          width="400"
          height="400"
          loading="lazy"
          decoding="async"
          className={`w-full aspect-square object-cover border-2 ${
            special ? "border-hlo-red" : "border-white/10"
          } group-hover:scale-105 transition-transform duration-300`}
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        {special && (
          <span className="absolute top-2 left-2 px-1.5 py-0.5 bg-hlo-red text-[9px] font-black text-white">REP</span>
        )}
        {section === "nonHikamar" && (
          <span className="absolute top-2 right-2 px-1.5 py-0.5 bg-white/10 text-[9px] font-bold text-hlo-white/50 tracking-wider">NON-HKM</span>
        )}
      </div>
      <div className="px-1">
        <p className="text-sm font-bold group-hover:text-hlo-red transition-colors leading-tight">{m.name}</p>
        <p className="text-[11px] text-hlo-white/40 mt-0.5">{m.role}</p>
        <p className="mt-1 text-[11px] text-hlo-gold/60 group-hover:text-hlo-gold transition-colors">{m.id}</p>
        <p className="text-[10px] text-hlo-white/30 mt-0.5">{m.since}</p>
      </div>
    </motion.a>
  );
}

export default function MembersPage() {
  return (
    <PageShell>
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeading overline="MEMBERS" title="構成個体" as="h1" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-hlo-white/50 mb-8"
          >
            個体数は<strong className="text-hlo-red">12体</strong>。
            ログイン勢8体、オブザーバー4体。非カマーの個体も1体存在する。
          </motion.p>

          {/* ログイン勢 */}
          <h3 className="flex items-center gap-2 text-sm font-black tracking-widest text-hlo-red mb-4">
            <span className="w-2 h-2 bg-hlo-red" />ログイン勢
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
            {members.login.map((m, i) => (
              <MemberCard key={m.id} m={m} special={m.special} section="login" />
            ))}
          </div>

          {/* オブザーバー */}
          <h3 className="flex items-center gap-2 text-sm font-black tracking-widest text-hlo-gold mb-4">
            <span className="w-2 h-2 bg-hlo-gold" />オブザーバー
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
            {members.observer.map((m, i) => (
              <MemberCard key={m.id} m={m} section="observer" />
            ))}
          </div>

          {/* 非カマー */}
          <h3 className="flex items-center gap-2 text-sm font-black tracking-widest text-hlo-white/40 mb-4">
            <span className="w-2 h-2 bg-white/20" />非カマー
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {members.nonHikamar.map((m, i) => (
              <MemberCard key={m.id} m={m} section="nonHikamar" />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
