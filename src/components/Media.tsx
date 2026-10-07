import Image from "next/image";
import type { Img } from "@/lib/site";

/**
 * Cover-cropped photograph with the site-wide cool grade.
 * `parallax` oversizes the image and lets <Motion> drift it gently on scroll (desktop only).
 */
export default function Media({
  image,
  sizes,
  priority = false,
  parallax,
  position = "center",
  className = "",
  imgClassName = "",
}: {
  image: Img;
  sizes: string;
  priority?: boolean;
  parallax?: number;
  position?: string;
  className?: string;
  imgClassName?: string;
}) {
  const img = (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      priority={priority}
      quality={80}
      className={`object-cover ${imgClassName}`}
      style={{ objectPosition: position }}
    />
  );
  return (
    <div className={`grade relative overflow-hidden ${className}`}>
      {parallax ? (
        <div data-parallax={parallax} className="absolute inset-x-0 -top-[12%] h-[124%]">
          {img}
        </div>
      ) : (
        img
      )}
    </div>
  );
}
