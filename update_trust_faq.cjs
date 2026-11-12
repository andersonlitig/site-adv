const fs = require('fs');
let c = fs.readFileSync('client/src/pages/HomeV2.tsx', 'utf8');

const trustBlockCode = `function TrustBlockV2() {
  return (
    <section className="py-12 bg-[#091D39] border-b border-[#CFAE70]/30">
      <div className="max-w-[900px] mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#CFAE70]/10 text-[#CFAE70] mb-5">
          <ShieldCheck size={24} />
        </div>
        <h3 className="text-[24px] md:text-[28px] font-bold text-white mb-4 font-heading">
          Análise inicial gratuita e honorários no êxito
        </h3>
        <p className="text-[15px] md:text-[17px] text-white/80 leading-[1.65] font-light max-w-[700px] mx-auto">
          Sabemos que o momento de buscar um benefício é delicado. Por isso, trabalhamos com o modelo de honorários vinculados ao êxito (você só paga honorários contratuais se tivermos sucesso e conquistar o seu direito). A primeira análise do seu caso e do seu CNIS é feita sem compromisso.
        </p>
      </div>
    </section>
  );
}

`;

// Add TrustBlock component definition right before TriagemInterativaV2
c = c.replace('function TriagemInterativaV2()', trustBlockCode + 'function TriagemInterativaV2()');

// Render TrustBlock right after ComoFuncionaV2
c = c.replace('<ComoFuncionaV2 />\n        <TriagemInterativaV2 />', '<ComoFuncionaV2 />\n        <TrustBlockV2 />\n        <TriagemInterativaV2 />');

// Remove GuiasProfissoesV2 from render
c = c.replace(/<GuiasProfissoesV2 \/>\n\s*/g, '');

// Update FAQ
const oldFAQ = `{ q: "Meu benefício foi negado pelo INSS. Ainda posso recorrer?", a: "Sim – e é importante agir rápido. Existem dois caminhos: o recurso administrativo (dentro do próprio INSS) e a ação judicial. Na maioria dos casos, identificamos vícios no indeferimento que permitem reverter a decisão. Quanto antes você agir, melhores as chances e maior o período retroativo de benefício a receber." }`;
const newFAQ = `{ q: "Vocês garantem que vou conseguir o benefício?", a: "Nenhum advogado pode garantir resultado, e a OAB proíbe estritamente qualquer tipo de promessa. O que nós garantimos é uma atuação com excelência técnica, análise minuciosa do seu histórico (CNIS) e a busca implacável pelo melhor direito possível dentro da lei." },
      { q: "O atendimento digital é permitido pela OAB?", a: "Sim. Nossa atuação é 100% legal e ética, respaldada pelo Provimento 205/2021 da OAB. O ambiente digital permite prestarmos orientações de forma transparente e acessível para todo o Brasil, focando em quem busca ativamente pelos seus direitos." },
      { q: "Meu benefício foi negado pelo INSS. Ainda posso recorrer?", a: "Sim – e é importante agir rápido. Existem dois caminhos: o recurso administrativo (dentro do próprio INSS) e a ação judicial. Na maioria dos casos, identificamos vícios no indeferimento que abrem a possibilidade de reverter a decisão. Quanto antes você agir, maiores as chances de sucesso." }`;

c = c.replace(oldFAQ, newFAQ);

// Ensure ShieldCheck is imported
if (!c.includes('ShieldCheck')) {
  c = c.replace('ShieldAlert,', 'ShieldAlert, ShieldCheck,');
}

fs.writeFileSync('client/src/pages/HomeV2.tsx', c, 'utf8');
console.log('Added TrustBlock and updated FAQ');
