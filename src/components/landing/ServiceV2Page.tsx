import { pdfClientLogos } from "@/data/pdfClientLogos";
import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { PageSeo } from "@/components/seo/PageSeo";
import { getSeo } from "@/data/seoMeta";
import {
  ArrowUpRight, BarChart3, BriefcaseBusiness, Building2, Check, GraduationCap, Hotel,
  CircleCheck, CircleX, Quote, Rocket, Scale, ShoppingBag, Star, Stethoscope,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getFaqs } from "@/data/faqs";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import type { ServiceV2Config } from "@/data/serviceV2Pages";
import { SHOW_SERVICE_TEAM_SECTION } from "@/lib/sectionFlags";

import evolvingImage from "@/assets/seo-search-evolving.jpg";
import heroImage from "@/assets/seo-reference-hero.jpg";
import partnerImage from "@/assets/seo-growth-partner.jpg";
import realGrowthImage from "@/assets/seo-real-growth-workspace.jpg";
import featuredSearchImage from "@/assets/seo-featured-ai-search.jpg";
import magicbricksClientLogo from "@/assets/clients/magicbricks.png";
import mamaearthClientLogo from "@/assets/clients/mamaearth.png";
import upgradClientLogo from "@/assets/clients/upgrad.png";
import icsLogo from "@/assets/logos/ics.png";
import digitalAcademy360Logo from "@/assets/logos/digital-academy-360.png";
import amitTeam from "@/assets/team/amit-singh-card.png";
import mayankTeam from "@/assets/team/mayank-card.png";
import praveenTeam from "@/assets/team/praveen.png";
import harshavardhanTeam from "@/assets/team/harshavardhan-card.png";
import chandrasekharTeam from "@/assets/team/chandrasekhar.png";
import anandTeam from "@/assets/team/anand.png";
import likhithTeam from "@/assets/team/likhith.png";
const team = [
  { name: "Amit Singh", role: "Co-Founder", image: amitTeam, card: "bg-[#FDE2E4]" },
  { name: "Mayank", role: "VP - Business Growth", image: mayankTeam, card: "bg-[#D8F3DC]" },
  { name: "Praveen", role: "Senior Creative Manager", image: praveenTeam, card: "bg-[#E5DEFF]" },
  { name: "Harshavardhan", role: "Graphic Designer", image: harshavardhanTeam, card: "bg-[#D7E3FC]" },
  { name: "G. Chandrasekhar", role: "Team Leader - Digital Marketing", image: chandrasekharTeam, card: "bg-[#FFE5D9]" },
  { name: "Anand Kumar", role: "Performance Marketing Manager", image: anandTeam, card: "bg-[#CFF7E5]" },
  { name: "Likhith P", role: "Video Editor", image: likhithTeam, card: "bg-[#FCE1F0]" },
];

const industries = [
  { icon: Building2, label: "B2B SaaS", href: "/industries/b2b", text: "Full-funnel digital marketing for SaaS — from SEO and content to paid campaigns that generate qualified pipeline." },
  { icon: ShoppingBag, label: "E-commerce", href: "/ecommerce-marketing-agency-bangalore", text: "AI-driven ecommerce marketing combining SEO, paid ads, and social media to boost conversions and ROAS." },
  { icon: BriefcaseBusiness, label: "Professional Services", href: "/industries/b2b", text: "Integrated digital marketing strategies that build authority, drive inbound leads, and grow your practice." },
  { icon: GraduationCap, label: "EdTech", href: "/digital-marketing-for-coaching-institutes", text: "Multi-channel digital marketing for EdTech — SEO, paid campaigns, and social media to reach learners at scale." },
  { icon: Stethoscope, label: "Healthcare", href: "/industries/lifestyle", text: "Trust-focused digital marketing for healthcare — from patient acquisition to authoritative content." },
  { icon: Rocket, label: "Tech Startups", href: "/industries/b2b", text: "Growth marketing for startups — rapid experimentation across SEO, ads, social, and content to find product-market fit." },
  { icon: BarChart3, label: "Real Estate", href: "/industries/b2b", text: "SEO, Google Ads, social media, and landing pages that help real estate businesses generate quality leads." },
  { icon: Scale, label: "Legal Services", href: "/industries/b2b", text: "Targeted digital marketing for law firms — from local SEO to paid ads that attract high-intent clients." },
  { icon: Hotel, label: "Hospitality & Travel", href: "/industries/hospitality", text: "Social media, SEO, and paid campaigns that help hotels, resorts, and travel businesses drive bookings." },
];

const testimonials = [
  { role: "CEO", quote: "The Super 30 transformed our entire digital presence — from SEO to paid ads to social media. Our qualified leads increased by 340% in just 6 months." },
  { role: "Founder", quote: "Finally a digital marketing agency that delivers across all channels. Our organic traffic doubled while our ad ROAS hit 5x within the first quarter." },
  { role: "CMO", quote: "Their integrated approach to SEO, ads, and social media gave us a unified growth strategy. We went from scattered campaigns to predictable revenue." },
];

const avatars = [magicbricksClientLogo, mamaearthClientLogo, upgradClientLogo];
const logos: { src: string; name: string; className?: string }[] = [
  ...pdfClientLogos.map((logo) =>
    logo.name === "Devakrti by Paramporul Gallery" || logo.name === "JAIN University"
      ? { ...logo, className: "h-8 sm:h-14" }
      : logo
  ),
  { src: icsLogo, name: "ICS", className: "h-16 sm:h-32" },
  { src: digitalAcademy360Logo, name: "Digital Academy 360", className: "h-16 sm:h-32" },
];
const pointImages = [evolvingImage, heroImage, featuredSearchImage, partnerImage, realGrowthImage];

const Eyebrow = ({ children, light }: { children: ReactNode; light?: boolean }) => (
  <p className={`mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider ${light ? "text-primary-foreground" : "text-foreground"}`}>
    <span className="h-2 w-2 rounded-full bg-brand" />{children}
  </p>
);

const Pill = ({ children, onClick, to }: { children: ReactNode; onClick?: () => void; to?: string }) => {
  const cls = "group inline-flex items-center gap-3 rounded-full bg-brand py-1.5 pl-6 pr-1.5 text-sm font-semibold text-primary-foreground transition hover:bg-brand-dark";
  const inner = <>{children}<span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground text-foreground transition group-hover:rotate-45"><ArrowUpRight className="h-4 w-4" /></span></>;
  return to ? <Link to={to} className={cls}>{inner}</Link> : <button type="button" onClick={onClick} className={cls}>{inner}</button>;
};

const Mesh = () => (
  <>
    <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,hsl(var(--primary-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary-foreground))_1px,transparent_1px)] bg-[size:46px_46px] [mask-image:radial-gradient(ellipse_at_center,transparent_35%,black_85%)]" />
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand/25 blur-[140px]" />
  </>
);

const H2 = ({ pre, hl, light, id }: { pre: string; hl: string; light?: boolean; id?: string }) => (
  <h2 id={id} className={`text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${light ? "text-primary-foreground" : "text-foreground"}`}>{pre} <span className="text-brand">{hl}</span></h2>
);

const Stars = ({ light }: { light?: boolean }) => (
  <div>
    <div className="flex items-center gap-1">{[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-3.5 w-3.5 fill-brand text-brand" />)}<span className={`ml-1 text-sm font-semibold ${light ? "text-primary-foreground" : "text-foreground"}`}>4.9/5</span></div>
    <p className={`mt-1 text-xs ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>Trusted by <b>50+</b> leading companies</p>
  </div>
);

export const ServiceV2Page = ({ c }: { c: ServiceV2Config }) => {
  const [open, setOpen] = useState(false);
  const cta = () => setOpen(true);
  const svcCols = c.services.length % 5 === 0 ? "lg:grid-cols-5" : "lg:grid-cols-4";

  return (
    <>
      {getSeo(c.seo.canonical) ? (
        <PageSeo path={c.seo.canonical} />
      ) : (
        <Helmet>
          <title>{c.seo.title}</title>
          <meta name="description" content={c.seo.description} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={`https://www.thesuper30.ai${c.seo.canonical}`} />
          <meta property="og:title" content={c.seo.title} />
          <meta property="og:description" content={c.seo.description} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
      )}
      <Navbar />
      <main className="min-h-screen bg-background pt-16 md:pt-20">
        {/* HERO */}
        <section className="px-3 pt-3 sm:px-5">
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-foreground">
            <Mesh />
            <div className="container relative mx-auto px-4 pb-14 pt-20 text-center sm:px-6 md:pt-28 lg:px-8">
              <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 py-1.5 pl-1.5 pr-4 text-sm text-primary-foreground/85">
                <span className="flex -space-x-2">{avatars.map((a, i) => <span key={i} className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border border-foreground bg-background"><img loading="lazy" decoding="async" src={a} alt="" className="h-5 w-5 object-contain" /></span>)}</span>
                {c.hero.tags}
              </div>
              <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-semibold leading-[1.08] text-primary-foreground sm:text-6xl lg:text-7xl">
                {c.hero.title}{" "}<span className="inline-block -rotate-2 rounded-2xl bg-brand px-4 pb-1">{c.hero.highlight}</span>
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">{c.hero.sub}</p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Pill onClick={cta}>{c.ctaLabel}</Pill>
                <Link to="/our-work" className="text-sm font-semibold text-primary-foreground underline-offset-4 hover:underline">View Case Studies</Link>
              </div>
              <p className="mt-12 text-sm text-primary-foreground/80">Trusted by <b className="text-primary-foreground">50+</b> Brands That Value Real Results</p>
              {c.heroStats && (
                <div className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-y-8 md:grid-cols-4">
                  {c.heroStats.map(([v, l], i) => (
                    <div key={l} className={`px-4 ${i > 0 ? "md:border-l md:border-primary-foreground/15" : ""}`}>
                      <p className="text-4xl font-semibold text-primary-foreground md:text-5xl">{v}</p>
                      <p className="mt-2 text-sm text-primary-foreground/75">{l}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* LOGOS */}
        <section className="bg-background py-14 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>In good company</Eyebrow>
              <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">Brands you know.<br /><span className="text-brand">A team they trust.</span></h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">Trusted by growing brands across India.</p>
            </div>
            <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center gap-8 sm:mt-12 sm:gap-10">
              <div className="flex w-full flex-nowrap items-center justify-center gap-x-4 sm:gap-x-14">
                {logos.slice(0, 6).map((client) => (
                  <img key={client.name} src={client.src} alt={client.name} className={`w-auto min-w-0 max-w-[16%] object-contain sm:max-w-[190px] ${client.className ?? "h-10 sm:h-20"}`} loading="lazy" />
                ))}
              </div>
              <div className="flex w-full flex-nowrap items-center justify-center gap-x-4 sm:gap-x-14">
                {logos.slice(6).map((client) => (
                  <img key={client.name} src={client.src} alt={client.name} className={`w-auto min-w-0 max-w-[16%] object-contain sm:max-w-[190px] ${client.className ?? "h-10 sm:h-20"}`} loading="lazy" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="relative">
              <img src={evolvingImage} alt={c.about.imageAlt} width={1100} height={900} loading="lazy" className="aspect-[5/4] w-full rounded-3xl object-cover" />
              <div className="absolute -bottom-6 left-6 rounded-2xl bg-background p-5 shadow-lg sm:left-10">
                <p className="text-3xl font-semibold text-foreground">{c.aboutCard?.value ?? "$2M+"}</p>
                <p className="text-sm text-muted-foreground">{c.aboutCard?.label ?? "Client Revenue Generated"}</p>
                <div className="mt-4 border-t border-border pt-4"><Stars /></div>
              </div>
            </div>
            <div className="pt-8 lg:pt-0">
              <Eyebrow>{c.about.eyebrow}</Eyebrow>
              <H2 pre={c.about.title} hl={c.about.highlight} />
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{c.about.text}</p>
              <div className="mt-8 grid gap-6 border-y border-border py-6 sm:grid-cols-2">
                {(c.aboutStats ?? [["50+", "AI Audits Delivered"], ["300%+", "Avg. Growth"]]).map(([v, l]) => <div key={l}><p className="text-4xl font-semibold text-brand">{v}</p><p className="mt-1 text-sm text-muted-foreground">{l}</p></div>)}
              </div>
              <ul className="mt-6 space-y-3">
                {c.about.bullets.map((x) => <li key={x} className="flex items-center gap-3 text-foreground"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand"><Check className="h-3.5 w-3.5 text-primary-foreground" /></span>{x}</li>)}
              </ul>
              <div className="mt-8"><Pill onClick={cta}>{c.ctaLabel}</Pill></div>
            </div>
          </div>
        </section>

        {/* PROBLEMS (optional) */}
        {c.problems && (
        <section className="relative overflow-hidden bg-foreground py-20 md:py-28">
          <Mesh />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow light>{c.problems.eyebrow}</Eyebrow>
              <H2 light pre={c.problems.title} hl={c.problems.highlight} />
              <p className="mt-5 text-lg leading-relaxed text-primary-foreground/70">{c.problems.text}</p>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {c.problems.items.map((it, i) => (
                <article key={it.title} className="group relative flex min-w-0 flex-col rounded-[28px] border border-primary-foreground/10 bg-foreground-card p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/50 sm:p-7">
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent opacity-60" />
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-primary-foreground"><it.icon className="h-6 w-6" /></span>
                    <span className="text-5xl font-semibold leading-none text-primary-foreground/10">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-snug text-primary-foreground">{it.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/65">{it.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* ECOSYSTEM */}
        {c.ecosystem && (
        <section className="relative overflow-hidden bg-foreground py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,hsl(var(--primary-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary-foreground))_1px,transparent_1px)] bg-[size:10px_10px]" />
          <div className="pointer-events-none absolute left-1/2 top-1/3 h-[820px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/30 blur-[160px]" />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow light>{c.ecosystem.eyebrow}</Eyebrow>
              <H2 light pre={c.ecosystem.title} hl={c.ecosystem.highlight} />
              <p className="mt-5 text-lg leading-relaxed text-primary-foreground/70">{c.ecosystem.text}</p>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {c.ecosystem.pillars.map((p, pi) => (
                <div key={p.title} className="group relative flex flex-col rounded-[28px] border border-primary-foreground/10 bg-foreground-card p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/50 sm:p-8">
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent opacity-60" />
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-primary-foreground"><p.icon className="h-6 w-6" /></span>
                    <span className="text-5xl font-semibold leading-none text-primary-foreground/10">0{pi + 1}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-primary-foreground">{p.title}</h3>
                  <p className="mt-2 text-primary-foreground/60">{p.desc}</p>
                  <div className="mt-6 space-y-3 border-t border-primary-foreground/10 pt-6">
                    {p.items.map((it) => (
                      <div key={it.code} className="flex items-start gap-4 rounded-2xl border border-primary-foreground/5 bg-primary-foreground/[0.03] p-4 transition hover:border-brand/40 hover:bg-brand/10">
                        <span className="flex h-11 min-w-[3.5rem] shrink-0 items-center justify-center rounded-xl border border-brand/40 bg-brand/10 px-2 text-xs font-bold tracking-wide text-brand">{it.code}</span>
                        <div><p className="font-semibold text-primary-foreground">{it.name}</p><p className="mt-1 text-sm leading-relaxed text-primary-foreground/60">{it.desc}</p></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="relative mt-8 overflow-hidden rounded-[28px] border border-primary-foreground/10 bg-foreground-card p-6 sm:p-8 lg:flex lg:items-center lg:gap-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/25 blur-[90px]" />
              <div className="relative lg:w-1/3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Foundation</p>
                <h3 className="mt-2 text-2xl font-semibold text-primary-foreground">Supporting Capabilities</h3>
                <p className="mt-2 text-primary-foreground/60">Specialized expertise powering every campaign.</p>
              </div>
              <div className="relative mt-6 flex flex-wrap gap-3 lg:mt-0 lg:w-2/3">
                {c.ecosystem.capabilities.map((x) => <span key={x} className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-2 text-sm font-medium text-primary-foreground transition hover:border-brand hover:bg-brand/15"><span className="h-1.5 w-1.5 rounded-full bg-brand" />{x}</span>)}
              </div>
            </div>
          </div>
        </section>
        )}

        {/* TEAM */}
        {SHOW_SERVICE_TEAM_SECTION && (
        <section aria-labelledby="service-experts-heading" className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <Eyebrow>{c.team.eyebrow}</Eyebrow>
                <h2 id="service-experts-heading" className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">Meet the <span className="text-brand">{c.team.highlight}</span> Behind Your Growth</h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">{c.team.text}</p>
              </div>
              <Pill to="/internet-marketing-agency#about-team">Meet the whole team</Pill>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((m) => (
                <article key={m.name} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl">
                  <div className={`relative aspect-[4/5] overflow-hidden ${m.card}`}><img src={m.image} alt={`${m.name}, ${m.role} at The Super 30`} width={800} height={1000} loading="lazy" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]" /></div>
                  <div className="px-5 py-4">
                    <div className="min-w-0"><h3 className="text-lg font-semibold text-foreground">{m.name}</h3><p className="mt-0.5 text-sm text-muted-foreground">{m.role}</p></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* SERVICES */}
        <section className="bg-muted/40 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{c.servicesEyebrow ?? "Our services"}</Eyebrow>
              <H2 pre={c.servicesTitle} hl={c.servicesHighlight} />
              {c.servicesText && <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{c.servicesText}</p>}
            </div>
            <div className={`mt-12 grid gap-5 sm:grid-cols-2 ${svcCols}`}>
              {c.services.map((s) => (
                <article key={s.title} className="group flex flex-col rounded-3xl border border-border bg-sand p-6 transition duration-300 hover:-translate-y-1 hover:border-brand">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-primary-foreground"><s.icon className="h-6 w-6" /></span>
                  <h3 className="mt-6 text-lg font-semibold leading-snug text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </article>
              ))}
            </div>
            <p className="mt-10 text-center text-muted-foreground">
              <span className="mr-2 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-primary-foreground">Free</span>
              {c.servicesFooter}{" "}
              <button type="button" onClick={cta} className="font-semibold text-foreground underline underline-offset-4 hover:text-brand">Let's Get Started.</button>
            </p>
          </div>
        </section>

        {/* COMPARISON (optional) */}
        {c.comparison && (
        <section className="relative isolate overflow-hidden bg-foreground py-16 md:py-24">
          <Mesh />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow light>{c.comparison.eyebrow}</Eyebrow>
              <H2 light pre={c.comparison.title} hl={c.comparison.highlight} />
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">{c.comparison.text}</p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
              <div className="rounded-[28px] border border-primary-foreground/10 bg-foreground-card p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-primary-foreground/80">{c.comparison.left.title}</h3>
                <ul className="mt-6 space-y-4">
                  {c.comparison.left.points.map((x) => <li key={x} className="flex items-start gap-3 text-primary-foreground/65"><CircleX className="mt-0.5 h-5 w-5 shrink-0 text-primary-foreground/40" />{x}</li>)}
                </ul>
              </div>
              <div className="relative overflow-hidden rounded-[28px] border border-brand/50 bg-brand/10 p-6 sm:p-8">
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/30 blur-[90px]" />
                <h3 className="relative text-xl font-semibold text-brand">{c.comparison.right.title}</h3>
                <ul className="relative mt-6 space-y-4">
                  {c.comparison.right.points.map((x) => <li key={x} className="flex items-start gap-3 text-primary-foreground"><CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" />{x}</li>)}
                </ul>
              </div>
            </div>
            <div className="mt-12 text-center"><Pill onClick={cta}>{c.ctaLabel}</Pill></div>
          </div>
        </section>
        )}

        {/* WHY US */}
        {c.why && (
        <section className="relative isolate overflow-hidden bg-foreground py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_45%_65%,hsl(var(--brand)/0.24),transparent_70%)]" />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-12">
              <div><Eyebrow light>Why choose us</Eyebrow><H2 light pre={c.why.pre ?? "Your Trusted Partner for"} hl={c.why.highlight} /></div>
              <p className="text-base leading-relaxed text-primary-foreground/70 lg:text-lg">{c.why.text}</p>
            </div>
            <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="grid min-w-0 grid-cols-2 items-stretch gap-4 sm:gap-6">
                <img src={partnerImage} alt="Specialists collaborating on a growth strategy" width={600} height={1000} loading="lazy" className="h-full min-h-[360px] w-full rounded-lg object-cover sm:min-h-[530px]" />
                <div className="flex min-w-0 flex-col gap-6">
                  <div className="py-6 text-center sm:py-8">
                    <p className="text-4xl font-semibold text-brand sm:text-5xl lg:text-6xl">{c.why.statValue}</p>
                    <p className="mt-3 text-sm text-primary-foreground/70 sm:text-base">{c.why.statLabel}</p>
                  </div>
                  <img src={realGrowthImage} alt="A professional marketing workspace" width={600} height={800} loading="lazy" className="min-h-[230px] w-full flex-1 rounded-lg object-cover" />
                </div>
              </div>
              <div className="flex min-w-0 flex-col justify-between">
                <div className="divide-y divide-primary-foreground/15">
                  {c.why.points.map((p, i) => (
                    <div key={p.title} className="flex items-start gap-4 py-5 first:pt-0">
                      <img src={pointImages[i % 5]} alt="" width={56} height={56} loading="lazy" className="h-14 w-14 shrink-0 rounded-full border border-primary-foreground/20 object-cover" />
                      <div className="min-w-0"><h3 className="text-lg font-semibold leading-snug text-primary-foreground">{p.title}</h3><p className="mt-2 text-sm leading-relaxed text-primary-foreground/65">{p.description}</p></div>
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap items-center gap-6"><Pill onClick={cta}>{c.ctaLabel}</Pill><Stars light /></div>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* DELIVERABLES */}
        <section className="relative isolate overflow-hidden bg-muted/40 py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--brand)/0.08),transparent_60%)]" />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{c.deliverables.eyebrow ?? "What you get"}</Eyebrow>
              <H2 pre={c.deliverables.title} hl={c.deliverables.highlight} />
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{c.deliverables.text}</p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {c.deliverables.items.map((it, i) => (
                <article key={it.title} className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-sand p-6 transition hover:border-brand/60 sm:p-7">
                  <span className="pointer-events-none absolute right-5 top-5 text-4xl font-bold text-foreground/5 transition group-hover:text-brand/15">{String(i + 1).padStart(2, "0")}</span>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-primary-foreground"><it.icon className="h-6 w-6" /></div>
                  <h3 className="text-xl font-semibold leading-snug text-foreground">{it.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{it.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center"><Pill onClick={cta}>{c.ctaLabel}</Pill></div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="px-3 sm:px-5">
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-foreground py-16 md:py-24">
            <Mesh />
            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <Eyebrow light>{c.industries?.eyebrow ?? "Industries we serve"}</Eyebrow>
                <H2 light pre={c.industries?.title ?? "Built for ambitious businesses"} hl={c.industries?.highlight ?? "ready to grow."} />
                <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70">{c.industries?.text ?? "AI-powered digital marketing shaped around the buying journey, competition, and opportunities in your market."}</p>
              </div>
              {c.industries?.chips ? (
              <div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-3">
                {c.industries.chips.map((x) => <span key={x} className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:border-brand hover:bg-brand/15"><span className="h-1.5 w-1.5 rounded-full bg-brand" />{x}</span>)}
              </div>
              ) : (
              <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
                {industries.map((ind, i) => {
                  const label = c.industries?.items?.[i]?.label ?? ind.label;
                  const text = c.industries?.items?.[i]?.text ?? ind.text;
                  return (
                    <Link key={label} to={ind.href} className="group flex gap-5 rounded-3xl border border-primary-foreground/10 bg-foreground-card p-6 transition hover:-translate-y-1 hover:border-brand">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand transition group-hover:bg-brand group-hover:text-primary-foreground"><ind.icon className="h-5 w-5" /></span>
                      <div><h3 className="flex items-center gap-2 text-lg font-semibold text-primary-foreground">{label}<ArrowUpRight className="h-4 w-4 text-brand opacity-0 transition group-hover:opacity-100" /></h3><p className="mt-2 text-sm leading-relaxed text-primary-foreground/65">{text}</p></div>
                    </Link>
                  );
                })}
              </div>
              )}
              <p className="mt-10 text-center text-sm text-primary-foreground/70">Don&apos;t see your industry? <Link to="/industries" className="font-semibold text-primary-foreground underline underline-offset-4 hover:text-brand">Explore All Industries.</Link></p>
            </div>
          </div>
        </section>

        {/* FRAMEWORK */}
        <section className="bg-background py-16 md:py-24">
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-16">
              <div><Eyebrow>{c.framework.eyebrow}</Eyebrow><H2 pre={c.framework.title} hl={c.framework.highlight} /></div>
              {c.framework.text && <p className="max-w-md border-l-2 border-brand pl-5 text-base leading-relaxed text-muted-foreground">{c.framework.text}</p>}
            </div>
            <ol className={`mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-0 ${c.framework.steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5"}`}>
              {c.framework.steps.map((s, i) => {
                const n = c.framework.steps.length;
                const last = i === n - 1;
                const stairs = ["lg:pt-32", "lg:pt-24", "lg:pt-16", "lg:pt-8", "lg:pt-0"].slice(5 - n);
                return (
                  <li key={s.title} className={`relative min-w-0 ${stairs[i] ?? ""} ${last && n % 2 === 1 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
                    <div className={`relative flex h-full flex-col border-t-2 px-5 pb-7 pt-6 sm:px-6 ${last ? "rounded-b-lg border-brand bg-brand text-primary-foreground" : "border-brand bg-muted/40 text-foreground lg:border-r lg:border-r-border"}`}>
                      <div className="flex items-center justify-between gap-3">
                        <span className={`text-5xl font-semibold leading-none ${last ? "text-primary-foreground/40" : "text-brand/25"}`}>0{i + 1}</span>
                        <s.icon aria-hidden="true" className={`h-7 w-7 shrink-0 ${last ? "text-primary-foreground" : "text-brand"}`} strokeWidth={1.5} />
                      </div>
                      <h3 className="mt-7 text-xl font-semibold leading-snug">{s.title}</h3>
                      <p className={`mt-3 text-sm leading-relaxed ${last ? "text-primary-foreground/90" : "text-muted-foreground"}`}>{s.description}</p>
                      <div aria-hidden="true" className={`mt-auto flex items-center gap-3 pt-8 ${last ? "text-primary-foreground" : "text-brand"}`}>
                        <span className={`h-px flex-1 ${last ? "bg-primary-foreground/35" : "bg-border"}`} /><ArrowUpRight className="h-5 w-5 shrink-0" />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-muted/40 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center"><Eyebrow>Testimonials</Eyebrow><H2 pre={c.testimonialsHeading?.title ?? "What our"} hl={c.testimonialsHeading?.highlight ?? "clients say."} />{c.testimonialsHeading?.text && <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{c.testimonialsHeading.text}</p>}</div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {(c.testimonials ?? testimonials).map((t) => (
                <figure key={t.quote} className="flex min-w-0 flex-col rounded-lg border border-border bg-background p-7 md:p-8">
                  <Quote aria-hidden="true" className="mb-6 h-9 w-9 text-brand" strokeWidth={1.5} />
                  <blockquote className="flex-1 text-lg leading-relaxed text-foreground">“{t.quote}”</blockquote>
                  {"company" in t && <figcaption className="mt-6 border-t border-border pt-4 text-sm font-semibold text-foreground">{t.company}</figcaption>}
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FIT (optional) */}
        {c.fit && (
        <section className="px-3 sm:px-5">
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-foreground py-16 md:py-24">
            <Mesh />
            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <Eyebrow light>{c.fit.eyebrow}</Eyebrow>
                <H2 light pre={c.fit.title} hl={c.fit.highlight} />
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">{c.fit.text}</p>
              </div>
              <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
                <div className="relative overflow-hidden rounded-[28px] border border-brand/50 bg-brand/10 p-6 sm:p-8">
                  <h3 className="text-xl font-semibold text-brand">{c.fit.good.title}</h3>
                  <ul className="mt-6 space-y-4">
                    {c.fit.good.points.map((x) => <li key={x} className="flex items-start gap-3 text-primary-foreground"><CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" />{x}</li>)}
                  </ul>
                </div>
                <div className="rounded-[28px] border border-primary-foreground/10 bg-foreground-card p-6 sm:p-8">
                  <h3 className="text-xl font-semibold text-primary-foreground/80">{c.fit.bad.title}</h3>
                  <ul className="mt-6 space-y-4">
                    {c.fit.bad.points.map((x) => <li key={x} className="flex items-start gap-3 text-primary-foreground/65"><CircleX className="mt-0.5 h-5 w-5 shrink-0 text-primary-foreground/40" />{x}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* FINAL CTA + FAQ (optional) */}
        {(c.finalCta || c.faqSlug) && (
        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {c.finalCta && (
              <div className="mx-auto max-w-4xl text-center">
                <H2 pre={c.finalCta.title} hl={c.finalCta.highlight} />
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{c.finalCta.text}</p>
                <div className="mt-8"><Pill onClick={cta}>{c.finalCta.button}</Pill></div>
              </div>
            )}
            {c.faqSlug && getFaqs(c.faqSlug).length > 0 && (
              <div className={`mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 ${c.finalCta ? "mt-20 border-t border-border pt-16" : ""}`}>
                <div className="lg:sticky lg:top-32 lg:self-start">
                  <Eyebrow>FAQs</Eyebrow>
                  <H2 pre="Frequently Asked" hl="Questions" />
                </div>
                <Accordion type="single" collapsible className="space-y-3">
                  {getFaqs(c.faqSlug).map((f, i) => (
                    <AccordionItem key={f.question} value={`faq-${i}`} className="rounded-2xl border border-border bg-sand px-5 data-[state=open]:border-brand/50">
                      <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">{f.question}</AccordionTrigger>
                      <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">{f.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}
          </div>
        </section>
        )}

        <EnquiryPopup open={open} onOpenChange={setOpen} />
        <Footer />
      </main>
      <StickyCTA onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
    </>
  );
};
