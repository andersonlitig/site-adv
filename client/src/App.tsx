import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
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
import HomeV2_Backup from "@/pages/HomeV2_Backup";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomeV2} />
      <Route path="/backup" component={HomeV2_Backup} />
      <Route path="/salario-maternidade" component={SalarioMaternidadeV2} />
      <Route path="/planejamento" component={PlanejamentoV2} />
      <Route path="/aposentadorias" component={AposentarV2} />
      <Route path="/beneficio-negado" component={BeneficioNegadoV2} />
      <Route path="/beneficios-por-incapacidade" component={IncapacidadeV2} />
      <Route path="/revisao-de-aposentadoria" component={RevisaoV2} />
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
      <Route path="/blog/negativas-plano-de-saude" component={BlogPost1} />
      <Route path="/blog/heranca-e-inventario" component={BlogPost2} />
      <Route path="/blog/juros-abusivos" component={BlogPost3} />
      <Route component={NotFound} />
    </Switch>
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
