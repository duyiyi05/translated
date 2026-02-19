# symbiotic-enterprise-localization-pm-demo

A portfolio repository that demonstrates how an enterprise localization program can scale EN→TR and EN→IT using **AI for acceleration** and **humans for judgment**, consistent with Translated’s symbiosis philosophy.

## What this demo is

This repository simulates a localization PM operating model you could present after a pilot period:
- Strategy and governance playbooks in `/docs`.
- Realistic operational data in `/data`.
- A static business review dashboard in `/dashboard` that computes core program KPIs in the browser.

## Why this aligns with Translated

The operating model is designed around the same principles that make human + AI collaboration work in production:
- **Context before generation**: projects are framed with audience, tone, product, and legal constraints.
- **Memories and glossaries as governed assets**: language decisions are requested, approved, logged, and reused.
- **Human-in-the-loop quality control**: linguists and reviewers are final decision owners on nuance and risk.
- **Structured clarification loops**: uncertainty is surfaced early through blocker rules and batching workflows.
- **Responsible AI controls**: quality severities, risk ownership, and audit-ready records are explicit.

## What artifacts are inside

### Documentation (`/docs`)
1. `01_Client_Onboarding_Context_Pack.md`
2. `02_Language_Assets_Glossary_TM_Governance.md`
3. `03_Style_Selection_Guide_Faithful_Fluid_Creative.md`
4. `04_Delivery_Workflow_End_to_End.md`
5. `05_Clarification_Loop_Playbook.md`
6. `06_QA_and_Risk_Control.md`
7. `07_Business_Review_Pack.md`
8. `08_30-60-90_Day_Plan.md`

### Data (`/data`)
- `projects.csv`
- `quality.csv`
- `clarifications.csv`
- `risks.csv`

### Dashboard (`/dashboard`)
- `index.html`
- `styles.css`
- `app.js`

## How to view the dashboard on GitHub Pages

1. Push this repo to GitHub as `symbiotic-enterprise-localization-pm-demo`.
2. Open **Settings → Pages**.
3. Set:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Visit:
   - `https://<your-username>.github.io/symbiotic-enterprise-localization-pm-demo/dashboard/`

The dashboard loads CSV data from `../data`, then calculates:
- OTD%
- Average TAT
- QA pass rate
- Open risk count
- Clarifications per 1k words

No backend required.
