import React from "react";
import { motion } from "framer-motion";

/**
 * direction: "up" | "down" | "left" | "right" | "none"
 * delay: en segundos (ej: 0.2) o milisegundos (ej: 200)
 * duration: en segundos (default 1.8s para entrada cinematográfica)
 * distance: "xs" (10px) | "sm" (16px) | "md" (24px)
 */
export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 1.8,
  distance = "sm",
  className = "",
}) {
  const delayInSeconds = delay > 10 ? delay / 1000 : delay;

  // Desplazamientos mínimos: menos píxeles = cero sensación de salto
  const distances = {
    xs: 10,
    sm: 16,
    md: 24,
  };

  const offset = distances[distance] || distances.sm;

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: offset, x: 0 };
      case "down":
        return { y: -offset, x: 0 };
      case "left":
        return { x: offset, y: 0 };
      case "right":
        return { x: -offset, y: 0 };
      case "none":
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialOffset = getInitialPosition();

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialOffset.x,
        y: initialOffset.y,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        // Curva suave continua sin tirones
        ease: [0.22, 1, 0.36, 1],
        duration: duration,
        delay: delayInSeconds,
        opacity: {
          duration: duration * 1.1, // El fade dura un poco más para que no corte
          ease: "easeInOut",
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
