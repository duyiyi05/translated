# 06 — QA and Risk Control

## QA framework

### Automated checks
- Terminology adherence against approved glossary.
- Numeric/date/unit integrity.
- Placeholder/tag integrity.
- Repetition consistency.

### Human checks
- Meaning accuracy.
- Tone and channel fit.
- Readability and fluency.
- Locale appropriateness.

## Severity rubric

| Severity | Definition | Example | Action |
|---|---|---|---|
| Critical | Could cause legal/compliance/product harm | Incorrect legal obligation | Immediate fix, delivery hold |
| Major | Materially harms user understanding | Key feature mistranslated | Fix before release |
| Minor | Does not block understanding but reduces polish | Stylistic inconsistency | Fix in-cycle if possible |
| Trivial | Cosmetic issue | punctuation preference | Backlog/next pass |

## Pass/fail logic
- Fail automatically if any unresolved Critical issue.
- Fail if Major issue density exceeds threshold.
- Pass with Minor/Trivial only when trend is stable or improving.

## Risk control board
Top recurring risks monitored monthly:
- Terminology drift in fast-release assets.
- Delayed clarifications driving rushed final QA.
- Locale-specific tone inconsistency in marketing streams.

Each risk record must have:
- probability
- impact
- mitigation
- owner
- status

## Corrective action loop
- Root-cause analysis for repeated Major/Critical categories.
- Targeted retraining (AI prompts + reviewer calibration).
- Verification audit in next cycle.
