"use client";

import React, { forwardRef, useState } from "react";
import Image from "next/image";

interface ScrollVisualProps {
  carRef?: React.RefObject<HTMLDivElement>;
  trailRef?: React.RefObject<HTMLDivElement>;
  trackRef?: React.RefObject<HTMLDivElement>;
}

export const ScrollVisual = forwardRef<HTMLDivElement, ScrollVisualProps>(
  ({ carRef, trailRef, trackRef }, ref) => {
    const [imageLoaded, setImageLoaded] = useState(true);

    return (
      <div
        ref={trackRef || ref}
        className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] flex items-center overflow-hidden my-auto"
        id="road-track"
      >
        {/* Asphalt Road Track Background */}
        <div className="absolute inset-0 bg-[#0d0e12] border-y border-white/10 shadow-2xl">
          {/* Subtle Track Texture & Center Dashed Line */}
          <div className="absolute inset-0 bg-carbon-pattern opacity-40" />

          {/* Runway Markings */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-zinc-700/60 -translate-y-1/2" />
          <div className="absolute top-4 left-0 w-full h-px bg-white/5" />
          <div className="absolute bottom-4 left-0 w-full h-px bg-white/5" />

          {/* Grid Hash Marks */}
          <div className="absolute inset-0 flex justify-between px-6 pointer-events-none opacity-20">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="h-full w-px bg-zinc-600 flex flex-col justify-between py-2">
                <span className="text-[8px] font-mono text-zinc-500">{i * 20}M</span>
                <span className="text-[8px] font-mono text-zinc-500">SYS</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Energy Wake / Trail behind car */}
        <div
          ref={trailRef}
          id="energy-trail"
          className="absolute top-0 left-0 h-full w-0 z-10 pointer-events-none transition-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 255, 102, 0.45) 0%, rgba(204, 255, 0, 0.35) 70%, rgba(0, 255, 102, 0.1) 100%)",
            boxShadow: "0 0 30px rgba(0, 255, 102, 0.35)",
          }}
        >
          {/* Internal neon stream line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-neon-green/90 -translate-y-1/2 shadow-neon-md" />
        </div>

        {/* Central Vehicle Element Container */}
        <div
          ref={carRef}
          id="hero-car"
          className="absolute left-0 z-20 flex items-center will-change-transform cursor-grab active:cursor-grabbing"
          style={{ width: "220px", height: "160px" }}
        >
          {/* Telemetry Micro Badge above vehicle */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded bg-black/80 border border-neon-green/40 text-[9px] font-mono text-neon-green tracking-widest uppercase shadow-sm">
            ITZ FIZZ // PROTO-01
          </div>

          {/* Headlight Conical Glow Beam */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-32 pointer-events-none translate-x-[75%]"
            style={{
              background:
                "radial-gradient(ellipse at left, rgba(0, 255, 102, 0.5) 0%, rgba(0, 255, 102, 0.15) 45%, transparent 75%)",
              filter: "blur(4px)",
            }}
          />

          {/* High Quality Car Render or Vector Fallback */}
          {imageLoaded ? (
            <div className="relative w-full h-full flex items-center justify-center filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)]">
              <Image
                src="/car-top.png"
                alt="ITZ FIZZ Electric Hypercar Top View"
                width={360}
                height={180}
                className="w-auto h-[120px] sm:h-[140px] md:h-[155px] object-contain select-none pointer-events-none"
                priority
                onError={() => setImageLoaded(false)}
              />
            </div>
          ) : (
            /* Pristine SVG Hypercar Fallback */
            <div className="relative w-full h-full flex items-center justify-center">
              <svg
                viewBox="0 0 300 120"
                className="w-full h-auto drop-shadow-[0_10px_20px_rgba(0,255,102,0.3)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Car Body Silhouette */}
                <path
                  d="M10 60 C30 45, 70 30, 140 30 C210 30, 260 48, 290 60 C260 72, 210 90, 140 90 C70 90, 30 75, 10 60 Z"
                  fill="#12151B"
                  stroke="#00FF66"
                  strokeWidth="2"
                />
                {/* Windshield & Cockpit */}
                <ellipse cx="145" cy="60" rx="45" ry="18" fill="#0A0C10" stroke="#00FF66" strokeWidth="1" />
                <path d="M120 60 L170 60" stroke="#00FF66" strokeWidth="1.5" />
                {/* Aero Fenders & Wings */}
                <path d="M260 45 L285 52 L260 55" stroke="#CCFF00" strokeWidth="1.5" />
                <path d="M260 75 L285 68 L260 65" stroke="#CCFF00" strokeWidth="1.5" />
                <rect x="25" y="42" width="10" height="36" rx="2" fill="#00FF66" />
              </svg>
            </div>
          )}

          {/* Underglow Neon Lighting */}
          <div className="absolute inset-x-8 inset-y-4 rounded-full bg-neon-green/25 blur-md -z-10" />
        </div>
      </div>
    );
  }
);

ScrollVisual.displayName = "ScrollVisual";
