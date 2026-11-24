import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ServicePageBand } from "@/components/service/ServicePageBand";
import { ServiceClientLogos } from "@/components/service/ServiceClientLogos";
import { industryCategories } from "@/data/industries";

const title = "Industries We Serve | Digital Marketing by Industry | The Super 30";
const description = "Explore the industries The Super 30 serves in Bangalore: education, e-commerce, lifestyle, sports, B2B and hospitality. AI SEO and lead generation by industry.";

const Industries = () => (
  <div className="remaining-service-page min-h-screen bg-background pt-16 md:pt-20">
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href="https://www.thesuper30.ai/industries" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <Navbar />

    <section className="modern-service-hero text-center">
      <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-brand">Industries We Serve</p>
      <h1 className="text-4xl leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">Digital Marketing Built for <span className="text-brand">Your Industry</span></h1>
      <p className="hero-description mx-auto mt-6 max-w-3xl text-lg">From schools and D2C brands to hotels and B2B companies, we build AI SEO, lead generation and social media strategies around how your customers buy.</p>
      <Button asChild variant="unstyled" className="mt-8 h-auto rounded-full bg-brand px-7 py-3 text-primary-foreground"><Link to="/contact-us#contact-form-section">Talk to a Strategist<ArrowRight /></Link></Button>
    </section>

    <ServicePageBand><ServiceClientLogos /></ServicePageBand>

    <ServicePageBand dark>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">Choose Your <span className="text-brand">Industry</span></h2>
            <p className="mt-4 text-muted-foreground">Pick your sector to see how we help businesses like yours grow.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industryCategories.map((category) => (
              <article key={category.href} className="flex flex-col rounded-3xl border border-border bg-card p-7">
                <h3 className="text-2xl font-semibold text-foreground">{category.label}</h3>
                <ul className="mt-5 grid gap-2.5">
                  {category.items.map((item) => (
                    <li key={item.label}>
                      <Link to={item.href} className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-brand">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />{item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link to={category.href} className="mt-6 inline-flex items-center gap-2 pt-2 font-semibold text-brand">
                  Explore {category.label}<ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </ServicePageBand>

    <ServicePageBand>
      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">Don&apos;t See Your <span className="text-brand">Industry?</span></h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">We work with businesses across many more sectors. Tell us about yours and we&apos;ll share a growth plan.</p>
          <Button asChild variant="unstyled" className="mt-8 h-auto rounded-full bg-brand px-8 py-3 text-primary-foreground"><Link to="/contact-us#contact-form-section">Get Free Consultation<ArrowRight /></Link></Button>
        </div>
      </section>
    </ServicePageBand>

    <Footer />
  </div>
);

export default Industries;
