import React, { useEffect, useRef, useState } from "react";

/**
 * direction: "left" | "right" | "up" | "down"
 */
export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.15 },
    );

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const getTransformStyle = () => {
    if (isVisible) return "translate-x-0 translate-y-0 opacity-100";
    switch (direction) {
      case "left":
        return "-translate-x-16 opacity-0";
      case "right":
        return "translate-x-16 opacity-0";
      case "down":
        return "-translate-y-16 opacity-0";
      case "up":
      default:
        return "translate-y-16 opacity-0";
    }
  };

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${getTransformStyle()} ${className}`}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
