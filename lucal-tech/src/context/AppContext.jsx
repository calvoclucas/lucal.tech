import React, { createContext, useContext, useState, useEffect } from "react";

const translations = {
  es: {
    nav: {
      profile: "Perfil",
      docs: "Documentación",
      services: "Servicios",
      projects: "Proyectos",
      contact: "Contacto",
      quote: "COTIZAR",
    },
    hero: {
      subtitle: "Lucal Tech Studio",
      domain: "www.lucal.tech",
      heading: "TECNOLOGÍA",
    },
    about: {
      title1: "SOBRE",
      title2: "LA TECNOLOGÍA",
      p1: "En Lucal TECH nos enfocamos en el desarrollo integral de sistemas escalables, interfaces reactivas y despliegue sobre arquitecturas en la nube optimizadas para procesamiento continuo.",
      p2: "Construimos software a medida entendiendo que cada negocio necesita precisión: desde la automatización de flujos operativos y facturación electrónica hasta el seguimiento de inventarios.",
      p3: "Nuestros desarrollos implementan estándares modernos con React, Node, WebSockets y bases de datos relacionales, asegurando tiempos de carga inmediatos y máxima estabilidad.",
      p4: "Diseñamos código estructurado y mantenible, acompañando a empresas y profesionales en cada fase técnica de sus productos digitales.",
    },
    services: {
      title: "NUESTROS SERVICIOS",
      items: [
        {
          index: "01",
          title: "Desarrollo Web & Plataformas SaaS",
          desc: "Arquitecturas completas frontend y backend con React, Supabase y bases de datos relacionales para portales de gestión operativa y sistemas a medida.",
        },
        {
          index: "02",
          title: "Sistemas en Tiempo Real",
          desc: "Implementación de eventos inmediatos mediante WebSockets: pantallas vivas de gestión de turnos, paneles de métricas y sincronización instantánea.",
        },
        {
          index: "03",
          title: "Facturación & Conexión Fiscal",
          desc: "Integración directa de servicios de facturación electrónica con ARCA y emisión automática de comprobantes y etiquetas térmicas.",
        },
        {
          index: "04",
          title: "UI/UX & Arquitectura de Software",
          desc: "Diseño ergonómico centrado en usabilidad técnica, interfaces limpias, componentes reutilizables y despliegue continuo de alto rendimiento.",
        },
      ],
    },
    projects: {
      title: "NUESTROS PROYECTOS",
      items: [
        {
          index: "01",
          title: "TURNEQ",
          category: "Gestión de Turnos y Filas",
          desc: "Automatización de salas de espera con pantallas vivas sincronizadas, control de turnos en tiempo real y recordatorios directos por WhatsApp.",
          link: "https://turneq.vercel.app/",
        },
        {
          index: "02",
          title: "STOCKIAL",
          category: "Inventario & Punto de Venta",
          desc: "Control total de stock y venta minorista/mayorista con facturación electrónica directa ARCA e impresión térmica inmediata de tickets.",
          link: "https://stockial.vercel.app/",
        },
        {
          index: "03",
          title: "ALKILO",
          category: "Alquiler de Equipamiento & Herramientas",
          desc: "Plataforma integral de gestión de alquileres con pagarés digitales, trazabilidad serializada y recordatorios automáticos de devolución.",
          link: "https://alkilo-ia.vercel.app/",
        },
      ],
    },
    contact: {
      title: "CONTACTO",
      subheading: "Canal directo de ingeniería & cotizaciones",
      desc: "Respondemos consultas técnicas y presupuestos comerciales de forma inmediata vía WhatsApp.",
      form: {
        name: "Nombre completo *",
        namePlaceholder: "Ej. Lucas Calvo",
        company: "Empresa / Negocio",
        companyPlaceholder: "Ej. Empresa o Particular",
        serviceLabel: "Solución de Interés",
        services: [
          "Turneq — Gestión inteligente de turnos y filas",
          "Stockial — Control de stock & ARCA",
          "Alkilo — Gestión de alquileres y pagarés",
          "Desarrollo Web & SaaS a Medida",
          "Consultoría de Arquitectura & APIs",
        ],
        message: "Detalle del proyecto *",
        messagePlaceholder:
          "Contanos brevemente qué requerimientos o problemática necesitás resolver...",
        btn: "Enviar a WhatsApp",
      },
    },
    footer: {
      rights: "© 2026 Lucal TECH. Todos los derechos reservados.",
      tagline: "Software Development & Architecture",
    },
  },
  en: {
    nav: {
      profile: "Profile",
      docs: "Documentation",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      quote: "GET A QUOTE",
    },
    hero: {
      subtitle: "Lucal Tech Studio",
      domain: "www.lucal.tech",
      heading: "TECHNOLOGY",
    },
    about: {
      title1: "ABOUT",
      title2: "TECHNOLOGY",
      p1: "At Lucal TECH we focus on the end-to-end development of scalable systems, reactive interfaces, and cloud architectures optimized for continuous processing.",
      p2: "We build custom software understanding that every business requires accuracy: from operational workflow automation and fiscal invoicing to stock tracing.",
      p3: "Our solutions incorporate modern standards with React, Node, WebSockets, and relational databases, ensuring instantaneous loading and resilient uptime.",
      p4: "We write clean, maintainable code, guiding companies and founders through every technical stage of their digital products.",
    },
    services: {
      title: "OUR SERVICE",
      items: [
        {
          index: "01",
          title: "Web & SaaS Development",
          desc: "Full-stack frontend and backend architectures with React, Supabase, and relational databases for operational portals and custom platforms.",
        },
        {
          index: "02",
          title: "Real-Time Systems",
          desc: "Instant event handling via WebSockets: live waiting room displays, KPI dashboards, and instant client synchronization.",
        },
        {
          index: "03",
          title: "Invoicing & Fiscal Integrations",
          desc: "Direct electronic invoicing integrations (ARCA) with high-speed automated thermal label and voucher printing.",
        },
        {
          index: "04",
          title: "UI/UX & Software Architecture",
          desc: "Ergonomic system design focused on technical usability, clean components, high throughput, and CI/CD deployment.",
        },
      ],
    },
    projects: {
      title: "OUR PROJECT",
      items: [
        {
          index: "01",
          title: "TURNEQ",
          category: "Queue & Turn Management",
          desc: "Automated waiting rooms with live synchronized screens, real-time ticket dispatch, and automated WhatsApp reminders.",
          link: "https://turneq.vercel.app/",
        },
        {
          index: "02",
          title: "STOCKIAL",
          category: "Inventory & Point of Sale",
          desc: "End-to-end stock and sales management featuring direct fiscal electronic invoicing with ARCA and instant thermal printing.",
          link: "https://stockial.vercel.app/",
        },
        {
          index: "03",
          title: "ALKILO",
          category: "Tool & Equipment Rentals",
          desc: "Comprehensive equipment rental platform with digital promissory notes, serial number tracking, and automated expiry alerts.",
          link: "https://alkilo-ia.vercel.app/",
        },
      ],
    },
    contact: {
      title: "OUR CONTACT",
      subheading: "Direct engineering & quote channel",
      desc: "We provide immediate commercial and technical feedback directly via WhatsApp.",
      form: {
        name: "Full Name *",
        namePlaceholder: "E.g. Lucas Calvo",
        company: "Company / Business",
        companyPlaceholder: "E.g. Company or Personal",
        serviceLabel: "Area of Interest",
        services: [
          "Turneq — Intelligent Queue & Turn Management",
          "Stockial — Stock Control & ARCA Invoicing",
          "Alkilo — Equipment Rentals & Promissory Notes",
          "Custom Web & SaaS Development",
          "Architecture & API Consulting",
        ],
        message: "Project Details *",
        messagePlaceholder:
          "Describe your project requirements or the technical challenge you need solved...",
        btn: "Send to WhatsApp",
      },
    },
    footer: {
      rights: "© 2026 Lucal TECH. All rights reserved.",
      tagline: "Software Development & Architecture",
    },
  },
};

const AppContext = createContext();

export function AppProvider({ children }) {
  const [lang, setLang] = useState(
    () => localStorage.getItem("site_lang") || "es",
  );
  const [theme, setTheme] = useState(
    () => localStorage.getItem("site_theme") || "dark",
  );

  useEffect(() => {
    localStorage.setItem("site_lang", lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("site_theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));
  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <AppContext.Provider
      value={{
        lang,
        toggleLang,
        theme,
        toggleTheme,
        t: translations[lang],
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
