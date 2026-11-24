import type { ReactNode } from "react";
import { pdfClientLogos } from "@/data/pdfClientLogos";

const byName = (n: string) => pdfClientLogos.find((l) => l.name.startsWith(n))!;

export const logoGroups = {
  stripAlt: [byName("The Asian Kid"), byName("BuildingWorld")],
};

type Props = {
  logos: { src: string; name: string }[];
  size?: "inline" | "strip";
  /** Border class matching the surface behind the stack (e.g. border-background). */
  ring?: string;
  /** Optional trailing circle (icon) kept from the original avatar stack. */
  trailing?: ReactNode;
  className?: string;
};

/** Small overlapping round client-logo stack (replaces the old team-photo avatars). */
export const ClientLogoChips = ({ logos, size = "inline", ring = "border-background", trailing, className = "" }: Props) => {
  const dim = size === "inline" ? "h-7 w-7" : "h-9 w-9";
  return (
    <span className={`inline-flex -space-x-2 align-middle ${className}`}>
      {logos.map((l) => (
        <img key={l.name} src={l.src} alt={l.name} title={l.name} className={`inline ${dim} rounded-full border-2 ${ring} bg-background object-contain p-0.5 shadow-sm ring-1 ring-border`} loading="lazy" />
      ))}
      {trailing}
    </span>
  );
};
