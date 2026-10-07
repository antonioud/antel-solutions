import Image from "next/image";
import { images } from "@/lib/site";

/** Very faint world-map texture for light (default) or dark sections. Decorative only. */
export default function MapTexture({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <Image
        src={images.worldMap.src}
        alt=""
        fill
        sizes="100vw"
        quality={60}
        className={`object-cover object-center ${
          tone === "light" ? "opacity-[0.07] [filter:invert(1)_grayscale(1)_contrast(1.6)]" : "opacity-30 mix-blend-screen"
        }`}
      />
    </div>
  );
}
