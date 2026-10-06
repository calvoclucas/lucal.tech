import React from "react";
import { AppProvider, useApp } from "./context/AppContext";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { WhatsAppSticky } from "./components/WhatsAppSticky";
import { ScrollReveal } from "./components/ScrollReveal";

function MainContent() {
  const { theme } = useApp();
  const isDark = theme === "dark";

  const whatsappNumber = "5491124868309";
  const whatsappMsg = encodeURIComponent(
    "Hola Lucal TECH! Me interesa consultar por el desarrollo de una solución de software.",
  );

  return (
    <div
      className={`min-h-screen font-sans antialiased transition-colors duration-300 selection:bg-[#a4adfd] selection:text-white ${
        isDark ? "bg-[#070b14] text-slate-100" : "bg-white text-slate-900"
      }`}
    >
      {/* ── 1. HEADER & HERO CON ENCUADRE SUPERIOR (CABEZA VISIBLE) ── */}
      <div className="relative overflow-hidden bg-[#070b14] border-b border-slate-800/60 min-h-195 lg:min-h-215 flex flex-col justify-between">
        {/* Foto del Robot: anclada arriba (bg-top) y con escala controlada */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-top pointer-events-none opacity-90 filter contrast-105 brightness-95"
          style={{
            backgroundImage: `url('/fondo.jpg')`,
            backgroundPosition: "center 15%", // Ajuste fino para centrar la cabeza blanca
          }}
        />

        {/* Gradiente suave en la base y los laterales para fundir con el diseño */}
        <div className="absolute inset-0 z-0 bg-linear-to-t from-[#070b14] via-transparent to-[#070b14]/50 pointer-events-none" />
        <div className="absolute inset-0 z-0 bg-linear-to-r from-[#070b14]/75 via-transparent to-[#070b14]/75 pointer-events-none" />

        {/* Navbar transparente sobre el fondo */}
        <div className="relative z-20">
          <Navbar whatsappNumber={whatsappNumber} whatsappMsg={whatsappMsg} />
        </div>

        {/* Contenido desplazado hacia abajo para no tapar la cabeza */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-12 pb-24 pt-20 sm:pt-32">
          <HeroSection />
        </div>
      </div>

      {/* ── 2. ABOUT (Fondo blanco contrastado) ── */}
      <section
        className={`w-full py-24 sm:py-32 transition-colors ${
          isDark ? "bg-white text-slate-900" : "bg-white text-slate-900"
        }`}
      >
        <div className="max-w-310 mx-auto px-6 sm:px-12">
          <ScrollReveal>
            <AboutSection />
          </ScrollReveal>
        </div>
      </section>

      {/* ── 3. SERVICES (Fondo oscuro) ── */}
      <section
        className={`w-full py-24 sm:py-32 relative overflow-hidden transition-colors border-y ${
          isDark
            ? "bg-[#070b14] text-white border-slate-800/40"
            : "bg-slate-50 text-slate-900 border-slate-200"
        }`}
      >
        <div className="max-w-310 mx-auto px-6 sm:px-12 relative z-10">
          <ScrollReveal delay={100}>
            <ServicesSection />
          </ScrollReveal>
        </div>
      </section>

      {/* ── 4. PROJECTS (Fondo blanco) ── */}
      <section
        className={`w-full py-24 sm:py-32 transition-colors ${
          isDark ? "bg-white text-slate-900" : "bg-white text-slate-900"
        }`}
      >
        <div className="max-w-310 mx-auto px-6 sm:px-12">
          <ScrollReveal delay={100}>
            <ProjectsSection />
          </ScrollReveal>
        </div>
      </section>

      {/* ── 5. CONTACT & FOOTER ── */}
      <section
        className={`w-full pt-24 sm:pt-32 transition-colors border-t ${
          isDark
            ? "bg-[#070b14] text-white border-slate-800/40"
            : "bg-slate-50 text-slate-900 border-slate-200"
        }`}
      >
        <div className="max-w-310 mx-auto px-6 sm:px-12 pb-16">
          <ScrollReveal>
            <ContactSection />
          </ScrollReveal>
        </div>
        <Footer />
      </section>

      {/* Botón flotante WhatsApp */}
      <WhatsAppSticky
        whatsappNumber={whatsappNumber}
        whatsappMsg={whatsappMsg}
      />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
