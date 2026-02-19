# 01 — Client Onboarding Context Pack

## Purpose
Create a shared operating context before production so AI suggestions and human decisions are grounded in business reality.

## 1) Business + audience context

### Product snapshot
- Domain: enterprise SaaS workflow automation.
- User groups:
  - Operations managers (decision makers)
  - Team leads (daily power users)
  - IT/compliance admins (risk gatekeepers)

### Buying journey touchpoints
- High-visibility assets: website pages, campaign emails, product launch notes.
- High-risk assets: legal terms, security docs, contracts.
- High-volume assets: release notes, help center, in-app strings.

## 2) Voice and tone profile

- Brand attributes: clear, competent, calm, solution-oriented.
- Tone by content type:
  - Marketing: energetic but precise.
  - Product UI: concise and action-led.
  - Legal/compliance: formal, explicit, unambiguous.

## 3) Legal and regulatory constraints

- Do not alter legal meaning for Terms of Service, DPA, privacy disclosures.
- Preserve mandatory references to certifications and standards.
- Ensure locale-specific consumer language remains compliant with local expectations.

## 4) Locale-specific risk map

### EN→IT risks
- **Formality drift**: inconsistent "tu" vs "Lei" across channels.
- **Gender/number agreement** in role labels and dynamic UI strings.
- **Anglicism overuse** where plain Italian equivalents are preferred.

Mitigation:
- Formality profile per channel documented in style sheet.
- QA checks for agreement around placeholders.
- Approved anglicism list with rationale.

### EN→TR risks
- **Over-literal phrasing** that sounds mechanical in Turkish.
- **Terminology inconsistency** between UI and support docs.
- **Sentence length inflation** reducing readability.

Mitigation:
- Preference for natural Turkish syntax over source-order mimicry.
- Weekly terminology delta review between PM and lead linguist.
- Readability pass for long support and onboarding content.

## 5) Context package handoff checklist

- [ ] Product overview and audience segmentation validated.
- [ ] Tone guidance approved per content stream.
- [ ] Legal red-lines signed off by client counsel/owner.
- [ ] EN→IT and EN→TR risk notes acknowledged by language leads.
- [ ] Initial glossary and memory seed assets linked.

## Definition of ready (DoR)
A project enters production only when this context pack is complete and acknowledged by PM, language lead, and client owner.
