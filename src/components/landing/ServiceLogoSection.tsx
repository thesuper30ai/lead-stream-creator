import { pdfClientLogos } from "@/data/pdfClientLogos";
import icsLogo from "@/assets/logos/ics.png";
import digitalAcademy360Logo from "@/assets/logos/digital-academy-360.png";

const logos: { src: string; name: string; className?: string }[] = [
  ...pdfClientLogos.map((logo) =>
    logo.name === "Devakrti by Paramporul Gallery" || logo.name === "JAIN University" ? { ...logo, className: "h-8 sm:h-14" } : logo
  ),
  { src: icsLogo, name: "ICS", className: "h-16 sm:h-32" },
  { src: digitalAcademy360Logo, name: "Digital Academy 360", className: "h-16 sm:h-32" },
];

/** Same logo section as the latest service pages (no numbers). */
export const ServiceLogoSection = () => (
  <section className="bg-background py-14 md:py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground"><span className="h-2 w-2 rounded-full bg-brand" />In good company</p>
        <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">Brands you know.<br /><span className="text-brand">A team they trust.</span></h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">Trusted by growing brands across India.</p>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center gap-8 sm:mt-12 sm:gap-10">
        {[logos.slice(0, 6), logos.slice(6)].map((row, r) => (
          <div key={r} className="flex w-full flex-nowrap items-center justify-center gap-x-4 sm:gap-x-14">
            {row.map((client) => (
              <img key={client.name} src={client.src} alt={client.name} className={`w-auto min-w-0 max-w-[16%] object-contain sm:max-w-[190px] ${client.className ?? "h-10 sm:h-20"}`} loading="lazy" />
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);
