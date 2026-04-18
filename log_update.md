# Applied Skills — Project Log

---

## Session 1 — April 18, 2026

### Completed

#### Brand & Strategy
- [x] Defined product vision: AI-powered DIY repair assistant for everyday people (not mechanics)
- [x] Identified competitive moat: democratizing vocational skills, not competing with shops/device makers
- [x] Chose product name: **Applied Skills** (dropped "Axon" — trademark conflict with Axon Enterprise)
- [x] Tagline: "Every skill. Applied."
- [x] Defined revenue model: hardware adapter + subscription + affiliate parts links
- [x] Defined expansion roadmap: Cars → Appliances → Plumbing → Electrical → HVAC

#### Landing Page (Phase 0) ✅
- [x] Built full landing page: `index.html`, `style.css`, `app.js`
- [x] Sections: Hero, How It Works, Verticals, Hardware Teaser, Why Applied, Waitlist
- [x] Created GitHub repo: https://github.com/VictorKilanko/applied-skills
- [x] Deployed via GitHub Pages: http://victorkilanko.com/applied-skills/
- [x] Integrated Formspree AJAX (form ID: `xgoryebz`) for waitlist email capture
- [x] Waitlist form collects: name, email, phone, interest, car ownership, ZIP, referral source

#### Business Plan
- [x] Created `Plan.md` with full business + technical roadmap
- [x] Added Amazon hardware purchase links for OBD-II adapters

#### Web App MVP (Phase 1) ✅
- [x] Built Streamlit app (`app.py`) powered by **Claude Haiku** (cost-optimized)
- [x] Features: text description + photo upload → AI diagnosis + step-by-step repair guide
- [x] Covers: cars, appliances, plumbing, electrical, HVAC
- [x] Created GitHub repo: https://github.com/VictorKilanko/applied-skills-app
- [x] **Live at: https://applied-skills.streamlit.app/**
- [x] API key stored securely in Streamlit secrets (not in code)

---

## What Still Needs to Be Done

### Immediate (Do This Week)
- [ ] **Rotate API key** — the Anthropic key was shared in chat; go to console.anthropic.com → delete old key → create new one → update in Streamlit secrets
- [ ] **Test the live app** — go to https://applied-skills.streamlit.app/ and run a real car problem through it
- [ ] **Activate Formspree** — verify waitlist form submissions are arriving at your email (formspree.io dashboard)
- [ ] **Register a domain** — appliedskills.ai or appliedskills.com (check availability on Namecheap or Google Domains)
- [ ] **Buy OBD-II adapter for testing:**
  - iPhone → [Veepeak OBDCheck BLE (~$25)](https://www.amazon.com/dp/B073XKQQQW)
  - Android → [OBDLink LX (~$30)](https://www.amazon.com/dp/B00H9S71LW)

### Phase 2 — OBD-II Integration
- [ ] Connect OBD-II Bluetooth adapter to the app via Web Bluetooth API
- [ ] Read Diagnostic Trouble Codes (DTCs) directly from car ECU
- [ ] Feed codes to Claude → combined camera + OBD diagnosis
- [ ] Source branded Applied Skills OBD-II adapter to sell ($30–50 retail)

### Phase 3 — Parts Affiliate Revenue
- [ ] Sign up for Amazon Associates affiliate program
- [ ] Sign up for RockAuto affiliate program
- [ ] Sign up for AutoZone affiliate program
- [ ] Add auto-generated parts links to every AI diagnosis response

### Phase 4 — App Improvements
- [ ] Add conversation history (save past diagnoses per user)
- [ ] Add user accounts / login (so users keep their repair history)
- [ ] Add live camera streaming (real-time video vs. photo upload)
- [ ] Add YouTube repair video links in responses
- [ ] Mobile-optimize the Streamlit interface
- [ ] Consider rebuilding in Next.js for better mobile UX (requires installing Node.js)

### Phase 5 — Growth & Monetization
- [ ] Set up Stripe for subscription billing ($9.99–19.99/mo)
- [ ] Add free tier (3 diagnoses/month) vs. paid unlimited
- [ ] Launch on Product Hunt
- [ ] Start social media content (TikTok/YouTube: "Fixed my car in 20 min with AI")
- [ ] Reach out to DIY/car subreddits for beta users

---

## Live URLs
| Asset | URL |
|-------|-----|
| Landing page | http://victorkilanko.com/applied-skills/ |
| Web app (MVP) | https://applied-skills.streamlit.app/ |
| Landing page repo | https://github.com/VictorKilanko/applied-skills |
| App repo | https://github.com/VictorKilanko/applied-skills-app |

## Stack
| Layer | Tech |
|-------|------|
| Landing page | HTML / CSS / JS → GitHub Pages |
| Web app | Python + Streamlit → Streamlit Community Cloud |
| AI model | Claude Haiku (`claude-haiku-4-5-20251001`) |
| Form handling | Formspree (ID: xgoryebz) |
| API | Anthropic Claude API (pay-as-you-go, ~$0.014/diagnosis) |

---

*Last updated: April 18, 2026*
