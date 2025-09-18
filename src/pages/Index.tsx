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
        <section className="py-16 px-4 bg-background">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">See How You Save</h2>
            <p className="text-muted-foreground mb-8">Watch our interactive demo showing the cost difference between DoorDash/GrubHub and your own drivers</p>
            <AnimatedVideo />
          </div>
        </section>
        <Benefits />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
