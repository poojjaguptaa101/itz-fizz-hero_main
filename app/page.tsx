"use client";

import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-neon-green selection:text-black">
      {/* Scroll-Driven Hero Section (Pinned Multi-Stage Experience) */}
      <HeroSection />

      {/* Continuing Page Sections (Feature Deep Dive & Specs) */}
      <FeatureShowcase />

      {/* Footer */}
      <Footer />
    </main>
  );
}
