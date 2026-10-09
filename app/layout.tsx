import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ITZ FIZZ — Hyper-Engineered Adrenaline",
  description:
    "Experience the raw performance and sustainable innovation of ITZ FIZZ. A scroll-driven aerodynamic journey.",
  keywords: ["ITZ FIZZ", "hypercar", "electric vehicle", "aerodynamics", "GSAP scroll"],
  authors: [{ name: "ITZ FIZZ Engineering" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-zinc-100 antialiased selection:bg-neon-green selection:text-black">
        {children}
      </body>
    </html>
  );
}
