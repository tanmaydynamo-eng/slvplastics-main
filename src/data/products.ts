import slattedMat from "@/assets/slatted-mat-goats.png";
import matBlueTop from "@/assets/mat-blue-top.jpeg";
import matBlueBottom from "@/assets/mat-blue-bottom.jpeg";
import matBlueAngle from "@/assets/mat-blue-angle.jpeg";
import matSide1 from "@/assets/mat-side-1.jpeg";
import matSide2 from "@/assets/mat-side-2.jpeg";
import matSide3 from "@/assets/mat-side-3.jpeg";
import matStackGreen from "@/assets/mat-stack-green.jpeg";
import matStackGreen2 from "@/assets/mat-stack-green2.jpeg";
import matStackRed from "@/assets/mat-stack-red.jpeg";

import drinker1 from "@/assets/drinker-bowl-1.jpeg";
import drinker2 from "@/assets/drinker-bowl-2.jpeg";
import drinker3 from "@/assets/drinker-bowl-3.jpeg";
import drinkerBack from "@/assets/drinker-bowl-back.jpeg";
import drinkerInstalled from "@/assets/drinker-bowl-installed.jpeg";
import drinkerSide from "@/assets/drinker-bowl-side.jpeg";

import feederTrough from "@/assets/goat-feeder-trough.jpeg";
import feederKid from "@/assets/goat-feeder-kid.png";

import hydroTray from "@/assets/hydroponic-tray.jpeg";

export interface ProductDef {
  slug: string;
  modelCode: string;
  category: string;
  title: string;
  shortName: string;
  tagline: string;
  description: string;
  cardImage: string;
  cardBlurb: string;
  images: { src: string; alt: string }[];
  features: string[];
  applications: string[];
  specs: { label: string; value: string }[];
  highlights: { num: string; label: string }[];
}

export const PRODUCTS: ProductDef[] = [
  {
    slug: "slatted-mats",
    modelCode: "SLV-SM",
    category: "Goat Slatted Mats",
    shortName: "Slatted Mats",
    title: "Goat Slatted Mats — Built to Last",
    tagline:
      "High-quality polypropylene slatted flooring for elevated goat sheds. Anti-slip, hygienic, and engineered with an advanced 5-side locking system.",
    description:
      "Our flagship slatted mats keep sheds dry and clean by allowing waste to drop through automatically — eliminating manual cleaning and dramatically reducing disease pressure. Engineered for heavy use in commercial goat and sheep farms, the mats interlock on five sides for a rock-solid floor that doesn't shift or sag. Available in green, blue and red — produced in bulk at our Bangalore facility.",
    cardImage: slattedMat,
    cardBlurb:
      "Anti-slip, self-draining polypropylene flooring with 5-side interlock. Available in green, blue, red.",
    images: [
      { src: slattedMat, alt: "Goats resting on green slatted mats" },
      { src: matBlueTop, alt: "Top view of blue goat slatted mat tile" },
      { src: matBlueBottom, alt: "Underside of blue slatted mat showing reinforcement ribs" },
      { src: matBlueAngle, alt: "Angled view showing mat thickness and locks" },
      { src: matSide1, alt: "Side profile of blue slatted mat" },
      { src: matSide2, alt: "Side view showing 5-side locking edge" },
      { src: matSide3, alt: "Long edge of mat — locking detail" },
      { src: matStackGreen, alt: "Stacked green goat slatted mats ready for shipping" },
      { src: matStackGreen2, alt: "Pallet of green slatted mats in factory" },
      { src: matStackRed, alt: "Stacked red and green slatted mats — bulk inventory" },
    ],
    features: [
      "5-side advanced locking system",
      "Anti-slip top surface for hoof grip",
      "Self-draining — keeps shed dry",
      "UV stabilized polypropylene",
      "Lightweight & easy to install",
      "Reduces hoof rot & infection risk",
    ],
    applications: ["Goat farms", "Sheep farms", "Dairy calf pens", "Elevated shed flooring"],
    specs: [
      { label: "Material", value: "Virgin Polypropylene (PP)" },
      { label: "Standard Colors", value: "Green / Blue / Red" },
      { label: "Locking", value: "5-side interlock" },
      { label: "Surface", value: "Anti-slip dimpled" },
      { label: "Usage", value: "Indoor / elevated sheds" },
      { label: "Lifespan", value: "8+ years" },
    ],
    highlights: [
      { num: "5-side", label: "Interlock System" },
      { num: "UV+", label: "Stabilized" },
      { num: "100%", label: "Virgin PP" },
      { num: "0", label: "Manual Cleaning" },
    ],
  },
  {
    slug: "drinker-bowls",
    modelCode: "HY-2304",
    category: "Automatic Drinker Bowl",
    shortName: "Drinker Bowls",
    title: "Automatic Goat Drinker Bowl",
    tagline:
      "Nipple-operated water drinker engineered specifically for goats and sheep — deeper bowl, anti-spill design, hygienic continuous water supply.",
    description:
      "A push-type nipple valve fills the bowl on demand, so animals always drink fresh water without dirty water sitting in the shed. The deeper bowl (vs poultry models) gives kids and adults the drinking capacity they need, while the anti-spill geometry cuts water wastage by 30–50%. Wall mounts with a 2 or 3 hole screw fitting and connects to a standard ½″ BSP inlet.",
    cardImage: drinker2,
    cardBlurb:
      "Nipple-operated bowl with anti-spill geometry. Cuts water wastage 30–50%, serves 10–15 goats.",
    images: [
      { src: drinker2, alt: "Front view of green automatic drinker bowl" },
      { src: drinker1, alt: "Top view showing nipple valve" },
      { src: drinker3, alt: "Drinker bowl angled view" },
      { src: drinkerSide, alt: "Side profile of drinker bowl" },
      { src: drinkerInstalled, alt: "Goat drinking from installed bowl" },
      { src: drinkerBack, alt: "Back view showing wall mount" },
    ],
    features: [
      "Push-type stainless / brass nipple valve",
      "Anti-spill deeper bowl geometry",
      "Cuts water wastage 30–50%",
      "PPCP body — impact resistant",
      "Wall-mount, 2–3 hole fitting",
      "10–15 goats per drinker",
    ],
    applications: ["Goat farms", "Sheep farms", "Kid pens", "Adult buck/doe sheds"],
    specs: [
      { label: "Model", value: "HY-2304" },
      { label: "Body Material", value: "PPCP (Polypropylene Copolymer)" },
      { label: "Nipple", value: "Stainless steel pin / brass + plastic" },
      { label: "Length × Width", value: "180–220 × 140–170 mm" },
      { label: "Depth", value: "100–130 mm" },
      { label: "Bowl Capacity", value: "1 – 1.5 L" },
      { label: "Inlet Size", value: "½″ BSP" },
      { label: "Operating Pressure", value: "0.2 – 2 bar" },
      { label: "Flow Rate", value: "0.5 – 1.5 L / min" },
      { label: "Mount Height (Kids)", value: "1 – 1.5 ft" },
      { label: "Mount Height (Adults)", value: "2 – 2.5 ft" },
      { label: "Wall Thickness", value: "3 – 4 mm" },
    ],
    highlights: [
      { num: "30–50%", label: "Less Water Waste" },
      { num: "10–15", label: "Goats per Drinker" },
      { num: "½″", label: "BSP Inlet" },
      { num: "1.5 L", label: "Bowl Capacity" },
    ],
  },
  {
    slug: "goat-feeders",
    modelCode: "SLV-GF-1200",
    category: "Goat Feeder Trough",
    shortName: "Feeders",
    title: "Heavy-Duty Goat Feeder",
    tagline:
      "Long-format injection-molded feeder for dry fodder, green fodder, and pellets — anti-waste lip and smooth edges built for daily commercial use.",
    description:
      "A robust 1200 mm trough designed to feed multiple goats at once with minimal spillage. The injection-molded body shrugs off rough use, and the rolled inner lip keeps fodder inside the trough instead of on the floor. Smooth, animal-safe edges throughout. Suitable for indoor and outdoor sheds, and available in custom colors for bulk orders.",
    cardImage: feederTrough,
    cardBlurb:
      "1200 mm injection-molded trough with anti-waste lip. Custom colors available for bulk orders.",
    images: [
      { src: feederTrough, alt: "Pair of black plastic goat feeder troughs" },
      { src: feederKid, alt: "Kid goat feeding from elevated trough" },
    ],
    features: [
      "Heavy-duty injection-molded build",
      "Anti-waste lip design",
      "Smooth animal-safe edges",
      "Weather resistant — indoor/outdoor",
      "Easy to clean & disinfect",
      "Custom colors for bulk orders",
    ],
    applications: ["Goat farms", "Sheep farms", "Dairy farms", "Livestock feeding lines"],
    specs: [
      { label: "Width × Length", value: "300 × 1200 mm" },
      { label: "Shape", value: "Rectangular trough" },
      { label: "Material", value: "Durable plastic (injection molded)" },
      { label: "Standard Color", value: "Black" },
      { label: "Custom Colors", value: "Blue / Green / Red (MOQ applies)" },
      { label: "Usage", value: "Dry fodder, green fodder, pellets" },
      { label: "Mounting", value: "Floor-stand or frame-mounted" },
    ],
    highlights: [
      { num: "1200", label: "mm Length" },
      { num: "Anti-", label: "Waste Lip" },
      { num: "3+", label: "Color Options" },
      { num: "All-", label: "Weather" },
    ],
  },
  {
    slug: "hydroponic-trays",
    modelCode: "SLV-HT-6040",
    category: "Hydroponic Fodder Tray",
    shortName: "Hydroponic Trays",
    title: "Hydroponic Wheat Grass Growing Tray",
    tagline:
      "Israel-design hydroponic trays for wheat grass and fodder — 54 drainage holes, reusable for continuous farming cycles.",
    description:
      "Grow your own fresh fodder year-round with our heavy-duty hydroponic trays. Based on the proven Israeli design, the 54 evenly-spaced drainage holes deliver perfect water flow for healthy root growth and prevent the root rot that plagues lower-quality trays. Strong enough for repeated commercial cycles, easy to wash and stack. Ideal for dairy and goat farms running their own fodder unit.",
    cardImage: hydroTray,
    cardBlurb:
      "600×400×50mm tray with 54 drainage holes. Based on the Israeli hydroponic standard.",
    images: [{ src: hydroTray, alt: "Blue hydroponic wheat grass growing tray" }],
    features: [
      "54 drainage holes — optimal flow",
      "Israel hydroponic tray design",
      "Reusable across continuous cycles",
      "Heavy-duty plastic build",
      "Easy to clean & stack",
      "Ideal for goat / cattle fodder",
    ],
    applications: [
      "Hydroponic fodder systems",
      "Dairy farms",
      "Goat & cattle feeding",
      "Indoor / vertical farming",
    ],
    specs: [
      { label: "Dimensions (L × W × H)", value: "600 × 400 × 50 mm" },
      { label: "Color", value: "Blue" },
      { label: "Shape", value: "Rectangular" },
      { label: "Planter Type", value: "Tray" },
      { label: "Drainage Holes", value: "54" },
      { label: "Material", value: "Durable food-grade plastic" },
      { label: "Design Origin", value: "Based on Israeli hydroponic standard" },
    ],
    highlights: [
      { num: "54", label: "Drainage Holes" },
      { num: "60×40", label: "cm Footprint" },
      { num: "∞", label: "Reusable Cycles" },
      { num: "5cm", label: "Optimal Depth" },
    ],
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
