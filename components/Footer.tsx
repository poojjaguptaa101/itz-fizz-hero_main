"use client";

import React from "react";
import { Zap, ArrowUp, Github, Twitter, Youtube } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#06070a] text-zinc-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Logo & Tagline */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center border border-white/10">
                <Zap className="w-4 h-4 text-neon-green" />
              </div>
              <span className="text-xl font-black tracking-widest text-white">
                ITZ<span className="text-neon-green">FIZZ</span>
              </span>
            </div>
            <p className="text-xs text-zinc-500 font-mono tracking-wider max-w-sm">
              ENGINEERED FOR RAW ADRENALINE. ZERO COMPROMISE. ELECTRIC HYPER-PERFORMANCE.
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-surface border border-white/10 flex items-center justify-center text-zinc-400 hover:text-neon-green hover:border-neon-green/40 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-surface border border-white/10 flex items-center justify-center text-zinc-400 hover:text-neon-green hover:border-neon-green/40 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-surface border border-white/10 flex items-center justify-center text-zinc-400 hover:text-neon-green hover:border-neon-green/40 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface border border-white/10 hover:border-neon-green/40 text-xs font-mono text-zinc-300 hover:text-neon-green transition-all"
              aria-label="Scroll to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} ITZ FIZZ AUTOMOTIVE LTD. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">
              PRIVACY POLICY
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              TERMS OF ALLOCATION
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              TELEMETRY API
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
