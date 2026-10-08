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
      className={`min-h-screen font-['Josefin_Sans',sans-serif] antialiased transition-colors duration-300 selection:bg-[#00c8f8] selection:text-[#070b14] ${
        isDark ? "bg-[#070b14] text-slate-100" : "bg-[#f8fafc] text-slate-900"
      }`}
    >
      {/* ── 1. HEADER & HERO (Entrada desde arriba) ── */}
      <div
        className={`relative w-full border-b overflow-hidden transition-colors ${
          isDark
            ? "border-slate-800/80 bg-[#070b14]"
            : "border-slate-200 bg-white"
        }`}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#00c8f8]/5 blur-[140px] rounded-full pointer-events-none" />

        <Navbar whatsappNumber={whatsappNumber} whatsappMsg={whatsappMsg} />

        {/* Espacio para la navbar fixed */}
        <div className="pt-20">
          <ScrollReveal direction="down" delay={100}>
            <HeroSection whatsappNumber={whatsappNumber} />
          </ScrollReveal>
        </div>
      </div>

      {/* ── 2. ABOUT (Entrada desde la izquierda) ── */}
      <section
        id="nosotros"
        className={`w-full py-24 border-b overflow-hidden transition-colors ${
          isDark
            ? "border-slate-800/80 bg-[#090e1a] text-white"
            : "border-slate-200 bg-slate-50 text-slate-900"
        }`}
      >
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-20">
          <ScrollReveal direction="left" delay={150}>
            <AboutSection />
          </ScrollReveal>
        </div>
      </section>

      {/* ── 3. SERVICES (Entrada desde la derecha) ── */}
      <section
        id="servicios"
        className={`w-full py-24 border-b overflow-hidden transition-colors ${
          isDark
            ? "border-slate-800/80 bg-[#070b14] text-white"
            : "border-slate-200 bg-white text-slate-900"
        }`}
      >
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-20">
          <ScrollReveal direction="right" delay={150}>
            <ServicesSection />
          </ScrollReveal>
        </div>
      </section>

      {/* ── 4. PROJECTS (Entrada desde abajo) ── */}
      <section
        id="proyectos"
        className={`w-full py-24 border-b overflow-hidden transition-colors ${
          isDark
            ? "border-slate-800/80 bg-[#090e1a] text-white"
            : "border-slate-200 bg-slate-50 text-slate-900"
        }`}
      >
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-20">
          <ScrollReveal direction="up" delay={150}>
            <ProjectsSection />
          </ScrollReveal>
        </div>
      </section>

      {/* ── 5. CONTACTO & FOOTER (Entrada desde la izquierda) ── */}
      <section
        id="contacto"
        className={`w-full pt-24 overflow-hidden transition-colors ${
          isDark ? "bg-[#070b14] text-white" : "bg-white text-slate-900"
        }`}
      >
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-20 pb-20">
          <ScrollReveal direction="left" delay={150}>
            <ContactSection />
          </ScrollReveal>
        </div>
        <Footer />
      </section>

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
