# Anderson Litig — Clean Redesign & Site-Wide Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the homepage (`HomeV2.tsx`) and shared UI shell (`Ui.tsx`, `index.css`, `index.html`) into a clean, light-first editorial layout inspired by `ingracio.adv.br` (keeping Dr. Anderson's photo out of the hero/top), replace all serif fonts with **Bricolage Grotesque**, and fix all broken links, mojibake, phone placeholders, and legacy subpages across the site.

**Architecture:** Preserve the React + Vite + Tailwind v4 + Wouter v3 + Framer Motion stack and official Anderson Litig palette (`#091D39` Azul Petróleo, `#CFAE70` / `#8a6a2b` Ouro Imperial, `#0D0D0D` Noir, `#FAF9F6` Creme, `#FFFFFF` Branco). Move from heavy dark/badge-cluttered blocks to a breathable white-canvas rhythm with asymmetric 2-column splits (Hero, Como Funciona, FAQ), clean tonal service cards, interactive Triagem as the dark focal band, and unified `SiteHeader`/`SiteFooter` across all routes.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lucide React, Wouter v3, Google Fonts (`Bricolage Grotesque` + `Inter`).

## Global Constraints
- **Typography:** Load `Bricolage Grotesque` (400–800) and `Inter` (400–700) in `client/index.html`. Zero `Playfair Display`, `Georgia`, or `font-serif` anywhere in `client/`.
- **Hero constraint:** No portrait/photo of Dr. Anderson at the top/hero. Use `terceira-ponte-vitoria.jpg` cleanly framed on the right of the light Hero; keep `anderson-suit.jpg` in the `#sobre` section.
- **Real contacts only:** WhatsApp `5527992942888` / `(27) 99294-2888`, email `contato@andersonlitig.adv.br`, `OAB/ES nº 40.152`, Serra/ES. Zero `99999-9999` or `/v2` dead routes.
- **Clean Wouter v3 links:** Use `<Link href="..." className="...">` without nested `<a>` tags.

---

### Task 1: Typography, HTML Head & Global CSS Tokens
**Files:**
- Modify: `client/index.html`
- Modify: `client/src/index.css`

- [ ] **Step 1:** Update `client/index.html` Google Fonts `<link>` to load `Bricolage+Grotesque:opsz,wght@12..96,400;500;600;700;800` and `Inter:wght@400;500;600;700`.
- [ ] **Step 2:** Replace `+55-27-99999-9999` with `+55-27-99294-2888` in both JSON-LD scripts in `client/index.html`.
- [ ] **Step 3:** Update `client/src/index.css` `@theme inline` and `@layer base` so `--font-heading` and `--font-display` use `'Bricolage Grotesque', 'Inter', sans-serif`, remove `--font-serif` / `Playfair Display`, set `em` to `font-family: var(--font-heading); font-style: normal; font-weight: 600;`, and keep clean light/dark selection and header tokens.

### Task 2: Shared Navigation, Buttons & Footer (`Ui.tsx`) + Blog Card Links
**Files:**
- Modify: `client/src/components/site/Ui.tsx`
- Modify: `client/src/components/blog/PostCards.tsx`
- Modify: `client/src/pages/BlogList.tsx`
- Modify: `client/src/pages/BlogPostDetail.tsx`

- [ ] **Step 1:** Update `SiteHeader` in `Ui.tsx` to a clean white sticky header (`bg-white/95 backdrop-blur-md border-b border-[#091D39]/10 text-[#091D39]`) using `logo-dark.png` (and optional `tone="dark"` fallback if needed), crisp nav links (`Serviços`, `Como funciona`, `Triagem Rápida`, `Blog`, `Sobre`), and a refined outlined/solid rectangular-soft CTA button (`rounded-lg`). Fix `<Link>` nested `<a>` tags.
- [ ] **Step 2:** Update `PillButton` (refined `rounded-lg` / `rounded-xl` clean geometry or clean pill option with subtle hover), `TextButton`, and `SectionBadge` (cleaner typographic eyebrow option without mandatory sparkle badges).
- [ ] **Step 3:** Update `SiteFooter` to a deep `#091D39` anchor band with 4 balanced columns, linking all internal routes (`/planejamento`, `/aposentadorias`, `/beneficio-negado`, `/beneficios-por-incapacidade`, `/revisao-de-aposentadoria`, `/salario-maternidade`, `/blog`), real contacts, and Provimento 205/2021 CFOAB notice.
- [ ] **Step 4:** Remove `font-serif` and nested `<Link><a>` from `PostCards.tsx`, `BlogList.tsx`, `BlogPostDetail.tsx`.

### Task 3: Homepage Redesign (`HomeV2.tsx`)
**Files:**
- Modify: `client/src/pages/HomeV2.tsx`

- [ ] **Step 1:** Build clean white Hero (`bg-white text-[#091D39]`) with 2-column split: left column (quiet OAB label, `Bricolage Grotesque` H1, concise subline, solid `#091D39` CTA + underlined `#triagem` link, reassurance micro-copy, Google 5.0 rating line) and right column (`terceira-ponte-vitoria.jpg` cleanly framed in `rounded-xl`, zero lawyer photo at top).
- [ ] **Step 2:** Build light `TrustBar` (`bg-[#FAF9F6]`) and clean Ingrácio-inspired `ServicesList` (6 cards with low density: title, 1-sentence question/copy, bottom link + arrow, restrained brand color-blocking `#091D39`, `#102A4C`, `#F5EFE2`, `#FAF9F6`; includes link to `/salario-maternidade` and `#triagem`).
- [ ] **Step 3:** Convert `HowItWorks` to an asymmetric 2-column layout (left intro + right `01`/`02`/`03` hairline-divided vertical steps).
- [ ] **Step 4:** Refine `Triagem` as the page's intentional `#091D39` dark focal band with `Bricolage Grotesque` headings and preserved 3-step WhatsApp flow.
- [ ] **Step 5:** Refine `BlogHome`, `About` (clean light `#FAF9F6` band featuring `anderson-suit.jpg` portrait + credentials), `Testimonials` (elevated `5,0 / 5` summary + clean testimonial cards without external random stock dependency issues), `FAQ` (asymmetric 2-column hairline accordion), and `ContactCta` (clean light centered band before footer).

### Task 4: Subpages Typography & Bug Fixes
**Files:**
- Modify: `client/src/pages/AposentarV2.tsx`
- Modify: `client/src/pages/BeneficioNegadoV2.tsx`
- Modify: `client/src/pages/IncapacidadeV2.tsx`
- Modify: `client/src/pages/PlanejamentoV2.tsx`
- Modify: `client/src/pages/RevisaoV2.tsx`
- Modify: `client/src/pages/SalarioMaternidadeV2.tsx`
- Modify: `client/src/pages/JaAposentadoV2.tsx`
- Modify: `client/src/pages/not-found.tsx`
- Modify: `client/src/components/sections/Introduction.tsx`

- [ ] **Step 1:** Replace all `'Playfair Display', Georgia, serif` and `font-serif` in `AposentarV2.tsx`, `BeneficioNegadoV2.tsx`, `IncapacidadeV2.tsx`, `PlanejamentoV2.tsx`, `RevisaoV2.tsx`, and `Introduction.tsx` with `Bricolage Grotesque` (`font-heading`, non-italic).
- [ ] **Step 2:** Rebuild `SalarioMaternidadeV2.tsx` with proper UTF-8 Portuguese copy specific to Salário-Maternidade (autônoma, MEI, desempregada, CLT, adoção), `SiteHeader`, `SiteFooter`, real phone `(27) 99294-2888`, and `Bricolage Grotesque`.
- [ ] **Step 3:** Update `JaAposentadoV2.tsx` to use `SiteHeader`, `SiteFooter`, real phone `(27) 99294-2888`, valid routes (`/` instead of `/v2`), and `Bricolage Grotesque`.
- [ ] **Step 4:** Localize `not-found.tsx` in Portuguese with `SiteHeader`, `SiteFooter`, and a button back to `/`.

### Task 5: Typecheck, Build & Live Browser Verification
- [ ] **Step 1:** Run `npm run check` (`tsc`) and `npm run build` (`tsx script/build.ts`) to confirm zero TypeScript or Vite build errors.
- [ ] **Step 2:** Visually inspect the rendered live app at `http://localhost:5000/` (desktop `1440x900` and mobile `390x844`) and subpages (`/salario-maternidade`, `/blog`, `/404-teste`) via the `browser` subagent, verifying fonts (`Bricolage Grotesque`), zero Playfair/serif fallback, no lawyer photo in the hero, clean layout, zero horizontal overflow, and clean contrast.
