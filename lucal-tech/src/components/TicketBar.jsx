import React from "react";

export function TickerBar() {
  const items = [
    "Website Development",
    "SaaS Architecture",
    "Cloud & Databases",
    "UX/UI System Design",
    "Turnos & Queue Management",
    "Full-Stack Apps",
  ];

  return (
    <div className="bg-blue-600 text-white py-3.5 overflow-hidden select-none border-y border-blue-500 shadow-md">
      <div className="flex items-center gap-8 text-xs sm:text-sm font-black tracking-wider uppercase justify-around">
        {items.map((item, i) => (
          <React.Fragment key={i}>
            <span>{item}</span>
            <span className="text-blue-200 text-base">✻</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
