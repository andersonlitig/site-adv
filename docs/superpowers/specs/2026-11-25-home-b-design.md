# Spec de Design — Home B (`/home-b`)

**Data:** 2026-11-25
**Rota de teste:** `/home-b` (`client/src/pages/HomeBV2.tsx`)
**Rota atual preservada:** `/` (`client/src/pages/HomeV2.tsx` permanece intacta até aprovação visual final)

---

## 1. Intenção e Público

Transformar a página inicial em uma porta de entrada orientada à conversão ética para quem encontra o escritório pelo **Google** (busca ativa de solução urgente no INSS/RPPS) ou por **redes sociais / indicação** (avaliando autoridade e confiança antes de enviar mensagem).

O visitante precisa perceber em até 5 segundos:
1. Qual decisão ou risco ele evita ao falar com um especialista antes de protocolar no Meu INSS.
2. Que o escritório tem prova real (`5,0 ★ no Google` e registro ativo OAB/ES nº 40.152) já visível perto do topo.
3. Em qual dos 9 caminhos de atendimento (ou na triagem guiada) o caso dele se encaixa — sem juridiquês e sem pressão comercial agressiva.

---

## 2. Objetivos, Não-Objetivos e Anti-Objetivos

- **Objetivos:**
  - Aplicar na Home a mesma lógica estrutural aprovada nas páginas de serviço Opção B (`SPIN + PAS/BAB + prova social + clareza ética`).
  - Reduzir ruído visual removendo excesso de chips/tags dos cards de serviço e da sequência de passos.
  - Garantir consistência tipográfica, contraste, responsividade (`1440×900` e `390×844`) e compatibilidade integral com `SiteHeader`, `SiteFooter`, `GoogleReviewsSection` e `BlogHighlights`.
- **Não-objetivos:**
  - Não alterar `HomeV2.tsx` (`/`), `ServicePageTemplate.tsx` nem as 9 páginas de serviço já atualizadas.
  - Não alterar cores da identidade visual (`#070E18`, `#091D39`, `#CFAE70`, `#FAF9F6`, `#FFFFFF`, `#1A1A1A`) nem fontes (`Plus Jakarta Sans` / `Bricolage Grotesque` / `Cormorant Garamond`).
- **Anti-objetivos (OAB Provimento nº 205/2021 e CED):**
  - Proibido prometer resultado favorável, quantias em reais, ganho garantido ou prazos de concessão.
  - Proibido tom sensacionalista ou mercantilista (`"chutar"`, `"no escuro"`, `"rasgar dinheiro"`, `"enrolação"`, `"papéis na hora"`, urgência artificial).

---

## 3. Abordagens Consideradas

1. **Funil Guiado "Dor → Clareza → Ação" *(Selecionada pelo usuário)*:** Hero SPIN com prova social `5,0 ★` já acima da dobra → Faixa de Confiança → Bloco Antes vs. Depois (`PAS/BAB`) → Problemas/Serviços em cards limpos sem chips + Triagem Rápida → O que está incluído (compromisso ético integrado, sem caixa escura interna) → Como começar (`01 · 02 · 03`) → Sobre Dr. Anderson + Slider completo de Avaliações Google → Blog → FAQ → CTA Final.
2. **Triagem-Primeiro:** colocaria o quiz logo na segunda dobra, aumentando rejeição de tráfego frio que ainda busca confiança antes de interagir. Descartada.
3. **Home Ultra-Enxuta (5 blocos):** removeria Blog e áreas específicas, prejudicando SEO orgânico do Google. Descartada.

---

## 4. Arquitetura Visual de `HomeBV2.tsx` (`/home-b`)

Ordem exata das 11 seções (alternância escura/clara sem duas seções iguais seguidas):

1. **`Hero` (`#070E18` + foto Terceira Ponte):**
   - Badge superior discreta (`Advocacia Previdenciária · OAB/ES nº 40.152`) + prova social compacta (`<GoogleCompactBadge tone="dark" />` ou pílula `5,0 ★ no Google`) já visível acima da dobra.
   - `h1`: Gancho SPIN direto sobre decisão antes do pedido/recurso no INSS (*"Vai pedir ou recorrer no INSS sem conferir seus direitos antes?"*), mantendo `max-w-[840px]` e `clamp(36px,5.8vw,72px)`.
   - Subtítulo claro explicando em 2 linhas o que o escritório faz em linguagem leiga + 2 ações (`Conversar no WhatsApp` + `Identificar meu caso abaixo →`).
2. **`TrustBar` (`#1A1A1A`):**
   - 3 itens limpos: atendimento digital no Brasil e exterior + presencial na Serra/ES; especialista em INSS e Servidor Público; conferência transparente antes de protocolar.
3. **`#comparativo` — Antes vs. Depois (`#FFFFFF`):**
   - Adaptação `PAS/BAB` pensada para a Home (cobrindo quem vai pedir aposentadoria, quem teve benefício negado/cortado e quem já recebe valor baixo):
     - Esquerda (`#FAF9F6`, ícones vermelhos `AlertCircle`): riscos comuns de tentar no aplicativo Meu INSS ou aceitar negativa sem análise técnica (cálculo errado, carteira/PPP ignorados, perda do prazo de 30/90 dias, escolha irreversível de regra).
     - Direita (`#091D39`, ícones dourados `CheckCircle2`): clareza com conferência prévia (auditoria completa do histórico, definição do melhor caminho administrativo ou judicial, explicação direta sem juridiquês).
   - Tarja discreta `painCallout` com regra factual + botão WhatsApp.
4. **`#servicos` — "Qual é a sua situação hoje?" (`#FAF9F6`):**
   - Os 9 serviços em grid `sm:grid-cols-2 lg:grid-cols-3`, **sem chips repetitivos**, cada card com: ícone + tag curta de identificação + título em pergunta/dor clara + 1 frase objetiva + rodapé `"Ver detalhes do atendimento →"` levando direto à rota específica (`/planejamento`, `/aposentadorias`, `/beneficio-negado`, `/beneficios-por-incapacidade`, `/revisao-de-aposentadoria`, `/bpc-loas`, `/pensao-por-morte`, `/salario-maternidade`, `/servidor-publico`).
5. **`#o-que-entregamos` — Diferencial & Compromisso Ético (`#091D39`):**
   - Mesmo layout assimétrico aprovado no `/planejamento-b`:
     - Coluna esquerda: badge, título (`"Mais do que atendimento padrão. Clareza antes de decidir."`), texto corrido explicando o filtro de transparência (se não houver vantagem prática ou direito aplicável, dizemos abertamente antes de contratar — **sem caixa preta interna**), CTA WhatsApp.
     - Coluna direita: 3 blocos horizontais com ícones (sem numeração `01-03` duplicada): Análise completa do histórico, Comunicação em linguagem simples e Acompanhamento ponta a ponta.
6. **`#como-comecar` — Como Funciona (`#FFFFFF`):**
   - Única sequência numerada `01 · 02 · 03` da página, com cards limpos **sem chips** (`Conte sua dúvida pelo WhatsApp`, `Receba orientação e escopo claro`, `Assinatura digital e acompanhamento`).
7. **`#triagem` — Triagem Rápida em 3 passos (`#060D17`):**
   - Reaproveita e aprimora o funil interativo de 3 etapas (`OBJETIVOS_TRIAGEM` → `SITUACOES_POR_OBJETIVO` → nome/WhatsApp opcional), levando suas respostas direto para o WhatsApp do Dr. Anderson.
8. **`GoogleReviewsSection` (`variant="slider1"`, `#FFFFFF`):**
   - Slider completo de avaliações verificadas no Google `5,0 ★` com nota destacada.
9. **`#sobre` — Dr. Anderson Litig (`#091D39`):**
   - Foto oficial, OAB/ES nº 40.152, credenciais e posicionamento sóbrio + CTA direto e âncora para `#triagem`.
10. **`BlogHome` (`#FAF9F6`) & `FAQ` (`#FFFFFF`):**
    - `<BlogHighlights posts={BLOG_POSTS.slice(0, 4)} />` em fundo creme suave, seguido do `FAQ` transversal em fundo branco (6 a 7 perguntas em linguagem leiga: documentos, prazo de 30 dias, planejamento vs. Meu INSS, BPC sem contribuição, atendimento presencial/online, consulta na OAB).
11. **`ContactCta` (`#070E18`) + `SiteFooter`:**
    - Fechamento calmo com botão WhatsApp, âncora para `#triagem` e canais do escritório.

---

## 5. Alterações Técnicas Previstas

- **Novo arquivo:** `client/src/pages/HomeBV2.tsx`
- **Rota adicionada em `client/src/App.tsx`:** `<Route path="/home-b" component={HomeBV2} />`
- **SEO da página de teste:** definir `<title>` e `meta description` específicos sem alterar `HomeV2.tsx` (`/`).
- **Verificação obrigatória pós-build:** varredura de linguagem/OAB, `npm run check`, `npm run build` e inspeção em navegador (`1440×900` e `390×844`) na rota `/home-b`.
