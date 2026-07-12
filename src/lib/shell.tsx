"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function PageShell({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#about", label: "概要" },
    { href: "/#ideology", label: "思想" },
    { href: "/members", label: "構成個体" },
    { href: "/history", label: "沿革" },
    { href: "/rules", label: "憲法" },
    { href: "/#wiki", label: "Wiki" },
    { href: "/#join", label: "加入" },
  ];

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-hlo-red focus:text-white focus:font-bold focus:text-sm focus:outline-none"
      >
        コンテンツにスキップ
      </a>

      {/* Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-hlo-dark/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/avatars/hikain_lib.jpg"
                alt="HLO"
                width="400"
                height="400"
                className="w-9 h-9 rounded-full border-2 border-hlo-red group-hover:scale-110 transition-transform flex-shrink-0 object-cover"
              />
              <span className="hidden sm:block text-sm font-bold tracking-widest text-hlo-white/80 group-hover:text-hlo-red transition-colors">
                光淫文化解放機構
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-3 py-2 text-xs font-bold tracking-widest text-hlo-white/60 hover:text-hlo-red transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="https://x.com/hikain_lib"
                target="_blank"
                rel="me noopener noreferrer"
                className="ml-2 px-4 py-1.5 text-xs font-bold border border-hlo-red text-hlo-red hover:bg-hlo-red hover:text-white transition-colors"
              >
                X / Twitter
              </a>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="メニュー"
            >
              <span className={`block w-5 h-0.5 bg-hlo-white transition-transform ${menuOpen ? "rotate-45 translate-y-1" : ""}`} />
              <span className={`block w-5 h-0.5 bg-hlo-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-hlo-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-3" : ""}`} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-hlo-dark/98 backdrop-blur-md border-b border-white/5">
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-3 text-sm font-bold tracking-widest text-hlo-white/70 hover:text-hlo-red hover:bg-white/5 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="https://x.com/hikain_lib"
                target="_blank"
                rel="me noopener noreferrer"
                className="mt-2 px-4 py-3 text-sm font-bold text-center border border-hlo-red text-hlo-red hover:bg-hlo-red hover:text-white transition-colors"
              >
                X / Twitter をフォロー
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Content */}
      <main id="main-content" className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-hlo-dark">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/avatars/hikain_lib.jpg"
                alt="HLO"
                width="400"
                height="400"
                className="w-8 h-8 rounded-full border border-hlo-red/50 flex-shrink-0 object-cover"
              />
              <div>
                <p className="text-xs font-black tracking-widest">光淫文化解放機構</p>
                <p className="text-[10px] text-hlo-white/30 tracking-widest">Hikain Liberation Organization</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <a href="https://x.com/hikain_lib" target="_blank" rel="me noopener noreferrer" className="text-hlo-white/40 hover:text-hlo-red transition-colors font-bold tracking-wider">@hikain_lib</a>
              <span className="text-hlo-white/20">|</span>
              <a href="https://x.com/maebahesioru2" target="_blank" rel="noopener noreferrer" className="text-hlo-white/40 hover:text-hlo-red transition-colors font-bold tracking-wider">@maebahesioru2</a>
              <span className="text-hlo-white/20">|</span>
              <Link href="/#about" className="text-hlo-white/40 hover:text-hlo-red transition-colors font-bold tracking-wider">概要</Link>
              <Link href="/#ideology" className="text-hlo-white/40 hover:text-hlo-red transition-colors font-bold tracking-wider">思想</Link>
              <Link href="/members" className="text-hlo-white/40 hover:text-hlo-red transition-colors font-bold tracking-wider">構成個体</Link>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[10px] text-hlo-white/20 tracking-wider">© 2026 HLO - Hikain Liberation Organization. All rights liberated.</p>
            <p className="text-[10px] text-hlo-white/20 tracking-wider">複垢界隈兼ヒカマー界隈</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export function SectionHeading({ overline, title, id, as: HeadingTag = "h2" }: { overline: string; title: string; id?: string; as?: "h1" | "h2" }) {
  return (
    <div id={id} className="mb-12 md:mb-16 scroll-mt-24">
      <p className="text-hlo-red text-xs font-bold tracking-[0.3em] mb-3">{overline}</p>
      <HeadingTag className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">{title}</HeadingTag>
      <div className="mt-4 flex gap-1">
        <span className="block w-12 h-1 bg-hlo-red" />
        <span className="block w-4 h-1 bg-hlo-gold" />
        <span className="block w-2 h-1 bg-white/20" />
      </div>
    </div>
  );
}
