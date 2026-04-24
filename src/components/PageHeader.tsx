import { motion } from "framer-motion";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

const PageHeader = ({ eyebrow, title, subtitle }: PageHeaderProps) => (
  <section className="bg-deep-gradient text-white px-6 lg:px-[6%] py-20 md:py-28 relative overflow-hidden">
    {/* Subtle glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,hsla(159,70%,37%,0.12)_0%,transparent_60%)]" />

    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-xs font-semibold tracking-[3px] uppercase mb-4 text-primary-glow"
      >
        {eyebrow}
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-[1.02] text-white max-w-4xl tracking-[-2px]"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-lg md:text-xl text-white/70 font-light max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHeader;
