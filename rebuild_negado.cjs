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
const breadcrumb = extractComponent(aposentarCode, 'Breadcrumb').replace('Concessão de Aposentadoria', 'Benefício Negado');
const footerV2 = extractComponent(aposentarCode, 'FooterV2');
const autoridadeAdvogado = extractComponent(aposentarCode, 'AutoridadeAdvogado');
const ctaFinal = extractComponent(aposentarCode, 'CTAFinal');

// 1. Hero
let hero = extractComponent(aposentarCode, 'HeroAposentar') || '';
hero = hero.replace('HeroAposentar', 'HeroBeneficioNegado');
hero = hero.replace('aposentadoria_hero.jpg', 'beneficio_negado_hero.jpg');
hero = hero.replace('Aposentadorias pelo INSS', 'Benefício Negado pelo INSS');
hero = hero.replace('Trabalhou a vida toda.<br/>\n            <span className="text-[#CFAE70]">Garanta o que é seu.</span>', 'O INSS negou o seu benefício?<br/>\n            <span className="text-[#CFAE70]">Calma, nós podemos reverter.</span>');
hero = hero.replace('O INSS processa milhares de pedidos por dia — e frequentemente comete erros. Pedir aposentadoria sem análise técnica prévia pode significar receber permanentemente menos do que você tem direito.', 'Mais de 50% das negativas do INSS possuem erros por parte dos robôs ou servidores. Não aceite o "Indeferido" sem que um especialista analise o real motivo.');
hero = hero.replace('Verificamos seu CNIS, calculamos o melhor valor e acompanhamos todo o processo — sem que você precise sair de casa.', 'Temos 30 dias para entrar com recurso ou iniciar uma ação judicial para garantir que você receba todos os atrasados.');
hero = hero.replace('Verificar meu direito', 'Analisar minha carta');
hero = hero.replace('Ver tipos de aposentadoria', 'Entender os motivos');
hero = hero.replace("getElementById('tipos')", "getElementById('motivos')");

// 2. Alerta
let alerta = extractComponent(aposentarCode, 'AlertaAposentar') || '';
alerta = alerta.replace('AlertaAposentar', 'AlertaNegado');
alerta = alerta.replace('O RISCO DO PEDIDO SEM ANÁLISE', 'O RISCO DE RECORRER SOZINHO');
alerta = alerta.replace('O simulador do INSS não escolhe o melhor benefício para você.', 'Tentar recorrer sozinho no "Meu INSS" é um erro fatal.');
alerta = alerta.replace('Muitos trabalhadores clicam em "Pedir Aposentadoria" acreditando que o sistema vai calcular o melhor valor automaticamente.', 'Muitos segurados tentam fazer o Recurso Administrativo sozinhos, escrevendo de qualquer jeito no portal do INSS.');
alerta = alerta.replace('Isso é um equívoco que custa caro — e muitas vezes não tem conserto.', 'Isso só vai gerar outra negativa e atrasar seu direito em anos. O INSS exige fundamentação técnica e legal para mudar de ideia.');
alerta = alerta.replace('O INSS concede a regra mais rápida disponível — não a mais vantajosa. Uma aposentadoria pedida sem análise pode significar receber centenas de reais a menos por mês, pelo resto da vida.', 'Um recurso sem as provas certas ou uma ação judicial fora do prazo faz você perder todo o dinheiro dos atrasados desde o primeiro pedido. Deixe um advogado assumir essa briga por você.');
alerta = alerta.replace('VERIFICAR MEU CASO', 'REVERTER MINHA NEGATIVA');

// 3. Vantagens
let vantagens = extractComponent(aposentarCode, 'VantagensAdvogado') || '';
vantagens = vantagens.replace('VantagensAdvogado', 'VantagensNegado');
vantagens = vantagens.replace('Por que contratar um advogado especialista?', 'Por que não aceitar a decisão do INSS?');
vantagens = vantagens.replace('Segurança no Processo', 'Erro do Robô do INSS');
vantagens = vantagens.replace('Evite atrasos por falta de documentos ou erros no preenchimento do portal Meu INSS.', 'O sistema automatizado do INSS frequentemente nega pedidos válidos por não conseguir ler documentos corretamente.');
vantagens = vantagens.replace('Cálculo Correto', 'Recuperação dos Atrasados');
vantagens = vantagens.replace('Garantia de que você não vai receber menos do que a lei permite após uma vida inteira de trabalho.', 'Se revertermos a decisão, você recebe todo o valor acumulado desde a data em que ligou para o INSS pela primeira vez.');
vantagens = vantagens.replace('Economia de Tempo', 'Prazos Fatais');
vantagens = vantagens.replace('Não perca meses em filas ou tentando entender termos jurídicos complexos por conta própria.', 'Você tem apenas 30 dias para entrar com Recurso Administrativo após ser notificado. Agir rápido é fundamental.');

// 4. Triagem
let triagem = extractComponent(aposentarCode, 'TriagemAposentadoriaV2') || '';
triagem = triagem.replace('TriagemAposentadoriaV2', 'TriagemNegado');
triagem = triagem.replace(/Qual é a sua situação\?/g, 'Qual benefício foi negado?');
triagem = triagem.replace('Quero dar entrada agora', 'Aposentadoria por Tempo ou Idade');
triagem = triagem.replace('Acho que já tenho os requisitos', 'O INSS disse que falta tempo');
triagem = triagem.replace('Trabalhei em local perigoso ou insalubre', 'Aposentadoria Especial Negada');
triagem = triagem.replace('Quero verificar o direito à aposentadoria especial', 'Não aceitaram meu PPP ou laudo');
triagem = triagem.replace('Trabalhei no campo (zona rural)', 'Aposentadoria Rural Negada');
triagem = triagem.replace('Quero entender meu direito à aposentadoria rural', 'Não reconheceram minha atividade rural');
triagem = triagem.replace('Trabalhei por conta própria / autônomo', 'Auxílio-Doença Negado (Perícia)');
triagem = triagem.replace('MEI, freelancer, profissional liberal', 'Perito disse que estou apto para o trabalho');
triagem = triagem.replace('Tenho deficiência comprovada', 'BPC / LOAS Negado');
triagem = triagem.replace('Aposentadoria da pessoa com deficiência', 'Alegaram que a renda da família é alta');
triagem = triagem.replace('Quero planejar minha aposentadoria', 'Outro Benefício Negado');
triagem = triagem.replace('Ainda não chegou a hora, quero me preparar', 'Pensão por morte, Salário-maternidade, etc');
triagem = triagem.replace('https://wa.me/5527992942888?text=`Olá! Gostaria de uma análise para o meu caso de aposentadoria.%0A%0A*Nome:* ${finalData.nome}%0A*Situação:* ${sit}`', 'https://wa.me/5527992942888?text=`Olá! Tive meu benefício negado pelo INSS e preciso de ajuda.%0A%0A*Nome:* ${finalData.nome}%0A*O que foi negado:* ${sit}.`');

// 5. Motivos (Tipos)
let motivos = extractComponent(aposentarCode, 'TiposAposentadoria') || '';
motivos = motivos.replace('TiposAposentadoria', 'MotivosComuns');
motivos = motivos.replace('id="tipos"', 'id="motivos"');
motivos = motivos.replace('Tipos de aposentadoria', 'Por que o INSS nega tanto?');
motivos = motivos.replace('Entenda qual modalidade melhor se encaixa no seu histórico de vida e trabalho.', 'Conheça os erros mais comuns cometidos pelos servidores e pelo sistema automático do INSS.');
motivos = motivos.replace('Aposentadoria por Idade', 'Falta de Tempo de Contribuição');
motivos = motivos.replace('Para homens a partir de 65 anos e mulheres a partir de 62 anos, com tempo mínimo de contribuição de 15 anos. É a regra geral após a reforma.', 'O INSS costuma desconsiderar vínculos empregatícios antigos, períodos como aluno-aprendiz, serviço militar ou trabalho rural se os dados não estiverem perfeitamente alinhados no CNIS.');
motivos = motivos.replace('Aposentadoria por Tempo de Contribuição', 'Divergência de Dados (CNIS)');
motivos = motivos.replace('Atingida através das Regras de Transição (Pedágio 50%, Pedágio 100%, Idade Mínima ou Pontos). Cada regra exige cálculos específicos de viabilidade.', 'Um simples erro de digitação no nome da sua mãe, PIS duplicado ou data de nascimento errada no cadastro pode fazer o robô do INSS negar o seu benefício na hora.');
motivos = motivos.replace('Aposentadoria Especial', 'PPP Preenchido Incorretamente');
motivos = motivos.replace('Para profissionais expostos a agentes nocivos (médicos, enfermeiros, metalúrgicos, vigilantes). Permite aposentadoria mais cedo, mas exige documentação técnica rigorosa (PPP e LTCAT).', 'Aposentadorias Especiais são frequentemente negadas porque a empresa preencheu o formulário PPP (Perfil Profissiográfico Previdenciário) com erros ou faltando informações cruciais sobre o ruído ou produto químico.');
motivos = motivos.replace('Aposentadoria Rural', 'Perícia Médica Injusta');
motivos = motivos.replace('Para trabalhadores do campo, pescadores artesanais e garimpeiros. Idade reduzida (60 homens / 55 mulheres), mas exige comprovação documental do trabalho em regime de economia familiar.', 'No Auxílio-Doença e BPC, muitos peritos do INSS fazem consultas relâmpago de 3 minutos e concluem que o trabalhador está apto, mesmo com dezenas de laudos e atestados médicos provando o contrário.');
motivos = motivos.replace('Aposentadoria da Pessoa com Deficiência', 'Renda Familiar Acima do Limite (BPC)');
motivos = motivos.replace('Redução no tempo de contribuição ou na idade para pessoas com deficiência leve, moderada ou grave, avaliada por perícia biopsicossocial do INSS.', 'No BPC/LOAS, o INSS usa o Cadastro Único (CadÚnico) e muitas vezes calcula a renda familiar de forma errada, incluindo pessoas que não deveriam entrar na conta ou benefícios que a lei permite excluir.');

// 6. Como Funciona
let comoFunciona = extractComponent(aposentarCode, 'ComoFunciona') || '';
comoFunciona = comoFunciona.replace('ComoFunciona', 'ComoFuncionaNegado');
comoFunciona = comoFunciona.replace('Você conta a sua história de trabalho', 'Análise da Carta de Indeferimento');
comoFunciona = comoFunciona.replace('Onde trabalhou, por quanto tempo, se foi com carteira ou sem, se passou pelo campo, por conta própria ou em lugar perigoso. Não precisa saber o que isso significa juridicamente — só nos contar o que viveu. A gente faz a interpretação técnica.', 'Você nos envia a carta do INSS (ou o processo digital) e nós auditamos para descobrir exatamente onde o servidor ou o robô errou ao negar seu pedido.');
comoFunciona = comoFunciona.replace('Analisamos o seu histórico e calculamos as opções', 'Definição da Melhor Estratégia');
comoFunciona = comoFunciona.replace('Verificamos seus registros no INSS, identificamos o que pode estar faltando e calculamos o valor estimado do benefício em cada modalidade disponível para o seu perfil. Você recebe uma visão clara do que é possível.', 'Avaliamos se é mais rápido e seguro fazer um Recurso Administrativo na Junta de Recursos do INSS ou se devemos entrar imediatamente com uma Ação Judicial Federal.');
comoFunciona = comoFunciona.replace('Você recebe uma orientação clara sobre o que fazer', 'Entrada com o Processo');
comoFunciona = comoFunciona.replace('Qual é a melhor opção, quanto você pode esperar receber, se tem alguma pendência a resolver antes de dar entrada e qual é o prazo ideal. Tudo explicado sem enrolação e sem juridiquês.', 'Nossa equipe elabora as petições necessárias e protocola o processo. Nós construímos a fundamentação jurídica baseada nas decisões recentes dos tribunais a favor de casos como o seu.');
comoFunciona = comoFunciona.replace('Damos entrada e acompanhamos até o final', 'Acompanhamento e Recebimento');
comoFunciona = comoFunciona.replace('Cuidamos de toda a papelada e ficamos de olho no processo junto ao INSS. Se aparecer qualquer exigência ou problema no caminho, resolvemos. Você fica tranquilo até o benefício ser aprovado.', 'Monitoramos cada movimentação. Quando o juiz ou a junta derem o parecer favorável, o INSS será obrigado a implantar o benefício e pagar todos os atrasados que você tem direito.');

// 7. FAQ
let faq = extractComponent(aposentarCode, 'FAQAposentar') || '';
faq = faq.replace('FAQAposentar', 'FAQNegado');
faq = faq.replace('Posso me aposentar e continuar trabalhando?', 'Quanto tempo demora uma ação contra o INSS?');
faq = faq.replace('Sim, na maioria dos casos você pode receber a aposentadoria e continuar trabalhando normalmente', 'O tempo varia bastante conforme a região e a complexidade do caso. Processos judiciais previdenciários costumam levar de 8 meses a 2 anos. A vantagem é que, ao vencer, você recebe todos os atrasados acumulados neste período.');
faq = faq.replace('Trabalhei anos sem carteira assinada. Esse tempo pode contar?', 'Se eu fizer novo pedido no INSS, perco os atrasados?');
faq = faq.replace('Pode sim. Se conseguirmos comprovar esse vínculo com documentos (recibos, testemunhas, registros da época), podemos pedir o reconhecimento', 'Sim. Fazer um novo pedido administrativo zera a contagem e você perde o direito de receber os atrasados do pedido anterior. Por isso é crucial avaliar se vale a pena recorrer do primeiro pedido em vez de abrir um novo.');
faq = faq.replace('A reforma de 2019 me prejudicou?', 'O que acontece se eu perder o prazo de 30 dias para recurso?');
faq = faq.replace('A Reforma mudou muitas regras e idades mínimas, mas também criou as Regras de Transição', 'Se você perder o prazo do recurso administrativo (Junta de Recursos), a decisão do INSS se torna definitiva na via administrativa. Neste caso, a única solução será entrar com uma ação na Justiça Federal.');
faq = faq.replace('Quanto tempo o INSS demora para dar uma resposta?', 'Tenho que pagar para o advogado entrar com a ação?');
faq = faq.replace('Por lei, o INSS tem até 90 dias para analisar o pedido de aposentadoria', 'Nós trabalhamos no modelo de "êxito". Isso significa que nossos honorários são um percentual recebido apenas no final do processo, se você ganhar a causa. Você não precisa tirar dinheiro do bolso para começarmos.');
faq = faq.replace('E se o INSS negar depois de tudo isso?', 'A perícia judicial é igual a do INSS?');
faq = faq.replace('Nós entraremos com recursos ou até mesmo com uma ação judicial para garantir o seu direito', 'Não. A perícia judicial é feita por um médico perito nomeado pelo Juiz Federal, que é imparcial e independente do INSS. É muito comum reverter laudos injustos do INSS na esfera judicial.');
faq = faq.replace('Preciso ir pessoalmente a algum lugar?', 'Posso entrar com a ação sem advogado?');
faq = faq.replace('Não! Nosso atendimento é 100% digital', 'Nos Juizados Especiais Federais é permitido entrar sem advogado. No entanto, o INSS conta com procuradores altamente treinados. Lutar sozinho contra eles costuma resultar em derrota e perda dos atrasados.');

// 8. Contato
let contato = extractComponent(aposentarCode, 'ContatoAposentar') || '';
contato = contato.replace('ContatoAposentar', 'ContatoNegado');
contato = contato.replace('Análise do seu caso sem compromisso. Atendimento direto e em todo o Brasil.', 'Agende a análise da sua carta de indeferimento sem compromisso.');

const pageTemplate = `import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, ShieldAlert, CheckCircle2, AlertCircle, FileText, Calendar, ChevronDown, Plus, Minus, Mail, MapPin, Search, Clock, Target, Info, Users, Briefcase, FileSearch, ShieldCheck, Scale, Globe, FileSignature, CheckSquare, FastForward, HeadphonesIcon, CalendarCheck, Award, BookOpen, Calculator, LineChart } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/beneficio_negado_hero.jpg"; 
import andersonImg from "@/assets/anderson-litig.png";

export default function BeneficioNegadoV2() {
  return (
    <div className="font-sans text-[#2C2C2C] bg-white leading-relaxed overflow-x-hidden selection:bg-[#CFAE70] selection:text-[#091D39]">
      <WppFloat />
      <HeaderV2 />
      <main>
        <Breadcrumb />
        <HeroBeneficioNegado />
        <AlertaNegado />
        <VantagensNegado />
        <AutoridadeAdvogado />
        <TriagemNegado />
        <MotivosComuns />
        <CTAFinal />
        <ComoFuncionaNegado />
        <FAQNegado />
        <ContatoNegado />
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

fs.writeFileSync('client/src/pages/BeneficioNegadoV2.tsx', pageTemplate);
console.log('Done Building Beneficio Negado');
