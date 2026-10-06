import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function ScrollReveal({ children, className = "", delay = 0 }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.12 });

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all duration-700 ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0 filter-none"
          : "opacity-0 translate-y-12 blur-[1px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
