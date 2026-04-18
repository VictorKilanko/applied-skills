# Applied Skills — Business & Technical Plan

**Date:** April 2025  
**Founder:** Victor Kilanko  
**Status:** Pre-launch / MVP Planning

---

## The Idea

Applied Skills is a consumer AI platform that lets everyday people — not professionals — diagnose and fix things themselves. Starting with cars, expanding to all vocational trades.

**Tagline:** Every skill. Applied.

**Core insight:** The skills gap is enormous. Most people pay a mechanic $150/hr for work they could do themselves with the right guidance. AI, computer vision, and a cheap Bluetooth adapter can close that gap completely.

---

## The Problem

- The average American spends **$1,200+/year** on car repairs
- Most of that cost is **labor**, not parts
- Existing tools (OBD-II readers, YouTube videos) give fragments — no one gives a complete, guided experience
- Diagnostic device makers (Innova, BlueDriver) and auto shops serve **professionals**, not DIY homeowners

## Why We Win

We are **not** competing with:
- Car manufacturers or dealers (they serve shops, not consumers)
- AutoZone / Pep Boys (they give codes, not guidance)
- OBD-II device makers (hardware only, no AI guidance)

We **are** building for:
- Homeowners who want to fix their own cars
- DIYers who are tired of paying for labor
- Anyone who has ever been told "it'll be $800" without understanding why

---

## Product Vision

### Core Loop (Auto, Phase 1)
1. User opens app and describes the problem ("grinding noise when braking")
2. App asks them to point their phone camera at the issue — AI analyzes live video/photo
3. User plugs in Applied Skills OBD-II adapter → reads error codes from car's computer
4. AI combines visual + OBD data → plain-English diagnosis
5. Step-by-step repair guide with YouTube video links
6. App shows exact parts to buy with links (affiliate revenue)

### Expansion (Phases 3–4)
Same loop applied to:
- Home appliances (washer, dryer, refrigerator, dishwasher)
- Plumbing (leaks, clogs, fixtures)
- Electrical (outlets, breakers, light fixtures)
- HVAC (AC, heating, ventilation)
- Any vocational skill where an expert has historically been the gatekeeper

---

## Revenue Model

| Stream | Description | Timeline |
|--------|-------------|----------|
| **Hardware** | Branded OBD-II Bluetooth adapter (~$30–50 retail, ~$8–15 cost) | Phase 2 |
| **Subscription** | AI diagnosis + repair guidance ($9.99–19.99/mo) | Phase 1 |
| **Affiliate** | Parts links — Amazon, RockAuto, AutoZone, Home Depot | Phase 1 |
| **B2B Lite** | Small independent shops with no enterprise budget | Phase 4+ |

---

## Build Phases

### Phase 0 — Brand & Validate (Now)
- [x] Choose product name: **Applied Skills**
- [x] Create GitHub repo: `VictorKilanko/applied-skills`
- [x] Build landing page (deployed via GitHub Pages)
- [x] Create Plan.md
- [ ] Set up Formspree for email waitlist capture
- [ ] Register domain (appliedskills.ai or appliedskills.com)
- [ ] Set up email list (Mailchimp / ConvertKit)

### Phase 1 — Camera MVP
- [ ] Build web app (React + Claude API)
- [ ] Camera/photo upload interface
- [ ] AI chat that diagnoses from image + text description
- [ ] Step-by-step repair response format
- [ ] Deploy on Vercel or Railway

**Tech stack:**
- Frontend: React + Tailwind CSS
- Backend: Python FastAPI
- AI: Claude claude-sonnet-4-6 API (vision + conversation)
- Hosting: Vercel (frontend) + Railway (backend)

### Phase 2 — OBD-II Integration
- [ ] Source ELM327 Bluetooth OBD-II adapter (see Hardware section)
- [ ] Integrate OBD-II reading into app (Web Bluetooth API)
- [ ] Read Diagnostic Trouble Codes (DTCs) from car ECU
- [ ] Feed to AI → combine with camera diagnosis
- [ ] Brand and sell adapter on website ($30–50)

### Phase 3 — Parts Marketplace
- [ ] Amazon Associates affiliate integration
- [ ] RockAuto affiliate program
- [ ] AutoZone affiliate program
- [ ] Auto-generate parts list from AI diagnosis with buy links

### Phase 4 — Expand to All Trades
- [ ] Home appliances vertical
- [ ] Plumbing vertical
- [ ] Electrical vertical
- [ ] HVAC vertical

---

## Hardware: What Cable to Buy for Testing

**For OBD-II (car diagnostics):**

Buy one of these to test with:

| Product | Price | Buy At |
|---------|-------|--------|
| **Veepeak Mini Bluetooth OBD2 Scanner** | ~$20 | Amazon |
| **BAFX Products Bluetooth OBD2 Adapter** | ~$22 | Amazon |
| **OBDLink LX Bluetooth** | ~$30 | Amazon (more reliable, recommended) |

All three are **ELM327-based** (the universal OBD-II protocol standard). They plug into the OBD-II port under your dashboard (driver's side, usually below the steering wheel — all US cars 1996+).

**To test on your computer/app:**
- Android: Use "Torque" app to verify the adapter works
- iOS: Use "OBD Fusion" app
- Web: Chrome supports Web Bluetooth API — we can read the adapter directly in the browser

**For future appliance diagnostics:**
- Multimeters with Bluetooth (Klein Tools MM700) for electrical
- Thermal cameras (FLIR ONE for iPhone/Android, ~$150) for appliance heat diagnosis
- These come in Phase 3–4

---

## Tech Stack Summary

```
Applied Skills Platform
│
├── Landing Page (Phase 0)
│   ├── HTML / CSS / JS
│   ├── GitHub Pages (free hosting)
│   └── Formspree (email capture)
│
├── Web App MVP (Phase 1)
│   ├── React (frontend)
│   ├── Python FastAPI (backend)
│   ├── Claude API — claude-sonnet-4-6 (vision + chat)
│   └── Vercel + Railway (hosting)
│
├── OBD-II Integration (Phase 2)
│   ├── ELM327 Bluetooth adapter (hardware)
│   ├── Web Bluetooth API (browser ↔ adapter)
│   └── OBD-II DTC parser (Python library: python-OBD)
│
└── Parts Affiliate (Phase 3)
    ├── Amazon Associates API
    ├── RockAuto affiliate
    └── AutoZone affiliate
```

---

## Next Steps (In Order)

1. **Today:** Set up Formspree account → replace `YOUR_FORM_ID` in index.html
2. **This week:** Test the landing page live at `victorkilanko.github.io/applied-skills`
3. **Next:** Buy OBD-II adapter (Veepeak or OBDLink LX) to begin hardware testing
4. **Next:** Start Phase 1 web app (React + Claude API camera diagnosis)
5. **Later:** Register domain → appliedskills.ai or appliedskills.com

---

## Brand Guidelines

- **Name:** Applied Skills
- **Tagline:** Every skill. Applied.
- **Colors:** Dark (#0a0a0f background), Blue accent (#4f8ef7), White text
- **Tone:** Confident, accessible, empowering — not technical/jargon-heavy
- **Positioning:** Skills platform, not an AI company

---

*Last updated: April 2025*
