import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BarChart3, Bot, CheckCircle2, Eye, Phone, Search, Star, Target, TrendingUp, Users, Zap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { WorkPortfolioTabs } from "@/components/work/WorkPortfolioTabs";
import { SeoAchievementsSection } from "@/components/landing/SeoAchievementsSection";
import heroImage from "@/assets/home-agency-team.jpg";
import strategyImage from "@/assets/home-strategy-session.jpg";
import seoTeamImage from "@/assets/home-seo-team.jpg";
import magicbricksLogo from "@/assets/clients/magicbricks.png";
import mamaearthLogo from "@/assets/clients/mamaearth.png";
import upgradLogo from "@/assets/clients/upgrad.png";
import tata1mgLogo from "@/assets/clients/tata1mg.png";
import shriramLogo from "@/assets/clients/shriram-properties.png";
import jainLogo from "@/assets/clients/jain-university.png";
import harvestLogo from "@/assets/clients/harvest-international.png";
import bhrighuLogo from "@/assets/clients/bhrighu-academy.png";
import smrLogo from "@/assets/clients/smr-university.png";
import atriaLogo from "@/assets/clients/atria-institute.png";
import { ClientLogoChips, logoGroups } from "@/components/landing/ClientLogoChips";
import amitTeamJson from "@/assets/team/amit.png";
import mayankTeamJson from "@/assets/team/mayank.png";
import praveenTeamJson from "@/assets/team/praveen.png";
import harshavardhanTeamJson from "@/assets/team/Harshavardhan.png";
const amitTeam = amitTeamJson;
const mayankTeam = mayankTeamJson;
const praveenTeam = praveenTeamJson;
const harshavardhanTeam = harshavardhanTeamJson;

const BlogSection = lazy(() => import("@/components/landing/BlogSection").then((m) => ({ default: m.BlogSection })));

const heroFeatures = [
  { icon: BarChart3, title: "Data-Driven Strategies", text: "Every campaign is guided by clear performance signals and measurable goals." },
  { icon: Bot, title: "AI-Powered Execution", text: "AI tools and automation make campaigns smarter, faster, and more responsive." },
  { icon: TrendingUp, title: "Focused On Your ROI", text: "More traffic, more leads, and more revenue — with transparent reporting." },
];

const services = [
  { title: "AI SEO", href: "/seo-company-bangalore", icon: Search, points: ["Technical SEO & content clusters", "AEO, AIO & GEO visibility", "Authority building"] },
  { title: "Lead Generation", href: "/lead-generation-agency-bangalore", icon: Target, points: ["Targeted paid campaigns", "Conversion-focused landing pages", "Funnel optimization"] },
  { title: "Social Media", href: "/social-media-marketing-agency-bangalore", icon: Users, points: ["Platform strategy & calendars", "Community management", "Performance paid social"] },
  { title: "Design & Creative", href: "/design-agency-bangalore", icon: Eye, points: ["Brand-aligned design systems", "Scroll-stopping creatives", "Conversion visual assets"] },
  { title: "AI & Automation", href: "/digital-marketing-agency-bangalore", icon: Bot, points: ["Workflow automation", "Predictive analytics", "Integrated marketing ops"] },
  { title: "Web Design & CRO", href: "/website-design-company-bangalore", icon: TrendingUp, points: ["UX design", "Conversion rate optimization", "Performance-focused builds"] },
];

const steps = [
  { title: "Discover", text: "We audit your website, search presence, and competitors to uncover the biggest growth gaps." },
  { title: "Strategize", text: "We build a data-driven plan across SEO, ads, social, and content around your business goals." },
  { title: "Execute", text: "Our 30-member team implements with AI-powered tools, creative, and continuous optimization." },
  { title: "Measure & Grow", text: "Transparent reporting on traffic, leads, and revenue — then we double down on what works." },
];

const whyUs = [
  { icon: Users, title: "30+ Expert Marketers", text: "Strategy, creative, media, and technology in one focused team." },
  { icon: Bot, title: "AI-Powered Strategies", text: "Smarter, faster, more responsive campaigns." },
  { icon: BarChart3, title: "Data-Driven Growth", text: "Guided by testing and measurable goals." },
  { icon: Zap, title: "Fast & Flexible", text: "Agile execution that adapts as priorities change." },
];

const logos = [magicbricksLogo, mamaearthLogo, upgradLogo, tata1mgLogo, shriramLogo, jainLogo, harvestLogo, bhrighuLogo, smrLogo, atriaLogo];

const Eyebrow = ({ children }: { children: string }) => (
  <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">{children}</p>
);

const PillCta = ({ to, children, href }: { to?: string; href?: string; children: string }) => {
  const cls = "group inline-flex items-center gap-3 rounded-full bg-brand py-1.5 pl-6 pr-1.5 text-sm font-semibold text-primary-foreground transition hover:bg-brand-dark";
  const inner = (<>{children}<span className="grid h-9 w-9 place-items-center rounded-full bg-background text-brand transition group-hover:rotate-45"><ArrowUpRight className="h-4 w-4" /></span></>);
  return href ? <a href={href} className={cls}>{inner}</a> : <Link to={to!} className={cls}>{inner}</Link>;
};

const Home3 = () => (
  <>
    <Helmet>
      <title>Homepage 3 | TheSuper30</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <Navbar />
    <main className="relative min-h-screen bg-foreground pt-16 md:pt-20">
      {/* Page-wide grid mesh + soft brand gradient */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(to right, rgb(255 255 255) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255) 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0" style={{ background: 'radial-gradient(60% 40% at 50% 0%, hsl(var(--brand) / 0.10), transparent 70%), radial-gradient(50% 35% at 50% 100%, hsl(var(--brand) / 0.08), transparent 70%)' }} />
      <div className="relative z-10">
      {/* HERO */}
      <section className="relative overflow-hidden bg-foreground">
        <img src={heroImage} alt="Digital marketing team collaborating" className="absolute inset-0 h-full w-full object-cover" width={1600} height={1104} fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/75 to-foreground/40" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-foreground to-transparent" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-10 pb-12 pt-28 lg:grid-cols-[1.6fr_1fr] lg:pt-48">
            <div>
              <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground"><span className="h-2 w-2 rounded-full bg-brand" /> AI-powered digital marketing agency</p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">Real Marketing for Real <span className="text-brand">Business Growth.</span></h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">We combine AI, data, and human creativity to help brands get more traffic, more leads, and more revenue.</p>
              <div className="mt-8"><PillCta to="/contact-us#contact-form-section">Book a Free Consultation</PillCta></div>
            </div>
            <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-7 backdrop-blur-md">
              <div className="flex items-start justify-between"><Search className="h-12 w-12 text-primary-foreground" strokeWidth={1.3} /><p className="text-5xl font-semibold text-primary-foreground">300%+</p></div>
              <h3 className="mt-8 text-xl font-semibold text-primary-foreground">Average Traffic Growth</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">Measured across our clients' AI SEO and lead generation programs.</p>
            </div>
          </div>
          <div className="grid gap-8 border-t border-primary-foreground/15 py-10 md:grid-cols-3">
            {heroFeatures.map((f) => (
              <div key={f.title} className="flex gap-4">
                <f.icon className="h-10 w-10 shrink-0 text-brand" strokeWidth={1.4} />
                <div><h3 className="text-lg font-semibold text-primary-foreground">{f.title}</h3><p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/75">{f.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-t border-primary-foreground/10 bg-foreground py-16 md:py-24">
        <div className="container mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="relative grid grid-cols-[1.3fr_1fr] gap-4">
            <img src={seoTeamImage} alt="The Super30 SEO team" className="mt-16 h-[420px] w-full rounded-3xl object-cover sm:h-[560px]" width={1408} height={1056} loading="lazy" />
            <div className="flex flex-col gap-4">
              <img src={heroImage} alt="Team collaborating" className="h-[220px] w-full rounded-3xl object-cover sm:h-[300px]" loading="lazy" />
              <img src={strategyImage} alt="Strategy session" className="h-[220px] w-full rounded-3xl object-cover sm:h-[320px]" loading="lazy" />
            </div>
            <Link to="/internet-marketing-agency" aria-label="More about us" className="absolute left-[56%] top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-foreground bg-brand text-primary-foreground sm:h-40 sm:w-40">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_14s_linear_infinite]"><defs><path id="c" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" /></defs><text className="fill-current text-[9px] font-semibold tracking-[1.5px]"><textPath href="#c">More About Us * More About Us * More About Us *</textPath></text></svg>
              <span className="grid h-11 w-11 place-items-center rounded-full bg-background text-brand"><ArrowRight className="h-5 w-5" /></span>
            </Link>
          </div>
          <div>
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground"><span className="h-2 w-2 rounded-full bg-brand" /> Our Super30 Team</p>
            <h2 className="text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">Team of <span className="text-brand">30 SEO Specialists</span></h2>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">A team of strategists, analysts and creators working together to rank brands higher — across SEO, AEO, AIO, GEO and beyond.</p>
            <div className="mt-8 grid gap-6 border-b border-primary-foreground/15 pb-8 sm:grid-cols-2">
              <div className="flex items-center gap-4"><Target className="h-12 w-12 shrink-0 text-brand" strokeWidth={1.3} /><h3 className="text-xl font-semibold leading-snug text-primary-foreground">Data-Driven Strategies</h3></div>
              <div className="flex items-center gap-4"><Eye className="h-12 w-12 shrink-0 text-brand" strokeWidth={1.3} /><h3 className="text-xl font-semibold leading-snug text-primary-foreground">Transparent Reporting</h3></div>
            </div>
            <div className="mt-8 grid items-center gap-6 sm:grid-cols-[1.4fr_1fr]">
              <div>
                <h3 className="text-xl font-semibold text-primary-foreground">AI-Powered Execution</h3>
                <p className="mt-3 leading-relaxed text-primary-foreground/70">Smarter, faster campaigns with AI tools, automation, and a team focused on your ROI.</p>
                <div className="mt-7"><PillCta to="/internet-marketing-agency#about-team">Meet Our Team</PillCta></div>
              </div>
              <div className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-7">
                <TrendingUp className="h-10 w-10 text-brand" strokeWidth={1.4} />
                <p className="mt-8 text-3xl font-semibold text-primary-foreground">10,000+</p>
                <p className="mt-1 font-medium text-primary-foreground/80">Keywords Ranked for Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative border-t border-primary-foreground/10 bg-foreground py-16 md:py-24">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground"><span className="h-2 w-2 rounded-full bg-brand" /> Our Services</p>
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">End-to-end <span className="text-brand">digital marketing</span> solutions.</h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-md text-base leading-relaxed text-primary-foreground/75">AI-powered SEO, lead generation, creative, and automation — everything your brand needs to grow traffic, leads, and revenue in one team.</p>
              <div className="mt-6"><PillCta to="/digital-marketing-agency-bangalore">View All Services</PillCta></div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.title} to={s.href} className="group flex flex-col rounded-3xl border border-primary-foreground/10 bg-foreground-card p-8 transition hover:border-brand/40">
                <s.icon className="h-12 w-12 text-brand" strokeWidth={1.2} />
                <h3 className="mt-7 text-2xl font-semibold leading-snug text-primary-foreground">{s.title}</h3>
                <div className="mt-7 border-t border-primary-foreground/15 pt-6">
                  <ul className="space-y-3">{s.points.map((p) => <li key={p} className="flex items-center gap-3 text-sm text-primary-foreground/85"><CheckCircle2 className="h-5 w-5 shrink-0 fill-brand text-primary-foreground" />{p}</li>)}</ul>
                </div>
                <div className="mt-auto border-t border-primary-foreground/15 pt-5">
                  <span className="inline-flex items-center gap-2 font-semibold text-primary-foreground">Learn More <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-primary-foreground transition group-hover:rotate-45"><ArrowUpRight className="h-3.5 w-3.5" /></span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section className="border-t border-primary-foreground/10 bg-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">The Core Principles Behind <span className="text-brand">Market-Leading Brands</span></h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Alignment */}
            <div className="flex flex-col rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-7">
              <div className="relative h-44">
                <img src={strategyImage} alt="Shared strategy with the client" className="absolute left-0 top-4 h-36 w-3/5 rounded-2xl object-cover" loading="lazy" />
                <img src={seoTeamImage} alt="The Super 30 team at work" className="absolute right-0 top-0 h-40 w-1/2 rounded-2xl border-4 border-foreground object-cover" loading="lazy" />
              </div>
              <h3 className="mt-7 text-2xl font-semibold text-primary-foreground">Alignment</h3>
              <p className="mt-3 leading-relaxed text-primary-foreground/70">We pair sharp brand strategists with smart AI to eliminate guesswork.</p>
              <div className="mt-6 border-t border-primary-foreground/15 pt-6">
                <ul className="space-y-3">
                  {["Human-led brand thinking", "True growth partnerships"].map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-primary-foreground/70"><CheckCircle2 className="h-5 w-5 shrink-0 fill-brand text-primary-foreground" />{p}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Transformation */}
            <div className="relative flex flex-col overflow-hidden rounded-3xl border border-brand/30 bg-brand/10 p-7 text-primary-foreground">
              <svg aria-hidden viewBox="0 0 400 400" className="pointer-events-none absolute -right-10 -top-16 h-80 w-80 text-primary-foreground/[0.06]" fill="none" stroke="currentColor" strokeWidth="28" strokeLinecap="round">
                <path d="M20 300 C 120 340, 140 180, 90 120 S 260 40, 300 150 S 220 330, 360 320" />
              </svg>
              <div className="relative">
                <div className="inline-flex items-center gap-3 rounded-full bg-primary-foreground/10 p-1.5 pr-5">
                  <img src={amitTeam} alt="Amit Singh" className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                  <span><span className="block text-sm font-semibold leading-tight">Amit Singh</span><span className="block text-xs text-primary-foreground/70">Co-Founder</span></span>
                </div>
              </div>
              <div className="relative mt-auto pt-40">
                <h3 className="text-2xl font-semibold">Acceleration</h3>
                <p className="mt-3 leading-relaxed text-primary-foreground/80">We turn bold creative ideas and live data into compounding revenue.</p>
                <div className="mt-6 grid grid-cols-2 gap-6 border-t border-primary-foreground/20 pt-6">
                  <div><p className="text-3xl font-semibold">300%+</p><p className="mt-1 text-sm text-primary-foreground/75">Average Traffic Lift</p></div>
                  <div className="border-l border-primary-foreground/20 pl-6"><p className="text-3xl font-semibold">50+</p><p className="mt-1 text-sm text-primary-foreground/75">Growth Audits Delivered</p></div>
                </div>
              </div>
            </div>
            {/* Commitment */}
            <div className="flex flex-col gap-6">
              <img src={heroImage} alt="The team at work" className="h-64 w-full rounded-3xl object-cover lg:[flex:1_1_0px]" loading="lazy" />
              <div className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-7">
                <p className="text-lg font-semibold uppercase leading-snug tracking-wide text-primary-foreground">
                  Built for ambitious brands
                  that refuse to blend
                  into the noise
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-center">
            <span className="text-primary-foreground">Built on conviction, backed by numbers. <Link to="/internet-marketing-agency" className="font-semibold text-brand underline underline-offset-4">See How We Win</Link></span>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative border-t border-primary-foreground/10 bg-foreground py-16 md:py-24">
        <div className="container relative mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative">
            <div className="grid grid-cols-[1fr_1.15fr] items-start gap-4">
              <img src={seoTeamImage} alt="The Super30 team at work" className="mt-20 h-[300px] w-full rounded-3xl object-cover sm:h-[380px]" loading="lazy" />
              <div className="flex flex-col gap-4">
                <img src={strategyImage} alt="Strategy session" className="h-[300px] w-full rounded-3xl object-cover sm:h-[400px]" loading="lazy" />
                <div className="rounded-2xl border-r-4 border-brand bg-primary-foreground/10 p-5 shadow-xl sm:p-6">
                  <h3 className="text-lg font-semibold text-primary-foreground">Comprehensive</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/70">End-to-end growth services across every sector.</p>
                </div>
              </div>
            </div>
            <Link to="/contact-us#contact-form-section" aria-label="Contact us" className="absolute left-[42%] top-6 grid h-28 w-28 -translate-x-1/2 place-items-center rounded-full border-4 border-foreground bg-brand text-primary-foreground sm:h-36 sm:w-36">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_14s_linear_infinite]"><defs><path id="wc" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" /></defs><text className="fill-current text-[9px] font-semibold tracking-[1.5px]"><textPath href="#wc">Contact Us * Contact Us * Contact Us *</textPath></text></svg>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-background text-brand"><ArrowRight className="h-5 w-5" /></span>
            </Link>
          </div>
          <div>
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground"><span className="h-2 w-2 rounded-full bg-brand" /> Why Us</p>
            <h2 className="text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">Why We Are Your <span className="text-brand">AI Growth Partner</span></h2>
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/75">We combine human creativity with AI-led insight to anticipate market shifts, sharpen decisions, and help brands grow profitably.</p>
            <div className="mt-8 grid gap-6 rounded-2xl bg-primary-foreground/10 p-6 sm:grid-cols-2 sm:p-7">
              {whyUs.slice(0, 2).map((w) => (
                <div key={w.title} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand/40 bg-brand/15 text-brand"><w.icon className="h-5 w-5" /></span>
                  <div><h3 className="font-semibold text-primary-foreground">{w.title}</h3><p className="mt-1 text-sm leading-relaxed text-primary-foreground/70">{w.text}</p></div>
                </div>
              ))}
            </div>
            <div className="mt-7 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {["AI-powered keyword & market insights", "SEO and website optimization", "Search-focused content strategy", "Continuous performance monitoring"].map((point) => (
                <p key={point} className="flex items-center gap-2.5 text-sm font-medium text-primary-foreground"><CheckCircle2 className="h-5 w-5 shrink-0 fill-brand text-foreground" />{point}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-primary-foreground/15 pt-8">
              <PillCta to="/internet-marketing-agency">Learn More</PillCta>
              <a href="tel:+918904150555" className="inline-flex items-center gap-4"><span className="grid h-12 w-12 place-items-center rounded-full bg-brand text-primary-foreground"><Phone className="h-5 w-5" /></span><span><span className="block text-sm font-semibold text-primary-foreground">Talk to an SEO Expert</span><span className="text-sm text-primary-foreground/70">+91 89041 50555</span></span></a>
            </div>
          </div>
        </div>
        <div className="container relative mx-auto mt-12 px-4 sm:px-6 lg:px-8">
          <p className="flex flex-wrap items-center justify-center gap-3 text-center text-primary-foreground">
            <ClientLogoChips logos={logoGroups.stripAlt} size="strip" ring="border-foreground" />
            Smarter strategies, better rankings — <Link to="/contact-us#contact-form-section" className="font-semibold text-brand underline underline-offset-4">Get Your SEO Growth Plan.</Link>
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-primary-foreground/10 bg-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground"><span className="h-2 w-2 rounded-full bg-brand" /> How It Works</p>
            <h2 className="text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">AI-Powered for Sustainable<br className="hidden sm:block" /> <span className="text-brand">Business Growth</span></h2>
          </div>
          <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-[92px] hidden border-t border-dashed border-primary-foreground/20 lg:block" />
            {steps.map((s, i) => {
              const icons = [Search, Target, Zap, TrendingUp];
              const Icon = icons[i];
              return (
                <div key={s.title} className="relative text-center">
                  <Icon className="mx-auto h-12 w-12 text-primary-foreground" strokeWidth={1.2} />
                  <p className="relative z-10 mx-auto mt-6 w-fit rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-5 py-1.5 text-sm font-medium text-primary-foreground">Step 0{i + 1}</p>
                  <h3 className="mt-6 text-xl font-semibold text-primary-foreground">{s.title}</h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/70">{s.text}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            {["Intelligent SEO", "Keyword Research", "Content Optimization", "SEO Analytics"].map((tag) => (
              <span key={tag} className="flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-5 py-2 text-sm font-medium text-primary-foreground"><span className="h-1.5 w-1.5 rounded-full bg-brand" />{tag}</span>
            ))}
          </div>
          <p className="mt-8 flex flex-wrap items-center justify-center gap-3 text-center text-primary-foreground">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-primary-foreground"><Phone className="h-4 w-4" /></span>
            Ready to grow your business with AI-powered marketing — <Link to="/contact-us#contact-form-section" className="font-semibold text-brand underline underline-offset-4">Contact Us Now.</Link>
          </p>
        </div>
      </section>

      <SeoAchievementsSection />
      <WorkPortfolioTabs homePreview defaultTab="brand-identity" dark />

      {/* TEAM */}
      <section className="border-t border-primary-foreground/10 bg-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><Eyebrow>The people behind the work</Eyebrow><h2 className="text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">Meet Our <span className="text-brand">Super 30</span></h2></div>
            <PillCta to="/internet-marketing-agency#about-team">Meet the whole team</PillCta>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[{ n: "Amit Singh", r: "Co-Founder", i: amitTeam }, { n: "Mayank", r: "VP - Business Growth", i: mayankTeam }, { n: "Praveen", r: "Senior Creative Manager", i: praveenTeam }, { n: "Harshavardhan", r: "Graphic Designer", i: harshavardhanTeam }].map((m) => (
              <div key={m.n} className="overflow-hidden rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5"><img src={m.i} alt={m.n} width={800} height={1000} className="aspect-[4/5] w-full object-cover object-top" loading="lazy" /><div className="p-4"><h3 className="font-semibold text-primary-foreground">{m.n}</h3><p className="text-sm text-primary-foreground/60">{m.r}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="border-t border-primary-foreground/10 bg-foreground py-16 md:py-24">
        <div className="container mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div>
            <div className="flex gap-1">{[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-5 w-5 fill-brand text-brand" />)}</div>
            <p className="mt-3 text-sm text-primary-foreground/70">4.8/5 Client Rating</p>
            <Eyebrow>Our Clients</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">Trusted by <span className="text-brand">250+ Brands</span> across industries</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
            {logos.map((l, i) => <div key={i} className="grid h-24 place-items-center rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-4"><img src={l} alt="Client logo" className="max-h-12 w-auto object-contain" loading="lazy" /></div>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-primary-foreground/10 bg-foreground pb-16 pt-16 md:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 px-8 py-12 md:flex-row md:items-center md:px-12">
            <div><Eyebrow>Let's grow together</Eyebrow><h2 className="text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">Ready to turn your growth goals into a <span className="text-brand">clearer plan?</span></h2></div>
            <PillCta to="/contact-us#contact-form-section">Book a Free Consultation</PillCta>
          </div>
        </div>
      </section>

      <Suspense fallback={null}><BlogSection dark /></Suspense>
      <Footer />
      </div>
    </main>
  </>
);

export default Home3;
