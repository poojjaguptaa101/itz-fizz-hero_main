<<<<<<< HEAD
# ⚡ ITZ FIZZ — Scroll-Driven Hypercar Hero Experience

A premium, modern, scroll-driven hero section built with **Next.js 14**, **React**, **Tailwind CSS**, and **GSAP ScrollTrigger**. Inspired by aerodynamic hyper-performance engineering and high-end automotive design.

![ITZ FIZZ Preview](./public/car-reveal.jpg)

---

## 🌟 Key Features

* **Bi-Directional Scroll scrub**: Pinned multi-stage GSAP ScrollTrigger timeline smoothly linked to scroll physics.
* **Dynamic Wake Illumination**: As the vehicle glides across the road track, individual letters of **"WELCOME ITZ FIZZ"** ignite dynamically with neon lime luminescence.
* **Multi-Stage Narrative**:
  * **Stage 1 (Introduction)**: Staggered entrance animations for Navigation, Headline letters, Telemetry Statistics, and Central Vehicle.
  * **Stage 2 (Scroll Transformation)**: Vehicle accelerates across runway, scales up, tilts in 3D perspective, leaves an energy wake trail, and blurs background layers in parallax.
  * **Stage 3 (Product Reveal)**: Seamless unpinning into production-spec studio reveal with quad-motor telemetry and reservation allocation CTA.
* **Animated Telemetry Statistics**:
  * `95%` — Customer Satisfaction (Global Benchmark)
  * `80%` — Sustainable Innovation (Circular Materials)
  * `90%` — Product Excellence (Track Certified)
* **High-Performance Architecture**:
  * Clean `gsap.context()` with complete memory cleanup (`ctx.revert()`).
  * Hardware-accelerated GPU transforms (`will-change: transform`).
  * Full accessibility with `prefers-reduced-motion` detection and fallbacks.
  * Responsive layout across mobile, tablet, and ultra-wide displays.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 14 (App Router)** | React framework, SSR/SSG, optimized asset handling |
| **React 18** | Functional components and hooks (`useRef`, `useEffect`) |
| **Tailwind CSS** | Utility-first styling with custom neon color tokens and glassmorphism |
| **GSAP 3.12** | Timeline sequencing, staggered letter reveals, and easing |
| **GSAP ScrollTrigger** | Scroll-driven pinned timeline and scrub interpolation |
| **Lucide React** | Precision iconography |
| **TypeScript** | Strict type safety and maintainability |

---

## 📁 Project Structure

```
itz-fizz-hero/
├── app/
│   ├── globals.css          # Design system tokens, carbon patterns & neon glows
│   ├── layout.tsx           # Luxury typography fonts and viewport metadata
│   └── page.tsx             # Master page assembly
├── components/
│   ├── Navbar.tsx           # Responsive navigation with telemetry status
│   ├── AnimatedHeadline.tsx # Letter-spaced display headline with wake ignition
│   ├── Statistics.tsx       # Glassmorphic telemetry stat cards
│   ├── ScrollVisual.tsx     # Runway track, car asset, energy wake trail
│   ├── ProductReveal.tsx    # Stage 3 studio hypercar reveal & specs matrix
│   ├── ScrollIndicator.tsx  # Animated accelerator scroll pill
│   ├── HeroSection.tsx      # GSAP master timeline & ScrollTrigger controller
│   ├── FeatureShowcase.tsx  # Interactive Drive Mode configurator & engineering
│   └── Footer.tsx           # Brand footer and back-to-top navigation
├── public/
│   ├── car-top.png          # Transparent top-view car asset
│   └── car-reveal.jpg       # High-resolution production spec studio render
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites
Ensure you have **Node.js 18+** installed:
```bash
node -v
npm -v
```

### 2. Navigate to the project directory
```bash
cd "C:\Users\Pooja\.gemini\antigravity\scratch\itz-fizz-hero"
```

### 3. Install dependencies
```bash
npm install
```

### 4. Start the development server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to interact with the experience.

### 5. Create a production build
```bash
npm run build
npm run start
```

---

## 📦 Pushing to GitHub

Run the following commands in the project folder to push to your repository:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "feat: complete ITZ FIZZ scroll-driven hero section"

# Rename branch to main
git branch -M main

# Add your GitHub remote repository (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/itz-fizz-hero.git

# Push to GitHub
git push -u origin main
```

---

## 🌐 Deploying to Free Hosting Platforms

### Option A: Deploy to Vercel (Recommended)

1. Push your repository to GitHub.
2. Visit [Vercel](https://vercel.com/) and sign in with GitHub.
3. Click **"Add New" > "Project"**.
4. Import `itz-fizz-hero`.
5. Keep default settings (`Framework Preset: Next.js`).
6. Click **Deploy**. Your site will be live on a custom `.vercel.app` domain with SSL.

### Option B: Deploy to Netlify

1. Visit [Netlify](https://www.netlify.com/) and link your GitHub account.
2. Select the `itz-fizz-hero` repository.
3. Set Build command to `npm run build` and publish directory to `.next`.
4. Deploy!

---

## 🛡️ License

MIT License © 2026 ITZ FIZZ.
=======
# itz-fizz-hero_main
>>>>>>> 52afddfbed990f428696224b53e28a257e463d7e
