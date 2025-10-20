import { Check, MapPin, Clock, DollarSign, TrendingUp, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Save Up to 50% Commission",
      description: "Pay significantly less than the 30-40% most platforms charge"
    },
    {
      icon: MapPin,
      title: "Bigger Delivery Area",
      description: "Expand your reach with our extensive driver network"
    },
    {
      icon: Clock,
      title: "Faster Delivery Times",
      description: "Optimized routing and dedicated drivers for quicker service"
    },
    {
      icon: TrendingUp,
      title: "More Orders",
      description: "Continue receiving orders from all major platforms"
    },
    {
      icon: Shield,
      title: "No Service Fees",
      description: "Transparent pricing with no hidden charges"
    },
    {
      icon: Zap,
      title: "Increased Visibility",
      description: "Enhanced presence across multiple delivery platforms"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Why Choose{" "}
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              Savory Synergy?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Keep everything you love about your current setup while dramatically reducing costs and improving service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="group hover:shadow-warm transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Points */}
        <div className="bg-warm-cream rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">
              How It Works
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-heading font-semibold text-foreground mb-4">
                  For Your Restaurant:
                </h4>
                <ul className="space-y-3">
                  {[
                    "Continue receiving orders exactly as before",
                    "Keep your existing POS system integration",
                    "Use flexible delivery",
                    "Save up to 50% on commission fees",
                    "No changes to your customer experience"
                  ].map((point, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-heading font-semibold text-foreground mb-4">
                  Our Promise:
                </h4>
                <ul className="space-y-3">
                  {[
                    "Seamless integration with existing platforms",
                    "Reliable and professional drivers",
                    "Real-time tracking and updates",
                    "Transparent pricing structure"
                  ].map((point, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;