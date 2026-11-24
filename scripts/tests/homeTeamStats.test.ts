import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";

const home = readFileSync(new URL("../../src/pages/Home2.tsx", import.meta.url), "utf8");
const about = readFileSync(new URL("../../src/pages/About.tsx", import.meta.url), "utf8");

test("homepage shows 279+ projects delivered", () => {
  expect(home).toContain(">279+</p>");
  expect(home).toContain("Projects Delivered");
});

test("homepage shows 91% client retention rate", () => {
  expect(home).toContain(">91%</p>");
  expect(home).toContain("Client Retention Rate");
});

test("homepage shows 1 Lakh+ leads generated", () => {
  expect(home).toContain(">1 Lakh+</p>");
});

test("homepage shows ₹100 Cr+ revenue generated and drops old figures", () => {
  expect(home).toContain(">₹100 Cr+</p>");
  expect(home).not.toContain("₹16 Cr+");
  expect(home).not.toContain(">300%+</p>");
});

test("team page shows the four company numbers", () => {
  expect(about).toContain("<strong>279+</strong>");
  expect(about).toContain('"91% Client Retention Rate"');
  expect(about).toContain("<strong>1 Lakh+</strong>");
  expect(about).toContain("<strong>₹100 Cr+</strong>");
});
