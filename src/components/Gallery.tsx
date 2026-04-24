import { useEffect, useMemo, useState } from "react";
import { Play } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import slattedMat from "@/assets/slatted-mat-goats.png";
import matBlueTop from "@/assets/mat-blue-top.jpeg";
import matBlueBottom from "@/assets/mat-blue-bottom.jpeg";
import matBlueAngle from "@/assets/mat-blue-angle.jpeg";
import matSide1 from "@/assets/mat-side-1.jpeg";
import matSide2 from "@/assets/mat-side-2.jpeg";
import matStackGreen from "@/assets/mat-stack-green.jpeg";
import matStackRed from "@/assets/mat-stack-red.jpeg";
import drinker1 from "@/assets/drinker-bowl-1.jpeg";
import drinker2 from "@/assets/drinker-bowl-2.jpeg";
import drinker3 from "@/assets/drinker-bowl-3.jpeg";
import drinkerInstalled from "@/assets/drinker-bowl-installed.jpeg";
import drinkerSide from "@/assets/drinker-bowl-side.jpeg";
import drinkerBack from "@/assets/drinker-bowl-back.jpeg";
import feederTrough from "@/assets/goat-feeder-trough.jpeg";
import feederKid from "@/assets/goat-feeder-kid.png";
import hydroTray from "@/assets/hydroponic-tray.jpeg";
import facGate from "@/assets/factory-gate.jpeg";
import facGate2 from "@/assets/factory-gate2.jpeg";
import facCorner from "@/assets/factory-corner.jpeg";
import facAngle from "@/assets/factory-angle.jpeg";
import facEntrance from "@/assets/factory-entrance.jpeg";
import projectInstallPoster from "@/assets/projects/project-install-1.jpeg";
import projectInstall1 from "@/assets/projects/project-install-1.mp4";
import projectInstall2 from "@/assets/projects/project-install-2.mp4";
import projectInstall3 from "@/assets/projects/project-install-3.mp4";
import projectInstall4 from "@/assets/projects/project-install-4.mp4";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryProps { hideHeader?: boolean }
type Category =
  | "Slatted Mats"
  | "Drinker Bowl"
  | "Goat Feeder"
  | "Hydroponic Tray"
  | "Our Factory"
  | "Project Installations";
type MediaKind = "image" | "video";
type Item = { kind: MediaKind; src: string; poster?: string; alt: string; tag: Category; wide?: boolean };

const items: Item[] = [
  // Slatted Mats
  { kind: "image", src: slattedMat, alt: "Goats resting on green slatted mats", tag: "Slatted Mats", wide: true },
  { kind: "image", src: matBlueTop, alt: "Blue goat slatted mat — top view", tag: "Slatted Mats" },
  { kind: "image", src: matBlueBottom, alt: "Underside of slatted mat showing ribs", tag: "Slatted Mats" },
  { kind: "image", src: matBlueAngle, alt: "Blue slatted mat — angled view", tag: "Slatted Mats" },
  { kind: "image", src: matStackGreen, alt: "Stacked green goat slatted mats", tag: "Slatted Mats", wide: true },
  { kind: "image", src: matStackRed, alt: "Pallet of red and green slatted mats", tag: "Slatted Mats" },
  { kind: "image", src: matSide1, alt: "Side profile — 5-side locking edge", tag: "Slatted Mats" },
  { kind: "image", src: matSide2, alt: "Long edge — locking detail", tag: "Slatted Mats" },
  // Drinker Bowls
  { kind: "image", src: drinker2, alt: "Automatic goat drinker bowl front view", tag: "Drinker Bowl" },
  { kind: "image", src: drinkerInstalled, alt: "Goat drinking from installed drinker bowl", tag: "Drinker Bowl", wide: true },
  { kind: "image", src: drinker1, alt: "Drinker bowl top view with nipple", tag: "Drinker Bowl" },
  { kind: "image", src: drinker3, alt: "Drinker bowl angled view", tag: "Drinker Bowl" },
  { kind: "image", src: drinkerSide, alt: "Drinker bowl side profile", tag: "Drinker Bowl" },
  { kind: "image", src: drinkerBack, alt: "Drinker bowl back / wall mount", tag: "Drinker Bowl" },
  // Feeders
  { kind: "image", src: feederTrough, alt: "Heavy-duty goat feeder trough", tag: "Goat Feeder", wide: true },
  { kind: "image", src: feederKid, alt: "Kid goat feeding from elevated trough", tag: "Goat Feeder" },
  // Hydroponic
  { kind: "image", src: hydroTray, alt: "Blue hydroponic wheat grass tray", tag: "Hydroponic Tray", wide: true },
  // Factory
  { kind: "image", src: facGate, alt: "SLV Plastics factory main gate", tag: "Our Factory", wide: true },
  { kind: "image", src: facCorner, alt: "Factory corner exterior view", tag: "Our Factory" },
  { kind: "image", src: facAngle, alt: "Factory angled exterior view", tag: "Our Factory" },
  { kind: "image", src: facEntrance, alt: "Factory entrance with greenery", tag: "Our Factory" },
  { kind: "image", src: facGate2, alt: "Factory perimeter and signage", tag: "Our Factory", wide: true },
  // Project Installations
  { kind: "image", src: projectInstallPoster, alt: "On-site installation with slatted flooring and feeding lanes", tag: "Project Installations", wide: true },
  { kind: "video", src: projectInstall1, poster: projectInstallPoster, alt: "Project installation walk-through (video)", tag: "Project Installations" },
  { kind: "video", src: projectInstall2, poster: projectInstallPoster, alt: "Project installation details (video)", tag: "Project Installations" },
  { kind: "video", src: projectInstall3, poster: projectInstallPoster, alt: "Project installation close-up (video)", tag: "Project Installations" },
  { kind: "video", src: projectInstall4, poster: projectInstallPoster, alt: "Project installation overview (video)", tag: "Project Installations" },
];

const categories: ("All" | Category)[] = [
  "All",
  "Project Installations",
  "Slatted Mats",
  "Drinker Bowl",
  "Goat Feeder",
  "Hydroponic Tray",
  "Our Factory",
];

const isCategoryFilter = (value: string): value is "All" | Category =>
  (categories as readonly string[]).includes(value);

const Gallery = ({ hideHeader = false }: GalleryProps = {}) => {
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState<"All" | Category>("All");
  const [active, setActive] = useState<Item | null>(null);
  const isOpen = !!active;

  useEffect(() => {
    const cat = searchParams.get("cat");
    if (!cat) return;
    const decoded = decodeURIComponent(cat);
    if (isCategoryFilter(decoded)) {
      setFilter(decoded);
    }
  }, [searchParams]);

  // Group by category for the "All" view so pictures stay in their column
  const grouped = useMemo(() => {
    if (filter !== "All") return null;
    return categories
      .filter((c): c is Category => c !== "All")
      .map((cat) => ({ cat, items: items.filter((it) => it.tag === cat) }));
  }, [filter]);

  const filtered = filter === "All" ? [] : items.filter((it) => it.tag === filter);

  return (
    <section id="gallery" className="bg-muted px-6 lg:px-[6%] py-20">
      <div className="max-w-7xl mx-auto">
        {!hideHeader && (
          <div className="text-center mb-10">
            <div className="text-xs font-semibold tracking-[2.5px] uppercase mb-3 text-primary">Gallery</div>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight text-foreground mb-3">
              Products & Facility in Detail
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto font-light">
              A closer look at our products in real farm settings and our manufacturing facility.
            </p>
          </div>
        )}

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-sm font-semibold tracking-[0.3px] transition-all ${
                filter === c
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-background text-muted-foreground border border-border hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grouped view (All) */}
        {grouped && (
          <div className="space-y-14">
            {grouped.map((g) => (
              <div key={g.cat}>
                <div className="flex items-end justify-between mb-5 border-b border-border pb-3">
                  <h3 className="font-display text-2xl md:text-3xl font-black text-foreground">
                    {g.cat}
                  </h3>
                  <button
                    onClick={() => setFilter(g.cat)}
                    className="text-xs font-semibold uppercase tracking-[2px] text-primary hover:underline"
                  >
                    View all →
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {g.items.map((it, i) => (
                    <GalleryTile key={i} it={it} onOpen={setActive} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Filtered single-category view */}
        {!grouped && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((it, i) => (
              <GalleryTile key={i} it={it} onOpen={setActive} />
            ))}
          </div>
        )}
      </div>

      <Dialog open={isOpen} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-5xl bg-black/95 border-white/10 p-0 overflow-hidden">
          {active && (
            <div className="w-full">
              {active.kind === "image" ? (
                <img src={active.src} alt={active.alt} className="w-full h-auto max-h-[80vh] object-contain" />
              ) : (
                <video
                  src={active.src}
                  poster={active.poster}
                  className="w-full h-auto max-h-[80vh] object-contain"
                  controls
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                />
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

const GalleryTile = ({ it, onOpen }: { it: Item; onOpen: (it: Item) => void }) => (
  <figure
    role="button"
    tabIndex={0}
    onClick={() => onOpen(it)}
    onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? onOpen(it) : null)}
    className={`group relative rounded-xl overflow-hidden shadow-soft cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-muted ${
      it.wide ? "md:col-span-2" : ""
    }`}
  >
    {it.kind === "image" ? (
      <img
        src={it.src}
        alt={it.alt}
        loading="lazy"
        className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
          it.wide ? "h-[260px]" : "h-[220px]"
        }`}
      />
    ) : (
      <video
        src={it.src}
        poster={it.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
          it.wide ? "h-[260px]" : "h-[220px]"
        }`}
      />
    )}

    {it.kind === "video" && (
      <div className="absolute inset-0 grid place-items-center">
        <div className="rounded-full bg-black/55 backdrop-blur-sm border border-white/15 p-3 shadow-soft opacity-90 group-hover:opacity-100 transition-opacity">
          <Play className="text-white" size={20} fill="currentColor" />
        </div>
      </div>
    )}

    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-md mb-1">
        {it.tag}
      </span>
      <div className="text-sm font-light">{it.alt}</div>
    </figcaption>
  </figure>
);

export default Gallery;
