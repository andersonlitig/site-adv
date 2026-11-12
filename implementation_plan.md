# Plano de Implementação: Otimização da Home (Guia de Técnicas de Vendas Previdenciárias)

Este plano detalha as modificações na `HomeV2.tsx` para alinhar a página inicial às diretrizes de E-E-A-T, SEO/GEO, AIDA, e compliance rigoroso com a OAB (Provimento 205/2021), focando em converter tráfego orgânico através de conteúdo pilar.

## User Review Required

> [!IMPORTANT]
> **Modelo de Formulário Multi-Step:** A proposta é transformar o formulário de contato atual (que exibe todos os campos de uma vez) em um fluxo de "pé na porta":
> - **Passo 1:** Qual é o seu nome? + Qual o benefício de interesse?
> - **Passo 2:** Qual o seu WhatsApp? (para enviarmos a análise)
> Gostaria que aprovasse essa mudança de experiência (UX) no formulário.

> [!WARNING]
> **Depoimentos e OAB:** Para garantir 100% de compliance com a regra de não prometer resultados, adicionarei um *disclaimer* (aviso legal) discreto na seção de depoimentos afirmando: *"A OAB proíbe a promessa de resultados. Os relatos refletem nossa diligência técnica, mas cada caso é único."*

## Open Questions

> [!CAUTION]
> 1. Na seção de **Honorários de Êxito**, o guia sugere a frase: *"honorário só sobre o resultado, sem custo inicial"*. Confirma que o escritório opera com consulta/análise inicial 100% gratuita para todos os casos?
> 2. O componente de **Quiz/Simulador (Triagem)** atual exibe opções para o usuário clicar e ir pro WhatsApp. Para adaptar ao modelo SPIN, vou adicionar uma tela final que diz: *"Pelo que você respondeu, existe uma possibilidade real de direito. Fale com o advogado para confirmar."* antes de liberar o botão do WhatsApp. De acordo?

## Proposed Changes

### 1. `HomeV2.tsx` - Estrutura Geral e Compliance

- **[MODIFY] `HomeV2.tsx` (Seção de Depoimentos)**
  - Adicionar disclaimer legal sobre promessa de resultados para adequação máxima ao Provimento 205/2021.
  - Revisar textos dos depoimentos para focar na *experiência* e *atendimento técnico*, evitando soar como "garantia de causa ganha".

- **[MODIFY] `HomeV2.tsx` (Nova Seção / Bloco de Honorários)**
  - Inserir um bloco de confiança (Trust Block) logo após a seção "Como Funciona" ou integrado a ela.
  - **Copy:** "Trabalhamos com o modelo de honorários no êxito. A análise inicial do seu caso é gratuita e você só paga nossos honorários se tivermos sucesso no seu benefício." (Sem citar %).

- **[MODIFY] `HomeV2.tsx` (FAQ - Antecipação de Objeções)**
  - Adicionar perguntas cruciais para E-E-A-T e objeções clássicas:
    - *"Vocês garantem que vou conseguir o benefício?"* -> Resposta transparente: "Nenhum advogado pode garantir resultado. Garantimos excelência técnica, análise profunda do CNIS e a busca do melhor direito possível."
    - *"Isso é permitido pela OAB?"* -> Resposta: "Sim, nossa atuação é estritamente legal e informativa, focada em orientar quem busca por seus direitos."

### 2. `HomeV2.tsx` - Interatividade e Conversão

- **[MODIFY] `HomeV2.tsx` (TriagemInterativaV2)**
  - Transformar o fluxo final. Em vez de apenas exibir botões de WhatsApp imediatamente, o usuário responde as 2 perguntas (Benefício -> Situação) e vê uma mensagem gerada (efeito Implicação do SPIN):
  - *"Baseado nas suas respostas, existe a possibilidade de você ter direitos não reconhecidos pelo INSS. Envie sua resposta para uma análise técnica gratuita."* -> [Botão WhatsApp].

- **[MODIFY] `HomeV2.tsx` (ContactV2 - Formulário Multi-Step)**
  - Quebrar o formulário em 2 ou 3 passos simples (Pé na porta).
  - Passo 1: Nome + Interesse (Dropdown: Aposentadoria, BPC, etc).
  - Passo 2: WhatsApp e Mensagem opcional.
  - Adicionar a Peak-End Rule: Após submeter, trocar o formulário por uma mensagem clara: *"Recebemos seu contato. O Dr. Anderson irá analisar sua situação e entrará em contato pelo WhatsApp em breve."*

## Verification Plan

### Manual Verification
- Testar o fluxo do Quiz/Simulador para garantir que a mensagem SPIN aparece corretamente.
- Testar o formulário multi-step (Passo 1 -> Passo 2 -> Mensagem de Sucesso).
- Verificar a leitura mobile das novas seções (Trust Block de honorários e novos FAQs).
- Confirmar visualmente o disclaimer na seção de depoimentos.
