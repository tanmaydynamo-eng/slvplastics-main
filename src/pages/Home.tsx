import { Link } from "react-router-dom";
import { ArrowRight, Settings, Factory, Wrench, Layers, MoveRight, Sparkles, Quote } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Reveal from "@/components/Reveal";
import { PRODUCTS } from "@/data/products";

const valueIcons = [Settings, Factory, Wrench, Layers];

const Home = () => {
  const quoteRef = useRef<HTMLElement>(null);
  const { scrollYProgress: quoteProgress } = useScroll({
    target: quoteRef,
    offset: ["start end", "end start"],
  });

  const quoteScale = useTransform(quoteProgress, [0, 0.5], [0.85, 1]);
  const quoteOpacity = useTransform(quoteProgress, [0, 0.4], [0, 1]);

  return (
    <div className="min-h-screen bg-[#050c07] text-white">
      <Hero />
      
      <Reveal>
        <StatsBar />
      </Reveal>

      {/* ── Statement Quote Section ── */}
      <section ref={quoteRef} className="relative overflow-hidden py-32 md:py-44 bg-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(159,70%,37%,0.08)_0%,transparent_60%)]" />
        
        <motion.div 
          style={{ scale: quoteScale, opacity: quoteOpacity }}
          className="max-w-6xl mx-auto px-6 text-center relative z-10"
        >
          <Quote size={40} className="mx-auto mb-6 text-primary/40" />
          <h2 className="font-display text-4xl md:text-6xl font-black text-foreground leading-[1.05] tracking-[-2px] mb-8">
            We shape raw polymer into <span className="block text-primary italic mt-2">components that outlast expectations.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            Every product from our Bangalore facility is injection molded with virgin polypropylene — engineered for strength and zero compromise.
          </p>
        </motion.div>
      </section>

      {/* ── Process / Features Grid ── */}
      <section className="bg-background px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-5">
            {/* Main Feature */}
            <Reveal variant="up" className="md:col-span-7 flex flex-col">
              <Link to="/gallery" className="flex-1 group relative overflow-hidden rounded-3xl border border-border bg-card min-h-[380px]">
                <img 
                  src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=80" 
                  alt="process" 
                  className="h-full w-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-10 flex flex-col justify-end">
                  <div className="text-white/80 text-xs font-semibold tracking-[3px] uppercase mb-3">Injection Molding</div>
                  <div className="font-display text-3xl font-black text-white">Micron-level precision.</div>
                </div>
              </Link>
            </Reveal>

            {/* Side Column */}
            <div className="md:col-span-5 grid grid-rows-2 gap-5">
              <Reveal delay={200} variant="up" className="flex flex-col">
                <Link to="/contact" className="flex-1 bg-primary p-8 rounded-3xl flex flex-col justify-between group">
                  <div className="font-display text-3xl font-black text-white leading-tight">Need custom plastic parts?</div>
                  <div className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                    Get a quote <ArrowRight size={16} />
                  </div>
                </Link>
              </Reveal>

              <Reveal delay={300} variant="up" className="flex flex-col">
                <div className="flex-1 bg-card border border-border p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                    <Sparkles size={80} strokeWidth={1} />
                  </div>
                  <div className="relative z-10 font-display text-2xl font-black text-foreground">Virgin-grade polymers only.</div>
                  <div className="relative z-10 text-muted-foreground text-sm">No recycled fillers. Pure performance.</div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-background px-6 py-24 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-black text-foreground tracking-[-1px]">Engineered Components</h2>
              <p className="text-muted-foreground mt-3 max-w-md">Specialized polymer solutions for diverse industrial applications.</p>
            </div>
            <Link to="/products" className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
              View all products <MoveRight size={18} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCTS.map((product, index) => (
              <Reveal key={product.slug} variant="up" delay={index * 100}>
                <Link 
                  to={`/products/${product.slug}`}
                  className="group bg-card border border-border rounded-2xl overflow-hidden h-full flex flex-col hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img 
                      src={product.cardImage} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="text-xs font-mono text-primary mb-2 uppercase tracking-wider">{product.category}</div>
                    <h3 className="font-display text-xl font-black text-foreground group-hover:text-primary transition-colors">{product.shortName}</h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{product.cardBlurb}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background px-6 py-24 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <Reveal variant="up" className="bg-primary p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,white/10,transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-7xl font-black text-white tracking-[-2px] mb-8">
                Ready to build <br className="hidden md:block" /> the future in plastic?
              </h2>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-black/20"
              >
                Start a Conversation <ArrowRight size={20} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
