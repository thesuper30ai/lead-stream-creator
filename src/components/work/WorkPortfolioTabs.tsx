import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, PenTool, Image, Search, TrendingUp, Video, Camera, ExternalLink, Eye, Heart, MessageCircle, Volume2, VolumeX, ArrowLeft, ArrowRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import bookMyScansReport from "@/assets/seo-reports/bookmyscans-report.png";
import suranaReport from "@/assets/seo-reports/surana-report.png";
import harvestReport from "@/assets/seo-reports/harvest-report.png";

import magicbricksLogo from "@/assets/case-studies/magicbricks.png";
import bookMyScansLogo from "@/assets/case-studies/book-my-scans.png";
import suranaLogo from "@/assets/case-studies/surana-educational.png";
import harvestLogo from "@/assets/case-studies/harvest-international.png";
import aadhyaLogo from "@/assets/case-studies/aadhya-animatics.png";
import interiorsLogo from "@/assets/case-studies/interiors-and-more.png";
import logo1 from "@/assets/logos/logo-1.jpg";
import logo2 from "@/assets/logos/logo-2.jpg";
import logo3 from "@/assets/logos/logo-3.jpg";
import logo4 from "@/assets/logos/logo-4.jpg";

import logo6 from "@/assets/logos/logo-6.jpg";
import logo7 from "@/assets/logos/logo-7.jpg";
import logo8 from "@/assets/logos/logo-8.jpg";
import logo9 from "@/assets/logos/logo-9.jpg";
import logo10 from "@/assets/logos/logo-10.jpg";
import logo11 from "@/assets/logos/logo-11.jpg";
import da360Logo from "@/assets/logos/digital-academy-360.png";
import kashtiLogo from "@/assets/logos/kashti.png";
import icsLogo from "@/assets/logos/ics.png";
import aasaanImpexLogo from "@/assets/logos/portfolio-02.jpg";
import berylLogo from "@/assets/logos/portfolio-03.jpg";
import brownBakeLogo from "@/assets/logos/portfolio-04.jpg";
import dataQubeLogo from "@/assets/logos/portfolio-05.jpg";
import diakoniaLogo from "@/assets/logos/portfolio-06.jpg";
import paragonPartnersLogo from "@/assets/logos/portfolio-07.jpg";
import lewisTransportLogo from "@/assets/logos/portfolio-08.jpg";
import novaLifelineLogo from "@/assets/logos/portfolio-09.jpg";
import samsaraLogo from "@/assets/logos/portfolio-10.jpg";
import ardraLogo from "@/assets/logos/portfolio-11.jpg";
import oleLogo from "@/assets/logos/portfolio-12.jpg";
import hmConsultLogo from "@/assets/logos/portfolio-13.jpg";
import pebbleLogo from "@/assets/logos/portfolio-14.jpg";
import weAreTravellersLogo from "@/assets/logos/portfolio-15.jpg";
import nishitaEximLogo from "@/assets/logos/portfolio-16.jpg";
import brand1 from "@/assets/brand-identity/brand-1.jpg";
import brand2 from "@/assets/brand-identity/brand-2.jpg";
import brand3 from "@/assets/brand-identity/brand-3.jpg";
import brand4 from "@/assets/brand-identity/brand-4.jpg";
import brand5 from "@/assets/brand-identity/brand-5.jpg";
import brand6 from "@/assets/brand-identity/brand-6.jpg";
import brand7 from "@/assets/brand-identity/brand-7.jpg";
import brand8 from "@/assets/brand-identity/brand-8.jpg";
import brand9 from "@/assets/brand-identity/brand-9.jpg";
import brand10 from "@/assets/brand-identity/brand-10.jpg";
import brand11 from "@/assets/brand-identity/brand-11.jpg";
import brand12 from "@/assets/brand-identity/brand-12.jpg";
import brand13 from "@/assets/brand-identity/brand-13.jpg";
import brand14 from "@/assets/brand-identity/brand-14.jpg";
import brand15 from "@/assets/brand-identity/brand-15.jpg";
import brand16 from "@/assets/brand-identity/brand-16.jpg";
import brand17 from "@/assets/brand-identity/brand-17.jpg";
import brand18 from "@/assets/brand-identity/brand-18.jpg";
import brand19 from "@/assets/brand-identity/brand-19.jpg";
import brand20 from "@/assets/brand-identity/brand-20.jpg";
import brand21 from "@/assets/brand-identity/brand-21.jpg";
import creative1 from "@/assets/social-creatives/creative-1.png";
import creative2 from "@/assets/social-creatives/creative-2.png";
import creative3 from "@/assets/social-creatives/creative-3.png";
import creative4 from "@/assets/social-creatives/creative-4.png";
import creative5 from "@/assets/social-creatives/creative-5.png";
import creative6 from "@/assets/social-creatives/creative-6.png";
import creative7 from "@/assets/social-creatives/creative-7.png";
import creative8 from "@/assets/social-creatives/creative-8.png";
import mamaEarthLogo from "@/assets/case-studies/mamaearth.png";
import upgradLogo from "@/assets/case-studies/upgrad.png";
import tata1mgLogo from "@/assets/case-studies/tata1mg.png";
import shriramLogo from "@/assets/case-studies/shriram-properties.png";
import jainUniversityLogo from "@/assets/case-studies/jain-university.png";
import atriaInstituteLogo from "@/assets/case-studies/atria-institute.png";
import bhrighuAcademyLogo from "@/assets/case-studies/bhrighu-academy.png";

const tabs = [
  { id: "logo", label: "Logo", icon: PenTool },
  { id: "brand-identity", label: "Brand Identity", icon: Palette },
  { id: "social-creatives", label: "Social Creatives", icon: Image },
  { id: "seo", label: "SEO", icon: Search },
  { id: "lead-generation", label: "Lead Generation", icon: TrendingUp },
  { id: "ugc-content", label: "UGC Content", icon: Video },
  { id: "product-photoshoot", label: "Product Photoshoot", icon: Camera },
];

const seoClients = [
  { name: "Book My Scans", industry: "Healthcare", logo: bookMyScansLogo, slug: "book-my-scans", bgColor: "#7ED957", reportImage: bookMyScansReport, metrics: [{ label: "Organic Traffic", value: "+320%" }, { label: "Keywords Ranked", value: "1,200+" }, { label: "Domain Authority", value: "+18" }] },
  { name: "Surana Educational Institutions", industry: "Education", logo: suranaLogo, slug: "surana-educational", bgColor: "#ffffff", reportImage: suranaReport, metrics: [{ label: "Organic Traffic", value: "+195%" }, { label: "Keywords Ranked", value: "850+" }, { label: "Lead Growth", value: "+140%" }] },
  { name: "Harvest International School", industry: "Education", logo: harvestLogo, slug: "harvest-international", bgColor: "#ffffff", reportImage: harvestReport, metrics: [{ label: "Organic Traffic", value: "+30%" }, { label: "Keywords Ranked", value: "420+" }, { label: "Visibility", value: "+65%" }] },
  { name: "Interiors & More", industry: "Home Decor", logo: interiorsLogo, slug: "interiors-and-more", bgColor: "#ffffff", metrics: [{ label: "Organic Traffic", value: "+250%" }, { label: "Keywords Ranked", value: "680+" }, { label: "Conversions", value: "+90%" }] },
  { name: "Magicbricks", industry: "Real Estate", logo: magicbricksLogo, slug: "magicbricks", bgColor: "#E8383B", metrics: [{ label: "Organic Traffic", value: "+180%" }, { label: "Keywords Ranked", value: "2,400+" }, { label: "Domain Authority", value: "+22" }] },
  { name: "Mamaearth", industry: "D2C / E-commerce", logo: mamaEarthLogo, slug: "mamaearth", bgColor: "#ffffff", metrics: [{ label: "Organic Traffic", value: "+210%" }, { label: "Keywords Ranked", value: "1,800+" }, { label: "Conversions", value: "+75%" }] },
  { name: "upGrad", industry: "Education", logo: upgradLogo, slug: "upgrad", bgColor: "#F42A3B", metrics: [{ label: "Organic Traffic", value: "+160%" }, { label: "Keywords Ranked", value: "3,200+" }, { label: "Visibility", value: "+85%" }] },
  { name: "Tata 1mg", industry: "Healthcare", logo: tata1mgLogo, slug: "tata1mg", bgColor: "#FA6F60", metrics: [{ label: "Organic Traffic", value: "+275%" }, { label: "Keywords Ranked", value: "2,100+" }, { label: "Lead Growth", value: "+110%" }] },
  { name: "Shriram Properties", industry: "Real Estate", logo: shriramLogo, slug: "shriram-properties", bgColor: "#FFFFFF", metrics: [{ label: "Organic Traffic", value: "+145%" }, { label: "Keywords Ranked", value: "950+" }, { label: "Conversions", value: "+68%" }] },
  { name: "Jain University", industry: "Education", logo: jainUniversityLogo, slug: "jain-university", bgColor: "#ffffff", metrics: [{ label: "Organic Traffic", value: "+190%" }, { label: "Keywords Ranked", value: "1,500+" }, { label: "Lead Growth", value: "+125%" }] },
  { name: "Atria Institute of Technology", industry: "Education", logo: atriaInstituteLogo, slug: "atria-institute", bgColor: "#ffffff", metrics: [{ label: "Organic Traffic", value: "+170%" }, { label: "Keywords Ranked", value: "720+" }, { label: "Visibility", value: "+95%" }] },
  { name: "Bhrighu Academy", industry: "Education", logo: bhrighuAcademyLogo, slug: "bhrighu-academy", bgColor: "#ffffff", metrics: [{ label: "Organic Traffic", value: "+230%" }, { label: "Keywords Ranked", value: "560+" }, { label: "Lead Growth", value: "+150%" }] },
];

const leadGenClients = [
  { name: "Aadhya Animatics", industry: "Animation", logo: aadhyaLogo, slug: "aadhya-animatics", bgColor: "#000000", metrics: [{ label: "Leads Generated", value: "2,500+" }, { label: "Cost Per Lead", value: "-45%" }, { label: "Conversion Rate", value: "+120%" }] },
  { name: "Interiors & More", industry: "Home Decor", logo: interiorsLogo, slug: "interiors-and-more", bgColor: "#ffffff", metrics: [{ label: "Leads Generated", value: "1,800+" }, { label: "Cost Per Lead", value: "-38%" }, { label: "ROI", value: "+210%" }] },
];

/* ── Demo content for non-report tabs ── */

const logoImages = [
  { src: da360Logo, alt: "Digital Academy 360 logo design" },
  { src: icsLogo, alt: "ICS logo design" },
  { src: aasaanImpexLogo, alt: "Aasaan Impex logo design" },
  { src: berylLogo, alt: "Beryl Luxury Interiors logo design" },
  { src: brownBakeLogo, alt: "Brown Bake Company logo design" },
  { src: dataQubeLogo, alt: "DataQube logo design" },
  { src: diakoniaLogo, alt: "Diakonia Financial and Insurance Services logo design" },
  { src: paragonPartnersLogo, alt: "Paragon Partners logo design" },
  { src: lewisTransportLogo, alt: "Lewis Transport Contractors logo design" },
  { src: novaLifelineLogo, alt: "Nova Lifeline Super Speciality Hospital logo design" },
  { src: samsaraLogo, alt: "Samsara logo design" },
  { src: ardraLogo, alt: "Ardra logo design" },
  { src: oleLogo, alt: "OLE Order Local Eats logo design" },
  { src: hmConsultLogo, alt: "HM Consult logo design" },
  { src: pebbleLogo, alt: "Pebble logo design" },
  { src: weAreTravellersLogo, alt: "We Are Travellers logo design" },
  { src: nishitaEximLogo, alt: "Nishita Exim logo design" },
  { src: kashtiLogo, alt: "Kashti logo design" },
  { src: logo1, alt: "Logo design portfolio project 1" },
  { src: logo2, alt: "Logo design portfolio project 2" },
  { src: logo3, alt: "Logo design portfolio project 3" },
  { src: logo4, alt: "Logo design portfolio project 4" },
  { src: logo6, alt: "Logo design portfolio project 6" },
  { src: logo7, alt: "Logo design portfolio project 7" },
  { src: logo8, alt: "Logo design portfolio project 8" },
  { src: logo10, alt: "Logo design portfolio project 10" },
  { src: logo11, alt: "Logo design portfolio project 11" },
];

const LogoGrid = ({ limit }: { limit?: number }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    {logoImages.slice(0, limit).map((logo) => (
      <Card key={logo.alt} className="bg-background border-border/50 overflow-hidden hover:shadow-lg transition-shadow group">
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden">
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);
const brandImages = [brand14, brand15, brand16, brand17, brand18, brand19, brand20, brand21, brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10, brand11, brand12, brand13];

const BrandIdentityGrid = ({ limit }: { limit?: number }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    {brandImages.slice(0, limit).map((img, i) => (
      <Card key={i} className="bg-background border-border/50 overflow-hidden hover:shadow-lg transition-shadow group">
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden">
            <img
              src={img}
              alt={`Brand identity project ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

const socialCreativeImages = [
  creative1, creative2, creative3, creative4,
  creative5, creative6, creative7, creative8,
];

const SocialCreativesGrid = ({ limit }: { limit?: number }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    {socialCreativeImages.slice(0, limit).map((img, i) => (
      <Card key={i} className="bg-background border-border/50 overflow-hidden hover:shadow-lg transition-shadow group">
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden">
            <img
              src={img}
              alt={`Social media creative ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

const ugcVideos = [
  { src: "/videos/ugc-1.mp4", poster: "/videos/ugc-1-thumb.png" },
  { src: "/videos/ugc-2.mp4" },
  { src: "/videos/ugc-3.mp4", poster: "/videos/ugc-3-thumb.png" },
  { src: "/videos/ugc-4.mp4", poster: "/videos/ugc-4-thumb.png" },
  { src: "/videos/ugc-5.mp4" },
  { src: "/videos/ugc-6.mp4" },
  { src: "/videos/ugc-7.mp4", poster: "/videos/ugc-7-thumb.jpg" },
  { src: "/videos/ugc-reel-5.mp4", poster: "/videos/ugc-8-thumb.png" },
];

const HoverVideo = ({ src, poster }: { src: string; poster?: string }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = React.useState(true);
  const [isHovered, setIsHovered] = React.useState(false);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <Card
      className="bg-background border-border/50 overflow-hidden hover:shadow-lg transition-shadow"
      onMouseEnter={() => { setIsHovered(true); videoRef.current?.play(); }}
      onMouseLeave={() => { setIsHovered(false); if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; } }}
    >
      <CardContent className="p-0">
        <div className="aspect-[9/16] overflow-hidden relative group">
          {poster && (
            <img loading="lazy" decoding="async"
              src={poster}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            />
          )}
          <video
            ref={videoRef}
            src={src}
            className="w-full h-full object-cover"
            muted
            playsInline
            loop
            preload="metadata"
          />
          <button
            onClick={toggleMute}
            className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-foreground hover:bg-background/90 z-20"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

const UGCGrid = ({ limit }: { limit?: number }) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    {ugcVideos.slice(0, limit).map((video, i) => (
      <HoverVideo key={i} src={video.src} poster={video.poster} />
    ))}
  </div>
);

import photoshootSkincare from "@/assets/photoshoots/skincare-flatlay.jpg";
import photoshootFurniture from "@/assets/photoshoots/furniture-lifestyle.jpg";
import photoshootFitness from "@/assets/photoshoots/fitness-action.jpg";
import photoshootFood from "@/assets/photoshoots/food-styled.jpg";
import photoshootTech from "@/assets/photoshoots/tech-studio.jpg";
import photoshootSupplements from "@/assets/photoshoots/supplements-clean.jpg";

const photoshootProjects = [
  { product: "Skincare Range", client: "GlowNest", shots: 48, style: "Flat Lay", accent: "hsl(340,60%,65%)", image: photoshootSkincare },
  { product: "Furniture Collection", client: "Luxe Interiors", shots: 32, style: "Lifestyle", accent: "hsl(35,60%,50%)", image: photoshootFurniture },
  { product: "Fitness Gear", client: "FitPulse", shots: 24, style: "Action", accent: "hsl(350,80%,55%)", image: photoshootFitness },
  { product: "Food Menu", client: "UrbanBite", shots: 56, style: "Styled", accent: "hsl(25,90%,55%)", image: photoshootFood },
  { product: "Tech Gadgets", client: "TechVista", shots: 36, style: "Studio", accent: "hsl(220,80%,55%)", image: photoshootTech },
  { product: "Health Supplements", client: "PureWell", shots: 28, style: "Clean", accent: "hsl(160,60%,45%)", image: photoshootSupplements },
];

const PhotoshootGrid = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
    {photoshootProjects.map((p, i) => (
      <Card key={i} className="bg-background border-border/50 overflow-hidden hover:shadow-lg transition-shadow group">
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden">
            <img
              src={p.image}
              alt={`${p.product} - ${p.client}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
          <div className="p-4">
            <div className="font-semibold text-sm text-foreground">{p.product}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{p.client}</div>
            <div className="flex items-center justify-between mt-3">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{p.style}</span>
              <span className="text-[11px] text-muted-foreground">{p.shots} shots</span>
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

const BentoClientGrid = ({ clients, limit, homePreview = false, dark = false }: { clients: { name: string; industry: string; logo: string; slug: string; bgColor?: string; reportImage?: string; metrics?: { label: string; value: string }[] }[]; limit?: number; homePreview?: boolean; dark?: boolean }) => {
  const navigate = useNavigate();
  const [reportOpen, setReportOpen] = React.useState(false);
  const [reportImg, setReportImg] = React.useState<string | null>(null);

  // Lead-gen slugs route to the dedicated lead-gen report page
  const leadGenSlugs = new Set(leadGenClients.map((c) => c.slug));

  const handleViewReport = (client: typeof clients[0]) => {
    if (client.reportImage) {
      setReportImg(client.reportImage);
      setReportOpen(true);
    } else if (leadGenSlugs.has(client.slug)) {
      navigate(`/lead-gen-report/${client.slug}`);
    } else {
      navigate(`/report/${client.slug}`);
    }
  };

  return (
    <>
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${homePreview ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-4 max-w-7xl mx-auto`}>
        {clients.slice(0, limit).map((client) => (
          <div
            key={client.name}
            className={`group relative overflow-hidden rounded-2xl border-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 ${dark ? "border-primary-foreground/15 bg-primary-foreground/5" : "border-border/50 bg-gradient-to-br from-muted/40 via-background to-muted/20"}`}
          >
            <div className="flex flex-col">
              {/* Logo area */}
              <div
                className={`flex items-center justify-center overflow-hidden transition-colors duration-500 ${homePreview ? "h-32" : "h-44"}`}
                style={{ backgroundColor: client.bgColor || undefined }}
              >
                <img loading="lazy" decoding="async"
                  src={client.logo}
                  alt={client.name}
                  className={`w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ${homePreview ? "p-4" : "p-6"}`}
                />
              </div>

              {/* Info */}
              <div className={`flex flex-col justify-center space-y-3 ${homePreview ? "p-4" : "p-6"}`}>
                <div>
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-1.5">
                    {client.industry}
                  </span>
                  <h3 className={`font-bold ${dark ? "text-primary-foreground" : "text-foreground"} ${homePreview ? "text-base leading-snug" : "text-xl"}`}>
                    {client.name}
                  </h3>
                </div>

                {/* Metrics */}
                {client.metrics && (
                  <div className="grid grid-cols-3 gap-2">
                    {client.metrics.map((m, mi) => (
                      <div key={mi} className={`rounded-xl text-center border ${dark ? "bg-primary-foreground/10 border-primary-foreground/15" : "bg-muted/50 border-border/20"} ${homePreview ? "p-2" : "p-3"}`}>
                        <div className={`font-bold text-primary ${homePreview ? "text-sm" : "text-lg"}`}>{m.value}</div>
                        <div className={`text-[10px] mt-0.5 font-medium leading-tight ${dark ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <Button
                  variant="unstyled"
                  onClick={() => handleViewReport(client)}
                  className={`inline-flex h-auto items-center gap-2 self-start bg-brand hover:bg-brand/90 text-primary-foreground font-semibold rounded-full ${homePreview ? "px-3 py-2 text-xs" : "px-5 py-2.5 text-sm"}`}
                >
                  View Full Report
                  <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Report Screenshot Modal */}
      <Dialog open={reportOpen} onOpenChange={setReportOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-2 bg-background border-border/30">
          {reportImg && (
            <img loading="lazy" decoding="async" src={reportImg} alt="SEO Report" className="w-full h-auto rounded-lg" />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export const WorkPortfolioTabs = ({ homePreview = false, dark = false, heading, description, defaultTab = "logo" }: { homePreview?: boolean; dark?: boolean; heading?: React.ReactNode; description?: string; defaultTab?: string }) => {
  const [activeTab, setActiveTab] = React.useState(defaultTab);
  const visibleTabs = homePreview ? tabs.filter((tab) => tab.id !== "product-photoshoot") : tabs;
  const previewLimit = homePreview ? 8 : undefined;

  return (
    <section className={`${homePreview ? "py-16 md:py-24" : "py-16 md:py-20"} ${dark ? "bg-foreground" : "bg-background"}`}>
      <div className="container mx-auto px-4 md:px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-3 ${dark ? "text-primary-foreground" : "text-foreground"}`}>
            {heading ?? <>Real Projects. Real Results. <span className="text-brand-gradient">Real Growth.</span></>}
          </h2>
          <p className={`max-w-2xl mx-auto ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
            {description ?? "Explore our portfolio across multiple services and discover how we can boost visibility, engagement, and growth for businesses with strategic digital initiatives."}
          </p>
        </div>

        <Tabs defaultValue={defaultTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center h-auto gap-1 bg-transparent p-0 rounded-none mb-8">
            {visibleTabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={`flex min-h-[44px] md:min-h-0 items-center gap-1.5 text-xs md:text-sm px-4 py-2.5 rounded-t-lg border-b-2 border-transparent data-[state=active]:border-[hsl(18,100%,48%)] data-[state=active]:bg-[hsl(18,100%,48%)] data-[state=active]:text-white data-[state=active]:shadow-none transition-all bg-transparent ${dark ? "text-primary-foreground/60 hover:text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="logo">
            <LogoGrid limit={previewLimit} />
          </TabsContent>

          <TabsContent value="brand-identity">
            <BrandIdentityGrid limit={previewLimit} />
          </TabsContent>

          <TabsContent value="social-creatives">
            <SocialCreativesGrid limit={previewLimit} />
          </TabsContent>

          <TabsContent value="seo">
            <BentoClientGrid clients={seoClients} limit={previewLimit} homePreview={homePreview} dark={dark} />
          </TabsContent>

          <TabsContent value="lead-generation">
            <BentoClientGrid clients={leadGenClients} limit={previewLimit} homePreview={homePreview} dark={dark} />
          </TabsContent>

          <TabsContent value="ugc-content">
            <UGCGrid limit={previewLimit} />
          </TabsContent>

          <TabsContent value="product-photoshoot">
            <PhotoshootGrid />
          </TabsContent>

          {homePreview && (
            <div className="mt-9 flex justify-center">
              <Button asChild size="lg" className="rounded-full px-7">
                <Link to={`/our-work?category=${activeTab}`}>
                  See More {visibleTabs.find((tab) => tab.id === activeTab)?.label} Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </Tabs>
      </div>
    </section>
  );
};
