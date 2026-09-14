import React from "react";
import { MessageSquare, Target, Code, CheckCircle } from "lucide-react";

export function WorkProcessSection() {
  const steps = [
    {
      num: "01",
      icon: <MessageSquare className="w-5 h-5 text-white" />,
      title: "Consultation",
      desc: "Relevamos tu modelo operativo y requerimientos funcionales.",
    },
    {
      num: "02",
      icon: <Target className="w-5 h-5 text-white" />,
      title: "Strategy",
      desc: "Definimos la arquitectura, stack tecnológico y base de datos.",
    },
    {
      num: "03",
      icon: <Code className="w-5 h-5 text-white" />,
      title: "Implementation",
      desc: "Programación ágil de la app, tests y puesta a punto.",
    },
    {
      num: "04",
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      title: "Final Result",
      desc: "Despliegue a producción en la nube con dominio propio.",
    },
  ];

  return (
    <section id="proceso" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-blue-600 font-mono text-xs font-bold uppercase tracking-widest">
            <span>//</span>
            <span>Our Work Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Our Proven <span className="text-blue-600">Work Process</span>
          </h2>
        </div>

        {/* Línea conectora horizontal con 4 nodos */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Barra conectora horizontal visible en pantallas grandes */}
          <div className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-0.5 bg-slate-200 -z-0" />

          {steps.map((s, idx) => (
            <div
              key={idx}
              className="relative z-10 flex flex-col items-center text-center space-y-4"
            >
              {/* Botón circular azul con badge numérico superpuesto */}
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
                  {s.icon}
                </div>
                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-slate-950 text-white font-mono text-[9px] font-bold flex items-center justify-center border-2 border-white">
                  {s.num}
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
