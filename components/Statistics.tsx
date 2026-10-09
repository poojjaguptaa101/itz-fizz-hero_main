"use client";

import React, { forwardRef } from "react";
import { CheckCircle2, Leaf, Award } from "lucide-react";

export interface StatItem {
  value: string;
  numberValue: number;
  label: string;
  category: string;
  icon: React.ReactNode;
  accent: string;
}

interface StatisticsProps {
  statsRef?: React.RefObject<HTMLDivElement>;
}

export const defaultStats: StatItem[] = [
  {
    value: "95%",
    numberValue: 95,
    label: "Customer Satisfaction",
    category: "GLOBAL BENCHMARK",
    icon: <CheckCircle2 className="w-4 h-4 text-neon-green" />,
    accent: "#00FF66",
  },
  {
    value: "80%",
    numberValue: 80,
    label: "Sustainable Innovation",
    category: "CIRCULAR MATERIALS",
    icon: <Leaf className="w-4 h-4 text-neon-lime" />,
    accent: "#CCFF00",
  },
  {
    value: "90%",
    numberValue: 90,
    label: "Product Excellence",
    category: "TRACK CERTIFIED",
    icon: <Award className="w-4 h-4 text-emerald-400" />,
    accent: "#34D399",
  },
];

export const Statistics = forwardRef<HTMLDivElement, StatisticsProps>(
  ({ statsRef }, ref) => {
    return (
      <div
        ref={statsRef || ref}
        className="w-full max-w-6xl mx-auto px-4 z-20 pointer-events-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {defaultStats.map((stat, idx) => (
            <div
              key={stat.label}
              className="stat-card group relative p-5 md:p-6 rounded-2xl glass-panel border border-white/10 hover:border-neon-green/40 transition-all duration-500 shadow-lg hover:shadow-neon-sm overflow-hidden"
              data-stat-index={idx}
            >
              {/* Ambient Glow */}
              <div
                className="absolute -right-8 -top-8 w-24 h-24 rounded-full blur-2xl opacity-10 group-hover:opacity-30 transition-opacity"
                style={{ backgroundColor: stat.accent }}
              />

              {/* Header row with Icon & Category tag */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                  {stat.category}
                </span>
                <div className="p-2 rounded-lg bg-surface border border-white/5 group-hover:border-white/20 transition-colors">
                  {stat.icon}
                </div>
              </div>

              {/* Big Stat Value */}
              <div className="flex items-baseline gap-2 mb-1">
                <span className="stat-number text-4xl md:text-5xl font-black text-white font-sans tracking-tight">
                  {stat.value}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs md:text-sm font-medium text-zinc-300 tracking-wide">
                {stat.label}
              </p>

              {/* Progress Bar Gauge */}
              <div className="mt-4 w-full h-1.5 rounded-full bg-zinc-800/80 overflow-hidden">
                <div
                  className="stat-progress-bar h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${stat.numberValue}%`,
                    backgroundColor: stat.accent,
                    boxShadow: `0 0 10px ${stat.accent}`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

Statistics.displayName = "Statistics";
