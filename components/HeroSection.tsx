"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "./Navbar";
import { AnimatedHeadline } from "./AnimatedHeadline";
import { Statistics } from "./Statistics";
import { ScrollVisual } from "./ScrollVisual";
import { ProductReveal } from "./ProductReveal";
import { ScrollIndicator } from "./ScrollIndicator";

// Register ScrollTrigger safely in browser context
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinTrackRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // ---------------------------------------------------------------
      // 1. INITIAL LOAD ANIMATION TIMELINE
      // ---------------------------------------------------------------
      const introTl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      if (!prefersReducedMotion) {
        // Step 1: Fade in navigation smoothly
        if (navRef.current) {
          introTl.fromTo(
            navRef.current,
            { y: -30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9 }
          );
        }

        // Step 2: Reveal headline with staggered letters & tags
        const chars = headlineRef.current?.querySelectorAll(".headline-char");
        const headlineTag = headlineRef.current?.querySelector(".headline-tag");
        const headlineSub = headlineRef.current?.querySelector(".headline-sub");

        if (headlineTag) {
          introTl.fromTo(
            headlineTag,
            { y: -15, opacity: 0, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, duration: 0.6 },
            "-=0.5"
          );
        }

        if (chars && chars.length > 0) {
          introTl.fromTo(
            chars,
            {
              y: 50,
              opacity: 0,
              scale: 0.8,
              filter: "blur(6px)",
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              duration: 0.7,
              stagger: 0.035,
              ease: "back.out(1.4)",
            },
            "-=0.4"
          );
        }

        if (headlineSub) {
          introTl.fromTo(
            headlineSub,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            "-=0.3"
          );
        }

        // Step 3: Animate statistics sequentially with upward movement & opacity
        const statCards = statsRef.current?.querySelectorAll(".stat-card");
        if (statCards && statCards.length > 0) {
          introTl.fromTo(
            statCards,
            { y: 40, opacity: 0, scale: 0.94 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              stagger: 0.14,
              ease: "power2.out",
            },
            "-=0.5"
          );
        }

        // Step 4: Reveal central visual with scale & vertical movement
        if (carRef.current) {
          introTl.fromTo(
            carRef.current,
            { scale: 0.7, opacity: 0, y: 30 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 1.1,
              ease: "back.out(1.2)",
            },
            "-=0.8"
          );
        }

        // Step 5: Animate scroll indicator gently
        if (indicatorRef.current) {
          introTl.fromTo(
            indicatorRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7 },
            "-=0.4"
          );
        }
      } else {
        // Fallback for prefers-reduced-motion: immediate display
        gsap.set(
          [
            navRef.current,
            headlineRef.current?.querySelectorAll(".headline-char"),
            statsRef.current?.querySelectorAll(".stat-card"),
            carRef.current,
            indicatorRef.current,
          ],
          { opacity: 1, y: 0, scale: 1, filter: "none" }
        );
      }

      // ---------------------------------------------------------------
      // 2. SCROLL-DRIVEN ANIMATION TIMELINE (GSAP ScrollTrigger)
      // ---------------------------------------------------------------
      if (!prefersReducedMotion && containerRef.current && carRef.current) {
        const car = carRef.current;
        const trail = trailRef.current;
        const chars = Array.from(
          headlineRef.current?.querySelectorAll(".headline-char") || []
        ) as HTMLElement[];

        // Calculate travel distance across viewport
        const computeDimensions = () => {
          const viewportWidth = window.innerWidth;
          const carWidth = car.offsetWidth || 220;
          return {
            travelDistance: viewportWidth - carWidth + 80,
            viewportWidth,
            carWidth,
          };
        };

        const { travelDistance } = computeDimensions();

        // Master ScrollTrigger timeline pinned for multi-stage experience
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=2600",
            pin: pinTrackRef.current,
            scrub: 1.2, // Smooth scrub interpolation
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              // Real-time letter illumination wake calculation
              if (chars.length > 0 && car) {
                const carRect = car.getBoundingClientRect();
                const carCenter = carRect.left + carRect.width / 2;

                chars.forEach((char) => {
                  const charRect = char.getBoundingClientRect();
                  const charCenter = charRect.left + charRect.width / 2;

                  if (carCenter >= charCenter) {
                    // Ignited state
                    char.style.color = "#00FF66";
                    char.style.textShadow =
                      "0 0 15px rgba(0, 255, 102, 0.9), 0 0 35px rgba(0, 255, 102, 0.4)";
                    char.style.transform = "translateY(-4px) scale(1.04)";
                  } else {
                    // Default state
                    char.style.color = "rgba(113, 113, 122, 0.75)";
                    char.style.textShadow = "none";
                    char.style.transform = "translateY(0px) scale(1)";
                  }
                });
              }

              // Update trail width dynamically
              if (trail && car) {
                const currentCarX = gsap.getProperty(car, "x") as number;
                const carWidth = car.offsetWidth || 200;
                gsap.set(trail, { width: Math.max(0, currentCarX + carWidth * 0.7) });
              }
            },
          },
        });

        // --- STAGE 1 -> STAGE 2: Scroll Transformation ---
        // Hide scroll indicator early
        if (indicatorRef.current) {
          scrollTl.to(
            indicatorRef.current,
            { opacity: 0, y: -20, ease: "power1.out", duration: 0.15 },
            0
          );
        }

        // Move car across viewport with dynamic scale, rotation, and slight drift
        scrollTl.to(
          car,
          {
            x: () => window.innerWidth - (car.offsetWidth || 200) + 40,
            scale: 1.15,
            rotation: 2.5,
            ease: "none",
            duration: 0.65,
          },
          0
        );

        // Parallax and fade headline with depth blur
        if (headlineRef.current) {
          scrollTl.to(
            headlineRef.current,
            {
              y: -80,
              opacity: 0.05,
              scale: 0.9,
              filter: "blur(8px)",
              ease: "power2.inOut",
              duration: 0.45,
            },
            0.15
          );
        }

        // Float & fade statistics with parallax depth
        if (statsRef.current) {
          scrollTl.to(
            statsRef.current,
            {
              y: 60,
              opacity: 0,
              scale: 0.92,
              filter: "blur(6px)",
              ease: "power2.inOut",
              duration: 0.45,
            },
            0.15
          );
        }

        // --- STAGE 2 -> STAGE 3: Transition to Product Reveal ---
        // Fade out track and car as it reaches end of runway
        if (trackRef.current) {
          scrollTl.to(
            trackRef.current,
            {
              opacity: 0,
              scale: 1.1,
              y: -60,
              filter: "blur(6px)",
              ease: "power2.in",
              duration: 0.25,
            },
            0.6
          );
        }

        // Reveal the Stage 3 Product Composition cleanly
        if (revealRef.current) {
          scrollTl.to(
            revealRef.current,
            {
              opacity: 1,
              scale: 1,
              y: 0,
              pointerEvents: "auto",
              ease: "power3.out",
              duration: 0.35,
            },
            0.65
          );
        }
      }
    }, containerRef);

    // Resize listener for responsive recalculations
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert(); // Full GSAP cleanup to prevent memory leaks
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-background min-h-screen text-white overflow-hidden"
      id="hero"
    >
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-neon-green/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-0 bg-speed-grid opacity-30" />
      </div>

      {/* Navigation */}
      <Navbar navRef={navRef} />

      {/* Pinned Stage Container */}
      <div
        ref={pinTrackRef}
        className="relative w-full h-screen flex flex-col justify-between pt-24 pb-8 z-10 overflow-hidden"
      >
        {/* Top: Animated Headline */}
        <div className="w-full flex-shrink-0 mt-2 sm:mt-4">
          <AnimatedHeadline headlineRef={headlineRef} />
        </div>

        {/* Center: ScrollVisual (Road Track, Vehicle, Dynamic Trail) */}
        <div className="w-full relative my-auto">
          <ScrollVisual carRef={carRef} trailRef={trailRef} trackRef={trackRef} />

          {/* Overlay Product Reveal (Stage 3) positioned over track when triggered */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <ProductReveal revealRef={revealRef} />
          </div>
        </div>

        {/* Bottom: Animated Statistics */}
        <div className="w-full flex-shrink-0 mb-4 sm:mb-6">
          <Statistics statsRef={statsRef} />
        </div>

        {/* Subtle Scroll Indicator */}
        <ScrollIndicator indicatorRef={indicatorRef} />
      </div>
    </section>
  );
};
