import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { Terminal } from "lucide-react";

const codeLines = [
  { text: "const aiAgent = new NeuralArchitecture({", color: "text-[#a4adfd]" },
  { text: "  runtime: 'edge-cloud',", color: "text-slate-200" },
  { text: "  concurrency: 'realtime-sync',", color: "text-emerald-400" },
  {
    text: "  modules: ['turneq', 'stockial', 'alkilo']",
    color: "text-amber-300",
  },
  { text: "});", color: "text-[#a4adfd]" },
  {
    text: "await aiAgent.deployAutonomousPipeline();",
    color: "text-purple-300",
  },
  { text: "// latency: 4ms · live edge", color: "text-slate-400 italic" },
];

export function HeroSection() {
  const { t } = useApp();
  const [displayedLines, setDisplayedLines] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayedLines((prev) => (prev >= codeLines.length ? 2 : prev + 1));
    }, 1300);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="inicio" className="w-full relative">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-6 items-end justify-between min-h-[460px] lg:min-h-[520px]">
        {/* Lado Izquierdo: Consola ultra translúcida */}
        <div className="w-full lg:col-span-5 relative z-10 order-2 lg:order-1">
          <div className="p-4 sm:p-5 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] space-y-3 font-mono text-[12px] sm:text-[13px] leading-relaxed transition-all">
            {/* Header de la consola */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs text-slate-300/80">
              <span className="flex items-center gap-2 text-[#a4adfd] font-medium tracking-wide">
                <Terminal className="w-3.5 h-3.5" />
                <span>ai-pipeline.ts</span>
              </span>
              <span className="flex items-center gap-1 text-[10px] text-emerald-400 uppercase font-semibold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active
              </span>
            </div>

            {/* Código generado */}
            <div className="space-y-1 pl-1">
              {codeLines.slice(0, displayedLines).map((line, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="text-slate-400/60 select-none text-[11px] w-4 pt-0.5 text-right font-light">
                    {idx + 1}
                  </span>
                  <span className={`${line.color} drop-shadow-sm`}>
                    {line.text}
                  </span>
                </div>
              ))}

              <div className="flex items-center gap-2.5">
                <span className="text-slate-400/60 select-none text-[11px] w-4 text-right font-light">
                  {displayedLines + 1}
                </span>
                <span className="inline-block w-2 h-4 bg-[#a4adfd] animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Espacio central en desktop para despejar al robot */}
        <div className="hidden lg:block lg:col-span-2" />

        {/* Lado Derecho: Titular limpio y proporcionado */}
        <div className="w-full lg:col-span-5 flex flex-col justify-end space-y-3 relative z-10 lg:text-right order-1 lg:order-2">
          <div className="text-[11px] sm:text-[12px] tracking-[0.24em] font-semibold uppercase text-[#a4adfd] drop-shadow-md">
            Software & Intelligence Studio
          </div>

          <div className="inline-block relative">
            <h1 className="hero-title-presentation text-4xl sm:text-5xl lg:text-6xl text-white select-none tracking-[0.12em] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
              {t.hero.heading}
            </h1>
            <div className="h-[2px] w-full bg-[#a4adfd] mt-2 rounded-full shadow-[0_0_16px_rgba(164,173,253,0.8)]" />
          </div>

          <div className="text-[12px] sm:text-[13px] tracking-[0.2em] uppercase font-light pt-1 flex items-center gap-3 text-white/90 drop-shadow-md lg:justify-end">
            <span>{t.hero.subtitle}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#a4adfd]" />
            <span className="text-[11px] text-slate-300 lowercase font-mono">
              cloud & ai systems
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export const HeroSectio = HeroSection;
export default HeroSection;
