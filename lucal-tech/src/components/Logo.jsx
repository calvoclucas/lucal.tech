import React from "react";

export function Logo({ dark = true, className = "" }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect
          width="36"
          height="36"
          rx="10"
          fill={dark ? "#161d31" : "#f1f5f9"}
        />
        <path
          d="M10 9V26H22"
          stroke={dark ? "#ffffff" : "#0f172a"}
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 14H27M21.5 14V23"
          stroke="#a4adfd"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="21.5" cy="23" r="1.5" fill="#a4adfd" />
      </svg>

      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-black text-[15px] tracking-[-0.02em] ${
              dark ? "text-white" : "text-slate-900"
            }`}
          >
            LUCAL
          </span>
          <span className="font-black text-[15px] tracking-[-0.02em] text-[#a4adfd]">
            TECH
          </span>
        </div>
        <span className="text-[9px] font-medium tracking-[0.24em] text-slate-400 uppercase mt-1 leading-none">
          SOFTWARE STUDIO
        </span>
      </div>
    </div>
  );
}
