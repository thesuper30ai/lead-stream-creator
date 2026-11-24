type Logo = { src: string; name: string; className?: string };

/** All client logos in one single line that slowly scrolls; pauses on hover. */
export const ClientLogoMarquee = ({ logos }: { logos: Logo[] }) => (
  <div className="group relative mt-10 overflow-hidden sm:mt-12 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
    <div className="flex w-max animate-marquee items-center [--duration:40s] [--gap:3rem] group-hover:[animation-play-state:paused] sm:[--gap:4.5rem]" style={{ gap: "var(--gap)" }}>
      {[...logos, ...logos].map((client, i) => (
        <img
          key={`${client.name}-${i}`}
          src={client.src}
          alt={i < logos.length ? client.name : ""}
          aria-hidden={i >= logos.length}
          className={`w-auto max-w-[140px] shrink-0 object-contain sm:max-w-[190px] ${client.className ?? "h-10 sm:h-16"}`}
          loading="lazy"
        />
      ))}
    </div>
  </div>
);
