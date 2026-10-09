"use client";

import React, { forwardRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Gauge, Zap, Compass, ShieldCheck } from "lucide-react";

interface ProductRevealProps {
  revealRef?: React.RefObject<HTMLDivElement>;
}

export const ProductReveal = forwardRef<HTMLDivElement, ProductRevealProps>(
  ({ revealRef }, ref) => {
    const specs = [
      { label: "0–100 KM/H", val: "1.9s", icon: <Gauge className="w-4 h-4 text-neon-green" /> },
      { label: "HORSEPOWER", val: "1,250 HP", icon: <Zap className="w-4 h-4 text-neon-lime" /> },
      { label: "MAX VELOCITY", val: "420 KM/H", icon: <Compass className="w-4 h-4 text-emerald-400" /> },
      { label: "ARCH.", val: "800V DUAL-INVERTER", icon: <ShieldCheck className="w-4 h-4 text-cyan-400" /> },
    ];

    return (
      <div
        ref={revealRef || ref}
        className="product-reveal-panel w-full max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col items-center justify-center opacity-0 pointer-events-none will-change-transform will-change-opacity z-30"
      >
        {/* Stage 3 Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-mono tracking-widest uppercase mb-4 shadow-neon-sm">
          <span className="w-2 h-2 rounded-full bg-neon-green animate-ping" />
          STAGE 03 // PRODUCT REVEAL & ALLOCATION
        </div>

        {/* Main Composition Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Product Visual Showcase */}
          <div className="lg:col-span-7 relative group rounded-3xl overflow-hidden glass-panel border border-white/10 p-2 shadow-2xl">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black/60">
              <Image
                src="/car-reveal.jpg"
                alt="ITZ FIZZ Hypercar Studio Reveal"
                fill
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-black/30 pointer-events-none" />

              {/* In-photo Badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-neon-green" />
                <span>ITZ FIZZ PROTO-01 // PRODUCTION SPEC</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Specifications & Call-To-Action */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left space-y-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-neon-green uppercase">
                THE NEXT SPECIES OF PERFORMANCE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mt-1">
                PURE INTENT. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-lime">
                  ZERO DRAG.
                </span>
              </h2>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Sculpted in aerodynamic wind tunnels, powered by solid-state multi-phase inverters, and calibrated for
                instantaneous torque. ITZ FIZZ redefines the physics of velocity.
              </p>
            </div>

            {/* Spec Matrix */}
            <div className="grid grid-cols-2 gap-3">
              {specs.map((item) => (
                <div
                  key={item.label}
                  className="p-3.5 rounded-xl bg-surface/80 border border-white/10 flex flex-col justify-between hover:border-neon-green/30 transition-colors"
                >
                  <div className="flex items-center justify-between text-zinc-400 mb-1">
                    <span className="text-[10px] font-mono tracking-wider">{item.label}</span>
                    {item.icon}
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-white font-sans">{item.val}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#preorder"
                className="pointer-events-auto inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-neon-green text-black font-extrabold text-xs uppercase tracking-widest shadow-neon-md hover:bg-neon-lime hover:shadow-neon-lg transition-all duration-300 active:scale-95"
              >
                <span>RESERVE ALLOCATION</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#specs"
                className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface border border-white/15 text-white hover:text-neon-green hover:border-neon-green/50 font-bold text-xs uppercase tracking-widest transition-all duration-300"
              >
                <span>FULL TELEMETRY</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ProductReveal.displayName = "ProductReveal";
