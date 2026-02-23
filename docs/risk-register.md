# Enterprise Localization Risk Register  
Client: Enterprise SaaS HR Platform  
Languages: EN→TR | EN→IT  
Owner: Localization PM  

---

## Risk Classification Scale

| Level | Description | Impact |
|--------|-------------|--------|
| Critical | Legal exposure / launch blocker | High financial or reputational risk |
| High | Impacts user trust or compliance | Requires immediate mitigation |
| Medium | Workflow disruption | Manageable within sprint |
| Low | Minor process inefficiency | Monitor only |

---

## Active Risks

| ID | Category | Description | Lang | Level | Probability | Impact | Mitigation | Status |
|----|----------|-------------|------|--------|-------------|--------|------------|--------|
| R-01 | Terminology | Inconsistent job hierarchy mapping | IT | High | Medium | High | Freeze glossary + SME validation | Open |
| R-02 | UI Constraints | Turkish string expansion breaks layout | TR | Medium | High | Medium | Pre-QA length check + dev preview | Mitigated |
| R-03 | Legal | Benefits terminology mismatch with local law | IT | Critical | Low | High | Legal reviewer approval before release | Monitoring |
| R-04 | Workflow | Clarification turnaround > 48h | Both | Medium | Medium | Medium | SLA enforcement + escalation rule | Open |

---

## Escalation Thresholds

- 2+ Critical risks → Immediate client notification  
- OTD forecast below 97% → Recovery plan issued  
- LQA < 94% → Root cause analysis initiated  

---

## Monthly Risk Review Protocol

1. Trend review by category  
2. Identify recurring patterns  
3. Apply CAPA (Corrective & Preventive Action)  
4. Report impact in Business Review  

---

## Objective

Reduce high-impact risks by 30% within 90 days through:
- Context reinforcement  
- Glossary governance  
- Early ambiguity detection  
