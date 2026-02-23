# 02 — Language Assets: Glossary & TM Governance

## Objective
Protect translation quality and consistency by managing glossary and translation memory (TM) as governed assets.

## Governance model

### Roles
- Localization PM: owns workflow and SLA compliance.
- Lead linguist (TR / IT): recommends terminology and style decisions.
- Client stakeholder: final approver for business-critical terms.
- QA analyst: validates downstream impact.

### Decision classes
- Class A: legal/product naming terms (client approval mandatory).
- Class B: high-frequency UX terms (lead linguist + PM approval).
- Class C: low-impact variants (linguist discretion, logged).

## Change request workflow

1. Request submitted in terminology log.
2. Impact score assigned (frequency × business criticality).
3. Proposed translation + rationale + rejected alternatives documented.
4. Approver path triggered by decision class.
5. Accepted decision propagated to:
   - glossary
   - TM penalty rules/weights
   - QA termbase checks
6. Changelog shared in weekly operations update.

## Approval SLAs
- Class A: within 3 business days.
- Class B: within 2 business days.
- Class C: same-day batch acceptance.

## Memory hygiene rules
- Segment states: Draft, Reviewed, Approved, Deprecated.
- Only Reviewed/Approved segments contribute to high-confidence retrieval.
- Deprecated entries remain searchable for audit, but excluded from suggestion ranking.

## Audit cadence
- Weekly: top 20 changed terms + mismatch review.
- Monthly: TM contamination scan (inconsistent source-target mappings).
- Quarterly: archive stale terms and refresh domain priorities.

## KPI linkage
- Terminology adherence target: ≥ 98% on Class A/B terms.
- Rework reduction target: 20% in repeated error categories by quarter.
