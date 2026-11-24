import { PageSeo } from "@/components/seo/PageSeo";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, Code2, Search, FileText, Layers, Link2, ShoppingBag, TriangleAlert, Lightbulb } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import educationImage from "@/assets/ind-education.jpg";
import academyLogo from "@/assets/seo-company2-logos/digital-academy-360.png";
import aiChart from "@/assets/case-study/da360/ai-keyword-visibility.webp";
import performanceChart from "@/assets/case-study/da360/organic-clicks-and-leads.webp";
import { campaignSnapshot, campaignTotals, leadReportingNote, clientProblems, solutionsProvided, keywordRankings, franchiseRankings, monthlyPerformance, aiPlatforms, searchVisibility, seoStrategies } from "@/data/digitalAcademyCaseStudy";
import "./EcommerceSeoCaseStudy.css";

const sections = [
  { id: "performance", label: "Overview" },
  { id: "rankings", label: "Keyword rankings" },
  { id: "challenge", label: "Challenge & solution" },
  { id: "impact", label: "Business impact" },
  { id: "strategy", label: "The strategy" },
  { id: "visibility", label: "Search visibility" },
  { id: "traffic", label: "Traffic growth" },
  { id: "ai-search", label: "AI search" },
  { id: "takeaway", label: "Takeaway" },
];
const strategyIcons = [Code2, Search, FileText, Layers, Link2, ShoppingBag];
const shell = "container mx-auto px-5 sm:px-6 lg:px-8";
const title = "text-3xl md:text-4xl lg:text-5xl leading-tight font-medium";

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <p className="mb-5 text-xs font-medium uppercase text-brand">— {number} / {children}</p>;
}

export default function DigitalAcademySeoCaseStudy() {
  return (
    <>
      <PageSeo path="/case-studies/digital-academy-360-seo" />
      <Navbar forceWhiteBg />
      <main className="ecommerce-case-study bg-study-paper pt-16 text-study-ink md:pt-20">
        <header className="case-hero relative isolate flex items-center overflow-hidden bg-study-ink">
          <img src={educationImage} alt="Education and learning environment" width={1920} height={1024} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-[65%_center]" />
          <div className={`case-hero-content ${shell} w-full text-study-paper`}>
            <div className="case-hero-brand"><span className="case-hero-brand-name">Digital Academy 360</span></div>
            <h1 className="max-w-3xl text-4xl font-medium leading-[1.12] md:text-5xl lg:text-6xl">How We Built Multi-Location <span className="text-brand">Search Leadership.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-study-paper/85">From beyond page 5 to the Top 3 across Bangalore, three key localities and five Karnataka franchise cities. Technical SEO, local search and AI-ready content brought Digital Academy 360 into the conversations that matter.</p>
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
              <p className="max-w-xs text-sm leading-relaxed text-study-ink/60">Education · India · May–October 2026. AI visibility tracked through 4 November 2026.</p>
            </div>
            <div className="case-brand-intro mb-8 flex flex-col items-start gap-6 border p-7 sm:flex-row sm:items-center sm:gap-10 sm:p-8">
              <img loading="lazy" decoding="async" src={academyLogo} alt="Digital Academy 360" width={240} height={100} className="h-16 w-52 shrink-0 object-contain sm:h-20" />
              <p className="text-sm leading-relaxed text-study-ink/70 sm:text-[15px]">Digital Academy 360 is an education brand offering digital marketing training across Bangalore and Karnataka. Associated with Super30 since 2015, its SEO implementation began in 2025. This six-month campaign focused on high-intent course searches, admission enquiries and a repeatable search model across nine locations.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {campaignSnapshot.map((metric, index) => <article key={metric.label} className={`min-w-0 rounded-lg border p-6 ${index === 0 ? "border-brand bg-brand text-study-paper" : "border-study-line bg-study-muted text-study-ink"}`}>
                <div className="mb-8 flex items-center justify-between gap-2"><h3 className="text-sm">{metric.label}</h3><ArrowUpRight className="h-5 w-5" /></div>
                <p className={`mb-6 text-5xl font-medium ${index === 0 ? "text-study-paper" : "text-brand"}`}>{metric.growth}</p>
                <div className={`flex flex-wrap items-center gap-2 border-t pt-5 ${index === 0 ? "border-study-paper/30" : "border-study-line"}`}><span className="text-sm opacity-70">{metric.before}</span><ArrowRight className="h-4 w-4 opacity-60" /><span className="text-xl font-medium">{metric.after}</span></div>
                <p className="mt-2 text-xs opacity-65">{metric.unit} · Before → After</p>
              </article>)}
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-study-line pt-8 lg:grid-cols-4">
              {[{ value: campaignTotals.impressions, label: "Search impressions" }, { value: campaignTotals.clicks, label: "Organic clicks" }, { value: campaignTotals.sessions, label: "Organic sessions" }, { value: campaignTotals.leads, label: "Reported leads · all sources" }].map(metric => <div key={metric.label}><dd className="text-3xl font-medium text-brand">{metric.value.toLocaleString("en-IN")}</dd><dt className="mt-2 text-sm text-study-ink/65">{metric.label}</dt></div>)}
            </dl>
            <p className="mt-6 text-xs leading-relaxed text-study-ink/60">{leadReportingNote}</p>
          </div>
        </section>

        <section id="rankings" className="scroll-mt-40 bg-study-ink py-16 text-study-paper md:py-24">
          <div className={shell}>
            <div className="mb-10 grid gap-8 md:grid-cols-[1fr_260px] md:items-end">
              <div><SectionLabel number="02">Keyword ranking transformation</SectionLabel><h2 className={title}>Which Keywords Did<br />We <span className="text-brand">Actually Rank?</span></h2></div>
              <div className="border-l-2 border-brand pl-5"><p className="text-5xl font-medium">28<span className="text-brand">/28</span></p><p className="mt-2 text-sm text-study-paper/65">Tracked target keywords in the Top 3</p></div>
            </div>
            <div className="case-ranking-table overflow-hidden rounded-lg border border-study-paper/20">
              <table className="w-full text-left text-sm">
                <thead className="bg-study-paper/5 text-xs text-study-paper/60"><tr><th className="px-4 py-5 sm:px-6">Target keyword</th><th className="px-2 py-5 text-center sm:px-6">Before SEO</th><th className="px-2 py-5 text-center sm:px-6">After 6 months</th><th className="hidden px-6 py-5 text-right md:table-cell">Location</th></tr></thead>
                <tbody>{keywordRankings.map(row => <tr key={row.keyword} className="border-t border-study-paper/10"><th scope="row" className="px-4 py-5 font-normal sm:px-6">{row.keyword}</th><td className="px-2 py-5 text-center text-study-paper/45 sm:px-6">{row.before}</td><td className="px-2 py-5 text-center sm:px-6"><span className="inline-flex min-w-12 items-center justify-center gap-1 rounded bg-brand/15 px-2 py-1 text-lg font-medium text-brand">#{row.after}</span></td><td className="hidden px-6 py-5 text-right md:table-cell"><span className="inline-flex items-center gap-2 text-study-paper/80"><ArrowUpRight className="h-4 w-4 text-brand" />{row.location}</span></td></tr>)}</tbody>
              </table>
            </div>
            <p className="mt-5 max-w-2xl text-xs leading-relaxed text-study-paper/50">Selected Bangalore and locality keywords from the supplied ranking sheet. 100+ means outside the top 100. Positions vary by location, device and measurement date.</p>
            <h3 className="mb-5 mt-12 text-2xl font-medium">The same model. Five franchise cities.</h3>
            <div className="overflow-x-auto rounded-lg border border-study-paper/20">
              <table className="w-full text-left text-sm"><thead className="bg-study-paper/5 text-study-paper/60"><tr><th className="p-4">Keyword / city</th><th className="p-3 text-center">July 2026</th><th className="p-3 text-center">October 2026</th></tr></thead><tbody>{franchiseRankings.map(row => <tr key={`${row.location}-${row.keyword}`} className="border-t border-study-paper/10"><th scope="row" className="p-4 font-normal">{row.keyword}<span className="mt-1 block text-xs text-study-paper/50">{row.location}</span></th><td className="p-3 text-center text-study-paper/50">{row.before}</td><td className="p-3 text-center text-xl font-medium text-brand">#{row.after}</td></tr>)}</tbody></table>
            </div>
            <p className="mt-5 text-xs text-study-paper/50">239 of 320 tracked franchise keywords reached the Top 3. Franchise tracking began in July 2026.</p>
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
            <SectionLabel number="04">Business impact</SectionLabel><h2 className={`${title} max-w-4xl`}>Rankings Built the Foundation.<br /><span className="text-brand">Admission Enquiries Were the Goal.</span></h2>
            <div className="case-impact-numbers my-12 grid gap-8 border-y border-study-paper/20 py-10 sm:grid-cols-3">{[{ value: "299", label: "Bangalore + locality keywords in Top 3" }, { value: "239", label: "franchise keywords in Top 3" }, { value: "9", label: "locations in a repeatable SEO model" }].map(metric => <div key={metric.label}><ArrowUpRight className="mb-3 h-6 w-6 text-brand" /><p className="text-5xl font-medium">{metric.value}</p><p className="mt-3 text-sm text-study-paper/60">{metric.label}</p></div>)}</div>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
              <ul className="space-y-5 text-sm text-study-paper/75"><li className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-brand" />All 28 tracked target keywords reached the Top 3.</li><li className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-brand" />299 GMB keywords visible across four Bangalore profiles.</li></ul>
              <div><p className="mb-4 text-xs uppercase text-brand">The final takeaway</p><p className="text-2xl leading-relaxed">A strong technical foundation, location-specific content and AI-ready answers made DA360 discoverable across both Google and AI search. The model can now scale with its centres.</p><Button asChild variant="unstyled" className="case-pill mt-8 rounded-full bg-brand text-study-paper"><Link to="/contact-us#contact-form-section">Build your growth story <span><ArrowUpRight /></span></Link></Button></div>
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
            <div><SectionLabel number="06">Search visibility improvements</SectionLabel><h2 className={title}>From Beyond Page 5 to the Top 3.<br /><span className="text-brand">From Unseen to Recommended.</span></h2><div className="mt-10 flex items-center gap-4 border-l-2 border-brand pl-5"><Search className="h-8 w-8 text-brand" /><p className="max-w-xs text-sm leading-relaxed text-study-paper/60">Average tracked keyword position improved from 81+ to 1.2. Search and AI visibility were measured separately.</p></div></div>
            <div className="min-w-0"><table className="w-full text-left text-sm"><thead><tr className="border-b border-study-paper/20 text-xs uppercase text-study-paper/50"><th className="pb-5 font-normal">SEO metric</th><th className="px-2 pb-5 text-right font-normal">Before</th><th className="pb-5 text-right font-normal text-study-success">After</th></tr></thead><tbody>{searchVisibility.map(row => <tr key={row.label} className="border-b border-study-paper/15"><th scope="row" className="py-5 pr-3 font-normal">{row.label}</th><td className="px-2 py-5 text-right text-study-paper/50">{row.before}</td><td className="py-5 text-right text-xl font-medium text-study-success">{row.after}</td></tr>)}</tbody></table></div>
          </div>
        </section>

        <section id="traffic" className="scroll-mt-40 bg-study-muted py-16 md:py-24">
          <div className={shell}>
            <SectionLabel number="07">Organic search performance · May–October 2026</SectionLabel>
            <h2 className={`${title} mb-10`}>Six Months of Search Demand.<br /><span className="text-brand">A Transparent View of the Results.</span></h2>
            <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div><dl className="grid grid-cols-2 gap-6 border-y border-study-line py-8">{[{ value: "14,378", label: "Organic sessions" }, { value: "9,016", label: "Engaged sessions" }, { value: "62.71%", label: "Engagement rate" }, { value: "1m 20s", label: "Average engagement time" }].map(metric => <div key={metric.label}><dd className="text-3xl font-medium text-brand">{metric.value}</dd><dt className="mt-2 text-sm text-study-ink/65">{metric.label}</dt></div>)}</dl><p className="mt-6 text-sm leading-relaxed text-study-ink/60">Search impressions and clicks come from Google Search Console; sessions and engagement come from GA4. Monthly results fluctuated rather than increasing every month.</p></div>
              <figure className="min-w-0"><img src={performanceChart} alt="May to October 2026 organic clicks and reported all-source leads from the supplied case study" width={1800} height={680} loading="lazy" decoding="async" className="h-auto w-full rounded-lg border border-study-line" /><figcaption className="mt-4 text-xs leading-relaxed text-study-ink/60">{leadReportingNote}</figcaption></figure>
            </div>
            <div className="mt-10 overflow-x-auto rounded-lg border border-study-line"><table className="w-full text-left text-sm"><thead className="bg-study-muted"><tr><th className="p-4">2026</th><th className="p-3 text-right">Impressions</th><th className="p-3 text-right">Clicks</th><th className="p-3 text-right">CTR</th><th className="p-3 text-right">All-source leads</th></tr></thead><tbody>{monthlyPerformance.map(row => <tr key={row.month} className="border-t border-study-line"><th scope="row" className="p-4 font-normal">{row.month}</th><td className="p-3 text-right">{row.impressions.toLocaleString("en-IN")}</td><td className="p-3 text-right">{row.clicks.toLocaleString("en-IN")}</td><td className="p-3 text-right">{row.ctr}</td><td className="p-3 text-right">{row.leads}</td></tr>)}</tbody></table></div>
          </div>
        </section>

        <section id="ai-search" className="scroll-mt-40 bg-study-ink py-16 text-study-paper md:py-24">
          <div className={shell}>
            <SectionLabel number="08">AEO & GEO · September to 4 November 2026</SectionLabel>
            <h2 className={`${title} mb-10`}>Beyond Google.<br /><span className="text-brand">Into the AI Shortlist.</span></h2>
            <div className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="text-5xl font-medium text-brand">41 → 58</p><p className="mt-4 text-sm leading-relaxed text-study-paper/65">Brand appearances across 16 keywords and five AI platforms increased by 17 — approximately 41%. ChatGPT appearances stayed at 15, while #1 answers rose from 1 to 13.</p><table className="mt-8 w-full text-left text-sm"><thead><tr className="border-b border-study-paper/20"><th className="pb-4">Platform</th><th className="pb-4 text-right">Sep</th><th className="pb-4 text-right">Nov</th></tr></thead><tbody>{aiPlatforms.map(platform => <tr key={platform.name} className="border-b border-study-paper/15"><th scope="row" className="py-4 font-normal">{platform.name}</th><td className="text-right text-study-paper/50">{platform.before}</td><td className="text-right text-brand">{platform.after}</td></tr>)}</tbody></table></div><figure className="min-w-0"><img src={aiChart} alt="AI platform keyword appearances: ChatGPT 15 to 15, Claude 6 to 12, Perplexity 5 to 8, Grok 9 to 13 and Gemini 6 to 10" width={1600} height={720} loading="lazy" decoding="async" className="h-auto w-full rounded-lg" /><figcaption className="mt-4 text-xs leading-relaxed text-study-paper/60">Appearances are not the same as #1 rankings. AI answers vary by session, location and time of check.</figcaption></figure></div>
          </div>
        </section>

        <section id="takeaway" className="scroll-mt-40 bg-background py-16 md:py-24">
          <div className={shell}><div className="case-testimonial relative overflow-hidden rounded-3xl border border-study-line bg-study-muted px-6 py-12 text-center md:px-16 md:py-16"><SectionLabel number="09">The final takeaway</SectionLabel><img src={academyLogo} alt="Digital Academy 360" width={240} height={100} loading="lazy" className="mx-auto mb-8 h-20 w-60 object-contain" /><h2 className="mx-auto max-w-3xl text-2xl font-medium leading-relaxed md:text-3xl">Not just better rankings.<br /><span className="text-brand">A repeatable model for multi-location growth.</span></h2><p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-study-ink/65">We connected course intent, neighbourhood searches, franchise expansion and AI answers into one search strategy. Digital Academy 360 went from beyond page 5 to the Top 3 — and became ChatGPT’s first recommendation for 13 tracked course queries.</p><Button asChild variant="unstyled" className="case-pill mt-8 rounded-full bg-brand text-study-paper"><Link to="/contact-us#contact-form-section">Build your growth story <span><ArrowUpRight /></span></Link></Button></div></div>
        </section>
      </main>
      <Footer />
    </>
  );
}