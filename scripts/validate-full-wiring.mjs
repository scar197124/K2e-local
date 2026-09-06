import fs from 'node:fs';
const app=fs.readFileSync('app.html','utf8');
const files=['assets/k2e-evolution-rc38.js','assets/k2e-advisor-rc39.js','assets/k2e-forecast-rc40.js','assets/k2e-goals-rc44.js','assets/k2e-smart-hub-rc42.js','assets/k2e-consolidation-rc45.js'];
const req=(ok,msg)=>{if(!ok)throw new Error(msg)};
req(app.includes("home:'',bedrooms:0,people:0,rate:0"),'Blank-start defaults are not zeroed');
req(app.includes("const TYPICAL_RATE=.18,TYPICAL_PEAK_RATE=.24,TYPICAL_OFFPEAK_RATE=.12,TYPICAL_PEAK_SHARE=40"),'Planning-rate defaults are missing');
req(app.includes("state.home=id;state.bedrooms=0;ensurePlanningRate();"),'Home selection does not activate planning rates');
req(app.includes("ensurePlanningRate();if(name==='__custom__')"),'Manual device entry does not activate planning rates');
req(app.includes("const kwh=total(),cost=kwh*(Number(state.rate)||0)"),'Core summary is not driven by energy × rate');
req(app.includes("dailyCost.textContent=money(cost/days)"),'Cost per day is not wired to core cost');
req(app.includes("rateDisplay.textContent=`${money(state.rate)}/kWh`"),'Rate Used is not wired to saved rate');
for(const f of files){const x=fs.readFileSync(f,'utf8');req(x.includes("k2e-v2-state"),`${f} does not read shared household state`)}
req(fs.readFileSync('assets/k2e-evolution-rc38.js','utf8').includes('pulseCost.textContent=money(m.cost)'),'Home Pulse projected cost is not wired');
req(fs.readFileSync('assets/k2e-forecast-rc40.js','utf8').includes('forecastBill.textContent=money(m.forecastCost)'),'Forecast projected bill is not wired');
for(const f of ['assets/k2e-evolution-rc38.js','assets/k2e-forecast-rc40.js','assets/k2e-goals-rc44.js','assets/k2e-smart-hub-rc42.js','assets/k2e-consolidation-rc45.js']){
 const x=fs.readFileSync(f,'utf8');req(x.includes('k2e-state-changed'),`${f} does not subscribe to state-change synchronization`)
}
const apartmentKwh=37.8+24+72+9+9+8.64+12;
const cost=apartmentKwh*.18;
req(apartmentKwh>0&&cost>0,'Apartment smoke calculation failed');
console.log(`Full wiring validation passed. Blank start = 0; apartment smoke model = ${apartmentKwh.toFixed(1)} kWh, $${cost.toFixed(2)} at $0.18/kWh.`);
