const fs = require('fs');

const aposentarCode = fs.readFileSync('client/src/pages/AposentarV2.tsx', 'utf-8');
let planCode = fs.readFileSync('client/src/pages/PlanejamentoV2.tsx', 'utf-8');

function extractComponent(code, compName) {
  const startStr = `function ${compName}() {`;
  const startIdx = code.indexOf(startStr);
  if (startIdx === -1) return null;
  
  let openBraces = 0;
  let inFunction = false;
  let endIdx = -1;
  
  for (let i = startIdx; i < code.length; i++) {
    if (code[i] === '{') {
      openBraces++;
      inFunction = true;
    } else if (code[i] === '}') {
      openBraces--;
    }
    
    if (inFunction && openBraces === 0) {
      endIdx = i + 1;
      break;
    }
  }
  
  return code.substring(startIdx, endIdx);
}

let alertaPlan = extractComponent(aposentarCode, 'AlertaAposentar') || '';
alertaPlan = alertaPlan.replace('AlertaAposentar', 'AlertaPlanejamento');
alertaPlan = alertaPlan.replace('O RISCO DO PEDIDO SEM ANÁLISE', 'O RISCO DA FALTA DE PLANEJAMENTO');
alertaPlan = alertaPlan.replace('O simulador do INSS não escolhe o melhor benefício para você.', 'Pagar o INSS sem estratégia é jogar dinheiro fora.');
alertaPlan = alertaPlan.replace('Muitos trabalhadores clicam em "Pedir Aposentadoria" acreditando que o sistema vai calcular o melhor valor automaticamente.', 'Muitos segurados pagam o INSS por anos sem saber se o valor está correto ou se a contribuição vai realmente aumentar a aposentadoria.');
alertaPlan = alertaPlan.replace('Isso é um equívoco que custa caro — e muitas vezes não tem conserto.', 'Isso é um erro grave: um planejamento mal feito pode custar mais de R$ 200 mil em perdas ao longo da vida.');
alertaPlan = alertaPlan.replace('O INSS concede a regra mais rápida disponível — não a mais vantajosa. Uma aposentadoria pedida sem análise pode significar receber centenas de reais a menos por mês, pelo resto da vida.', 'O INSS não vai te avisar se você estiver pagando a mais, ou se estiver pagando a regra errada. Um estudo previdenciário detalhado é a única forma de garantir o melhor benefício.');

let triagemPlan = extractComponent(aposentarCode, 'TriagemAposentadoriaV2') || '';
triagemPlan = triagemPlan.replace('TriagemAposentadoriaV2', 'TriagemPlanejamento');
triagemPlan = triagemPlan.replace(/aposentadoria/g, 'planejamento');
triagemPlan = triagemPlan.replace(/Aposentadoria/g, 'Planejamento');
triagemPlan = triagemPlan.replace('Quero dar entrada agora', 'Quero organizar minhas contribuições');
triagemPlan = triagemPlan.replace('Acho que já tenho os requisitos', 'Quero saber se estou pagando certo');
triagemPlan = triagemPlan.replace('Trabalhei em local perigoso ou insalubre', 'Sou Empresário ou Autônomo');
triagemPlan = triagemPlan.replace('Quero verificar o direito à aposentadoria especial', 'Preciso otimizar o valor do meu pró-labore ou guia');
triagemPlan = triagemPlan.replace('Trabalhei no campo (zona rural)', 'Faltam menos de 5 anos');
triagemPlan = triagemPlan.replace('Quero entender meu direito à planejamento rural', 'Quero o mapa exato de quando pedir');
triagemPlan = triagemPlan.replace('Trabalhei por conta própria / autônomo', 'Trabalhei em várias áreas');
triagemPlan = triagemPlan.replace('MEI, freelancer, profissional liberal', 'CLT, serviço público, autônomo, exterior');
triagemPlan = triagemPlan.replace('Tenho deficiência comprovada', 'Quero aumentar meu benefício');
triagemPlan = triagemPlan.replace('Planejamento da pessoa com deficiência', 'Acho que o simulador do INSS está baixo');
triagemPlan = triagemPlan.replace('setFormData({ ...formData, situacao: option.title });', 'setFormData({ ...formData, situacao: option.title });');
triagemPlan = triagemPlan.replace('handleFinish(option.title)', 'handleFinish(option.title)');
triagemPlan = triagemPlan.replace('https://wa.me/5527992942888?text=`Olá! Gostaria de uma análise para o meu caso de planejamento.%0A%0A*Nome:* ${finalData.nome}%0A*Situação:* ${sit}`', 'https://wa.me/5527992942888?text=`Olá! Gostaria de fazer meu Planejamento Previdenciário.%0A%0AMeu nome é *${finalData.nome}*.%0AEstou buscando planejamento porque: *${sit}*.`');

let comoFuncionaPlan = extractComponent(aposentarCode, 'ComoFunciona') || '';
comoFuncionaPlan = comoFuncionaPlan.replace('ComoFunciona', 'ComoFuncionaPlanejamento');
comoFuncionaPlan = comoFuncionaPlan.replace('Você conta a sua história de trabalho', 'Coleta de Documentos e Histórico');
comoFuncionaPlan = comoFuncionaPlan.replace('Onde trabalhou, por quanto tempo, se foi com carteira ou sem, se passou pelo campo, por conta própria ou em lugar perigoso. Não precisa saber o que isso significa juridicamente — só nos contar o que viveu. A gente faz a interpretação técnica.', 'Nós levantamos todo seu histórico no INSS, CNIS, PPPs, carteiras de trabalho e carnês de contribuição para ter o raio-x completo da sua vida trabalhista.');
comoFuncionaPlan = comoFuncionaPlan.replace('Analisamos o seu histórico e calculamos as opções', 'Auditoria e Cálculos Matemáticos');
comoFuncionaPlan = comoFuncionaPlan.replace('Verificamos seus registros no INSS, identificamos o que pode estar faltando e calculamos o valor estimado do benefício em cada modalidade disponível para o seu perfil. Você recebe uma visão clara do que é possível.', 'Fazemos a correção do seu CNIS e cruzamos as regras antigas, regras de transição e regras novas. Projetamos cenários de contribuição futura para descobrir o ROI (Retorno sobre Investimento) exato.');
comoFuncionaPlan = comoFuncionaPlan.replace('Você recebe uma orientação clara sobre o que fazer', 'Entrega do Mapa de Planejamento');
comoFuncionaPlan = comoFuncionaPlan.replace('Qual é a melhor opção, quanto você pode esperar receber, se tem alguma pendência a resolver antes de dar entrada e qual é o prazo ideal. Tudo explicado sem enrolação e sem juridiquês.', 'Apresentamos um documento detalhado, com gráficos e linguagem simples. Você saberá o dia exato para pedir, quanto vai receber, e qual código usar para pagar o INSS daqui pra frente.');
comoFuncionaPlan = comoFuncionaPlan.replace('Damos entrada e acompanhamos até o final', 'Acompanhamento do Pedido');
comoFuncionaPlan = comoFuncionaPlan.replace('Cuidamos de toda a papelada e ficamos de olho no processo junto ao INSS. Se aparecer qualquer exigência ou problema no caminho, resolvemos. Você fica tranquilo até o benefício ser aprovado.', 'Quando chegar a data projetada no seu mapa, nossa equipe estará pronta para dar entrada no pedido, garantindo que o INSS cumpra exatamente o que foi planejado.');

let faqPlan = extractComponent(aposentarCode, 'FAQAposentar') || '';
faqPlan = faqPlan.replace('FAQAposentar', 'FAQPlanejamento');
faqPlan = faqPlan.replace('Posso me aposentar e continuar trabalhando?', 'Vale a pena pagar o INSS sobre o teto?');
faqPlan = faqPlan.replace('Sim, na maioria dos casos você pode receber a planejamento e continuar trabalhando normalmente', 'Nem sempre. Depende do seu histórico de contribuições antes de 1994 e das regras de transição aplicáveis a você. Pagar o teto sem planejamento pode ser rasgar dinheiro. O planejamento vai te dizer o valor exato.');
faqPlan = faqPlan.replace('Trabalhei anos sem carteira assinada. Esse tempo pode contar?', 'Quando devo fazer o planejamento previdenciário?');
faqPlan = faqPlan.replace('Pode sim. Se conseguirmos comprovar esse vínculo com documentos (recibos, testemunhas, registros da época), podemos pedir o reconhecimento', 'O ideal é fazer entre 3 e 5 anos antes da data prevista. Porém, empresários e autônomos devem fazer o quanto antes para não pagarem impostos desnecessários ao longo dos anos.');
faqPlan = faqPlan.replace('A reforma de 2019 me prejudicou?', 'O planejamento garante a concessão?');
faqPlan = faqPlan.replace('A Reforma mudou muitas regras e idades mínimas, mas também criou as Regras de Transição', 'O planejamento é um estudo matemático e jurídico. Ele não altera a lei, mas te dá a melhor estratégia possível dentro da lei, garantindo que você não perca dinheiro e saiba o momento exato de pedir.');

let contatoPlan = extractComponent(aposentarCode, 'ContatoAposentar') || '';
contatoPlan = contatoPlan.replace('ContatoAposentar', 'ContatoPlanejamento');
contatoPlan = contatoPlan.replace('Análise do seu caso sem compromisso. Atendimento direto e em todo o Brasil.', 'Agende a análise do seu caso. Descubra o caminho exato para a melhor aposentadoria.');


function replaceComponent(code, compName, newCode) {
  const startStr = `function ${compName}() {`;
  const startIdx = code.indexOf(startStr);
  if (startIdx === -1) return code;
  
  let openBraces = 0;
  let inFunction = false;
  let endIdx = -1;
  
  for (let i = startIdx; i < code.length; i++) {
    if (code[i] === '{') {
      openBraces++;
      inFunction = true;
    } else if (code[i] === '}') {
      openBraces--;
    }
    
    if (inFunction && openBraces === 0) {
      endIdx = i + 1;
      break;
    }
  }
  
  return code.substring(0, startIdx) + newCode + code.substring(endIdx);
}

// apply replacements
planCode = replaceComponent(planCode, 'AlertaPlanejamento', alertaPlan);
planCode = replaceComponent(planCode, 'TriagemPlanejamento', triagemPlan);
planCode = replaceComponent(planCode, 'ComoFuncionaPlanejamento', comoFuncionaPlan);
planCode = replaceComponent(planCode, 'FAQPlanejamento', faqPlan);
planCode = replaceComponent(planCode, 'ContatoPlanejamento', contatoPlan);

// Also need to adjust imports if any components used icons that PlanejamentoV2 doesn't have.
// PlanejamentoV2 already imports almost everything.

fs.writeFileSync('client/src/pages/PlanejamentoV2.tsx', planCode);
console.log('Update completed');
