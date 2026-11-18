"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowUpRight, X, ChevronLeft, ChevronRight, MapPin, Calendar, Layers, Building2 } from "lucide-react";

export default function UpcomingProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const upcomingProjects = [
    {
      id: "neighbourhood-mall",
      category: "commercial",
      tag: "Retail & Entertainment",
      title: "Neighbourhood Mall & Multiplex",
      subtitle: "RETAIL & ENTERTAINMENT PROMENADE",
      desc: "A contemporary multi-level neighborhood shopping and entertainment destination featuring high-street retail storefronts, open-air dining terraces, multi-screen multiplex screens, and two-level subterranean parking.",
      image: "/images/upcoming/upcoming1-1.jpeg",
      alt: "Neighbourhood Mall & Multiplex - West Hyderabad",
      gallery: [
        "/images/upcoming/upcoming1-1.jpeg",
        "/images/upcoming/upcoming1-2.jpeg",
        // "/images/featured/retail-building/retail-building-03.webp",
        // "/images/featured/retail-building/retail-building-04.webp",
        // "/images/featured/retail-building/retail-building-05.webp",
      ],
      details: {
        Location: "West Hyderabad",
        Type: "Mall & Multiplex",
        Status: "Pre-Construction",
        Role: "Turnkey EPC Builder",
      },
    },
    {
      id: "business-hotel",
      category: "hospitality",
      tag: "Hospitality",
      title: "Business Hotel",
      subtitle: "EXECUTIVE HOSPITALITY DESTINATION",
      desc: "A premium business hotel engineered for modern corporate travelers. Featuring smart executive suites, sound-isolated conferencing halls, all-day dining lounges, wellness spas, and sustainable energy infrastructure.",
      image: "/images/upcoming/upcoming2-1.jpeg",
      alt: "Business Hotel - West Hyderabad",
      gallery: [
        "/images/upcoming/upcoming2-1.jpeg",
        "/images/upcoming/upcoming2-2.jpeg",
        "/images/upcoming/upcoming2-3.jpeg",
        "/images/upcoming/upcoming2-4.jpeg",
        "/images/upcoming/upcoming2-5.jpeg",
      ],
      details: {
        Location: "West Hyderabad",
        Type: "Business Hotel",
        Status: "In Planning",
        Role: "Turnkey EPC Builder",
      },
    },
    {
      id: "tech-park",
      category: "commercial",
      tag: "Commercial & Tech",
      title: "Tech Park",
      subtitle: "ENTERPRISE TECH CAMPUS & COURTYARD",
      desc: "A flagship commercial and enterprise tech campus featuring lush landscaped podium terraces, central courtyard atriums, geometric water elements, and interconnected high-rise towers.",
      image: "/images/featured/techpark/tech-park-1.webp",
      alt: "Tech Park - Enterprise Tech Campus & Courtyard",
      gallery: [
        "/images/featured/techpark/tech-park-1.webp",
        "/images/featured/techpark/tech-park-2.webp",
        "/images/featured/techpark/tech-park-3.webp",
        "/images/featured/techpark/tech-park-4.webp",
        // "/images/featured/techpark/tech-park-5.webp",
      ],
      details: {
        Client: "Enterprise Commercial & Tech Park",
        "Built-Up Area": "95,000 sq. ft.",
        Location: "Hyderabad",
        Year: "2025",
        Role: "Turnkey Commercial EPC",
      },
    },
  ];

  const handleOpenPreview = (project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const handleClosePreview = () => {
    setSelectedProject(null);
    setActiveImageIndex(0);
  };

  const handleNextImage = useCallback(() => {
    if (!selectedProject?.gallery) return;
    setActiveImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
  }, [selectedProject]);

  const handlePrevImage = useCallback(() => {
    if (!selectedProject?.gallery) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
    );
  }, [selectedProject]);

  const handleInquire = (e, projectTitle) => {
    e.stopPropagation();
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-contact-modal", {
          detail: { project: projectTitle },
        })
      );
    }
  };

  // Lock background scroll when preview modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  // Keyboard navigation for image preview modal
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClosePreview();
      } else if (e.key === "ArrowRight") {
        handleNextImage();
      } else if (e.key === "ArrowLeft") {
        handlePrevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, handleNextImage, handlePrevImage]);

  return (
    <section
      id="upcoming"
      className="w-full bg-[#080b0f] text-white pt-12 sm:pt-16 pb-14 sm:pb-20 px-6 sm:px-8 lg:px-12 border-t border-white/10 select-none"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header - Clean and Minimal */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rotate-45 bg-[#7F5E12] inline-block" />
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#7F5E12]">
              PIPELINE & INITIATIVES
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-canela text-3xl sm:text-5xl md:text-6xl tracking-tight text-white font-light leading-[1.15]">
                Upcoming Projects
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed max-w-xl mt-3">
                Next-generation retail, commercial hospitality, and custom residential destinations currently in planning and pre-construction.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs text-neutral-400 tracking-wide uppercase font-mono">
              <span className="w-2 h-2 rounded-full bg-[#7F5E12] animate-pulse inline-block" />
              <span>3 Major Developments Underway</span>
            </div>
          </div>
        </div>

        {/* Minimal 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
          {upcomingProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenPreview(project)}
              className="group relative flex flex-col bg-[#0d121a] border border-white/10 hover:border-[#7F5E12]/70 transition-all duration-500 cursor-pointer overflow-hidden shadow-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:-translate-y-1"
            >
              {/* Card Image Container */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-950">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient Shadows */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d121a] via-transparent to-black/60 pointer-events-none" />

                {/* Top Badge: Status + Tag */}
                <div className="absolute top-3.5 left-3.5 right-3.5 z-10 flex items-center justify-between pointer-events-none">
                  {/* <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7F5E12] animate-pulse" />
                    Upcoming
                  </span> */}

                  {/* <span className="text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-neutral-300">
                    {project.tag}
                  </span> */}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[#7F5E12] text-[10.5px] font-bold tracking-[0.16em] uppercase block mb-1.5">
                    {project.subtitle}
                  </span>

                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-amber-100 transition-colors">
                    {project.title}
                  </h3>

                  {/* <p className="text-neutral-400 text-xs sm:text-[13px] font-light leading-relaxed mb-5 line-clamp-3">
                    {project.desc}
                  </p> */}
                </div>

                {/* Key Spec Chips */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {Object.entries(project.details).slice(0, 4).map(([label, value]) => (
                      <div
                        key={label}
                        className="bg-[#121822] border border-white/5 px-2.5 py-1.5 flex flex-col"
                      >
                        <span className="text-neutral-400 text-[9px] uppercase tracking-wider font-semibold">
                          {label}
                        </span>
                        <span className="text-white text-[11.5px] font-medium truncate mt-0.5">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Minimal Action Bar */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenPreview(project);
                      }}
                      className="text-xs font-semibold text-[#7F5E12] hover:text-[#a07718] flex items-center gap-1 tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      <span>View Gallery</span>
                      <ArrowUpRight size={13} strokeWidth={2.2} />
                    </button>

                    {/* <button
                        type="button"
                        onClick={(e) => handleInquire(e, project.title)}
                        className="text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 bg-white/10 hover:bg-[#7F5E12] text-white border border-white/15 hover:border-[#7F5E12] transition-all cursor-pointer"
                      >
                        Inquire
                      </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-up Image Preview Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300 select-none"
          onClick={handleClosePreview}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-6xl max-h-[94vh] bg-[#0c1017] border border-white/15 rounded-none shadow-[0_25px_80px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Dedicated Close Button */}
            <button
              type="button"
              onClick={handleClosePreview}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-5 z-30 p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-[#7F5E12] text-white border border-white/20 hover:border-[#7F5E12] transition-all duration-200 backdrop-blur-md shadow-lg cursor-pointer group"
              aria-label="Close Preview"
            >
              <X size={18} className="transition-transform group-hover:scale-110" />
            </button>

            {/* Top Header Bar */}
            <div className="p-4 sm:p-5 md:px-7 md:py-4 pr-14 sm:pr-16 md:pr-16 bg-[#090c10] border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 shrink-0">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#7F5E12]" />
                  <span className="text-[#7F5E12] font-bold text-[10px] sm:text-[11px] tracking-[0.16em] uppercase">
                    UPCOMING • {selectedProject.subtitle}
                  </span>
                </div>
                <h3 className="font-sans text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight truncate">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Specs Chips */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {selectedProject.details &&
                  Object.entries(selectedProject.details).map(([label, value]) => (
                    <div
                      key={label}
                      className="bg-[#141820] border border-white/10 px-2.5 py-1.5 shadow-sm"
                    >
                      <span className="text-[#7F5E12] text-[9px] sm:text-[9.5px] font-bold tracking-[0.14em] uppercase block leading-none mb-0.5">
                        {label}
                      </span>
                      <span className="text-white text-xs sm:text-[12.5px] font-medium block leading-tight whitespace-nowrap">
                        {value}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Main Stage Image Viewer */}
            <div className="relative w-full flex-1 min-h-[380px] sm:min-h-[480px] md:min-h-[540px] lg:min-h-[580px] bg-black flex items-center justify-center overflow-hidden">
              {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                <Image
                  key={selectedProject.gallery[activeImageIndex]}
                  src={selectedProject.gallery[activeImageIndex]}
                  alt={`${selectedProject.title} preview ${activeImageIndex + 1}`}
                  fill
                  priority
                  className="object-contain object-center transition-all duration-300"
                  sizes="(max-width: 1400px) 100vw, 1400px"
                />
              )}

              {/* Prev Button */}
              {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/60 hover:bg-[#7F5E12] text-white border border-white/20 transition-all duration-200 backdrop-blur-md shadow-2xl group cursor-pointer z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft
                    size={22}
                    className="transition-transform group-hover:-translate-x-0.5"
                  />
                </button>
              )}

              {/* Next Button */}
              {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                <button
                  type="button"
                  onClick={handleNextImage}
                  className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/60 hover:bg-[#7F5E12] text-white border border-white/20 transition-all duration-200 backdrop-blur-md shadow-2xl group cursor-pointer z-10"
                  aria-label="Next image"
                >
                  <ChevronRight
                    size={22}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </button>
              )}

              {/* Counter Badge */}
              {selectedProject.gallery && (
                <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-md text-white text-[11px] sm:text-xs font-mono font-medium tracking-wider px-3 py-1.5 border border-white/15 z-10">
                  {String(activeImageIndex + 1).padStart(2, "0")} /{" "}
                  {String(selectedProject.gallery.length).padStart(2, "0")}
                </div>
              )}
            </div>

            {/* Bottom Thumbnails Strip */}
            <div className="px-5 sm:px-8 py-3.5 bg-[#090c10] border-t border-white/10 flex items-center justify-center">
              <div className="flex items-center justify-center gap-2.5 overflow-x-auto max-w-full pb-1 no-scrollbar">
                {selectedProject.gallery &&
                  selectedProject.gallery.map((imgSrc, imgIdx) => (
                    <button
                      key={imgSrc}
                      type="button"
                      onClick={() => setActiveImageIndex(imgIdx)}
                      className={`relative w-16 h-12 sm:w-20 sm:h-14 shrink-0 overflow-hidden transition-all duration-200 border cursor-pointer ${activeImageIndex === imgIdx
                        ? "border-[#7F5E12] ring-2 ring-[#7F5E12]/60 scale-105"
                        : "border-white/15 opacity-60 hover:opacity-100"
                        }`}
                    >
                      <Image
                        src={imgSrc}
                        alt={`Thumbnail ${imgIdx + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

