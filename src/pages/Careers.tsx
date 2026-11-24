import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  ArrowRight, Briefcase, MapPin, Clock, GraduationCap, Rocket, Users, Bot, TrendingUp,
  HeartHandshake, Sparkles, CheckCircle2, Send, Phone, FileText, MessageSquare, Handshake,
} from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/home-agency-team.jpg";
import teamImage from "@/assets/home-seo-team.jpg";
import strategyImage from "@/assets/home-strategy-session.jpg";
import { careerOpenings } from "@/data/careers";
import { submitFormToGoogleSheets } from "@/hooks/useFormSubmit";
import { openThankYouPage } from "@/lib/thankYouRedirect";
import { validateEmail, validatePhone, sanitizeInput } from "@/lib/validation";
import "./Careers.css";

const heroFeatures = [
  { icon: Rocket, title: "Grow Fast", text: "Work on real brands and real budgets from your first week." },
  { icon: Bot, title: "AI-First Tools", text: "Learn the AI SEO and marketing tools modern agencies run on." },
  { icon: Users, title: "Team of 30", text: "Learn alongside strategists, designers, writers and analysts." },
];

const perks = [
  { icon: GraduationCap, title: "Learning Every Week", text: "Regular training sessions on SEO, ads, content and AI tools." },
  { icon: TrendingUp, title: "Clear Career Path", text: "Defined growth from executive to specialist to team lead." },
  { icon: Briefcase, title: "Real Client Work", text: "Own campaigns for growing brands across many industries." },
  { icon: HeartHandshake, title: "Supportive Culture", text: "Friendly seniors, open feedback and no blame." },
  { icon: Sparkles, title: "Creative Freedom", text: "Pitch ideas, test new strategies and see them go live." },
  { icon: MapPin, title: "Bangalore Office", text: "A collaborative workspace in J. P. Nagar, Bengaluru." },
];

const steps = [
  { icon: FileText, title: "Apply", text: "Share your details and the role you are interested in." },
  { icon: Phone, title: "Intro Call", text: "A short call with our team to understand your goals." },
  { icon: MessageSquare, title: "Skill Round", text: "A practical task or discussion based on the role." },
  { icon: Handshake, title: "Offer", text: "Meet the founders, get your offer and join the team." },
];

const emptyForm = { name: "", email: "", phone: "", position: "", experience: "", profile: "", message: "" };

const Careers = () => {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const applyFor = (title: string) => {
    setForm((current) => ({ ...current, position: title }));
    document.getElementById("careers-apply")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!validateEmail(form.email)) next.email = "Please enter a valid email";
    if (!validatePhone(form.phone)) next.phone = "Enter 10 digit number starting with 6, 7, 8, or 9";
    if (!form.position) next.position = "Please choose a role";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the errors before submitting");
      return;
    }
    setLoading(true);
    try {
      const result = await submitFormToGoogleSheets({
        form_id: "careers_form",
        form_name: "Careers Application",
        page_url: window.location.href,
        trigger_type: "embedded",
        data: {
          name: sanitizeInput(form.name),
          email: sanitizeInput(form.email),
          phone: `+91${sanitizeInput(form.phone)}`,
          position: form.position,
          experience: form.experience,
          profile_link: sanitizeInput(form.profile),
          message: sanitizeInput(form.message),
        },
      });
      if (!result.success) throw new Error(result.error);
      openThankYouPage({ name: form.name, email: form.email, source: "careers" });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Careers at TheSuper30 | Digital Marketing Jobs in Bangalore</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Join TheSuper30 in Bangalore. Open roles for SEO Expert, E-Commerce Marketer, Social Media Executive and Digital Marketing Executive. Apply today." />
        <link rel="canonical" href="https://www.thesuper30.ai/careers" />
        <meta property="og:title" content="Careers at TheSuper30 | Digital Marketing Jobs in Bangalore" />
        <meta property="og:description" content="Join TheSuper30 in Bangalore. Open roles for SEO Expert, E-Commerce Marketer, Social Media Executive and Digital Marketing Executive. Apply today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thesuper30.ai/careers" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />

      <main className="careers-page min-h-screen pt-16 md:pt-20">
        {/* HERO */}
        <section id="careers-hero" className="careers-hero">
          <img src={heroImage} alt="The Super30 team collaborating in the Bangalore office" width={1600} height={1104} fetchPriority="high" />
          <div className="careers-hero-glow" aria-hidden />
          <div className="container mx-auto careers-hero-inner">
            <div className="careers-hero-grid">
              <div>
                <p className="careers-eyebrow careers-eyebrow-light"><span /> Careers at The Super30</p>
                <h1>Build Your Career With <span className="text-brand">India's AI-First Marketing Team.</span></h1>
                <p className="careers-hero-copy">Join a team of 30 marketers, strategists and creators helping brands grow with AI SEO, lead generation, social media and performance marketing.</p>
                <div className="careers-hero-actions">
                  <Button asChild size="lg" className="careers-btn-solid"><a href="#careers-openings">View Open Roles<ArrowRight className="ml-2 h-4 w-4" /></a></Button>
                  <Button asChild size="lg" variant="outline" className="careers-btn-outline"><a href="#careers-apply">Apply Now</a></Button>
                </div>
                <nav aria-label="Breadcrumb" className="careers-breadcrumb"><Link to="/">Home</Link><ArrowRight className="h-3 w-3" /><span>Careers</span></nav>
              </div>
              <div className="careers-hero-card">
                <div className="flex items-start justify-between"><Briefcase className="h-11 w-11" strokeWidth={1.3} /><strong>{careerOpenings.length}</strong></div>
                <h3>Open Positions</h3>
                <p>Full-time roles at our office in J. P. Nagar, Bengaluru.</p>
              </div>
            </div>
            <div className="careers-hero-features">
              {heroFeatures.map((f) => (
                <div key={f.title}><f.icon strokeWidth={1.4} /><div><h3>{f.title}</h3><p>{f.text}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY JOIN */}
        <section id="careers-why" className="careers-light careers-band">
          <div className="container mx-auto careers-why-grid">
            <div className="careers-collage">
              <img src={teamImage} alt="Super30 SEO specialists at work" loading="lazy" className="careers-collage-main" />
              <div>
                <img src={strategyImage} alt="A strategy session with the team" loading="lazy" />
                <div className="careers-collage-note"><strong>30+</strong><span>Experts to learn from</span></div>
              </div>
            </div>
            <div>
              <p className="careers-eyebrow"><span /> Why Join Us</p>
              <h2>A Place Where <span className="text-brand">Marketers Grow Faster</span></h2>
              <p className="careers-copy">At The Super30 you work on live campaigns, learn from experienced specialists and see the direct impact of your work on client growth.</p>
              <div className="careers-perks">
                {perks.map((p) => (
                  <article key={p.title}><p.icon /><div><h3>{p.title}</h3><p>{p.text}</p></div></article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* OPEN ROLES */}
        <section id="careers-openings" className="careers-dark careers-band">
          <div className="container mx-auto">
            <div className="careers-heading">
              <p className="careers-eyebrow careers-eyebrow-light"><span /> Current Openings</p>
              <h2>Open Positions at <span className="text-brand">The Super30</span></h2>
              <p className="careers-copy">Find the role that fits your skills and apply in under two minutes.</p>
            </div>
            <div className="careers-jobs">
              {careerOpenings.map((job) => (
                <article key={job.id} className="careers-job" id={`job-${job.id}`}>
                  <div className="careers-job-top">
                    <span className="careers-job-team">{job.team}</span>
                    <span className="careers-job-type">{job.type}</span>
                  </div>
                  <h3>{job.title}</h3>
                  <ul className="careers-job-meta">
                    <li><MapPin />{job.location}</li>
                    <li><Clock />{job.experience}</li>
                  </ul>
                  <p className="careers-job-summary">{job.summary}</p>
                  <ul className="careers-job-list">
                    {job.responsibilities.map((r) => <li key={r}><CheckCircle2 />{r}</li>)}
                  </ul>
                  <div className="careers-job-skills">{job.skills.map((s) => <span key={s}>{s}</span>)}</div>
                  <Button type="button" onClick={() => applyFor(job.title)} className="careers-btn-solid careers-job-btn">Apply for this role<ArrowRight className="ml-2 h-4 w-4" /></Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="careers-process" className="careers-light careers-band">
          <div className="container mx-auto">
            <div className="careers-heading">
              <p className="careers-eyebrow"><span /> Hiring Process</p>
              <h2>Simple, Fast and <span className="text-brand">Transparent</span></h2>
              <p className="careers-copy">Our hiring process is quick, so you hear back from us without long waits.</p>
            </div>
            <div className="careers-steps">
              {steps.map((s, i) => (
                <article key={s.title}><span className="careers-step-num">0{i + 1}</span><s.icon /><h3>{s.title}</h3><p>{s.text}</p></article>
              ))}
            </div>
          </div>
        </section>

        {/* APPLY */}
        <section id="careers-apply" className="careers-dark careers-band">
          <div className="container mx-auto careers-apply-grid">
            <div>
              <p className="careers-eyebrow careers-eyebrow-light"><span /> Apply Now</p>
              <h2>Ready to Join <span className="text-brand">The Super30?</span></h2>
              <p className="careers-copy">Tell us a little about yourself and the role you want. Our team reviews every application and gets back to shortlisted candidates.</p>
              <ul className="careers-apply-points">
                {["Quick 2-minute application", "Response from our hiring team", "Office in J. P. Nagar, Bengaluru"].map((t) => <li key={t}><CheckCircle2 />{t}</li>)}
              </ul>
              <p className="careers-apply-contact">Questions? Email <a href="mailto:hello@thesuper30.ai">hello@thesuper30.ai</a> or call <a href="tel:+918904150555">+91 89041 50555</a>.</p>
            </div>

            <form onSubmit={handleSubmit} className="careers-form" id="careers-form" noValidate>
              <div className="careers-form-row">
                <div className="space-y-2">
                  <Label htmlFor="careers-name">Full Name *</Label>
                  <Input id="careers-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className={errors.name ? "border-destructive" : ""} />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="careers-email">Email *</Label>
                  <Input id="careers-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className={errors.email ? "border-destructive" : ""} />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>
              <div className="careers-form-row">
                <div className="space-y-2">
                  <Label htmlFor="careers-phone">Phone *</Label>
                  <div className="flex">
                    <span className="careers-phone-prefix">+91</span>
                    <Input id="careers-phone" inputMode="numeric" value={form.phone} placeholder="9876543210"
                      onChange={(e) => { let v = e.target.value.replace(/\D/g, "").slice(0, 10); if (v && !/^[6-9]/.test(v)) v = ""; setForm({ ...form, phone: v }); }}
                      className={`rounded-l-none ${errors.phone ? "border-destructive" : ""}`} />
                  </div>
                  {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="careers-position">Role *</Label>
                  <Select value={form.position} onValueChange={(v) => setForm({ ...form, position: v })}>
                    <SelectTrigger id="careers-position" className={errors.position ? "border-destructive" : ""}><SelectValue placeholder="Select a role" /></SelectTrigger>
                    <SelectContent>{careerOpenings.map((j) => <SelectItem key={j.id} value={j.title}>{j.title}</SelectItem>)}</SelectContent>
                  </Select>
                  {errors.position && <p className="text-xs text-destructive">{errors.position}</p>}
                </div>
              </div>
              <div className="careers-form-row">
                <div className="space-y-2">
                  <Label htmlFor="careers-experience">Experience</Label>
                  <Select value={form.experience} onValueChange={(v) => setForm({ ...form, experience: v })}>
                    <SelectTrigger id="careers-experience"><SelectValue placeholder="Select experience" /></SelectTrigger>
                    <SelectContent>
                      {["Fresher", "Less than 1 year", "1 - 2 years", "2 - 4 years", "4+ years"].map((x) => <SelectItem key={x} value={x}>{x}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="careers-profile">LinkedIn / Resume Link</Label>
                  <Input id="careers-profile" value={form.profile} onChange={(e) => setForm({ ...form, profile: e.target.value })} placeholder="Paste a link" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="careers-message">Why do you want to join us?</Label>
                <Textarea id="careers-message" rows={4} maxLength={1000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about yourself and your work" />
              </div>
              <Button type="submit" id="btn-careers-form-submit" disabled={loading} className="careers-btn-solid w-full">
                {loading ? "Sending..." : <>Submit Application<Send className="ml-2 h-4 w-4" /></>}
              </Button>
            </form>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Careers;
