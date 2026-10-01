import { useEffect } from "react";

export default function DepthScene() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let frame = 0;
    let active: HTMLElement | null = null;

    const reset = (el: HTMLElement) => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };

    const onMove = (event: PointerEvent) => {
      const next = (event.target as HTMLElement | null)?.closest?.("[data-depth]") as HTMLElement | null;
      if (active && active !== next) reset(active);
      active = next;
      if (!next) return;

      const rect = next.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      const rx = (-py * 4).toFixed(2);
      const ry = (px * 5).toFixed(2);

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        next.style.setProperty("--rx", `${rx}deg`);
        next.style.setProperty("--ry", `${ry}deg`);
      });
    };

    const clear = () => {
      if (active) reset(active);
      active = null;
    };

    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", clear);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", clear);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="scene" aria-hidden="true">
      <div className="sceneGlow" />
    </div>
  );
}
