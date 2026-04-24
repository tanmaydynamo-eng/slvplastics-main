import { Link } from "react-router-dom";
import { ArrowRight, Settings, Factory, Wrench, Layers, MoveRight, Sparkles, Quote } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Reveal from "@/components/Reveal";
import { PRODUCTS } from "@/data/products";
import ReactPlayer from "react-player";

const valueIcons = [Settings, Factory, Wrench, Layers];

/* ------------------------------------------------------------------ */
/*  Parallax Image Section (raviklaassens inspired)                    */
/* ------------------------------------------------------------------ */
const ParallaxImage = ({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="relative overflow-hidden rounded-3xl">
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-full object-cover scale-[1.2]"
      />
      {children}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  HOME PAGE                                                          */
/* ------------------------------------------------------------------ */
const Home = () => {
  const quoteRef = useRef<HTMLElement>(null);
  const { scrollYProgress: quoteProgress } = useScroll({
    target: quoteRef,
    offset: ["start end", "end start"],
  });
  const quoteScale = useTransform(quoteProgress, [0, 0.5], [0.85, 1]);
  const quoteOpacity = useTransform(quoteProgress, [0, 0.4], [0, 1]);

  return (
    <>
      <Hero />

      <Reveal>
        <StatsBar />
      </Reveal>

      {/* ── Statement Quote Section (raviklaassens style) ── */}
      <section
        ref={quoteRef}
        className="relative overflow-hidden py-32 md:py-44 bg-primary/5"
      >
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(159,70%,37%,0.08)_0%,transparent_60%)]" />

        <motion.div
          style={{ scale: quoteScale, opacity: quoteOpacity }}
          className="max-w-6xl mx-auto px-6 lg:px-[6%] text-center relative z-10"
        >
          <Quote size={40} className="mx-auto mb-6 text-primary/40" />
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] tracking-[-2px] mb-8">
            We shape raw polymer into
            <span className="block text-primary italic mt-2">
              components that outlast expectations.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            Every product from our Bangalore facility is injection molded with virgin polypropylene — engineered for strength, durability, and zero compromise.
          </p>
        </motion.div>
      </section>

      {/* ── Cinematic Video Showcase ── */}
      <section className="relative overflow-hidden py-0">
        <div className="relative h-[70vh] md:h-[85vh] overflow-hidden pointer-events-none">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=n-WzU81U1lI"
            playing={true}
            loop={true}
            muted={true}
            width="100vw"
            height="140vh"
            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', scale: '1.2' }}
            config={{ playerVars: { disablekb: 1, controls: 0, showinfo: 0, rel: 0, modestbranding: 1 } }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(156,82%,9%)] via-transparent to-[hsl(156,82%,9%)]" />

          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto w-full px-6 lg:px-[6%] pb-16">
              <Reveal variant="up" repeat={true}>
                <div className="max-w-2xl">
                  <div className="text-primary-glow text-xs font-semibold tracking-[3px] uppercase mb-4">
                    <Sparkles size={14} className="inline mr-2" />
                    Manufacturing Excellence
                  </div>
                  <h2 className="font-display text-3xl md:text-5xl font-black text-white leading-[1.05] mb-4 tracking-[-1px]">
                    Where raw material meets
                    <span className="text-primary-glow italic"> relentless precision.</span>
                  </h2>
                  <p className="text-white/70 text-base md:text-lg font-light leading-relaxed mb-6">
                    Our state-of-the-art injection molding facility runs around the clock, producing components that meet the highest standards of quality and consistency.
                  </p>
                  <Link
                    to="/gallery"
                    className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all border-b border-white/30 pb-1"
                  >
                    Tour the Facility <MoveRight size={16} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process / Features Grid ── */}
      <section className="bg-background px-6 lg:px-[6%] py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <Reveal repeat={true}>
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[2.5px] uppercase mb-3 text-primary">
                  Our Process
                </div>
              </Reveal>
              <Reveal delay={100} repeat={true}>
                <h2 className="font-display text-4xl md:text-5xl font-black leading-tight text-foreground mb-3 tracking-[-1px]">
                  Parts that feel engineered —
                  <span className="text-primary"> not improvised.</span>
                </h2>
              </Reveal>
              <Reveal delay={180} repeat={true}>
                <p className="text-base text-muted-foreground font-light leading-relaxed">
                  From raw polypropylene pellets to finished, inspected components — every step in our process is designed for repeatable perfection at industrial scale.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-5">
            {/* Big cinematic card */}
            <Reveal variant="up" repeat={true} className="md:col-span-7 flex flex-col">
              <Link
                to="/gallery"
                className="flex-1 group relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft hover:shadow-medium transition-all min-h-[380px]"
              >
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=80"
                    alt="Industrial manufacturing process"
                    className="h-full w-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                </div>
                <div className="relative p-8 md:p-10 h-full flex flex-col justify-end">
                  <div className="text-white/80 text-xs font-semibold tracking-[3px] uppercase mb-3">
                    Injection Molding
                  </div>
                  <div className="font-display text-3xl md:text-4xl font-black text-white leading-[1.05]">
                    Micron-level precision.
                    <span className="block text-white/80 font-light mt-2 text-lg md:text-xl">
                      You can see the quality before you touch it.
                    </span>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all">
                    See our process <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Contact CTA */}
            <Reveal delay={200} variant="up" repeat={true} className="md:col-span-5 flex flex-col">
              <Link
                to="/contact"
                className="flex-1 group relative overflow-hidden rounded-3xl border border-border bg-primary text-primary-foreground shadow-soft hover:shadow-medium transition-all min-h-[380px]"
              >
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,white_0%,transparent_55%)]" />
                <div className="relative p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-primary-foreground/80 text-xs font-semibold tracking-[3px] uppercase mb-2">
                      Ready when you are
                    </div>
                    <div className="font-display text-3xl md:text-4xl font-black leading-tight">
                      Need custom plastic parts?
                    </div>
                    <p className="text-sm mt-4 text-primary-foreground/85 font-light leading-relaxed">
                      Share your component requirements, material specs, and volume. We'll recommend the right molding setup for your needs.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-primary-foreground font-semibold text-sm group-hover:gap-3 transition-all">
                    Get a quote <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── What We Do / Products ── */}
      <section className="bg-background px-6 lg:px-[6%] py-24 border-t border-border">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <Reveal repeat={true}>
            <div className="text-xs font-semibold tracking-[2.5px] uppercase mb-3 text-primary">
              What We Do
            </div>
          </Reveal>
          <Reveal delay={100} repeat={true}>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight text-foreground mb-4 tracking-[-1px]">
              Precision Manufacturing
              <span className="text-primary"> Solutions</span>
            </h2>
          </Reveal>
          <Reveal delay={200} repeat={true}>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              From our Bangalore facility, we manufacture precision plastic parts,
              injection molded components, and custom engineering plastics —
              built for rigorous daily use across livestock, hydroponic, and industrial sectors.
            </p>
          </Reveal>
        </div>

        {/* Product grid */}
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.map((p, i) => {
            const Icon = valueIcons[i % valueIcons.length];
            return (
              <Reveal key={p.slug} variant="up" delay={i * 100} repeat={true}>
                <Link
                  to={`/products/${p.slug}`}
                  className="group block bg-card border border-border rounded-2xl overflow-hidden shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={p.cardImage}
                      alt={p.shortName}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs font-mono text-primary mb-2">
                      <Icon size={14} />
                      {p.modelCode}
                    </div>
                    <h3 className="font-display text-xl font-black text-foreground mb-2">
                      {p.shortName}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light mb-3">
                      {p.cardBlurb}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                      View product <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── Section links with premium images ── */}
      <section className="bg-secondary px-6 lg:px-[6%] py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5">
          {[
            {
              to: "/about",
              title: "About SLV Plastics",
              blurb: "Family-run manufacturer based in Bangalore, India.",
              variant: "left" as const,
              image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
            },
            {
              to: "/gallery",
              title: "Facility Gallery",
              blurb: "See our molding machines and engineering process.",
              variant: "up" as const,
              image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
            },
            {
              to: "/contact",
              title: "Get a Quote",
              blurb: "Bulk orders welcome. Pan-India shipping.",
              variant: "right" as const,
              image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
            },
          ].map((c, i) => (
            <Reveal key={c.to} variant={c.variant} delay={i * 120} repeat={true}>
              <Link
                to={c.to}
                className="group block bg-background border border-border rounded-xl overflow-hidden hover:border-primary transition-all hover:shadow-soft h-full"
              >
                {/* Image header */}
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-black text-foreground mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light mb-4">{c.blurb}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
