const fs = require('fs');
let c = fs.readFileSync('client/src/pages/HomeV2.tsx', 'utf8');

// 1. Update TriagemInterativaV2 step 3
c = c.replace(
  '<p className="text-[13px] text-white/50 uppercase tracking-[0.12em] font-bold mb-5">Passo 3 – Só mais um passo</p>',
  `<p className="text-[13px] text-white/50 uppercase tracking-[0.12em] font-bold mb-5">Passo 3 – Só mais um passo</p>
                
                <div className="bg-[#194025] border-l-4 border-[#25D366] p-5 mb-6">
                  <p className="text-[14px] md:text-[15px] text-white/90 leading-[1.6] font-light">
                    <span className="font-bold text-[#25D366]">Análise Preliminar:</span> Baseado nas suas respostas, existe a possibilidade real de você ter direitos não reconhecidos pelo INSS. Preencha seus contatos abaixo para o Dr. Anderson avaliar sua situação.
                  </p>
                </div>`
);

// Fallback in case the exact string match is slightly different (e.g. m-dash instead of en-dash)
c = c.replace(
  '<p className="text-[13px] text-white/50 uppercase tracking-[0.12em] font-bold mb-5">Passo 3 — Só mais um passo</p>',
  `<p className="text-[13px] text-white/50 uppercase tracking-[0.12em] font-bold mb-5">Passo 3 — Só mais um passo</p>
                
                <div className="bg-[#194025] border-l-4 border-[#25D366] p-5 mb-6">
                  <p className="text-[14px] md:text-[15px] text-white/90 leading-[1.6] font-light">
                    <span className="font-bold text-[#25D366]">Análise Preliminar:</span> Baseado nas suas respostas, existe a possibilidade real de você ter direitos não reconhecidos pelo INSS. Preencha seus contatos abaixo para o Dr. Anderson avaliar sua situação.
                  </p>
                </div>`
);


// 2. Update ContactV2
const contactRegex = /function ContactV2\(\) \{[\s\S]*?\}(?=\n\nfunction FooterV2)/;
const newContactV2 = `function ContactV2() {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({ nome: '', interesse: '', whatsapp: '', email: '' });

  const handleNext = () => {
    if (formStep === 1 && formData.nome && formData.interesse) {
      setFormStep(2);
    } else if (formStep === 2 && formData.whatsapp) {
      setFormStep(3); // Sucesso
    }
  };

  return (
    <section id="contato" className="py-[80px] md:py-[120px] bg-[#091D39] border-b border-white/10">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Contato</span>
        <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-white tracking-[-0.02em] leading-[1.15] font-heading mb-12">
          Dê o primeiro passo para<br className="hidden md:block"/>a proteção do seu direito
        </h2>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] border border-white/10 shadow-2xl items-stretch"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="p-8 md:p-[48px_44px] bg-white/5 relative overflow-hidden flex flex-col justify-center">
            <h2 className="text-[clamp(22px,2.5vw,28px)] font-bold text-white tracking-[-0.02em] mb-3 font-heading border-l-4 border-[#CFAE70] pl-4">Fale com o advogado</h2>
            <p className="text-[15px] text-white/60 leading-[1.65] font-light mb-10 pl-5">Análise do seu caso sem compromisso. Atendimento direto e em todo o Brasil.</p>
            
            <div className="space-y-6 pl-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Phone className="w-4 h-4 text-[#CFAE70]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-white/40 mb-1">Telefone / WhatsApp</span>
                  <strong className="text-[15px] font-bold text-white">+55 (27) 99999-9999</strong>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Mail className="w-4 h-4 text-[#CFAE70]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-white/40 mb-1">E-mail</span>
                  <strong className="text-[15px] font-bold text-white break-all">contato@andersonlitig.adv.br</strong>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin className="w-4 h-4 text-[#CFAE70]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#CFAE70] mb-1">Localização</span>
                  <strong className="text-[15px] font-bold text-white">Serra, na Grande Vitória - ES - Atendimento Nacional 100% Digital</strong>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8 md:p-[48px_44px] bg-white flex flex-col justify-center min-h-[420px]">
            {formStep === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <span className="text-[11px] font-bold tracking-[0.15em] text-[#CFAE70] mb-2 block uppercase">Passo 1 de 2</span>
                <h3 className="text-[22px] font-bold text-[#091D39] mb-6 font-heading">Vamos começar</h3>
                <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                  <div>
                    <label className="block text-[11px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">Seu Nome e Sobrenome</label>
                    <input type="text" value={formData.nome} onChange={e => setFormData({...formData, nome: e.target.value})} required className="w-full p-3.5 border border-[#E0E0DC] bg-white font-sans text-[15px] text-[#091D39] outline-none transition-all focus:border-[#CFAE70] placeholder:text-[#A0A09F] placeholder:font-light" placeholder="Como podemos chamar você?" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">O que você precisa?</label>
                    <select value={formData.interesse} onChange={e => setFormData({...formData, interesse: e.target.value})} required className="w-full p-3.5 border border-[#E0E0DC] bg-white font-sans text-[15px] text-[#091D39] outline-none transition-all focus:border-[#CFAE70]">
                      <option value="" disabled>Selecione uma opção</option>
                      <option value="aposentadoria">Dar entrada na Aposentadoria</option>
                      <option value="revisao">Revisar benefício atual</option>
                      <option value="bpc">BPC/LOAS</option>
                      <option value="auxilio_doenca">Auxílio-doença / Invalidez</option>
                      <option value="planejamento">Planejamento Previdenciário</option>
                      <option value="outro">Outro assunto</option>
                    </select>
                  </div>
                  <button type="submit" className="mt-2 bg-[#091D39] text-white text-[14px] font-bold tracking-[0.05em] px-6 py-4 flex items-center justify-center gap-3 hover:bg-[#15325c] transition-all w-full">
                    Avançar
                    <ArrowRight size={18} />
                  </button>
                </form>
              </motion.div>
            )}

            {formStep === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <span className="text-[11px] font-bold tracking-[0.15em] text-[#CFAE70] mb-2 block uppercase">Passo 2 de 2</span>
                <h3 className="text-[22px] font-bold text-[#091D39] mb-6 font-heading">Falta pouco, {formData.nome.split(' ')[0]}</h3>
                <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                  <div>
                    <label className="block text-[11px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">Seu melhor WhatsApp</label>
                    <input type="tel" value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})} required className="w-full p-3.5 border border-[#E0E0DC] bg-white font-sans text-[15px] text-[#091D39] outline-none transition-all focus:border-[#CFAE70] placeholder:text-[#A0A09F] placeholder:font-light" placeholder="(00) 00000-0000" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">E-mail (opcional)</label>
                    <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full p-3.5 border border-[#E0E0DC] bg-white font-sans text-[15px] text-[#091D39] outline-none transition-all focus:border-[#CFAE70] placeholder:text-[#A0A09F] placeholder:font-light" placeholder="seu@email.com" />
                  </div>
                  <div className="flex gap-3 mt-2">
                    <button type="button" onClick={() => setFormStep(1)} className="bg-transparent border-2 border-[#E0E0DC] text-[#767672] text-[14px] font-bold tracking-[0.05em] px-6 py-4 flex items-center justify-center hover:bg-[#F4F4F2] transition-all">
                      Voltar
                    </button>
                    <button type="submit" className="flex-1 bg-[#25D366] text-white text-[14px] font-bold tracking-[0.05em] px-6 py-4 flex items-center justify-center gap-3 hover:bg-[#1db957] transition-all" onClick={() => window.open(\`https://wa.me/5527999999999?text=\${encodeURIComponent('Olá! Meu nome é ' + formData.nome + '. Gostaria de falar sobre: ' + formData.interesse)}\`)}>
                      Solicitar Análise
                      <Check size={18} />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {formStep === 3 && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center text-center justify-center h-full">
                <div className="w-16 h-16 bg-[#CFAE70]/20 rounded-full flex items-center justify-center mb-6 text-[#CFAE70]">
                  <Check size={32} />
                </div>
                <h3 className="text-[24px] font-bold text-[#091D39] mb-4 font-heading">Tudo certo!</h3>
                <p className="text-[16px] text-[#767672] leading-[1.65] font-light mb-8 max-w-[300px] mx-auto">
                  Recebemos seu contato. O Dr. Anderson irá analisar sua solicitação e chamará no WhatsApp em breve.
                </p>
                <button type="button" onClick={() => { setFormStep(1); setFormData({ nome: '', interesse: '', whatsapp: '', email: '' }); }} className="text-[13px] font-bold text-[#091D39] underline decoration-[#CFAE70] underline-offset-4">
                  Enviar outra mensagem
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}`;

c = c.replace(contactRegex, newContactV2);

fs.writeFileSync('client/src/pages/HomeV2.tsx', c, 'utf8');
console.log('Fixed Triagem and Contact');
