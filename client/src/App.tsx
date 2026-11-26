import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HealthLaw from "@/pages/HealthLaw";
import SocialSecurityLaw from "@/pages/SocialSecurityLaw";
import TrafficLaw from "@/pages/TrafficLaw";
import PassengerLaw from "@/pages/PassengerLaw";
import BankingLaw from "@/pages/BankingLaw";
import LaborLaw from "@/pages/LaborLaw";
import FamilyLaw from "@/pages/FamilyLaw";
import ConsumerLaw from "@/pages/ConsumerLaw";
import CivilLiability from "@/pages/CivilLiability";
import RealEstateLaw from "@/pages/RealEstateLaw";
import ContractLaw from "@/pages/ContractLaw";
import CriminalLaw from "@/pages/CriminalLaw";
import AdministrativeLaw from "@/pages/AdministrativeLaw";
import DigitalLaw from "@/pages/DigitalLaw";
import BlogList from "@/pages/BlogList";
import BlogPostDetail from "@/pages/BlogPostDetail";
import BlogPost1 from "@/pages/BlogPost1";
import BlogPost2 from "@/pages/BlogPost2";
import BlogPost3 from "@/pages/BlogPost3";
import PartnerPage from "./pages/PartnerPage";
import HomeV2 from "@/pages/HomeV2";
import BeneficioNegadoV2 from "@/pages/BeneficioNegadoV2";
import IncapacidadeV2 from "@/pages/IncapacidadeV2";
import RevisaoV2 from "@/pages/RevisaoV2";
import SalarioMaternidadeV2 from "@/pages/SalarioMaternidadeV2";
import JaAposentadoV2 from "@/pages/JaAposentadoV2";
import PlanejamentoV2 from "@/pages/PlanejamentoV2";
import AposentarV2 from "@/pages/AposentarV2";
import BpcLoasV2 from "@/pages/BpcLoasV2";
import PensaoMorteV2 from "@/pages/PensaoMorteV2";
import ServidorPublicoV2 from "@/pages/ServidorPublicoV2";

function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.slice(1);
      requestAnimationFrame(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
      <Route path="/" component={HomeV2} />
      <Route path="/salario-maternidade" component={SalarioMaternidadeV2} />
      <Route path="/planejamento" component={PlanejamentoV2} />
      <Route path="/planejamento-previdenciario" component={PlanejamentoV2} />
      <Route path="/v2/planejamento" component={PlanejamentoV2} />
      <Route path="/aposentadorias" component={AposentarV2} />
      <Route path="/aposentar" component={AposentarV2} />
      <Route path="/v2/aposentar" component={AposentarV2} />
      <Route path="/beneficio-negado" component={BeneficioNegadoV2} />
      <Route path="/beneficio-negado-inss" component={BeneficioNegadoV2} />
      <Route path="/beneficios-por-incapacidade" component={IncapacidadeV2} />
      <Route path="/incapacidade" component={IncapacidadeV2} />
      <Route path="/auxilio-doenca" component={IncapacidadeV2} />
      <Route path="/revisao-de-aposentadoria" component={RevisaoV2} />
      <Route path="/revisao" component={RevisaoV2} />
      <Route path="/revisao-aposentadoria" component={RevisaoV2} />
      <Route path="/bpc-loas" component={BpcLoasV2} />
      <Route path="/bpc-e-pensao" component={BpcLoasV2} />
      <Route path="/bpc-pensao" component={BpcLoasV2} />
      <Route path="/bpc" component={BpcLoasV2} />
      <Route path="/pensao-por-morte" component={PensaoMorteV2} />
      <Route path="/pensao" component={PensaoMorteV2} />
      <Route path="/servidor-publico" component={ServidorPublicoV2} />
      <Route path="/servidores-publicos" component={ServidorPublicoV2} />
      <Route path="/rpps" component={ServidorPublicoV2} />
      <Route path="/ja-aposentado" component={JaAposentadoV2} />
      <Route path="/v2/ja-aposentado" component={JaAposentadoV2} />
      <Route path="/atuacao/saude" component={HealthLaw} />
      <Route path="/atuacao/previdenciario" component={SocialSecurityLaw} />
      <Route path="/atuacao/transito" component={TrafficLaw} />
      <Route path="/atuacao/aereo" component={PassengerLaw} />
      <Route path="/atuacao/bancario" component={BankingLaw} />
      <Route path="/atuacao/trabalhista" component={LaborLaw} />
      <Route path="/atuacao/familia" component={FamilyLaw} />
      <Route path="/atuacao/consumidor" component={ConsumerLaw} />
      <Route path="/atuacao/responsabilidade-civil" component={CivilLiability} />
      <Route path="/atuacao/imobiliario" component={RealEstateLaw} />
      <Route path="/atuacao/contratual" component={ContractLaw} />
      <Route path="/atuacao/criminal" component={CriminalLaw} />
      <Route path="/atuacao/administrativo" component={AdministrativeLaw} />
      <Route path="/atuacao/digital" component={DigitalLaw} />
      <Route path="/seja-parceiro" component={PartnerPage} />
      <Route path="/blog" component={BlogList} />
      <Route path="/blog/:slug" component={BlogPostDetail} />
      <Route path="/blog/negativas-plano-de-saude" component={BlogPost1} />
      <Route path="/blog/heranca-e-inventario" component={BlogPost2} />
      <Route path="/blog/juros-abusivos" component={BlogPost3} />
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
