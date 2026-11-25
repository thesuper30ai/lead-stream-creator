import { ArrowUp } from "lucide-react";

export interface SeoAchievementMetric {
  label: string;
  before: string;
  after: string;
}

export interface SeoAchievementClient {
  name: string;
  industry: string;
  description: string;
  metrics: SeoAchievementMetric[];
}

const seoWorkStats: SeoAchievementClient[] = [
  {
    name: "Book My Scans",
    industry: "Healthcare",
    description: "Online lab booking platform",
    metrics: [
      { label: "Organic Traffic", before: "1.2K visits/mo", after: "+320%" },
      { label: "Keywords Ranked", before: "250", after: "1,200+" },
      { label: "Domain Authority", before: "12", after: "+18 pts" },
    ],
  },
  {
    name: "Surana Educational Institutions",
    industry: "Education",
    description: "K–12 & higher education group",
    metrics: [
      { label: "Organic Traffic", before: "1.5K visits/mo", after: "+195%" },
      { label: "Keywords Ranked", before: "180", after: "850+" },
      { label: "Lead Growth", before: "70 leads/mo", after: "+140%" },
    ],
  },
  {
    name: "Harvest International School",
    industry: "Education",
    description: "International school in Bangalore",
    metrics: [
      { label: "Organic Traffic", before: "9K visits/mo", after: "+30%" },
      { label: "Keywords Ranked", before: "100", after: "420+" },
      { label: "Visibility", before: "22%", after: "+65%" },
    ],
  },
  {
    name: "Magicbricks",
    industry: "Real Estate",
    description: "Online real estate platform",
    metrics: [
      { label: "Organic Traffic", before: "2M visits/mo", after: "+180%" },
      { label: "Keywords Ranked", before: "850", after: "2,400+" },
      { label: "Domain Authority", before: "34", after: "+22 pts" },
    ],
  },
  {
    name: "Mamaearth",
    industry: "D2C / E-commerce",
    description: "D2C personal care brand",
    metrics: [
      { label: "Organic Traffic", before: "95K visits/mo", after: "+210%" },
      { label: "Keywords Ranked", before: "580", after: "1,800+" },
      { label: "Conversions", before: "3.2%", after: "+75%" },
    ],
  },
  {
    name: "upGrad",
    industry: "Education",
    description: "Online higher education platform",
    metrics: [
      { label: "Organic Traffic", before: "55K visits/mo", after: "+160%" },
      { label: "Keywords Ranked", before: "1,200", after: "3,200+" },
      { label: "Visibility", before: "18%", after: "+85%" },
    ],
  },
];

export const SeoAchievementsSection = ({ glow = false }: { glow?: boolean }) => {
  return (
    <section className="relative overflow-hidden bg-foreground py-16 md:py-24">
      {glow && (
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand/35 blur-[140px]" />
      )}
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">SEO Achievements</p>
          <h2 className="text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">SEO Achievements</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/70 md:text-lg">Real clients, real rankings, real revenue — no vanity metrics, no fluff.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {seoWorkStats.map((client) => (
            <div key={client.name} className="flex flex-col rounded-3xl border border-primary-foreground/10 bg-foreground-card p-8 transition hover:border-brand/40">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  SEO
                </span>
                <span className="text-xs text-primary-foreground/60">{client.industry}</span>
              </div>
              <h3 className="mt-7 text-2xl font-semibold leading-snug text-primary-foreground">{client.name}</h3>
              <p className="mt-2 text-sm text-primary-foreground/60">{client.description}</p>
              <div className="mt-7 border-t border-primary-foreground/15 pt-6">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {client.metrics.map((metric) => (
                    <div key={metric.label} className="flex flex-col justify-between rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-3">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-primary-foreground/50">{metric.label}</p>
                      <div className="mt-2">
                        <span className="text-[11px] text-primary-foreground/50">{metric.before}</span>
                        <div className="mt-1 flex items-center gap-1">
                          <ArrowUp className="h-3 w-3 text-brand/70" />
                          <span className="text-base font-bold text-brand sm:text-lg">{metric.after}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
