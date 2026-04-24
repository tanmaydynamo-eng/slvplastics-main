import { useEffect, useRef, useState, ReactNode } from "react";

type Variant = "up" | "left" | "right" | "scale";

interface RevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number; // ms
  className?: string;
  /** Re-trigger every time element enters viewport */
  repeat?: boolean;
}

const baseClasses: Record<Variant, string> = {
  up: "opacity-0 translate-y-10",
  left: "opacity-0 -translate-x-10",
  right: "opacity-0 translate-x-10",
  scale: "opacity-0 scale-[0.92]",
};

/**
 * Scroll-reveal wrapper using IntersectionObserver.
 * Children fade/slide into view when scrolled into the viewport,
 * and fade back out when scrolled away (if repeat is true).
 */
const Reveal = ({
  children,
  variant = "up",
  delay = 0,
  className = "",
  repeat = false,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (!repeat) observer.unobserve(node);
        } else if (repeat) {
          setVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [repeat]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
        visible ? "opacity-100 translate-x-0 translate-y-0 scale-100" : baseClasses[variant]
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
