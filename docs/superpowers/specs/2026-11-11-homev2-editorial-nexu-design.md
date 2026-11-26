# Design Spec: HomeV2 Editorial Nexu + Oidalio

## 1. Intent & Context
Redesign `client/src/pages/HomeV2.tsx` to eliminate the generic "quadradão" (alternating rectangular gray/white stripes, boxy grids) aesthetic, replacing it with the organic, continuous, high-end editorial visual system seen in `nexu.natdesigner.com`, `georgelcsmkt.com`, and `oidalio.ai`.

## 2. Constraints & Compliance
- **File Scope:** Modify ONLY `client/src/pages/HomeV2.tsx`. Keep other routes and pages untouched.
- **OAB Compliance:** Strict adherence to Provimento CFOAB nº 205/2021. Sober, pedagogical, and informative copy. Zero sensationalism or guarantees of financial victory. Dr. Anderson Litig, OAB/ES nº 40.152.
- **Brand Assets:** Authentic `client/src/assets/logo.png` (crisp, prominent) and `client/src/assets/anderson-suit.jpg`.
- **Mobile-First Priority:** Touch target sizes >= 48px, thumb navigation floating dock at the bottom of mobile viewports, responsive typography (`clamp(...)`) without awkward line breaks.

## 3. Visual System & Design Tokens (Extracted directly from Reference Sites)
- **Unified Background:** Single continuous warm cream `#F4F4F3` (eliminating horizontal gray/white stripe divisions).
- **Ink Palette:** Deep sovereign ink `#091D39`, warm charcoal `#44403C`, muted olive stone `#78716C`, border stone `#E7E5E4`.
- **Accent Tints:** Champagne gold `#CFAE70`, subtle lilac highlight `#D4A3E2`, soft emerald `#25D366` for active WhatsApp status.
- **Editorial Typography:**
  - Grotesk bold headings paired with elegant serif italic highlights: e.g. *"O cuidado faz a diferença"* / *"A advocacia começa antes do protocolo"*.
  - Tilted highlighter badges (`.hl.tilt`: -2deg rotation, rounded-md, soft accent background) behind focal words.
  - All-caps micro-eyebrows with generous letter-spacing (`tracking-widest`).
- **Cards & Shapes:**
  - Organic curves: `rounded-[32px]`, `rounded-[40px]`, `rounded-full`.
  - Duo Cards 3D: Overlapping tilted cards with realistic drop shadows `0 24px 60px -32px rgba(28,25,23,0.22)`.
  - Circular arrow action buttons: `.btn .btn-dark` with animated arrow circle `.ar`.
- **Interactive Components:**
  - **Hero Duo Card:** Dr. Anderson Litig in suit on the right card, tilted at -2deg, with real floating verification pill.
  - **Oidalio-style WhatsApp Hero Preview:** Embedded realistic chat window showing authentic, pedagogical client dialogue.
  - **Step Glyphs:** `◎ 01 / ENTENDER`, `≋ 02 / AUDITAR`, `✳ 03 / DEFENDER`.
  - **Conversapp-style Mobile Triagem:** Step-by-step card designed specifically for thumb tapping on mobile.
  - **Mobile Bottom Quick-Action Bar:** Sticky bottom pill for WhatsApp / Triagem, invisible on desktop.
