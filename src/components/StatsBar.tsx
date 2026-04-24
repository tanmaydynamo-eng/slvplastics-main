const stats = [
  { num: "10+", label: "Years of Manufacturing" },
  { num: "500+", label: "Clients Served" },
  { num: "4", label: "Product Categories" },
  { num: "100%", label: "Made in India" },
];

const StatsBar = () => (
  <div className="bg-primary/10 border-y border-primary/15 px-6 lg:px-[6%] py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
    {stats.map((s) => (
      <div key={s.label} className="text-center">
        <div className="font-display text-4xl font-black text-primary leading-none">{s.num}</div>
        <div className="text-[13px] text-muted-foreground mt-1.5 font-light tracking-wide">{s.label}</div>
      </div>
    ))}
  </div>
);

export default StatsBar;
