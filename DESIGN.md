# Design direction — Evidence Engine

## Named aesthetic lane

**A premium product evidence room:** the discipline of a high-end industrial
design archive combined with the clarity of an executive operating review.
This is neither editorial-magazine styling nor cyberpunk AI theater.

The physical reference is a museum-grade prototype table: dark mineral
surfaces, precise labels, translucent evidence sheets, bright signal colors,
and large product imagery. Each project should feel inspected, not advertised.

## Brand voice translated into form

- **Decisive:** strong hierarchy, short claims, visible solution context, direct
  CTAs, and no ornamental preamble.
- **Inventive:** asymmetric compositions, interactive evidence layers, and a
  narrative timeline connecting earlier analytics work to current AI systems.
- **Accountable:** source labels, contribution boundaries, limitations, dates,
  and public/private status are first-class visual elements.

## Visual system

### Color strategy

Use a committed dark mineral base with two functional signals:

- warm electric amber for decisions, proof, and primary actions;
- cool spectral cyan for systems, models, and data relationships;
- off-white for primary text and warm gray for supporting copy;
- restrained green only for verified/public status;
- restrained coral only for restricted, archived, or limitation states.

Color is semantic. Avoid rainbow project branding, neon glows, purple AI
gradients, and muted beige portfolios.

### Typography

Use a distinctive, highly readable grotesk or humanist sans for display and
body, with a narrow technical companion only for evidence metadata. Avoid
Inter, Space Grotesk, IBM Plex, and other default AI-portfolio choices.

Headings should be broad, confident, and line-efficient. Body copy should feel
calm and editorially controlled without adopting magazine tropes.

### Layout

- Use a visible 12-column desktop grid and an asymmetric hero.
- Give one dominant project or idea to each major viewport.
- Feature real screenshots and diagrams at meaningful scale.
- Use evidence rails, status markers, and contribution labels instead of a
  uniform grid of rounded cards.
- On mobile, preserve hierarchy and evidence order; do not merely stack every
  desktop column without reconsidering emphasis.

### Shape language

Prefer near-square panels, clipped technical corners, thin rules, and precise
insets. Rounded rectangles may appear only where they communicate an actual
interactive control. Do not place pill-shaped containers around ordinary text.

### Motion

- One controlled page-load sequence and subtle evidence-reveal transitions.
- Project media may shift depth slightly during scroll, but content remains
  legible and usable without motion.
- All motion must disable or simplify with `prefers-reduced-motion`.

## Page architecture

### Home

1. Asymmetric positioning hero with concise proof markers.
2. Flagship SigningLab case with large authentic media and public metrics.
3. Leadership spine: reframing the problem, inventing the system, mobilizing
   delivery, and making impact accountable.
4. Selected project evidence arranged as distinct stories, not generic cards.
5. Interactive career timeline from infrastructure and proprietary enterprise
   platforms through asset strategy, venture building, and modern AI. Use a
   connected visual rail with selectable chapters and one large evidence canvas,
   never a résumé table or dense chronology. Continue the trajectory with a
   synchronized multi-track career canvas for teaching/publications,
   consulting/ventures, international operations/transactions, and
   education/credentials. The time axis, proof state, and disclosure boundary
   should be visible without reducing the material to identical cards.
6. Public-evidence and responsible-disclosure statement.
7. Contact/resume CTA.

### Case-study route

Each case follows the same reasoning sequence while allowing different art
direction:

1. Problem and context.
2. Alessandro's role and contribution boundary.
3. Key product/technical decisions.
4. System or workflow diagram.
5. Product screenshots or research figures.
6. Evidence and measurable outcomes.
7. Solution stage, limitations, and strategic frontier.
8. Links to public artifacts when safe.

### Internal evidence index

Maintain a repository-only Markdown/JSON registry that tracks source path,
ownership, publication state, redaction need, and claim supported. Restricted
source paths must never be imported into the compiled public site.

## Image direction

Authentic project screenshots, charts, product UI, model-validation figures,
and sanitized workflow diagrams are the primary imagery. Decorative AI art is
excluded from the initial release because it would weaken evidentiary value.

Every image needs:

- project and capture date;
- public/redacted/private classification;
- a meaningful bilingual alt description;
- confirmation that it contains no credentials, personal data, or restricted
  customer/research information.

## Accessibility targets

- WCAG 2.2 AA contrast and interaction behavior.
- Visible focus styles and complete keyboard operation.
- Minimum 44px interactive targets on touch devices.
- No text embedded in critical screenshots without an adjacent text summary.
- Language switch must preserve the current route and section.
- Charts require concise textual takeaways and accessible data summaries.

## Technical direction

Use a static-first React/TypeScript site built with Vite so it can deploy to
GitHub Pages without a backend. Store bilingual project content in typed local
data, keep private evidence outside the published asset tree, and generate
routes for home, projects, individual cases, and evidence methodology.

The project must include linting, type checking, production build, responsive
QA, broken-link checks, and a clear deployment workflow.
