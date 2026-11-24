import { Link } from "react-router-dom";
import { ArrowRight, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getFaqs } from "@/data/faqs";

export const FAQSection = ({ slug = "home" }: { slug?: string } = {}) => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const faqs = getFaqs(slug);
  if (!faqs.length) return null;

  const half = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, half), faqs.slice(half)];

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 lg:py-20 bg-muted/30 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative">
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div>
            <span className="badge-brand mb-4">FAQ</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Got Questions? We've Got Answers.
            </h2>
          </div>
          <Link
            to="/contact-us#contact-form-section"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5 transition-all shrink-0"
          >
            View All FAQs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-3 md:gap-4 items-start">
          {columns.map((columnFaqs, colIndex) => (
            <Accordion key={colIndex} type="single" collapsible className="space-y-3 md:space-y-4">
              {columnFaqs.map((faq, index) => {
                const globalIndex = colIndex * half + index;
                return (
                  <AccordionItem
                    key={globalIndex}
                    value={`item-${globalIndex}`}
                    className={`bento-card px-4 md:px-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${(globalIndex + 1) * 50}ms` }}
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-brand transition-colors py-4 text-sm md:text-base [&>svg]:hidden">
                      <span className="flex-1 pr-3">{faq.question}</span>
                      <Plus className="w-4 h-4 shrink-0 text-foreground" />
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};
