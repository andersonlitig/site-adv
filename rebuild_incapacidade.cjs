const fs = require('fs');

const aposentarCode = fs.readFileSync('client/src/pages/AposentarV2.tsx', 'utf-8');

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

const wppFloat = extractComponent(aposentarCode, 'WppFloat');
const headerV2 = extractComponent(aposentarCode, 'HeaderV2');
const breadcrumb = extractComponent(aposentarCode, 'Breadcrumb').replace('Concessão de Aposentadoria', 'Auxílio-Doença e Invalidez');
const footerV2 = extractComponent(aposentarCode, 'FooterV2');
const autoridadeAdvogado = extractComponent(aposentarCode, 'AutoridadeAdvogado');
const ctaFinal = extractComponent(aposentarCode, 'CTAFinal');

// 1. Hero
let hero = extractComponent(aposentarCode, 'HeroAposentar') || '';
hero = hero.replace('HeroAposentar', 'HeroIncapacidade');
hero = hero.replace('aposentadoria_hero.jpg', 'incapacidade_hero.jpg');
hero = hero.replace('Aposentadorias pelo INSS', 'Benefícios por Incapacidade');
hero = hero.replace('Trabalhou a vida toda.<br/>\n            <span className="text-[#CFAE70]">Garanta o que é seu.</span>', 'Doente, sem poder trabalhar e com<br/>\n            <span className="text-[#CFAE70]">o benefício cortado pelo INSS?</span>');
hero = hero.replace('O INSS processa milhares de pedidos por dia — e frequentemente comete erros. Pedir aposentadoria sem análise técnica prévia pode significar receber permanentemente menos do que você tem direito.', 'Não aceite a "alta médica" do perito do INSS se o seu médico atesta que você não pode trabalhar. Proteja sua saúde e garanta o seu sustento com uma ação especializada.');
hero = hero.replace('Verificamos seu CNIS, calculamos o melhor valor e acompanhamos todo o processo — sem que você precise sair de casa.', 'Atuamos judicialmente para restabelecer o seu benefício rapidamente e garantir que o INSS pague todos os atrasados devidos.');
hero = hero.replace('Verificar meu direito', 'Avaliar meu caso');
hero = hero.replace('Ver tipos de aposentadoria', 'Ver meus direitos');

// 2. Alerta
let alerta = extractComponent(aposentarCode, 'AlertaAposentar') || '';
alerta = alerta.replace('AlertaAposentar', 'AlertaIncapacidade');
alerta = alerta.replace('O RISCO DO PEDIDO SEM ANÁLISE', 'O PERIGO DO LIMBO PREVIDENCIÁRIO');
alerta = alerta.replace('O simulador do INSS não escolhe o melhor benefício para você.', 'O INSS procura motivos para cortar o seu benefício.');
alerta = alerta.replace('Muitos trabalhadores clicam em "Pedir Aposentadoria" acreditando que o sistema vai calcular o melhor valor automaticamente.', 'Ir para a perícia apenas com uma receita médica antiga ou laudo simples pode ser um erro fatal.');
alerta = alerta.replace('Isso é um equívoco que custa caro — e muitas vezes não tem conserto.', 'E o pior cenário é o "Limbo Previdenciário": o INSS te dá alta, mas o médico do trabalho da empresa não aceita o seu retorno.');
alerta = alerta.replace('O INSS concede a regra mais rápida disponível — não a mais vantajosa. Uma aposentadoria pedida sem análise pode significar receber centenas de reais a menos por mês, pelo resto da vida.', 'Nessa situação, você fica sem salário da empresa e sem o auxílio do INSS, acumulando dívidas enquanto sua saúde piora. É essencial intervir judicialmente com urgência.');
alerta = alerta.replace('VERIFICAR MEU CASO', 'RESTABELECER MEU BENEFÍCIO');

// 3. Vantagens
let vantagens = extractComponent(aposentarCode, 'VantagensAdvogado') || '';
vantagens = vantagens.replace('VantagensAdvogado', 'VantagensIncapacidade');
vantagens = vantagens.replace('Por que contratar um advogado especialista?', 'Por que acionar a Justiça contra o INSS?');
vantagens = vantagens.replace('Segurança no Processo', 'Perícia Imparcial');
vantagens = vantagens.replace('Evite atrasos por falta de documentos ou erros no preenchimento do portal Meu INSS.', 'Na Justiça, a perícia é feita por um médico especialista nomeado pelo juiz, muito mais imparcial que o perito do INSS.');
vantagens = vantagens.replace('Cálculo Correto', 'Liminar de Urgência');
vantagens = vantagens.replace('Garantia de que você não vai receber menos do que a lei permite após uma vida inteira de trabalho.', 'Podemos pedir a Antecipação de Tutela (Liminar) para o juiz mandar o INSS pagar o benefício antes do fim do processo.');
vantagens = vantagens.replace('Economia de Tempo', 'Conversão em Invalidez');
vantagens = vantagens.replace('Não perca meses em filas ou tentando entender termos jurídicos complexos por conta própria.', 'Se for comprovado que a doença é definitiva, o juiz pode converter o auxílio em Aposentadoria por Invalidez.');

// 4. Triagem
let triagem = extractComponent(aposentarCode, 'TriagemAposentadoriaV2') || '';
triagem = triagem.replace('TriagemAposentadoriaV2', 'TriagemIncapacidade');
triagem = triagem.replace(/Qual é a sua situação\?/g, 'O que aconteceu com você?');
triagem = triagem.replace('Quero dar entrada agora', 'O INSS negou meu Auxílio');
triagem = triagem.replace('Acho que já tenho os requisitos', 'A perícia inicial indeferiu o pedido');
triagem = triagem.replace('Trabalhei em local perigoso ou insalubre', 'Cortaram antes da cura');
triagem = triagem.replace('Quero verificar o direito à aposentadoria especial', 'O famoso pente-fino ou alta programada');
triagem = triagem.replace('Trabalhei no campo (zona rural)', 'Quero Aposent. Invalidez');
triagem = triagem.replace('Quero entender meu direito à aposentadoria rural', 'Minha doença é grave ou permanente');
triagem = triagem.replace('Trabalhei por conta própria / autônomo', 'Sofri Acidente de Trabalho');
triagem = triagem.replace('MEI, freelancer, profissional liberal', 'Acidente na empresa, Burnout, LER/DORT');
triagem = triagem.replace('Tenho deficiência comprovada', 'Limbo Previdenciário');
triagem = triagem.replace('Aposentadoria da pessoa com deficiência', 'INSS deu alta mas médico do trabalho recusou');
triagem = triagem.replace('Quero planejar minha aposentadoria', 'Outra situação médica');
triagem = triagem.replace('Ainda não chegou a hora, quero me preparar', 'Preciso explicar melhor meu caso');

triagem = triagem.replace(
  "case 'planejar': return [",
  `case 'dar_entrada':
      case 'perigoso':
      case 'rural':
      case 'autonomo':
      case 'deficiencia':
      case 'planejar':
      default: return [
        { id: 'laudo_novo',   label: 'Tenho laudos e exames recentes',     sub: 'Documentos médicos com menos de 90 dias' },
        { id: 'laudo_antigo', label: 'Meus laudos estão desatualizados',   sub: 'Mais de 90 dias ou sem atestado focado' },
        { id: 'sem_laudo',    label: 'Ainda vou passar no médico',         sub: 'Não tenho como comprovar agora' },
      ];
      // Ignorando as velhas regras:
      case 'lixo1': return [`
);
triagem = triagem.replace("  const getStatusOptions = (id: string) => {", "  const getStatusOptions = (id: string) => {");

triagem = triagem.replace('https://wa.me/5527992942888?text=`Olá! Gostaria de uma análise para o meu caso de aposentadoria.%0A%0A*Nome:* ${finalData.nome}%0A*Situação:* ${sit}`', 'https://wa.me/5527992942888?text=`Olá! Estou com problemas no meu auxílio-doença/invalidez.%0A%0A*Nome:* ${finalData.nome}%0A*O que houve:* ${sit}%0A*Detalhe:* ${det}`');
triagem = triagem.replace(
  `{ id: 'planejar',    label: 'Outra situação médica',        sub: 'Preciso explicar melhor meu caso',          icon: <Target size={20} /> },
    { id: 'dar_entrada', label: 'O INSS negou meu Auxílio',                    sub: 'A perícia inicial indeferiu o pedido',                     icon: <CalendarCheck size={20} /> },`,
  `{ id: 'dar_entrada', label: 'O INSS negou meu Auxílio',                    sub: 'A perícia inicial indeferiu o pedido',                     icon: <CalendarCheck size={20} /> },`
);

triagem = triagem.replace(
  `{ id: 'deficiencia',label: 'Limbo Previdenciário',               sub: 'INSS deu alta mas médico do trabalho recusou',              icon: <Users size={20} /> },`,
  `{ id: 'deficiencia',label: 'Limbo Previdenciário',               sub: 'INSS deu alta mas médico do trabalho recusou',              icon: <Users size={20} /> },\n    { id: 'planejar',    label: 'Outra situação médica',        sub: 'Preciso explicar melhor meu caso',          icon: <Target size={20} /> },`
);

// 5. Motivos (Tipos)
let motivos = extractComponent(aposentarCode, 'TiposAposentadoria') || '';
motivos = motivos.replace('TiposAposentadoria', 'TiposIncapacidade');
motivos = motivos.replace('Tipos de aposentadoria', 'Modalidades de Benefício por Incapacidade');
motivos = motivos.replace('Entenda qual modalidade melhor se encaixa no seu histórico de vida e trabalho.', 'Diferentes situações exigem diferentes abordagens legais contra o INSS.');

motivos = motivos.replace('Aposentadoria por Idade', 'Auxílio-Doença Comum');
motivos = motivos.replace('Para homens a partir de 65 anos e mulheres a partir de 62 anos, com tempo mínimo de contribuição de 15 anos. É a regra geral após a reforma.', 'Devido quando a incapacidade para o trabalho é temporária. Normalmente exige 12 meses de carência, mas é fundamental ter laudos muito bem fundamentados para convencer a perícia.');
motivos = motivos.replace('Aposentadoria por Tempo de Contribuição', 'Auxílio-Doença Acidentário');
motivos = motivos.replace('Atingida através das Regras de Transição (Pedágio 50%, Pedágio 100%, Idade Mínima ou Pontos). Cada regra exige cálculos específicos de viabilidade.', 'Para acidentes de trabalho ou doenças ocupacionais (Burnout, LER/DORT, depressão pelo trabalho). Não exige carência e obriga a empresa a depositar o FGTS e garantir 12 meses de estabilidade após o retorno.');
motivos = motivos.replace('Aposentadoria Especial', 'Aposentadoria por Invalidez');
motivos = motivos.replace('Para profissionais expostos a agentes nocivos (médicos, enfermeiros, metalúrgicos, vigilantes). Permite aposentadoria mais cedo, mas exige documentação técnica rigorosa (PPP e LTCAT).', 'Devida quando a perícia atesta que a incapacidade é total e definitiva, sem chance de reabilitação. Muitas vezes conseguimos essa conversão na Justiça, mesmo quando o INSS só concede o auxílio-doença.');
motivos = motivos.replace('Aposentadoria Rural', 'Isenção de Carência (Doenças Graves)');
motivos = motivos.replace('Para trabalhadores do campo, pescadores artesanais e garimpeiros. Idade reduzida (60 homens / 55 mulheres), mas exige comprovação documental do trabalho em regime de economia familiar.', 'Doenças graves (como câncer, cardiopatia grave, HIV, Parkinson, entre outras) dão direito ao benefício desde o primeiro dia de contribuição, sem precisar esperar os 12 meses exigidos na regra geral.');
motivos = motivos.replace('Aposentadoria da Pessoa com Deficiência', 'Adicional de 25% na Invalidez');
motivos = motivos.replace('Redução no tempo de contribuição ou na idade para pessoas com deficiência leve, moderada ou grave, avaliada por perícia biopsicossocial do INSS.', 'Se o aposentado por invalidez comprovar que precisa da assistência permanente de terceiros (um familiar ou cuidador) para atividades básicas, ele tem direito a um aumento de 25% no valor da aposentadoria.');

// 6. Como Funciona
let comoFunciona = extractComponent(aposentarCode, 'ComoFunciona') || '';
comoFunciona = comoFunciona.replace('ComoFunciona', 'ComoFuncionaIncapacidade');
comoFunciona = comoFunciona.replace('Você conta a sua história de trabalho', 'Análise dos Laudos Médicos');
comoFunciona = comoFunciona.replace('Onde trabalhou, por quanto tempo, se foi com carteira ou sem, se passou pelo campo, por conta própria ou em lugar perigoso. Não precisa saber o que isso significa juridicamente — só nos contar o que viveu. A gente faz a interpretação técnica.', 'Avaliamos seus atestados, receitas e exames. Orientamos o que precisa estar escrito no laudo do seu médico particular para que ele tenha força judicial contra o INSS.');
comoFunciona = comoFunciona.replace('Analisamos o seu histórico e calculamos as opções', 'Protocolo e Pedido de Liminar');
comoFunciona = comoFunciona.replace('Verificamos seus registros no INSS, identificamos o que pode estar faltando e calculamos o valor estimado do benefício em cada modalidade disponível para o seu perfil. Você recebe uma visão clara do que é possível.', 'Entramos com a ação judicial e, em casos graves, fazemos um pedido de tutela de urgência (liminar) para que o juiz obrigue o INSS a pagar o benefício antes mesmo de o processo terminar.');
comoFunciona = comoFunciona.replace('Você recebe uma orientação clara sobre o que fazer', 'A Perícia Judicial Imparcial');
comoFunciona = comoFunciona.replace('Qual é a melhor opção, quanto você pode esperar receber, se tem alguma pendência a resolver antes de dar entrada e qual é o prazo ideal. Tudo explicado sem enrolação e sem juridiquês.', 'Você passará por um médico nomeado pelo Juiz Federal, que avaliará sua saúde de forma técnica e imparcial, sem a pressão de metas de corte que os peritos do INSS sofrem.');
comoFunciona = comoFunciona.replace('Damos entrada e acompanhamos até o final', 'Sentença e Atrasados');
comoFunciona = comoFunciona.replace('Cuidamos de toda a papelada e ficamos de olho no processo junto ao INSS. Se aparecer qualquer exigência ou problema no caminho, resolvemos. Você fica tranquilo até o benefício ser aprovado.', 'Com o laudo favorável do perito judicial, o juiz condena o INSS a restabelecer seu auxílio e a pagar de uma só vez todo o valor atrasado desde o dia em que eles negaram ou cortaram o benefício.');

// 7. FAQ
let faq = extractComponent(aposentarCode, 'FAQAposentar') || '';
faq = faq.replace('FAQAposentar', 'FAQIncapacidade');
faq = faq.replace('Posso me aposentar e continuar trabalhando?', 'O INSS cortou meu benefício. Posso ser demitido?');
faq = faq.replace('Sim, na maioria dos casos você pode receber a aposentadoria e continuar trabalhando normalmente', 'Se o INSS te der alta, você deve se apresentar à empresa. Se o médico do trabalho não aceitar seu retorno (limbo), a empresa NÃO pode te demitir. Nós notificamos a empresa e entramos contra o INSS simultaneamente.');
faq = faq.replace('Trabalhei anos sem carteira assinada. Esse tempo pode contar?', 'Não tenho qualidade de segurado. Tenho direito?');
faq = faq.replace('Pode sim. Se conseguirmos comprovar esse vínculo com documentos (recibos, testemunhas, registros da época), podemos pedir o reconhecimento', 'Geralmente, você não teria direito. PORÉM, se a doença iniciou quando você AINDA era segurado, ou se for um quadro de BPC/LOAS (que não exige contribuição), ainda podemos agir.');
faq = faq.replace('A reforma de 2019 me prejudicou?', 'Qual é a principal prova no processo?');
faq = faq.replace('A Reforma mudou muitas regras e idades mínimas, mas também criou as Regras de Transição', 'O LAUDO MÉDICO particular ou do SUS. O atestado não deve ter apenas o "CID", mas descrever claramente "POR QUE" você não pode executar a sua profissão.');
faq = faq.replace('Quanto tempo o INSS demora para dar uma resposta?', 'Estou recebendo o auxílio comum, posso processar a empresa?');
faq = faq.replace('Por lei, o INSS tem até 90 dias para analisar o pedido de aposentadoria', 'Se a doença for do trabalho (Burnout, LER), SIM. O benefício no INSS deve ser do tipo "B91". Se o INSS concedeu o comum, pedimos a conversão para você ter estabilidade de 12 meses.');
faq = faq.replace('E se o INSS negar depois de tudo isso?', 'Tenho que pagar para o advogado entrar com a ação?');
faq = faq.replace('Nós entraremos com recursos ou até mesmo com uma ação judicial para garantir o seu direito', 'Nós trabalhamos no modelo de "êxito". Ou seja, nosso pagamento ocorre no final do processo, se você ganhar, com um percentual sobre os atrasados.');
faq = faq.replace('Preciso ir pessoalmente a algum lugar?', 'A perícia judicial é igual à do INSS?');
faq = faq.replace('Não! Nosso atendimento é 100% digital', 'Não. A perícia do INSS costuma ser superficial. A perícia judicial é feita por um especialista de confiança do Juiz e tende a ser muito mais justa.');

// 8. Contato
let contato = extractComponent(aposentarCode, 'ContatoAposentar') || '';
contato = contato.replace('ContatoAposentar', 'ContatoIncapacidade');
contato = contato.replace('Análise do seu caso sem compromisso. Atendimento direto e em todo o Brasil.', 'Agende a análise dos seus laudos sem compromisso.');

const pageTemplate = `import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, ShieldAlert, CheckCircle2, AlertCircle, FileText, Calendar, ChevronDown, Plus, Minus, Mail, MapPin, Search, Clock, Target, Info, Users, Briefcase, FileSearch, ShieldCheck, Scale, Globe, FileSignature, CheckSquare, FastForward, HeadphonesIcon, CalendarCheck, Award, BookOpen, Calculator, LineChart } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/incapacidade_hero.jpg"; 
import andersonImg from "@/assets/anderson-litig.png";

export default function IncapacidadeV2() {
  return (
    <div className="font-sans text-[#2C2C2C] bg-white leading-relaxed overflow-x-hidden selection:bg-[#CFAE70] selection:text-[#091D39]">
      <WppFloat />
      <HeaderV2 />
      <main>
        <Breadcrumb />
        <HeroIncapacidade />
        <AlertaIncapacidade />
        <VantagensIncapacidade />
        <AutoridadeAdvogado />
        <TriagemIncapacidade />
        <TiposIncapacidade />
        <CTAFinal />
        <ComoFuncionaIncapacidade />
        <FAQIncapacidade />
        <ContatoIncapacidade />
      </main>
      <FooterV2 />
    </div>
  );
}

${wppFloat}

${headerV2}

${breadcrumb}

${hero}

${alerta}

${vantagens}

${autoridadeAdvogado}

${triagem}

${motivos}

${ctaFinal}

${comoFunciona}

${faq}

${contato}

${footerV2}
`;

fs.writeFileSync('client/src/pages/IncapacidadeV2.tsx', pageTemplate);
console.log('Done Building IncapacidadeV2');
