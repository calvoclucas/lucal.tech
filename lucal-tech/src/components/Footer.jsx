import React from "react";
import { useApp } from "../context/AppContext";

export function Footer() {
  const { t, theme } = useApp();
  const isDark = theme === "dark";

  return (
    <footer
      className={`border-t py-12 text-[13px] transition-colors ${
        isDark
          ? "border-slate-800/80 text-slate-400 bg-[#0b0f19]"
          : "border-slate-200 text-slate-600 bg-white"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            className={`font-black uppercase tracking-wider ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Lucal TECH
          </span>
          <span>• {t.footer.tagline}</span>
        </div>
        <div>{t.footer.rights}</div>
      </div>
    </footer>
  );
}
