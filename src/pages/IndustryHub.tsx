import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServicePageBand } from "@/components/service/ServicePageBand";
import { ServiceClientLogos } from "@/components/service/ServiceClientLogos";
import strategyImage from "@/assets/home-strategy-session.jpg";
import { industryCategories } from "@/data/industries";

interface IndustryData {
  name: string;
  headline: string;
  description: string;
  subCategories: string[];
}

const industries: Record<string, IndustryData> = {
  education: {
    name: "Education",
    headline: "AI Digital Marketing Solutions for the Education Industry",
    description:
      "From pre-schools to EdTech platforms, we help education brands attract more admissions with AI SEO, performance marketing and lead generation built for the education sector.",
    subCategories: [
      "Pre-schools & Daycares",
      "K-12 Schools",
      "Colleges",
      "Universities",
      "Coaching Institutes",
      "EdTech Platforms",
      "Govt Education Programs",
      "Skilling & Vocational",
    ],
  },
  ecommerce: {
    name: "E-Commerce",
    headline: "AI Digital Marketing Solutions for E-Commerce Brands",
    description:
      "D2C brands and marketplace sellers grow revenue with our AI SEO, Google Ads and ecommerce marketing solutions built for online retail.",
    subCategories: [
      "D2C Brands",
      "Marketplace Sellers",
      "Electronics & Gadgets",
      "Grocery / Quick Commerce",
      "Home & Furniture",
      "Beauty & Personal Care",
      "B2B / Wholesale",
      "Pharma / Pharmacy Brands",
    ],
  },
  lifestyle: {
    name: "Lifestyle",
    headline: "AI Digital Marketing Solutions for Lifestyle Brands",
    description:
      "Fashion, beauty, wellness, dermatology, pharmacy, home decor and lifestyle brands scale with our AI-powered SEO, social media marketing and performance advertising.",
    subCategories: [
      "Fashion & Apparel",
      "Beauty & Cosmetics",
      "Wellness & Fitness",
      "Dermatology, Pharmacy & Wellness",
      "Health & Wellness Retail",
      "Home Decor & Furniture",
      "Jewelry & Accessories",
      "Weddings & Events",
    ],
  },
  sports: {
    name: "Sports",
    headline: "AI Digital Marketing Solutions for the Sports Industry",
    description:
      "Sports academies, gyms, teams and gear brands win more fans and customers with AI SEO, lead generation and performance marketing.",
    subCategories: [
      "Sports Academies",
      "Gyms & Fitness Studios",
      "Sports Events / Tournaments",
      "Sports Teams / Clubs",
      "Equipment & Gear Brands",
      "Individual Athletes",
      "Sports Tech & Apps",
    ],
  },
  b2b: {
    name: "Businesses (B2B)",
    headline: "AI Digital Marketing Solutions for B2B Companies",
    description:
      "Startups, SaaS and enterprise businesses generate qualified B2B leads with our AI SEO, account-based performance marketing and content solutions.",
    subCategories: [
      "Startups & SaaS",
      "BFSI",
      "Real Estate & Construction",
      "Manufacturing / Industrial",
      "Professional Services",
      "Logistics & Supply Chain",
      "IT & Tech Services",
    ],
  },
  hospitality: {
    name: "Hotel Management & Hospitality",
    headline: "AI Digital Marketing Solutions for Hotels, Restaurants & Hospitality",
    description:
      "Hotels, restaurants, cloud kitchens and travel brands attract more bookings and diners with our AI SEO, local search marketing and performance advertising.",
    subCategories: [
      "Hotels & Resorts",
      "Restaurants & Cafes",
      "Cloud Kitchens",
      "Travel & Tourism",
      "Banquet Halls & Event Venues",
      "Spa & Wellness Resorts",
    ],
  },
};

const solutions = [
  { label: "AI SEO", href: "/seo-company-bangalore" },
  { label: "Google Ads", href: "/google-ads-agency-bangalore" },
  { label: "Lead Generation", href: "/lead-generation-agency-bangalore" },
  { label: "Social Media Marketing", href: "/social-media-marketing-agency-bangalore" },
  { label: "Web Development", href: "/web-development-company-bangalore" },
  { label: "Branding & Design", href: "/design-agency-bangalore" },
];

const IndustryHub = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? industries[slug] : undefined;

  if (!industry) return <Navigate to="/" replace />;

  const title = `${industry.name} Digital Marketing Agency Bangalore | The Super 30`;
  const metaDescription = industry.description.slice(0, 155);

  return (
    <div className="remaining-service-page min-h-screen bg-background pt-16 md:pt-20">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://www.thesuper30.ai/industries/${slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />

      <section className="modern-service-hero text-center">
        <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-brand">Solutions by Industry</p>
        <h1 className="text-4xl leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">{industry.headline}</h1>
        <p className="hero-description mx-auto mt-6 max-w-3xl text-lg">{industry.description}</p>
        <Button asChild variant="unstyled" className="mt-8 h-auto rounded-full bg-brand px-7 py-3 text-primary-foreground"><Link to="/contact-us#contact-form-section">Talk to a Strategist<ArrowRight /></Link></Button>
      </section>
      <ServicePageBand><ServiceClientLogos /></ServicePageBand>

      {/* Sub-categories */}
      <ServicePageBand dark><section className="py-16 md:py-24">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-[.8fr_1.2fr]"><img src={strategyImage} alt="The Super 30 team developing an industry marketing strategy" width={1200} height={800} loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover" /><div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Who We Serve in {industry.name}
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Industry-specific marketing playbooks tailored to your segment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industry.subCategories.map((sub) => (
              <Link
                to={industryCategories.find(category => category.href === `/industries/${slug}`)?.items.find(item => item.label === sub)?.href ?? `/industries/${slug}`}
                key={sub}
                className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 hover:border-[hsl(var(--brand-orange))]/40 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-[hsl(var(--brand-orange))] shrink-0" />
                <span className="text-sm font-medium text-foreground">{sub}</span>
              </Link>
            ))}
          </div>
        </div></div>
      </section></ServicePageBand>

      {/* Solutions grid */}
      <ServicePageBand><section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Growth Solutions for {industry.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="group flex items-center justify-between rounded-xl border border-border/60 bg-card p-5 hover:border-[hsl(var(--brand-orange))]/40 transition-colors"
              >
                <span className="font-semibold text-foreground group-hover:text-[hsl(var(--brand-orange))] transition-colors">
                  {s.label}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-[hsl(var(--brand-orange))] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section></ServicePageBand>

      <ServicePageBand dark>
        <section className="py-16 md:py-24 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">Ready to Grow Your <span className="text-brand">{industry.name} Business?</span></h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">Get a free strategy session with our AI digital marketing experts in Bangalore.</p>
            <Button asChild variant="unstyled" className="mt-8 h-auto rounded-full bg-brand px-8 py-3 text-primary-foreground"><Link to="/contact-us#contact-form-section">Get Free Consultation<ArrowRight /></Link></Button>
          </div>
        </section>
      </ServicePageBand>

      <Footer />
    </div>
  );
};

export default IndustryHub;
