// Placeholder "client" wordmarks — swap for real logos/names when available.
const CLIENTS = [
  'GreenVolt Solar',
  'Apex B2B Advisory',
  'Maison Luxe',
  'SunPath Energy',
  'Elevate Coaching',
  'Noble Interiors',
  'BrightWave Solar',
  'Summit Consulting',
];

const Row = ({ ariaHidden = false }) => (
  <div className="flex shrink-0 items-center gap-12 px-6" aria-hidden={ariaHidden}>
    {CLIENTS.map((name) => (
      <span
        key={name}
        className="whitespace-nowrap font-space text-lg font-semibold text-muted-foreground/60 transition-colors hover:text-foreground"
      >
        {name}
      </span>
    ))}
  </div>
);

const LogoMarquee = () => {
  return (
    <div className="group relative overflow-hidden">
      {/* edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  );
};

export default LogoMarquee;
