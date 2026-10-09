"use client";

import React, { forwardRef } from "react";

interface AnimatedHeadlineProps {
  headlineRef?: React.RefObject<HTMLDivElement>;
  subRef?: React.RefObject<HTMLDivElement>;
}

export const AnimatedHeadline = forwardRef<HTMLDivElement, AnimatedHeadlineProps>(
  ({ headlineRef, subRef }, ref) => {
    const text = "WELCOME ITZ FIZZ";
    const letters = text.split("");

    return (
      <div
        ref={headlineRef || ref}
        className="w-full flex flex-col items-center justify-center text-center select-none pointer-events-none px-4 z-10"
      >
        {/* Supporting tag above */}
        <div
          ref={subRef}
          className="headline-tag mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-green/30 bg-neon-green/5 text-neon-green text-[11px] md:text-xs font-mono tracking-widest uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-neon-green shadow-neon-sm animate-pulse" />
          AERODYNAMIC ELECTRIC PERFORMANCE
        </div>

        {/* Main Display Headline */}
        <h1
          className="relative text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-[0.14em] md:tracking-[0.2em] font-sans flex flex-wrap justify-center items-center"
          aria-label={text}
        >
          {letters.map((char, index) => {
            if (char === " ") {
              return (
                <span key={index} className="inline-block w-3 md:w-6 lg:w-8">
                  &nbsp;
                </span>
              );
            }
            return (
              <span
                key={index}
                className="headline-char inline-block transition-colors duration-300 text-zinc-600/80 will-change-transform will-change-opacity relative"
                data-char-index={index}
              >
                {char}
              </span>
            );
          })}
        </h1>

        {/* Subtitle / Brand Identity statement */}
        <p className="headline-sub mt-4 text-xs sm:text-sm md:text-base text-zinc-400 font-medium max-w-xl tracking-wider uppercase">
          Engineered for Raw Adrenaline. Zero Compromise.
        </p>
      </div>
    );
  }
);

AnimatedHeadline.displayName = "AnimatedHeadline";
