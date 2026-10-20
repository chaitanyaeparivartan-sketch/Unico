"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedDevelopments({ onOpenContact }) {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("featured");

  const developments = [
    {
      id: "school-building",
      category: "institutional",
      tag: "Institutional",
      title: "School Building",
      subtitle: "Institutional Campus Development",
      desc: "A flagship modern institutional campus development delivered turnkey in Hyderabad. Featuring specialized educational spaces, seismic structural reinforcement, acoustic privacy partitioning, and tested non-toxic environmental materials.",
      image: "/images/featured/school/sancta-maria-02.webp",
      alt: "School Building - Institutional Campus Development",
      gallery: [
        "/images/featured/school/sancta-maria-01.webp",
        "/images/featured/school/sancta-maria-02.webp",
        "/images/featured/school/sancta-maria-03.webp",
        "/images/featured/school/sancta-maria-04.webp",
        "/images/featured/school/sancta-maria-05.webp",
      ],
      details: {
        Client: "Sancta Maria",
        "Built-Up Area": "1,20,000 sq. ft.",
        Location: "Hyderabad",
        Year: "2026",
        Role: "Turnkey EPC",
      },
    },
    {
      id: "industrial",
      category: "industrial",
      tag: "Cleanroom",
      title: "Industrial",
      subtitle: "Medical Device Facility",
      desc: "A high-precision ISO-certified medical equipment assembly plant for B&A Health. Incorporates clinical-grade seamless antimicrobial epoxy flooring, multi-stage HEPA air filtration systems, and vibration-damped foundation slabs.",
      image: "/images/featured/industrial/ba-frame-5.webp",
      alt: "Industrial - Medical Device Facility",
      gallery: [
        "/images/featured/industrial/ba-frame-5.webp",
        "/images/featured/industrial/ba-frame-1.webp",
        "/images/featured/industrial/ba-frame-2.webp",
        "/images/featured/industrial/ba-frame-6.webp",
      ],
      details: {
        Client: "B&A Health",
        "Built-Up Area": "10,000 sq. ft.",
        Location: "Hyderabad",
        Role: "Cleanroom Contractor",
      },
    },
    {
      id: "luxury-villa",
      category: "residential",
      tag: "Residential",
      title: "Luxury Villa",
      subtitle: "Custom-Engineered Luxury Residence",
      desc: "An ultra-premium private estate engineering feat featuring dramatic pitched tiled roofs, low-E solar control glazing, integrated multi-zone climate automation, natural stone patios, and bespoke architectural woodwork.",
      image: "/images/featured/villa/villa-01.webp",
      alt: "Luxury Villa - Custom-Engineered Luxury Residence",
      gallery: [
        "/images/featured/villa/villa-01.webp",
        "/images/featured/villa/villa-02.webp",
      ],
      details: {
        "Built-Up Area": "25,000 sq. ft.",
        Location: "Western Hills",
        Year: "2025",
        Role: "Turnkey Builder",
      },
    },
    {
      id: "commercial",
      category: "commercial",
      tag: "Commercial",
      title: "Commercial",
      subtitle: "Enterprise Commercial Development",
      desc: "An enterprise commercial and learning center delivered on an accelerated timeline. Built with column-free flexible meeting spaces, heavy-duty fire-rated acoustic assemblies, and automated energy monitoring systems.",
      image: "/images/featured/commercial/commercial-01.webp",
      alt: "Commercial - Enterprise Commercial Development",
      gallery: [
        "/images/featured/commercial/commercial-01.webp",
        "/images/featured/commercial/commercial-02.webp",
        "/images/featured/commercial/commercial-03.webp",
        "/images/featured/commercial/commercial-04.webp",
        "/images/featured/commercial/commercial-05.webp",
      ],
      details: {
        Tenant: "Modulus Education",
        "Built-Up Area": "32,000 sq. ft.",
        Year: "2024",
        Role: "Commercial EPC",
      },
    },
    {
      id: "retail-complex",
      category: "commercial",
      tag: "Retail",
      title: "Retail Complex",
      subtitle: "High-Street Retail Promenade",
      desc: "A prime multi-tenant commercial arcade engineering marvel featuring seamless spider-glass curtain walls, subterranean multi-level vehicle parking, and high-efficiency central VRF cooling infrastructure.",
      image: "/images/featured/retail/prime-retail1.webp",
      alt: "Retail Complex - High-Street Retail Promenade",
      gallery: [
        "/images/featured/retail/prime-retail1.webp",
        "/images/featured/retail/prime-retail3.webp",
        "/images/featured/retail/prime-retail-reality.webp",
      ],
      details: {
        Tenant: "Aditya Birla",
        Year: "2023",
        Location: "Hyderabad",
        Role: "Facade & Civil EPC",
      },
    },
    {
      id: "hospitality",
      category: "residential",
      tag: "Hospitality",
      title: "Hospitality",
      subtitle: "Luxury Beachfront Villas & Dining",
      desc: "A beachfront hospitality destination comprising private timber cottages and an open-air coastal restaurant deck. Crafted with marine-grade weather-resistant finishes, custom teak woodwork, and climate-resilient insulation designed to endure severe tropical conditions.",
      image: "/images/featured/hospitality/project-legala-01.webp",
      alt: "Hospitality - Luxury Beachfront Villas & Dining",
      gallery: [
        "/images/featured/hospitality/project-legala-01.webp",
        "/images/featured/hospitality/project-legala-02.webp",
        "/images/featured/hospitality/project-legala-03.webp",
        "/images/featured/hospitality/project-legala-04.webp",
      ],
      details: {
        Client: "Legala Coastal Resort",
        Location: "South Goa",
        "Built-Up Area": "45,000 sq. ft.",
        Year: "2025",
        Role: "Turnkey Handover",
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
      id="projects"
      className="w-full bg-[#090c10] text-white py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 select-none border-t border-white/10"
    >
      <span id="developments" className="absolute -top-24 left-0 pointer-events-none opacity-0" />
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 lg:mb-14">
          <div className="flex items-center gap-2 mb-3 sm:mb-3.5">
            <span className="w-2 h-2 rotate-45 bg-[#ae7b13] inline-block"></span>
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#ae7b13]">
              FEATURED DEVELOPMENTS
            </span>
          </div>

          <h2 className="font-canela text-3xl sm:text-5xl md:text-6xl lg:text-[3.8rem] tracking-tight text-white font-light leading-[1.12] mb-4 sm:mb-5">
            Landmark Developments
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base md:text-[16.5px] font-light leading-relaxed max-w-2xl">
            Explore our engineered landmarks across institutional, cleanroom, hospitality, and custom residential developments.
          </p>

          {/* Toggle Button for Featured and More Projects */}
          <div className="mt-8 flex items-center">
            <div className="inline-flex p-1 bg-white/[0.04] border border-white/10 backdrop-blur-sm">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("featured");
                  setHoveredId(null);
                }}
                className={`relative px-5 py-2.5 text-[12px] sm:text-[12.5px] font-semibold tracking-[0.08em] uppercase transition-all duration-300 flex items-center gap-2.5 cursor-pointer select-none ${
                  activeTab === "featured"
                    ? "bg-[#ae7b13] text-white shadow-lg shadow-[#ae7b13]/25"
                    : "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
                }`}
                aria-pressed={activeTab === "featured"}
              >
                <span
                  className={`w-1.5 h-1.5 rotate-45 transition-colors duration-300 ${
                    activeTab === "featured" ? "bg-white" : "bg-neutral-500"
                  }`}
                />
                <span>Featured</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab("more");
                  setHoveredId(null);
                }}
                className={`relative px-5 py-2.5 text-[12px] sm:text-[12.5px] font-semibold tracking-[0.08em] uppercase transition-all duration-300 flex items-center gap-2.5 cursor-pointer select-none ${
                  activeTab === "more"
                    ? "bg-[#ae7b13] text-white shadow-lg shadow-[#ae7b13]/25"
                    : "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
                }`}
                aria-pressed={activeTab === "more"}
              >
                <span
                  className={`w-1.5 h-1.5 rotate-45 transition-colors duration-300 ${
                    activeTab === "more" ? "bg-white" : "bg-neutral-500"
                  }`}
                />
                <span>More Projects</span>
              </button>
            </div>
          </div>
        </div>

        {/* Expanding Cards View (3 per row based on active tab) */}
        <div key={activeTab} className="w-full animate-in fade-in duration-500">
          {(() => {
            const currentProjects =
              activeTab === "featured"
                ? developments.slice(0, 3)
                : developments.slice(3, 6);
            const isRowHovered = currentProjects.some((item) => item.id === hoveredId);

            return (
              <div className="flex flex-col md:flex-row gap-5 sm:gap-6 items-stretch w-full min-h-[440px] sm:min-h-[480px] lg:min-h-[510px]">
                {currentProjects.map((item, idx) => {
                  const isHovered = hoveredId === item.id;

                  return (
                    <div
                      key={item.id}
                      onMouseEnter={() => setHoveredId(item.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={() => {
                        if (hoveredId === item.id) {
                          handleOpenPreview(item);
                        } else {
                          setHoveredId(item.id);
                        }
                      }}
                      className={`relative h-[420px] sm:h-[460px] lg:h-[510px] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group border border-white/10 ${
                        isHovered
                          ? "md:flex-[2.6] shadow-[0_20px_60px_rgba(0,0,0,0.85)] border-white/30"
                          : isRowHovered
                          ? "md:flex-[0.8] opacity-75 md:opacity-85 hover:opacity-100"
                          : "md:flex-1"
                      }`}
                    >
                      {/* Background Image with Zoom on Hover */}
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={activeTab === "featured" && idx === 0}
                        className={`object-cover object-center transition-transform duration-700 ease-out ${
                          isHovered ? "scale-105" : "scale-100"
                        }`}
                      />

                      {/* Dark Gradient Overlay for optimal contrast */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/25 to-black/90 pointer-events-none" />

                      {/* Card Top: Title & Subtitle */}
                      <div className="absolute top-6 left-6 right-6 sm:top-8 sm:left-8 sm:right-8 z-10">
                        <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#ae7b13] block mb-1">
                          {item.tag}
                        </span>
                        <h3 className="font-sans text-2xl sm:text-3xl lg:text-[30px] font-bold text-white tracking-tight leading-[1.18] max-w-sm drop-shadow-md">
                          {item.title}
                        </h3>
                        <p className="text-neutral-300 text-xs sm:text-[13px] font-medium tracking-wide mt-1 drop-shadow">
                          {item.subtitle}
                        </p>

                        {/* Description revealed on hover / expanded state */}
                        <div
                          className={`overflow-hidden transition-all duration-500 ease-out ${
                            isHovered
                              ? "max-h-36 opacity-100 mt-3"
                              : "max-h-0 opacity-0 mt-0"
                          }`}
                        >
                          <p className="text-neutral-200 text-xs sm:text-sm leading-relaxed max-w-md font-light drop-shadow">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      {/* Card Bottom: Header Style Split CTA Button */}
                      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-10">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenPreview(item);
                          }}
                          className="group/btn flex items-stretch cursor-pointer select-none transition-transform duration-300 hover:scale-[1.02] shadow-2xl"
                          aria-label={`Learn More about ${item.title}`}
                        >
                          <span className="bg-white text-black text-[12px] sm:text-[12.5px] font-medium tracking-[0.06em] uppercase px-4 sm:px-5 py-2.5 flex items-center justify-center transition-all duration-300 group-hover/btn:bg-[#f2efe9]">
                            Learn More
                          </span>
                          <span className="w-[1px] bg-neutral-300"></span>
                          <span className="bg-white text-black px-2.5 sm:px-3 py-2.5 flex items-center justify-center transition-all duration-300 group-hover/btn:bg-[#f2efe9]">
                            <ArrowUpRight
                              size={15}
                              strokeWidth={2.2}
                              className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
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
            {/* Top Bar: Title, Subtitle, Specs & Close Button */}
            <div className="px-5 sm:px-8 py-4 sm:py-5 border-b border-white/10 flex items-center justify-between bg-[#090c10]/90">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#ae7b13] inline-block"></span>
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#ae7b13]">
                    {selectedProject.subtitle}
                  </span>
                </div>
                <h3 className="font-canela text-2xl sm:text-3xl text-white font-light tracking-tight">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleClosePreview}
                className="p-2 sm:p-2.5 rounded-none bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white transition-colors duration-200 border border-white/10 cursor-pointer"
                aria-label="Close Preview"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Stage: High-Resolution Photo Viewer */}
            <div className="relative w-full h-[380px] sm:h-[480px] md:h-[540px] lg:h-[580px] bg-black flex items-center justify-center overflow-hidden">
              {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                <Image
                  key={selectedProject.gallery[activeImageIndex]}
                  src={selectedProject.gallery[activeImageIndex]}
                  alt={`${selectedProject.title} preview ${activeImageIndex + 1}`}
                  fill
                  priority
                  className="object-contain object-center transition-all duration-300"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              )}

              {/* Previous Button */}
              {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/60 hover:bg-[#ae7b13] text-white border border-white/20 transition-all duration-200 backdrop-blur-md shadow-2xl group cursor-pointer"
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
                  className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/60 hover:bg-[#ae7b13] text-white border border-white/20 transition-all duration-200 backdrop-blur-md shadow-2xl group cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight
                    size={22}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </button>
              )}

              {/* Image Counter Badge */}
              {selectedProject.gallery && (
                <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-md text-white text-[11px] sm:text-xs font-mono font-medium tracking-wider px-3 py-1.5 border border-white/15">
                  {String(activeImageIndex + 1).padStart(2, "0")} /{" "}
                  {String(selectedProject.gallery.length).padStart(2, "0")}
                </div>
              )}
            </div>

            {/* Bottom Bar: Thumbnails Strip */}
            <div className="px-5 sm:px-8 py-4 bg-[#090c10] border-t border-white/10 flex items-center justify-center">
              {/* Thumbnails row */}
              <div className="flex items-center justify-center gap-2.5 overflow-x-auto max-w-full pb-1 no-scrollbar">
                {selectedProject.gallery &&
                  selectedProject.gallery.map((imgSrc, imgIdx) => (
                    <button
                      key={imgSrc}
                      type="button"
                      onClick={() => setActiveImageIndex(imgIdx)}
                      className={`relative w-16 h-12 sm:w-20 sm:h-14 shrink-0 overflow-hidden transition-all duration-200 border cursor-pointer ${
                        activeImageIndex === imgIdx
                          ? "border-[#ae7b13] ring-2 ring-[#ae7b13]/60 scale-105"
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
