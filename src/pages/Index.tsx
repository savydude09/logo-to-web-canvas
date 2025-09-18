import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AnimatedVideo from "@/components/AnimatedVideo";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
