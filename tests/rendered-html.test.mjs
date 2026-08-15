import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../dist/client/", import.meta.url);

test("exports the portfolio homepage", async () => {
  const html = await readFile(new URL("index.html", outputRoot), "utf8");

  assert.match(html, /<html[^>]+lang=["']ja["']/i);
  assert.match(html, /くままぬい/);
  assert.match(html, /Security Engineer/);
  assert.match(html, /CVE-2026-8945/);
  assert.match(html, /Certified Red Team Professional/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});
