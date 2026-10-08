import { chromium, devices } from "playwright";
import fs from "fs";
import path from "path";

const isProd = process.argv.includes("prod");
const TARGET_URL = isProd
  ? "https://www.lucaltech.com.ar/"
  : "http://localhost:5173/";

const OUTPUT_DIR = "./screenshots-instagram";

// Secciones e items específicos a enfocar directamente
const CAPTURES = [
  // 1. Hero
  { selector: "div.pt-20", name: "01-hero" },

  // 2. Nosotros
  { selector: "#nosotros", name: "02-nosotros-intro" },

  // 3. Servicios
  {
    selector: "#servicios h2, #servicios h1, #servicios",
    name: "03-servicios-header",
  },
  {
    selector: "#servicios .grid > *:nth-child(1)",
    name: "03-servicios-item-1",
  },
  {
    selector: "#servicios .grid > *:nth-child(2)",
    name: "03-servicios-item-2",
  },

  // 4. Proyectos (centra cada proyecto individual)
  { selector: "#proyectos h2, #proyectos h1", name: "04-proyectos-header" },
  {
    selector:
      "#proyectos article:nth-of-type(1), #proyectos .space-y-12 > *:nth-child(1)",
    name: "04-proyecto-1",
  },
  {
    selector:
      "#proyectos article:nth-of-type(2), #proyectos .space-y-12 > *:nth-child(2)",
    name: "04-proyecto-2",
  },
  {
    selector:
      "#proyectos article:nth-of-type(3), #proyectos .space-y-12 > *:nth-child(3)",
    name: "04-proyecto-3",
  },
  {
    selector:
      "#proyectos article:nth-of-type(4), #proyectos .space-y-12 > *:nth-child(4)",
    name: "04-proyecto-4",
  },

  // 5. Contacto
  { selector: "#contacto", name: "05-contacto" },
];

async function captureForInstagram() {
  if (fs.existsSync(OUTPUT_DIR)) {
    fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log(`🌐 Modo: ${isProd ? "PRODUCCIÓN" : "LOCAL"}`);
  console.log(`🚀 Conectando a ${TARGET_URL}...`);

  const browser = await chromium.launch({ headless: true });

  // Tamaño exacto pantalla vertical de smartphone (390 x 844 px)
  const iphone = devices["iPhone 14 Pro"];
  const context = await browser.newContext({
    ...iphone,
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();

  try {
    await page.goto(TARGET_URL, { waitUntil: "networkidle", timeout: 35000 });
  } catch (error) {
    console.error(`❌ No se pudo cargar ${TARGET_URL}`);
    await browser.close();
    process.exit(1);
  }

  // Esperar carga inicial
  await page.waitForTimeout(2000);

  // Ocultar Navbar fija y botón flotante de WhatsApp para que no tapen la pantalla
  await page.addStyleTag({
    content: `
      nav, header, [class*="Navbar"], 
      a[href*="wa.me"], button[aria-label*="whatsapp" i], .fixed {
        display: none !important;
      }
      /* Quitar padding top sobrante al volar la navbar */
      div.pt-20 {
        padding-top: 1rem !important;
      }
    `,
  });

  for (const item of CAPTURES) {
    const element = page.locator(item.selector).first();

    if ((await element.count()) > 0) {
      console.log(`📸 Capturando: ${item.name}...`);

      // Alinea el elemento exactamente al inicio de la pantalla
      await element.evaluate((el) => {
        el.scrollIntoView({ behavior: "instant", block: "start" });
      });

      // Si querés darle un pequeño respiro arriba (margen de 24px)
      await page.evaluate(() => {
        window.scrollBy({ top: -24, behavior: "instant" });
      });

      // Esperar a que el ScrollReveal termine su animación suave
      await page.waitForTimeout(1600);

      const filePath = path.join(OUTPUT_DIR, `${item.name}.png`);

      await page.screenshot({
        path: filePath,
        fullPage: false, // Captura solo la pantalla visible de 390x844
      });

      console.log(`   ✅ Guardada: ${item.name}.png`);
    } else {
      console.warn(`   ⚠️ Saltando (no encontrado): ${item.name}`);
    }
  }

  await browser.close();
  console.log(
    `\n🎉 ¡Listo! Todas las capturas limpias y sin navbar en: ${OUTPUT_DIR}`,
  );
}

captureForInstagram();
