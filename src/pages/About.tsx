import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { UnifiedCTASection } from "@/components/landing/UnifiedCTASection";
import { ClientLogosSection } from "@/components/landing/ClientLogosSection";
import { FAQSection } from "@/components/landing/FAQSection";

import { TeamSection } from "@/components/about/TeamSection";
import { InteractiveTimeline } from "@/components/about/InteractiveTimeline";

import { Button } from "@/components/ui/button";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { AuditChoicePopup } from "@/components/popups/AuditChoicePopup";
import heroImage from "@/assets/home-agency-team.jpg";
import workspaceImage from "@/assets/seo-real-growth-workspace.jpg";
import "./About.css";
import {
  ArrowRight,
  Bot,
  Target,
  Award,
  MessageCircle,
  Search,
  Shield,
  Heart,
  CheckCircle2,
} from "lucide-react";

const values = [
  {
    icon: Bot,
    title: "AI-First Innovation",
    description: "We stay ahead by embracing AI as a core part of everything we do.",
  },
  {
    icon: Target,
    title: "Results Obsession",
    description: "We measure success by your business outcomes, not vanity metrics.",
  },
  {
    icon: Shield,
    title: "Radical Transparency",
    description: "No hidden fees, no jargon. You always know exactly what we're doing.",
  },
  {
    icon: Heart,
    title: "Client Partnership",
    description: "Your success is our success. We're invested in your long-term growth.",
  },
];

const About = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [auditOpen, setAuditOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Internet Marketing Agency With 30+ Digital Marketing Experts</title>
        <meta name="twitter:url" content="https://www.thesuper30.ai/internet-marketing-agency" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Meet 30+ experts at TheSuper30, a leading internet marketing company. SEO, design, content, ads and web under one roof. Trusted by 300+ businesses." />
        <meta name="keywords" content="Internet marketing agency, Digital Marketing Experts, Internet marketing Company, Online marketing agency, Online marketing Company" />
        <link rel="canonical" href="https://www.thesuper30.ai/internet-marketing-agency" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Meet the 30+ Experts Behind Every Campaign We Run." />
        <meta property="og:description" content="Real people. Real strategies. AI-powered results. See the team that scales brands &amp; drives ROI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thesuper30.ai/internet-marketing-agency" />
        <meta property="og:image" content="https://www.thesuper30.ai/super30-social-logo.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meet the 30+ Experts Behind Every Campaign We Run." />
        <meta name="twitter:description" content="Real people. Real strategies. AI-powered results. See the team that scales brands &amp; drives ROI." />
        <meta name="twitter:image" content="https://www.thesuper30.ai/super30-social-logo.jpg" />
        
      </Helmet>

      <Navbar />

      <main className="about-page min-h-screen pt-16 md:pt-20">
        <section id="about-hero" className="about-hero">
          <img src={heroImage} alt="The digital marketing team collaborating on a growth strategy" fetchPriority="high" />
          <div className="container mx-auto py-16 md:py-24">
            <p className="about-eyebrow">— 30+ Digital Marketing Experts</p>
            <h1>Meet the Team Behind<br /><span className="text-brand">Your Growth Story.</span></h1>
            <p className="about-hero-description mt-6 text-base leading-relaxed md:text-lg">From emerging startups to established enterprises, our 30+ specialists in SEO, performance marketing, design, content and web turn marketing spend into measurable business growth. Ex-Google expertise, AI-powered execution and full transparency on every campaign we run.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" onClick={() => setAuditOpen(true)} className="rounded-full bg-brand text-primary-foreground hover:bg-brand-dark"><Search className="mr-2 h-4 w-4" />Get Free Audit &amp; Strategy<ArrowRight className="ml-3 h-4 w-4" /></Button>
              <Button size="lg" variant="outline" onClick={() => setEnquiryOpen(true)} className="about-outline rounded-full"><MessageCircle className="mr-2 h-4 w-4" />Enquire Now<ArrowRight className="ml-3 h-4 w-4" /></Button>
            </div>
            <div className="about-credentials">
              {["30+ In-House Experts", "Ex-Google Leadership", "91% Client Retention Rate"].map((label) => <span key={label}><Award className="h-4 w-4 text-brand" />{label}</span>)}
            </div>
          </div>
        </section>

        <section id="about-logos" className="about-light about-band about-logos">
          <div className="container mx-auto about-brands"><ClientLogosSection /></div>
        </section>

        <section id="about-intro" className="about-light about-band">
          <div className="container mx-auto about-intro-grid">
            <div className="about-intro-photo">
              <img src={workspaceImage} alt="Digital marketing specialists working on a campaign" loading="lazy" />
              <div className="about-photo-note"><Award className="text-brand h-7 w-7" /><div><strong>10+ Years</strong><span>of Excellence</span></div></div>
            </div>
            <div>
              <p className="about-eyebrow">— PEOPLE. STRATEGY. GROWTH.</p>
              <h2>The Best <span className="text-brand">Digital Marketing Experts</span> Driving Measurable Business Growth</h2>
              <p className="about-copy">Success in today's digital landscape requires more than marketing tools. Our team of digital marketing experts combines industry experience, strategic insights, and performance driven execution to help businesses increase visibility, generate quality leads, and achieve sustainable growth.</p>
              <div className="about-intro-details">
                <div className="about-mini-stats"><div><strong>279+</strong><span>Projects Delivered</span></div><div><strong>1 Lakh+</strong><span>Leads Generated</span></div></div>
                <ul className="about-checks">{["Ex-Google Experts", "AI-Powered Solutions", "Results-Driven"].map(item => <li key={item}><CheckCircle2 className="h-4 w-4 text-brand shrink-0" />{item}</li>)}</ul>
              </div>
              <Button asChild className="rounded-full bg-brand text-primary-foreground hover:bg-brand-dark"><Link to="/contact-us">Get In Touch<ArrowRight className="ml-3 h-4 w-4" /></Link></Button>
            </div>
          </div>
        </section>

        <section id="about-mission" className="about-dark about-band">
          <div className="container mx-auto">
            <div className="about-section-heading">
              <p className="about-eyebrow">— OUR MISSION</p>
              <h2>A Human-Driven Internet Marketing Agency for the <span className="text-brand">AI Era</span></h2>
              <p className="about-copy">We believe that a great internet marketing agency should act as a true partner to your business. Our online marketing agency works with total transparency and passion to turn complex growth goals into measurable results.</p>
            </div>
            <div className="about-growth-grid">
              <article className="about-growth-story"><img src={heroImage} alt="A collaborative marketing team" loading="lazy" /><div><h3>AI + Human expertise</h3><p>Our internet marketing company combines ex-Google expertise with proprietary AI tools to deliver enterprise-grade results at founder-friendly prices.</p></div></article>
              <article className="about-growth-feature"><Target className="h-8 w-8" /><strong>₹100 Cr+</strong><h3>Revenue Generated</h3><p>Results-based approach.<br />AI-Powered Strategy.</p></article>
              <div className="about-growth-promises"><p className="about-eyebrow">BUILT ON TRUST</p><h3>Your growth.<br />Our commitment.</h3><ul className="about-checks">{["No long-term lock-ins", "Transparent pricing", "Results-based approach", "AI + Human expertise"].map(item => <li key={item}><CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />{item}</li>)}</ul></div>
            </div>
            <div className="about-values">{values.map(value => <article key={value.title} className="about-value"><value.icon /><h3>{value.title}</h3><p>{value.description}</p></article>)}</div>
          </div>
        </section>

        {/* Team Section */}
        <div id="about-team" className="about-light about-band">
          <TeamSection />
        </div>

        {/* Interactive Timeline */}
        <div id="about-timeline" className="about-dark about-band">
          <InteractiveTimeline />
        </div>


        <div id="about-faq" className="about-light about-band">
          <div className="container mx-auto about-faq-layout"><img src={workspaceImage} alt="The team discussing a client marketing strategy" loading="lazy" /><FAQSection slug="internet-marketing-agency" /></div>
        </div>

        <div id="about-cta" className="about-dark about-band">
          <UnifiedCTASection variant="dark" />
        </div>

        <Footer />
      </main>
      <EnquiryPopup open={enquiryOpen} onOpenChange={setEnquiryOpen} />
      <AuditChoicePopup open={auditOpen} onOpenChange={setAuditOpen} />
    </>
  );
};

export default About;
