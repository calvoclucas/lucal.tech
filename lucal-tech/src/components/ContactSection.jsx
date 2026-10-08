import React, { useState } from "react";
import { Send, MapPin, Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import { useApp } from "../context/AppContext";

export function ContactSection() {
  const { t, lang, theme } = useApp();
  const isDark = theme === "dark";
  const whatsappNumber = "5491124868309";

  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    servicio: t.contact.form.services[0],
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isSpanish = lang === "es";
    const header = isSpanish
      ? "¡Hola! Me contacto a través de lucal.tech:"
      : "Hello! I am contacting you through lucal.tech:";

    const text = `${header}
• Nombre: ${formData.nombre}
• Empresa: ${formData.empresa || "Particular"}
• Interés: ${formData.servicio}
• Mensaje: ${formData.mensaje}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contacto"
      className={`relative w-full py-20 sm:py-28 font-['Josefin_Sans',sans-serif] overflow-hidden transition-colors duration-300 ${
        isDark ? "text-white" : "text-slate-900"
      }`}
    >
      {/* ── IMAGEN DE FONDO VISIBLE CON AMBIENTE TECH ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2200&q=85"
          alt="Modern tech workspace"
          className={`w-full h-full object-cover filter contrast-125 saturate-110 scale-105 transition-opacity ${
            isDark ? "opacity-55 brightness-95" : "opacity-25 brightness-110"
          }`}
        />

        {/* Tintes degradados para fundir la imagen con la base */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${
            isDark
              ? "from-[#070b14] via-transparent to-[#070b14]/70"
              : "from-[#f8fafc] via-transparent to-[#f8fafc]/70"
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-r ${
            isDark
              ? "from-[#070b14]/80 via-transparent to-[#070b14]/80"
              : "from-[#f8fafc]/80 via-transparent to-[#f8fafc]/80"
          }`}
        />
        <div
          className={`absolute inset-0 ${
            isDark ? "bg-[#070b14]/40" : "bg-[#f8fafc]/30"
          }`}
        />
      </div>

      {/* Resplandor Cyan de acento de tu marca */}
      <div className="absolute -bottom-10 right-1/4 w-[600px] h-[350px] bg-[#00c8f8]/10 blur-[160px] rounded-full pointer-events-none" />

      {/* ── ENCABEZADO EDITORIAL ASIMÉTRICO ── */}
      <div
        className={`relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b ${
          isDark ? "border-white/10" : "border-slate-200"
        }`}
      >
        <div>
          <div
            className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] font-semibold mb-4 drop-shadow-sm ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c8f8] shadow-[0_0_8px_#00c8f8]" />
            <span>Direct Communication & Advisory</span>
          </div>
          <h2
            className={`text-4xl sm:text-6xl font-bold tracking-tight lowercase leading-[1.02] drop-shadow-md ${
              isDark ? "text-white" : "text-slate-950"
            }`}
          >
            start your <br />
            project<span className="text-[#00c8f8]">.</span>
          </h2>
        </div>

        <p
          className={`max-w-md text-sm sm:text-base font-light leading-relaxed drop-shadow-sm ${
            isDark ? "text-slate-200" : "text-slate-600"
          }`}
        >
          Contactate con nuestro equipo técnico para analizar viabilidad, plazos
          y presupuesto a la medida de tu negocio.
        </p>
      </div>

      {/* ── CONTENIDO: INFO CARD + FORMULARIO TRANSLÚCIDO ── */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Lado Izquierdo: Tarjeta de Información */}
        <div className="lg:col-span-5 space-y-6">
          <div
            className={`p-8 sm:p-9 rounded-2xl border backdrop-blur-xl shadow-2xl relative overflow-hidden transition-colors ${
              isDark
                ? "bg-[#080b12]/80 border-white/15"
                : "bg-white/90 border-slate-200 shadow-slate-200/80"
            }`}
          >
            {/* Acento superior cian */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00c8f8] via-[#00c8f8]/50 to-transparent shadow-[0_0_12px_#00c8f8]" />

            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#00c8f8] font-bold mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Canal de Ingeniería</span>
            </div>

            <h3
              className={`text-2xl sm:text-3xl font-bold tracking-wide ${
                isDark ? "text-white" : "text-slate-950"
              }`}
            >
              {t.contact.subheading}
            </h3>

            <p
              className={`text-sm font-light mt-3 leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {t.contact.desc}
            </p>

            <div
              className={`mt-8 pt-6 border-t space-y-4 text-xs font-mono ${
                isDark ? "border-white/10" : "border-slate-200"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`p-2.5 rounded-lg border text-[#00c8f8] shrink-0 mt-0.5 ${
                    isDark
                      ? "bg-white/5 border-white/10"
                      : "bg-slate-100 border-slate-200"
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span
                    className={`font-bold block uppercase tracking-wider text-[11px] ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Sede & Cobertura
                  </span>
                  <span
                    className={isDark ? "text-slate-300" : "text-slate-600"}
                  >
                    Rosario, Santa Fe / Operaciones Remotas
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className={`p-2.5 rounded-lg border text-[#00c8f8] shrink-0 mt-0.5 ${
                    isDark
                      ? "bg-white/5 border-white/10"
                      : "bg-slate-100 border-slate-200"
                  }`}
                >
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span
                    className={`font-bold block uppercase tracking-wider text-[11px] ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    WhatsApp Directo
                  </span>
                  <span className="text-[#00c8f8] font-bold text-sm tracking-wide">
                    +54 9 11 2486-8309
                  </span>
                </div>
              </div>
            </div>

            <div
              className={`mt-8 pt-6 border-t flex items-center gap-2 text-[11px] ${
                isDark
                  ? "border-white/10 text-slate-300"
                  : "border-slate-200 text-slate-600"
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Respuesta inicial promedio en menos de 24 hs hábiles.</span>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Formulario */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className={`p-8 sm:p-10 rounded-2xl border backdrop-blur-xl shadow-2xl space-y-6 transition-colors ${
              isDark
                ? "bg-[#080b12]/80 border-white/15"
                : "bg-white/90 border-slate-200 shadow-slate-200/80"
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] block ${
                    isDark ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  placeholder={t.contact.form.namePlaceholder}
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`w-full text-sm rounded-lg px-4 py-3.5 border focus:outline-none focus:border-[#00c8f8] focus:ring-1 focus:ring-[#00c8f8] transition-all font-light ${
                    isDark
                      ? "bg-[#06080e]/90 border-white/15 text-white placeholder:text-slate-500"
                      : "bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400"
                  }`}
                />
              </div>

              <div className="space-y-2">
                <label
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] block ${
                    isDark ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  {t.contact.form.company}
                </label>
                <input
                  type="text"
                  name="empresa"
                  placeholder={t.contact.form.companyPlaceholder}
                  value={formData.empresa}
                  onChange={handleChange}
                  className={`w-full text-sm rounded-lg px-4 py-3.5 border focus:outline-none focus:border-[#00c8f8] focus:ring-1 focus:ring-[#00c8f8] transition-all font-light ${
                    isDark
                      ? "bg-[#06080e]/90 border-white/15 text-white placeholder:text-slate-500"
                      : "bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400"
                  }`}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                className={`text-[11px] font-bold uppercase tracking-[0.2em] block ${
                  isDark ? "text-slate-200" : "text-slate-700"
                }`}
              >
                {t.contact.form.serviceLabel}
              </label>
              <select
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
                className={`w-full text-sm rounded-lg px-4 py-3.5 border focus:outline-none focus:border-[#00c8f8] focus:ring-1 focus:ring-[#00c8f8] transition-all cursor-pointer font-light ${
                  isDark
                    ? "bg-[#06080e]/90 border-white/15 text-white"
                    : "bg-slate-50 border-slate-300 text-slate-900"
                }`}
              >
                {t.contact.form.services.map((s, idx) => (
                  <option
                    key={idx}
                    value={s}
                    className={
                      isDark
                        ? "bg-[#080b12] text-white"
                        : "bg-white text-slate-900"
                    }
                  >
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label
                className={`text-[11px] font-bold uppercase tracking-[0.2em] block ${
                  isDark ? "text-slate-200" : "text-slate-700"
                }`}
              >
                {t.contact.form.message}
              </label>
              <textarea
                name="mensaje"
                required
                rows={4}
                placeholder={t.contact.form.messagePlaceholder}
                value={formData.mensaje}
                onChange={handleChange}
                className={`w-full text-sm rounded-lg px-4 py-3.5 border focus:outline-none focus:border-[#00c8f8] focus:ring-1 focus:ring-[#00c8f8] transition-all resize-none font-light ${
                  isDark
                    ? "bg-[#06080e]/90 border-white/15 text-white placeholder:text-slate-500"
                    : "bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400"
                }`}
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#00c8f8] hover:bg-[#00b2dc] text-[#070b14] text-[12px] font-bold uppercase tracking-[0.2em] px-9 py-4 rounded-lg transition-all shadow-[0_0_25px_rgba(0,200,248,0.35)] active:scale-95 cursor-pointer"
            >
              <span>{t.contact.form.btn}</span>
              <Send className="w-4 h-4 stroke-[2.2]" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
