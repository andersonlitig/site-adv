# HomeV2 Editorial Nexu Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform `HomeV2.tsx` from boxy alternating stripes into a fluid, organic, editorial legal showcase matching `nexu.natdesigner.com`, `oidalio.ai`, and `georgelcsmkt.com`.

**Architecture:** Single page component in `client/src/pages/HomeV2.tsx` built with React, Tailwind CSS, and Framer Motion. Uses unified warm cream `#F4F4F3` canvas, 3D perspective cards, editorial typography with serif italics, interactive WhatsApp dialogue, and a mobile bottom dock.

**Tech Stack:** React 18, Tailwind CSS, Framer Motion, Lucide React, Wouter.

**Spec:** `docs/superpowers/specs/2026-11-11-homev2-editorial-nexu-design.md`

## Global Constraints
- Modify ONLY `client/src/pages/HomeV2.tsx`.
- Strict OAB Provimento 205/2021 compliance: No outcome guarantees, no sensationalist marketing, strictly pedagogical and sober.
- High-res authentic `client/src/assets/logo.png` prominently displayed in the header and footer.
- Mobile-first: touch targets >= 48px, fluid font sizes via `clamp()`, zero horizontal scroll.

## Review Focus
1. Mobile viewport text overflow on small screens (iPhone SE 375px width).
2. WhatsApp chat simulation must render cleanly on both mobile (single column) and desktop (side-by-side).
3. 3D card tilt must not trigger horizontal scrollbars or clipping.
4. Logo must remain sharp and properly proportioned without squishing.
5. All links to sub-routes (`/planejamento`, `/aposentadorias`, `/beneficios-por-incapacidade`, `/beneficio-negado`) must be wired with Wouter `Link`.

---

### Task 1: Foundation, Tokens & Mobile Bottom Dock
**Files:**
- Modify: `client/src/pages/HomeV2.tsx`

**Interfaces:**
- Consumes: Tailwind classes, Framer Motion, Lucide icons, `logo.png`, `anderson-suit.jpg`.
- Produces: Base wrapper with `#F4F4F3` background, CSS utility classes for `.hl.tilt`, `.btn-dark .ar`, and floating mobile action bar.

- [ ] **Step 1: Define styling tokens and mobile bottom dock component in `HomeV2.tsx`**
- [ ] **Step 2: Verify zero horizontal overflow on mobile viewports**

### Task 2: Floating Pill Header & Editorial Hero with 3D Duo Cards
**Files:**
- Modify: `client/src/pages/HomeV2.tsx`

**Interfaces:**
- Consumes: `logo.png`, `anderson-suit.jpg`.
- Produces: `NexuHeader` with logo and nav pills; `EditorialHero` with tilted highlight word box, editorial serif italics, and tilted 3D duo cards.

- [ ] **Step 1: Implement `NexuHeader` with crisp logo, rounded pill menu, and circular arrow CTA**
- [ ] **Step 2: Implement `EditorialHero` with headline, sub-copy, stats pills, and 3D tilted photo card with OAB badge**
- [ ] **Step 3: Test render and visual balance on mobile and desktop**

### Task 3: Oidalio WhatsApp Chat Mockup & Principles Ribbon
**Files:**
- Modify: `client/src/pages/HomeV2.tsx`

**Interfaces:**
- Consumes: Pedagogical copy regarding INSS rules and transition periods.
- Produces: `OidalioChatSection` with simulated WhatsApp dialogue and `PrinciplesRibbon` with glyph badges (`◎`, `≋`, `✳`).

- [ ] **Step 1: Implement realistic WhatsApp chat card with message bubbles, checkmarks, and insight badge**
- [ ] **Step 2: Implement principles ribbon ticker and 3 glyph step cards**
- [ ] **Step 3: Verify responsive layout on mobile**

### Task 4: Bento Grid of Specialties & Conversational Mobile Triagem
**Files:**
- Modify: `client/src/pages/HomeV2.tsx`

**Interfaces:**
- Consumes: Subpage routes (`/planejamento`, `/aposentadorias`, `/beneficios-por-incapacidade`, `/beneficio-negado`, `/revisao-de-aposentadoria`, `/salario-maternidade`).
- Produces: Asymmetric bento cards with circular arrow buttons and interactive 2-step triagem form.

- [ ] **Step 1: Implement Bento Grid with asymmetric curves (`rounded-[34px]`) and circular arrow buttons**
- [ ] **Step 2: Implement 2-step thumb-friendly Conversapp triagem component**
- [ ] **Step 3: Test click states and WhatsApp message pre-formatting**

### Task 5: Editorial Bio, Reviews Slider, FAQ & Final Verification
**Files:**
- Modify: `client/src/pages/HomeV2.tsx`

**Interfaces:**
- Consumes: OAB credentials, client reviews, FAQ data.
- Produces: `EditorialBio`, `ReviewsSlider`, `FAQModern`, and `InstitutionalFooter`.

- [ ] **Step 1: Implement Bio section with Dr. Anderson photo, OAB badge, and credentials**
- [ ] **Step 2: Implement carousel reviews, FAQ accordion, and sober footer**
- [ ] **Step 3: Test complete page compile and verify on `http://localhost:5000/`**
