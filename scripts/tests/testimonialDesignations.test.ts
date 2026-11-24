import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";

const read = (relative: string) =>
  readFileSync(new URL(relative, import.meta.url), "utf8");

const seoPage = read("../../src/components/landing/AiSeoV2Page.tsx");
const servicePage = read("../../src/components/landing/ServiceV2Page.tsx");
const sharedSection = read("../../src/components/landing/TestimonialSection.tsx");
const serviceTemplate = read("../../src/components/service/ServicePageTemplate.tsx");
const dmSection = read("../../src/components/digital-marketing/DMTestimonialsSection.tsx");

describe("Testimonial sections on service pages", () => {
  test("the SEO page testimonial cards show the quote and company name only", () => {
    expect(seoPage).toContain("{testimonial.quote}");
    expect(seoPage).toContain("{testimonial.company}");
    expect(seoPage).not.toContain("{testimonial.role}");
  });

  test("the shared service-page testimonial cards show the quote and optional company name only", () => {
    expect(servicePage).toContain("{t.quote}");
    expect(servicePage).toContain('"company" in t');
    expect(servicePage).not.toContain("{t.role}");
  });

  test("the dark testimonial carousel hides the name and designation on service pages", () => {
    expect(serviceTemplate).toContain("<TestimonialSection hideAuthor />");
    expect(sharedSection).toContain("hideAuthor = false");
    expect(sharedSection).toContain("{!hideAuthor && (");
    expect(sharedSection).toContain("{currentTestimonial.author}");
    expect(sharedSection).toContain("{currentTestimonial.role}");
  });

  test("pages outside the service templates keep their existing testimonial cards", () => {
    expect(serviceTemplate).not.toContain("<TestimonialSection />");
    expect(sharedSection).toContain("export const TestimonialSection = ({ hideAuthor = false }");
  });

  test("the digital marketing testimonial cards show the quote only", () => {
    expect(dmSection).toContain("{t.text}");
    expect(dmSection).not.toContain("{t.role}");
    expect(dmSection).not.toContain("{t.name}");
  });
});
