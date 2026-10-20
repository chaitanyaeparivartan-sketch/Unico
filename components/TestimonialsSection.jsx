"use client";

import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: "01",
      quote:
        "They chased our solicitor harder than we did. Exchange slipped once and they had it back on track the same afternoon.",
      client: "Grace Liu",
      role: "Bought in Richmond",
      avatar: "/images/avatar-grace.png",
    },
    {
      id: "02",
      quote:
        "Straight answers about a difficult lease, including the parts that cost them the commission. We came back two years later.",
      client: "James Aldridge",
      role: "Lettings, Wapping",
      avatar: "/images/avatar-james.png",
    },
    {
      id: "03",
      quote:
        "Two viewings, one offer, done in a fortnight. The valuation was within four thousand of what we achieved.",
      client: "Priya Raman",
      role: "Sold in Islington",
      avatar: "/images/avatar-priya.png",
    },
    {
      id: "04",
      quote:
        "We were living in Dubai throughout the two years of construction. UNICO sent daily dashboard photos every single evening at 7 PM. The handover file was immaculate.",
      client: "Anand & Priya Varma",
      role: "Homeowners • Kokapet Luxury Villa",
      avatar: "/images/client-anand.png",
    },
    {
      id: "05",
      quote:
        "Building on our steep rocky cliffside in Alibaug felt like an impossible dream. UNICO's architects sculpted the entire residence into the natural topography without damaging a single ancient tree.",
      client: "Dr. Vikram Singhania",
      role: "Estate Commission • Alibaug Residence",
      avatar: "/images/article-2.jpg",
    },
    {
      id: "06",
      quote:
        "UNICO delivered a level of finish that you usually only see in Zurich or Milan. The acoustic insulation, concealed climate systems, and custom travertine masonry are flawless.",
      client: "Elena & Rahul Mehta",
      role: "Homeowners • Goa Sanctuary",
      avatar: "/images/article-3.jpg",
    },
  ];

  return (
    <section
      id="testimonials"
      className="w-full bg-[#090c10] text-white pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24 select-none border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 mb-8 sm:mb-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-2 h-2 rotate-45 bg-[#ae7b13] inline-block"></span>
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#ae7b13]">
              CLIENT VOICES
            </span>
          </div>

          <h2 className="font-canela text-3xl sm:text-5xl md:text-6xl lg:text-[3.8rem] tracking-tight text-white font-light leading-[1.12] mb-5">
            Built on trust.
            <br />
            Remembered for the experience.
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base md:text-[16.5px] font-light leading-relaxed max-w-2xl">
            Every person quoted here has agreed to speak to prospective UNICO clients. Just ask and we will make the introduction.
          </p>
        </div>
      </div>

      {/* Auto-scrolling continuous infinite marquee */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Subtle edge gradient fades matching black background */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#090c10] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#090c10] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {/* Track 1 */}
          <div className="flex gap-6 sm:gap-7 pr-6 sm:pr-7 shrink-0">
            {testimonials.map((item, index) => (
              <div
                key={`track1-${item.id}-${index}`}
                className="w-[320px] sm:w-[370px] lg:w-[390px] h-[280px] sm:h-[295px] bg-[#12161f] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-white/10 shrink-0 transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.6)] hover:border-[#ae7b13]/40 hover:-translate-y-1 select-none"
              >
                <div>
                  {/* Quotation Icon matching UI */}
                  <div className="mb-4">
                    <svg
                      className="w-7 h-7 text-[#ae7b13]/60"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Description Quote */}
                  <p className="text-neutral-200 text-[14.5px] sm:text-[15.5px] font-normal leading-[1.62] tracking-normal">
                    {item.quote}
                  </p>
                </div>

                {/* Bottom Client Info: Avatar + Name + Role */}
                <div className="flex items-center gap-3.5 pt-4">
                  <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0 bg-neutral-800 border border-white/10">
                    <Image
                      src={item.avatar}
                      alt={item.client}
                      fill
                      className="object-cover object-center"
                      sizes="40px"
                    />
                  </div>

                  <div>
                    <h4 className="font-sans font-bold text-white text-[14.5px] leading-tight">
                      {item.client}
                    </h4>
                    <p className="text-[12px] text-neutral-400 font-normal tracking-normal mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Track 2: Identical clone for zero-gap infinite looping */}
          <div className="flex gap-6 sm:gap-7 pr-6 sm:pr-7 shrink-0" aria-hidden="true">
            {testimonials.map((item, index) => (
              <div
                key={`track2-${item.id}-${index}`}
                className="w-[320px] sm:w-[370px] lg:w-[390px] h-[280px] sm:h-[295px] bg-[#12161f] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-white/10 shrink-0 transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.6)] hover:border-[#ae7b13]/40 hover:-translate-y-1 select-none"
              >
                <div>
                  {/* Quotation Icon matching UI */}
                  <div className="mb-4">
                    <svg
                      className="w-7 h-7 text-[#ae7b13]/60"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Description Quote */}
                  <p className="text-neutral-200 text-[14.5px] sm:text-[15.5px] font-normal leading-[1.62] tracking-normal">
                    {item.quote}
                  </p>
                </div>

                {/* Bottom Client Info: Avatar + Name + Role */}
                <div className="flex items-center gap-3.5 pt-4">
                  <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0 bg-neutral-800 border border-white/10">
                    <Image
                      src={item.avatar}
                      alt={item.client}
                      fill
                      className="object-cover object-center"
                      sizes="40px"
                    />
                  </div>

                  <div>
                    <h4 className="font-sans font-bold text-white text-[14.5px] leading-tight">
                      {item.client}
                    </h4>
                    <p className="text-[12px] text-neutral-400 font-normal tracking-normal mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
