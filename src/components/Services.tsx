import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, Car, ArrowRight, Users, TrendingUp, MapPin } from "lucide-react";

const Services = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Solutions for Everyone
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a restaurant owner looking to reduce costs or a driver seeking better opportunities, we have the perfect solution for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* For Restaurants */}
          <Card id="restaurants" className="group hover:shadow-warm transition-all duration-300 border-border/50 hover:border-primary/30 bg-background/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center shadow-glow mb-4 group-hover:scale-110 transition-transform">
                <Store className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-heading text-foreground">
                For Restaurants
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-center">
                Reduce your delivery costs while maintaining the same order flow and customer experience.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-warm-cream rounded-xl">
                  <TrendingUp className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Save 30-50% on commissions</div>
                    <div className="text-sm text-muted-foreground">Compared to standard platform fees</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-warm-cream rounded-xl">
                  <Users className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Keep existing integrations</div>
                    <div className="text-sm text-muted-foreground">DoorDash, GrubHub, ChowNow, and more</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-warm-cream rounded-xl">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Expanded delivery radius</div>
                    <div className="text-sm text-muted-foreground">Reach more customers than ever</div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full bg-gradient-primary hover:shadow-warm transition-all">
                  Start Saving Today
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* For Drivers */}
          <Card id="drivers" className="group hover:shadow-warm transition-all duration-300 border-border/50 hover:border-primary/30 bg-background/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center shadow-glow mb-4 group-hover:scale-110 transition-transform">
                <Car className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-heading text-foreground">
                For Drivers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-center">
                Join our growing network of drivers and enjoy better earning opportunities with flexible schedules.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-warm-cream rounded-xl">
                  <TrendingUp className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Competitive pay rates</div>
                    <div className="text-sm text-muted-foreground">Fair compensation for your time</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-warm-cream rounded-xl">
                  <Users className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Flexible scheduling</div>
                    <div className="text-sm text-muted-foreground">Work when it suits you best</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-warm-cream rounded-xl">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Optimized routes</div>
                    <div className="text-sm text-muted-foreground">Efficient delivery planning</div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Join Our Team
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;