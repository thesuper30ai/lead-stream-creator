import { useState } from "react";
import { PageSeo } from "@/components/seo/PageSeo";
import { ArrowRight, Award, MessageCircle, Search } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ServiceLogoSection } from "@/components/landing/ServiceLogoSection";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { BlogSection } from "@/components/landing/BlogSection";
import { WorkPortfolioTabs } from "@/components/work/WorkPortfolioTabs";
import { WorkFinalCTASection } from "@/components/work/WorkFinalCTASection";
import { Button } from "@/components/ui/button";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { AuditChoicePopup } from "@/components/popups/AuditChoicePopup";
import heroImage from "@/assets/home-agency-team.jpg";
import "./Work2.css";

const Work2 = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [auditOpen, setAuditOpen] = useState(false);

  return (
    <>
      <PageSeo path="/our-work" />
      <Navbar />
      <main className="work2 min-h-screen pt-16 md:pt-20">
        <section className="work2-hero" id="work-hero">
          <img src={heroImage} alt="Digital marketing team collaborating on client campaigns" className="work2-hero-image" fetchPriority="high" />
          <div className="container mx-auto py-16 md:py-24">
            <p className="work2-eyebrow">— 300+ Proven Success Stories</p>
            <h1>Successfully Achieved Digital Marketing Growth <span className="text-brand">for 300+ Brands</span></h1>
            <p className="work2-hero-description mt-6 text-base leading-relaxed md:text-lg">From emerging startups to established enterprises, Meet leading brands in Bangalore that grew sustainably with TheSuper30. Highly successful digital marketing case studies and performance, with 98% client satisfaction in SEO, ads, web and design.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" onClick={() => setAuditOpen(true)} className="rounded-full bg-brand text-primary-foreground hover:bg-brand-dark"><Search className="mr-2 h-4 w-4" />Get Free Audit &amp; Strategy<ArrowRight className="ml-3 h-4 w-4" /></Button>
              <Button size="lg" variant="outline" onClick={() => setEnquiryOpen(true)} className="work2-outline rounded-full"><MessageCircle className="mr-2 h-4 w-4" />Enquire Now<ArrowRight className="ml-3 h-4 w-4" /></Button>
            </div>
            <div className="work2-credentials">
              {["AI SEO Experts", "Performance Marketing", "Data-Driven Results"].map((label) => <span key={label}><Award className="h-4 w-4 text-brand" />{label}</span>)}
            </div>
          </div>
        </section>
        <ServiceLogoSection />
        <div className="work2-portfolio" id="work-portfolio"><WorkPortfolioTabs dark /></div>
        <div className="work2-testimonials" id="work-testimonials"><TestimonialSection /></div>
        <div className="work2-insights" id="work-blog"><BlogSection dark /></div>
        <div className="work2-final" id="work-final-cta"><WorkFinalCTASection /></div>
        <Footer />
      </main>
      <EnquiryPopup open={enquiryOpen} onOpenChange={setEnquiryOpen} />
      <AuditChoicePopup open={auditOpen} onOpenChange={setAuditOpen} />
    </>
  );
};

export default Work2;