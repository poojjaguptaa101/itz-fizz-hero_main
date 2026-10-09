"use client";

import React, { forwardRef } from "react";
import { ChevronDown } from "lucide-react";

interface ScrollIndicatorProps {
  indicatorRef?: React.RefObject<HTMLDivElement>;
}

export const ScrollIndicator = forwardRef<HTMLDivElement, ScrollIndicatorProps>(
  ({ indicatorRef }, ref) => {
    return (
      <div
        ref={indicatorRef || ref}
        className="scroll-indicator-container absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-30 select-none will-change-transform will-change-opacity"
        aria-hidden="true"
      >
        <span className="text-[10px] font-mono tracking-ultrawide text-zinc-400 uppercase flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
          SCROLL TO ACCELERATE
        </span>

        {/* Animated Mouse Capsule */}
        <div className="w-5 h-9 rounded-full border-2 border-zinc-600 flex items-start justify-center p-1 bg-surface/50 backdrop-blur-sm">
          <div className="w-1 h-2 rounded-full bg-neon-green animate-bounce shadow-neon-sm" />
        </div>

        {/* Down Chevrons */}
        <div className="flex flex-col items-center -space-y-1 text-zinc-500">
          <ChevronDown className="w-3.5 h-3.5 animate-pulse" />
        </div>
      </div>
    );
  }
);

ScrollIndicator.displayName = "ScrollIndicator";
