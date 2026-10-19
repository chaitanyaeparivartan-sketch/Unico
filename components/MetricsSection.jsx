"use client";

import { useState, useRef } from "react";
import { Play, X, Pause, Volume2, VolumeX } from "lucide-react";

export default function MetricsSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleInlinePlay = () => {
    if (!videoRef.current) return;
    if (isPlayingInline) {
      videoRef.current.pause();
      setIsPlayingInline(false);
    } else {
      videoRef.current.play();
      setIsPlayingInline(true);
    }
  };

  const metrics = [
    {
      value: "1M+",
      label: "SQUARE FEET BUILT",
      desc: "Homes, schools, hospitals, resorts and factories across India.",
    },
    {
      value: "40+",
      label: "YEARS IN INDIA",
      desc: "Building since 1985, trusted across generations.",
    },
    {
      value: "5",
      label: "TYPES OF BUILDINGS",
      desc: "Residential, resorts, healthcare, commercial and industrial.",
    },
  ];

  return (
    <section id="metrics" className="w-full bg-[#090c10] text-white py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 select-none border-t border-b border-white/10">
      <div className="max-w-[1440px] mx-auto">
        {/* 50% Video + 50% Content & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Column 1: 50% Video Card */}
          <div className="lg:col-span-6 flex items-center">
            <div className="relative group overflow-hidden bg-neutral-900 aspect-[16/10] w-full shadow-2xl border border-white/10">
              {/* Inline Video Player */}
              <video
                ref={videoRef}
                src="/video/updated_UNICO.mp4"
                poster="/images/video-poster.jpg"
                playsInline
                loop
                muted={isMuted}
                className="w-full h-full object-cover"
                onPlay={() => setIsPlayingInline(true)}
                onPause={() => setIsPlayingInline(false)}
              />

              {/* Play/Pause Overlay */}
              {!isPlayingInline && (
                <div
                  onClick={toggleInlinePlay}
                  className="absolute inset-0 bg-black/40 group-hover:bg-black/30 flex items-center justify-center cursor-pointer transition-colors duration-300"
                >
                  <div className="w-16 h-16 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <Play size={22} fill="white" className="ml-0.5" />
                  </div>
                </div>
              )}

              {/* In-Video Controls when playing */}
              {isPlayingInline && (
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1.5 rounded bg-black/60 backdrop-blur-sm text-white hover:bg-black/80 transition-colors"
                    aria-label="Toggle Mute"
                  >
                    {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  </button>
                  <button
                    onClick={toggleInlinePlay}
                    className="p-1.5 rounded bg-black/60 backdrop-blur-sm text-white hover:bg-black/80 transition-colors"
                    aria-label="Pause Video"
                  >
                    <Pause size={14} />
                  </button>
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-white hover:bg-black/80"
                  >
                    Expand
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Column 2: 50% Stats Container with Title on Top and Stats on Bottom */}
          <div className="lg:col-span-6 flex flex-col justify-between py-1 lg:pl-2">
            {/* Top Part: Title & Tag placed right above stats */}
            <div className="mb-8 lg:mb-10">
              <div className="flex items-center gap-2 mb-3 sm:mb-3.5">
                <span className="w-2 h-2 rotate-45 bg-[#ae7b13] inline-block"></span>
                <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#ae7b13]">
                  CONSTRUCTION METRICS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] xl:text-[2.65rem] font-medium tracking-tight leading-[1.2] text-white max-w-xl">
                Building and developing across India since 1985.
              </h2>
            </div>

            {/* Bottom Part: 3 Metrics Columns with Vertical Dividers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 items-stretch pt-6 border-t border-white/10 lg:border-t-0">
              {metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col justify-end pb-1 sm:px-5 lg:px-6 ${
                    idx < metrics.length - 1
                      ? "sm:border-r border-white/10"
                      : ""
                  }`}
                >
                  <div>
                    <span className="font-light text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] tracking-tight leading-none text-white block font-canela">
                      {metric.value}
                    </span>
                    <span className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.16em] uppercase text-neutral-300 mt-3 sm:mt-4 block">
                      {metric.label}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-2 sm:mt-2.5 font-normal leading-relaxed">
                    {metric.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <div
            onClick={() => setIsVideoModalOpen(false)}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />
          <div className="relative w-full max-w-5xl aspect-video bg-black z-10 shadow-2xl overflow-hidden border border-white/10">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 text-white hover:bg-white hover:text-black transition-colors"
              aria-label="Close video"
            >
              <X size={20} />
            </button>
            <video
              src="/video/updated_UNICO.mp4"
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
