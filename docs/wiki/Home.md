# K2E Local Wiki

Welcome to the documentation home for **K2E Local — Kilowatts to Efficiency**.

K2E Local is a local-first household energy planning tool for estimating electricity use, exploring cost and usage scenarios, reviewing major energy contributors, and turning a household model into practical guidance.

## Current release

**v2.0.0-rc.45**

RC45 is treated as a stabilized release. The application engine, household logic, Detailed Workspace, Advisor, Forecast, Smart Energy Hub, Goals, reporting, and local persistence remain part of one connected household model.

## Core principles

- **Local first.** Household planning data stays in the browser by default.
- **No account required.** K2E can be used without creating a cloud identity.
- **Offline capable.** After the application shell is available locally, core planning can operate without an online service.
- **Planning, not billing.** K2E provides estimates and scenarios, not an official utility bill or electrical-safety diagnosis.
- **One household state.** The estimate, Home Pulse, Advisor, Forecast, Smart Energy Hub, Goals, and reports use the same saved household model.

## How a K2E plan starts

A fresh or reset RC45 session begins with no selected home type, no bedrooms, no people, no devices, a $0.00/kWh manually entered rate, and zero modeled energy/cost.

Once the user selects Apartment, Townhouse, House, Custom, or manually adds a device, K2E can activate typical planning values when a real electricity rate has not yet been entered. The current typical planning rate is **$0.18/kWh**, with typical time-of-use planning values of **$0.24/kWh peak**, **$0.12/kWh off-peak**, and **40% peak share**. These are assumptions for planning and can be replaced by user-entered or imported values.

## Main areas

### Household setup

Choose a home type, household size, bedrooms, electricity rate, and modeled devices. K2E uses these values as the basis for the rest of the application.

### Estimate and Top Energy Users

The primary estimate shows modeled energy use and cost. Top Energy Users identifies the modeled loads contributing the most to the household estimate.

### Detailed Workspace

The Detailed Workspace contains deeper tools including Home Pulse, Devices, Smart Energy Hub, Advisor, Forecast, Goals, and related planning views. These sections read from the same household state rather than creating separate disconnected models.

### K2E Advisor

K2E Advisor provides plain-language guidance from values already stored in the current household model. It can highlight major modeled loads, assumptions worth verifying, runtime or scheduling questions, and relevant K2E areas to review next.

The current Advisor does **not** require an external AI service.

## Privacy boundary

K2E is designed so private household planning information remains local by default. Future external or online intelligence, if ever added, should remain separate, off by default, and explicitly consent-controlled.

## Planning boundary

K2E is an educational and household-planning tool. Results can differ from real utility usage because of weather, appliance condition, occupancy, behavior, tariffs, and other factors.

K2E is not:

- an official utility bill;
- an electrical-safety diagnostic;
- a physical measurement instrument;
- a guarantee of energy or cost savings.

## Documentation map

This wiki will grow around the stable product rather than changing the application itself. Planned pages include:

- Getting Started
- How K2E Estimates Energy
- Household Model and Rates
- K2E Advisor
- Home Pulse, Forecast, and Smart Home Planning
- Privacy and Offline Design
- Confidence, Sources, and Assumptions
- Scenario Planning
- Validation and Limitations
- FAQ

---

**Product status:** RC45 stabilized. Documentation may continue to improve independently of the locked application runtime.
