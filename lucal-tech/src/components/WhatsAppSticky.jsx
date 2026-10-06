import React from "react";
import { useApp } from "../context/AppContext";

export function WhatsAppSticky({ whatsappNumber, whatsappMsg }) {
  const { lang } = useApp();
  const isSpanish = lang === "es";

  return (
    <aside
      aria-label="WhatsApp Quick Contact"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      {/* Tooltip opcional al hacer hover */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 text-xs font-semibold tracking-wide text-slate-800 bg-white border border-slate-200 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none rounded-md">
        {isSpanish ? "Chatear por WhatsApp" : "Chat on WhatsApp"}
      </span>

      {/* Botón oficial de WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] rounded-full flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 text-white"
        title="WhatsApp"
      >
        {/* SVG Oficial de WhatsApp */}
        <svg
          viewBox="0 0 32 32"
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.002 0.003C7.165 0.003 0 7.168 0 16.006c0 2.824 0.738 5.58 2.14 8.01L0.74 31.258l7.42-1.947c2.35 1.282 5.006 1.958 7.842 1.958 8.835 0 16-7.165 16-16.003S24.837 0.003 16.002 0.003zm0 29.274c-2.457 0-4.867-0.662-6.97-1.913l-0.5-0.297-5.184 1.36 1.383-5.054-0.326-0.518C3.033 20.658 2.247 18.375 2.247 16.006c0-7.584 6.17-13.755 13.755-13.755 7.585 0 13.755 6.171 13.755 13.755 0 7.585-6.17 13.756-13.755 13.756zm7.545-10.297c-0.413-0.207-2.447-1.208-2.825-1.346-0.378-0.138-0.653-0.207-0.928 0.207s-1.066 1.346-1.307 1.622c-0.24 0.276-0.482 0.31-0.895 0.103-0.413-0.207-1.745-0.643-3.324-2.05-1.228-1.096-2.058-2.45-2.299-2.863s-0.026-0.637 0.18-0.843c0.186-0.186 0.413-0.482 0.62-0.723 0.206-0.241 0.275-0.413 0.413-0.689 0.137-0.276 0.069-0.517-0.035-0.723s-0.929-2.24-1.273-3.067c-0.334-0.805-0.674-0.696-0.928-0.709-0.24-0.012-0.516-0.015-0.792-0.015s-0.723 0.103-1.101 0.517c-0.378 0.413-1.445 1.412-1.445 3.444s1.48 3.996 1.686 4.272c0.207 0.276 2.912 4.446 7.054 6.236 0.985 0.426 1.754 0.68 2.353 0.87 0.99 0.315 1.89 0.27 2.602 0.164 0.794-0.119 2.447-1 2.791-1.964 0.344-0.965 0.344-1.791 0.241-1.964-0.103-0.173-0.378-0.276-0.791-0.483z" />
        </svg>
      </a>
    </aside>
  );
}

export default WhatsAppSticky;
