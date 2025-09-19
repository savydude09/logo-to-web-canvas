import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, ArrowRight, Users, TrendingUp, MapPin } from "lucide-react";

const Services = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Our Solution for Restaurants
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Restaurant owners can reduce costs while maintaining the same order flow and customer experience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
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
                    <div className="font-semibold text-foreground">Save up to 50% on commissions</div>
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

        </div>
      </div>
    </section>
  );
};

export default Services;