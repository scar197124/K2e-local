import fs from "node:fs";
const required=["index.html","app.html","manifest.json","sw.js","assets/chart.umd.js","VERSION","README.md"];
const missing=required.filter(p=>!fs.existsSync(p));
if(missing.length){console.error("Missing:",missing.join(", "));process.exit(1)}
const version=fs.readFileSync("VERSION","utf8").trim();
const app=fs.readFileSync("app.html","utf8");
if(!app.includes("k2e-v180-scenario-trust-script")) throw new Error("v1.8 comparison module missing");
if(version!=="1.8.1") throw new Error("VERSION mismatch");
console.log("K2E Local v1.8.1 release validation passed.");
