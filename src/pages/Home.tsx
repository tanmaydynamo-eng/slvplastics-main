import { Link } from "react-router-dom";
import { ArrowRight, Settings, Factory, Wrench, Layers, MoveRight, Sparkles, Quote } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Reveal from "@/components/Reveal";
import { PRODUCTS } from "@/data/products";

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

      {/* ── CINEMATIC VIDEO SHOWCASE ── */}
      <section className="py-24 bg-[#050c07] border-y border-green-900/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-[6%]">
          <Reveal>
            <div className="text-center mb-16">
              <div className="text-green-400 font-mono tracking-[0.3em] text-xs mb-4 uppercase flex items-center justify-center gap-2">
                <Sparkles size={14} /> Manufacturing Excellence
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Precision in <span className="text-green-500 italic">Motion.</span></h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Video 1: Factory Interior */}
            <Reveal delay={0.2}>
              <div className="relative rounded-[2rem] overflow-hidden border border-green-500/20 group shadow-2xl">
                <video 
                  src="https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-modern-factory-39644-large.mp4" 
                  autoPlay loop muted playsInline 
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-[2000ms]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050c07] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-white text-2xl font-black uppercase tracking-tight">Bangalore Facility</p>
                  <p className="text-green-500/70 font-mono text-xs uppercase tracking-[0.2em]">Scale Production</p>
                </div>
              </div>
            </Reveal>

            {/* Video 2: Robotic Arm */}
            <Reveal delay={0.4}>
              <div className="relative rounded-[2rem] overflow-hidden border border-green-500/20 group shadow-2xl">
                <video 
                  src="https://assets.mixkit.co/videos/preview/mixkit-automated-robotic-arm-in-a-factory-31744-large.mp4" 
                  autoPlay loop muted playsInline 
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-[2000ms]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050c07] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-white text-2xl font-black uppercase tracking-tight">Precision Molding</p>
                  <p className="text-green-500/70 font-mono text-xs uppercase tracking-[0.2em]">Micron Accuracy</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Statement Quote Section ── */}
      <section ref={quoteRef} className="relative overflow-hidden py-32 md:py-44 bg-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(159,70%,37%,0.08)_0%,transparent_60%)]" />
        <motion.div style={{ scale: quoteScale, opacity: quoteOpacity }} className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <Quote size={40} className="mx-auto mb-6 text-primary/40" />
          <h2 className="font-display text-4xl md:text-6xl font-black text-foreground leading-[1.05] tracking-[-2px] mb-8">
            We shape raw polymer into <span className="block text-primary italic mt-2">components that outlast expectations.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            Every product from our Bangalore facility is injection molded with virgin polypropylene — engineered for strength and zero compromise.
          </p>
        </motion.div>
      </section>

      {/* ── Product Grid ── */}
      <section className="bg-background px-6 py-24 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-tight">Our Core Products</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.slug} variant="up" delay={i * 100}>
                <Link to={`/products/${p.slug}`} className="group bg-card border border-border rounded-2xl overflow-hidden block h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.cardImage} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-black text-foreground">{p.shortName}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{p.cardBlurb}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final Call to Action ── */}
      <section className="bg-background px-6 py-24 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <Reveal variant="up" className="bg-primary p-12 rounded-[3rem] flex flex-col md:flex-row items-center justify-between group">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h2 className="font-display text-4xl font-black text-white mb-4">Start your custom project today.</h2>
              <p className="text-white/80 text-lg">Talk to our engineers in Dabaspet, Bangalore.</p>
            </div>
            <Link to="/contact" className="bg-white text-primary px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-all">
              Get a Quote <ArrowRight size={20} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
