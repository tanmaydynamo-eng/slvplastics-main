import { Check } from "lucide-react";
import { ReactNode } from "react";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductSectionProps {
  id: string;
  modelCode: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  images: { src: string; alt: string }[];
  features: string[];
  specs: ProductSpec[];
  applications: string[];
  highlights?: { num: string; label: string }[];
  variant?: "light" | "muted" | "dark";
  reverse?: boolean;
  children?: ReactNode;
}

const ProductSection = ({
  id,
  modelCode,
  category,
  title,
  tagline,
  description,
  images,
  features,
  specs,
  applications,
  highlights,
  variant = "light",
  reverse = false,
}: ProductSectionProps) => {
  const bg =
    variant === "muted"
      ? "bg-secondary"
      : variant === "dark"
      ? "bg-primary-deep text-white"
      : "bg-background";

  const isDark = variant === "dark";

  return (
    <section id={id} className={`${bg} px-6 lg:px-[6%] py-24`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[2.5px] uppercase mb-3 ${isDark ? "text-primary-glow" : "text-primary"}`}>
            <span className="font-mono">{modelCode}</span>
            <span className={isDark ? "text-white/30" : "text-muted-foreground/50"}>/</span>
            <span>{category}</span>
          </div>
          <h2 className={`font-display text-4xl md:text-5xl font-black leading-tight mb-4 ${isDark ? "text-white" : "text-foreground"}`}>
            {title}
          </h2>
          <p className={`text-lg font-light leading-relaxed ${isDark ? "text-white/70" : "text-muted-foreground"}`}>
            {tagline}
          </p>
        </div>

        {/* Top: image gallery + description */}
        <div className={`grid lg:grid-cols-2 gap-12 items-start mb-16 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          {/* Images */}
          <div className="grid grid-cols-2 gap-3">
            {images.map((img, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden shadow-soft group ${
                  i === 0 ? "col-span-2 row-span-1" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    i === 0 ? "h-72 md:h-80" : "h-44 md:h-52"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Description + features */}
          <div className="flex flex-col gap-7">
            <p className={`text-base leading-[1.85] font-light ${isDark ? "text-white/80" : "text-foreground/80"}`}>
              {description}
            </p>

            <div>
              <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDark ? "text-primary-glow" : "text-primary"}`}>
                Key Features
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span
                      className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isDark ? "bg-primary-glow/20 text-primary-glow" : "bg-primary-light text-primary-dark"
                      }`}
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className={`text-sm leading-snug ${isDark ? "text-white/85" : "text-foreground/85"}`}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${isDark ? "text-primary-glow" : "text-primary"}`}>
                Applications
              </h3>
              <div className="flex flex-wrap gap-2">
                {applications.map((a) => (
                  <span
                    key={a}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full ${
                      isDark
                        ? "bg-white/10 text-white border border-white/15"
                        : "bg-primary-light text-primary-dark border border-primary/20"
                    }`}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Specs table + highlights */}
        <div className={`rounded-2xl border p-8 md:p-10 ${isDark ? "bg-white/5 border-white/10" : "bg-card border-border shadow-soft"}`}>
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className={`font-display text-2xl font-black mb-5 ${isDark ? "text-white" : "text-foreground"}`}>
                Technical Specifications
              </h3>
              <table className="w-full">
                <tbody>
                  {specs.map((s) => (
                    <tr key={s.label} className={`border-b last:border-0 ${isDark ? "border-white/10" : "border-border"}`}>
                      <td className={`py-3 text-sm font-light w-1/2 ${isDark ? "text-white/55" : "text-muted-foreground"}`}>
                        {s.label}
                      </td>
                      <td className={`py-3 text-sm font-medium text-right ${isDark ? "text-white" : "text-foreground"}`}>
                        {s.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {highlights && (
              <div className="grid grid-cols-2 gap-4 content-start">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className={`rounded-xl p-5 ${
                      isDark ? "bg-white/5 border border-white/10" : "bg-primary-light border border-primary/15"
                    }`}
                  >
                    <div className={`font-display text-3xl font-black leading-none ${isDark ? "text-primary-glow" : "text-primary-dark"}`}>
                      {h.num}
                    </div>
                    <div className={`text-xs mt-1.5 font-light ${isDark ? "text-white/60" : "text-muted-foreground"}`}>
                      {h.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
