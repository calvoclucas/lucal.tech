import React, { useState } from "react";
import { useApp } from "../context/AppContext";

export function Logo({ dark }) {
  const [imgError, setImgError] = useState(false);
  const appContext = useApp?.();

  const isDark = dark !== undefined ? dark : appContext?.theme === "dark";

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Icono / Logo circular */}
      <div className="relative w-9 h-9 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-[#00c8f8] via-slate-600 to-transparent border border-cyan-400/40 shadow-[0_0_15px_rgba(0,200,248,0.3)] shrink-0">
        {!imgError ? (
          <img
            src="/logo.png"
            alt="lucal.tech logo"
            className="w-full h-full object-cover rounded-full"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-[#070b14] flex items-center justify-center font-black text-xs text-[#00c8f8]">
            LT
          </div>
        )}
      </div>

      {/* Marca tipográfica */}
      <div className="flex flex-col text-left font-['Josefin_Sans',sans-serif]">
        <span
          style={{ color: "#00c8f8" }}
          className="text-xl font-bold tracking-tight leading-none drop-shadow-xs"
        >
          lucal.tech
        </span>
        <span
          className={`text-[9px] font-bold uppercase tracking-[0.28em] mt-1 transition-colors ${
            isDark ? "text-slate-400" : "text-slate-700"
          }`}
        >
          IT SOLUTIONS
        </span>
      </div>
    </div>
  );
}

export default Logo;
