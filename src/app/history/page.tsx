"use client";

import { motion } from "framer-motion";
import PageShell, { SectionHeading } from "@/lib/shell";
import { timeline } from "@/lib/data";

export default function HistoryPage() {
  return (
    <PageShell>
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeading overline="HISTORY" title="沿革" as="h1" />

          <div className="relative">
            <div className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-px bg-hlo-red/30 md:-translate-x-px" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative pl-10 md:pl-0 md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
                  }`}
                >
                  <div className="absolute left-[5px] md:left-auto top-1.5 w-3.5 h-3.5 rounded-full bg-hlo-red border-2 border-hlo-dark z-10" />
                  <div className={`hidden md:block absolute top-[10px] w-12 h-px bg-hlo-red/30 ${
                    i % 2 === 0 ? "right-0" : "left-0"
                  }`} />

                  <div className="p-4 border border-white/10 bg-white/[0.02]">
                    <time className="text-hlo-red text-xs font-black tracking-widest">{item.date}</time>
                    <p className="mt-1 text-sm text-hlo-white/70">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
