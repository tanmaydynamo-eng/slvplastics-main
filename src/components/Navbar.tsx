import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { PRODUCTS } from "@/data/products";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Add subtle shadow + tighter background once user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setMobileProducts(false);
  }, [pathname]);

  const linkBase = "text-sm font-medium tracking-[0.3px] transition-colors";
  const active = "text-primary";
  const inactive = "text-[hsl(60_4%_30%)] hover:text-primary";

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-[0_2px_18px_rgba(0,0,0,0.06)] border-b border-border"
          : "bg-background/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 lg:px-[6%] h-[92px] max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3 leading-none group"
        >
          <span className="font-display text-[36px] md:text-[40px] font-black tracking-[-2px] text-primary-deep">
            S<span className="text-primary">L</span>V
          </span>
          <span className="h-8 w-px bg-border group-hover:bg-primary transition-colors" />
          <div className="flex flex-col">
            <span className="text-[13px] md:text-[14px] font-semibold tracking-[1px] text-foreground">
              SLV Plastics
            </span>
            <span className="text-[9px] md:text-[10px] tracking-[2.5px] uppercase text-muted-foreground font-medium">
              Polymer Engineering
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}
            >
              About Us
            </NavLink>
          </li>

          {/* Products dropdown */}
          <li className="relative group py-6">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${linkBase} flex items-center gap-1 ${
                  isActive || pathname.startsWith("/products") ? active : inactive
                }`
              }
            >
              Products{" "}
              <ChevronDown
                size={14}
                className="transition-transform group-hover:rotate-180"
              />
            </NavLink>
            <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[280px] -translate-y-1 group-hover:translate-y-0">
              <div className="bg-background border border-border rounded-lg shadow-medium py-2 mt-1">
                <Link
                  to="/products"
                  className="block px-4 py-2.5 hover:bg-muted transition-colors border-b border-border"
                >
                  <div className="text-sm font-semibold text-primary">All Products →</div>
                </Link>
                {PRODUCTS.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/products/${p.slug}`}
                    className="block px-4 py-2.5 hover:bg-muted transition-colors"
                  >
                    <div className="text-sm font-semibold text-foreground">
                      {p.shortName}
                    </div>
                    <div className="text-xs text-muted-foreground">{p.modelCode}</div>
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <Link
          to="/contact"
          className="hidden md:inline-flex bg-primary text-primary-foreground px-[22px] py-2.5 rounded-md text-sm font-semibold tracking-[0.3px] hover:bg-primary-deep hover:-translate-y-0.5 hover:shadow-[0_4px_16px_hsl(165_76%_25%/0.3)] transition-all"
        >
          Get a Quote
        </Link>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-1 animate-fade-in">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground py-2.5"
            >
              {l.label}
            </Link>
          ))}

          <button
            onClick={() => setMobileProducts(!mobileProducts)}
            className="flex items-center justify-between text-sm font-medium text-foreground py-2.5"
          >
            Products{" "}
            <ChevronDown
              size={14}
              className={`transition-transform ${mobileProducts ? "rotate-180" : ""}`}
            />
          </button>
          {mobileProducts && (
            <div className="pl-4 flex flex-col gap-1 border-l-2 border-border ml-1">
              <Link
                to="/products"
                className="text-sm text-primary font-semibold py-2"
              >
                All Products
              </Link>
              {PRODUCTS.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="text-sm text-muted-foreground py-2"
                >
                  {p.shortName}
                </Link>
              ))}
            </div>
          )}

          {[
            { to: "/gallery", label: "Gallery" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground py-2.5"
            >
              {l.label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="bg-primary text-primary-foreground text-center px-5 py-3 rounded-md text-sm font-semibold mt-3"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
