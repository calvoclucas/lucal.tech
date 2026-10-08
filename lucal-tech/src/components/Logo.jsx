import React, { useState } from "react";

export function Logo() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex items-center gap-3 select-none">
      <div className="relative w-9 h-9 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-[#00c8f8] via-slate-700 to-transparent border border-cyan-500/30 shadow-[0_0_15px_rgba(0,200,248,0.25)] shrink-0">
        {!imgError ? (
          <img
            src="/logo.png"
            alt="lucal.tech logo"
            className="w-full h-full object-cover rounded-full"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-[#0b111e] flex items-center justify-center font-black text-xs text-[#00c8f8]">
            LT
          </div>
        )}
      </div>

      <div className="flex flex-col text-left font-['Lato',sans-serif]">
        <span className="text-base font-black tracking-tight text-white leading-none">
          lucal<span className="text-[#00c8f8]">.tech</span>
        </span>
        <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-slate-400 mt-1">
          IT SOLUTIONS
        </span>
      </div>
    </div>
  );
}

export default Logo;
