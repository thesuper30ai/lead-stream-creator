import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { X, Send, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { openThankYouPage } from "@/lib/thankYouRedirect";
import { validateEmail, validatePhone, sanitizeInput } from "@/lib/validation";
import { submitFormToGoogleSheets } from "@/hooks/useFormSubmit";
import popupImage from "@/assets/home-strategy-session.jpg";

const DISMISS_KEY = "s30_lead_popup_dismissed";
// DeferredUI mounts this after 3s, so 27s here lands the popup at ~30s total.
const SHOW_DELAY_MS = 27000;

const LeadPopup = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/thank-you") return;
    if (sessionStorage.getItem(DISMISS_KEY)) return;
    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!validateEmail(formData.email)) newErrors.email = "Please enter a valid email";
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = "Enter 10 digit number starting with 6, 7, 8, or 9";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    try {
      await submitFormToGoogleSheets({
        form_id: "popup_lead_form",
        form_name: "Popup Lead Form",
        page_url: window.location.href,
        trigger_type: "popup",
        data: {
          name: sanitizeInput(formData.name),
          email: sanitizeInput(formData.email),
          phone: formData.phone ? `+91${sanitizeInput(formData.phone)}` : "",
          service: formData.service || "",
        },
      });
      toast.success("Thank you! We'll get back to you within 24 hours.");
      close();
      openThankYouPage({
        name: formData.name,
        email: formData.email,
        source: "popup",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Free growth consultation"
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl border border-border bg-white text-foreground shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden grid md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Close popup"
          className="absolute top-4 right-4 z-10 w-11 h-11 md:w-8 md:h-8 rounded-full border border-border bg-white/90 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left: image with text */}
        <div className="relative hidden md:block">
          <img loading="lazy" decoding="async"
            src={popupImage}
            alt="The Super 30 team planning a client growth strategy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />
          <div className="relative h-full flex flex-col justify-end p-7 text-white">
            <p className="text-brand text-xs font-semibold mb-2">FREE GROWTH CONSULTATION</p>
            <h2 className="text-2xl font-semibold leading-snug mb-3">
              Get a Free Strategy Call Worth ₹5,000
            </h2>
            <ul className="space-y-2 text-sm text-white/85">
              {["Custom growth plan for your business", "AI SEO & ads audit included", "No spam, no obligation"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: form */}
        <div className="p-6 md:p-8">
          {/* Mobile-only heading (image panel hidden) */}
          <div className="md:hidden mb-5">
            <p className="text-brand text-xs font-semibold mb-2">FREE GROWTH CONSULTATION</p>
            <h2 className="text-xl font-semibold leading-snug">
              Get a Free Strategy Call Worth ₹5,000
            </h2>
          </div>

          <h3 className="hidden md:block text-lg font-semibold mb-1">Book your free call</h3>
          <p className="hidden md:block text-sm text-muted-foreground mb-5">
            Our experts respond within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="space-y-1.5">
              <Label htmlFor="popup-name" className="text-xs">Full Name *</Label>
              <Input
                id="popup-name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="popup-email" className="text-xs">Email *</Label>
              <Input
                id="popup-email"
                name="email"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="popup-phone" className="text-xs">Phone</Label>
              <div className="flex">
                <span className="inline-flex items-center gap-1 px-3 rounded-l-md bg-muted border border-r-0 border-input text-muted-foreground text-sm font-medium">
                  <Phone className="w-3.5 h-3.5" />
                  +91
                </span>
                <Input
                  id="popup-phone"
                  name="phone"
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={(e) => {
                    let cleaned = e.target.value.replace(/\D/g, "").slice(0, 10);
                    if (cleaned.length > 0 && !/^[6-9]/.test(cleaned)) cleaned = "";
                    setFormData({ ...formData, phone: cleaned });
                  }}
                  className={`rounded-l-none ${errors.phone ? "border-destructive" : ""}`}
                />
              </div>
              {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="popup-service" className="text-xs">Service Interest</Label>
              <Select
                value={formData.service}
                onValueChange={(value) => setFormData({ ...formData, service: value })}
              >
                <SelectTrigger id="popup-service" name="service">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ai-seo">AI SEO</SelectItem>
                  <SelectItem value="lead-generation">Lead Generation</SelectItem>
                  <SelectItem value="social-media">Social Media Management</SelectItem>
                  <SelectItem value="google-ads">Google Ads</SelectItem>
                  <SelectItem value="web-design">Web Design & Development</SelectItem>
                  <SelectItem value="branding">Branding & Design</SelectItem>
                  <SelectItem value="content-marketing">Content Marketing</SelectItem>
                  <SelectItem value="sms-whatsapp">SMS & WhatsApp Marketing</SelectItem>
                  <SelectItem value="multiple">Multiple Services</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              id="btn-popup-submit"
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-brand text-primary-foreground hover:bg-brand-dark mt-1"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Book My Free Call
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>

          <p className="text-[11px] text-muted-foreground text-center mt-3">
            24hr response • Free consultation • No spam, ever
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadPopup;
