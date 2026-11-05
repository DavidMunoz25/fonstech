"use client";

import { useEffect, useRef, type ComponentProps, type MouseEvent } from "react";

const MAX_TILT_X = 14;
const MAX_TILT_Y = 18;

// <section> que publica la inclinación del cursor como --tilt-x / --tilt-y.
// Escribe variables CSS directamente para no re-renderizar React en cada frame.
export function TiltSection(props: ComponentProps<"section">) {
  const frame = useRef(0);
  const pointer = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    return () => cancelAnimationFrame(frame.current);
  }, []);

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    if (
      !matchMedia("(pointer: fine)").matches ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const section = event.currentTarget;
    const rect = section.getBoundingClientRect();
    pointer.current = {
      x: (event.clientX - rect.left) / rect.width - 0.5,
      y: (event.clientY - rect.top) / rect.height - 0.5,
    };

    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const p = pointer.current;
      if (!p) return;
      const tiltX = Math.round(-p.y * MAX_TILT_X * 10) / 10;
      const tiltY = Math.round(p.x * MAX_TILT_Y * 10) / 10;
      section.style.setProperty("--tilt-x", `${tiltX}deg`);
      section.style.setProperty("--tilt-y", `${tiltY}deg`);
    });
  };

  const handleLeave = (event: MouseEvent<HTMLElement>) => {
    pointer.current = null;
    event.currentTarget.style.removeProperty("--tilt-x");
    event.currentTarget.style.removeProperty("--tilt-y");
  };

  return (
    <section {...props} onMouseMove={handleMove} onMouseLeave={handleLeave} />
  );
}
