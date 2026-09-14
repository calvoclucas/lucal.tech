import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { WorkProcessSection } from "./components/WorkProcessSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Footer } from "./components/Footer";

export default function App() {
  const whatsappNumber = "5493364034400";
  const whatsappMsg = encodeURIComponent(
    "Hola Lucal TECH! Me interesa consultar por el desarrollo de una solución de software.",
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-blue-600 selection:text-white antialiased">
      <Navbar whatsappNumber={whatsappNumber} whatsappMsg={whatsappMsg} />
      <HeroSection whatsappNumber={whatsappNumber} whatsappMsg={whatsappMsg} />
      <AboutSection />
      <ServicesSection
        whatsappNumber={whatsappNumber}
        whatsappMsg={whatsappMsg}
      />
      <WorkProcessSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
