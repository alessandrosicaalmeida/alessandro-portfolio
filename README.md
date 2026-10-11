# Alessandro Almeida — AI & Product Portfolio

An evidence-led, bilingual portfolio for senior AI, product, transformation,
analytics, customer-experience, and innovation roles.

## What is included

- A static-first React/TypeScript portfolio suitable for GitHub Pages.
- English-first content with a complete Portuguese version.
- Fourteen mapped project cases answering problem, operation, leadership,
  decisions, evidence, capabilities, technologies, learnings, public boundary,
  visual demonstration, and next steps.
- A cross-project capability map covering ETL, ML, computer vision, RAG,
  multi-agent orchestration, agent audit, cost control, process automation, and
  data visualization.
- A detailed readiness audit and publication/redaction matrix.
- A private-evidence boundary and reusable intake template for older projects.

## Local development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run typecheck
npm run check:assets
npm run build
```

## Content rules

Read [`PRODUCT.md`](./PRODUCT.md), [`DESIGN.md`](./DESIGN.md),
[`docs/PROJECT_READINESS_AUDIT.md`](./docs/PROJECT_READINESS_AUDIT.md), and
[`docs/PUBLICATION_MATRIX.md`](./docs/PUBLICATION_MATRIX.md) before adding any
claim or media.

The consolidated technical coverage is maintained in
[`docs/CAPABILITY_AND_TECHNOLOGY_MATRIX.md`](./docs/CAPABILITY_AND_TECHNOLOGY_MATRIX.md).

Never commit credentials, personal/customer/research data, proprietary model
artifacts, or any content whose ownership is uncertain.

The repository-by-repository release sequence is documented in
[`docs/GITHUB_PUBLICATION_PLAN.md`](./docs/GITHUB_PUBLICATION_PLAN.md).

## Deployment

The included GitHub Actions workflow builds and publishes `dist/` to GitHub
Pages. In the repository settings, set **Pages → Source** to **GitHub Actions**.

## Current asset status

The first release uses public SigningLab media and a non-personal Recordia brand
asset. Additional product screenshots remain gated by the publication matrix
until sanitized captures are approved.
