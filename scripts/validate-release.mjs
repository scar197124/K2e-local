import fs from "node:fs";

const expectedVersion = "1.12.8";
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
  "RELEASE_NOTES_v1.12.8.md",
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
if (!index.includes("k2e-local-social-preview.png?v=1.12.8")) throw new Error("Landing-page social preview metadata missing or stale");
if (!app.includes("k2e-local-social-preview.png?v=1.12.8")) throw new Error("App social preview metadata missing or stale");
if (!serviceWorker.includes("k2e-local-v1.12.8-repository-cleanup")) throw new Error("Service-worker cache name is stale");
if (!readme.includes("https://scar197124.github.io/K2e-local/")) throw new Error("README launch URL is incorrect");
if ((readme.match(/^# K2E Local$/gm) || []).length !== 1) throw new Error("README contains duplicate primary headings");

console.log(`K2E Local v${expectedVersion} release validation passed.`);
