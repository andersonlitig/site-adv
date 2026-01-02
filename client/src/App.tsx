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

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/atuacao/direito-da-saude" component={HealthLaw} />
      <Route path="/atuacao/previdenciario" component={SocialSecurityLaw} />
      <Route path="/atuacao/transito" component={TrafficLaw} />
      <Route path="/atuacao/passageiro" component={PassengerLaw} />
      <Route path="/atuacao/bancario" component={BankingLaw} />
      <Route path="/atuacao/direito-do-trabalho" component={LaborLaw} />
      <Route path="/atuacao/familia" component={FamilyLaw} />
      <Route path="/atuacao/consumidor" component={ConsumerLaw} />
      <Route path="/atuacao/responsabilidade-civil" component={CivilLiability} />
      <Route path="/atuacao/imobiliario" component={RealEstateLaw} />
      <Route path="/atuacao/contratual" component={ContractLaw} />
      <Route path="/atuacao/criminal" component={CriminalLaw} />
      <Route path="/atuacao/administrativo" component={AdministrativeLaw} />
      <Route path="/atuacao/digital" component={DigitalLaw} />
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
