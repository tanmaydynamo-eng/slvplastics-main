import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Animate counter from 0 to 100
    const duration = 1800; // ms
    const steps = 100;
    const interval = duration / steps;
    let current = 0;

    const counter = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= 100) {
        clearInterval(counter);
        setTimeout(() => setIsLoading(false), 400);
      }
    }, interval);

    return () => clearInterval(counter);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{
            background: "linear-gradient(160deg, hsl(60, 20%, 98%) 0%, hsl(156, 60%, 95%) 50%, hsl(156, 60%, 92%) 100%)",
          }}
        >
          {/* Subtle floating circles in background */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsla(159, 70%, 37%, 0.15) 0%, transparent 70%)",
              top: "20%",
              left: "30%",
            }}
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[400px] h-[400px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsla(159, 70%, 37%, 0.1) 0%, transparent 70%)",
              bottom: "15%",
              right: "20%",
            }}
          />

          {/* Top-left branding */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute top-8 left-8 text-[10px] tracking-[3px] uppercase font-semibold"
            style={{ color: "hsl(156, 82%, 13%)" }}
          >
            SLV Plastics
          </motion.div>

          {/* Top-right location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute top-8 right-8 text-[10px] tracking-[3px] uppercase font-medium"
            style={{ color: "hsl(60, 4%, 40%)" }}
          >
            Bangalore, India
          </motion.div>

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Animated brand name */}
            <div className="overflow-hidden mb-4">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-[-3px]"
                style={{ color: "hsl(156, 82%, 13%)" }}
              >
                SLV
              </motion.div>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="font-display text-3xl md:text-4xl lg:text-5xl font-light tracking-[2px] italic"
                style={{ color: "hsl(159, 70%, 37%)" }}
              >
                Plastics
              </motion.div>
            </div>

            {/* Subtitle */}
            <div className="overflow-hidden mb-10">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                className="text-[11px] tracking-[4px] uppercase font-medium"
                style={{ color: "hsl(60, 4%, 40%)" }}
              >
                Polymer Engineering
              </motion.div>
            </div>

            {/* Progress bar + counter */}
            <div className="w-48 md:w-64 flex flex-col items-center gap-3">
              <div className="w-full h-[1px] bg-black/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${count}%`,
                    background: "hsl(159, 70%, 37%)",
                  }}
                />
              </div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-[11px] font-mono tracking-[2px]"
                style={{ color: "hsl(60, 4%, 40%)" }}
              >
                {count}%
              </motion.span>
            </div>
          </div>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute bottom-8 text-[10px] tracking-[3px] uppercase font-medium text-center"
            style={{ color: "hsl(60, 4%, 40%)" }}
          >
            Precision · Performance · Quality
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
