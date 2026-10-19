"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MetricsSection from "@/components/MetricsSection";
import StorySection from "@/components/StorySection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedDevelopments from "@/components/FeaturedDevelopments";
import DrawingToDoneSection from "@/components/DrawingToDoneSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import IsoSection from "@/components/IsoSection";
import CtaSection from "@/components/CtaSection";
import ContactModal from "@/components/ContactModal";
import Image from "next/image";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#090c10] text-white selection:bg-[#d4af37]/30 selection:text-white">
      {/* Top Header */}
      <Header onOpenContact={() => setContactOpen(true)} />

      {/* Main Hero Section */}
      <Hero />

      {/* Construction Metrics & Video Section */}
      <MetricsSection />

      {/* Our Story: 'THE UNICO JOURNEY' (1985 to Today) */}
      <StorySection onOpenContact={() => setContactOpen(true)} />

      {/* Services Section with Vertical Scroll Cards: 'WHAT WE DO' */}
      <ServicesSection onOpenContact={() => setContactOpen(true)} />

      {/* Featured Developments: 'LANDMARK DEVELOPMENTS' with Expanding Cards */}
      <FeaturedDevelopments onOpenContact={() => setContactOpen(true)} />

      {/* Interactive Blueprint to Reality Comparison Slider: 'FROM DRAWING TO DONE' */}
      <DrawingToDoneSection />

      {/* Testimonials Section: 'CLIENT VOICES' */}
      <TestimonialsSection />

      {/* ISO Certified Excellence Section: 'QUALITY & STANDARDS' */}
      <IsoSection />

      {/* CTA Section: 'YOUR NEXT ADDRESS STARTS HERE' */}
      <CtaSection onOpenContact={() => setContactOpen(true)} />

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 sm:px-8 lg:px-12 max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-neutral-400 tracking-wider uppercase bg-[#090c10]">
        <div className="flex items-center gap-4">
          <div className="relative w-32 h-10">
            <Image
              src="/images/unico-logo-cropped.png"
              alt="UNICO Logo"
              fill
              className="object-contain object-left"
              sizes="140px"
            />
          </div>
          <span className="text-neutral-500">|</span>
          <span>© 2026 UNICO Atelier</span>
        </div>
        <div className="flex items-center gap-8 text-[11px] tracking-[0.16em]">
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#metrics" className="hover:text-white transition-colors">Metrics</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
          <a href="#quality" className="hover:text-white transition-colors">Quality</a>
          <button
            onClick={() => setContactOpen(true)}
            className="hover:text-amber-400 transition-colors cursor-pointer text-white"
          >
            Start a Project
          </button>
        </div>
      </footer>
    </main>
  );
}
