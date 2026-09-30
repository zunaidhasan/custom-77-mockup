import Image from "next/image";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import InquiryForm from "@/components/InquiryForm";
import ScrollReveal from "@/components/ScrollReveal";

export const dynamic = "force-dynamic";

const services = [
  {
    title: "Dining tables",
    description:
      "The center of your home. Solid hardwood tops on welded steel bases — sized to your space, finished to stand up to daily use.",
  },
  {
    title: "Floating shelves",
    description:
      "Clean, hidden-fastener shelves in walnut, white oak, or steel — for kitchens, living rooms, and bars. Weight-rated and measured to the inch.",
  },
  {
    title: "Benches & seating",
    description:
      "Entryway benches, dining benches, restaurant banquettes. Metal frames with wood seats, sized to fit the people who sit on them every day.",
  },
  {
    title: "Handrails & architectural",
    description:
      "Interior and exterior steel handrails, guardrails, and small architectural steel. Built clean, installed solid, finished to last.",
  },
  {
    title: "Coffee & side tables",
    description:
      "Live-edge or straight-cut tops on steel bases of every shape. The kind of piece that anchors a room.",
  },
  {
    title: "Desks & workspace",
    description:
      "Standing desks, writing desks, studio worktables. Made to your working height and preferred depth with honest, durable materials.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Conversation",
    text: "We start with a call or exchange. You share the space, the use, the sizes, what you like. We talk through materials, what will and won't work, and rough budget.",
  },
  {
    step: "02",
    title: "Design & estimate",
    text: "We put together a simple written proposal with dimensions, materials, finish, lead time, and firm pricing. No surprises, no hidden costs.",
  },
  {
    step: "03",
    title: "Build",
    text: "Every piece starts as raw steel and kiln-dried hardwood in our Denver shop. We weld, mill, sand, finish, and assemble in-house — no outsourcing.",
  },
  {
    step: "04",
    title: "Deliver & install",
    text: "We deliver and install throughout the Denver metro. For shipping outside Colorado, we crate and freight finished pieces via white-glove carriers.",
  },
];

const materials = [
  {
    name: "Blackened & raw steel",
    detail:
      "Hot-rolled steel, TIG-welded, ground clean, finished with wax, oil, or clear polyurethane — never spray paint. Patinas naturally over time.",
  },
  {
    name: "Solid hardwoods",
    detail:
      "Walnut, white oak, maple, and ash — kiln-dried, hand-selected for grain and character, finished with hardwax oil for a natural feel that holds up.",
  },
  {
    name: "No veneers, no shortcuts",
    detail:
      "No MDF, no particleboard, no cheap fasteners hidden under plugs. Every joint is engineered for disassembly if a piece ever needs to move or be refinished.",
  },
];

const testimonials = [
  {
    quote:
      "Absolutely stunning piece. The quality of craftsmanship is incredible — solid walnut and steel, built heavier and nicer than I even imagined. Clear communication and on-time delivery.",
    name: "Mark R.",
    context: "Walnut dining table · Denver",
    source: "Etsy review",
  },
  {
    quote:
      "Our floating shelves are the first thing everyone notices when they walk into the kitchen. Clean, level, and they hold way more weight than anything I could have installed myself.",
    name: "Hannah & Tyler M.",
    context: "Kitchen floating shelves · Wheat Ridge",
    source: "Custom client",
  },
  {
    quote:
      "Built us a custom entry bench to exact dimensions and shipped across the country. Zero issues, perfect fit. You can feel the difference vs. store-bought.",
    name: "Jason K.",
    context: "Oak & steel entry bench · Chicago, IL",
    source: "Etsy review",
  },
];

export default async function HomePage() {
  return (
    <>
      <Header />

      <main className="pt-16 md:pt-20">
        {/* ====================== HERO ====================== */}
        <section className="relative" id="top">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10 pt-10 md:pt-16 lg:pt-20 pb-16 md:pb-24 lg:pb-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[var(--color-muted)] mb-6">
                  Custom 77 · Denver, Colorado · Est. 2018
                </p>
                <h1 className="text-[clamp(2.2rem,5.2vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-[var(--color-ink)]">
                  Furniture built
                  <br />
                  to outlast you.
                </h1>
                <p className="mt-6 md:mt-8 text-[clamp(1rem,1.4vw,1.12rem)] leading-[1.65] text-[var(--color-muted)] max-w-[56ch]">
                  We design and weld steel and hardwood furniture and architectural pieces for Denver
                  homes and small businesses. No veneers, no fasteners hidden under plugs. Just raw
                  materials, careful joins, and pieces sized exactly to your space.
                </p>
                <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center bg-[var(--color-ink)] text-[var(--color-bg)] px-7 h-14 text-[0.88rem] font-medium tracking-wide hover:bg-[var(--color-wood-dark)] transition-colors"
                  >
                    Start a custom project
                  </a>
                  <a
                    href="https://custom77co.etsy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-[var(--color-border-strong)] text-[var(--color-ink)] px-7 h-14 text-[0.88rem] font-medium tracking-wide hover:bg-white hover:border-[var(--color-ink)] transition-colors"
                  >
                    Shop ready-made on Etsy ↗
                  </a>
                </div>
                <div className="mt-10 flex items-center gap-6 text-[0.82rem] text-[var(--color-muted)]">
                  <a href="tel:303-618-7437" className="hover:text-[var(--color-ink)] transition-colors">
                    Call / text · 303-618-7437
                  </a>
                  <span className="h-4 w-px bg-[var(--color-border)]" aria-hidden />
                  <span className="text-[var(--color-muted)]">
                    Serving Denver · Shipping nationwide
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="img-wrap aspect-[4/5] md:aspect-[5/6] w-full bg-[var(--color-border)]">
                  <Image
                    src="/images/hero.webp"
                    alt="Custom live-edge wood console with angular black steel frame in a warm interior."
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>

            {/* Quick value row under hero */}
            <div className="mt-16 md:mt-24 pt-8 border-t border-[var(--color-border)] grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
              {[
                { k: "In-house", v: "Every piece welded and finished in our Denver shop" },
                { k: "Built to fit", v: "Measured and sized to your space, not mass-produced" },
                { k: "Solid materials", v: "Hardwood and raw steel — no veneers, no MDF" },
                { k: "Built to last", v: "Designed to be used daily and passed on" },
              ].map((item) => (
                <div key={item.k}>
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[var(--color-muted)] mb-2">
                    {item.k}
                  </p>
                  <p className="text-[0.92rem] leading-snug text-[var(--color-ink)]">{item.v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================== MARQUEE / TRUST STRIP ====================== */}
        <section className="border-y border-[var(--color-border)] bg-white/50">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10 py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[0.72rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
            <span>Denver · Boulder · Ft. Collins · Colorado Springs</span>
            <span className="hidden md:inline">·</span>
            <span>Residential & small commercial</span>
            <span className="hidden md:inline">·</span>
            <span>Shipping available nationwide</span>
          </div>
        </section>

        {/* ====================== FEATURED WORK ====================== */}
        <section id="work" className="py-20 md:py-28 lg:py-32">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
            <ScrollReveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[var(--color-wood-dark)] mb-4">
                  Featured work
                </p>
                <h2 className="text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-[-0.015em] leading-[1.05] max-w-[18ch]">
                  Selected pieces from recent projects.
                </h2>
              </div>
              <p className="text-[var(--color-muted)] text-[0.95rem] leading-relaxed max-w-md">
                A small sample of what we build. Every piece is made to order, so consider this a starting
                point — your version will be sized and finished for your space.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  src: "/images/work-1.webp",
                  title: "Wood & steel coffee table",
                  meta: "Live-edge top · black steel frame",
                  alt: "Handmade wood and black steel coffee table in a bright living room.",
                },
                {
                  src: "/images/work-2.webp",
                  title: "Bedside table",
                  meta: "Hardwood top · steel base",
                  alt: "Handmade wood and steel bedside table in a warm living space.",
                },
                {
                  src: "/images/work-3.webp",
                  title: "White steel dining table",
                  meta: "Hardwood top · geometric steel base",
                  alt: "Long wood dining table with geometric white steel base.",
                },
                {
                  src: "/images/work-4.webp",
                  title: "Steel handrail",
                  meta: "Blackened steel · exterior install",
                  alt: "Custom black steel handrail fitted along an outdoor walkway.",
                },
                {
                  src: "/images/work-5.webp",
                  title: "Wood & steel side table",
                  meta: "Compact build · black steel supports",
                  alt: "Small wood and black steel side table beside a sofa.",
                },
                {
                  src: "/images/detail-1.webp",
                  title: "Fireplace mantel",
                  meta: "Thick hardwood · natural finish",
                  alt: "Thick natural wood mantel above a modern fireplace.",
                },
              ].map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 60}>
                  <figure className="group">
                    <div className="img-wrap aspect-[4/5] mb-4 overflow-hidden">
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        loading="lazy"
                        className="transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    <figcaption>
                      <h3 className="text-[1.05rem] font-semibold tracking-tight leading-tight">
                        {p.title}
                      </h3>
                      <p className="text-[0.82rem] text-[var(--color-muted)] mt-1 tracking-wide">
                        {p.meta}
                      </p>
                    </figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ====================== TWO PATHS: CUSTOM vs ETSY ====================== */}
        <section id="services" className="py-20 md:py-28 lg:py-32 border-t border-[var(--color-border)] bg-white">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
            <ScrollReveal className="max-w-3xl mb-12 md:mb-16">
              <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[var(--color-wood-dark)] mb-4">
                Two ways to work with us
              </p>
              <h2 className="text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-[-0.015em] leading-[1.05]">
                A custom piece built to your space, or a ready-made design shipped to your door.
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* CUSTOM */}
              <ScrollReveal className="border border-[var(--color-border-strong)] p-8 md:p-10 flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-ink)]">
                    Custom work
                  </p>
                  <span className="text-[0.7rem] text-[var(--color-muted)] tracking-wide">
                    Best for homeowners & designers
                  </span>
                </div>
                <h3 className="text-[clamp(1.5rem,2.4vw,2.1rem)] font-semibold tracking-[-0.01em] leading-[1.1] mb-4">
                  Built to fit your space, your use, your taste.
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                  Most of our work is one-off. You tell us the wall, the room, the people who'll use it,
                  and we design and build it from there. Lead times typically 6–10 weeks depending on the
                  piece and the time of year.
                </p>
                <ul className="space-y-3 text-[0.92rem] text-[var(--color-ink)] mb-10">
                  {[
                    "Your exact dimensions — no forced standard sizes",
                    "Choice of wood species, steel finish, and edge profile",
                    "On-site measurement and install in the Denver metro",
                    "Firm written estimate before we start",
                  ].map((li) => (
                    <li key={li} className="flex gap-3 items-start">
                      <span className="mt-[0.55rem] h-px w-4 bg-[var(--color-wood-dark)] shrink-0" aria-hidden />
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center bg-[var(--color-ink)] text-[var(--color-bg)] px-6 h-12 text-[0.85rem] font-medium tracking-wide hover:bg-[var(--color-wood-dark)] transition-colors"
                  >
                    Start a custom project
                  </a>
                  <a
                    href="tel:303-618-7437"
                    className="inline-flex items-center justify-center border border-[var(--color-border-strong)] text-[var(--color-ink)] px-6 h-12 text-[0.85rem] font-medium tracking-wide hover:border-[var(--color-ink)] transition-colors"
                  >
                    Call 303-618-7437
                  </a>
                </div>
              </ScrollReveal>

              {/* ETSY */}
              <ScrollReveal
                delay={120}
                className="border border-[var(--color-border)] bg-[var(--color-bg)] p-8 md:p-10 flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    Ready-made
                  </p>
                  <span className="text-[0.7rem] text-[var(--color-muted)] tracking-wide">
                    Ships in 2–4 weeks
                  </span>
                </div>
                <h3 className="text-[clamp(1.5rem,2.4vw,2.1rem)] font-semibold tracking-[-0.01em] leading-[1.1] mb-4">
                  Our most-requested pieces, on demand.
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                  For standard sizes or pieces we've already prototyped, we keep a small Etsy shop with
                  quick-ship options. Same materials and welds, same finishing process, just a quicker
                  path to your door.
                </p>
                <ul className="space-y-3 text-[0.92rem] text-[var(--color-ink)] mb-10">
                  {[
                    "Dining tables, coffee tables, and benches in standard sizes",
                    "Listed with transparent pricing and lead times",
                    "Shipped nationwide via freight or parcel",
                    "Local pickup available at our Denver shop",
                  ].map((li) => (
                    <li key={li} className="flex gap-3 items-start">
                      <span
                        className="mt-[0.55rem] h-px w-4 bg-[var(--color-muted)] shrink-0"
                        aria-hidden
                      />
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <a
                    href="https://custom77co.etsy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[var(--color-ink)] text-[var(--color-bg)] px-6 h-12 text-[0.85rem] font-medium tracking-wide hover:bg-[var(--color-wood-dark)] transition-colors"
                  >
                    Browse Etsy shop ↗
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Service category chips */}
            <div className="mt-16 md:mt-20">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-8">
                What we build
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
                {services.map((s, i) => (
                  <ScrollReveal key={s.title} delay={i * 50} className="border-t border-[var(--color-border)] pt-5">
                    <h4 className="text-[1.05rem] font-semibold tracking-tight mb-2">{s.title}</h4>
                    <p className="text-[0.9rem] text-[var(--color-muted)] leading-relaxed">
                      {s.description}
                    </p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ====================== FULL-WIDTH IMAGE BREAK ====================== */}
        <section aria-label="Workshop">
          <div className="img-wrap aspect-[16/9] md:aspect-[21/9] w-full">
            <Image
              src="/images/workshop.webp"
              alt="Wood console table with sculptural black steel supports."
              fill
              sizes="100vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* ====================== PROCESS ====================== */}
        <section id="process" className="py-20 md:py-28 lg:py-32">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <ScrollReveal className="lg:col-span-4">
                <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[var(--color-wood-dark)] mb-4">
                  Process
                </p>
                <h2 className="text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-[-0.015em] leading-[1.05]">
                  Straightforward. No sales pitches, no mystery.
                </h2>
                <p className="mt-6 text-[var(--color-muted)] leading-relaxed">
                  We're a small shop. You talk directly to the person building your piece. No
                  showroom, no account managers, no markups for someone else's overhead.
                </p>
              </ScrollReveal>

              <div className="lg:col-span-8">
                <ol className="divide-y divide-[var(--color-border)]">
                  {processSteps.map((s, i) => (
                    <ScrollReveal key={s.step} delay={i * 80} as="li">
                      <div className="py-8 grid grid-cols-12 gap-6">
                        <div className="col-span-2 md:col-span-1">
                          <span className="text-[0.78rem] tabular-nums tracking-[0.18em] text-[var(--color-wood-dark)]">
                            {s.step}
                          </span>
                        </div>
                        <div className="col-span-10 md:col-span-4">
                          <h3 className="text-[1.15rem] font-semibold tracking-tight">{s.title}</h3>
                        </div>
                        <div className="col-span-12 md:col-span-7 md:col-start-6">
                          <p className="text-[var(--color-muted)] leading-relaxed text-[0.95rem]">
                            {s.text}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ====================== MATERIALS ====================== */}
        <section id="materials" className="py-20 md:py-28 lg:py-32 border-t border-[var(--color-border)] bg-white">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <ScrollReveal className="lg:col-span-5">
                <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[var(--color-wood-dark)] mb-4">
                  Materials
                </p>
                <h2 className="text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-[-0.015em] leading-[1.05]">
                  Let the material do the talking.
                </h2>
                <p className="mt-6 text-[var(--color-muted)] leading-relaxed max-w-[48ch]">
                  We don't add ornament for its own sake. The character of the steel and the grain of
                  the wood are the finish. We finish every surface so it holds up to use, but we
                  don't cover the material up.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-3">
                  <div className="img-wrap aspect-square">
                    <Image
                      src="/images/detail-1.webp"
                      alt="Solid hardwood mantel with natural oil finish"
                      fill
                      sizes="(min-width: 1024px) 20vw, 50vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="img-wrap aspect-square">
                    <Image
                      src="/images/detail-2.webp"
                      alt="Custom live-edge wood shelves with black metal brackets"
                      fill
                      sizes="(min-width: 1024px) 20vw, 50vw"
                      loading="lazy"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <div className="lg:col-span-7 lg:pl-10">
                <dl className="divide-y divide-[var(--color-border)]">
                  {materials.map((m, i) => (
                    <ScrollReveal key={m.name} delay={i * 80} as="div" className="py-8">
                      <dt className="text-[1.2rem] font-semibold tracking-tight mb-3">{m.name}</dt>
                      <dd className="text-[var(--color-muted)] leading-relaxed text-[0.95rem] max-w-[56ch]">
                        {m.detail}
                      </dd>
                    </ScrollReveal>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* ====================== ABOUT / MAKER ====================== */}
        <section id="about" className="py-20 md:py-28 lg:py-32">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <ScrollReveal className="lg:col-span-5">
                <div className="img-wrap aspect-[4/5] w-full">
                  <Image
                    src="/images/work-6.webp"
                    alt="A maker's hands working on a wood and steel table in a home."
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    loading="lazy"
                  />
                </div>
                <p className="mt-5 text-[0.78rem] text-[var(--color-muted)] tracking-wide">
                  Wood and steel, in a real home. Every piece is designed around the room it lives in.
                </p>
              </ScrollReveal>

              <ScrollReveal className="lg:col-span-7" delay={120}>
                <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[var(--color-wood-dark)] mb-4">
                  About Custom 77
                </p>
                <h2 className="text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-[-0.015em] leading-[1.08]">
                  A small shop in Denver, run by people who build every day.
                </h2>
                <div className="mt-8 space-y-5 text-[var(--color-ink)] leading-[1.7] text-[1rem] max-w-[62ch]">
                  <p>
                    Custom 77 started because we couldn't find furniture that was actually built to
                    hold up to daily use — at any price point. There was always a corner cut
                    somewhere: a veneer where solid wood should be, a cheap bracket hidden under a
                    shelf, hardware that would strip out the second time you moved it.
                  </p>
                  <p>
                    We don't do that. We build pieces out of the same materials we'd use in our own
                    homes. Hardwood, raw steel, honest welds, and finishes that can be repaired
                    rather than replaced. We enjoy the problem of getting a piece to fit a specific
                    room and specific people, and we stand behind every build with straightforward
                    follow-up if anything ever needs attention.
                  </p>
                  <p className="text-[var(--color-muted)]">
                    We serve homeowners, interior designers, and small commercial clients around
                    Denver, and we ship finished pieces across the country. If you have a space
                    you've been trying to figure out, we'd love to talk about it.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ====================== TESTIMONIALS ====================== */}
        <section className="py-20 md:py-28 lg:py-32 border-t border-[var(--color-border)] bg-white">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
            <ScrollReveal className="max-w-2xl mb-12 md:mb-16">
              <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[var(--color-wood-dark)] mb-4">
                What clients say
              </p>
              <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold tracking-[-0.015em] leading-[1.08]">
                Real projects, real people.
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((t, i) => (
                <ScrollReveal
                  key={t.name}
                  delay={i * 100}
                  className="border border-[var(--color-border)] p-7 md:p-8 flex flex-col"
                >
                  <svg
                    width="28"
                    height="22"
                    viewBox="0 0 28 22"
                    fill="none"
                    className="text-[var(--color-border-strong)] mb-6"
                    aria-hidden
                  >
                    <path
                      d="M0 22V12C0 5.4 3.6 1.4 9 0l1.2 3c-2.8 1-4.8 2.8-5.4 5.2H10V22H0zm16 0V12c0-6.6 3.6-10.6 9-12l1.2 3c-2.8 1-4.8 2.8-5.4 5.2H26V22H16z"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="text-[0.98rem] leading-[1.65] text-[var(--color-ink)] flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                    <p className="text-[0.9rem] font-semibold tracking-tight">{t.name}</p>
                    <p className="text-[0.78rem] text-[var(--color-muted)] mt-1">
                      {t.context} · <span className="italic">{t.source}</span>
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ====================== GALLERY ====================== */}
        <section className="py-20 md:py-28 lg:py-32">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
            <ScrollReveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[var(--color-wood-dark)] mb-4">
                  Gallery
                </p>
                <h2 className="text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-[-0.015em] leading-[1.05]">
                  From the shop.
                </h2>
              </div>
              <p className="text-[var(--color-muted)] text-[0.9rem] max-w-md">
                Click any image for a closer look. You'll see finished installs, in-progress welds, and
                material details we thought were worth photographing.
              </p>
            </ScrollReveal>
            <Gallery />
            <div className="mt-10 text-center">
              <a
                href="https://www.instagram.com/custom77co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.82rem] text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors tracking-wide"
              >
                Follow on Instagram @custom77co for ongoing work ↗
              </a>
            </div>
          </div>
        </section>

        {/* ====================== CONTACT / INQUIRY ====================== */}
        <section
          id="contact"
          className="py-20 md:py-28 lg:py-32 border-t border-[var(--color-border)] bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <ScrollReveal className="lg:col-span-5">
                <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[var(--color-wood-dark)] mb-4">
                  Let&apos;s build something
                </p>
                <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.02em] leading-[1.05]">
                  Start a custom project.
                </h2>
                <p className="mt-6 text-[var(--color-muted)] leading-relaxed max-w-[48ch]">
                  Tell us a little about what you're thinking. We read every message personally and
                  typically respond within 2–3 business days with a quick follow-up or to schedule a
                  short call.
                </p>

                <div className="mt-10 space-y-6">
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-2">
                      Prefer to talk?
                    </p>
                    <a
                      href="tel:303-618-7437"
                      className="text-[1.15rem] font-semibold tracking-tight text-[var(--color-ink)] hover:text-[var(--color-wood-dark)] transition-colors"
                    >
                      303-618-7437
                    </a>
                    <p className="text-[0.85rem] text-[var(--color-muted)] mt-1">
                      Call or text — 9am–6pm MT, weekdays & most Saturdays.
                    </p>
                  </div>

                  <div className="hairline" />

                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-2">
                      Shop location
                    </p>
                    <p className="text-[0.95rem] text-[var(--color-ink)]">
                      Custom 77 Workshop
                      <br />
                      Denver, Colorado
                    </p>
                    <p className="text-[0.85rem] text-[var(--color-muted)] mt-1">
                      By appointment only — we're usually at the bench.
                    </p>
                  </div>

                  <div className="hairline" />

                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-3">
                      Find us
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-[0.9rem]">
                      {[
                        { label: "Instagram", href: "https://www.instagram.com/custom77co/" },
                        { label: "Etsy", href: "https://custom77co.etsy.com" },
                        { label: "TikTok", href: "https://www.tiktok.com/@custom.77" },
                        { label: "Facebook", href: "https://www.facebook.com/share/16ZcSTBQP6/" },
                      ].map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--color-ink)] underline underline-offset-4 decoration-[var(--color-border-strong)] hover:decoration-[var(--color-ink)] hover:text-[var(--color-wood-dark)] transition-colors"
                        >
                          {s.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal className="lg:col-span-7" delay={120}>
                <div className="border border-[var(--color-border)] bg-[var(--color-bg)] p-6 md:p-10">
                  <InquiryForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ====================== FOOTER ====================== */}
        <footer className="border-t border-[var(--color-border)] bg-[var(--color-ink)] text-[var(--color-bg)]">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10 py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
              <div className="md:col-span-5">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center border border-white/30 text-[0.75rem] font-semibold tracking-[0.15em]">
                    77
                  </span>
                  <div>
                    <p className="font-semibold tracking-tight">Custom 77</p>
                    <p className="text-[0.72rem] uppercase tracking-[0.2em] text-white/60">
                      Metal · Wood · Denver
                    </p>
                  </div>
                </div>
                <p className="text-[0.9rem] text-white/70 leading-relaxed max-w-md">
                  Handcrafted metal and wood furniture and architectural pieces for homes and small
                  businesses. Built to fit, built to last.
                </p>
              </div>

              <div className="md:col-span-3">
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-white/50 mb-4">
                  Work with us
                </p>
                <ul className="space-y-2 text-[0.9rem]">
                  <li>
                    <a href="#contact" className="text-white hover:text-[var(--color-accent)] transition-colors">
                      Custom inquiry
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://custom77co.etsy.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[var(--color-accent)] transition-colors"
                    >
                      Etsy shop
                    </a>
                  </li>
                  <li>
                    <a href="tel:303-618-7437" className="text-white hover:text-[var(--color-accent)] transition-colors">
                      303-618-7437
                    </a>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-4">
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-white/50 mb-4">
                  Follow along
                </p>
                <ul className="space-y-2 text-[0.9rem]">
                  {[
                    { label: "Instagram", href: "https://www.instagram.com/custom77co/" },
                    { label: "TikTok", href: "https://www.tiktok.com/@custom.77" },
                    { label: "Facebook", href: "https://www.facebook.com/share/16ZcSTBQP6/" },
                    { label: "Threads", href: "https://www.threads.com/@custom77co" },
                  ].map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[var(--color-accent)] transition-colors"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-14 pt-8 border-t border-white/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[0.78rem] text-white/50">
              <p>© {new Date().getFullYear()} Custom 77. All rights reserved. Built in Denver, CO.</p>
              <p>
                We respect your privacy. Information shared through our inquiry form is used only to
                contact you about your project — never sold or shared.
              </p>
            </div>
          </div>
        </footer>

        {/* Sticky mobile CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-ink)] text-[var(--color-bg)] border-t border-white/10">
          <div className="grid grid-cols-2">
            <a
              href="#contact"
              className="flex items-center justify-center h-14 text-[0.85rem] font-medium tracking-wide"
            >
              Start a project
            </a>
            <a
              href="tel:303-618-7437"
              className="flex items-center justify-center h-14 text-[0.85rem] font-medium tracking-wide border-l border-white/15 bg-[var(--color-wood-dark)]"
            >
              Call · 303-618
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
