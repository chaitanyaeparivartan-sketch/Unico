"use client";

import Image from "next/image";

export default function CtaSection({ onOpenContact }) {
  return (
    <section id="cta" className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] flex items-center justify-center overflow-hidden select-none border-t border-white/5 scroll-mt-20">
      {/* Background Architectural Image */}
      {/* Background Architectural Image - Clean, bright, and vibrant */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/cta/cta-background.webp"
          alt="Tropical Bungalow Garden Walkway"
          fill
          priority
          quality={95}
          className="object-cover object-center filter brightness-[0.82] contrast-[1.03]"
          sizes="100vw"
        />
      </div>

      {/* Atmospheric Soft Black Scrim & Radial Vignette */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#090c10]/80 via-[#090c10]/25 to-[#090c10]/85 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.50)_0%,rgba(0,0,0,0.22)_55%,rgba(9,12,16,0.75)_100%)] pointer-events-none" />

      {/* Center Call To Action Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center py-20 sm:py-24 lg:py-28">
        {/* Tag: ■ LET'S TALK */}
        <div className="flex items-center justify-center gap-2.5 mb-5 sm:mb-6">
          <span className="w-2 h-2 rotate-45 bg-[#7F5E12] inline-block"></span>
          <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.24em] uppercase text-[#7F5E12]">
            LET&apos;S TALK
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="font-canela text-3xl sm:text-5xl md:text-6xl lg:text-[3.8rem] text-white font-normal tracking-tight leading-[1.14] mb-6 sm:mb-7 text-center max-w-4xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.75)]">
          Tell us what you want to build.
          <br className="hidden sm:inline" />
          <span className="text-white"> We will tell you honestly if we can help.</span>
        </h2>

        {/* Description Paragraph */}
        <p className="text-white/95 text-sm sm:text-base md:text-[16.5px] font-normal leading-relaxed max-w-3xl text-center mb-10 sm:mb-12 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
          A quick call or a site visit — that is all it takes to get started. No long presentations, no obligation. Whether you are planning a new home, expanding a school, developing a piece of land, or building a factory — just get in touch and we will take it from there.
        </p>

        {/* Contact Details Row (Office Address & Email) */}
        <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center sm:items-start justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 text-center">
          {/* Office Address */}
          <div className="flex flex-col items-center max-w-md sm:max-w-sm">
            <div className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#7F5E12] mb-2 sm:mb-2.5">
              OFFICE ADDRESS
            </div>
            <p className="text-white font-normal text-sm sm:text-[14.5px] leading-relaxed drop-shadow-md">
              Level 2, Plot No:32, Doyens Township, Serilingampalli (M),
              <br className="hidden md:inline" /> Telangana 500019
            </p>
          </div>

          {/* Elegant Divider between Address and Email on tablet/desktop */}
          <div
            className="hidden sm:block w-[1px] self-stretch min-h-[54px] bg-white/20 my-1"
            aria-hidden="true"
          />

          {/* Email */}
          <div className="flex flex-col items-center">
            <div className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#7F5E12] mb-2 sm:mb-2.5">
              EMAIL
            </div>
            <a
              href="mailto:contact@unicospaces.com"
              className="text-white hover:text-[#7F5E12] font-normal text-sm sm:text-[14.5px] leading-relaxed transition-colors duration-200 drop-shadow-md underline-offset-4 hover:underline"
            >
              contact@unicospaces.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
