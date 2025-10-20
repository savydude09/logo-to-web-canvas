import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MessageSquare, Clock, ArrowRight } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Ready to{" "}
              <span className="bg-gradient-sunset bg-clip-text text-transparent">
                Get Started?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Contact us today to learn how you can start saving on delivery costs while improving your service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="hover:shadow-warm transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-foreground">Call Us</h3>
                      <p className="text-muted-foreground">Ready to answer your questions</p>
                      <a href="tel:+1234567890" className="text-primary hover:text-primary-dark transition-colors font-medium">770-800-8276

                    </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-warm transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-foreground">Email Us</h3>
                      
                      <a href="mailto:info@savorysynergy.com" className="text-primary hover:text-primary-dark transition-colors font-medium">savorysynergy@gmail.com</a>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* CTA Section */}
            <div className="bg-gradient-warm rounded-3xl p-8">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center shadow-glow">
                  <MessageSquare className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                    Start Saving Today
                  </h3>
                  <p className="text-muted-foreground mb-6">Join the restaurants already saving money with our driver network.</p>
                </div>

                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-gradient-primary hover:shadow-warm transition-all">
                    Schedule Free Consultation
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                  
                  
                </div>

                <div className="pt-4 border-t border-border/20">
                  <p className="text-sm text-muted-foreground">
                    💡 <strong>Quick Start:</strong> Most restaurants are onboarded within 2-3 business days
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional CTA */}
          <div className="text-center bg-warm-cream rounded-2xl p-8">
            <h3 className="text-xl font-heading font-bold text-foreground mb-2">
              Questions About How It Works?
            </h3>
            <p className="text-muted-foreground mb-4">
              We're here to explain exactly how you can maintain your current workflow while saving money.
            </p>
            
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;