import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Users } from "lucide-react";
import { Reveal, SectionBadge } from "@/components/site/Ui";

/* ───────────────── Ícones Google & Verificado (padrão Trustindex Google Reviews) ───────────────── */
function GoogleWordmark() {
  return (
    <svg viewBox="0 0 272 92" className="h-7 w-auto mx-auto" aria-label="Google">
      <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" />
      <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" />
      <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" />
      <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z" />
      <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" />
      <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" />
    </svg>
  );
}

function GoogleGMark() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0" aria-label="Google">
      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24Z" />
      <path fill="#FBBC05" d="M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14Z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96Z" />
    </svg>
  );
}

function VerifiedBlueBadge() {
  return (
    <svg viewBox="0 0 20 20" className="w-4 h-4 shrink-0" aria-label="Avaliação verificada">
      <circle cx="10" cy="10" r="9" fill="#1A73E8" />
      <path d="M6.2 10.3l2.4 2.4 5.2-5.2" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GoogleLetterAvatar({ name, bg }: { name: string; bg: string }) {
  return (
    <div
      style={{ backgroundColor: bg }}
      className="w-10 h-10 rounded-full text-white font-semibold text-[15px] flex items-center justify-center shrink-0 select-none"
      aria-hidden="true"
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

/* ───────────────── Relatos de Clientes (Layout Widget Google Reviews estilo Trustindex) ───────────────── */
const RELATOS: Array<{
  name: string;
  role: string;
  tag: string;
  text: string;
  avatar?: string;
  avatarBg?: string;
}> = [
  {
    name: "Luciana M.",
    role: "Mãe do Theo · Serra, ES",
    tag: "BPC/LOAS Autismo",
    avatarBg: "#E65100",
    text: "O INSS negou o BPC do meu filho com laudo de autismo dizendo que ele não tinha impedimento de longo prazo. Fiquei no chão sem saber como pagar as terapias dele. A equipe do escritório foi maravilhosa, analisou tudo com carinho e entrou com a ação na Justiça. O juiz deu liminar rápida e saíram os atrasados. Só tenho gratidão eterna!",
  },
  {
    name: "Regina O.",
    role: "Cariacica, ES",
    tag: "Aposentadoria por Idade",
    avatar: "/regina.jpg",
    text: "Doutor Anderson quero agradecer de coração a você e aos seus advogados. Eu já tinha quase desistido de me aposentar porque uma firma antiga que faliu sumiu com meus registros de 1988 e no INSS ninguém me ajudava. Vocês acharam os papéis certos e resolveram tudo pelo WhatsApp sem eu pegar sol e fila. Deus te abençoe sempre meu filho.",
  },
  {
    name: "Valdecir M.",
    role: "Vila Velha, ES",
    tag: "Perícia Revertida",
    avatar: "/valdecir.jpg",
    text: "Passei por cirurgia na coluna e o perito do INSS nem olhou meus laudos, me deu alta em 3 minutos mandando voltar a carregar peso. Quase entrei em parafuso sem renda. Os advogados pegaram meu caso e na perícia da Justiça Federal foi reconhecido na hora com pagamento de tudo acumulado. Pessoal sério e correto, resolveu rápido.",
  },
  {
    name: "Marcos V.",
    role: "Vitória, ES",
    tag: "Planejamento Previdenciário",
    avatarBg: "#1565C0",
    text: "Fiz o planejamento antes de dar entrada e valeu cada centavo. Eu ia continuar recolhendo no teto à toa achando que ia aumentar meu valor após a Reforma. A análise do escritório me provou nos números que era puro desperdício e me poupou mais de 30 mil reais em guias. Atendimento pelo WhatsApp muito claro e direto.",
  },
  {
    name: "Carlos Alberto",
    role: "Colatina, ES",
    tag: "Tempo Especial (PPP)",
    avatarBg: "#091D39",
    text: "Trabalhei mais de 20 anos em fábrica com barulho e produto químico. O INSS recusou meu PPP falando que faltava laudo de empresa antiga já fechada. O Dr. Anderson e a equipe resolveram na Justiça e converteram todo meu tempo em especial. Recebi minha aposentadoria sem precisar ir em agência nenhuma. Recomendo demais.",
  },
  {
    name: "Patrícia L.",
    role: "Atendimento Online · SP",
    tag: "Pensão por Morte",
    avatarBg: "#2E7D32",
    text: "Tive a pensão do meu esposo travada por exigências burocráticas absurdas logo após o falecimento dele. Como moro em SP e vi ótimas referências da advocacia na internet, chamei no WhatsApp. Foram extremamente sensíveis com meu momento de dor e destravaram o benefício super rápido. Confiança total no trabalho de vocês.",
  },
];

export function GoogleCompactBadge({ tone = "light" }: { tone?: "dark" | "light" }) {
  const isDark = tone === "dark";
  return (
    <div
      className={`inline-flex items-center gap-3.5 rounded-xl pl-3.5 pr-4 py-2.5 border border-l-[4px] border-l-[#FBBC05] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.22)] max-w-full ${
        isDark
          ? "bg-[#070E18]/90 border-white/15 border-l-[#FBBC05] text-white"
          : "bg-white border-[#091D39]/12 border-l-[#FBBC05] text-[#111827]"
      }`}
    >
      {/* 3 avatares sobrepostos estilo Fomo Review Widget VI */}
      <div className="flex items-center -space-x-2.5 shrink-0">
        <span
          className="w-9 h-9 rounded-full bg-[#B91C1C] text-white text-[13px] font-bold flex items-center justify-center border-2 border-white ring-2 ring-[#0D9488] select-none"
          aria-hidden="true"
        >
          L
        </span>
        <img
          src="/regina.jpg"
          alt="Cliente Regina O."
          className="w-9 h-9 rounded-full object-cover border-2 border-white ring-2 ring-[#0D9488]"
          loading="lazy"
        />
        <span
          className="w-9 h-9 rounded-full bg-[#091D39] text-white text-[13px] font-bold flex items-center justify-center border-2 border-white ring-2 ring-[#0D9488] select-none"
          aria-hidden="true"
        >
          M
        </span>
      </div>

      {/* Duas linhas estilo Fomo Widget VI: Avaliação excelente G ★★★★★ / Selo verde */}
      <div className="min-w-0 flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[13.5px] font-bold leading-tight tracking-tight">
            Avaliação excelente
          </span>
          <GoogleGMark />
          <div className="flex items-center gap-0.5" aria-label="5 de 5 estrelas">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-[#FBBC05] text-[#FBBC05]" />
            ))}
          </div>
        </div>
        <div className="mt-1 flex items-center gap-1.5 text-[11.5px]">
          <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
            <circle cx="10" cy="10" r="9" fill="#16A34A" />
            <path
              d="M6.2 10.3l2.4 2.4 5.2-5.2"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={isDark ? "text-white/75" : "text-[#4B5563]"}>
            Nota máxima <strong className={isDark ? "text-white" : "text-[#111827]"}>5,0</strong> no Google
          </span>
        </div>
      </div>
    </div>
  );
}

export function GoogleReviewsSection({
  variant = "slider1",
}: {
  variant?: "slider1" | "sidebar";
}) {
  const [idx, setIdx] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const updateCount = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const maxIdx = Math.max(0, RELATOS.length - visibleCount);

  useEffect(() => {
    setIdx((curr) => Math.min(curr, maxIdx));
  }, [maxIdx]);

  const prev = () => setIdx((curr) => (curr > 0 ? curr - 1 : maxIdx));
  const next = () => setIdx((curr) => (curr < maxIdx ? curr + 1 : 0));

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) next();
    else if (distance < -50) prev();
    setTouchStart(null);
    setTouchEnd(null);
  };

  if (variant === "sidebar") {
    return (
      <section className="bg-[#FAF9F6] text-[#091D39] py-16 md:py-24 border-b border-[#091D39]/8 overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <Reveal className="max-w-[760px] mb-10 md:mb-12 space-y-4">
            <div><SectionBadge icon={Users} tone="navy">Avaliações no Google</SectionBadge></div>
            <h2 className="text-[clamp(30px,4.2vw,52px)] font-bold leading-[1.06] tracking-[-0.03em]">
              Histórias reais de quem confiou e{" "}
              <em className="font-display not-italic text-[#8a6a2b] font-bold">
                conquistou seu direito.
              </em>
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#57534E] font-light leading-relaxed">
              Pessoas reais, com desafios diferentes no INSS, que tiveram seus direitos assegurados pelo nosso escritório.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
            <Reveal className="lg:col-span-3 min-w-0 w-full flex flex-col items-center justify-center text-center py-4 px-4">
              <span className="text-[22px] font-extrabold tracking-[0.04em] text-[#111827] uppercase font-heading">
                EXCELENTE
              </span>
              <div className="flex items-center justify-center gap-1 my-2" aria-label="5 de 5 estrelas">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
              <p className="text-[13.5px] text-[#374151] mb-3">
                Avaliação máxima <strong className="font-bold text-[#111827]">5,0 / 5</strong>
              </p>
              <GoogleWordmark />
            </Reveal>

            <div className="lg:col-span-9 relative min-w-0 w-full">
              <button
                type="button"
                onClick={prev}
                aria-label="Avaliação anterior"
                className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-[#091D39]/15 text-[#091D39] shadow-md hover:bg-[#091D39] hover:text-white items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft size={17} />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Próxima avaliação"
                className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-[#091D39]/15 text-[#091D39] shadow-md hover:bg-[#091D39] hover:text-white items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight size={17} />
              </button>

              <div
                className="overflow-hidden w-full select-none py-1"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <motion.div
                  className="flex gap-4"
                  animate={{
                    x: `calc(-${idx} * ((100% - ${(visibleCount - 1) * 16}px) / ${visibleCount} + 16px))`,
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 30 }}
                >
                  {RELATOS.map((r, i) => {
                    const isExpanded = !!expanded[i];
                    return (
                      <article
                        key={i}
                        style={{
                          width: `calc((100% - ${(visibleCount - 1) * 16}px) / ${visibleCount})`,
                        }}
                        className="shrink-0 rounded-xl bg-white border border-[#091D39]/10 shadow-[0_2px_12px_-4px_rgba(9,29,57,0.08)] hover:border-[#CFAE70] p-5 flex flex-col justify-between gap-4 transition-colors duration-200"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2.5 mb-3">
                            <div className="flex items-center gap-3 min-w-0">
                              {r.avatar ? (
                                <img
                                  src={r.avatar}
                                  alt={r.name}
                                  className="w-10 h-10 rounded-full object-cover border border-[#091D39]/12 shrink-0"
                                  loading="lazy"
                                />
                              ) : (
                                <GoogleLetterAvatar name={r.name} bg={r.avatarBg || "#091D39"} />
                              )}
                              <div className="min-w-0">
                                <strong className="block text-[14px] font-bold text-[#111827] leading-tight truncate">
                                  {r.name}
                                </strong>
                                <span className="block text-[12px] text-[#6B7280] leading-tight mt-0.5 truncate">
                                  {r.role}
                                </span>
                              </div>
                            </div>
                            <GoogleGMark />
                          </div>

                          <div className="flex items-center gap-1.5 mb-2.5">
                            <div className="flex items-center gap-0.5" aria-label="5 estrelas">
                              {[...Array(5)].map((_, s) => (
                                <Star key={s} size={15} className="fill-[#FBBC05] text-[#FBBC05]" />
                              ))}
                            </div>
                            <VerifiedBlueBadge />
                          </div>

                          <p
                            className={`text-[13.5px] md:text-[14px] text-[#1F2937] leading-[1.55] font-normal ${
                              isExpanded ? "" : "line-clamp-4"
                            }`}
                          >
                            {r.text}
                          </p>

                          <button
                            type="button"
                            onClick={() =>
                              setExpanded((prevExp) => ({ ...prevExp, [i]: !prevExp[i] }))
                            }
                            className="mt-1.5 text-[12.5px] font-medium text-[#6B7280] hover:text-[#091D39] transition-colors cursor-pointer"
                          >
                            {isExpanded ? "Mostrar menos" : "Leia mais"}
                          </button>
                        </div>

                        <div className="pt-2.5 border-t border-[#091D39]/6 flex items-center justify-between text-[11px]">
                          <span className="font-semibold text-[#8a6a2b]">{r.tag}</span>
                          <span className="text-[#6B7280]">Google</span>
                        </div>
                      </article>
                    );
                  })}
                </motion.div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-6">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Anterior"
                  className="sm:hidden w-9 h-9 rounded-full border border-[#091D39]/20 flex items-center justify-center text-[#091D39]"
                >
                  <ChevronLeft size={16} />
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: maxIdx + 1 }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Ir para avaliação ${i + 1}`}
                      onClick={() => setIdx(i)}
                      className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                        idx === i ? "w-7 bg-[#091D39]" : "w-2 bg-[#091D39]/20 hover:bg-[#091D39]/40"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Próximo"
                  className="sm:hidden w-9 h-9 rounded-full border border-[#091D39]/20 flex items-center justify-center text-[#091D39]"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white text-[#091D39] py-16 md:py-24 border-b border-[#091D39]/10 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10">
        {/* Cabeçalho centralizado limpo estilo Trustindex Slider I. */}
        <Reveal className="max-w-[720px] mx-auto text-center mb-10 md:mb-12 space-y-3.5">
          <div className="flex justify-center">
            <SectionBadge icon={Users} tone="navy">Avaliações no Google</SectionBadge>
          </div>
          <h2 className="text-[clamp(28px,4vw,46px)] font-bold leading-[1.08] tracking-[-0.03em]">
            Histórias reais de quem confiou e{" "}
            <em className="font-display not-italic text-[#8a6a2b] font-bold">
              conquistou seu direito.
            </em>
          </h2>
          <div className="inline-flex items-center justify-center gap-2 pt-1 text-[13.5px] text-[#57534E]">
            <div className="flex items-center gap-0.5" aria-label="5 de 5 estrelas">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} className="fill-[#FBBC05] text-[#FBBC05]" />
              ))}
            </div>
            <span>
              Nota <strong className="text-[#091D39] font-semibold">5,0 / 5</strong> nas avaliações do Google
            </span>
          </div>
          <div className="mx-auto w-24 h-[2px] bg-[#CFAE70]/80 rounded-full" />
        </Reveal>

        {/* Carrossel Slider I. em largura total com 3 cards cinza-suave e setas laterais */}
        <div className="relative w-full">
          <button
            type="button"
            onClick={prev}
            aria-label="Avaliação anterior"
            className="hidden sm:flex absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-black/10 text-[#374151] shadow-[0_2px_10px_rgba(0,0,0,0.12)] hover:bg-[#091D39] hover:text-white items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft size={17} />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Próxima avaliação"
            className="hidden sm:flex absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-black/10 text-[#374151] shadow-[0_2px_10px_rgba(0,0,0,0.12)] hover:bg-[#091D39] hover:text-white items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight size={17} />
          </button>

          <div
            className="overflow-hidden w-full select-none py-1"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <motion.div
              className="flex gap-5"
              animate={{
                x: `calc(-${idx} * ((100% - ${(visibleCount - 1) * 20}px) / ${visibleCount} + 20px))`,
              }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
            >
              {RELATOS.map((r, i) => {
                const isExpanded = !!expanded[i];
                return (
                  <article
                    key={i}
                    style={{
                      width: `calc((100% - ${(visibleCount - 1) * 20}px) / ${visibleCount})`,
                    }}
                    className="shrink-0 rounded-xl bg-[#F4F4F5] p-6 flex flex-col justify-between transition-colors duration-200"
                  >
                    <div>
                      {/* Topo limpo Slider I.: Avatar + Nome + Subtítulo/Data */}
                      <div className="flex items-center gap-3 mb-3.5 min-w-0">
                        {r.avatar ? (
                          <img
                            src={r.avatar}
                            alt={r.name}
                            className="w-10 h-10 rounded-full object-cover shrink-0"
                            loading="lazy"
                          />
                        ) : (
                          <GoogleLetterAvatar name={r.name} bg={r.avatarBg || "#091D39"} />
                        )}
                        <div className="min-w-0">
                          <strong className="block text-[14.5px] font-bold text-[#111827] leading-tight truncate">
                            {r.name}
                          </strong>
                          <span className="block text-[12px] text-[#6B7280] leading-tight mt-0.5 truncate">
                            {r.role}
                          </span>
                        </div>
                      </div>

                      {/* 5 estrelas douradas limpas */}
                      <div className="flex items-center gap-0.5 mb-3" aria-label="5 de 5 estrelas">
                        {[...Array(5)].map((_, s) => (
                          <Star key={s} size={16} className="fill-[#FBBC05] text-[#FBBC05]" />
                        ))}
                      </div>

                      {/* Texto da avaliação com "Ler mais" discreto */}
                      <p
                        className={`text-[13.5px] md:text-[14px] text-[#1F2937] leading-[1.55] font-normal ${
                          isExpanded ? "" : "line-clamp-4"
                        }`}
                      >
                        {r.text}
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          setExpanded((prevExp) => ({ ...prevExp, [i]: !prevExp[i] }))
                        }
                        className="mt-2.5 text-[12.5px] font-medium text-[#6B7280] hover:text-[#111827] transition-colors cursor-pointer"
                      >
                        {isExpanded ? "Mostrar menos" : "Ler mais"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </motion.div>
          </div>

          {/* Navegação mobile + Dots discretos */}
          <div className="flex items-center justify-center gap-3 pt-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Anterior"
              className="sm:hidden w-9 h-9 rounded-full border border-[#091D39]/20 flex items-center justify-center text-[#091D39]"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: maxIdx + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ir para avaliação ${i + 1}`}
                  onClick={() => setIdx(i)}
                  className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                    idx === i ? "w-7 bg-[#091D39]" : "w-2 bg-[#091D39]/20 hover:bg-[#091D39]/40"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Próximo"
              className="sm:hidden w-9 h-9 rounded-full border border-[#091D39]/20 flex items-center justify-center text-[#091D39]"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
