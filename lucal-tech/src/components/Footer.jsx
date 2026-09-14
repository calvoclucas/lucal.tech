import React from "react";

export function Footer() {
  return (
    <footer className="bg-[#0b132b] text-slate-400 py-10 text-center text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white text-sm">Lucal.tech</span>
          <span>• Software Solutions & Development</span>
        </div>
        <div>© 2026 Lucal TECH. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}
