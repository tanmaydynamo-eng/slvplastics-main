import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ProductSection from "@/components/ProductSection";
import Reveal from "@/components/Reveal";
import { getProduct, PRODUCTS } from "@/data/products";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProduct(slug) : undefined;

  if (!product) {
    return (
      <section className="bg-background px-6 py-32 text-center">
        <h1 className="font-display text-3xl font-black text-foreground mb-4">Product not found</h1>
        <Link to="/products" className="text-primary font-semibold hover:underline">
          ← Back to all products
        </Link>
      </section>
    );
  }

  const idx = PRODUCTS.findIndex((p) => p.slug === product.slug);
  const next = PRODUCTS[(idx + 1) % PRODUCTS.length];

  return (
    <>
      <div className="bg-background px-6 lg:px-[6%] pt-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={16} /> All products
          </Link>
        </motion.div>
      </div>

      <ProductSection
        id={product.slug}
        modelCode={product.modelCode}
        category={product.category}
        title={product.title}
        tagline={product.tagline}
        description={product.description}
        images={product.images}
        features={product.features}
        applications={product.applications}
        specs={product.specs}
        highlights={product.highlights}
        variant="light"
      />

      {/* CTA + next */}
      <section className="bg-primary/5 border-t border-primary/10 px-6 lg:px-[6%] py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <Reveal variant="left" repeat={true}>
            <Link
              to="/contact"
              className="group bg-primary text-primary-foreground rounded-2xl p-8 hover:shadow-glow transition-all block h-full"
            >
              <div className="text-xs font-semibold tracking-[2px] uppercase opacity-80 mb-3">Ready to Order?</div>
              <h3 className="font-display text-2xl font-black mb-3">Request a quote for {product.shortName}</h3>
              <span className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all">
                Get in touch <ArrowRight size={14} />
              </span>
            </Link>
          </Reveal>
          <Reveal variant="right" delay={100} repeat={true}>
            <Link
              to={`/products/${next.slug}`}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary hover:shadow-soft transition-all block h-full"
            >
              <div className="text-xs font-semibold tracking-[2px] uppercase text-muted-foreground mb-3">Next Product</div>
              <h3 className="font-display text-2xl font-black text-foreground mb-3">{next.title}</h3>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                View {next.shortName} <ArrowRight size={14} />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
