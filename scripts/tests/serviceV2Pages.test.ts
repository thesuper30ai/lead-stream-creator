import { expect, test } from "bun:test";
import { serviceV2Pages } from "../../src/data/serviceV2Pages";

const lead = serviceV2Pages.find((p) => p.path === "/lead-generation-agency-bangalore");

test("latest service designs resolve at all requested main URLs", () => {
  expect(serviceV2Pages.map((page) => page.path)).toEqual([
    "/lead-generation-agency-bangalore",
    "/social-media-marketing-agency-bangalore",
    "/google-ads-agency-bangalore",
    "/design-agency-bangalore",
    "/content-marketing-agency-bangalore",
    "/content-writing-agency-bangalore",
    "/website-design-company-bangalore",
    "/sms-marketing-agency-bangalore",
  ]);
});

test("latest service canonical paths match their main URLs", () => {
  for (const page of serviceV2Pages) expect(page.seo.canonical).toBe(page.path);
});

const heroLabels = (path: string) => serviceV2Pages.find((p) => p.path === path)?.heroStats?.map(([, label]) => label) ?? [];

test("lead gen hero metrics are about leads and pipeline", () => {
  expect(lead?.heroStats).toEqual([
    ["200+", "Projects Delivered"],
    ["₹20 Cr+", "Ad Spends"],
    ["1 Lakh+", "Leads Generated"],
    ["4.9/5", "Client Rating"],
  ]);
});

test("google ads hero metrics cover enquiry lift and revenue generated", () => {
  expect(heroLabels("/google-ads-agency-bangalore")).toContain("Avg. Enquiry Lift");
  expect(heroLabels("/google-ads-agency-bangalore")).toContain("Client Revenue Generated");
});

test("social media hero metrics cover engagement lift", () => {
  expect(heroLabels("/social-media-marketing-agency-bangalore")).toContain("Avg. Engagement Lift");
  expect(heroLabels("/social-media-marketing-agency-bangalore")).toContain("Client Revenue Generated");
});

test("every service page has its own four hero metrics", () => {
  for (const page of serviceV2Pages) expect(page.heroStats?.length).toBe(4);
  expect(new Set(serviceV2Pages.map((p) => heroLabels(p.path).join("|"))).size).toBe(serviceV2Pages.length);
});

test("lead gen about card shows 1 Lakh+ Leads Generated", () => {
  expect(lead?.aboutCard).toEqual({ value: "1 Lakh+", label: "Leads Generated" });
});

test("lead gen two-colour headings carry the supplied highlights", () => {
  expect([lead?.about.title, lead?.about.highlight]).toEqual(["Turn Ad Spend Into", "Sales-Ready Enquiries."]);
  expect([lead?.why.pre, lead?.why.highlight]).toEqual(["Lead Strategy Tied", "Directly To Sales."]);
  expect([lead?.deliverables.title, lead?.deliverables.highlight]).toEqual(["Measurable Gains Across", "Leads, Bookings, And Sales."]);
  expect([lead?.framework.title, lead?.framework.highlight]).toEqual(["Five Steps From First Click To", "Closed Deal."]);
});

test("lead gen industries copy is tailored per industry", () => {
  expect(lead?.industries?.items?.[0]?.text).toBe("High-intent search funnels that turn software evaluations into booked demos.");
  expect(lead?.industries?.items?.[8]?.text).toBe("Direct booking ad funnels that fill rooms and packages without commissions.");
});

test("content writing page keeps the live page's offers, reasons, industries and process", () => {
  const cw = serviceV2Pages.find((p) => p.path === "/content-writing-agency-bangalore");
  expect(cw?.services.length).toBe(8);
  expect(cw?.deliverables.items.length).toBe(9);
  expect(cw?.industries?.chips?.length).toBe(18);
  expect(cw?.framework.steps.map((s) => s.title)).toEqual(["Audit & Research", "Strategy & Calendar", "Write & Optimise", "Publish & Measure"]);
  expect(cw?.faqSlug).toBe("content-marketing");
});
