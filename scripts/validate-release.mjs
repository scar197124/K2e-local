import fs from "node:fs";

const expectedVersion = "2.0.0-rc.25";
const expectedCache = "k2e-local-v2.0.0-rc.25";

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
  `docs/releases/RELEASE_NOTES_v${expectedVersion}.md`,
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
const workflow = fs.readFileSync(".github/workflows/pages.yml", "utf8");

const requireText = (content, marker, message) => {
  if (!content.includes(marker)) throw new Error(message);
};

if (version !== expectedVersion) throw new Error(`VERSION mismatch: expected ${expectedVersion}, found ${version}`);
if (manifest.version !== expectedVersion) throw new Error(`Manifest version mismatch: expected ${expectedVersion}, found ${manifest.version}`);

requireText(serviceWorker, expectedCache, "Service-worker cache name is stale");
requireText(serviceWorker, "self.skipWaiting()", "Service worker does not activate updates promptly");
requireText(serviceWorker, "self.clients.claim()", "Service worker does not claim open clients");

requireText(index, "assets/k2e-local-social-preview.png", "Landing-page social preview metadata is missing");
requireText(app, 'id="importUtilityBtn"', "Local utility import control is missing");
requireText(app, 'id="utilityFile"', "Local utility file input is missing");
requireText(app, "deriveImportedRate", "Utility-rate parsing logic is missing");
requireText(app, "estimate-quality", "Estimate-quality indicator is missing");
requireText(app, 'id="energyTools"', "Unified energy tools section is missing");
requireText(app, 'data-adv-section="smart"', "Smart-home tool is missing");
requireText(app, 'id="smartConnectInsights"', 'Smart Insights connection action is missing');
requireText(app, 'Connection does not enable control.', 'Smart-home connection/control separation copy is missing');
requireText(app, 'id="smartConnectionStatus">Not connected', 'Smart-home connection status is missing');
requireText(app, 'id="smartEnableControls" type="button" hidden', 'Controls are not hidden until a compatible connection exists');
requireText(app, 'What K2E can access', 'Smart-home permission disclosure is missing');
requireText(app, 'Optional planning scenarios — these do not control real devices', 'Smart-home planning scenarios are not clearly separated from real control');

requireText(app, 'data-adv-section="rates"', "Rate-planning tool is missing");
requireText(app, 'data-adv-section="reports"', "Reports tool is missing");
requireText(app, 'id="downloadReport"', "Report download control is missing");
requireText(app, 'id="devicePicker"', "Device preset picker is missing");
if (/id="adjustDevices"|id="adjustDevicesResult"|id="deviceEditor"|>Adjust devices</i.test(app)) throw new Error('Redundant Adjust Devices UI remains in app.html');
requireText(app, '.adv-section .workspace-card{height:480px', 'Energy workspace cards are not locked to the compact stable desktop height');
requireText(app, '.adv-section .scroll-body,.adv-section .scroll-body.compact,.adv-section .scroll-body.tall{flex:1 1 auto;min-height:0;max-height:none;overflow:auto}', 'Energy workspace internal scrolling is missing');
requireText(app, 'PlayStation / Game Console', "Expanded device preset catalog is missing");
requireText(app, '.estimate-panel.results{position:static', 'Estimate panel is still sticky');
if (/Simple Mode|Advanced Mode|Advanced Workspace|Advanced overview/.test(app)) throw new Error('Legacy mode labels remain in app.html');
if (/Simple Mode|Advanced Mode/.test(index)) throw new Error('Legacy mode labels remain on index.html');
requireText(app, '--home-apartment:', 'Semantic home-type color system is missing');
requireText(app, '.choice[data-home="apartment"]', 'Apartment accent styling is missing');
requireText(app, '.choice[data-home="townhome"]', 'Townhouse accent styling is missing');
requireText(app, '.choice[data-home="house"]', 'House accent styling is missing');
requireText(app, '.bar-list .bar-row:nth-child(5)', 'Ranked top-energy color styling is incomplete');
requireText(app, '.estimate-metrics .metric:nth-child(2)', 'Estimate metric accent styling is missing');
requireText(app, 'id="rateSource"', "Rate source label is missing");
requireText(app, 'id="importSummary"', "Compact import summary is missing");
requireText(app, 'What this estimate includes', "Estimate inclusion explanation is missing");
requireText(app, '5*1024*1024', "Utility file-size safeguard is missing");
requireText(app, ':focus-visible', "Keyboard focus styling is missing");
requireText(app, 'K2E Insights', 'K2E Insights heading is missing');
requireText(app, 'id="dailyUsage"', 'Daily-average estimate context is missing');
requireText(app, 'id="topShare"', 'Largest-user share context is missing');
requireText(app, '--accent2:#8bd3ff', 'Accessible dark-theme blue accent is missing');
requireText(app, 'View Insights', 'View Insights action is missing');
requireText(app, "localStorage.removeItem('k2e-v2-state')", 'Start Over does not explicitly clear persisted household state');
requireText(app, "state={...defaultState,theme:keepTheme,devices:[]}", 'Start Over does not rebuild a clean device state');
requireText(app, 'id="accuracyInsightTitle"', 'Dynamic accuracy insight is missing');
requireText(app, 'id="scheduleInsightTitle"', 'Dynamic schedule insight is missing');
requireText(app, 'id="alwaysInsightTitle"', 'Dynamic always-on insight is missing');
requireText(app, 'id="modelInsightTitle"', 'Dynamic household-model insight is missing');
requireText(app, 'school/work hours', 'Schedule accuracy guidance is missing');
requireText(app, 'Top household insight', 'Personalized Insights emphasis label is missing');
requireText(app, 'prefers-reduced-motion:reduce', 'Reduced-motion accessibility support is missing');
requireText(app, 'aria-label="View K2E Insights for this household"', 'Accessible View Insights label is missing');


requireText(app, 'function deviceIcon(name)', 'Device icon mapping is missing');
requireText(app, 'class=\"device-icon\"', 'Device icons are not rendered in Device Controls');
requireText(app, 'Typical preset', 'Typical preset badge is missing');
requireText(app, 'device-input-hours', 'Compact hours/day field styling is missing');
requireText(app, 'max=\"24\"', 'Hours/day field is not bounded to 24 hours');
requireText(app, 'device-input-qty', 'Compact quantity field styling is missing');

if (/Start empty/i.test(app)) throw new Error('Duplicate Start Empty option remains in app.html');
requireText(app, "state.home='custom';state.bedrooms=0", 'Manual first-device entry does not activate Custom household');
requireText(app, 'Custom household', 'Custom household state/copy is missing');
requireText(app, 'Home presets are optional', 'Optional home-preset guidance is missing');
requireText(app, "{id:'custom',name:'Custom',desc:'Build your setup manually'}", 'Visible Custom home choice is missing');
requireText(app, '.choice[data-home=\"custom\"]', 'Custom home accent styling is missing');
requireText(app, '@media(min-width:761px){.choice-grid{grid-template-columns:repeat(4', 'Four-choice desktop home row is missing');
requireText(app, "if(id==='custom')", 'Custom choice handling is missing');
requireText(app, 'const existingCount=state.devices.length', 'Non-destructive home switching is missing');
requireText(app, 'state.devices=[...state.devices,...suggested]', 'Preset suggestions do not preserve existing devices');

requireText(index, '--bg1:#07111f', 'Landing page background does not match the app palette');
requireText(index, '--panel:#0d1a2b', 'Landing page panel color does not match the app palette');
requireText(index, '--green:#68e0b4', 'Landing page primary accent does not match the app palette');
requireText(index, '--blue:#8bd3ff', 'Landing page energy blue does not match the app palette');
requireText(index, '--amber:#f6b84a', 'Landing page amber accent does not match the app palette');

requireText(app, '/* RC25: mobile width containment for Explore Your Energy */', 'Explore Your Energy mobile-width containment patch is missing');
requireText(app, '.table-wrap{width:100%;max-width:100%;min-width:0;overflow-x:auto', 'Device table horizontal scrolling is not contained internally');
requireText(app, 'html,body{max-width:100%;overflow-x:hidden}', 'Global mobile horizontal page-pan guard is missing');

requireText(readme, `**v${expectedVersion}`, "README current release is stale");
requireText(readme, "https://nrg-roan.vercel.app/", "README launch URL is incorrect");
if ((readme.match(/^# K2E Local$/gm) || []).length !== 1) throw new Error("README contains duplicate primary headings");

requireText(workflow, "node scripts/validate-release.mjs", "Pages workflow does not run release validation");
requireText(fs.readFileSync("robots.txt", "utf8"), "https://nrg-roan.vercel.app/sitemap.xml", "robots.txt production URL is stale");
requireText(fs.readFileSync("sitemap.xml", "utf8"), "https://nrg-roan.vercel.app/app.html", "sitemap production URLs are stale");

console.log(`K2E Local v${expectedVersion} release validation passed.`);
