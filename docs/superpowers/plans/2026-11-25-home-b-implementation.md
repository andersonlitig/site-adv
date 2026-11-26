# Home B (`/home-b`) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Criar a página paralela `/home-b` (`HomeBV2.tsx`) aplicando estrutura de conversão ética (Hero SPIN com prova `5,0 ★`, comparativo Antes vs. Depois PAS/BAB, cards de serviços orientados a problema sem chips, bloco assimétrico de transparência, passo a passo limpo `01 · 02 · 03`, triagem em 3 etapas, avaliações Google, Sobre, Blog, FAQ e CTA final) sem alterar a Home atual (`/`).

**Architecture:** Um novo módulo autocontido `client/src/pages/HomeBV2.tsx` reutilizando `SiteHeader`, `SiteFooter`, `PillButton`, `TextButton`, `Reveal`, `SectionBadge`, `wppLink` (`@/components/site/Ui`), `GoogleReviewsSection` + `GoogleCompactBadge` (`@/components/site/GoogleReviewsSection`) e `BlogHighlights` (`@/components/blog/BlogHighlights`), registrado sob `/home-b` em `client/src/App.tsx`.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Framer Motion, Wouter, Lucide React, Vite.

**Spec:** `docs/superpowers/specs/2026-11-25-home-b-design.md`

## Global Constraints

- Manter `HomeV2.tsx` (`/`), `ServicePageTemplate.tsx` e as 9 páginas de serviço existentes sem alterações.
- Alternar fundos entre seções adjacentes sem repetir cor igual consecutiva: `#070E18` → `#1A1A1A` → `#FFFFFF` → `#FAF9F6` → `#091D39` → `#FFFFFF` → `#060D17` → `#FFFFFF` → `#091D39` → `#FAF9F6` → `#FFFFFF` → `#070E18`.
- Proibido uso de chips/etiquetas nos 9 cards de `#servicos` e nos 3 passos de `#como-comecar`; manter `01 · 02 · 03` exclusivamente em `#como-comecar`.
- Zero caixa escura interna dentro da coluna esquerda de `#o-que-entregamos`.
- Zero promessa de êxito/valores em reais, zero gírias ou exagero (`"chutar"`, `"no escuro"`, `"rasgar dinheiro"`, `"enrolação"`, `"papéis na hora"`), zero jargão jurídico sem tradução (`"averbação"`, `"irretratável"`, `"prescrição"`).
- OAB/ES nº 40.152 e atendimento presencial na Serra/ES + 100% digital no Brasil e exterior explicitados com sobriedade.

## Review Focus

- Contraste de texto dourado/creme/branco e legibilidade sobre a foto de fundo da Terceira Ponte no `Hero` (`1440×900` e `390×844`).
- Transições e ausência de overflow horizontal (`scrollWidth <= innerWidth`) no widget de `Triagem` em 3 etapas no mobile `390×844`.
- Alternância de cores de fundo adjacentes entre `ComoComecar` (`#FFFFFF`), `Triagem` (`#060D17`), `GoogleReviewsSection` (`#FFFFFF`), `About` (`#091D39`), `BlogHome` (`#FAF9F6`) e `FAQ` (`#FFFFFF`).
- Todos os 9 links de serviços em `#servicos` apontando para as rotas corretas (`/planejamento`, `/aposentadorias`, `/beneficio-negado`, `/beneficios-por-incapacidade`, `/revisao-de-aposentadoria`, `/bpc-loas`, `/pensao-por-morte`, `/salario-maternidade`, `/servidor-publico`).
- SEO (`document.title`, `meta[name="description"]`) restaurado limpo ao montar `/home-b` e FAQ accordion respondendo corretamente a `aria-expanded`.

---

### Task 1: Criar `HomeBV2.tsx` com as 11 seções e SEO dedicado

**Files:**
- Create: `client/src/pages/HomeBV2.tsx`

**Interfaces:**
- Consumes: `SiteHeader`, `SiteFooter`, `PillButton`, `TextButton`, `Reveal`, `SectionBadge`, `wppLink` (`@/components/site/Ui`); `GoogleReviewsSection`, `GoogleCompactBadge` (`@/components/site/GoogleReviewsSection`); `BlogHighlights` (`@/components/blog/BlogHighlights`); `BLOG_POSTS` (`@/data/blogPosts`); assets `anderson-suit.jpg` e `terceira-ponte-vitoria.jpg`.
- Produces: `export default function HomeBV2(): JSX.Element` (todas as subseções encapsuladas em `HomeBV2.tsx`).

- [ ] **Step 1: Estruturar metadados SEO, `WppFloat`, `Hero` SPIN + prova social e `TrustBar`**

Implementar `HomeBV2.tsx` com `useEffect` atualizando `document.title` (`"Anderson Litig | Advocacia Previdenciária — Planejamento, INSS e Servidor Público"`) e `meta[name="description"]`, botão flutuante do WhatsApp, `Hero` com fundo `terceira-ponte-vitoria.jpg`, selo `<GoogleCompactBadge tone="dark" />` ou pílula `5,0 ★ no Google` acima da dobra, `h1` conciso (`"Vai pedir no INSS ou aceitar"` / `"uma negativa sem conferir antes?"`), CTAs (`Conversar no WhatsApp` e `#servicos`) e `TrustBar` (`#1A1A1A`, 3 itens).

- [ ] **Step 2: Implementar `#comparativo` (PAS/BAB Antes vs. Depois) e `#servicos` (9 dores sem chips)**

Adicionar `ComparisonHome` (`#FFFFFF`) comparando tentar sozinho pelo aplicativo (`tone="cream"`, `AlertCircle`) versus conferência técnica prévia (`tone="navy"`, `CheckCircle2`) + `painCallout` factual sobre prazos e escolha de regra; seguido por `ServicesGrid` (`#FAF9F6`) com os 9 atendimentos escritos como situações/dúvidas diretas, sem chips e sem numeração `01–09`, apontando exatamente para as 9 rotas de serviço.

- [ ] **Step 3: Implementar `#o-que-entregamos`, `#como-comecar` (`01 · 02 · 03`), `#triagem` e blocos finais**

Adicionar:
- `Deliverables` (`#091D39`): coluna esquerda com compromisso ético de clareza integrado no texto (sem caixa preta interna) + CTA WhatsApp; coluna direita com 3 blocos com ícones (`FileSearch`, `Scale`, `ShieldCheck`) sem numeração duplicada.
- `HowItWorks` (`#FFFFFF`): sequência `01 · 02 · 03` em `#FAF9F6` sem chips.
- `Triagem` (`#060D17`): funil interativo de 3 etapas (`OBJETIVOS_TRIAGEM` → `SITUACOES_POR_OBJETIVO` → nome/telefone opcionais) sem termos sensacionalistas ou jargão (`"averbação"`, `"papéis na hora"`).
- `<GoogleReviewsSection variant="slider1" />` (`#FFFFFF`) → `About` (`#091D39`) → `BlogHome` (`#FAF9F6`) → `FAQ` (`#FFFFFF`, 7 perguntas transversais com `aria-expanded`) → `ContactCta` (`#070E18`) → `SiteFooter`.

---

### Task 2: Registrar rota `/home-b` e validar build + navegador

**Files:**
- Modify: `client/src/App.tsx:28-76`

**Interfaces:**
- Consumes: `HomeBV2` de `@/pages/HomeBV2`.
- Produces: Rota `<Route path="/home-b" component={HomeBV2} />` acessível em `http://localhost:5000/home-b`.

- [ ] **Step 1: Registrar import e `<Route path="/home-b" component={HomeBV2} />` em `client/src/App.tsx`**

Inserir `import HomeBV2 from "@/pages/HomeBV2";` junto às páginas `V2` e declarar `<Route path="/home-b" component={HomeBV2} />` logo abaixo da rota `/`.

- [ ] **Step 2: Executar varredura OAB/jargão + `npm run check` + `npm run build`**

Run:
```powershell
Select-String -Path "client\src\pages\HomeBV2.tsx" -Pattern "chutar|no escuro|rasgar dinheiro|jogar dinheiro|enrolação|papéis|garantimos|100% de êxito|resultado garantido|averb|concomitân|fato gerador|prescriç|decadên|HISCRE|CRPS|\bDER\b|irretratáv" -CaseSensitive:$false
npm run check; npm run build
```
Expected: `Select-String` sem correspondências proibidas; `npm run check` e `npm run build` com código de saída `0`.

- [ ] **Step 3: Validar `/home-b` no navegador (`1440×900` e `390×844`)**

Verificar via Playwright (`browser` subagent, `Model: "flash"`):
- HTTP 200 em `/home-b`, zero erros de console/página/rede e todas as imagens carregadas após scroll.
- Overflow horizontal zero (`scrollWidth <= innerWidth`) em desktop (`1440×900`) e mobile (`390×844`).
- Alternância de fundos e ordem exata das 11 seções; `0` chips em `#servicos` e `#como-comecar`; `0` caixa escura em `#o-que-entregamos`; navegação clicando em 1 card de serviço; interação completa nos 3 passos da `Triagem`; abertura/fechamento do accordion do `FAQ`.
- Confirmar `/` (`HomeV2.tsx`) intacta sem regressões.
