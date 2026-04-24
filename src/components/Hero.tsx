import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import warehouse from "@/assets/hero-warehouse.jpg";
import ReactPlayer from "react-player";

const Hero = () => {
  const [scrollT, setScrollT] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const t = Math.min(1, Math.max(0, window.scrollY / 600));
        setScrollT(t);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative overflow-hidden bg-hero-gradient min-h-[100vh] flex items-center"
    >
      {/* Cinematic background video with parallax scale */}
      <motion.div className="absolute inset-0 z-0 pointer-events-none" style={{ scale: videoScale }}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=R91D7cI51bI"
          playing={true}
          loop={true}
          muted={true}
          width="100vw"
          height="140vh"
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', scale: '1.2' }}
          config={{ playerVars: { disablekb: 1, controls: 0, showinfo: 0, rel: 0, modestbranding: 1 } }}
        />
        {/* Deep cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(156,82%,9%)]/95 via-[hsl(156,82%,9%)]/70 to-[hsl(156,82%,9%)]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(156,82%,9%)]/90 via-transparent to-[hsl(156,82%,9%)]/50" />
        {/* Radial glow */}
        <div
          className="absolute inset-0"
          style={{
            opacity: 1 - scrollT * 0.3,
            background:
              "radial-gradient(1200px 700px at 28% 42%, hsla(156, 82%, 75%, 0.14) 0%, transparent 55%), radial-gradient(900px 520px at 68% 18%, hsla(180, 100%, 80%, 0.10) 0%, transparent 60%)",
          }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-[6%]"
        style={{ y: textY, opacity: textOpacity }}
      >
        <div className="max-w-4xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-primary-glow border border-primary-glow/40 text-[11px] font-semibold tracking-[3px] uppercase px-4 py-2 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-glow animate-pulse-dot" />
            SLV Plastics — Bangalore, India
          </motion.div>

          {/* Massive headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-white text-5xl md:text-7xl lg:text-[92px] font-black leading-[0.92] mb-8 tracking-[-3px]"
          >
            Precision Plastic
            <br />
            Manufacturing.
            <span className="block text-primary-glow italic font-bold mt-3 text-4xl md:text-5xl lg:text-6xl tracking-[-1px]">
              Engineered to Perform.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/75 text-lg md:text-xl leading-relaxed mb-10 font-light max-w-2xl"
          >
            A full-spectrum polypropylene manufacturer — livestock equipment,
            industrial troughs, hydroponic systems and custom molded products,
            engineered at our Bangalore facility for clients across India.
          </motion.p>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="inline-flex items-center gap-2 text-white/50 text-xs md:text-sm tracking-[2.5px] uppercase mb-10"
          >
            <span className="h-px w-10 bg-white/40" />
            Precision. Performance. Built to last.
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/products"
              className="bg-white text-[hsl(165,76%,25%)] px-8 py-4 rounded-lg font-semibold text-[15px] hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(0,0,0,0.35)] transition-all shadow-medium"
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="border border-white/50 text-white px-8 py-4 rounded-lg font-medium text-[15px] hover:bg-white/10 hover:border-white/80 transition-all backdrop-blur-sm"
            >
              Request a Sample
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-white/50 text-[10px] tracking-[3px] uppercase">
          <span>Scroll</span>
          <span className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
