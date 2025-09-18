import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingDown, Users, Clock } from "lucide-react";
import driverImage from "@/assets/delivery-driver-themed.png";
import AnimatedVideo from "@/components/AnimatedVideo";
const Hero = () => {
  return <section id="home" className="relative bg-gradient-warm overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ff6b35%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Main Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content Column */}
          <div className="lg:order-2 space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
                <TrendingDown className="h-4 w-4 mr-2" />
                Save Up to 50% on Delivery Costs
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Reduce Your{" "}
                <span className="bg-gradient-sunset bg-clip-text text-transparent">
                  Delivery Commissions
                </span>{" "}
                upto 50%
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Partner with Savory Synergy to keep receiving orders from DoorDash, GrubHub, and other platforms while using our cost-effective driver network for delivery.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-background/80 rounded-xl shadow-sm border border-primary/10 hover-scale">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm text-foreground">Trusted Network</div>
                  <div className="text-xs text-muted-foreground">Reliable drivers</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-background/80 rounded-xl shadow-sm border border-primary/10 hover-scale">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm text-foreground">Faster Delivery</div>
                  <div className="text-xs text-muted-foreground">Optimized routes</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-warm transition-all font-semibold text-lg px-8 py-6 hover-scale">
                Get Started Today
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">Trusted by restaurants working with:</p>
              <div className="flex flex-wrap items-center gap-6 opacity-80">
                <div className="text-xl font-bold hover:opacity-100 transition-opacity" style={{ color: '#FF3008' }}>DoorDash</div>
                <div className="text-xl font-bold hover:opacity-100 transition-opacity" style={{ color: '#F63440' }}>GrubHub</div>
                <div className="text-xl font-bold hover:opacity-100 transition-opacity" style={{ color: '#0066CC' }}>ChowNow</div>
                <div className="text-xl font-bold hover:opacity-100 transition-opacity" style={{ color: '#E31837' }}>Slice</div>
                <div className="text-xl font-bold hover:opacity-100 transition-opacity" style={{ color: '#007A5E' }}>Toast</div>
              </div>
            </div>
          </div>

          {/* Driver Image Column */}
          <div className="relative lg:order-1">
            <div className="relative max-w-lg mx-auto animate-scale-in">
              <div className="absolute inset-0 bg-gradient-sunset rounded-3xl transform rotate-2 opacity-20 scale-105"></div>
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl transform -rotate-1 opacity-10 scale-110"></div>
              <div className="relative bg-background rounded-3xl p-6 shadow-warm overflow-hidden border border-primary/10">
                <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute top-4 right-8 w-2 h-2 bg-accent rounded-full animate-pulse delay-300"></div>
                <img src={driverImage} alt="Professional delivery driver in branded uniform holding pizza boxes and beverages, representing reliable food delivery service" className="w-full h-auto rounded-2xl object-cover shadow-lg transform hover:scale-105 transition-transform duration-300" decoding="async" fetchPriority="high" onError={e => {
                e.currentTarget.src = '/placeholder.svg';
              }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seamless transition to video */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground animate-fade-in">See How You Save</h2>
            
            <div className="animate-scale-in">
              <AnimatedVideo />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;