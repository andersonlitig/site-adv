import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import Services from "@/components/sections/Services";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E8E8E8] text-[#0D0D0D] font-sans selection:bg-[#CFAE70] selection:text-[#091D39]">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
