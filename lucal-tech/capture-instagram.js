import { chromium, devices } from "playwright";
import fs from "fs";
import path from "path";

// ── CONFIGURACIÓN ──
// Cambiá a localhost:3000 (o tu puerto de Vite/Next) o el link de Vercel desplegado
const TARGET_URL = "http://localhost:5173";
const OUTPUT_DIR = "./screenshots-instagram";

// Secciones a capturar (definí el id o selector de cada una y el nombre del archivo)
const SECTIONS = [
  { id: "hero", name: "01-hero" },
  { id: "servicios", name: "02-servicios" },
  { id: "proyectos", name: "03-proyectos" },
  { id: "documentacion", name: "04-documentacion" },
  { id: "contacto", name: "05-contacto" },
];

async function captureForInstagram() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Lanzar navegador simulando un iPhone 15 Pro (relación vertical para mobile)
  const browser = await chromium.launch({ headless: true });
  const iphone = devices["iPhone 15 Pro"];

  const context = await browser.newContext({
    ...iphone,
    deviceScaleFactor: 3, // Calidad Retina x3 (fotos nítidas en Instagram)
  });

  const page = await context.newPage();

  console.log(`🚀 Navegando a ${TARGET_URL}...`);
  await page.goto(TARGET_URL, { waitUntil: "networkidle" });

  // Esperar a que el video o fuentes terminen de cargar
  await page.waitForTimeout(1500);

  for (const section of SECTIONS) {
    console.log(`📸 Capturando sección: ${section.id}...`);

    // Busca la sección por ID (ej: id="hero") o como selector CSS
    const element = page.locator(`#${section.id}`);

    if ((await element.count()) > 0) {
      // Hace scroll suave hasta la sección para que gatillen los ScrollReveal
      await element.scrollIntoViewIfNeeded();

      // Tiempo de espera para que las animaciones suaves terminen de asentarse
      await page.waitForTimeout(2000);

      const filePath = path.join(OUTPUT_DIR, `${section.name}.png`);

      // Toma captura solo del elemento de esa sección
      await element.screenshot({
        path: filePath,
        type: "png",
      });

      console.log(`✅ Guardada en: ${filePath}`);
    } else {
      console.warn(`⚠️ No se encontró el selector #${section.id}`);
    }
  }

  // Captura extra: Pantalla completa en formato Story vertical largo
  console.log("📸 Capturando landing completa vertical...");
  await page.screenshot({
    path: path.join(OUTPUT_DIR, "00-landing-mobile-completa.png"),
    fullPage: true,
  });

  await browser.close();
  console.log(
    "\n🎉 ¡Listo! Todas las capturas guardadas en la carpeta /screenshots-instagram",
  );
}

captureForInstagram().catch((err) => {
  console.error("Error al capturar:", err);
  process.exit(1);
});
