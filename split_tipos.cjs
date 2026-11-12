const fs = require('fs');
let code = fs.readFileSync('client/src/pages/AposentarV2.tsx', 'utf-8');

// ─── 1. SPLIT TiposAposentadoria into 2 components ──────────────────────────

// Find and replace the whole TiposAposentadoria function
const tiposStart = code.indexOf('function TiposAposentadoria()');
const tiposEnd = code.indexOf('\nfunction ', tiposStart + 10);
const tiposBlock = code.substring(tiposStart, tiposEnd);

const newComponents = `function EntendaSeusDireitos() {
  return (
    <section className="py-[80px] md:py-[100px] bg-white border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] block mb-5">Entenda seus direitos</span>
            <h2 className="text-[clamp(30px,4vw,46px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">
              Qual é a melhor forma de se aposentar?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="space-y-5"
          >
            <p className="text-[17px] text-[#767672] leading-[1.75] font-light">
              Para o mesmo histórico de trabalho, diferentes formas de aposentadoria podem resultar em valores mensais muito diferentes. O INSS não faz essa comparação — ele concede a regra mais rápida, não a mais vantajosa.
            </p>
            <p className="text-[17px] text-[#767672] leading-[1.75] font-light">
              Analisamos todas as modalidades disponíveis para o seu perfil e calculamos qual garante o maior valor — antes de você dar entrada.
            </p>
            <button
              className="bg-[#091D39] text-white text-[13px] font-bold px-8 py-4 flex items-center gap-2 hover:bg-[#CFAE70] hover:text-[#091D39] transition-colors tracking-[0.15em] uppercase group"
              onClick={() => document.getElementById('triagem')?.scrollIntoView({behavior:'smooth'})}
            >
              Calcular meu melhor benefício <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TiposAposentadoria() {
  const tipos = [
    { icon: <Clock size={20} />, title: "Por Idade", desc: "Para quem chegou à idade mínima e contribuiu por pelo menos 15 anos. A opção mais simples e comum para trabalhadores urbanos e rurais.", detail: "65 anos (homem) · 62 anos (mulher)" },
    { icon: <Target size={20} />, title: "Por Tempo de Contribuição", desc: "Pelas Regras de Transição (Pedágio 50%, Pedágio 100%, Pontos ou Idade Mínima). Pode ser possível se aposentar antes dos 60 anos para quem começou cedo.", detail: "Mais vantajosa para quem começou cedo" },
    { icon: <Briefcase size={20} />, title: "Aposentadoria Especial", desc: "Para quem trabalhou exposto a agentes nocivos (ruído, calor, químicos). Permite aposentadoria mais cedo, mas exige documentação técnica rigorosa.", detail: "Precisa de PPP e LTCAT" },
    { icon: <Globe size={20} />, title: "Trabalhador Rural", desc: "Para quem viveu e trabalhou no campo. Possível sem contribuições formais, apenas com comprovação do trabalho em regime de economia familiar.", detail: "55 anos (mulher) · 60 anos (homem)" },
    { icon: <Users size={20} />, title: "Pessoa com Deficiência", desc: "Redução no tempo de contribuição ou na idade para pessoas com deficiência leve, moderada ou grave, avaliada por perícia biopsicossocial.", detail: "Avaliação médica necessária" },
    { icon: <MapPin size={20} />, title: "Trabalhei no Campo e na Cidade", desc: "É possível somar períodos rurais e urbanos. Isso pode garantir a aposentadoria para quem sozinho não atingiria os anos mínimos em nenhum dos dois.", detail: "Combina períodos urbanos e rurais" }
  ];

  return (
    <section id="tipos" className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div
          className="mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Tipos de aposentadoria</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">Qual se encaixa no seu caso?</h2>
          <p className="text-[16px] text-[#767672] mt-4 max-w-[600px] font-light">
            Cada pessoa tem uma situação diferente. Veja os tipos mais comuns — analisamos qual é o melhor para você.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC]">
          {tipos.map((t, i) => (
            <motion.div
              key={i}
              className="p-8 border-t-4 border-transparent flex flex-col transition-colors duration-300 bg-white hover:border-[#CFAE70] hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <div className="w-12 h-12 flex items-center justify-center mb-5 bg-[#091D39]/5 text-[#091D39]">
                {t.icon}
              </div>
              <h3 className="text-[16px] font-bold mb-3 leading-[1.4] text-[#091D39]">{t.title}</h3>
              <p className="text-[14px] leading-[1.65] font-light flex-1 text-[#767672]">{t.desc}</p>
              {t.detail && (
                <div className="mt-4 text-[12px] flex items-center gap-2 text-[#767672]">
                  <span className="w-1.5 h-1.5 bg-[#CFAE70] rounded-full shrink-0" />
                  {t.detail}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

`;

code = code.substring(0, tiposStart) + newComponents + code.substring(tiposEnd);

// ─── 2. UPDATE RENDER ORDER ──────────────────────────────────────────────────
// Find and replace the main render block
code = code.replace(
  `        <HeroAposentar />
        <AlertaAposentar />
        <TiposAposentadoria />
        <TriagemAposentadoriaV2 />
        <VantagensAdvogado />
        <AutoridadeAdvogado />
        <ComoFunciona />
        <CTAFinal />
        <FAQAposentar />
        <ContatoAposentar />`,
  `        <HeroAposentar />
        <AlertaAposentar />
        <EntendaSeusDireitos />
        <TiposAposentadoria />
        <TriagemAposentadoriaV2 />
        <VantagensAdvogado />
        <AutoridadeAdvogado />
        <ComoFunciona />
        <CTAFinal />
        <FAQAposentar />
        <ContatoAposentar />`
);

// ─── 3. FIX VANTAGENS to bg-white (it's now after Triagem blue, needs contrast) ─
// Vantagens should be bg-white (it already was bg-[#F4F4F2] but that's after blue, so white is fine)
// Actually let's recheck rhythm:
// Alerta=gray, EntendaSeusDireitos=white, Tipos=gray, Triagem=blue, Vantagens=?, Autoridade=?, ComoFunciona=?, CTA=blue, FAQ=?, Contato=?
// After blue (Triagem) → white, then gray, white, gray, blue, white, white
// VantagensAdvogado should be white
const vanStart = code.indexOf('function VantagensAdvogado()');
const vanEnd = code.indexOf('\nfunction ', vanStart + 10);
let vanBlock = code.substring(vanStart, vanEnd);
// Already set to bg-[#F4F4F2] in previous script, keep it - actually it's after blue so white would work
// Let's keep F4F4F2 (gray) since it creates white→gray→blue→gray rhythm before blue CTA
code = code.substring(0, vanStart) + vanBlock + code.substring(vanEnd);

fs.writeFileSync('client/src/pages/AposentarV2.tsx', code);
console.log('Split into EntendaSeusDireitos + TiposAposentadoria, render updated');
console.log('\nColor rhythm:');
console.log('Hero=blue | Alerta=gray | EntendaSeusDireitos=white | Tipos=gray | Triagem=blue | Vantagens=gray | Autoridade=white | ComoFunciona=gray | CTA=blue | FAQ=white | Contato=white');
