import React from "react";
import { MessageCircle, Code2 } from "lucide-react";

export function Navbar({ whatsappNumber, whatsappMsg }) {
  return (
    <header className="bg-[#0b132b] text-white border-b border-slate-800/80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black shadow-lg shadow-blue-600/30">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-white leading-none">
              Lucal<span className="text-blue-500">.tech</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-1">
              IT Solutions
            </span>
          </div>
        </a>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-300">
          <a href="#inicio" className="hover:text-blue-400 transition">
            Inicio
          </a>
          <a href="#nosotros" className="hover:text-blue-400 transition">
            Nosotros
          </a>
          <a href="#servicios" className="hover:text-blue-400 transition">
            Servicios
          </a>
          <a href="#proceso" className="hover:text-blue-400 transition">
            Proceso
          </a>
          <a href="#proyectos" className="hover:text-blue-400 transition">
            Proyectos
          </a>
        </nav>

        {/* CTA */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-wider uppercase transition shadow-md shadow-blue-600/30 flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Cotizar Ahora</span>
        </a>
      </div>
    </header>
  );
}
