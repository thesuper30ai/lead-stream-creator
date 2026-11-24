import { lazy, Suspense, useState } from "react";
import { SeoAchievementsSection } from "@/components/landing/SeoAchievementsSection";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,

  Bot,
  BriefcaseBusiness,
  Building2,
  CirclePlay,
  Code2,
  Eye,
  GraduationCap,
  HeartPulse,
  Hotel,
  Rocket,
  Scale,
  MapPin,
  MessageCircle,
  Megaphone,
  Palette,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  Stethoscope,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { WorkPortfolioTabs } from "@/components/work/WorkPortfolioTabs";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/home-agency-team.jpg";
import strategyImage from "@/assets/home-strategy-session.jpg";
import seoTeamImage from "@/assets/home-seo-team.jpg";
import aiSeoImage from "@/assets/services/ai-seo-card.jpg";
import socialImage from "@/assets/services/social-media-card.jpg";
import webImage from "@/assets/services/web-design-card.jpg";
import emailImage from "@/assets/services/email-marketing-card.jpg";
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
import lancesoftLogo from "@/assets/clients/lancesoft.png";
import amitTeam from "@/assets/team/amit-singh.png";
import mayankTeam from "@/assets/team/mayank-1.png";
import praveenTeam from "@/assets/team/praveen-1.png";
import harshavardhanTeam from "@/assets/team/harshavardhan.png";
import chandrasekharTeam from "@/assets/team/chandrashekar.png";
import anandTeam from "@/assets/team/anand-3.png";
import likhithTeam from "@/assets/team/likith-1.png";

const BlogSection = lazy(() => import("@/components/landing/BlogSection").then((m) => ({ default: m.BlogSection })));

const services = [
  { icon: Search, title: "AI SEO", text: "Build long-term visibility across Google, AI search, and answer engines with technical SEO, content clusters, authority building, and intent-focused optimization.", href: "/seo-company-bangalore", image: aiSeoImage },
  { icon: Target, title: "Lead Generation", text: "Turn high-intent traffic into qualified prospects through targeted paid campaigns, conversion-focused landing pages, lead nurturing workflows, and continuous funnel optimization.", href: "/lead-generation-agency-bangalore", image: strategyImage },
  { icon: Megaphone, title: "Social Media", text: "Create a recognizable brand presence across every social touchpoint with platform strategy, content calendars, community management, and performance-driven paid social campaigns.", href: "/social-media-marketing-agency-bangalore", image: socialImage },
  { icon: Palette, title: "Design & Creative", text: "Give campaigns the visual clarity and creative strength they need to earn attention, with brand-aligned design systems, scroll-stopping social creatives, and conversion-focused visual assets.", href: "/design-agency-bangalore", image: emailImage },
  { icon: Bot, title: "AI & Automation", text: "Connect faster workflows, sharper insights, and smarter customer communication with AI-powered automation, predictive analytics, and integrated marketing operations across channels.", href: "/digital-marketing-agency-bangalore", image: strategyImage },
  { icon: Code2, title: "Web Design & CRO", text: "Build fast, persuasive digital experiences designed to move visitors toward action, combining UX design, conversion rate optimization, and performance-focused development.", href: "/website-design-company-bangalore", image: webImage },
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

const teamMembers = [
  { name: "Amit Singh", expertise: "Co-Founder", category: "Strategy", image: amitTeam },
  { name: "Mayank", expertise: "VP - Business Growth", category: "Strategy", image: mayankTeam },
  { name: "Praveen", expertise: "Senior Creative Manager", category: "Creative", image: praveenTeam },
  { name: "Harshavardhan", expertise: "Graphic Designer", category: "Creative", image: harshavardhanTeam },
  { name: "G. Chandrasekhar", expertise: "Team Leader - Digital Marketing", category: "Strategy", image: chandrasekharTeam },
  { name: "Anand Kumar", expertise: "Performance Marketing Manager", category: "Performance", image: anandTeam },
  { name: "Likhith P", expertise: "Video Editor", category: "Creative", image: likhithTeam },
];

const teamCategories = ["All", "Strategy", "Performance", "Creative"];

const teamPastels = [
  { card: "bg-[#FDE2E4]", blob: "bg-[#F9BEC7]" },
  { card: "bg-[#D8F3DC]", blob: "bg-[#95D5B2]" },
  { card: "bg-[#FFF3C4]", blob: "bg-[#FDE68A]" },
  { card: "bg-[#E5DEFF]", blob: "bg-[#C4B5FD]" },
  { card: "bg-[#D7E3FC]", blob: "bg-[#A5C4F3]" },
  { card: "bg-[#FFE5D9]", blob: "bg-[#FFC8A2]" },
  { card: "bg-[#CFF7E5]", blob: "bg-[#7FE3C0]" },
  { card: "bg-[#FCE1F0]", blob: "bg-[#F5A8D0]" },
];

const clientLogos = [
  { src: magicbricksLogo, name: "Magicbricks", industry: "Real Estate" },
  { src: bhrighuLogo, name: "Bhrighu Academy", industry: "Education" },
  { src: mamaearthLogo, name: "Mamaearth", industry: "D2C / E-commerce" },
  { src: jainLogo, name: "Jain University", industry: "Education" },
  { src: upgradLogo, name: "upGrad", industry: "Education" },
  { src: harvestLogo, name: "Harvest International School", industry: "Education" },
  { src: tata1mgLogo, name: "Tata 1mg", industry: "Healthcare" },
  { src: smrLogo, name: "SMR University", industry: "Education" },
  { src: shriramLogo, name: "Shriram Properties", industry: "Real Estate" },
  { src: atriaLogo, name: "Atria Institute of Technology", industry: "Education" },
  { src: lancesoftLogo, name: "Lancesoft", industry: "Healthcare" },
];



const heroUsps = [
  { icon: BarChart3, label: "Data-driven strategies" },
  { icon: Bot, label: "AI-powered execution" },
  { icon: Eye, label: "Transparent reporting" },
  { icon: TrendingUp, label: "Focused on your ROI" },
];

const seoTeamSkills = [
  { icon: Search, title: "SEO", text: "Search Rankings" },
  { icon: MessageCircle, title: "AEO", text: "Answer Engines" },
  { icon: Bot, title: "AIO", text: "AI Overviews" },
  { icon: MapPin, title: "GEO", text: "Local & Maps" },
  { icon: BarChart3, title: "More", text: "Across Platforms" },
];

const whySuper30 = [
  {
    icon: Users,
    title: "30+ Expert Marketers",
    text: "A focused team of digital specialists bringing strategy, creative, media, and technology together.",
  },
  {
    icon: Bot,
    title: "AI-Powered Strategies",
    text: "We use AI tools and automation to make campaigns smarter, faster, and more responsive.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Growth",
    text: "Every campaign is guided by clear performance signals, testing, and measurable business goals.",
  },
  {
    icon: Zap,
    title: "Fast & Flexible",
    text: "Agile execution, transparent reporting, and strategies that adapt as your priorities change.",
  },
];

const SectionIntro = ({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) => (
  <div className="max-w-2xl">
    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">— {eyebrow}</p>
    <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">{title}</h2>
    {copy && <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">{copy}</p>}
  </div>
);

const Home = () => {
  const [teamCategory, setTeamCategory] = useState("All");
  const [activeMember, setActiveMember] = useState(teamMembers[0].name);
  const visibleTeam = teamCategory === "All" ? teamMembers : teamMembers.filter((member) => member.category === teamCategory);
  return (
  <>
    <Helmet>
      <title>Digital Marketing Agency &amp; AI Growth Company | TheSuper30</title>
      <meta name="description" content="A leading AI-driven digital marketing agency helping businesses achieve real ROI and scalable growth with proven strategies. Book a free consultation now." />
      <meta name="keywords" content="Digital Marketing Agency, Digital Marketing Company, AI digital marketing agency, AI Digital Marketing Company, AI based digital marketing agency" />
      <link rel="canonical" href="https://www.thesuper30.ai/" />
      <meta property="og:title" content="Stop Guessing. Start Growing With AI-Powered Marketing." />
      <meta property="og:description" content="From strategy to execution, Super 30 delivers measurable revenue growth. Book your free call now." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.thesuper30.ai/" />
      <meta property="og:image" content="https://www.thesuper30.ai/super30-social-logo.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Stop Guessing. Start Growing With AI-Powered Marketing." />
      <meta name="twitter:description" content="From strategy to execution, Super 30 delivers measurable revenue growth. Book your free call now." />
      <meta name="twitter:image" content="https://www.thesuper30.ai/super30-social-logo.jpg" />
      <meta name="robots" content="index, follow" />
    </Helmet>

    <Navbar />
    <main className="min-h-screen bg-background pt-16 md:pt-20">
      <section className="relative overflow-hidden bg-background lg:min-h-[590px]">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-0">
          <div className="relative h-[330px] overflow-hidden sm:h-[390px] lg:absolute lg:inset-y-0 lg:right-8 lg:h-auto lg:w-[55%]">
            <img src={heroImage} alt="Digital marketing team collaborating in a bright office" className="absolute inset-0 h-full w-full object-cover object-center" width={1600} height={1104} fetchPriority="high" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:bg-gradient-to-r lg:from-background lg:via-background/30 lg:to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent lg:h-28" />
            <div className="absolute bottom-5 right-5 rounded-lg border border-border bg-background/95 p-4 shadow-xl backdrop-blur-md sm:bottom-7 sm:right-7 lg:right-0 lg:bottom-10">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-brand-light text-brand"><BarChart3 className="h-6 w-6" /></span>
                <div><p className="text-2xl font-semibold text-foreground">300%+</p><p className="max-w-[125px] text-[11px] leading-snug text-muted-foreground">Average traffic growth</p></div>
              </div>
            </div>
          </div>

          <div className="relative z-10 -mt-1 pb-7 sm:pb-9 lg:mt-0">
            <div className="lg:flex lg:min-h-[590px] lg:w-[45%] lg:flex-col lg:justify-center lg:pr-6 lg:py-12">
            <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-brand/20 bg-brand-light px-3 py-1.5 text-[10px] font-semibold uppercase text-brand sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" /> AI-powered digital marketing agency
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.02] text-foreground sm:text-5xl lg:text-6xl">
              Real Marketing<br />for Real<br /><span className="text-brand">Business Growth.</span>
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              We combine AI, data, and human creativity to help brands get more traffic, more leads, and more revenue.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-brand px-7 text-primary-foreground hover:bg-brand-dark">
                <Link to="/contact-us#contact-form-section">Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-background/75 px-7 backdrop-blur-sm">
                <Link to="/our-work"><CirclePlay className="mr-2 h-4 w-4 fill-brand text-brand" />Watch Our Story</Link>
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4 lg:max-w-[610px]">
              {heroUsps.map(({ icon: Icon, label }) => (
                <div key={label} className="flex min-w-0 items-center gap-2.5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-brand-light text-brand"><Icon className="h-4 w-4" /></span>
                  <span className="text-[11px] font-medium leading-tight text-foreground">{label}</span>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-5 md:mb-6">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm font-medium text-primary-foreground">
              Trusted by <span className="text-brand font-bold">250+ Brands</span> across industries
            </p>
          </div>

          <div className="overflow-hidden">
            <div className="flex gap-5 animate-marquee" style={{ width: "max-content" }}>
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center px-5 py-3 rounded-xl border border-border/20 bg-background/10 backdrop-blur-sm"
                >
                  <img
                    src={client.src}
                    alt={client.name}
                    className="h-14 w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                    width="96"
                    height="64"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-6 md:mt-8 pt-4 md:pt-5">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-foreground">300%+</p>
              <p className="text-xs text-primary-foreground/60">Avg. Traffic Growth</p>
            </div>
            <div className="w-px h-8 bg-border/20 hidden sm:block" />
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-foreground">50+</p>
              <p className="text-xs text-primary-foreground/60">AI Audits Delivered</p>
            </div>
            <div className="w-px h-8 bg-border/20 hidden sm:block" />
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-foreground">$2M+</p>
              <p className="text-xs text-primary-foreground/60">Revenue Generated</p>
            </div>
            <div className="w-px h-8 bg-border/20 hidden sm:block" />
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-foreground">4.8/5</p>
              <p className="text-xs text-primary-foreground/60">Client Rating</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-[1.08fr_1fr] lg:gap-16">
          <div className="relative overflow-hidden rounded-2xl">
            <img src={seoTeamImage} alt="The Super30 SEO team collaborating around a laptop" className="aspect-[4/3] w-full object-cover" width={1408} height={1056} loading="lazy" />
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand">— Our Super30 Team</p>
            <h2 className="text-2xl font-semibold leading-tight text-foreground sm:text-3xl lg:text-4xl">Team of <span className="text-brand">30 SEO Specialists</span></h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">A team of strategists, analysts and creators working together to rank brands higher — across SEO, AEO, AIO, GEO and beyond.</p>

            <div className="mt-9 grid grid-cols-3 border-b border-border pb-8 sm:grid-cols-5">
              {seoTeamSkills.map((skill, index) => (
                <div key={skill.title} className={`px-2 text-center sm:px-3 ${index > 0 ? "border-l border-border" : ""}`}>
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand">
                    <skill.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-foreground sm:text-base">{skill.title}</h3>
                  <p className="mt-1 text-[11px] leading-tight text-muted-foreground sm:text-xs">{skill.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-7">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-brand" />
                <p className="text-xl font-semibold text-foreground sm:text-2xl"><span className="text-3xl sm:text-4xl">10,000+</span> <span className="text-base font-normal text-muted-foreground sm:text-lg">Keywords Ranked for Our Clients</span></p>
              </div>
              <p className="mt-3 text-base text-muted-foreground">Real strategies. Real rankings. Real business growth.</p>
            </div>

            <Button asChild size="lg" className="mt-8 rounded-full bg-brand px-8 text-primary-foreground hover:bg-brand-dark"><Link to="/internet-marketing-agency#about-team">Meet Our Team <ArrowRight className="ml-3 h-5 w-5" /></Link></Button>
          </div>
        </div>
      </section>

      <section className="bg-brand/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">— Why Us</p>
            <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Why We Are Your AI Growth Partner
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We combine human creativity with AI-led insight to anticipate market shifts, sharpen decisions, and help brands grow profitably.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whySuper30.map((item) => (
              <article key={item.title} className="group rounded-lg border border-border bg-background p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand transition duration-300 group-hover:bg-brand group-hover:text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><SectionIntro eyebrow="Our Services" title="End-to-end digital marketing solutions." /><Link to="/digital-marketing-agency-bangalore" className="inline-flex items-center text-sm font-semibold text-brand">View all services <ArrowRight className="ml-2 h-4 w-4" /></Link></div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.title} to={service.href} className="group overflow-hidden rounded-lg border border-border bg-background transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[16/8] overflow-hidden"><img src={service.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" /><div className="absolute inset-0 bg-foreground/10" /></div>
                <div className="p-6"><service.icon className="mb-5 h-6 w-6 text-brand" /><h3 className="text-xl font-semibold text-foreground">{service.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.text}</p><span className="mt-5 inline-flex items-center text-sm font-semibold text-brand">Explore <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="dark relative overflow-hidden bg-background py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.45)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.45)_1px,transparent_1px)] bg-[size:52px_52px]" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">— Industries We Serve</p>
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

      <WorkPortfolioTabs homePreview />

      <SeoAchievementsSection />


      <section className="relative overflow-hidden bg-brand/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">— The people behind the work</p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">Meet Our <span className="text-brand">Super 30</span></h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">Strategists, search specialists, media experts, developers, and designers — one focused team built around your growth.</p>
            </div>
            <Button asChild variant="outline" className="w-fit rounded-full border-border bg-background px-6"><Link to="/internet-marketing-agency#about-team">Meet the whole team <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </div>

          <div className="mt-9 flex gap-2 overflow-x-auto pb-2" aria-label="Filter team by specialty">
            {teamCategories.map((category) => (
              <Button
                key={category}
                type="button"
                size="sm"
                variant={teamCategory === category ? "default" : "outline"}
                className={`shrink-0 rounded-full px-5 ${teamCategory === category ? "bg-brand text-primary-foreground hover:bg-brand-dark" : "border-border bg-background text-foreground hover:border-brand/40 hover:bg-brand-light"}`}
                onClick={() => {
                  setTeamCategory(category);
                  const firstMember = category === "All" ? teamMembers[0] : teamMembers.find((member) => member.category === category);
                  if (firstMember) setActiveMember(firstMember.name);
                }}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {visibleTeam.map((member, index) => {
              const isActive = activeMember === member.name;
              const pastel = teamPastels[index % teamPastels.length];
              return (
                <button
                  key={member.name}
                  type="button"
                  onClick={() => setActiveMember(member.name)}
                  onMouseEnter={() => setActiveMember(member.name)}
                  className={`group relative aspect-[4/5] overflow-hidden rounded-lg border text-left outline-none transition-all duration-500 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:rounded-xl ${pastel.card} ${isActive ? "border-brand shadow-xl" : "border-border/70 shadow-sm hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl"}`}
                  aria-pressed={isActive}
                  aria-label={`View ${member.name}, ${member.expertise}`}
                >
                  <span aria-hidden="true" className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-60 blur-2xl transition-opacity duration-500 sm:h-44 sm:w-44 ${pastel.blob} ${isActive ? "opacity-90" : "group-hover:opacity-90"}`} />
                  <span aria-hidden="true" className={`pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full opacity-40 blur-2xl sm:h-40 sm:w-40 ${pastel.blob}`} />
                  <img src={member.image} alt={`${member.name} at The Super 30`} width={800} height={1000} className={`relative h-full w-full object-cover object-top transition duration-700 motion-reduce:transition-none ${isActive ? "scale-[1.02] saturate-100" : "saturate-[.85] group-hover:scale-[1.02] group-hover:saturate-100"}`} loading="lazy" />
                  <span className={`absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border text-[10px] font-semibold backdrop-blur-md transition-all duration-300 sm:left-5 sm:top-5 ${isActive ? "rotate-0 border-brand bg-brand text-primary-foreground" : "-rotate-12 border-border bg-background/80 text-foreground group-hover:rotate-0 group-hover:border-brand group-hover:bg-brand group-hover:text-primary-foreground"}`}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={`absolute right-3 top-3 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide backdrop-blur-md transition-all duration-300 ${isActive ? "bg-brand text-primary-foreground" : "translate-y-1 bg-background/85 text-foreground opacity-0 group-hover:translate-y-0 group-hover:opacity-100"}`}>{member.category}</span>
                  <div className="absolute inset-x-0 bottom-0 bg-background/95 px-3 py-2 backdrop-blur-sm sm:px-4 sm:py-3">
                    <h3 className="text-sm font-semibold text-foreground sm:text-base">{member.name}</h3>
                    <p className="mt-0.5 max-w-sm text-[11px] leading-snug text-muted-foreground sm:text-xs">{member.expertise}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" className="rounded-full bg-brand px-8 text-primary-foreground hover:bg-brand-dark">
              <Link to="/contact-us#contact-form-section">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-background py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-10 md:px-12 md:py-14 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-wider text-brand">— Let’s grow together</p><h2 className="mt-4 text-3xl font-semibold text-primary-foreground md:text-4xl">Ready to turn your growth goals into a clearer plan?</h2><p className="mt-4 text-base text-primary-foreground/70">Book a free consultation and talk through the opportunities that matter most to your business.</p></div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0"><Button asChild size="lg" className="rounded-full bg-brand text-primary-foreground hover:bg-brand-dark"><Link to="/contact-us#contact-form-section">Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button asChild size="lg" variant="outline-white" className="rounded-full"><a href="tel:+918904150555"><Users className="mr-2 h-4 w-4" />Talk to Our Team</a></Button></div>
          </div>
        </div>
      </section>

      <Suspense fallback={null}><BlogSection /></Suspense>
      <Footer />
    </main>
  </>
  );
};

export default Home;