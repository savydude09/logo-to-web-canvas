import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingDown, Users, Clock } from "lucide-react";
import AnimatedVideo from "@/components/AnimatedVideo";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-warm overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ff6b35%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Main Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
                <TrendingDown className="h-4 w-4 mr-2" />
                Save Up to 50% on Delivery Costs
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight">
                Reduce Your{" "}
                <span className="bg-gradient-sunset bg-clip-text text-transparent">
                  Delivery Costs
                </span>{" "}
                by 50%
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Partner with Savory Synergy to keep receiving orders from DoorDash, GrubHub, and other platforms while using our cost-effective driver network for delivery.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center space-x-4 p-6 bg-background/80 rounded-2xl shadow-sm border border-primary/10 hover-scale">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-base text-foreground">Trusted Network</div>
                  <div className="text-sm text-muted-foreground">Reliable drivers</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-6 bg-background/80 rounded-2xl shadow-sm border border-primary/10 hover-scale">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-base text-foreground">Faster Delivery</div>
                  <div className="text-sm text-muted-foreground">Optimized routes</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-warm transition-all font-semibold text-xl px-10 py-8 hover-scale">
                Get Started Today
                <ArrowRight className="h-6 w-6 ml-3" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-6">Trusted by restaurants working with:</p>
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
                <div className="text-2xl font-bold text-foreground hover:opacity-100 transition-opacity">DoorDash</div>
                <div className="text-2xl font-bold text-foreground hover:opacity-100 transition-opacity">GrubHub</div>
                <div className="text-2xl font-bold text-foreground hover:opacity-100 transition-opacity">ChowNow</div>
                <div className="text-2xl font-bold text-foreground hover:opacity-100 transition-opacity">Slice</div>
                <div className="text-2xl font-bold text-foreground hover:opacity-100 transition-opacity">Toast</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seamless transition to video */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground animate-fade-in">See How You Save</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-lg animate-fade-in">Watch our interactive demo showing the cost difference between DoorDash/GrubHub and your own drivers</p>
            <div className="animate-scale-in">
              <AnimatedVideo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;