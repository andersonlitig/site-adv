import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Stethoscope, 
  ShieldCheck, 
  Clock, 
  HeartPulse, 
  Activity, 
  Microscope,
  Brain,
  Scale,
  MessageCircle,
  AlertCircle,
  Syringe,
  Home as HomeIcon
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const serviceDetails = {
  supplementary: [
    {
      title: "Oncologia de Precisão",
      description: "Reversão de negativas para quimioterapia oral, imunoterapia e exames genéticos complexos.",
      icon: <Microscope size={24} />,
      details: "Garantia de acesso a quimioterapias orais e intravenosas, imunoterapia e radioterapia (IGRT/IMRT). Combate à negativa de exames genéticos e de biópsia líquida."
    },
    {
      title: "TEA e Terapias Multidisciplinares",
      description: "Cobertura integral para terapias ABA, Denver e Bobath sem limitação de sessões.",
      icon: <Brain size={24} />,
      details: "Derrubada de limites de sessões de fonoaudiologia, terapia ocupacional e psicologia para pacientes com Transtorno do Espectro Autista."
    },
    {
      title: "Cirurgias e Próteses",
      description: "Acesso a cirurgias robóticas, bariátricas e fornecimento de OPME (próteses e stents).",
      icon: <Activity size={24} />,
      details: "Liberação de procedimentos de plástica reparadora pós-gastroplastia e acesso a tecnologias minimamente invasivas negadas por 'fora do rol'."
    },
    {
      title: "Home Care",
      description: "Implementação de internação domiciliar com suporte de enfermagem e insumos.",
      icon: <HomeIcon size={24} />,
      details: "Suporte de enfermagem 24h, fisioterapia, fonoaudiologia, oxigenioterapia e dieta enteral no conforto do lar."
    },
    {
      title: "Saúde Mental",
      description: "Internação psiquiátrica sem teto de dias e sem coparticipação abusiva.",
      icon: <HeartPulse size={24} />,
      details: "Garantia de tratamento para dependência química e transtornos mentais graves com segurança jurídica."
    },
    {
      title: "Reajustes e Equilíbrio",
      description: "Anulação de aumentos abusivos por faixa etária (59 anos) e manutenção do plano.",
      icon: <Scale size={24} />,
      details: "Manutenção do plano para aposentados e demitidos, além da revisão de sinistralidade injustificada."
    }
  ],
  public: [
    {
      title: "Medicamentos de Alto Custo",
      description: "Obtenção de fármacos não incorporados pela RENAME (Tema 106 STJ).",
      icon: <Syringe size={24} />,
      details: "Tratamento para doenças raras e fármacos de última geração com evidência científica comprovada."
    },
    {
      title: "Vagas em UTI e Urgência",
      description: "Medidas para transferência imediata e custeio de rede privada na falta de leitos públicos.",
      icon: <AlertCircle size={24} />,
      details: "Intervenção judicial para garantir leitos especializados e atendimento imediato em casos de risco de vida."
    },
    {
      title: "Cirurgias e Filas do SUS",
      description: "Agilização de cirurgias eletivas represadas que agravam o quadro clínico.",
      icon: <Clock size={24} />,
      details: "Combate à espera desproporcional em cardiologia, ortopedia e outras especialidades críticas."
    }
  ]
};

const faqs = [
  {
    q: "Preciso esperar o plano de saúde responder por escrito?",
    a: "Sim, a negativa formal é a prova principal, mas na ausência dela, o decurso do prazo legal já autoriza a medida judicial."
  },
  {
    q: "Posso perder o plano de saúde se entrar com processo?",
    a: "Não. A lei proíbe qualquer retaliação ou cancelamento unilateral motivado pelo exercício do direito de ação do consumidor."
  },
  {
    q: "O escritório atende outros estados?",
    a: "Sim, através do processo eletrônico (PJe), atuamos em todo o Brasil com a mesma celeridade."
  }
];

export default function HealthLaw() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center bg-[#091D39]">
          <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#091D39] via-transparent to-[#091D39] z-10" />
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" 
              alt="Direito à Saúde" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container mx-auto px-4 md:px-12 relative z-20 pt-32 pb-20">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#CFAE70]/10 border border-[#CFAE70]/20 text-[#CFAE70] text-[10px] font-bold uppercase tracking-widest mb-6">
                  <HeartPulse size={12} /> Direito à Saúde
                </div>
                <h1 className="text-4xl md:text-7xl font-bold text-white font-heading uppercase tracking-tighter mb-8 leading-[0.9]">
                  Advocacia Especializada em <span className="text-[#CFAE70]">Direito à Saúde</span> e Defesa do Paciente
                </h1>
                <p className="text-xl text-gray-300 font-light mb-10 max-w-2xl leading-relaxed">
                  Defesa técnica e humanizada para garantir o acesso integral à saúde, seja contra operadoras privadas ou contra o Poder Público (SUS). Fundamentação jurídica sólida em busca da dignidade da pessoa humana.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a 
                    href="#contact" 
                    className="bg-[#CFAE70] text-[#091D39] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-all text-center"
                  >
                    Agendar Consulta Especializada
                  </a>
                  <div className="flex items-center gap-4 text-white/60">
                    <div className="w-12 h-[1px] bg-[#CFAE70]/50" />
                    <span className="text-[10px] uppercase tracking-widest">Foco em Liminares de Urgência</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Briefing Bar */}
        <div className="bg-[#E8E8E8] border-y border-gray-200">
          <div className="container mx-auto px-4 md:px-12 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4 border-l-2 border-[#CFAE70] pl-6">
                <ShieldCheck className="text-[#091D39]" size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#091D39]">Especialista em Direito Médico</span>
              </div>
              <div className="flex items-center gap-4 border-l-2 border-[#CFAE70] pl-6">
                <Clock className="text-[#091D39]" size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#091D39]">Foco em Liminares de Urgência</span>
              </div>
              <div className="flex items-center gap-4 border-l-2 border-[#CFAE70] pl-6">
                <Stethoscope className="text-[#091D39]" size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#091D39]">Atendimento Nacional Digital</span>
              </div>
            </div>
          </div>
        </div>

        {/* Manifesto Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-12 gap-16 items-center">
                <div className="md:col-span-4">
                  <h2 className="text-[#091D39] text-3xl font-bold font-heading uppercase tracking-tighter mb-4 border-l-4 border-[#CFAE70] pl-6">
                    Manifesto Institucional
                  </h2>
                  <p className="text-[#CFAE70] font-bold text-xs uppercase tracking-widest">A Primazia do Direito à Vida</p>
                </div>
                <div className="md:col-span-8 bg-[#F8F9FA] p-12 border-l-8 border-[#091D39]">
                  <p className="text-xl md:text-2xl text-[#091D39] font-light leading-relaxed italic">
                    "No ordenamento jurídico brasileiro, a saúde não é uma mercadoria, mas um direito fundamental indisponível. Seja no âmbito do Direito Suplementar (Planos de Saúde) ou no Direito Público (SUS), nosso compromisso é garantir que a letra da lei se transforme em cuidado efetivo ao paciente. Onde a burocracia cria barreiras, a nossa técnica jurídica constrói pontes para o tratamento adequado."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem I: Private Insurance */}
        <section className="py-24 bg-[#091D39] text-white">
          <div className="container mx-auto px-4 md:px-12">
            <div className="max-w-4xl mb-16">
              <h2 className="text-4xl font-bold font-heading uppercase tracking-tighter mb-6 text-[#CFAE70]">
                Ecossistema I: Planos de Saúde (Direito Suplementar)
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                A relação entre o segurado e o plano de saúde é regida pela Lei nº 9.656/98 e pelo Código de Defesa do Consumidor. Combatemos as negativas fundamentadas no \"Rol da ANS\", utilizando o entendimento de que a lista é apenas referencial quando há prescrição médica fundamentada e evidência científica.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-1px bg-white/10 border border-white/10">
              {serviceDetails.supplementary.map((item, index) => (
                <div key={index} className="bg-[#091D39] p-10 hover:bg-white group transition-all duration-500">
                  <div className="text-[#CFAE70] mb-6 group-hover:text-[#091D39] transition-colors">{item.icon}</div>
                  <h3 className="text-xl font-bold uppercase tracking-tighter mb-4 group-hover:text-[#091D39] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-600 transition-colors italic">
                    {item.description}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed group-hover:text-[#091D39] transition-colors">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem II: Public Health */}
        <section className="py-24 bg-[#E8E8E8]">
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid lg:grid-cols-2 gap-24 items-start">
              <div>
                <h2 className="text-[#091D39] text-4xl font-bold font-heading uppercase tracking-tighter mb-8 border-l-4 border-[#CFAE70] pl-6">
                  Ecossistema II: Sistema Único de Saúde (SUS)
                </h2>
                <div className="bg-white p-10 border-t-8 border-[#091D39] mb-12">
                  <p className="text-[#091D39] text-lg leading-relaxed font-light mb-6">
                    Conforme o Art. 196 da Constituição Federal, o Estado tem o dever de prover as condições indispensáveis ao pleno exercício da saúde. Atuamos para compelir o Poder Público a fornecer o que a rede pública falha em entregar.
                  </p>
                  <p className="text-gray-500 text-sm">
                    A responsabilidade é solidária entre União, Estados e Municípios, permitindo ações locais coordenadas para obtenção de resultados rápidos.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {serviceDetails.public.map((item, index) => (
                    <div key={index} className="flex gap-6 p-6 bg-white border border-gray-200">
                      <div className="text-[#CFAE70] shrink-0">{item.icon}</div>
                      <div>
                        <h4 className="text-[#091D39] font-bold uppercase tracking-tighter mb-2">{item.title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="sticky top-32">
                <div className="bg-[#091D39] p-12 text-white">
                  <h3 className="text-2xl font-bold uppercase tracking-tighter mb-8 text-[#CFAE70] flex items-center gap-3">
                    <Activity size={24} /> A Força da Medida Liminar
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-10">
                    Em Direito à Saúde, o tempo é o recurso mais valioso. Por isso, nossa atuação é focada no pedido de Tutela de Urgência (Liminar).
                  </p>
                  
                  <div className="space-y-8">
                    <div className="border-l-2 border-[#CFAE70] pl-6">
                      <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#CFAE70] font-bold mb-2">O que é</h4>
                      <p className="text-sm">Uma decisão proferida pelo juiz nos primeiros dias do processo para garantir o início imediato do tratamento.</p>
                    </div>
                    <div className="border-l-2 border-[#CFAE70] pl-6">
                      <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#CFAE70] font-bold mb-2">Requisitos</h4>
                      <p className="text-sm">Comprovação da probabilidade do direito (prescrição médica) e o perigo de dano (risco à saúde).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Anderson Litig */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-[#091D39] text-4xl font-bold font-heading uppercase tracking-tighter mb-4">
                Diferenciais Anderson Litig
              </h2>
              <div className="w-24 h-1 bg-[#CFAE70] mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="p-10 border border-gray-100 bg-[#F8F9FA] relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#CFAE70]/5 rounded-bl-full transition-all group-hover:scale-150" />
                <h3 className="text-[#091D39] font-bold uppercase tracking-tighter mb-4 relative z-10">Conhecimento Multidisciplinar</h3>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">
                  Entendemos a linguagem médica para fundamentar melhor as petições jurídicas, unindo técnica legal à evidência científica.
                </p>
              </div>
              <div className="p-10 border border-gray-100 bg-[#F8F9FA] relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#CFAE70]/5 rounded-bl-full transition-all group-hover:scale-150" />
                <h3 className="text-[#091D39] font-bold uppercase tracking-tighter mb-4 relative z-10">Atuação em Comissões OAB</h3>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">
                  Membro ativo de comissões de relevância, mantendo-se na vanguarda das decisões dos Tribunais Superiores (STJ e STF).
                </p>
              </div>
              <div className="p-10 border border-gray-100 bg-[#F8F9FA] relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#CFAE70]/5 rounded-bl-full transition-all group-hover:scale-150" />
                <h3 className="text-[#091D39] font-bold uppercase tracking-tighter mb-4 relative z-10">Humanização do Atendimento</h3>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">
                  O paciente não é um número. Oferecemos um canal direto para tranquilizar a família durante o litígio jurídico.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Direito Explicado Block */}
        <section className="py-24 bg-[#091D39]">
          <div className="container mx-auto px-4 md:px-12">
            <div className="bg-white p-12 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#CFAE70]" />
              <div className="relative z-10 grid lg:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-[#091D39] text-3xl font-bold font-heading uppercase tracking-tighter mb-8">
                    Direito Explicado
                  </h2>
                  <div className="space-y-12">
                    <div>
                      <h4 className="text-[#CFAE70] font-bold text-xs uppercase tracking-widest mb-4">A Mitigação do Rol da ANS (Lei 14.454/22)</h4>
                      <p className="text-gray-600 text-lg leading-relaxed italic">
                        "É fundamental que o paciente saiba: o Rol da ANS não é mais taxativo. Desde 2022, se o tratamento possui eficácia comprovada ou recomendações de órgãos renomados, a operadora é obrigada a cobrir, mesmo que o procedimento não conste na lista oficial."
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[#CFAE70] font-bold text-xs uppercase tracking-widest mb-4">O Dever do Estado no ES</h4>
                      <p className="text-gray-600 text-lg leading-relaxed italic">
                        "Atuamos localmente para garantir que o Município e o Estado cumpram seu dever constitucional. Se o medicamento tem registro na ANVISA e a família não possui recursos, o Poder Público deve fornecer."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#F8F9FA] p-10 border border-gray-100 flex flex-col justify-center">
                  <h3 className="text-[#091D39] font-bold uppercase tracking-tighter mb-6">Filtro de Objeções (FAQ)</h3>
                  <div className="space-y-6">
                    {faqs.map((item, i) => (
                      <div key={i} className="border-b border-gray-200 pb-4">
                        <h5 className="text-[#091D39] font-bold text-xs mb-2 uppercase tracking-tight">{item.q}</h5>
                        <p className="text-gray-500 text-xs leading-relaxed">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-white text-center">
          <div className="container mx-auto px-4 md:px-12">
            <h2 className="text-[#091D39] text-4xl md:text-5xl font-bold font-heading uppercase tracking-tighter mb-8">
              A urgência da sua saúde <br /> <span className="text-[#CFAE70]">exige técnica jurídica</span>
            </h2>
            <a 
              href="https://wa.me/5527999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#091D39] text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-[#CFAE70] hover:text-[#091D39] transition-all"
            >
              <MessageCircle size={20} /> Consultar Especialista em Direito à Saúde
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
