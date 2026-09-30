"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Lightbox, { type GalleryImage } from "./Lightbox";

const baseImages: GalleryImage[] = [
  { src: "/images/hero.jpg", alt: "Custom walnut and steel dining table in a sunlit interior", caption: "Walnut dining table — Denver residence" },
  { src: "/images/work-1.jpg", alt: "Floating walnut shelves with black steel brackets", caption: "Floating kitchen shelves" },
  { src: "/images/work-2.jpg", alt: "Oak and steel entry bench", caption: "Entryway bench — white oak + steel" },
  { src: "/images/work-3.jpg", alt: "Welded steel table base in the workshop", caption: "Welded base, pre-finish" },
  { src: "/images/work-4.jpg", alt: "Custom steel handrail with oak cap", caption: "Architectural handrail — Park Hill" },
  { src: "/images/work-5.jpg", alt: "Live-edge walnut coffee table with steel legs", caption: "Live-edge coffee table" },
  { src: "/images/detail-1.jpg", alt: "Close-up of a TIG weld on a steel joint", caption: "TIG weld detail" },
  { src: "/images/detail-2.jpg", alt: "Close-up of solid walnut grain with natural oil finish", caption: "Walnut grain — oil finish" },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const thumbs = useMemo(() => baseImages, []);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-3">
        {thumbs.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className={`img-wrap group cursor-pointer bg-[var(--color-border)] ${
              i === 0 ? "col-span-2 md:col-span-2 md:row-span-2 aspect-[4/5] md:aspect-auto md:h-full" : "aspect-square"
            }`}
            aria-label={`Open ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes={
                i === 0
                  ? "(min-width: 768px) 50vw, 100vw"
                  : "(min-width: 768px) 25vw, 50vw"
              }
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </button>
        ))}
      </div>
      <Lightbox
        images={thumbs}
        initialIndex={index}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
