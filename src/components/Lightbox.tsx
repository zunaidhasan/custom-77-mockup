"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export default function Lightbox({
  images,
  initialIndex = 0,
  open,
  onClose,
}: {
  images: GalleryImage[];
  initialIndex: number;
  open: boolean;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex, open]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, next, prev, onClose]);

  if (!open) return null;
  const current = images[index];

  return (
    <div
      className="fixed inset-0 z-[100] bg-[var(--color-ink)]/95 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-5 right-5 md:top-8 md:right-8 h-11 w-11 inline-flex items-center justify-center text-white/80 hover:text-white border border-white/20"
        aria-label="Close gallery"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 5l14 14M19 5L5 19" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 h-12 w-12 inline-flex items-center justify-center text-white/80 hover:text-white border border-white/20"
        aria-label="Previous image"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 h-12 w-12 inline-flex items-center justify-center text-white/80 hover:text-white border border-white/20"
        aria-label="Next image"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      <figure
        className="w-[92vw] h-[82vh] flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Using img directly for lightbox since we need EXIF aspect ratio preservation with object-contain */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={current.src}
            alt={current.alt}
            className="max-w-full max-h-full w-auto h-auto object-contain"
          />
        </div>
        {current.caption && (
          <figcaption className="text-white/70 text-[0.82rem] tracking-wide">
            {current.caption}
          </figcaption>
        )}
        <div className="text-white/50 text-[0.75rem] tabular-nums tracking-widest uppercase">
          {index + 1} / {images.length}
        </div>
      </figure>
    </div>
  );
}
