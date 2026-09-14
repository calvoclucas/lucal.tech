import React from "react";
import { MessageCircle } from "lucide-react";

export function CtaSection({ whatsappNumber, whatsappMsg }) {
  return (
    <section className="py-16 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
            ¿Tenés un proyecto o requerimiento técnico en mente?
          </h3>
          <p className="text-zinc-400 text-xs max-w-xl">
            Coordinemos una llamada o conversemos directamente por WhatsApp
            sobre la arquitectura y alcance de tu software.
          </p>
        </div>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
          target="_blank"
          rel="noreferrer"
          className="px-8 py-4 bg-white hover:bg-zinc-100 text-zinc-950 text-xs font-bold uppercase tracking-wider flex items-center gap-2 shrink-0 transition"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span>Hablar por WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
