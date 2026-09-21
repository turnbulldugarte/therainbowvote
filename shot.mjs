// Optional visual QA helper — not part of the app build.
//
// Takes full-page screenshots of all three routes at mobile / tablet / desktop widths
// and prints any browser console errors it hits. Handy for a quick visual regression
// check after design changes.
//
// One-time setup (not a project dependency, so it's not in package.json):
//   npm i -D playwright && npx playwright install chromium
//
// Usage (with `npm run dev` already running on :5173 in another terminal):
//   node shot.mjs
//
// Screenshots land next to this file as ./qa-shots/<size><route>.png

import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const OUT_DIR = new URL("./qa-shots/", import.meta.url);
mkdirSync(OUT_DIR, { recursive: true });

const sizes = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 900 },
];
const routes = ["/", "/chapters", "/author"];

const browser = await chromium.launch();
const consoleErrors = [];

for (const size of sizes) {
  const context = await browser.newContext({ viewport: { width: size.width, height: size.height } });
  for (const route of routes) {
    const page = await context.newPage();
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(`[${size.name}${route}] ${msg.text()}`);
    });
    page.on("pageerror", (err) => consoleErrors.push(`[${size.name}${route}] PAGEERROR: ${err.message}`));
    await page.goto(`http://localhost:5173${route}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(500);
    const fname = new URL(`${size.name}${route.replace("/", "-") || "-home"}.png`, OUT_DIR);
    await page.screenshot({ path: fname, fullPage: true });
    await page.close();
  }
  await context.close();
}
await browser.close();

if (consoleErrors.length) {
  console.log("Console errors found:\n" + consoleErrors.join("\n"));
} else {
  console.log(`No console errors. Screenshots saved to ${OUT_DIR.pathname}`);
}
