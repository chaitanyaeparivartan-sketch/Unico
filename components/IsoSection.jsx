"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Download, Eye, X, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";

function IsoBadge({ number }) {
  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center mb-6 group">
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full transition-transform duration-700 ease-out group-hover:rotate-45"
      >
        {/* Outer Dotted / Ticked Ring */}
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="#7F5E12"
          strokeWidth="1.2"
          strokeDasharray="2 3.5"
          className="opacity-75"
        />
        {/* Inner Solid Gold Ring */}
        <circle
          cx="60"
          cy="60"
          r="46"
          fill="#0c1017"
          stroke="#7F5E12"
          strokeWidth="1.5"
          className="transition-colors duration-300 group-hover:stroke-[#9E7820]"
        />
      </svg>

      {/* Center ISO & Number */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
        <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-[#7F5E12] mb-0.5">
          ISO
        </span>
        <span className="text-[20px] sm:text-[22px] font-bold tracking-tight text-white">
          {number}
        </span>
      </div>
    </div>
  );
}

export default function IsoSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  const standards = [
    {
      id: "9001",
      number: "9001",
      code: "ISO 9001:2015",
      title: "Quality Management",
      scope: "Quality management systems — Requirements",
      desc: "Consistent, documented construction methodologies from groundbreaking to turnkey handover, audited for zero structural defect tolerance.",
      certNo: "IN26/00000877",
      validity: "15 Oct 2026 – 30 Sep 2029",
      certifiedSince: "15 October 2026",
      auditor: "SGS United Kingdom Ltd",
      accreditation: "UKAS (0005) & IAF Multilateral Recognition",
      activities: "Construction of Residential Apartments, Commercial and Retail Projects",
      pdfUrl: "/certificates/SGS_ISO_9001.pdf",
      previewImage: "/images/certificates/sgs-iso-9001-certificate.webp",
    },
    {
      id: "14001",
      number: "14001",
      code: "ISO 14001:2015",
      title: "Environmental Management",
      scope: "Environmental management systems — Requirements with guidance for use",
      desc: "Internationally audited ecological standards minimizing carbon intensity, site runoffs, and energy consumption across all job sites.",
      certNo: "IN26/00000878",
      validity: "15 Oct 2026 – 30 Apr 2029",
      certifiedSince: "15 October 2026",
      auditor: "SGS United Kingdom Ltd",
      accreditation: "UKAS (0005) & IAF Multilateral Recognition",
      activities: "Construction of Residential Apartments, Commercial and Retail Projects",
      pdfUrl: "/certificates/SGS_ISO_14001.pdf",
      previewImage: "/images/certificates/sgs-iso-14001-certificate.webp",
    },
    {
      id: "45001",
      number: "45001",
      code: "ISO 45001:2018",
      title: "Health & Safety Management",
      scope: "Occupational health and safety management systems — Requirements with guidance for use",
      desc: "Comprehensive safety governance safeguarding on-site labor, engineering staff, and subcontractors through proactive hazard controls.",
      certNo: "IN26/00000879",
      validity: "15 Oct 2026 – 15 Oct 2029",
      certifiedSince: "15 October 2026",
      auditor: "SGS United Kingdom Ltd",
      accreditation: "UKAS (0005) & IAF Multilateral Recognition",
      activities: "Construction of Residential Apartments, Commercial and Retail Projects",
      pdfUrl: "/certificates/SGS_ISO_45001.pdf",
      previewImage: "/images/certificates/sgs-iso-45001-certificate.webp",
    },
  ];

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCert]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCert]);

  return (
    <section
      id="iso-certifications"
      className="w-full bg-[#090b0e] text-white py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 select-none border-t border-white/5"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14 lg:mb-16">
          <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
            <span className="w-2 h-2 rotate-45 bg-[#7F5E12] inline-block"></span>
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#7F5E12]">
              STANDARDS & ACCREDITATIONS
            </span>
          </div>

          <h2 className="font-canela text-3xl sm:text-5xl md:text-6xl lg:text-[3.8rem] tracking-tight text-white font-light leading-[1.12] mb-4 sm:mb-5">
            ISO Certified Excellence
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base md:text-[16.5px] font-light leading-relaxed max-w-2xl">
            Internationally certified and audited by SGS United Kingdom Ltd with UKAS and IAF multilateral accreditation across Quality, Environment, and Occupational Health & Safety.
          </p>
        </div>

        {/* 3-Column Grid with Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/10 md:divide-x md:divide-white/10">
          {standards.map((item, idx) => (
            <div
              key={item.id}
              className={`py-10 sm:py-12 md:py-14 flex flex-col justify-between ${idx === 0
                  ? "md:pr-8 lg:pr-12"
                  : idx === 1
                    ? "md:px-8 lg:px-12 border-t border-white/10 md:border-t-0"
                    : "md:pl-8 lg:pl-12 border-t border-white/10 md:border-t-0"
                }`}
            >
              <div>
                {/* Header row: Medallion Badge + Code Pill */}
                <div className="flex items-start justify-between gap-4 mb-2">
                  <IsoBadge number={item.number} />
                  <span className="text-[10.5px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#7F5E12] bg-[#7F5E12]/10 border border-[#7F5E12]/25 px-2.5 py-1 rounded">
                    {item.code}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>

                {/* Scope */}
                <div className="text-[11.5px] font-medium tracking-wide text-neutral-400 mb-3 italic">
                  {item.scope}
                </div>

                {/* Description */}
                <p className="text-neutral-400 text-xs sm:text-[13.5px] font-light leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Certificate Preview Card */}
                <div className="relative group/cert mb-6">
                  <div
                    onClick={() => setSelectedCert(item)}
                    className="relative w-full aspect-[1/1.414] max-w-[280px] sm:max-w-[320px] mx-auto md:mx-0 rounded-[4px] overflow-hidden bg-white/95 border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-300 group-hover/cert:border-[#7F5E12] group-hover/cert:shadow-[0_12px_36px_rgba(127,94,18,0.25)] group-hover/cert:scale-[1.01]"
                  >
                    <Image
                      src={item.previewImage}
                      alt={`${item.code} Certificate - UNICO`}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 300px, 320px"
                    />

                    {/* Dark Hover Overlay with Zoom Icon */}
                    <div className="absolute inset-0 bg-[#090b0e]/75 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-12 h-12 rounded-full bg-[#7F5E12] text-white flex items-center justify-center shadow-lg mb-2 transition-transform duration-300 group-hover/cert:scale-110">
                        <Eye size={22} strokeWidth={2.2} />
                      </div>
                      <span className="text-xs font-semibold tracking-wider uppercase text-white">
                        Click to Inspect Certificate
                      </span>
                      <span className="text-[10px] text-neutral-400 mt-1">
                        Cert No: {item.certNo}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Metadata Specifications */}
                {/* <div className="space-y-1.5 text-xs text-neutral-300 bg-white/[0.03] border border-white/5 p-3.5 rounded mb-5">
                  <div className="flex items-center justify-between text-[11.5px]">
                    <span className="text-neutral-500 uppercase tracking-wider text-[10px]">Cert No:</span>
                    <span className="font-mono text-white/90 font-medium">{item.certNo}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11.5px]">
                    <span className="text-neutral-500 uppercase tracking-wider text-[10px]">Validity:</span>
                    <span className="text-neutral-200">{item.validity}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11.5px]">
                    <span className="text-neutral-500 uppercase tracking-wider text-[10px]">Audited By:</span>
                    <span className="text-[#7F5E12] font-medium">SGS UK (UKAS & IAF)</span>
                  </div>
                </div> */}
              </div>

              {/* Action Buttons: View Preview & Download PDF */}
              <div className="flex items-center gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedCert(item)}
                  className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider uppercase px-3.5 py-2.5 bg-white/10 hover:bg-[#7F5E12] text-white border border-white/15 hover:border-[#7F5E12] rounded-[3px] transition-all duration-200 cursor-pointer shadow-sm"
                >
                  <Eye size={14} />
                  <span>Preview</span>
                </button>

                <a
                  href={item.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider uppercase px-3.5 py-2.5 bg-[#7F5E12]/20 hover:bg-[#7F5E12] text-white border border-[#7F5E12]/50 hover:border-[#7F5E12] rounded-[3px] transition-all duration-200 cursor-pointer shadow-sm group"
                >
                  <Download size={14} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
                  <span>PDF Document</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-[#7F5E12]" />
            <span>All 3 certificates issued to <strong>UNICO</strong> for Residential, Commercial and Retail Construction.</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-500 text-[11px] tracking-wide">
            <span>SGS UK LTD</span>
            <span>•</span>
            <span>UKAS ACCREDITED (0005)</span>
            <span>•</span>
            <span>IAF MEMBER</span>
          </div>
        </div>
      </div>

      {/* Lightbox Certificate Modal */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c1017] border border-white/15 rounded-lg shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10 bg-[#090b0e]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rotate-45 bg-[#7F5E12]"></span>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {selectedCert.code} — {selectedCert.title}
                  </h4>
                  <p className="text-xs text-neutral-400 font-mono">
                    Certificate No: {selectedCert.certNo}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={selectedCert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 bg-[#7F5E12] text-white hover:bg-[#9E7820] rounded transition-colors"
                >
                  <Download size={13} />
                  <span>Download PDF</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            {/* Modal Body: Certificate Image & Details */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Certificate Image Frame */}
              <div className="lg:col-span-7 flex justify-center">
                <div className="relative w-full max-w-[420px] aspect-[1/1.414] bg-white rounded shadow-2xl overflow-hidden border border-white/20">
                  <Image
                    src={selectedCert.previewImage}
                    alt={`${selectedCert.code} Official Certificate`}
                    fill
                    className="object-contain p-2"
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                </div>
              </div>

              {/* Certificate Metadata Breakdown */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#7F5E12] mb-1.5 block">
                    CERTIFIED ACCREDITATION
                  </span>
                  <h5 className="text-lg font-bold text-white mb-2">
                    {selectedCert.scope}
                  </h5>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                    {selectedCert.desc}
                  </p>
                </div>

                <div className="space-y-3 text-xs border-y border-white/10 py-4">
                  <div>
                    <span className="text-neutral-500 uppercase tracking-wider text-[10px] block mb-0.5">
                      Scope of Certified Activities:
                    </span>
                    <span className="text-neutral-200 font-medium">
                      {selectedCert.activities}
                    </span>
                  </div>

                  <div>
                    <span className="text-neutral-500 uppercase tracking-wider text-[10px] block mb-0.5">
                      Certified Entity & Location:
                    </span>
                    <span className="text-neutral-200 font-medium">
                      UNICO, Level 2, Plot No:32, Doyens Township, Serilingampally, Hyderabad, Telangana 500019
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div>
                      <span className="text-neutral-500 uppercase tracking-wider text-[10px] block mb-0.5">
                        Validity Period:
                      </span>
                      <span className="text-neutral-200 font-medium">
                        {selectedCert.validity}
                      </span>
                    </div>
                    <div>
                      <span className="text-neutral-500 uppercase tracking-wider text-[10px] block mb-0.5">
                        Issuing Body:
                      </span>
                      <span className="text-neutral-200 font-medium">
                        {selectedCert.auditor}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mobile action bar */}
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={selectedCert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-3 bg-[#7F5E12] hover:bg-[#9E7820] text-white rounded transition-colors"
                  >
                    <Download size={14} />
                    <span>Open / Download Official PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
