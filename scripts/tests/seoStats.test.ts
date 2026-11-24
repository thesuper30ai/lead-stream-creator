import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";

const src = readFileSync(new URL("../../src/components/landing/AiSeoV2Page.tsx", import.meta.url), "utf8");

test("SEO page hero metrics match the supplied content sheet", () => {
  expect(src).toContain('["265+", "SEO Projects Delivered"]');
  expect(src).toContain('["579+", "AI Audits Delivered"]');
  expect(src).toContain('["2500+", "Keywords Ranking"]');
  expect(src).toContain('["4.9/5", "Client Rating"]');
});
