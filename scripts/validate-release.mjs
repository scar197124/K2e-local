import fs from "node:fs";

const expectedVersion = "1.14.3";
const required = [
  "index.html",
  "app.html",
  "manifest.json",
  "sw.js",
  "assets/chart.umd.js",
  "assets/k2e-local-social-preview.png",
  "GITHUB_SOCIAL_PREVIEW_UPLOAD.png",
  "VERSION",
  "README.md",
  "RELEASE_NOTES_v1.12.9.md",
  "RELEASE_NOTES_v1.13.0.md",
  "RELEASE_NOTES_v1.13.1.md",
  "RELEASE_NOTES_v1.13.2.md",
  "RELEASE_NOTES_v1.14.0.md",
  "RELEASE_NOTES_v1.14.1.md",
  "RELEASE_NOTES_v1.14.2.md",
  "RELEASE_NOTES_v1.14.3.md",
  "assets/k2e-logo-horizontal-dark.png",
  "assets/k2e-logo-app-icon.png",
  "assets/k2e-local-social-preview-v1.14.1.png",
  "robots.txt",
  "sitemap.xml",
  ".github/workflows/pages.yml",
];

const missing = required.filter((path) => !fs.existsSync(path));
if (missing.length) {
  console.error("Missing required files:", missing.join(", "));
  process.exit(1);
}

const version = fs.readFileSync("VERSION", "utf8").trim();
const app = fs.readFileSync("app.html", "utf8");
const index = fs.readFileSync("index.html", "utf8");
const readme = fs.readFileSync("README.md", "utf8");
const manifest = JSON.parse(fs.readFileSync("manifest.json", "utf8"));
const serviceWorker = fs.readFileSync("sw.js", "utf8");

if (!app.includes("k2e-v180-scenario-trust-script")) throw new Error("Scenario comparison module missing");
if (!app.includes("k2e-v110-action-report-script")) throw new Error("Action plan/report module missing");
if (version !== expectedVersion) throw new Error(`VERSION mismatch: expected ${expectedVersion}, found ${version}`);
if (manifest.version !== expectedVersion) throw new Error(`Manifest version mismatch: expected ${expectedVersion}, found ${manifest.version}`);
if (!index.includes("k2e-local-social-preview-v1.14.1.png")) throw new Error("Landing-page social preview metadata missing or stale");
if (!app.includes("k2e-local-social-preview-v1.14.1.png")) throw new Error("App social preview metadata missing or stale");
if (!serviceWorker.includes("k2e-local-v1.14.3-logo-refinement")) throw new Error("Service-worker cache name is stale");
if (!readme.includes("https://nrg-roan.vercel.app/")) throw new Error("README launch URL is incorrect");
if ((readme.match(/^# K2E Local$/gm) || []).length !== 1) throw new Error("README contains duplicate primary headings");

if (!fs.readFileSync('robots.txt','utf8').includes('https://nrg-roan.vercel.app/sitemap.xml')) throw new Error('robots.txt production URL is stale');
if (!fs.readFileSync('sitemap.xml','utf8').includes('https://nrg-roan.vercel.app/app.html')) throw new Error('sitemap production URLs are stale');

console.log(`K2E Local v${expectedVersion} release validation passed.`);
