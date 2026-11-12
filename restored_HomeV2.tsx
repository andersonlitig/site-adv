        <ComoFuncionaV2 />
        <TriagemInterativaV2 />
        <ServicesV2 />
        <GuiasProfissoesV2 />
        <CTAWppV2 />
        <AboutV2 />
        <TestimonialsV2 />

function HeroV2() {
  return (
    <section className="relative bg-[#091D39] min-h-[80vh] pt-[120px] pb-[80px] md:pt-[160px] md:pb-[120px] border-b-4 border-[#CFAE70] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#091D39]/82 z-10" />
            Direito Previdenci�rio
          </span>
          <h1 className="text-[clamp(36px,5vw,64px)] font-bold leading-[1.05] text-white tracking-[-0.02em] mb-6 font-heading">
            Advogado Previdenci�rio<br/>
            <span className="text-[#CFAE70]">Especialista em INSS.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-[1.6] mb-10 max-w-[580px] font-light">
            Atendimento 100% digital para todo o Brasil. Lutamos pelo seu direito contra o INSS com agilidade e transpar�ncia, para que voc� conquiste seu benef�cio sem burocracia e sem dor de cabe�a.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button 
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Como funciona</span>
          <div className="flex flex-col gap-4 mt-4">
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">
              A conquista do seu direito,<br className="hidden md:block" /> sem sair de casa e sem estresse.
            </h2>
            <p className="text-[16px] text-[#767672] max-w-[600px] font-light leading-[1.65]">
              Simplificamos toda a burocracia do INSS. Ns cuidamos do trabalho pesado com excel�ncia jur�dica, enquanto voc� foca na sua tranquilidade e da sua fam�lia.
            </p>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-2">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                className="flex gap-6 lg:gap-8 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full border border-[#CFAE70]/40 flex items-center justify-center bg-white group-hover:bg-[#CFAE70] group-hover:border-[#CFAE70] transition-colors duration-300 shadow-sm">
                    <span className="text-[16px] font-bold text-[#091D39] font-heading group-hover:text-white transition-colors duration-300">{s.num}</span>
                  </div>
                  {i !== steps.length - 1 && (
                    <div className="w-[1px] h-full min-h-[40px] bg-gradient-to-b from-[#CFAE70]/40 to-transparent my-2" />
                  )}
                </div>
                <div className="pb-10 pt-1">
                  <h4 className="text-[18px] font-bold text-[#091D39] mb-3 leading-[1.3]">{s.title}</h4>
                  <p className="text-[15px] text-[#767672] leading-[1.65] font-light">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="hidden lg:block relative h-full min-h-[600px] w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 overflow-hidden shadow-2xl border border-[#E0E0DC]">
              <img 
                src="/elderly_couple2.png" 
                alt="Casal de idosos" 
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-[20s] ease-linear"
              />
            </div>
            
            {/* Box de destaque flutuante */}
            <div className="absolute bottom-12 -left-12 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] max-w-[320px] border border-[#E0E0DC]">
              <div className="w-10 h-[2px] bg-[#CFAE70] mb-5" />
              <p className="text-[15px] text-[#091D39] font-medium leading-[1.7] italic">
                "Transpar�ncia em cada etapa. Voc� informado de cada movimento do seu processo sem precisar perguntar."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  const [whatsapp, setWhatsapp] = useState('');

  const problemas = [
    { id: 'planejamento', label: 'Planejar minha aposentadoria', sub: 'Quero saber o melhor momento e valor', icon: <Target size={20} />, link: '/planejamento' },
    { id: 'aposentar', label: 'Dar entrada na aposentadoria', sub: 'Tenho contribui��es e quero me aposentar', icon: <CalendarCheck size={20} />, link: '/aposentadorias' },
    { id: 'negado', label: 'Meu benef�cio foi negado', sub: 'O INSS recusou meu pedido', icon: <ShieldAlert size={20} />, link: '/negado' },
    { id: 'revisao', label: 'Revisar o valor do meu benef�cio', sub: 'Acho que estou recebendo menos do que deveria', icon: <RefreshCw size={20} />, link: '/revisao-de-aposentadoria' },
    { id: 'desconto', label: 'Desconto n�o autorizado no INSS', sub: 'Cobran�a indevida no meu benef�cio', icon: <ReceiptText size={20} />, link: '/#contato' },
    { id: 'incapacidade', label: 'Afastamento por problema de saQde', sub: 'Aux�lio-doen�a ou aposentadoria por invalidez', icon: <Stethoscope size={20} />, link: '#servicos' },
  ];

  const getStatusOptions = (problemaId: string) => {
    switch(problemaId) {
      case 'planejamento':
        return [
          { id: 'ainda_trabalhando', label: 'Ainda estou trabalhando e contribuindo', sub: 'Quero saber quando e com quanto me aposento' },
          { id: 'parei_contribuir', label: 'Parei de contribuir h� um tempo', sub: 'Quero saber se j� tenho direito ou o que falta' },
          { id: 'duvida_regra', label: 'Tenho dQvida sobre qual regra � melhor', sub: 'Atingi os requisitos mas n�o sei qual pedir' },
        ];
      case 'aposentar':
        return [
          { id: 'nunca', label: 'Nunca dei entrada em nada', sub: 'Ainda n�o comecei o processo' },
          { id: 'aguardando', label: 'Aguardando resposta do INSS', sub: 'J� protocolei e est� em an�lise' },
          { id: 'negado_antes', label: 'J� tentei antes e foi negado', sub: 'Quero tentar novamente da forma certa' },
        ];
      case 'negado':
        return [
          { id: 'recentemente', label: 'Foi negado nos Qltimos 30 dias', sub: 'Ainda est� no prazo de recurso' },
          { id: 'mais_tempo', label: 'Faz mais de 30 dias que foi negado', sub: 'Preciso saber se posso entrar com a��o' },
          { id: 'nao_entendi', label: 'N�o entendi o motivo da negativa', sub: 'O INSS alegou falta de tempo ou documento' },
        ];
      case 'revisao':
        return [
          { id: 'pouco_tempo', label: 'Me aposentei h� menos de 10 anos', sub: 'Ainda no prazo para pedir revis�o' },
          { id: 'muito_tempo', label: 'Me aposentei h� mais de 10 anos', sub: 'Recebo h� muito tempo' },
          { id: 'erro_calculo', label: 'Acho que n�o contaram algum per�odo', sub: 'Tempo rural, insalubridade ou sem carteira' },
        ];
      case 'desconto':
        return [
          { id: 'emprestimo', label: 'Empr�stimo que n�o solicitei', sub: 'Est�o descontando parcelas indevidas' },
          { id: 'sindicato', label: 'Mensalidade de associa��o/sindicato', sub: 'Desconto de entidade que n�o conhe�o' },
          { id: 'nao_sei', label: 'N�o sei a origem do desconto', sub: 'S vi que o valor diminuiu no extrato' },
        ];
      case 'incapacidade':
        return [
          { id: 'doente_agora', label: 'Estou doente/afastado agora', sub: 'Preciso pedir o aux�lio-doen�a' },
          { id: 'pericia_negada', label: 'Fiz a per�cia e foi negada', sub: 'O perito disse que estou apto' },
          { id: 'agravou', label: 'Minha situa��o agravou muito', sub: 'Acho que tenho direito a aposentadoria por invalidez' },
        ];
      default:
        return [
          { id: 'nunca', label: 'Nunca dei entrada em nada', sub: 'Ainda n�o comecei o processo' },
          { id: 'aguardando', label: 'Aguardando resposta do INSS', sub: 'J� protocolei o pedido' },
          { id: 'negativa', label: 'Recebi uma negativa recentemente', sub: 'O INSS indeferiu meu pedido' },
        ];
    }
  };

  const statusOptions = getStatusOptions(problema);

  const problemaObj = problemas.find(p => p.id === problema);
  const statusObj = statusOptions.find(s => s.id === status);

function ServicesV2() {
  const services = [
    { icon: <Award size={20} />, title: "Aposentadorias", desc: "Por idade, tempo de contribui��o, especial, rural e por defici�ncia. Analisamos o seu CNIS e identificamos a modalidade mais vantajosa para o seu caso.", link: "/aposentadorias" },
    { icon: <Calculator size={20} />, title: "Planejamento Previdenci�rio", desc: "Quer saber o melhor momento para se aposentar? Fazemos um estudo t�cnico individualizado do seu CNIS para garantir a melhor aposentadoria poss�vel.", link: "/planejamento" },
    { icon: <ShieldAlert size={20} />, title: "Benef�cios Negados", desc: "O INSS negou seu pedido? Atuamos com firmeza para reverter negativas injustas de Aposentadorias, Aux�lios, BPC e Sal�rio-Maternidade na Justi�a.", link: "/beneficio-negado" },
    { icon: <Stethoscope size={20} />, title: "Aux�lio-Doen�a e Invalidez", desc: "O INSS cortou seu benef�cio ou o perito negou? Entramos com recurso para garantir que a sua incapacidade seja reconhecida por um m�dico especialista." },
    { icon: <RefreshCw size={20} />, title: "Revis�o de Benef�cio", desc: "J� � aposentado e acha que o valor est� baixo demais? Analisamos o c�lculo do seu benef�cio e verificamos se h� algo a corrigir.", link: "/revisao-de-aposentadoria" },
    { icon: <HeartHandshake size={20} />, title: "BPC / LOAS", desc: "Para idosos acima de 65 anos ou pessoas com defici�ncia. Voc� pode ter direito a 1 sal�rio m�nimo por m�s, mesmo se nunca pagou o INSS." },
    { icon: <HandHeart size={20} />, title: "Pens�o por Morte", desc: "Assessoria completa para os dependentes do segurado falecido garantirem o benef�cio a que t�m direito junto ao INSS, com agilidade e aten��o." },
    { icon: <Baby size={20} />, title: "Sal�rio-Maternidade", desc: "Empregadas, aut$nomas, MEIs e trabalhadoras rurais t�m direito ao sal�rio-maternidade pelo INSS. Muitas perdem esse benef�cio por falta de orienta��o.", link: "/salario-maternidade" },
    { icon: <Bandage size={20} />, title: "Aux�lio-Acidente", desc: "Sofreu um acidente ou doen�a ocupacional que reduziu sua capacidade de trabalho? Voc� pode receber o aux�lio-acidente enquanto ainda trabalha." }
  ];

  return (
  );
}

function GuiasProfissoesV2() {
  const guias = [
    { title: "Aposentadoria de Professor", desc: "Regras de redu��o de tempo e idade exclusivas para o magist�rio. O que mudou aps a Reforma?", link: "/aposentadorias" },
    { title: "Aposentadoria de MEI e Aut$nomo", desc: "Como n�o perder dinheiro pagando carn�s com cdigo errado. Guia pr�tico para n�o ficar sem benef�cio.", link: "/planejamento" },
    { title: "Aposentadoria de Enfermeiros e M�dicos", desc: "Convers�o de tempo especial em comum e as novas regras para quem trabalha com insalubridade.", link: "/aposentadorias" },
    { title: "Aposentadoria Rural", desc: "Como comprovar atividade no campo sem carteira assinada para garantir aposentadoria precoce.", link: "/aposentadorias" }
  ];

  return (
    <section className="py-[60px] md:py-[80px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Guias R�pidos</span>
          <h2 className="text-[clamp(24px,3vw,32px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">Casos espec�ficos: Como fica o seu INSS?</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC]">
          {guias.map((g, i) => (
            <Link href={g.link} key={i}>
              <motion.a 
                className="bg-white p-6 border-t-4 border-transparent hover:border-[#CFAE70] hover:bg-[#091D39] transition-colors duration-500 cursor-pointer group flex flex-col h-full no-underline"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-[15px] font-bold text-[#091D39] mb-3 leading-[1.4] group-hover:text-white">{g.title}</h3>
                <p className="text-[13px] text-[#767672] leading-[1.6] flex-1 font-light group-hover:text-white/70">{g.desc}</p>
                <div className="inline-flex items-center gap-2 mt-4 text-[10px] uppercase tracking-widest font-bold text-[#CFAE70]">
                  Ver regras <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessV2() {
  const steps = [
    { num: "01", title: "Conte seu caso", desc: "Fale pelo WhatsApp com uma breve descri��o da sua situa��o. Sem formul�rios complexos, sem burocracia ��� s uma conversa." },
          <div className="min-h-[400px] lg:min-h-[550px] overflow-hidden bg-[#091D39] relative">
            <img 
              src={andersonPhoto}
              alt="Anderson Litig ��� Advogado Previdenci�rio" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
    { name: "Ana R.", city: "S�o Paulo, SP", text: "Atendimento 100% pelo WhatsApp e videochamada. Moro em S�o Paulo e n�o precisei me deslocar. A an�lise do meu CNIS mostrou que eu tinha direito a uma aposentadoria especial que nem sabia que existia.", stars: 5 },
    { name: "Carlos M.", city: "Guarapari, ES", text: "O INSS negou meu aux�lio-doen�a alegando que eu n�o cumpria car�ncia. O Dr. Anderson identificou os per�odos que eles tinham desconsiderado e a decis�o foi revertida. Muito obrigado.", stars: 5 },
    { name: "Ros�ngela F.", city: "Vila Velha, ES", text: "Minha aposentadoria rural foi negada duas vezes. Com o aux�lio do Dr. Anderson juntamos os documentos certos e foi aprovada judicialmente. Recomendo de olhos fechados.", stars: 5 },
  ];

  const pages = testimonials.length; // 5 pages
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused]);

  const t = testimonials[current];

  return (
    <section className="py-[80px] md:py-[100px] bg-[#091D39] border-b border-white/10 relative overflow-hidden">
          </div>
        </div>

        {/* Cards ��� 1 por slide */}
        <div
          className="overflow-hidden border border-white/10 max-w-[900px] mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="bg-white/10"
            >
              <div className="bg-[#0B2347] p-8 md:p-12 flex flex-col gap-6 min-h-[320px]">
                <StarRating count={t.stars} />
                <p className="text-[18px] md:text-[20px] text-white/80 leading-[1.8] font-light italic flex-1">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="w-12 h-12 bg-[#CFAE70]/20 border border-[#CFAE70]/30 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-[15px] font-bold text-[#CFAE70]">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <span className="block text-[15px] font-bold text-white">{t.name}</span>
                    <span className="block text-[13px] text-white/40 font-light">{t.city}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

  return (
    <section id="faq" className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">DQvidas comuns</h2>
        </motion.div>
        
        <div className="flex flex-col gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC]">
          {faqs.map((f, i) => (
            <div 
              key={i} 
              className={`bg-white transition-all duration-300`}
            >
              <div 
                className={`p-6 cursor-pointer flex items-center justify-between gap-4 border-l-4 ${openIdx === i ? 'border-[#CFAE70] bg-[#F4F4F2]' : 'border-transparent hover:bg-[#F4F4F2]'}`}
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className={`text-[15px] font-bold transition-colors text-[#091D39]`}>{f.q}</span>
                <span className={`w-8 h-8 flex items-center justify-center shrink-0 transition-colors text-[#CFAE70] transform ${openIdx === i ? 'rotate-45' : 'rotate-0'}`}>
                  <Plus size={20} />
                </span>
              </div>
              <AnimatePresence>
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-[#F4F4F2]"
                  >
                    <div className="px-6 pb-6 pt-0 text-[14px] text-[#767672] leading-[1.7] font-light border-l-4 border-[#E0E0DC] ml-[-4px]">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

function ContactV2() {
  return (
    <section id="contato" className="py-[80px] md:py-[120px] bg-[#091D39] border-b border-white/10">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Contato</span>
        <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-white tracking-[-0.02em] leading-[1.15] font-heading mb-12">
          D� o primeiro passo para<br className="hidden md:block"/>a prote��o do seu direito
        </h2>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] border border-white/10 shadow-2xl items-stretch"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="p-8 md:p-[48px_44px] bg-white/5 relative overflow-hidden flex flex-col justify-center">
            <h2 className="text-[clamp(22px,2.5vw,28px)] font-bold text-white tracking-[-0.02em] mb-3 font-heading border-l-4 border-[#CFAE70] pl-4">Fale com o advogado</h2>
            <p className="text-[15px] text-white/60 leading-[1.65] font-light mb-10 pl-5">An�lise do seu caso sem compromisso. Atendimento direto e em todo o Brasil.</p>
            
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
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#CFAE70] mb-1">Localiza��o</span>
                  <strong className="text-[15px] font-bold text-white">Serra, na Grande Vitria - ES - Atendimento Nacional 100% Digital</strong>
                </div>
              </div>
            </div>
            
            <button 
              className="mt-10 bg-[#25D366] text-white text-[14px] font-bold tracking-[0.05em] px-6 py-3.5 flex items-center justify-center gap-3 hover:bg-[#1db957] transition-all w-fit ml-5"
              onClick={() => window.open('https://wa.me/5527999999999?text=Ol%C3%A1%2C+preciso+de+ajuda+com+o+meu+caso','_blank')}
            >
              <Phone size={18} />
              Falar pelo WhatsApp agora
            </button>
          </div>
          
          <div className="p-8 md:p-[48px_44px] bg-white flex flex-col justify-center">
            <h3 className="text-[20px] font-bold text-[#091D39] mb-6 font-heading">Envie uma mensagem</h3>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">Nome e Sobrenome</label>
                <input type="text" className="w-full p-3 border border-[#E0E0DC] bg-white font-sans text-[14px] text-[#091D39] outline-none transition-all focus:border-[#091D39]" placeholder="Como podemos chamar voc�?" />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">Seu melhor WhatsApp</label>
                <input type="tel" className="w-full p-3 border border-[#E0E0DC] bg-white font-sans text-[14px] text-[#091D39] outline-none transition-all focus:border-[#091D39]" placeholder="(00) 00000-0000" />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">Resuma sua dQvida</label>
                <textarea className="w-full min-h-[90px] resize-y p-3 border border-[#E0E0DC] bg-white font-sans text-[14px] text-[#091D39] outline-none transition-all focus:border-[#091D39]" placeholder="Ex: Quero saber se j� tenho tempo suficiente para me aposentar..." />
              </div>
            <button 
              type="submit" 
              className="w-full bg-[#091D39] text-white font-sans text-[12px] font-bold tracking-[0.12em] uppercase p-4 mt-2 hover:bg-[#0d2548] transition-all cursor-pointer border-none flex items-center justify-center gap-3"
            >
              Solicitar Contato Inicial
            </button>
              <div className="text-[11px] text-[#767672] mt-2 leading-[1.5] font-light">Em conformidade com o Provimento n,Q 205/2021 do CFOAB. As informa��es deste site t�m car�ter informativo e n�o constituem consultoria jur�dica.</div>
            </form>
          </div>
        </motion.div>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[12px] font-bold tracking-[0.15em] uppercase text-white mb-6">�reas</h4>
            <a href="/aposentadorias" className="text-[14px] font-light text-white/60 mb-3 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Aposentadorias</a>
            <a href="/planejamento" className="text-[14px] font-light text-white/60 mb-3 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Planejamento Previdenci�rio</a>
            <a href="/revisao-de-aposentadoria" className="text-[14px] font-light text-white/60 mb-3 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Revis�es</a>
            <a href="/salario-maternidade" className="text-[14px] font-light text-white/60 mb-3 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Sal�rio-Maternidade</a>
            <a href="/beneficio-negado" className="text-[14px] font-light text-white/60 mb-3 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Aux�lio-doen�a</a>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[12px] font-bold tracking-[0.15em] uppercase text-white mb-6">Contato</h4>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-[#CFAE70] shrink-0 mt-0.5" />
              <span className="text-[14px] font-light text-white/80 leading-relaxed">Atendimento Nacional 100% Digital<br/>para todos os Estados</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
