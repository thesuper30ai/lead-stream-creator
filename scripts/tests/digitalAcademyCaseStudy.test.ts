import { describe, expect, test } from "bun:test";
import { aiPlatforms, campaignSnapshot, campaignTotals, franchiseRankings, keywordRankings, monthlyPerformance, searchVisibility } from "../../src/data/digitalAcademyCaseStudy";

describe("Digital Academy 360 supplied campaign results", () => {
  test("preserves the four before-and-after headline results", () => {
    expect(campaignSnapshot.map(row => [row.before, row.after])).toEqual([["0", "22"], ["0", "28"], ["41", "58"], ["1", "13"]]);
  });
  test("preserves six-month search and all-source lead totals", () => {
    expect(campaignTotals).toEqual({ impressions: 598308, clicks: 9951, sessions: 14378, leads: 1465, engagedSessions: 9016, engagementRate: 62.71 });
    for (const key of ["impressions", "clicks", "leads"] as const) {
      expect(monthlyPerformance.reduce((sum, month) => sum + month[key], 0)).toBe(campaignTotals[key]);
    }
  });
  test("preserves monthly organic clicks and reported leads without claiming steady growth", () => {
    expect(monthlyPerformance.map(row => [row.clicks, row.leads])).toEqual([[1597, 295], [1677, 346], [2055, 265], [1641, 196], [1661, 196], [1320, 167]]);
  });
  test("keeps AI appearances distinct from number-one rankings", () => {
    expect(aiPlatforms.map(row => [row.before, row.after])).toEqual([[15, 15], [6, 12], [5, 8], [9, 13], [6, 10]]);
    expect(searchVisibility.slice(-2).map(row => [row.before, row.after])).toEqual([["41", "58"], ["1", "13"]]);
  });
  test("preserves selected locality and franchise keyword positions", () => {
    expect(keywordRankings.map(row => row.after)).toEqual([1, 1, 1, 1, 1, 1, 1, 2, 1, 1]);
    expect(franchiseRankings.map(row => row.after)).toEqual([1, 2, 1, 1, 2, 3, 2, 1]);
  });
});