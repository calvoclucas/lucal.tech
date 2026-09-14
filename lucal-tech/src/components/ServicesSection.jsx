import React from "react";
import { Layout, Smartphone, Palette, ArrowRight } from "lucide-react";

export function ServicesSection({ whatsappNumber, whatsappMsg }) {
  const services = [
    {
      icon: <Layout className="w-6 h-6 text-white" />,
      title: "Website & SaaS Development",
      description:
        "Desarrollo frontend y backend moderno con React, Supabase y bases de datos relacionales. Paneles de control y herramientas operativas.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-white" />,
      title: "Real-Time & Queue Systems",
      description:
        "Sistemas en tiempo real con WebSockets como turneq: pantallas Smart TV, tótems de autoservicio y gestión por turnos.",
    },
    {
      icon: <Palette className="w-6 h-6 text-white" />,
      title: "UI/UX & Product Design",
      description:
        "Diseño de interfaces intuitivas, minimalistas y adaptadas 100% a dispositivos móviles que maximizan la conversión de usuarios.",
    },
  ];

  return (
    <section
      id="servicios"
      className="py-24 bg-slate-50/70 border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-14">
        {/* Cabecera con botón azul a la derecha */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-blue-600 font-mono text-xs font-bold uppercase tracking-widest">
              <span>//</span>
              <span>Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Services We Provide to <br />
              <span className="text-blue-600">Elevate Your Business</span>
            </h2>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-wider uppercase transition shadow-sm self-start sm:self-auto"
          >
            View All Services
          </a>
        </div>

        {/* Grid de 3 tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition group space-y-6"
            >
              {/* Icono en bloque azul curvado como la imagen */}
              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform">
                {s.icon}
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-950">{s.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.description}
                </p>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-blue-600 transition tracking-wider uppercase pt-2"
              >
                <span>Learn more</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
