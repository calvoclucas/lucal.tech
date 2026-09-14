import React from "react";

export function Logo({ className = "w-10 h-10", withText = false }) {
  return (
    <div className="flex items-center gap-3">
      {/* Isotipo SVG */}
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} shrink-0`}
      >
        {/* Contenedor angular oscuro con bisel técnico */}
        <rect
          x="2"
          y="2"
          width="44"
          height="44"
          fill="#09090b"
          stroke="#27272a"
          strokeWidth="1.5"
        />

        {/* Estructura geométrica "L" formada por guías de código */}
        <path
          d="M14 14V34H34"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />

        {/* Vector terminal / bracket de software */}
        <path
          d="M24 20L34 20"
          stroke="#52525b"
          strokeWidth="3.5"
          strokeLinecap="square"
        />

        {/* Nodo activo en índigo (Software en vivo / compilación) */}
        <rect x="30" y="30" width="4" height="4" fill="#6366f1" />
      </svg>

      {/* Tipografía de marca (opcional) */}
      {withText && (
        <div className="flex flex-col select-none">
          <div className="flex items-center gap-1 leading-none">
            <span className="text-xl font-black tracking-tight text-zinc-950 font-['Plus_Jakarta_Sans',sans-serif]">
              LUCAL
            </span>
            <span className="text-xs font-mono font-bold px-1.5 py-0.5 bg-zinc-950 text-white tracking-wider">
              TECH
            </span>
          </div>
          <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase mt-1">
            Software Labs
          </span>
        </div>
      )}
    </div>
  );
}
