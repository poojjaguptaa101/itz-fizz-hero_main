"use client";

import React, { useState } from "react";
import { Zap, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  navRef?: React.RefObject<HTMLElement>;
}

export const Navbar: React.FC<NavbarProps> = ({ navRef }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "OVERVIEW", href: "#overview" },
    { label: "AERODYNAMICS", href: "#aerodynamics" },
    { label: "TELEMETRY", href: "#telemetry" },
    { label: "SPECIFICATIONS", href: "#specs" },
  ];

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12 backdrop-blur-md bg-background/80 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 text-white transition-opacity duration-200"
          aria-label="ITZ FIZZ Home"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-surface border border-white/10 group-hover:border-neon-green/60 transition-colors shadow-neon-sm">
            <Zap className="w-5 h-5 text-neon-green fill-neon-green/20 group-hover:scale-110 transition-transform" />
            <div className="absolute -inset-0.5 rounded-lg bg-neon-green/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-widest text-white flex items-center gap-1.5">
              ITZ<span className="text-neon-green">FIZZ</span>
            </span>
            <span className="text-[9px] tracking-ultrawide text-zinc-400 uppercase font-mono">
              HYPER-MOBILITY
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold tracking-widest text-zinc-300 hover:text-neon-green transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-green transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface/80 border border-white/10 text-[10px] tracking-widest text-zinc-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
            STATUS: ACTIVE
          </div>
          <a
            href="#preorder"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neon-green text-black text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:bg-neon-lime hover:shadow-neon-md active:scale-95"
          >
            <span>PRE-ORDER</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-300 hover:text-white rounded-lg focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-neon-green" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-4 bg-surface/95 p-6 rounded-2xl backdrop-blur-xl border border-white/10 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-widest text-zinc-300 hover:text-neon-green transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#preorder"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-neon-green text-black font-bold tracking-wider text-xs uppercase"
          >
            <span>PRE-ORDER PROTO-01</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};
