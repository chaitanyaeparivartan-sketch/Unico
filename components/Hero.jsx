"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slides = [
    {
      src: "/images/Sunlit Tropical Villa Courtyard.png",
      alt: "Sunlit Tropical Villa Courtyard",
    },
    {
      src: "/images/Sunny Tropical Bungalow Pathway.png",
      alt: "Sunny Tropical Bungalow Pathway",
    },
  ];

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Scroll-driven text growth calculation (expands as user scrolls)
  const scrollGrowth = Math.min(scrollY / 1600, 0.12);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden select-none">
      {/* Background Architectural Carousel Images */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide
                ? "opacity-100 z-0"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={idx === 0}
              quality={95}
              className="object-cover object-center filter brightness-[0.95] contrast-[1.02]"
              sizes="100vw"
            />
          </div>
        ))}

        {/* Subtle Vignettes & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/20 to-transparent h-[30%] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent top-[45%] pointer-events-none" />
      </div>

      {/* Bottom Centered Content Area with Growing Effect */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 pb-6 sm:pb-8 lg:pb-10 flex flex-col items-center text-center">
        {/* Single-line Headline: BUILD FOR THE LIFE INSIDE with Growing Effect */}
        <div
          className={`transform transition-all duration-1000 ease-out origin-center ${
            isMounted ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
          style={{
            transform: `scale(${1 + scrollGrowth})`,
          }}
        >
          <h1 className="font-canela text-xl sm:text-2xl md:text-3xl lg:text-[2.75rem] xl:text-[3.25rem] font-light tracking-[0.08em] leading-tight text-white uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] whitespace-nowrap mb-3 sm:mb-3.5 transition-all duration-700 ease-out hover:scale-[1.045] hover:tracking-[0.11em] hover:drop-shadow-[0_4px_32px_rgba(212,175,55,0.4)] cursor-default select-none animate-text-grow">
            Build For The Life Inside
          </h1>
        </div>

        {/* Philosophy Paragraph with Smooth Interactive Hover Growth */}
        <p className="max-w-xl text-white/80 hover:text-white text-[11px] sm:text-xs md:text-[13px] lg:text-[14px] font-light leading-relaxed tracking-wide drop-shadow-md transition-all duration-500 ease-out hover:scale-[1.025] hover:tracking-wider cursor-default">
          We design and build enduring spaces where everyday moments thrive.
          From solid foundations to intentional layouts, every detail is
          engineered to support the way you truly live.
        </p>
      </div>

      {/* Bottom Right Corner Small Carousel Dots */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 right-6 sm:right-8 lg:right-12 z-20 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === currentSlide
                ? "w-2.5 h-2.5 bg-white ring-2 ring-white/40 shadow-sm"
                : "w-2 h-2 bg-white/40 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
