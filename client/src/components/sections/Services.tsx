import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Minus, 
  ArrowRight, 
  Stethoscope, 
  History, 
  Car, 
  Plane, 
  Landmark, 
  Briefcase, 
  Users, 
  ShoppingBag, 
  Scale, 
  Home, 
  FileText, 
  ShieldAlert, 
  Globe, 
  Fingerprint 
} from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: 1,
    title: "Direito da Saúde",
    subtitle: "Defesa do Paciente",
    path: "/atuacao/saude",
    icon: <Stethoscope size={24} />,
    details: [
      "Negativas de tratamentos, cirurgias e medicamentos de alto custo",
      "Reajustes abusivos de mensalidade",
      "Erro médico e hospitalar",
      "Home Care (internação domiciliar)",
      "Cancelamento indevido de plano de saúde"
    ]
  },
  {
    id: 2,
    title: "Direito Previdenciário",
    subtitle: "INSS e Regime Próprio",
    path: "/atuacao/previdenciario",
    icon: <History size={24} />,
    details: [
      "Aposentadorias (Idade, Tempo de Contribuição, Especial)",
      "Benefício de Prestação Continuada (BPC/LOAS)",
      "Auxílio-doença e Aposentadoria por invalidez",
      "Planejamento Previdenciário",
      "Revisão de benefícios"
    ]
  },
  {
    id: 3,
    title: "Direito de Trânsito",
    subtitle: "Defesa de Condutores",
    path: "/atuacao/transito",
    icon: <Car size={24} />,
    details: [
      "Defesa em Lei Seca (Bafômetro)",
      "Suspensão e Cassação da CNH",
      "Recurso de Multas Graves",
      "Acidentes de trânsito (Indenizações)"
    ]
  },
  {
    id: 4,
    title: "Direito do Passageiro",
    subtitle: "Problemas Aéreos",
    path: "/atuacao/aereo",
    icon: <Plane size={24} />,
    details: [
      "Cancelamento e atraso de voo",
      "Extravio de bagagem",
      "Overbooking",
      "Reembolso de passagens"
    ]
  },
  {
    id: 5,
    title: "Direito Bancário",
    subtitle: "Defesa contra Abusos",
    path: "/atuacao/bancario",
    icon: <Landmark size={24} />,
    details: [
      "Juros abusivos em contratos",
      "Golpe do Pix e Fraudes bancárias",
      "Defesa em Busca e Apreensão de Veículos",
      "Negativação indevida (SPC/Serasa)"
    ]
  },
  {
    id: 6,
    title: "Direito do Trabalho",
    subtitle: "Defesa do Empregado",
    path: "/atuacao/trabalhista",
    icon: <Briefcase size={24} />,
    details: [
      "Reversão de Justa Causa",
      "Reconhecimento de Vínculo Empregatício",
      "Acidente de Trabalho e Doença Ocupacional",
      "Rescisão Indireta",
      "Horas Extras e Adicionais"
    ]
  },
  {
    id: 7,
    title: "Direito da Família",
    subtitle: "Sucessões e Divórcios",
    path: "/atuacao/familia",
    icon: <Users size={24} />,
    details: [
      "Divórcio e Dissolução de União Estável",
      "Pensão Alimentícia (Fixação, Revisão e Exoneração)",
      "Guarda e Regulamentação de Visitas",
      "Inventário e Partilha de Bens",
      "Testamentos"
    ]
  },
  {
    id: 8,
    title: "Direito do Consumidor",
    subtitle: "Relações de Consumo",
    path: "/atuacao/consumidor",
    icon: <ShoppingBag size={24} />,
    details: [
      "Produtos com defeito",
      "Publicidade enganosa",
      "Problemas com compras online",
      "Cobranças indevidas"
    ]
  },
  {
    id: 9,
    title: "Responsabilidade Civil",
    subtitle: "Indenizações",
    path: "/atuacao/responsabilidade-civil",
    icon: <Scale size={24} />,
    details: [
      "Danos morais e materiais",
      "Danos estéticos",
      "Ofensas em redes sociais",
      "Violação de direitos de imagem"
    ]
  },
  {
    id: 10,
    title: "Direito Imobiliário",
    subtitle: "Imóveis e Contratos",
    path: "/atuacao/imobiliario",
    icon: <Home size={24} />,
    details: [
      "Due Diligence para Compra e Venda",
      "Atraso na entrega de imóvel e Distratos",
      "Ações de Despejo e Revisional",
      "Usucapião e Regularização de Registros"
    ]
  },
  {
    id: 11,
    title: "Direito Contratual",
    subtitle: "Análise e Elaboração",
    path: "/atuacao/contratual",
    icon: <FileText size={24} />,
    details: [
      "Elaboração de contratos personalizados",
      "Revisão de cláusulas e riscos",
      "Distratos e Rescisões",
      "Execução de contratos judiciais"
    ]
  },
  {
    id: 12,
    title: "Direito Criminal",
    subtitle: "Defesa Penal",
    path: "/atuacao/criminal",
    icon: <ShieldAlert size={24} />,
    details: [
      "Acompanhamento em Delegacia",
      "Defesa em Inquéritos e Ações Penais",
      "Audiência de Custódia e Liberdade",
      "Habeas Corpus em todas as Instâncias"
    ]
  },
  {
    id: 13,
    title: "Direito Administrativo",
    subtitle: "Relação com o Estado",
    path: "/atuacao/administrativo",
    icon: <Globe size={24} />,
    details: [
      "Recursos em Concursos Públicos",
      "Defesa em PAD e Sindicâncias",
      "Assessoria em Licitações",
      "Ações de Improbidade Administrativa"
    ]
  },
  {
    id: 14,
    title: "Direito Digital",
    subtitle: "Internet e Tecnologia",
    path: "/atuacao/digital",
    icon: <Fingerprint size={24} />,
    details: [
      "Recuperação de Contas em Redes Sociais",
      "Remoção de Conteúdo e Fake News",
      "Indenização por Vazamento de Dados (LGPD)",
      "Crimes Cibernéticos e Invasões"
    ]
  }
];

export default function Services() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="bg-[#2C2C2C] py-24 text-white">
      <div className="container mx-auto px-4 md:px-12 mb-16">
        <h2 className="text-4xl font-bold font-heading uppercase tracking-tighter text-white border-l-4 border-[#CFAE70] pl-6">
          Áreas de Atuação
        </h2>
      </div>

      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#404040] border border-[#404040]">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`bg-[#091D39] p-8 md:p-10 cursor-pointer transition-all duration-300 hover:bg-[#0D2647] flex flex-col justify-between group ${
                expandedId === service.id ? "bg-[#0B2242] ring-1 ring-[#CFAE70] z-10" : ""
              }`}
              onClick={() => toggleExpand(service.id)}
              layout
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="text-[#CFAE70] opacity-80 group-hover:opacity-100 transition-opacity">
                    {service.icon}
                  </div>
                  <div className="text-[#CFAE70]">
                    {expandedId === service.id ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold uppercase tracking-wider mb-2 text-white group-hover:text-[#CFAE70] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm font-light uppercase tracking-wide mb-6">
                  {service.subtitle}
                </p>
              </div>

              <AnimatePresence>
                {expandedId === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="w-full h-[1px] bg-white/10 my-4" />
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                          <ArrowRight size={14} className="mt-1 text-[#CFAE70] shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link href={service.path}>
                        <a className="block w-full text-center bg-[#CFAE70] text-[#091D39] py-3 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
                          Saber Mais
                        </a>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          
          <motion.div
            className="bg-[#091D39]/50 p-8 md:p-10 flex flex-col justify-center items-center border border-dashed border-[#CFAE70]/30 group hover:border-[#CFAE70] transition-all"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Plus size={32} className="text-[#CFAE70] mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-lg font-bold uppercase tracking-widest text-white text-center mb-2">Outras Áreas</h3>
            <p className="text-gray-400 text-xs text-center mb-6 px-4">Consulte nossa equipe sobre demandas específicas em outras áreas do Direito.</p>
            <a href="#footer" className="text-[#CFAE70] text-xs font-bold uppercase tracking-widest border-b border-[#CFAE70] pb-1 hover:text-white hover:border-white transition-all">
              Consultar Canais Oficiais
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
