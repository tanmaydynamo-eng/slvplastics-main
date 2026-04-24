import { MapPin, Factory as FactoryIcon, Truck, Package, FlaskConical } from "lucide-react";
import facWide from "@/assets/factory-wide.jpeg";
import facFront from "@/assets/factory-front.jpeg";
import facSide from "@/assets/factory-side.jpeg";

const badges = [
  { icon: MapPin, label: "Dabaspet, Bangalore" },
  { icon: FactoryIcon, label: "Large-Scale Manufacturing" },
  { icon: Truck, label: "Pan-India Shipping" },
  { icon: Package, label: "Bulk Orders Welcome" },
  { icon: FlaskConical, label: "Quality Controlled" },
];

const Factory = () => (
  <section id="factory" className="bg-background px-6 lg:px-[6%] py-24">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-2 rounded-xl overflow-hidden shadow-soft">
          <img src={facWide} alt="SLV Plastics manufacturing facility wide view" className="w-full h-[260px] object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="rounded-xl overflow-hidden shadow-soft">
          <img src={facFront} alt="SLV Plastics factory front entrance" className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="rounded-xl overflow-hidden shadow-soft">
          <img src={facSide} alt="SLV Plastics factory side view" className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      <div>
        <div className="text-xs font-semibold tracking-[2.5px] uppercase mb-3 text-primary">Our Facility</div>
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-5 text-foreground">
          Manufactured in Bangalore
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed font-light mb-4">
          SLV Plastics operates a modern, large-scale manufacturing facility at <strong className="text-foreground font-medium">Sompura Industrial Area, Dabaspet, Nelamangala Taluk, Bengaluru Rural</strong> — just outside Bangalore city.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed font-light mb-6">
          Our plant uses precision injection-moulding technology with strict quality control at every stage. With large production capacity, we fulfil bulk orders quickly and reliably across Karnataka and all of India.
        </p>
        <div className="flex flex-wrap gap-2">
          {badges.map(({ icon: Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-2 bg-primary-light text-primary-deep rounded-lg px-4 py-2 text-sm font-medium">
              <Icon size={15} /> {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Factory;
