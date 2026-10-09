"use client";

import React, { useState } from "react";
import { Cpu, Wind, BatteryCharging, Compass, Check, ArrowRight, ShieldCheck } from "lucide-react";

export const FeatureShowcase: React.FC = () => {
  const [activeMode, setActiveMode] = useState<"track" | "ludicrous" | "endurance">("track");

  const modeData = {
    track: {
      title: "APEX TRACK MODE",
      downforce: "850 KG @ 300 KM/H",
      torqueBias: "30% FRONT / 70% REAR",
      cooling: "MAX DUAL RADIATOR OVERCLOCK",
      description:
        "Active wing deployment to 38 degrees. Torque vectoring responds within 2 milliseconds per wheel for razor-sharp turn-in authority.",
      color: "#00FF66",
    },
    ludicrous: {
      title: "STRAIGHTLINE DRAG VELOCITY",
      downforce: "MINIMAL AERO RESISTANCE (Cd 0.21)",
      torqueBias: "50% FRONT / 50% REAR MAXIMUM LAUNCH",
      cooling: "LIQUID NITROGEN CHILL MATRIX",
      description:
        "All four motors unleash 1,250 brake horsepower instantaneously. Carbon ceramic rotors primed for sub-2 second launch control.",
      color: "#CCFF00",
    },
    endurance: {
      title: "INTELLIGENT CRUISE & REGENERATION",
      downforce: "ADAPTIVE VARIABLE DRAG",
      torqueBias: "EFFICIENCY FRONT DECOUPLE",
      cooling: "PASSIVE REGENERATIVE AIRFLOW",
      description:
        "Extends continuous highway range past 680 kilometers. Kinetic regeneration recaptures up to 300 kW during deceleration.",
      color: "#38BDF8",
    },
  };

  const currentMode = modeData[activeMode];

  const pillars = [
    {
      icon: <Wind className="w-6 h-6 text-neon-green" />,
      title: "Active Venturi Tunnels",
      desc: "Underbody airflow channels evacuate air beneath the floor, creating vacuum-like ground effect without penalty drag.",
    },
    {
      icon: <BatteryCharging className="w-6 h-6 text-neon-lime" />,
      title: "Structural Carbon Battery",
      desc: "Cell-to-chassis structural integration increases torsional rigidity by 45% while decreasing total kerb weight.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-emerald-400" />,
      title: "10,000 Hz Neural VCU",
      desc: "Vehicle control unit calculates slip angles ten thousand times per second, guaranteeing unflinching grip.",
    },
  ];

  return (
    <section id="aerodynamics" className="relative w-full py-28 bg-[#0a0b0f] text-white border-t border-white/10">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-lime/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-neon-green uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
              INTELLIGENT AERODYNAMICS // PROTO-01
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-2">
              CRAFTED FOR SPEED. <br />
              <span className="text-zinc-500">HONED BY THE WIND.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-400 leading-relaxed">
            Every curve and intake on the ITZ FIZZ chassis serves a dual mission: cutting through aerodynamic turbulence and
            channelling cool air to the quad-motor powertrain.
          </p>
        </div>

        {/* Interactive Drive Mode Switcher */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 mb-16 shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">TELEMETRY PRESET</span>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-white">
                DYNAMIC DRIVE CONFIGURATOR
              </h3>
            </div>

            {/* Mode Tabs */}
            <div className="flex items-center gap-2 bg-black/60 p-1.5 rounded-xl border border-white/10">
              {(["track", "ludicrous", "endurance"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setActiveMode(mode)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeMode === mode
                      ? "bg-neon-green text-black shadow-neon-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Mode Details Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 items-center">
            <div className="md:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-300">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: currentMode.color }} />
                <span>{currentMode.title}</span>
              </div>
              <p className="text-base text-zinc-300 leading-relaxed font-sans">{currentMode.description}</p>
            </div>

            <div className="space-y-3 p-4 rounded-2xl bg-black/40 border border-white/5 font-mono text-xs">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-zinc-500">DOWNFORCE</span>
                <span className="text-white font-bold">{currentMode.downforce}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-zinc-500">TORQUE BIAS</span>
                <span className="text-white font-bold">{currentMode.torqueBias}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-500">THERMALS</span>
                <span className="text-white font-bold">{currentMode.cooling}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="specs">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-8 rounded-2xl glass-panel border border-white/10 hover:border-neon-green/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center border border-white/10 mb-6 group-hover:border-neon-green/50 transition-colors">
                {pillar.icon}
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wider text-white mb-2 group-hover:text-neon-green transition-colors">
                {pillar.title}
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Pre-Order Reservation Banner */}
        <div
          id="preorder"
          className="mt-20 p-8 sm:p-12 rounded-3xl relative overflow-hidden bg-gradient-to-r from-surface to-background border border-neon-green/30 shadow-neon-md"
        >
          <div className="absolute right-0 top-0 w-96 h-full bg-neon-green/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-xs font-mono tracking-widest text-neon-green uppercase">
                EXCLUSIVE LIMITED ALLOCATION // 250 VEHICLES
              </span>
              <h3 className="text-2xl sm:text-4xl font-black uppercase text-white mt-1">
                SECURE YOUR ITZ FIZZ PROTO-01
              </h3>
              <p className="text-sm text-zinc-400 max-w-xl mt-2">
                Deliveries commence Q2 2027. Early allocation holders receive complimentary track telemetry telemetry
                calibration and custom livery consultation.
              </p>
            </div>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Thank you for your interest! ITZ FIZZ allocation inquiry submitted successfully.");
              }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-neon-green hover:bg-neon-lime text-black font-extrabold text-sm uppercase tracking-widest shadow-neon-md hover:shadow-neon-lg transition-all duration-300 active:scale-95 whitespace-nowrap"
            >
              <span>CONFIRM ALLOCATION</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
