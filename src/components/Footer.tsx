import { Link } from "react-router-dom";

const Footer = () => (
  <footer id="footer" className="bg-[hsl(156,82%,9%)] py-14 px-6 lg:px-[6%]">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        {/* Brand */}
        <div>
          <div className="font-display text-2xl font-black text-white mb-2 tracking-[-1px]">
            S<span className="text-primary-glow">L</span>V Plastics
          </div>
          <p className="text-white/50 text-sm font-light leading-relaxed">
            Premium plastic manufacturing from Bangalore. Slatted mats, drinker bowls, feeders & hydroponic trays.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <div className="text-xs font-semibold tracking-[2px] uppercase text-primary-glow mb-4">Quick Links</div>
          <div className="flex flex-col gap-2">
            {[
              { to: "/products", label: "Products" },
              { to: "/about", label: "About Us" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-white/60 text-sm hover:text-primary-glow transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div className="text-xs font-semibold tracking-[2px] uppercase text-primary-glow mb-4">Get in Touch</div>
          <div className="flex flex-col gap-2 text-sm text-white/60">
            <p className="font-light leading-relaxed">
              Plot #170, Sompura Industrial Area, Dabaspet, Nelamangala Taluk, Bengaluru Rural – 562 123
            </p>
            <a href="tel:+919845024330" className="text-primary-glow hover:underline">+91 98450 24330</a>
            <a href="mailto:slvplastics@yahoo.in" className="text-primary-glow hover:underline">slvplastics@yahoo.in</a>
          </div>
        </div>
      </div>

      <hr className="border-t border-white/10 mb-5" />
      <p className="text-white/30 text-xs text-center">
        © {new Date().getFullYear()} SLV Plastics. All rights reserved. · Proprietor: G. S. Kumar
      </p>
    </div>
  </footer>
);

export default Footer;
