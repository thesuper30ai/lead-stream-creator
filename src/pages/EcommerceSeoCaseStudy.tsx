import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, Code2, Search, FileText, Layers, Link2, ShoppingBag, TrendingUp, TriangleAlert, Lightbulb, BarChart3, MousePointerClick, IndianRupee, Star, Quote } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import furnitureImage from "@/assets/ecommerce-seo-case-study.jpg";
import mamaearthLogo from "@/assets/clients/mamaearth-transparent.png";
import amitTeamJson from "@/assets/team/amit-singh-card.png";
import praveenTeamJson from "@/assets/team/praveen.png";
const amitTeam = amitTeamJson;
const praveenTeam = praveenTeamJson;
import trafficGrowthChart from "@/assets/case-study/traffic-growth-chart.jpg";
import keywordRankingsDashboard from "@/assets/case-study/keyword-rankings-dashboard.jpg";
import organicClicksChart from "@/assets/case-study/organic-clicks-chart.jpg";
import revenueGrowthChart from "@/assets/case-study/revenue-growth-chart.jpg";
import { campaignSnapshot, clientProblems, solutionsProvided, keywordRankings, trafficGrowth, searchVisibility, seoStrategies, founderTestimonial } from "@/data/ecommerceCaseStudy";
import "./EcommerceSeoCaseStudy.css";

const sections = [
  { id: "performance", label: "Overview" },
  { id: "rankings", label: "Keyword rankings" },
  { id: "challenge", label: "Challenge & solution" },
  { id: "impact", label: "Business impact" },
  { id: "strategy", label: "The strategy" },
  { id: "visibility", label: "Search visibility" },
  { id: "traffic", label: "Traffic growth" },
  { id: "team", label: "The team" },
  { id: "testimonial", label: "Testimonial" },
];
const projectTeam = [
  { name: "Amit Singh", role: "Co-Founder · Campaign Strategy", focus: "Overall growth strategy, keyword mapping and revenue alignment across the six-month campaign.", image: amitTeam },
  { name: "Praveen", role: "Senior Creative Manager · Content", focus: "Category content, topical authority and conversion-focused creative for the store.", image: praveenTeam },
];
const strategyIcons = [Code2, Search, FileText, Layers, Link2, ShoppingBag];
const shell = "container mx-auto px-5 sm:px-6 lg:px-8";
const title = "text-3xl md:text-4xl lg:text-5xl leading-tight font-medium";

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <p className="mb-5 text-xs font-medium uppercase text-brand">— {number} / {children}</p>;
}

const trafficShots = [
  { src: trafficGrowthChart, alt: "Monthly organic traffic grew from 8,000 to 30,800 visitors over six months", icon: TrendingUp, label: "Organic traffic", detail: "8,000 → 30,800 visitors / month" },
  { src: keywordRankingsDashboard, alt: "Keyword ranking dashboard showing 220 keywords on page one", icon: BarChart3, label: "Keyword rankings", detail: "50 → 220 keywords on page 1" },
  { src: organicClicksChart, alt: "Search performance chart showing organic clicks rising from 5,200 to 19,600", icon: MousePointerClick, label: "Organic clicks", detail: "5,200 → 19,600 clicks / month" },
  { src: revenueGrowthChart, alt: "Organic revenue analytics growing from ₹12L to ₹34.8L per month", icon: IndianRupee, label: "Organic revenue", detail: "₹12L → ₹34.8L / month" },
];

export default function EcommerceSeoCaseStudy() {
  return (
    <>
      <Helmet>
        <title>E-commerce SEO Case Study: 285% Organic Traffic Growth | The Super 30</title>
        <meta name="description" content="Explore a six-month e-commerce SEO campaign: keyword ranking transformation, 285% organic traffic growth, and 190% organic revenue growth." />
        <meta property="og:title" content="E-commerce SEO Case Study | The Super 30" />
        <meta property="og:description" content="The strategy behind six months of growth: from 8,000 to 30,800 organic visitors per month." />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar forceWhiteBg />
      <main className="ecommerce-case-study bg-study-paper pt-16 text-study-ink md:pt-20">
        <header className="case-hero relative isolate flex items-center overflow-hidden bg-study-ink">
          <img src={furnitureImage} alt="Modern furniture and home furnishing interior" width={1920} height={1024} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-[65%_center]" />
          <div className={`case-hero-content ${shell} w-full text-study-paper`}>
            <div className="case-hero-brand"><span className="case-hero-brand-name">Mamaearth</span></div>
            <h1 className="max-w-3xl text-4xl font-medium leading-[1.12] md:text-5xl lg:text-6xl">How We Turned an E-commerce Brand Into a <span className="text-brand">Search Market Leader.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-study-paper/85">We transformed a low-visibility online furniture store into a high-performing organic acquisition channel through technical SEO, category optimization, content marketing and authority building.</p>
            <Button asChild variant="unstyled" className="case-pill mt-8 rounded-full bg-brand text-study-paper"><a href="#performance">Explore the results <span><ArrowUpRight /></span></a></Button>
          </div>
        </header>

        <nav aria-label="Case study sections" className="sticky top-16 z-30 border-b border-study-line bg-study-paper md:top-20">
          <div className={`${shell} flex gap-3 overflow-x-auto py-3`}>
            {sections.map((section, index) => <Button key={section.id} asChild variant="ghost" className="shrink-0 rounded-full px-3 text-study-ink hover:bg-study-muted"><a href={`#${section.id}`}><span className="text-brand">0{index + 1}</span>{section.label}</a></Button>)}
          </div>
        </nav>

        <section id="performance" className="scroll-mt-40 py-16 md:py-24">
          <div className={shell}>
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div><SectionLabel number="01">Campaign performance snapshot</SectionLabel><h2 className={title}>Six months of work.<br /><span className="text-brand">A measurable difference.</span></h2></div>
              <p className="max-w-xs text-sm leading-relaxed text-study-ink/60">From search visibility to purchase intent. The campaign, at a glance.</p>
            </div>
            <div className="case-brand-intro mb-8 flex flex-col items-start gap-6 border p-7 sm:flex-row sm:items-center sm:gap-10 sm:p-8">
              <img loading="lazy" decoding="async" src={mamaearthLogo} alt="Mamaearth" width={240} height={44} className="h-9 w-auto shrink-0 sm:h-11" />
              <p className="text-sm leading-relaxed text-study-ink/70 sm:text-[15px]">Mamaearth is an Indian personal-care brand built on toxin-free, naturally derived formulas for skin, hair and baby care. Founded in 2016, it grew from a single online store into a multi-category consumer brand sold across its own website, marketplaces and modern retail. Today it competes in one of India's most crowded, high-intent search categories.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {campaignSnapshot.map((metric, index) => <article key={metric.label} className={`min-w-0 rounded-lg border p-6 ${index === 0 ? "border-brand bg-brand text-study-paper" : "border-study-line bg-study-muted text-study-ink"}`}>
                <div className="mb-8 flex items-center justify-between gap-2"><h3 className="text-sm">{metric.label}</h3><ArrowUpRight className="h-5 w-5" /></div>
                <p className={`mb-6 text-5xl font-medium ${index === 0 ? "text-study-paper" : "text-brand"}`}>{metric.growth}</p>
                <div className={`flex flex-wrap items-center gap-2 border-t pt-5 ${index === 0 ? "border-study-paper/30" : "border-study-line"}`}><span className="text-sm opacity-70">{metric.before}</span><ArrowRight className="h-4 w-4 opacity-60" /><span className="text-xl font-medium">{metric.after}</span></div>
                <p className="mt-2 text-xs opacity-65">{metric.unit} · Before → After</p>
              </article>)}
            </div>
          </div>
        </section>

        <section id="rankings" className="scroll-mt-40 bg-study-ink py-16 text-study-paper md:py-24">
          <div className={shell}>
            <div className="mb-10 grid gap-8 md:grid-cols-[1fr_260px] md:items-end">
              <div><SectionLabel number="02">Keyword ranking transformation</SectionLabel><h2 className={title}>Which Keywords Did<br />We <span className="text-brand">Actually Rank?</span></h2></div>
              <div className="border-l-2 border-brand pl-5"><p className="text-5xl font-medium">8<span className="text-brand">/8</span></p><p className="mt-2 text-sm text-study-paper/65">Featured keywords on page one</p></div>
            </div>
            <div className="case-ranking-table overflow-hidden rounded-lg border border-study-paper/20">
              <table className="w-full text-left text-sm">
                <thead className="bg-study-paper/5 text-xs text-study-paper/60"><tr><th className="px-4 py-5 sm:px-6">Target keyword</th><th className="px-2 py-5 text-center sm:px-6">Before SEO</th><th className="px-2 py-5 text-center sm:px-6">After 6 months</th><th className="hidden px-6 py-5 text-right md:table-cell">Positions gained</th></tr></thead>
                <tbody>{keywordRankings.map(row => <tr key={row.keyword} className="border-t border-study-paper/10"><th scope="row" className="px-4 py-5 font-normal sm:px-6">{row.keyword}</th><td className="px-2 py-5 text-center text-study-paper/45 sm:px-6">{row.before}</td><td className="px-2 py-5 text-center sm:px-6"><span className="inline-flex min-w-12 items-center justify-center gap-1 rounded bg-brand/15 px-2 py-1 text-lg font-medium text-brand">#{row.after}</span></td><td className="hidden px-6 py-5 text-right md:table-cell"><span className="inline-flex items-center gap-2 text-study-paper/80"><ArrowUpRight className="h-4 w-4 text-brand" />{row.before - row.after}</span></td></tr>)}</tbody>
              </table>
            </div>
            <p className="mt-5 max-w-2xl text-xs leading-relaxed text-study-paper/50">Illustrative Google organic keyword positions. Ranking results vary by location, device and measurement date.</p>
          </div>
        </section>

        <section id="challenge" className="scroll-mt-40 py-16 md:py-24">
          <div className={shell}>
            <SectionLabel number="03">The problem & the solution</SectionLabel>
            <h2 className={`${title} mb-12`}>What Was Holding the Brand Back.<br /><span className="text-brand">What We Did About It.</span></h2>
            <div className="case-fix">
              {clientProblems.slice(0, 3).map((problem, index) => (
                <div key={problem.title} className="case-fix-stage">
                  <div className="case-fix-side case-fix-before">
                    <span className="case-fix-kicker"><TriangleAlert className="h-3.5 w-3.5" strokeWidth={2} /> Pain point</span>
                    <p className="case-fix-title">{problem.title}</p>
                    <p className="case-fix-text text-study-ink/60">{problem.detail}</p>
                  </div>
                  <div className="case-fix-pivot" aria-hidden="true"><ArrowRight className="h-4 w-4" strokeWidth={2.5} /></div>
                  <div className="case-fix-side case-fix-after">
                    <span className="case-fix-kicker"><Lightbulb className="h-3.5 w-3.5" strokeWidth={2} /> What we did</span>
                    <p className="case-fix-title">{solutionsProvided[index]?.title}</p>
                    <p className="case-fix-text text-study-paper/65">{solutionsProvided[index]?.detail}</p>
                    <span className="case-fix-ghost" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="impact" className="scroll-mt-40 bg-study-ink py-16 text-study-paper md:py-24">
          <div className={shell}>
            <SectionLabel number="04">Business impact</SectionLabel><h2 className={`${title} max-w-4xl`}>Rankings Were Just the Beginning.<br /><span className="text-brand">Revenue Was the Goal.</span></h2>
            <div className="case-impact-numbers my-12 grid gap-8 border-y border-study-paper/20 py-10 sm:grid-cols-3">{[{ value: "3.85X", label: "organic traffic growth" }, { value: "2.65X", label: "organic conversion volume" }, { value: "+190%", label: "organic-attributed revenue" }].map(metric => <div key={metric.label}><ArrowUpRight className="mb-3 h-6 w-6 text-brand" /><p className="text-5xl font-medium">{metric.value}</p><p className="mt-3 text-sm text-study-paper/60">{metric.label}</p></div>)}</div>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
              <ul className="space-y-5 text-sm text-study-paper/75"><li className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-brand" />Reduced reliance on paid acquisition.</li><li className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-brand" />Stronger visibility across commercial product searches.</li></ul>
              <div><p className="mb-4 text-xs uppercase text-brand">The final takeaway</p><p className="text-2xl leading-relaxed">We didn't just improve keyword positions. We built a sustainable organic acquisition channel that contributed directly to business growth.</p><Button asChild variant="unstyled" className="case-pill mt-8 rounded-full bg-brand text-study-paper"><Link to="/contact-us#contact-form-section">Build your growth story <span><ArrowUpRight /></span></Link></Button></div>
            </div>
          </div>
        </section>

        <section id="strategy" className="scroll-mt-40 py-16 md:py-24">
          <div className={shell}>
            <SectionLabel number="05">SEO strategies implemented</SectionLabel><h2 className={`${title} mb-12`}>The Strategy Behind<br /><span className="text-brand">Every Ranking.</span></h2>
            <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {seoStrategies.map((strategy, index) => {
                const Icon = strategyIcons[index] ?? Search;
                return <article key={strategy.title} className="min-w-0 border-t border-study-line pt-6">
                  <div className="mb-6 flex items-center justify-between"><span className="text-4xl font-medium text-study-ink/20">0{index + 1}</span><Icon className="h-6 w-6 text-brand" strokeWidth={1.5} /></div>
                  <h3 className="mb-3 text-xl font-medium leading-snug">{strategy.title}</h3><p className="mb-6 text-sm leading-relaxed text-study-ink/60">{strategy.summary}</p>
                  <ul className="space-y-3">{strategy.items.map(item => <li key={item} className="flex gap-3 text-sm leading-relaxed"><Check className="mt-1 h-4 w-4 shrink-0 text-brand" /><span>{item}</span></li>)}</ul>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section id="visibility" className="scroll-mt-40 bg-study-ink py-16 text-study-paper md:py-24">
          <div className={`${shell} grid gap-10 lg:grid-cols-2 lg:gap-20`}>
            <div><SectionLabel number="06">Search visibility improvements</SectionLabel><h2 className={title}>From Page 5 to Page 1.<br /><span className="text-brand">From Invisible to Discoverable.</span></h2><div className="mt-10 flex items-center gap-4 border-l-2 border-brand pl-5"><Search className="h-8 w-8 text-brand" /><p className="max-w-xs text-sm leading-relaxed text-study-paper/60">A stronger search footprint across keywords, indexed pages, links and organic clicks.</p></div></div>
            <div className="min-w-0"><table className="w-full text-left text-sm"><thead><tr className="border-b border-study-paper/20 text-xs uppercase text-study-paper/50"><th className="pb-5 font-normal">SEO metric</th><th className="px-2 pb-5 text-right font-normal">Before</th><th className="pb-5 text-right font-normal text-study-success">After</th></tr></thead><tbody>{searchVisibility.map(row => <tr key={row.label} className="border-b border-study-paper/15"><th scope="row" className="py-5 pr-3 font-normal">{row.label}</th><td className="px-2 py-5 text-right text-study-paper/50">{row.before}</td><td className="py-5 text-right text-xl font-medium text-study-success">{row.after}</td></tr>)}</tbody></table></div>
          </div>
        </section>

        <section id="traffic" className="scroll-mt-40 bg-study-muted py-16 md:py-24">
          <div className={shell}>
            <SectionLabel number="07">Organic traffic growth — month by month</SectionLabel>
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"><h2 className={title}>Six Months. One Consistent<br /><span className="text-brand">Growth Trajectory.</span></h2><div className="flex items-center gap-2 text-sm text-study-success"><TrendingUp className="h-5 w-5" />3.85X organic traffic growth</div></div>
            <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="min-w-0">
                <ul className="divide-y divide-study-line border-y border-study-line">
                  {trafficShots.map(shot => {
                    const Icon = shot.icon;
                    return (
                      <li key={shot.label} className="flex items-center justify-between gap-4 py-4">
                        <span className="flex items-center gap-3 text-sm font-medium text-study-ink"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand"><Icon className="h-4 w-4" /></span>{shot.label}</span>
                        <span className="text-right text-xs text-study-ink/60 sm:text-sm">{shot.detail}</span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-8" aria-label="Monthly organic traffic">
                  <div className="flex h-28 items-end gap-2">
                    {trafficGrowth.map((month, index) => {
                      const max = trafficGrowth[trafficGrowth.length - 1].visitors;
                      const last = index === trafficGrowth.length - 1;
                      return (
                        <div key={month.month} className="flex flex-1 flex-col items-center justify-end gap-1 h-full">
                          <span className={`text-[10px] sm:text-xs ${last ? "font-semibold text-brand" : "text-study-ink/55"}`}>{month.label}</span>
                          <div className={`w-full rounded-t-md ${last ? "bg-brand" : "bg-brand/25"}`} style={{ height: `${(month.visitors / max) * 75}%` }} />
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-2 flex gap-2">{trafficGrowth.map(m => <span key={m.month} className="flex-1 text-center text-[10px] text-study-ink/45">{m.month}</span>)}</div>
                </div>
              </div>
              <div className="case-collage relative mx-auto aspect-[6/5] w-full max-w-[640px]">
                {[
                  "left-0 top-[8%] w-[72%] z-10 -rotate-2",
                  "right-0 top-0 w-[52%] z-20 rotate-3",
                  "left-[6%] bottom-0 w-[50%] z-30 rotate-[-4deg]",
                  "right-[4%] bottom-[4%] w-[48%] z-40 rotate-2",
                ].map((pos, index) => {
                  const shot = trafficShots[index];
                  return (
                    <figure key={shot.label} className={`case-collage-item absolute overflow-hidden rounded-xl border border-study-line bg-study-paper p-1.5 ${pos}`}>
                      <img src={shot.src} alt={shot.alt} width={1280} height={800} loading="lazy" className="aspect-[8/5] w-full rounded-lg object-cover object-top" />
                    </figure>
                  );
                })}
                <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-study-paper">+285% traffic</div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="scroll-mt-40 bg-study-ink py-16 text-study-paper md:py-24">
          <div className={shell}>
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div><SectionLabel number="08">The team behind the results</SectionLabel><h2 className={title}>The People Who<br /><span className="text-brand">Made It Happen.</span></h2></div>
              <p className="max-w-xs text-sm leading-relaxed text-study-paper/60">A three-person core team drove this campaign from audit to revenue.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projectTeam.map((member, index) => (
                <article key={member.name} className="case-team-card group relative overflow-hidden rounded-3xl border border-study-line bg-study-paper text-study-ink">
                  <div className="relative aspect-[4/5] overflow-hidden bg-study-muted">
                    <img src={member.image} alt={member.name} width={480} height={600} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-study-ink/80 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-study-paper backdrop-blur-sm">0{index + 1}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium">{member.name}</h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-brand">{member.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-study-ink/60">{member.focus}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonial" className="scroll-mt-40 bg-background py-16 md:py-24">
          <div className={shell}>
            <div className="case-testimonial relative overflow-hidden rounded-3xl border border-study-line bg-study-muted px-6 py-12 text-center md:px-16 md:py-16">
              <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-study-paper">
                <Quote className="h-6 w-6 fill-current" />
              </span>
              <SectionLabel number="09">Words from the founder</SectionLabel>
              <blockquote className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-study-ink md:text-2xl">
                "{founderTestimonial.quote}"
              </blockquote>
              <div className="mt-6 flex items-center justify-center gap-1" aria-label={`${founderTestimonial.rating} out of 5 stars`}>
                {Array.from({ length: founderTestimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand text-brand" />
                ))}
              </div>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 border-t border-study-line pt-8 sm:flex-row sm:gap-6">
                <img src={mamaearthLogo} alt="Mamaearth logo" width={603} height={111} loading="lazy" className="h-8 w-auto md:h-10" />
                <span className="hidden h-8 w-px bg-study-line sm:block" />
                <div className="text-center sm:text-left">
                  <p className="text-base font-medium text-study-ink">{founderTestimonial.name}</p>
                  <p className="text-xs font-medium uppercase tracking-wide text-brand">{founderTestimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}