import React, { useState } from "react";
import { Send } from "lucide-react";
import { useApp } from "../context/AppContext";

export function ContactSection() {
  const { t, theme, lang } = useApp();
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
      ? "¡Hola! Me contacto a través de la web:"
      : "Hello! I am contacting you through your website:";

    const nameLabel = isSpanish ? "Nombre" : "Name";
    const compLabel = isSpanish ? "Empresa" : "Company";
    const srvLabel = isSpanish ? "Interés" : "Interest";
    const msgLabel = isSpanish ? "Mensaje" : "Message";

    const text = `${header}
• ${nameLabel}: ${formData.nombre}
• ${compLabel}: ${formData.empresa || (isSpanish ? "Particular" : "Personal")}
• ${srvLabel}: ${formData.servicio}
• ${msgLabel}: ${formData.mensaje}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div id="contacto">
      <div className="mb-12 inline-block">
        <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] uppercase text-[#a4adfd]">
          {t.contact.title}
        </h2>
        <div className="h-[3px] w-full bg-[#a4adfd] mt-2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <div
            className={`rounded-3xl overflow-hidden shadow-2xl border h-[340px] sm:h-[400px] ${
              isDark
                ? "bg-slate-900 border-slate-800"
                : "bg-slate-100 border-slate-200"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
              alt="Workspace"
              className="w-full h-full object-cover"
              style={{
                clipPath: "polygon(0 0, 100% 15%, 100% 100%, 0 85%)",
              }}
            />
          </div>
          <div
            className={`space-y-1.5 text-[13px] ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            <div
              className={`font-bold ${isDark ? "text-white" : "text-slate-900"}`}
            >
              {t.contact.subheading}
            </div>
            <p>{t.contact.desc}</p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className={`rounded-3xl p-8 sm:p-10 space-y-6 shadow-xl border transition-colors ${
              isDark
                ? "bg-slate-900/60 border-slate-800 backdrop-blur-sm"
                : "bg-white border-slate-200"
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  className={`text-[12px] font-bold uppercase tracking-wider ${
                    isDark ? "text-slate-300" : "text-slate-700"
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
                  className={`w-full text-[14px] rounded-xl px-4 py-3 focus:outline-none focus:border-[#a4adfd] border transition-colors ${
                    isDark
                      ? "bg-[#0b0f19] border-slate-700/80 text-white placeholder:text-slate-500"
                      : "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400"
                  }`}
                />
              </div>

              <div className="space-y-2">
                <label
                  className={`text-[12px] font-bold uppercase tracking-wider ${
                    isDark ? "text-slate-300" : "text-slate-700"
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
                  className={`w-full text-[14px] rounded-xl px-4 py-3 focus:outline-none focus:border-[#a4adfd] border transition-colors ${
                    isDark
                      ? "bg-[#0b0f19] border-slate-700/80 text-white placeholder:text-slate-500"
                      : "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400"
                  }`}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                className={`text-[12px] font-bold uppercase tracking-wider ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {t.contact.form.serviceLabel}
              </label>
              <select
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
                className={`w-full text-[14px] rounded-xl px-4 py-3 focus:outline-none focus:border-[#a4adfd] border cursor-pointer ${
                  isDark
                    ? "bg-[#0b0f19] border-slate-700/80 text-white"
                    : "bg-slate-50 border-slate-200 text-slate-900"
                }`}
              >
                {t.contact.form.services.map((s, idx) => (
                  <option key={idx} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label
                className={`text-[12px] font-bold uppercase tracking-wider ${
                  isDark ? "text-slate-300" : "text-slate-700"
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
                className={`w-full text-[14px] rounded-xl px-4 py-3 focus:outline-none focus:border-[#a4adfd] border resize-none transition-colors ${
                  isDark
                    ? "bg-[#0b0f19] border-slate-700/80 text-white placeholder:text-slate-500"
                    : "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400"
                }`}
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#a4adfd] hover:bg-[#8e9afc] text-[#0b0f19] text-[12px] font-black tracking-wider uppercase px-8 py-3.5 rounded-xl transition-all shadow-md"
            >
              <span>{t.contact.form.btn}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
