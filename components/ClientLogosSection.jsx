"use client";

import Image from "next/image";

/*
  Client & Partner Brands Section
  Directly sourced from https://unico-spaces.unicodev.workers.dev/
  
  3 Exact Rows / Categories:
  - Row 1: Direct Corporate & Institutional Clients
  - Row 2: Brands at Properties Constructed By Us
  - Row 3: Our Partners Have Worked With These Brands

  Features:
  - Chips are horizontally centered and have zero roundness (rounded-none)
  - Bold, prominent logo sizes with smooth infinite ticker animation
  - Row 1 & 3 scroll Left, Row 2 scrolls Right (alternating direction)
  - Pauses on hover
*/

// Category 1: Direct Corporate & Institutional Clients
const ROW_1_BRANDS = [
  {
    name: "Sancta Maria International School",
    src: "/images/clients/sancta-maria.webp",
    width: 200,
    height: 100,
  },
  {
    name: "St. Mary's Educational Society",
    src: "/images/clients/st-marys.webp",
    width: 180,
    height: 90,
  },
  {
    name: "B&A Health",
    src: "/images/clients/ba-health.webp",
    width: 170,
    height: 85,
  },
  {
    name: "Legala",
    src: "/images/clients/legala.webp",
    width: 170,
    height: 85,
  },
  {
    name: "Lé Gala Resort",
    src: "/images/clients/legala_resort.webp",
    width: 180,
    height: 90,
  },
  {
    name: "The Alta Group",
    src: "/images/clients/alta.webp",
    width: 170,
    height: 85,
  },
  {
    name: "50+ Private Villa Clients & More",
    src: "/images/clients/private-villas.webp",
    width: 220,
    height: 90,
  },
];

// Category 2: Brands at Properties Constructed By Us
const ROW_2_BRANDS = [
  {
    name: "Apollo Hospitals",
    src: "/images/clients/apollo.webp",
    width: 180,
    height: 90,
    scale: "scale-110",
  },
  {
    name: "HDFC Bank",
    src: "/images/clients/hdfc-bank.webp",
    width: 180,
    height: 90,
    scale: "scale-110",
  },
  {
    name: "Maruti Suzuki",
    src: "/images/clients/maruti-suzuki.webp",
    width: 190,
    height: 90,
  },
  {
    name: "Modulus Housing",
    src: "/images/clients/modulus.webp",
    width: 180,
    height: 90,
  },
  {
    name: "Peter England",
    src: "/images/clients/peter-england.webp",
    width: 180,
    height: 90,
  },
  {
    name: "TVS Motor Company",
    src: "/images/clients/tvs.webp",
    width: 180,
    height: 90,
  },
];

// Category 3: Our Partners Have Worked With These Brands
const ROW_3_BRANDS = [
  {
    name: "Microsoft",
    src: "/images/clients/microsoft.webp",
    width: 190,
    height: 90,
  },
  {
    name: "DRDO",
    src: "/images/clients/drdo.webp",
    width: 150,
    height: 90,
  },
  {
    name: "GMR",
    src: "/images/clients/gmr.webp",
    width: 170,
    height: 85,
  },
  {
    name: "Candeur",
    src: "/images/clients/candeur.webp",
    width: 180,
    height: 90,
  },
  {
    name: "Indian Immunologicals",
    src: "/images/clients/indian-immunologicals.webp",
    width: 200,
    height: 90,
  },
  {
    name: "Pepsi",
    src: "/images/clients/pepsi.webp",
    width: 170,
    height: 85,
  },
];

export default function ClientLogosSection() {
  return (
    <section
      id="clients"
      className="w-full bg-[#080b0f] text-white py-16 sm:py-20 lg:py-24 px-3 sm:px-8 lg:px-12 select-none border-t border-b border-white/10 relative overflow-hidden"
    >
      {/* Subtle Background Architectural Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(127, 94, 18,0.06),transparent)] pointer-events-none" />

      {/* 3-Row Ticker Keyframes */}
      <style>{`
        @keyframes clientTickerLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes clientTickerRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-ticker-row-1 {
          display: flex;
          width: max-content;
          animation: clientTickerLeft 36s linear infinite;
        }

        .animate-ticker-row-2 {
          display: flex;
          width: max-content;
          animation: clientTickerRight 40s linear infinite;
        }

        .animate-ticker-row-3 {
          display: flex;
          width: max-content;
          animation: clientTickerLeft 34s linear infinite;
        }

        .animate-ticker-row-1:hover,
        .animate-ticker-row-2:hover,
        .animate-ticker-row-3:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto relative z-10 px-2 sm:px-0">
        {/* Header Block matching UNICO Design System */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 lg:mb-14 gap-6">
          <div className="max-w-2xl">
            {/* Tag */}
            <div className="flex items-center gap-2 mb-3 sm:mb-3.5">
              <span className="w-2 h-2 rotate-45 bg-[#7F5E12] inline-block"></span>
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#7F5E12]">
                BRANDS ASSOCIATED WITH OUR WORK
              </span>
            </div>

            {/* Headline in Canela */}
            <h2 className="font-canela text-2xl sm:text-3xl lg:text-[2.6rem] font-light tracking-tight leading-[1.18] text-white">
              Trusted by leading institutions, brands &amp; private estates.
            </h2>
          </div>

          <p className="max-w-md text-neutral-400 text-xs sm:text-sm font-normal leading-relaxed">
            Over four decades of precision civil craftsmanship across mission-critical campuses, healthcare infrastructure, commercial flagships, and luxury private estates.
          </p>
        </div>

        {/* 3-Row Continuous Marquee Showcase Container */}
        <div className="border-y border-white/10 bg-[#0c1017]/85 backdrop-blur-md py-8 sm:py-12 space-y-6 sm:space-y-9 overflow-hidden relative">
          {/* Subtle Left & Right Edge Vignette Fade Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-36 bg-gradient-to-r from-[#080b0f] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-36 bg-gradient-to-l from-[#080b0f] to-transparent z-20 pointer-events-none" />

          {/* Row 1: Direct Corporate & Institutional Clients */}
          <div className="space-y-4">
            {/* Row 1 Name Chip - Strictly Single-Line & Horizontally Centered */}
            <div className="flex items-center justify-center w-full px-1 sm:px-4">
              <span className="h-[1px] w-6 sm:w-28 bg-white/10 hidden md:block" />
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-1.5 sm:py-2 rounded-none bg-[#141822] border border-[#7F5E12]/50 text-[#7F5E12] text-[9px] min-[390px]:text-[10px] sm:text-[12px] font-bold tracking-[0.08em] min-[390px]:tracking-[0.12em] sm:tracking-[0.2em] uppercase backdrop-blur-md shadow-sm select-none whitespace-nowrap mx-1 sm:mx-3">
                <span className="w-1.5 h-1.5 rotate-45 bg-[#7F5E12] inline-block shrink-0" />
                <span>Direct Corporate &amp; Institutional Clients</span>
              </span>
              <span className="h-[1px] w-6 sm:w-28 bg-white/10 hidden md:block" />
            </div>

            {/* Row 1 Marquee (Scrolling Left) */}
            <div className="overflow-hidden">
              <div className="animate-ticker-row-1 items-center">
                {[...ROW_1_BRANDS, ...ROW_1_BRANDS].map((brand, index) => (
                  <div
                    key={`row1-${brand.name}-${index}`}
                    className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 mx-1 sm:mx-2 md:mx-2.5 shrink-0 group cursor-default transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-28 sm:w-36 md:w-44 h-12 sm:h-16 md:h-18 flex items-center justify-center relative">
                      <Image
                        src={brand.src}
                        alt={brand.name}
                        title={brand.name}
                        width={brand.width}
                        height={brand.height}
                        className="max-w-[115px] sm:max-w-[155px] md:max-w-[185px] max-h-[36px] sm:max-h-[48px] md:max-h-[56px] w-auto h-auto object-contain filter grayscale contrast-125 brightness-110 opacity-80 group-hover:filter-none group-hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 bg-[#7F5E12]/70 group-hover:bg-[#7F5E12] inline-block shrink-0 transition-colors shadow-[0_0_8px_rgba(127, 94, 18,0.5)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Subtle Divider Line */}
          <div className="h-[1px] w-full bg-white/5" />

          {/* Row 2: Brands at Properties Constructed By Us */}
          <div className="space-y-4">
            {/* Row 2 Name Chip - Strictly Single-Line & Horizontally Centered */}
            <div className="flex items-center justify-center w-full px-1 sm:px-4">
              <span className="h-[1px] w-6 sm:w-28 bg-white/10 hidden md:block" />
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-1.5 sm:py-2 rounded-none bg-[#141822] border border-[#7F5E12]/50 text-[#7F5E12] text-[9px] min-[390px]:text-[10px] sm:text-[12px] font-bold tracking-[0.08em] min-[390px]:tracking-[0.12em] sm:tracking-[0.2em] uppercase backdrop-blur-md shadow-sm select-none whitespace-nowrap mx-1 sm:mx-3">
                <span className="w-1.5 h-1.5 rotate-45 bg-[#7F5E12] inline-block shrink-0" />
                <span>Brands at Properties Constructed By Us</span>
              </span>
              <span className="h-[1px] w-6 sm:w-28 bg-white/10 hidden md:block" />
            </div>

            {/* Row 2 Marquee (Scrolling Right) */}
            <div className="overflow-hidden">
              <div className="animate-ticker-row-2 items-center">
                {[...ROW_2_BRANDS, ...ROW_2_BRANDS].map((brand, index) => (
                  <div
                    key={`row2-${brand.name}-${index}`}
                    className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 mx-1 sm:mx-2 md:mx-2.5 shrink-0 group cursor-default transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-28 sm:w-36 md:w-44 h-12 sm:h-16 md:h-18 flex items-center justify-center relative">
                      <Image
                        src={brand.src}
                        alt={brand.name}
                        title={brand.name}
                        width={brand.width}
                        height={brand.height}
                        className={`max-w-[115px] sm:max-w-[155px] md:max-w-[185px] max-h-[36px] sm:max-h-[48px] md:max-h-[56px] w-auto h-auto object-contain filter grayscale contrast-125 brightness-110 opacity-80 group-hover:filter-none group-hover:opacity-100 transition-all duration-300 ${brand.scale || ""}`}
                      />
                    </div>
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 bg-[#7F5E12]/70 group-hover:bg-[#7F5E12] inline-block shrink-0 transition-colors shadow-[0_0_8px_rgba(127, 94, 18,0.5)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Subtle Divider Line */}
          <div className="h-[1px] w-full bg-white/5" />

          {/* Row 3: Our Partners Have Worked With These Brands */}
          <div className="space-y-4">
            {/* Row 3 Name Chip - Strictly Single-Line & Horizontally Centered */}
            <div className="flex items-center justify-center w-full px-1 sm:px-4">
              <span className="h-[1px] w-6 sm:w-28 bg-white/10 hidden md:block" />
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-1.5 sm:py-2 rounded-none bg-[#141822] border border-[#7F5E12]/50 text-[#7F5E12] text-[9px] min-[390px]:text-[10px] sm:text-[12px] font-bold tracking-[0.08em] min-[390px]:tracking-[0.12em] sm:tracking-[0.2em] uppercase backdrop-blur-md shadow-sm select-none whitespace-nowrap mx-1 sm:mx-3">
                <span className="w-1.5 h-1.5 rotate-45 bg-[#7F5E12] inline-block shrink-0" />
                <span>Our Partners Have Worked With These Brands</span>
              </span>
              <span className="h-[1px] w-6 sm:w-28 bg-white/10 hidden md:block" />
            </div>

            {/* Row 3 Marquee (Scrolling Left) */}
            <div className="overflow-hidden">
              <div className="animate-ticker-row-3 items-center">
                {[...ROW_3_BRANDS, ...ROW_3_BRANDS].map((brand, index) => (
                  <div
                    key={`row3-${brand.name}-${index}`}
                    className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 mx-1 sm:mx-2 md:mx-2.5 shrink-0 group cursor-default transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-28 sm:w-36 md:w-44 h-12 sm:h-16 md:h-18 flex items-center justify-center relative">
                      <Image
                        src={brand.src}
                        alt={brand.name}
                        title={brand.name}
                        width={brand.width}
                        height={brand.height}
                        className="max-w-[115px] sm:max-w-[155px] md:max-w-[185px] max-h-[36px] sm:max-h-[48px] md:max-h-[56px] w-auto h-auto object-contain filter grayscale contrast-125 brightness-110 opacity-80 group-hover:filter-none group-hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 bg-[#7F5E12]/70 group-hover:bg-[#7F5E12] inline-block shrink-0 transition-colors shadow-[0_0_8px_rgba(127, 94, 18,0.5)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
