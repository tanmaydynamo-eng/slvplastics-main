import { MapPin, Factory as FactoryIcon, Truck, Package, FlaskConical, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import facWide from "@/assets/factory-wide.jpeg";
import facFront from "@/assets/factory-front.jpeg";
import facSide from "@/assets/factory-side.jpeg";
import facGate from "@/assets/factory-gate.jpeg";

const badges = [
  { icon: MapPin, label: "Dabaspet, Bangalore" },
  { icon: FactoryIcon, label: "Large-Scale Manufacturing" },
  { icon: Truck, label: "Pan-India Shipping" },
  { icon: Package, label: "Bulk Orders Welcome" },
  { icon: FlaskConical, label: "Quality Controlled" },
];

const values = [
  {
    icon: Award,
    title: "Quality First",
    body: "Virgin polypropylene, UV-stabilized formulations, and tight injection-moulding tolerances on every batch.",
  },
  {
    icon: Users,
    title: "Built for Clients",
    body: "Every product is field-tested — anti-spill drinkers, anti-waste feeders, self-draining mats engineered for real-world use.",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    body: "Large production capacity means we can fulfil bulk orders quickly and ship across all of India.",
  },
];

const About = () => (
  <>
    <PageHeader
      eyebrow="About Us"
      title="Made in Bangalore. Built to Last."
      subtitle="SLV Plastics is a family-run manufacturer of premium plastic components — built on decades of plastics expertise and a commitment to engineering excellence."
    />

    {/* Story */}
    <section className="bg-background px-6 lg:px-[6%] py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3">
          <Reveal repeat={true}>
            <div className="text-xs font-semibold tracking-[2.5px] uppercase mb-3 text-primary">Our Story</div>
          </Reveal>
          <Reveal delay={100} repeat={true}>
            <h2 className="font-display text-3xl md:text-4xl font-black leading-tight text-foreground mb-6 tracking-[-1px]">
              Plastics expertise applied to
              <span className="text-primary"> real-world problems</span>
            </h2>
          </Reveal>
          <Reveal delay={200} repeat={true}>
            <div className="space-y-4 text-base text-muted-foreground font-light leading-relaxed">
              <p>
                SLV Plastics was founded with a simple mission: bring industrial-grade plastic engineering
                to the everyday tools that our clients depend on. Too many industries were stuck with
                flimsy, short-lived equipment that broke under daily use.
              </p>
              <p>
                From our manufacturing facility at Sompura Industrial Area, Dabaspet, just outside Bangalore,
                we produce polypropylene slatted mats, automatic drinker bowls, heavy-duty feeders and
                hydroponic fodder trays — all engineered to last years of rigorous commercial use.
              </p>
              <p>
                Today, SLV products serve clients across Karnataka and all of India, with bulk orders shipped
                direct from our factory.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-2 grid grid-cols-2 gap-3">
          <Reveal variant="scale" repeat={true} className="col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <img src={facWide} alt="SLV Plastics manufacturing facility" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </Reveal>
          <Reveal variant="up" delay={100} repeat={true}>
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <img src={facFront} alt="Factory front" className="w-full h-36 object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </Reveal>
          <Reveal variant="up" delay={200} repeat={true}>
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <img src={facSide} alt="Factory side" className="w-full h-36 object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="bg-primary/5 px-6 lg:px-[6%] py-24 border-y border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <Reveal repeat={true}>
            <div className="text-xs font-semibold tracking-[2.5px] uppercase mb-3 text-primary">What Drives Us</div>
          </Reveal>
          <Reveal delay={100} repeat={true}>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground tracking-[-1px]">
              Our <span className="text-primary">Values</span>
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {values.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} variant="up" delay={i * 120} repeat={true}>
              <div className="bg-background border border-border rounded-2xl p-8 hover:shadow-medium hover:-translate-y-1 transition-all h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-black text-foreground mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Facility highlight */}
    <section className="bg-background px-6 lg:px-[6%] py-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <Reveal variant="left" repeat={true}>
          <div className="rounded-3xl overflow-hidden shadow-medium">
            <img src={facGate} alt="SLV Plastics factory gate" className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </Reveal>
        <Reveal variant="right" delay={150} repeat={true}>
          <div>
            <div className="text-xs font-semibold tracking-[2.5px] uppercase mb-3 text-primary">Our Facility</div>
            <h2 className="font-display text-3xl md:text-4xl font-black leading-tight text-foreground mb-5 tracking-[-1px]">
              A modern plant, ready for
              <span className="text-primary"> bulk orders</span>
            </h2>
            <p className="text-base text-muted-foreground font-light leading-relaxed mb-8">
              Plot #170, 1st Stage, Sompura Industrial Area, Dabaspet, Nelamangala Taluk, Bengaluru Rural –
              562 123. Precision injection-moulding with strict quality control on every batch.
            </p>
            <div className="flex flex-wrap gap-2">
              {badges.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-lg px-4 py-2.5 text-sm font-medium border border-primary/15 hover:bg-primary/15 transition-colors"
                >
                  <Icon size={15} /> {label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default About;
