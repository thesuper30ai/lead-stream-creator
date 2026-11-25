import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  Check,
  FileText,
  GraduationCap,
  Hotel,
  Link2,
  MapPin,
  PenLine,
  Rocket,
  Scale,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { SeoAchievementsSection } from "@/components/landing/SeoAchievementsSection";

import heroImage from "@/assets/seo-reference-hero.jpg";
import evolvingImage from "@/assets/seo-search-evolving.jpg";
import partnerImage from "@/assets/seo-growth-partner.jpg";
import realGrowthImage from "@/assets/seo-real-growth-workspace.jpg";
import featuredSearchImage from "@/assets/seo-featured-ai-search.jpg";
import bookMyScansReport from "@/assets/seo-reports/bookmyscans-report.png";
import suranaReport from "@/assets/seo-reports/surana-report.png";
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

const services = [
  { icon: Search, title: "Technical SEO", text: "We fix crawlability, site speed, indexing and Core Web Vitals so search engines can access every important page. A clean technical foundation ensures nothing holds your rankings back." },
  { icon: FileText, title: "On-Page SEO", text: "From title tags and meta descriptions to heading structure, internal links and schema markup — every page is optimised around the keywords your buyers actually search for." },
  { icon: PenLine, title: "Content Strategy", text: "We plan and produce high-quality content that answers real search intent. Blogs, service pages and landing pages designed to rank, build trust and convert readers into enquiries." },
  { icon: Link2, title: "Authority Building", text: "Earn relevant backlinks, citations and brand mentions from trusted websites in your niche. Authority is what separates pages that rank on page one from pages nobody sees." },
  { icon: MapPin, title: "Local SEO", text: "Google Business Profile optimisation, local citations and location pages that put you in front of nearby customers exactly when they are ready to call, visit or book." },
  { icon: Sparkles, title: "AEO — Answer Engine Optimization", text: "Structure your content so AI assistants like ChatGPT, Perplexity and Google's AI Overviews quote your brand directly in their answers, not your competitors'." },
  { icon: BrainCircuit, title: "GEO — Generative Engine Optimization", text: "We strengthen your entity signals, reviews and topical authority so generative engines recognise your business as a credible source and recommend it across AI search." },
  { icon: Smartphone, title: "ASO — App Store Optimization", text: "Keyword-optimised app titles, descriptions and visuals that improve your visibility in the App Store and Play Store, driving more organic installs without extra ad spend." },
  { icon: ShoppingBag, title: "E-commerce SEO", text: "Product and category page optimisation, faceted navigation handling and content that turns organic search into a consistent, low-cost sales channel for your store." },
  { icon: BarChart3, title: "SEO Analytics & Reporting", text: "Transparent dashboards and monthly reports that connect rankings to traffic, leads and revenue — so you always know exactly what your SEO investment is returning." },
];

const process = [
  ["01", "Discover", "Understand your business"],
  ["02", "Audit", "Technical and competitor analysis"],
  ["03", "Strategy", "Build a custom SEO roadmap"],
  ["04", "Implement", "On-page, content and technical fixes"],
  ["05", "Grow", "Build authority and expand reach"],
  ["06", "Measure", "Track performance and ROI"],
];

const clientLogos = [
  { src: magicbricksClientLogo, name: "Magicbricks" },
  { src: bhrighuLogo, name: "Bhrighu Academy" },
  { src: mamaearthClientLogo, name: "Mamaearth" },
  { src: jainLogo, name: "Jain University" },
  { src: upgradClientLogo, name: "upGrad" },
  { src: harvestClientLogo, name: "Harvest International School" },
  { src: tata1mgLogo, name: "Tata 1mg" },
  { src: smrLogo, name: "SMR University" },
  { src: shriramLogo, name: "Shriram Properties" },
  { src: atriaLogo, name: "Atria Institute of Technology" },
  { src: lancesoftLogo, name: "Lancesoft" },
];

const results = [
  {
    name: "Book My Scans",
    type: "Healthcare platform",
    image: bookMyScansReport,
    slug: "book-my-scans",
    metrics: [["+320%", "Organic traffic"], ["1,200+", "Keywords"], ["+18", "Authority"]],
  },
  {
    name: "Surana Educational Institutions",
    type: "Education group",
    image: suranaReport,
    slug: "surana-educational",
    metrics: [["+195%", "Organic traffic"], ["850+", "Keywords"], ["+140%", "Lead growth"]],
  },
];

const aiSearchSteps = [
  { icon: FileText, number: "01", title: "Optimize for AI", text: "Structure content for AI discovery" },
  { icon: BrainCircuit, number: "02", title: "Build Trust Signals", text: "Strengthen topical authority" },
  { icon: Link2, number: "03", title: "Earn Citations", text: "Become a trusted source" },
  { icon: BarChart3, number: "04", title: "Monitor Visibility", text: "Track search and AI presence" },
];

export const AiSeoReferencePage = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);


  const openAudit = () => setShowEnquiry(true);

  return (
    <>
      <section className="relative isolate min-h-[720px] overflow-hidden bg-foreground lg:min-h-[760px]">
        <img src={heroImage} alt="Search performance workspace" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover object-[68%_center]" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/5" />
        <div className="container relative mx-auto flex min-h-[720px] items-center px-4 py-16 sm:px-6 lg:min-h-[760px] lg:px-8">
          <div className="max-w-2xl pt-8">
            <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-brand"> SEO · AEO · GEO · AI Search</p>
            <h1 className="text-4xl font-semibold leading-[1.04] text-primary-foreground sm:text-5xl lg:text-7xl">
              Be Found<br />Where It Matters.<br />
              <span className="text-brand">Turn Searches<br />into Real Growth.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
              We help businesses grow with SEO, AI search optimization and high-quality content that drives traffic, leads and revenue.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={openAudit} size="lg" className="h-12 rounded-full bg-brand px-7 text-primary-foreground hover:bg-brand-dark">
                Get My Free SEO Audit <ArrowRight />
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-full border-primary-foreground/35 bg-transparent px-7 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link to="/our-work">View Case Studies</Link>
              </Button>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs text-primary-foreground/70">
              {["No obligation", "Expert analysis", "Actionable insights"].map((item) => (
                <span key={item} className="flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand"><Check className="h-3 w-3 text-primary-foreground" /></span>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-border bg-background py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-5 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3 md:mb-6">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((item) => <Star key={item} className="h-4 w-4 fill-brand text-brand" />)}
            </div>
            <p className="text-sm font-medium text-foreground">Trusted by <span className="font-bold text-brand">250+ Brands</span> across industries</p>
          </div>
          <div className="overflow-hidden">
            <div className="flex animate-marquee gap-5" style={{ width: "max-content" }}>
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div key={`${client.name}-${index}`} className="flex shrink-0 items-center justify-center rounded-xl border border-border bg-muted/40 px-5 py-3">
                  <img src={client.src} alt={client.name} className="h-14 w-auto object-contain" loading="lazy" decoding="async" width="96" height="64" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 pt-4 md:mt-8 md:gap-8 md:pt-5">
            {[["300%+", "Avg. Traffic Growth"], ["50+", "AI Audits Delivered"], ["$2M+", "Revenue Generated"], ["4.8/5", "Client Rating"]].map(([value, label], index) => (
              <div key={label} className="contents">
                {index > 0 && <div className="hidden h-8 w-px bg-border sm:block" />}
                <div className="text-center"><p className="text-2xl font-bold text-foreground">{value}</p><p className="text-xs text-muted-foreground">{label}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand"> The new search reality</p>
            <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-5xl">Search is evolving.<br />Are you visible?</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Your customers search on Google, AI tools and local platforms. We help your brand show up everywhere they are looking.</p>
            <Button onClick={openAudit} size="lg" className="mt-7 h-12 rounded-full bg-brand px-7 text-primary-foreground hover:bg-brand-dark">Get My Free SEO Audit <ArrowRight /></Button>
          </div>
          <img src={evolvingImage} alt="People discovering businesses through search" width={1100} height={900} loading="lazy" className="w-full rounded-md object-cover" />
        </div>
      </section>

      <section className="dark relative overflow-hidden bg-background py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.45)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.45)_1px,transparent_1px)] bg-[size:52px_52px]" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">Industries We Serve</p>
            <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">Built for ambitious businesses ready to grow.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">AI-powered digital marketing shaped around the buying journey, competition, and opportunities in your market.</p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Link key={industry.label} to={industry.href} className="group flex min-h-[172px] gap-5 rounded-2xl border border-border bg-card/90 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-brand/60 hover:bg-card">
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-brand transition duration-300 group-hover:bg-brand group-hover:text-primary-foreground ${index === 0 ? "bg-brand" : "bg-brand/15"}`}>
                  <industry.icon className={`h-5 w-5 ${index === 0 ? "text-primary-foreground" : ""}`} />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className={`text-lg font-semibold transition-colors ${index === 0 ? "text-brand" : "text-foreground group-hover:text-brand"}`}>{industry.label}</h3>
                    <ArrowRight className="h-4 w-4 text-brand opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{industry.text}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-9 text-center">
            <p className="text-sm text-muted-foreground">Don&apos;t see your industry? We work with all growth-focused businesses.</p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-brand px-7 text-primary-foreground hover:bg-brand-dark"><Link to="/contact-us#contact-form-section">Get a Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-border bg-transparent px-7 text-foreground hover:bg-muted"><Link to="/industries">Explore All Industries <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">Our services</p>
            <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-5xl">Everything you need for higher rankings and real business growth.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-md border border-border bg-background p-6 transition-colors hover:bg-brand-light/40">
                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-brand-light text-brand"><service.icon className="h-5 w-5" /></span>
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button onClick={openAudit} size="lg" className="h-12 rounded-full bg-brand px-8 text-primary-foreground hover:bg-brand-dark">
              Let's Start Ranking <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-foreground">
        <div className="grid min-h-[520px] lg:grid-cols-2">
          <div className="flex items-center px-5 py-16 sm:px-10 lg:px-[max(2.5rem,calc((100vw-1400px)/2+2rem))]">
            <div className="max-w-xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">Why choose The Super 30</p>
              <h2 className="text-3xl font-semibold leading-tight text-primary-foreground md:text-5xl">More than an SEO agency — your growth partner.</h2>
              <p className="mt-5 leading-relaxed text-primary-foreground/65">A team of specialists combining search expertise, AI visibility and accountable execution around your business goals.</p>
              <Button onClick={openAudit} size="lg" className="mt-7 h-12 rounded-full bg-brand px-7 text-primary-foreground hover:bg-brand-dark">Get My Free SEO Audit <ArrowRight /></Button>
              <div className="mt-8 flex flex-wrap gap-5 text-xs text-primary-foreground/70">
                {["Data-driven strategy", "Transparent reporting", "Business-first approach"].map((item) => <span key={item} className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand" />{item}</span>)}
              </div>
            </div>
          </div>
          <img src={partnerImage} alt="The Super 30 SEO team collaborating" width={1200} height={800} loading="lazy" className="h-full min-h-[420px] w-full object-cover object-center" />
        </div>
      </section>

      <section className="bg-background">
        <div className="grid lg:grid-cols-2">
          <div className="min-h-[520px] overflow-hidden bg-muted">
            <img src={realGrowthImage} alt="Organic search growth shown in a modern workspace" width={1200} height={1008} loading="lazy" className="h-full w-full object-cover object-center" />
          </div>
          <div className="flex items-center px-5 py-14 sm:px-10 lg:px-16">
            <div className="w-full max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">Results that matter</p>
              <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-5xl">Real businesses.<br />Real growth.</h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {results.map((result) => (
                  <Link key={result.name} to={`/report/${result.slug}`} className="group overflow-hidden rounded-md border border-border bg-background">
                    <div className="aspect-[16/7] overflow-hidden bg-muted"><img src={result.image} alt={`${result.name} SEO report`} loading="lazy" className="h-full w-full object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.02]" /></div>
                    <div className="p-5">
                      <p className="text-xs font-medium text-muted-foreground">{result.type}</p>
                      <h3 className="mt-1 text-base font-semibold text-foreground">{result.name}</h3>
                      <div className="mt-4 grid grid-cols-3 gap-2 border-y border-border py-4">
                        {result.metrics.map(([value, label]) => <div key={label}><p className="text-lg font-semibold text-foreground">{value}</p><p className="mt-1 text-[10px] leading-tight text-muted-foreground">{label}</p></div>)}
                      </div>
                      <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-brand">Read case study <ArrowRight className="h-3 w-3" /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
            <div><p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">Our process</p><h2 className="text-3xl font-semibold leading-tight text-foreground md:text-5xl">A simple, proven<br />path to growth.</h2></div>
            <p className="max-w-md text-muted-foreground md:justify-self-end">From audit to scale, we follow a structured process designed for long-term search growth.</p>
          </div>
          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
            <div className="absolute left-0 right-0 top-3 hidden h-px bg-border lg:block" />
            {process.map(([number, title, copy]) => <div key={number} className="relative"><span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-brand text-[10px] font-semibold text-primary-foreground">{number}</span><h3 className="mt-5 font-semibold text-foreground">{title}</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-background">
          <div className="relative min-h-[500px] overflow-hidden bg-foreground">
            <img src={featuredSearchImage} alt="AI search optimization workspace" width={1600} height={912} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-transparent" />
            <div className="container relative mx-auto flex min-h-[500px] items-center px-4 py-14 sm:px-6 lg:px-8">
              <div className="max-w-xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand">Featured service</p>
                <h2 className="text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl md:text-5xl">AI Search &amp;<br /><span className="text-brand">Intent Mapping</span></h2>
                <p className="mt-5 max-w-lg leading-relaxed text-primary-foreground/70">Understand how AI systems interpret search queries and map your content to user intent. We help your brand appear in conversations, not just traditional search results.</p>
                <ul className="mt-7 space-y-3 text-sm text-primary-foreground/80">
                  {["AI query analysis and intent classification", "Semantic search optimization", "User journey mapping for AI platforms"].map((item) => (
                    <li key={item} className="flex items-center gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/15"><Check className="h-4 w-4 text-brand" /></span>{item}</li>
                  ))}
                </ul>
                <Button onClick={openAudit} size="lg" className="mt-8 h-12 rounded-full bg-brand px-7 text-primary-foreground hover:bg-brand-dark">Map My AI Visibility <ArrowRight /></Button>
              </div>
            </div>
          </div>

          <div className="border-y border-border bg-background">
            <div className="container mx-auto grid px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
            <div className="border-b border-border py-8 sm:py-10 lg:border-b-0 lg:border-r lg:pr-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand"> AI visibility</p>
              <h3 className="text-2xl font-semibold leading-tight text-foreground sm:text-3xl">AI Prompt &amp;<br />Generative Search Optimization</h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">Optimize your content to appear in AI-generated answers and become a trusted source that language models can understand and cite.</p>
              <Button onClick={openAudit} variant="outline" className="mt-6 rounded-full border-brand text-brand hover:bg-brand hover:text-primary-foreground">Get AI-Ready <ArrowRight /></Button>
            </div>
            <div className="grid gap-px bg-border sm:grid-cols-2 xl:grid-cols-4">
              {aiSearchSteps.map((step) => (
                <article key={step.number} className="bg-background p-6 sm:p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-light text-brand"><step.icon className="h-5 w-5" /></span>
                  <p className="mt-7 text-xs font-semibold text-brand">{step.number}</p>
                  <h4 className="mt-2 font-semibold text-foreground">{step.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </article>
              ))}
            </div>
            </div>
          </div>
      </section>

      <SeoAchievementsSection />


      <section className="relative overflow-hidden bg-foreground py-16 md:py-20">
        <div className="absolute inset-0 opacity-25"><img src={heroImage} alt="" loading="lazy" className="h-full w-full object-cover object-bottom" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/95 to-foreground/70" />
        <div className="container relative mx-auto grid gap-8 px-4 sm:px-6 md:grid-cols-2 md:items-end lg:px-8">
          <div><p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand"> Ready to grow?</p><h2 className="text-3xl font-semibold leading-tight text-primary-foreground md:text-5xl">Let’s build your<br />search growth strategy.</h2></div>
          <div className="md:justify-self-end"><p className="max-w-lg text-sm leading-relaxed text-primary-foreground/65">Get a clear view of your current search visibility, biggest opportunities and the actions that will drive qualified growth.</p><div className="mt-6 flex flex-col gap-3 sm:flex-row"><Button onClick={openAudit} size="lg" className="h-12 rounded-full bg-brand px-7 text-primary-foreground hover:bg-brand-dark">Get My Free SEO Audit <ArrowRight /></Button><Button asChild variant="outline" size="lg" className="h-12 rounded-full border-primary-foreground/35 bg-transparent px-7 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><Link to="/booking">Book a Strategy Call</Link></Button></div></div>
        </div>
      </section>

      <EnquiryPopup open={showEnquiry} onOpenChange={setShowEnquiry} />
    </>
  );
};