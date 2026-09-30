"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Lightbox, { type GalleryImage } from "./Lightbox";

const baseImages: GalleryImage[] = [
  { src: "/images/hero.webp", alt: "Custom live-edge wood console with angular black steel frame in a warm interior", caption: "Live-edge console — angular steel frame" },
  { src: "/images/work-1.webp", alt: "Handmade wood and black steel coffee table in a bright living room", caption: "Wood & steel coffee table" },
  { src: "/images/work-2.webp", alt: "Handmade wood and steel bedside table in a warm living space", caption: "Bedside table — hardwood + steel" },
  { src: "/images/work-3.webp", alt: "Long wood dining table with geometric white steel base", caption: "White steel dining table" },
  { src: "/images/work-4.webp", alt: "Custom black steel handrail fitted along an outdoor walkway", caption: "Steel handrail — exterior" },
  { src: "/images/work-5.webp", alt: "Small wood and black steel side table beside a sofa", caption: "Wood & steel side table" },
  { src: "/images/detail-1.webp", alt: "Thick natural wood mantel above a modern fireplace", caption: "Fireplace mantel — thick hardwood" },
  { src: "/images/detail-2.webp", alt: "Custom live-edge wood shelves with black metal brackets", caption: "Live-edge shelves — black brackets" },
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
