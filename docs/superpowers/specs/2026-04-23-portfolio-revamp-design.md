# Portfolio Revamp Design Spec
**Date:** 2026-04-23  
**Aesthetic:** Minimal & clean — typography-first, restrained color, generous whitespace  
**Scope:** Full redesign across all 5 pages + Navbar  

---

## Design System

### Typography
- **Primary font:** Inter (already imported) — used for all headings, body, and UI text
- **Accent font:** JetBrains Mono — used exclusively for the typewriter role text on Home
- **Scale:**
  - Section headings: `font-light text-5xl tracking-tight` (Inter)
  - Entry titles: `font-semibold text-xl`
  - Body: `font-light text-base leading-relaxed`
  - Labels/tags: `text-xs uppercase tracking-widest text-[--color-muted]`

### Color & Gradient
- Blue/cyan gradient (`--color-primary` → `--color-secondary`) used **only** as a 2px accent line under section headings (`h-0.5 w-12 bg-gradient`)
- No gradient text on any heading
- Tags/badges: replaced with inline uppercase text labels, no background, no border
- Hover states: opacity transition only — no scale transforms, no color fills

### Spacing
- Every page: `max-w-3xl mx-auto py-24 px-6`
- Consistent section gap: `mb-20` between major sections

### Borders & Cards
- No full border-box cards
- Entries separated by `border-b border-[--color-muted]/20` hairline dividers
- Grouped cards get `shadow-sm` only, no visible border

### Dark / Light Theme
- Both modes fully supported — no changes to the toggle logic
- Design decisions apply to both modes

---

## Navbar

- Logo "Ry." — `font-bold` (reduced from `font-extrabold`)
- Nav links: `font-light text-sm tracking-widest uppercase`, centered
- Gallery added as a regular nav link (remove the isolated icon button)
- Dark/light toggle: icon only, no background circle on default state
- Backdrop blur retained

---

## Home Page

### Layout
- Left-aligned single column (remove left/right split)
- Profile photo: small circle crop `w-16 h-16`, positioned above the name

### Content
- Name: `font-light text-6xl md:text-7xl tracking-tight` — large and airy
- Typewriter role: JetBrains Mono, `text-[--color-muted]`, below the name
- Bio: shorter, more personal tone
- Social icons: `text-xl`, `gap-5`, muted default, opacity transition on hover only
- CTA buttons: replaced with text links + thin animated underline on hover (no border boxes)
- New "Currently working with" line: `Python · PyTorch · Go · Next.js · React` in `text-xs uppercase tracking-widest text-[--color-muted]`

### Unchanged
- Welcome splash screen
- Typewriter effect logic

---

## Experience Page

### Education Section
- Timeline line: `w-px bg-[--color-muted]/30` (thinner, more subtle)
- Node dots: `w-2 h-2 rounded-full bg-[--color-primary]` (small, no icon)
- Remove graduation cap icon
- Institution name is primary text (large), degree below in muted light weight
- GPA and coursework on one line separated by `·`

### Experience Section
- Remove hover-flip card + empty spacer div entirely
- Replace with **accordion entries**: closed state shows position, institution, timeline as a clean row with `border-b border-[--color-muted]/20`
- Clicking expands to reveal responsibilities with Framer Motion height animation
- Skills shown as `text-xs uppercase tracking-widest` inline, separated by `·`
- Fixes mobile layout issues caused by the hover approach

---

## Achievements Page

### Layout
- Full border-box cards replaced with **hairline-divided list entries**
- Each entry:
  - Title: `font-semibold text-lg`
  - Event: `font-light text-base`
  - Year: `text-xs uppercase tracking-widest text-[--color-muted]` — inline with event
  - Description: `font-light text-sm text-[--color-muted] leading-relaxed`
  - Tags: inline `text-xs uppercase tracking-widest` separated by `·`
- Scroll-in animation: each entry fades up with stagger delay via Framer Motion `whileInView`
- Einstein quote subtitle retained

---

## Projects Page

### Layout
- Alternating image+text layout replaced with **numbered case-study list**
- Decorative number: `font-light text-5xl text-[--color-muted]/30` (`01`, `02`...)
- Each row: decorative number + title + description + inline tags + small thumbnail
- Thumbnail: `aspect-video w-32 rounded-lg shadow-sm`, right-aligned, hidden on mobile
- Scroll-in stagger animation matching Achievements

### Data Fix
- Correct the duplicate descriptions on "Prison Sentences Prediction" and "Rainfall Modeling" projects (currently copy-pasted from the flood project)

---

## Gallery Page

### Filter Buttons
- Rounded pill buttons replaced with plain text buttons
- Active state: thin underline in gradient accent color (no filled background)

### Image Overlay
- Black/70 overlay retained
- Text: category in `text-xs uppercase tracking-widest`, description in `font-light text-sm`

### Structure
- Masonry grid unchanged

---

## Global Animations

### Page Transitions
- Framer Motion `AnimatePresence` wrapping `<Routes>` in `App.jsx`
- Each page: `opacity: 0 → 1` over 300ms on enter. No slide, no scale.

### Scroll Animations
- Reusable `<FadeIn>` wrapper component using Framer Motion `whileInView`
- `y: 20 → 0, opacity: 0 → 1` over 400ms, `once: true`
- Used on: section headings, timeline entries, achievement rows, project rows, gallery filter

### Unchanged
- Welcome splash animation
- Dark/light toggle logic
- Routing structure
- All personal data (links, content, images)

---

## What Is NOT Changing
- Routing and page structure
- Welcome splash screen
- Typewriter effect logic
- Dark/light toggle behavior
- All personal data, links, and images
