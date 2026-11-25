import { pdfClientLogos } from "@/data/pdfClientLogos";
import icsLogo from "@/assets/logos/ics.png";
import academyLogo from "@/assets/logos/digital-academy-360.png";

const logos = [{ name: "ICS", src: icsLogo }, { name: "Digital Academy 360", src: academyLogo }, ...pdfClientLogos];

export const ServiceClientLogos = () => (
  <section className="py-14 md:py-20">
    <div className="container mx-auto px-4 text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand">In good company</p>
      <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">Brands you know.<br /><span className="text-brand">A team they trust.</span></h2>
      <p className="mt-5 text-muted-foreground">Trusted by growing brands across India.</p>
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-3 items-center gap-x-6 gap-y-8 md:grid-cols-6">
        {logos.map((logo) => <div key={logo.name} className="service-client-logo flex h-24 items-center rounded-lg p-3 sm:h-36"><img src={logo.src} alt={logo.name} loading="lazy" className={`mx-auto w-full object-contain ${logo.name === "ICS" || logo.name === "Digital Academy 360" ? "h-20 sm:h-32" : logo.name === "JAIN University" || logo.name.startsWith("Devakrti") ? "h-10 sm:h-14" : "h-14 sm:h-20"}`} /></div>)}
      </div>
    </div>
  </section>
);