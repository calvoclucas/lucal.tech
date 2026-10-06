import React from "react";
import { useApp } from "../context/AppContext";

export function ServicesSection() {
  const { t, theme } = useApp();
  const isDark = theme === "dark";

  return (
    <div id="servicios">
      <div className="mb-12 inline-block">
        <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] uppercase text-[#a4adfd]">
          {t.services.title}
        </h2>
        <div className="h-0.75 w-full bg-[#a4adfd] mt-2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <div
            className={`rounded-3xl overflow-hidden shadow-2xl border ${
              isDark
                ? "bg-slate-900 border-slate-800"
                : "bg-slate-50 border-slate-200"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=900&q=80"
              alt="Services overview"
              className="w-full h-90 sm:h-110 object-cover"
              style={{
                clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 85%)",
              }}
            />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-7">
          {t.services.items.map((item) => (
            <div key={item.index} className="space-y-1.5">
              <h3
                className={`text-[17px] font-bold tracking-tight ${
                  isDark ? "text-white" : "text-slate-950"
                }`}
              >
                {item.index} {item.title}
              </h3>
              <p
                className={`text-[13px] leading-relaxed max-w-xl ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
