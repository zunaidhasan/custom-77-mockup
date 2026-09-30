"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Materials", href: "#materials" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/90 backdrop-blur border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-[var(--color-ink)]"
            aria-label="Custom 77 home"
          >
            <Image
              src="/images/logo.png"
              alt="Custom 77 logo"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
              priority
            />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="text-[0.95rem] font-semibold tracking-tight">
                Custom 77
              </span>
              <span className="text-[0.68rem] uppercase tracking-[0.18em] text-[var(--color-muted)] mt-0.5">
                Metal · Wood · Denver
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.88rem] text-[var(--color-ink)] hover:text-[var(--color-wood-dark)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:303-618-7437"
              className="text-[0.85rem] text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
            >
              303-618-7437
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[var(--color-ink)] text-[var(--color-bg)] px-5 h-10 text-[0.82rem] font-medium tracking-wide hover:bg-[var(--color-wood-dark)] transition-colors"
            >
              Start a project
            </a>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex h-11 w-11 items-center justify-center text-[var(--color-ink)]"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="square"
            >
              <path d="M3 7h18M3 17h18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-[var(--color-bg)] z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="mx-auto max-w-[1280px] px-5 h-16 flex items-center justify-between">
          <span className="text-[0.95rem] font-semibold tracking-tight">Menu</span>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="square"
            >
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>
        <nav className="px-5 pt-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[2rem] font-semibold tracking-tight py-3 border-b border-[var(--color-border)] text-[var(--color-ink)] active:text-[var(--color-wood-dark)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="px-5 mt-10 flex flex-col gap-4">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center bg-[var(--color-ink)] text-[var(--color-bg)] px-5 h-14 text-[0.9rem] font-medium tracking-wide"
          >
            Start a custom project
          </a>
          <a
            href="https://custom77co.etsy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-[var(--color-border-strong)] text-[var(--color-ink)] px-5 h-14 text-[0.9rem] font-medium tracking-wide"
          >
            Shop ready-made on Etsy
          </a>
          <a
            href="tel:303-618-7437"
            className="text-center text-[0.9rem] text-[var(--color-muted)] mt-2"
          >
            Call or text · 303-618-7437
          </a>
        </div>
      </div>
    </header>
  );
}
