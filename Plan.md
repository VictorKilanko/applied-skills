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

### Phase 1 — Streamlit Web MVP ✅ COMPLETE
- [x] Built Python + Streamlit app with Claude Haiku
- [x] Photo upload + text description → AI diagnosis
- [x] Deployed at https://applied-skills.streamlit.app/
- [x] GitHub repo: https://github.com/VictorKilanko/applied-skills-app

**Why we move on:** Streamlit is a browser-only web app. It cannot access Bluetooth (blocks OBD-II) or live camera streaming on mobile. A React Native app is required for the full product vision.

---

### Phase 1b — React Native App (NEXT SESSION)
Build a true iOS + Android mobile app using **React Native + Expo** — same AI core, proper mobile experience.

**Why React Native + Expo:**
- Single codebase runs on both iPhone and Android
- Full Bluetooth access → required for OBD-II adapter (Phase 2)
- Live camera streaming (real-time video diagnosis, not just photo upload)
- Submittable to App Store and Google Play
- Expo makes setup and deployment much simpler than bare React Native

**What to install before next session:**
1. Node.js → download from nodejs.org (LTS version)
2. Expo Go app → install on your phone from the App Store / Google Play
   - This lets you run the app on your real phone instantly during development, no App Store submission needed

**What we build in Session 2:**
- [ ] Install Node.js + create Expo project
- [ ] Build chat screen: text input + photo picker + camera button
- [ ] Connect to Claude Haiku API (same key, same model)
- [ ] Display diagnosis in a clean card-based mobile UI
- [ ] Test live on Victor's phone via Expo Go
- [ ] Submit to App Store / Google Play (TestFlight for iOS beta)

**Tech stack:**
- Framework: React Native + Expo (free)
- AI: Claude Haiku (`claude-haiku-4-5-20251001`) via Anthropic API
- Backend: Expo API routes (serverless, keeps API key off device)
- Hosting: Expo Application Services (EAS) — free tier available
- App stores: Apple App Store + Google Play

### Phase 2 — OBD-II Integration
- [ ] Buy OBD-II Bluetooth adapter (see Hardware section)
- [ ] Connect to adapter via React Native Bluetooth library (`react-native-ble-plx`)
- [ ] Read Diagnostic Trouble Codes (DTCs) from car ECU
- [ ] Feed codes to Claude Haiku → combined camera + OBD diagnosis
- [ ] Brand and sell Applied Skills OBD-II adapter ($30–50 retail)

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

## Hardware: What to Buy for Testing

### OBD-II Adapters (Car Diagnostics)

All plug into your car's OBD-II port (driver's side, under the steering wheel — all US cars 1996+). All are ELM327-based, the universal OBD-II standard.

| Product | Price | Phone | Amazon Link |
|---------|-------|-------|-------------|
| **Veepeak OBDCheck BLE** *(iOS + Android)* | ~$25 | iPhone & Android | [Buy on Amazon](https://www.amazon.com/dp/B073XKQQQW) |
| **Veepeak Mini Bluetooth OBD2** *(Android only)* | ~$12 | Android only | [Buy on Amazon](https://www.amazon.com/dp/B011NSX27A) |
| **OBDLink LX Bluetooth** *(Android only, most reliable)* | ~$30 | Android only | [Buy on Amazon](https://www.amazon.com/dp/B00H9S71LW) |

**Recommendation by phone:**
- **iPhone user?** → Buy the **Veepeak OBDCheck BLE** (~$25). The OBDLink LX does NOT support iOS.
- **Android user?** → Buy the **OBDLink LX** (~$30). Most reliable, best app support.

**To verify your adapter works before building the app:**
- Android: Download "Torque Lite" (free) from Google Play
- iOS: Download "OBD Fusion" (~$10) from App Store
- Both apps will read your car's live data and error codes immediately

### Future Diagnostics Hardware (Phase 3–4)
- **Electrical:** Klein Tools MM700 Bluetooth Multimeter (~$80) — for appliance/electrical diagnosis
- **Heat/HVAC:** FLIR ONE Thermal Camera for iPhone or Android (~$150–250) — see heat leaks, diagnose HVAC, refrigerator coils
- No need to buy these yet — focus on OBD-II first

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
├── Web App MVP (Phase 1) ✅ LIVE
│   ├── Python + Streamlit
│   ├── Claude Haiku (vision + chat)
│   └── Streamlit Community Cloud (free)
│
├── Mobile App (Phase 1b) ← NEXT SESSION
│   ├── React Native + Expo
│   ├── Claude Haiku API (serverless backend)
│   └── App Store + Google Play
│
├── OBD-II Integration (Phase 2)
│   ├── ELM327 Bluetooth adapter (hardware)
│   ├── react-native-ble-plx (Bluetooth library)
│   └── OBD-II DTC parser
│
└── Parts Affiliate (Phase 3)
    ├── Amazon Associates API
    ├── RockAuto affiliate
    └── AutoZone affiliate
```

---

## Next Steps (In Order)

### Before Next Session
1. **Rotate API key** — console.anthropic.com → delete old key → create new → update in Streamlit secrets
2. **Test the live app** — https://applied-skills.streamlit.app/ — run a real car problem through it
3. **Install Node.js** — nodejs.org → download LTS version → install (required for React Native)
4. **Install Expo Go on your phone** — App Store (iPhone) or Google Play (Android) — search "Expo Go"
5. **Buy OBD-II adapter** — see Hardware section for links

### Next Session (Session 2)
6. Build the React Native mobile app with Expo
7. Test live on your phone via Expo Go
8. Submit to App Store / Google Play

### Later
9. Register domain → appliedskills.ai or appliedskills.com
10. Set up email list (Mailchimp / ConvertKit) for waitlist subscribers

---

## Brand Guidelines

- **Name:** Applied Skills
- **Tagline:** Every skill. Applied.
- **Colors:** Dark (#0a0a0f background), Blue accent (#4f8ef7), White text
- **Tone:** Confident, accessible, empowering — not technical/jargon-heavy
- **Positioning:** Skills platform, not an AI company

---

*Last updated: April 18, 2026*
