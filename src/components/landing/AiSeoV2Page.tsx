import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight, BarChart3, BrainCircuit, BriefcaseBusiness, Building2, Check, FileText,
  GraduationCap, Hotel, Link2, MapPin, PenLine, Phone, Rocket, Scale, Search, ShoppingBag, Smartphone,
  Sparkles, Star, Stethoscope, Target, TrendingUp, Quote,
} from "lucide-react";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { SeoAchievementsSection } from "@/components/landing/SeoAchievementsSection";
import { SHOW_SERVICE_TEAM_SECTION } from "@/lib/sectionFlags";

import heroImage from "@/assets/seo-reference-hero.jpg";
import evolvingImage from "@/assets/seo-search-evolving.jpg";
import partnerImage from "@/assets/seo-growth-partner.jpg";
import realGrowthImage from "@/assets/seo-real-growth-workspace.jpg";
import featuredSearchImage from "@/assets/seo-featured-ai-search.jpg";
import magicbricksClientLogo from "@/assets/clients/magicbricks.png";
import mamaearthClientLogo from "@/assets/clients/mamaearth.png";
import upgradClientLogo from "@/assets/clients/upgrad.png";
import tata1mgLogo from "@/assets/clients/tata1mg.png";
import shriramLogo from "@/assets/clients/shriram-properties.png";
import jainLogo from "@/assets/clients/jain-university.png";
import harvestClientLogo from "@/assets/clients/harvest-international.png";
import bhrighuLogo from "@/assets/clients/bhrighu-academy.png";
import smrLogo from "@/assets/clients/smr-university.png";
import atriaLogo from "@/assets/clients/atria-institute.png";
import lancesoftLogo from "@/assets/clients/lancesoft.png";
import { pdfClientLogos } from "@/data/pdfClientLogos";
import icsLogo from "@/assets/logos/ics.png";
import digitalAcademy360Logo from "@/assets/logos/digital-academy-360.png";


import amitTeam from "@/assets/team/amit-singh-card.png";
import mayankTeam from "@/assets/team/mayank-card.png";
import praveenTeam from "@/assets/team/praveen.png";
import harshavardhanTeam from "@/assets/team/harshavardhan-card.png";
import chandrasekharTeam from "@/assets/team/chandrasekhar.png";
import anandTeam from "@/assets/team/anand.png";
import likhithTeam from "@/assets/team/likhith.png";
const seoExperts = [
  { name: "Amit Singh", role: "Co-Founder", image: amitTeam, card: "bg-[#FDE2E4]", blob: "bg-[#F9BEC7]" },
  { name: "Mayank", role: "VP - Business Growth", image: mayankTeam, card: "bg-[#D8F3DC]", blob: "bg-[#95D5B2]" },
  { name: "Praveen", role: "Senior Creative Manager", image: praveenTeam, card: "bg-[#E5DEFF]", blob: "bg-[#C4B5FD]" },
  { name: "Harshavardhan", role: "Graphic Designer", image: harshavardhanTeam, card: "bg-[#D7E3FC]", blob: "bg-[#A5C4F3]" },
  { name: "G. Chandrasekhar", role: "Team Leader - Digital Marketing", image: chandrasekharTeam, card: "bg-[#FFE5D9]", blob: "bg-[#FFC8A2]" },
  { name: "Anand Kumar", role: "Performance Marketing Manager", image: anandTeam, card: "bg-[#CFF7E5]", blob: "bg-[#7FE3C0]" },
  { name: "Likhith P", role: "Video Editor", image: likhithTeam, card: "bg-[#FCE1F0]", blob: "bg-[#F5A8D0]" },
];

const industries = [
  { icon: Building2, label: "B2B SaaS", href: "/industries/b2b", text: "Capture high-intent software searches that turn product comparisons into qualified demos." },
  { icon: ShoppingBag, label: "E-commerce", href: "/ecommerce-marketing-agency-bangalore", text: "Scale category and product rankings to drive consistent, high-margin organic sales." },
  { icon: BriefcaseBusiness, label: "Professional Services", href: "/industries/b2b", text: "Build search authority and capture decision-makers looking for trusted consulting partners." },
  { icon: GraduationCap, label: "EdTech", href: "/digital-marketing-for-coaching-institutes", text: "Rank for high-volume course and career searches that convert into student enrolments." },
  { icon: Stethoscope, label: "Healthcare", href: "/industries/lifestyle", text: "Win local clinic searches and medically accurate AI answers that bring patient bookings." },
  { icon: Rocket, label: "Tech Startups", href: "/industries/b2b", text: "Build compounding organic visibility early so customer acquisition scales without rising ad costs." },
  { icon: BarChart3, label: "Real Estate", href: "/industries/b2b", text: "Dominate location and project searches that bring qualified property buyers and site visits." },
  { icon: Scale, label: "Legal Services", href: "/industries/b2b", text: "Capture high-intent local and practice-area searches from clients ready to retain counsel." },
  { icon: Hotel, label: "Hospitality & Travel", href: "/industries/hospitality", text: "Rank for destination and stay searches to drive direct bookings without OTA commissions." },
];

const services = [
  { icon: Search, title: "Technical SEO", text: "We fix crawlability, site speed, indexing, and Core Web Vitals so nothing holds your search rankings back." },
  { icon: FileText, title: "On-Page SEO", text: "We optimize title tags, headings, internal links, and schema around the exact terms your buyers search." },
  { icon: PenLine, title: "SEO Content Optimization", text: "We align service and landing pages with buyer intent so your site ranks higher and converts visitors." },
  { icon: Link2, title: "Authority Building", text: "Earn relevant backlinks, citations, and brand mentions from trusted websites that push your pages onto page one." },
  { icon: MapPin, title: "Local SEO", text: "Google Business Profile optimization and location pages that put you in front of nearby Bangalore buyers." },
  { icon: Sparkles, title: "Answer Engine Optimization (AEO)", text: "Structure your pages so ChatGPT, Perplexity, and Google AI Overviews quote your brand directly in answers." },
  { icon: BrainCircuit, title: "Generative Engine Optimization (GEO)", text: "Strengthen entity signals, reviews, and topical authority so AI search engines recommend your business to buyers." },
  { icon: Smartphone, title: "App Store Optimization (ASO)", text: "Optimize app titles, descriptions, and visuals to boost App Store and Play Store rankings and organic installs." },
  { icon: ShoppingBag, title: "E-commerce SEO", text: "Optimize product and category pages to turn organic search into a consistent, high-margin store sales channel." },
  { icon: BarChart3, title: "SEO Analytics & Reporting", text: "Clear monthly dashboards connecting search rankings directly to qualified leads and revenue from your SEO spend." },
];

const growthFramework = [
  { icon: Search, title: "Audit & Benchmark", description: "Uncover technical bottlenecks, competitor gaps, and high-intent search terms holding back revenue." },
  { icon: Target, title: "Map Buyer Demand", description: "Prioritize commercial keywords and AI prompts most likely to bring ready-to-buy customers." },
  { icon: BrainCircuit, title: "Fix, Build & Optimize", description: "Ship technical fixes, conversion-ready pages, and authority signals across Google and AI." },
  { icon: BarChart3, title: "Track Leads & Revenue", description: "Measure page-one rankings, AI citations, qualified enquiries, and exact INR revenue generated." },
  { icon: TrendingUp, title: "Scale Winning Pages", description: "Double down on top-converting search terms to compound monthly leads and sales." },
];

const textTestimonials = [
  { company: "Interiors & More", quote: "The Super 30's SEO team put us on page one for our most valuable interior design keywords. Organic enquiries now bring us a steady flow of project leads every month." },
  { company: "Book My Scans", quote: "Our scan booking keywords jumped to the top of Google across multiple cities. Organic traffic has more than doubled and most of our bookings now come straight from search." },
  { company: "ICS", quote: "From technical fixes to content and authority building, their SEO work transformed our visibility. We now rank for competitive course keywords and admissions enquiries keep growing." },
];

const clientLogos = [
  { src: magicbricksClientLogo, name: "Magicbricks" }, { src: bhrighuLogo, name: "Bhrighu Academy" },
  { src: mamaearthClientLogo, name: "Mamaearth" }, { src: jainLogo, name: "Jain University" },
  { src: upgradClientLogo, name: "upGrad" }, { src: harvestClientLogo, name: "Harvest International School" },
  { src: tata1mgLogo, name: "Tata 1mg" }, { src: smrLogo, name: "SMR University" },
  { src: shriramLogo, name: "Shriram Properties" }, { src: atriaLogo, name: "Atria Institute of Technology" },
  { src: lancesoftLogo, name: "Lancesoft" },
];

const seoHeroStats = [["265+", "SEO Projects Delivered"], ["579+", "AI Audits Delivered"], ["2500+", "Keywords Ranking"], ["4.9/5", "Client Rating"]];
const seoAboutStats = [["579+", "AI Audits Delivered"], ["2500+", "Keywords Ranking"]];
const stats = seoHeroStats;

const showcaseLogos: { src: string; name: string; className?: string }[] = [
  ...pdfClientLogos.map((logo) =>
    logo.name === "Devakrti by Paramporul Gallery" || logo.name === "JAIN University"
      ? { ...logo, className: "h-8 sm:h-14" }
      : logo
  ),
  { src: icsLogo, name: "ICS", className: "h-16 sm:h-32" },
  { src: digitalAcademy360Logo, name: "Digital Academy 360", className: "h-16 sm:h-32" },
];

const ecosystem = [
  { icon: Search, title: "Search Engine Optimization", desc: "Full-funnel execution from a dedicated search engine optimization company in Bangalore.", items: [
    { code: "CORE", name: "Organic Search Rankings", desc: "Capture high-intent keywords that bring ready-to-buy visitors to your site." },
    { code: "LOCAL", name: "Local & Maps SEO", desc: "Dominate Bangalore local pack results and capture nearby customer searches." },
    { code: "STORE", name: "E-commerce SEO", desc: "Scale category and product page rankings to drive compounding online sales." },
    { code: "GLOBAL", name: "International SEO", desc: "Expand organic visibility across global markets, regions, and multiple languages." },
  ] },
  { icon: BrainCircuit, title: "AI & Answer Engine Optimization", desc: "Make your brand the trusted answer recommended across AI platforms.", items: [
    { code: "AEO", name: "Answer Engine Optimization", desc: "Win featured snippets and direct answers across zero-click search results." },
    { code: "GEO", name: "Generative Engine Optimization", desc: "Earn brand citations and recommendations inside ChatGPT, Gemini, and Perplexity." },
    { code: "VOICE", name: "Voice Search Optimization", desc: "Capture conversational, natural-language queries across mobile and smart assistants." },
    { code: "ENTITY", name: "Semantic & Entity SEO", desc: "Build deep topical authority so search and AI engines trust your brand." },
  ] },
  { icon: Sparkles, title: "Digital Discovery & Experience", desc: "Turn search visibility into engagement, trust, and measurable conversions.", items: [
    { code: "SXO", name: "Search Experience Optimization", desc: "Align landing pages with search intent to convert visitors into leads." },
    { code: "ASO", name: "App Store Optimization", desc: "Boost mobile app rankings, store visibility, and high-intent organic installs." },
    { code: "VIDEO", name: "Video Search Optimization", desc: "Rank branded videos across YouTube and Google video carousels." },
    { code: "SOCIAL", name: "Marketplace & Social Search", desc: "Expand product and brand discovery across social search and marketplaces." },
  ] },
];

const supportingCapabilities = ["Technical SEO", "On-Page SEO", "Off-Page SEO", "Image SEO", "Programmatic SEO", "Content Optimization", "Link Building", "SEO Analytics"];

const growthDeliverables = [
  { icon: Search, title: "Buyer-Intent Keyword Rankings", description: "Rank on page one for the exact commercial terms customers search before making a purchase." },
  { icon: TrendingUp, title: "Steady Qualified Traffic", description: "Build month-on-month organic visitors through technical fixes and authority that compound over time." },
  { icon: BrainCircuit, title: "Visibility In AI Answers", description: "Get your brand recommended inside ChatGPT, Perplexity, and Google AI Overviews when buyers compare options." },
  { icon: MapPin, title: "Local & Maps Presence", description: "Capture top local pack and Google Maps spots that turn nearby searches into calls and visits." },
  { icon: FileText, title: "Pages Built To Convert", description: "Service and landing pages structured around buyer questions to turn search visitors into leads." },
  { icon: BarChart3, title: "Revenue-Linked Reporting", description: "Clear monthly dashboards showing keyword movement, qualified leads, and exact INR revenue generated." },
];

const Eyebrow = ({ children, light }: { children: ReactNode; light?: boolean }) => (
  <p className={`mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider ${light ? "text-primary-foreground" : "text-foreground"}`}>
    <span className="h-2 w-2 rounded-full bg-brand" />{children}
  </p>
);

const Pill = ({ children, onClick, to, light }: { children: ReactNode; onClick?: () => void; to?: string; light?: boolean }) => {
  const cls = `group inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold transition ${light ? "bg-primary-foreground text-foreground hover:bg-brand hover:text-primary-foreground" : "bg-brand text-primary-foreground hover:bg-brand-dark"}`;
  const inner = <>{children}<span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground text-foreground transition group-hover:rotate-45"><ArrowUpRight className="h-4 w-4" /></span></>;
  return to ? <Link to={to} className={cls}>{inner}</Link> : <button type="button" onClick={onClick} className={cls}>{inner}</button>;
};

const Mesh = () => (
  <>
    <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,hsl(var(--primary-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary-foreground))_1px,transparent_1px)] bg-[size:46px_46px] [mask-image:radial-gradient(ellipse_at_center,transparent_35%,black_85%)]" />
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand/25 blur-[140px]" />
  </>
);

const Rating = ({ light }: { light?: boolean }) => (
  <div className="flex items-center gap-3">
    <div className="flex -space-x-2">
      {clientLogos.slice(0, 3).map((c) => <span key={c.name} className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 border-background bg-background"><img src={c.src} alt="" className="h-6 w-6 object-contain" loading="lazy" /></span>)}
    </div>
    <div>
      <div className="flex items-center gap-1">{[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-3.5 w-3.5 fill-brand text-brand" />)}<span className={`ml-1 text-sm font-semibold ${light ? "text-primary-foreground" : "text-foreground"}`}>4.9/5</span></div>
      <p className={`text-xs ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>Trusted by <b>250+</b> Brands</p>
    </div>
  </div>
);

export const AiSeoV2Page = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const openAudit = () => setShowEnquiry(true);

  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="px-3 pt-3 sm:px-5">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-foreground">
          <Mesh />
          <div className="container relative mx-auto px-4 pb-14 pt-20 text-center sm:px-6 md:pt-28 lg:px-8">
            <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 py-1.5 pl-1.5 pr-4 text-sm text-primary-foreground/85">
              <span className="flex -space-x-2">{clientLogos.slice(0, 3).map((c) => <span key={c.name} className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border border-foreground bg-background"><img loading="lazy" decoding="async" src={c.src} alt="" className="h-5 w-5 object-contain" /></span>)}</span>
              Technical SEO • Local SEO • AI Search • Authority
            </div>
            <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-semibold leading-[1.08] text-primary-foreground sm:text-6xl lg:text-7xl">
              AI SEO Services In Bangalore That Turn Searches Into{" "}
              <span className="inline-block -rotate-2 rounded-2xl bg-brand px-4 pb-1">Revenue</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
              As a performance-driven SEO agency in Bangalore, we combine technical precision, authority content, and AI search optimization to grow qualified leads and sales.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Pill onClick={openAudit}>Get My Free SEO Audit</Pill>
              <Link to="/our-work" className="text-sm font-semibold text-primary-foreground underline-offset-4 hover:underline">View Case Studies</Link>
            </div>

            <p className="mt-12 text-sm text-primary-foreground/80">Trusted by <b className="text-primary-foreground">250+</b> Brands That Value Real Results</p>
            <div className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-y-8 md:grid-cols-4">
              {stats.map(([v, l], i) => (
                <div key={l} className={`px-4 ${i > 0 ? "md:border-l md:border-primary-foreground/15" : ""}`}>
                  <p className="text-4xl font-semibold text-primary-foreground md:text-5xl">{v}</p>
                  <p className="mt-2 text-sm text-primary-foreground/75">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section aria-labelledby="seo-client-brands-heading" className="bg-background py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>In good company</Eyebrow>
            <h2 id="seo-client-brands-heading" className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">Brands you know.<br /><span className="text-brand">A team they trust.</span></h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">Trusted by growing brands across India.</p>
          </div>
          <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center gap-8 sm:mt-12 sm:gap-10">
            <div className="flex w-full flex-nowrap items-center justify-center gap-x-4 sm:gap-x-14">
              {showcaseLogos.slice(0, 6).map((client) => (
                <img key={client.name} src={client.src} alt={client.name} className={`w-auto min-w-0 max-w-[16%] object-contain sm:max-w-[190px] ${client.className ?? "h-10 sm:h-20"}`} loading="lazy" />
              ))}
            </div>
            <div className="flex w-full flex-nowrap items-center justify-center gap-x-4 sm:gap-x-14">
              {showcaseLogos.slice(6).map((client) => (
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
            <img src={evolvingImage} alt="People discovering businesses through search" width={1100} height={900} loading="lazy" className="aspect-[5/4] w-full rounded-3xl object-cover" />
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-background p-5 shadow-lg sm:left-10">
              <p className="text-3xl font-semibold text-foreground">265+</p>
              <p className="text-sm text-muted-foreground">SEO Projects Delivered</p>
              <div className="mt-4 border-t border-border pt-4"><Rating /></div>
            </div>
          </div>
          <div className="pt-8 lg:pt-0">
            <Eyebrow>Built For Compounding Growth</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">The SEO Company in Bangalore <span className="text-brand">Focused On Revenue.</span></h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">We provide search engine optimization services in Bangalore designed to capture high-intent buyers, dominate local and national rankings, and convert organic traffic into sales.</p>
            <div className="mt-8 grid gap-6 border-y border-border py-6 sm:grid-cols-2">
              {seoAboutStats.map(([v, l]) => <div key={l}><p className="text-4xl font-semibold text-brand">{v}</p><p className="mt-1 text-sm text-muted-foreground">{l}</p></div>)}
            </div>
            <ul className="mt-6 space-y-3">
              {["Ranking For Searches That Drive Sales", "Technical Site Health And Authority Building", "Transparent Monthly Lead And ROI Tracking"].map((x) => <li key={x} className="flex items-center gap-3 text-foreground"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand"><Check className="h-3.5 w-3.5 text-primary-foreground" /></span>{x}</li>)}
            </ul>
            <div className="mt-8"><Pill onClick={openAudit}>Get My Free SEO Audit</Pill></div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="relative overflow-hidden bg-foreground py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,hsl(var(--primary-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary-foreground))_1px,transparent_1px)] bg-[size:10px_10px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[820px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/30 blur-[160px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full bg-brand/20 blur-[140px]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow light>The Search Ecosystem</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">One Brand. Every Search. <span className="text-brand">Every Revenue Opportunity.</span></h2>
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/70">Our SEO services in Bangalore combine search precision and an AI SEO agency approach to capture buyers across Google, AI answers, and digital platforms.</p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {ecosystem.map((pillar, pi) => (
              <div key={pillar.title} className="group relative flex flex-col rounded-[28px] border border-primary-foreground/10 bg-foreground-card p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/50 sm:p-8">
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent opacity-60" />
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-primary-foreground"><pillar.icon className="h-6 w-6" /></span>
                  <span className="text-5xl font-semibold leading-none text-primary-foreground/10">0{pi + 1}</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-primary-foreground">{pillar.title}</h3>
                <p className="mt-2 text-primary-foreground/60">{pillar.desc}</p>
                <div className="mt-6 space-y-3 border-t border-primary-foreground/10 pt-6">
                  {pillar.items.map((it) => (
                    <div key={it.code} className="flex items-start gap-4 rounded-2xl border border-primary-foreground/5 bg-primary-foreground/[0.03] p-4 transition hover:border-brand/40 hover:bg-brand/10">
                      <span className="flex h-11 min-w-[3.5rem] shrink-0 items-center justify-center rounded-xl border border-brand/40 bg-brand/10 px-2 text-xs font-bold tracking-wide text-brand">{it.code}</span>
                      <div>
                        <p className="font-semibold text-primary-foreground">{it.name}</p>
                        <p className="mt-1 text-sm leading-relaxed text-primary-foreground/60">{it.desc}</p>
                      </div>
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
              <h3 className="mt-2 text-2xl font-semibold text-primary-foreground">Supporting Optimization Capabilities</h3>
              <p className="mt-2 text-primary-foreground/60">Specialized expertise powering the entire ecosystem.</p>
            </div>
            <div className="relative mt-6 flex flex-wrap gap-3 lg:mt-0 lg:w-2/3">
              {supportingCapabilities.map((c) => (
                <span key={c} className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-2 text-sm font-medium text-primary-foreground transition hover:border-brand hover:bg-brand/15">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />{c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO EXPERTS TEAM */}
      {SHOW_SERVICE_TEAM_SECTION && (
      <section aria-labelledby="seo-experts-heading" className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <Eyebrow>Our SEO experts</Eyebrow>
              <h2 id="seo-experts-heading" className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">Meet the <span className="text-brand">SEO Experts</span> Behind Your Growth</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">Search strategists, content specialists, performance marketers and creatives — one focused team working to rank your brand everywhere people search.</p>
            </div>
            <Pill to="/internet-marketing-agency#about-team">Meet the whole team</Pill>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {seoExperts.map((m) => (
              <article key={m.name} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl">
                <div className={`relative aspect-[4/5] overflow-hidden ${m.card}`}>
                  <img src={m.image} alt={`${m.name}, ${m.role} at The Super 30`} width={800} height={1000} loading="lazy" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]" />
                </div>
                <div className="px-5 py-4">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-foreground">{m.name}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">{m.role}</p>
                  </div>
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
            <Eyebrow>Our services</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">Ten Search Disciplines Built To Turn Rankings Into <span className="text-brand">Qualified Leads.</span></h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((s) => (
              <article key={s.title} className="group flex flex-col rounded-3xl border border-border bg-sand p-6 transition duration-300 hover:-translate-y-1 hover:border-brand">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-primary-foreground"><s.icon className="h-6 w-6" /></span>
                <h3 className="mt-6 text-lg font-semibold leading-snug text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-muted-foreground">
            <span className="mr-2 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-primary-foreground">Free</span>
            See what is holding your rankings back with an AI SEO company in Bangalore.{" "}
            <button type="button" onClick={openAudit} className="font-semibold text-foreground underline underline-offset-4 hover:text-brand">Claim Your Site Audit.</button>
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US — PLATFORM VISIBILITY */}
      <section aria-labelledby="platform-why-us-heading" className="relative isolate overflow-hidden bg-foreground py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_45%_65%,hsl(var(--brand)/0.24),transparent_70%)]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div>
              <Eyebrow light>Why choose us</Eyebrow>
              <h2 id="platform-why-us-heading" className="text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">Search Strategy Tied <span className="text-brand">Directly To Sales.</span></h2>
            </div>
            <p className="text-base leading-relaxed text-primary-foreground/70 lg:text-lg">We focus on the searches your customers make right before buying. Our team fixes technical site issues, builds page authority, and ranks your brand across Google and AI.</p>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="grid min-w-0 grid-cols-2 items-stretch gap-4 sm:gap-6">
              <img src={partnerImage} alt="SEO specialists collaborating on a growth strategy" width={600} height={1000} loading="lazy" className="h-full min-h-[360px] w-full rounded-lg object-cover sm:min-h-[530px]" />
              <div className="flex min-w-0 flex-col gap-6">
                <div className="py-6 text-center sm:py-8">
                  <p className="text-4xl font-semibold text-brand sm:text-5xl lg:text-6xl">2500+</p>
                  <p className="mt-3 text-sm text-primary-foreground/70 sm:text-base">Keywords Ranking</p>
                </div>
                <img src={realGrowthImage} alt="A professional search marketing workspace" width={600} height={800} loading="lazy" className="min-h-[230px] w-full flex-1 rounded-lg object-cover" />
              </div>
            </div>
            <div className="flex min-w-0 flex-col justify-between">
              <div className="divide-y divide-primary-foreground/15">
                {[
                  { title: "265+ SEO Projects Delivered", description: "Proven search execution across SaaS, e-commerce, healthcare, and high-growth Indian brands.", image: evolvingImage },
                  { title: "91% Client Retention Rate", description: "Brands stay because rankings compound into predictable monthly inbound enquiries.", image: heroImage },
                  { title: "AI Search Ready", description: "Structured for citations across ChatGPT, Perplexity, and Google AI Overviews alongside traditional search.", image: featuredSearchImage },
                  { title: "30 Dedicated SEO Builders", description: "Dedicated technical engineers, content strategists, and link builders working directly on your website.", image: partnerImage },
                  { title: "Revenue-Tied Reporting", description: "Monthly dashboards tracking keyword movement, qualified leads, and exact INR revenue generated.", image: realGrowthImage },
                ].map((point) => (
                  <div key={point.title} className="flex items-start gap-4 py-5 first:pt-0">
                    <img src={point.image} alt="" width={56} height={56} loading="lazy" className="h-14 w-14 shrink-0 rounded-full border border-primary-foreground/20 object-cover" />
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold leading-snug text-primary-foreground">{point.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-primary-foreground/65">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-6">
                <Pill onClick={openAudit}>Get My Free SEO Audit</Pill>
                <div>
                  <div className="flex items-center gap-1 text-brand">{[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-3.5 w-3.5 fill-brand" />)}<span className="ml-2 text-sm font-semibold text-primary-foreground">4.9/5</span></div>
                  <p className="mt-2 text-xs text-primary-foreground/70">Trusted by 250+ Brands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GROWTH DELIVERABLES */}
      <section aria-labelledby="growth-deliverables-heading" className="relative isolate overflow-hidden bg-muted/40 py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--brand)/0.08),transparent_60%)]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>What you get</Eyebrow>
            <h2 id="growth-deliverables-heading" className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">Measurable Gains Across <span className="text-brand">Rankings, Leads, And Sales.</span></h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">No vanity reports or vague promises, just the commercial results your business sees each month.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {growthDeliverables.map((item, index) => (
              <article key={item.title} className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-sand p-6 transition hover:border-brand/60 sm:p-7">
                <span className="pointer-events-none absolute right-5 top-5 text-4xl font-bold text-foreground/5 transition group-hover:text-brand/15">{String(index + 1).padStart(2, "0")}</span>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-primary-foreground">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold leading-snug text-foreground">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Pill onClick={() => setShowEnquiry(true)}>Let's Start Ranking</Pill>
          </div>
        </div>
      </section>

      {/* INDUSTRIES (dark) */}
      <section className="px-3 sm:px-5">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-foreground py-16 md:py-24">
          <Mesh />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow light>Industries we serve</Eyebrow>
              <h2 className="text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">Search Execution Tailored To <span className="text-brand">How Your Buyers Decide.</span></h2>
              <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70">Industry-specific SEO and AI search execution built around real buyer intent.</p>
            </div>
            <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((ind) => (
                <Link key={ind.label} to={ind.href} className="group flex gap-5 rounded-3xl border border-primary-foreground/10 bg-foreground-card p-6 transition hover:-translate-y-1 hover:border-brand">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand transition group-hover:bg-brand group-hover:text-primary-foreground"><ind.icon className="h-5 w-5" /></span>
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-primary-foreground">{ind.label}<ArrowUpRight className="h-4 w-4 text-brand opacity-0 transition group-hover:opacity-100" /></h3>
                    <p className="mt-2 text-sm leading-relaxed text-primary-foreground/65">{ind.text}</p>
                  </div>
                </Link>
              ))}
            </div>
            <p className="mt-10 text-center text-sm text-primary-foreground/70">Don&apos;t see your industry? <Link to="/industries" className="font-semibold text-primary-foreground underline underline-offset-4 hover:text-brand">Explore All Industries.</Link></p>
          </div>
        </div>
      </section>

      {/* SEO GROWTH FRAMEWORK */}
      <section aria-labelledby="seo-growth-framework-heading" className="bg-background py-16 md:py-24">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-16">
            <div>
              <Eyebrow>How We Work</Eyebrow>
              <h2 id="seo-growth-framework-heading" className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">Five Steps From Site Audit To<br className="hidden sm:block" /> <span className="text-brand">Inbound Sales.</span></h2>
            </div>
            <p className="max-w-md border-l-2 border-brand pl-5 text-base leading-relaxed text-muted-foreground">A repeatable five-step execution process built to capture high-intent searches across Google and AI.</p>
          </div>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5 lg:gap-0">
            {growthFramework.map((step, index) => (
              <li key={step.title} className={`relative min-w-0 ${["lg:pt-32", "lg:pt-24", "lg:pt-16", "lg:pt-8", "lg:pt-0"][index]} ${index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
                <div className={`relative flex h-full flex-col border-t-2 px-5 pb-7 pt-6 sm:px-6 ${index === 4 ? "rounded-b-lg border-brand bg-brand text-primary-foreground" : "border-brand bg-muted/40 text-foreground lg:border-r lg:border-r-border"}`}>
                  <div className="flex items-center justify-between gap-3">
                    <span className={`text-5xl font-semibold leading-none ${index === 4 ? "text-primary-foreground/40" : "text-brand/25"}`}>0{index + 1}</span>
                    <step.icon aria-hidden="true" className={`h-7 w-7 shrink-0 ${index === 4 ? "text-primary-foreground" : "text-brand"}`} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-7 text-xl font-semibold leading-snug">{step.title}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${index === 4 ? "text-primary-foreground/90" : "text-muted-foreground"}`}>{step.description}</p>
                  <div aria-hidden="true" className={`mt-auto flex items-center gap-3 pt-8 ${index === 4 ? "text-primary-foreground" : "text-brand"}`}>
                    <span className={`h-px flex-1 ${index === 4 ? "bg-primary-foreground/35" : "bg-border"}`} />
                    <ArrowUpRight className="h-5 w-5 shrink-0" />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SeoAchievementsSection />

      {/* TEXT TESTIMONIALS */}
      <section aria-labelledby="seo-testimonials-heading" className="bg-muted/40 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Testimonials</Eyebrow>
            <h2 id="seo-testimonials-heading" className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">What our <span className="text-brand">clients say.</span></h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {textTestimonials.map((testimonial) => (
              <figure key={testimonial.quote} className="flex min-w-0 flex-col rounded-lg border border-border bg-background p-7 md:p-8">
                <Quote aria-hidden="true" className="mb-6 h-9 w-9 text-brand" strokeWidth={1.5} />
                <blockquote className="flex-1 text-lg leading-relaxed text-foreground">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4 text-sm font-semibold text-foreground">{testimonial.company}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <EnquiryPopup open={showEnquiry} onOpenChange={setShowEnquiry} />
    </div>
  );
};
