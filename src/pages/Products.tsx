import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { PRODUCTS } from "@/data/products";

const Products = () => (
  <>
    <PageHeader
      eyebrow="Our Catalogue"
      title="Products"
      subtitle="Polypropylene equipment manufactured at our Bangalore facility — precision engineered for commercial and industrial use."
    />

    <section className="bg-background px-6 lg:px-[6%] py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {PRODUCTS.map((p, i) => (
          <Reveal key={p.slug} variant="up" delay={i * 100} repeat={true}>
            <Link
              to={`/products/${p.slug}`}
              className="group bg-card border border-border rounded-2xl overflow-hidden shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all flex flex-col h-full"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={p.cardImage}
                  alt={p.shortName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <div className="text-xs font-mono text-primary mb-2">
                  {p.modelCode} · {p.category}
                </div>
                <h2 className="font-display text-2xl font-black text-foreground mb-3 tracking-[-0.5px]">{p.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed font-light mb-5 flex-1">
                  {p.tagline}
                </p>

                <ul className="flex flex-wrap gap-1.5 mb-5">
                  {p.applications.slice(0, 3).map((a) => (
                    <li
                      key={a}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/15"
                    >
                      {a}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  View details <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  </>
);

export default Products;
