import React from "react";
import { useApp } from "../context/AppContext";

export function AboutSection() {
  const { t, theme } = useApp();
  const isDark = theme === "dark";

  return (
    <div id="nosotros">
      <div className="mb-12 inline-block">
        <h2 className="hero-title-presentation text-2xl sm:text-4xl text-[#a4adfd]">
          {t.about.title1} <br /> {t.about.title2}
        </h2>
        <div className="h-[2px] w-full bg-[#a4adfd] mt-1 rounded-full opacity-90" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Lado izquierdo: Imagen con máscara diagonal */}
        <div className="lg:col-span-6 relative">
          <div className="overflow-hidden rounded-3xl shadow-sm border border-slate-200 bg-slate-50">
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80"
              alt="Engineering development"
              className="w-full h-[320px] sm:h-[420px] object-cover"
              style={{
                clipPath: "polygon(0 12%, 100% 0, 100% 88%, 0% 100%)",
              }}
            />
          </div>
        </div>

        {/* Lado derecho: Párrafos de alto contraste y excelente lectura */}
        <div className="lg:col-span-6 space-y-6 text-[14px] sm:text-[15px] leading-relaxed text-slate-800 font-normal">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
          <p>{t.about.p4}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
