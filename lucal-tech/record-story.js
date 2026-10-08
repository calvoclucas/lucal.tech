import { chromium, devices } from "playwright";
import fs from "fs";
import path from "path";

const isProd = process.argv.includes("prod");
const TARGET_URL = isProd
  ? "https://www.lucaltech.com.ar/"
  : "http://localhost:5173/";

const OUTPUT_DIR = "./videos-instagram";

// Configuración de tiempo
const DURATION_SECONDS = 30; // Duración total de la story

async function recordStory() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log(`🌐 Target: ${TARGET_URL}`);
  console.log(`🎬 Grabando recorrido ultra lento (${DURATION_SECONDS}s)...`);

  const iphone = devices["iPhone 14 Pro"];

  const browser = await chromium.launch({
    headless: true,
    args: ["--disable-gpu-vsync", "--no-sandbox", "--disable-setuid-sandbox"],
  });

  const context = await browser.newContext({
    ...iphone,
    deviceScaleFactor: 2,
    recordVideo: {
      dir: OUTPUT_DIR,
      size: { width: 390, height: 844 },
    },
  });

  const page = await context.newPage();

  try {
    await page.goto(TARGET_URL, { waitUntil: "networkidle", timeout: 35000 });
  } catch (error) {
    console.error(`❌ Error conectando a ${TARGET_URL}`);
    await browser.close();
    process.exit(1);
  }

  await page.waitForTimeout(2000);

  // Ocultar botones flotantes
  await page.addStyleTag({
    content: `
      a[href*="wa.me"], button[aria-label*="whatsapp" i], .fixed.bottom-6, .fixed.bottom-5 {
        display: none !important;
      }
      html {
        scroll-behavior: auto !important;
      }
    `,
  });

  // 1. Pausa de 3.5 segundos en el Hero para contemplar el video y título
  console.log("⏱️ Pausa en Hero...");
  await page.waitForTimeout(3500);

  // 2. Scroll ultra lento y constante
  // En vez de obligarlo a llegar al fondo (15.000px), lo hacemos bajar a ritmo pausado y constante
  console.log("📜 Bajando a velocidad suave y constante...");

  await page.evaluate(() => {
    return new Promise((resolve) => {
      const scrollDuration = 23000; // 23 segundos de bajada
      const start = performance.now();

      // Recorremos ~3800px a 4200px (Hero, Nosotros, Servicios y arranque de Proyectos)
      // Esto da una velocidad de apenas ~170px por segundo (perfectamente legible)
      const targetDistance = Math.min(
        4200,
        document.documentElement.scrollHeight - window.innerHeight,
      );

      function step(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / scrollDuration, 1);

        // Curva suave continua: arranca despacio, va a velocidad crucero fija y desacelera despacio
        // Easing SineInOut
        const ease = -(Math.cos(Math.PI * progress) - 1) / 2;

        window.scrollTo(0, targetDistance * ease);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          resolve();
        }
      }

      requestAnimationFrame(step);
    });
  });

  // 3. Pausa de 3.5 segundos al final de la toma
  console.log("⏱️ Pausa final...");
  await page.waitForTimeout(3500);

  const video = page.video();
  const rawPath = await video.path();

  await page.close();
  await context.close();
  await browser.close();

  const finalPath = path.join(OUTPUT_DIR, "story-lucaltech-30s.webm");
  if (fs.existsSync(finalPath)) fs.unlinkSync(finalPath);
  fs.renameSync(rawPath, finalPath);

  console.log(`\n🎉 ¡Video pausado y elegante guardado en: ${finalPath}!`);
}

recordStory().catch((err) => {
  console.error("Error al grabar:", err);
  process.exit(1);
});
