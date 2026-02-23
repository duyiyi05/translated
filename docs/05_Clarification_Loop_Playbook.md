# 05 — Clarification Loop Playbook

## Principle
Assumptions create rework. Clarification loops should be fast, batched, and transparent.

## Intake for questions
Each question must include:
- Segment ID or asset reference.
- Proposed options.
- Suggested default if unanswered by SLA.
- Blocker flag (Yes/No).

## Batching protocol
- Non-blockers are batched twice daily.
- Blockers are escalated immediately.
- Similar questions are clustered to reduce decision fatigue.

## Blocker rules
A question is a blocker when:
- legal meaning may change,
- product function may be misrepresented,
- or brand-critical terminology is missing.

If blocker unanswered within SLA:
- PM escalates to client owner.
- Work continues on non-blocked segments.
- Affected segments remain undelivered until resolved.

## EN→IT examples

### Gender/formality
- Source: “Invite your manager to approve your request.”
- Question: should UI follow formal "Lei" journey or neutral imperative structure?
- Risk: mixed pronouns in adjacent flows.

### Terminology
- Source: “workspace” in mixed technical/marketing contexts.
- Question: keep “workspace” or use approved Italian equivalent per channel?

## EN→TR examples

### Tone calibration
- Source: promotional header with assertive promise.
- Question: should claim be softened for trust-oriented B2B tone?

### Terminology consistency
- Source term appears as two Turkish variants in legacy docs.
- Question: choose canonical term for UI and enforce fallback alias in help content.

## Metrics tracked
- Clarifications per 1k words.
- Blocker count and median resolution time.
- Reopened issues due to unanswered questions.
