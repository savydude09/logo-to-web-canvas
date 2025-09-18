import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, DollarSign, Users, MapPin } from "lucide-react";

const AnimatedVideo = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const scenes = [
    { id: 0, duration: 3000, name: "intro" },
    { id: 1, duration: 8000, name: "comparison" },
    { id: 2, duration: 12000, name: "process" },
    { id: 3, duration: 10000, name: "benefits" },
    { id: 4, duration: 5000, name: "cta" }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      if (currentScene < scenes.length - 1) {
        setCurrentScene(currentScene + 1);
      } else {
        setIsPlaying(false);
        setCurrentScene(0);
      }
    }, scenes[currentScene].duration);

    return () => clearTimeout(timer);
  }, [currentScene, isPlaying]);

  const startAnimation = () => {
    setIsPlaying(true);
    setCurrentScene(0);
  };

  const stopAnimation = () => {
    setIsPlaying(false);
    setCurrentScene(0);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="relative overflow-hidden bg-gradient-primary border-0 h-96">
        {/* Scene 0: Intro */}
        {currentScene === 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-primary">
            <div className={`text-center transition-all duration-1000 ${isPlaying ? 'animate-fade-in' : ''}`}>
              <h1 className="text-4xl font-logo text-white mb-4">
                <span className="bg-gradient-sunset bg-clip-text text-transparent">Savory</span>{" "}
                <span className="text-warm-cream">Synergy</span>
              </h1>
              <p className="text-xl text-white/90">Save Up to 50% on Delivery Costs</p>
            </div>
          </div>
        )}

        {/* Scene 1: Comparison */}
        {currentScene === 1 && (
          <div className="absolute inset-0 p-8 bg-gradient-warm">
            <h2 className="text-2xl font-bold text-center mb-8 text-warm-brown">Cost Comparison</h2>
            <div className="grid grid-cols-2 gap-8">
              {/* DoorDash/GrubHub Side */}
              <div className={`space-y-4 transition-all duration-1000 ${isPlaying ? 'animate-slide-in-right' : ''}`}>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-warm-brown mb-2">With DoorDash/GrubHub</h3>
                  <div className="w-16 h-16 mx-auto bg-destructive rounded-full flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">✕</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-warm">
                  <p className="text-destructive font-semibold">30% Total Fees</p>
                  <p className="text-sm text-muted-foreground">15% Marketing + 15% Delivery</p>
                </div>
              </div>

              {/* Your Drivers Side */}
              <div className={`space-y-4 transition-all duration-1000 delay-500 ${isPlaying ? 'animate-slide-in-right' : ''}`}>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-warm-brown mb-2">With Your Drivers</h3>
                  <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="text-white" size={32} />
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-warm">
                  <p className="text-primary font-semibold">15% Marketing Only</p>
                  <p className="text-sm text-muted-foreground">No delivery commission</p>
                </div>
              </div>
            </div>
            
            {/* Savings Counter */}
            <div className={`text-center mt-8 transition-all duration-1000 delay-1000 ${isPlaying ? 'animate-scale-in' : ''}`}>
              <div className="bg-white p-6 rounded-lg shadow-glow inline-block">
                <p className="text-2xl font-bold text-primary">$60,000 - $120,000</p>
                <p className="text-warm-brown">Average Savings Per Year</p>
              </div>
            </div>
          </div>
        )}

        {/* Scene 2: Process Flow */}
        {currentScene === 2 && (
          <div className="absolute inset-0 p-8 bg-gradient-warm">
            <h2 className="text-2xl font-bold text-center mb-8 text-warm-brown">How It Works</h2>
            <div className="flex items-center justify-between">
              {/* Customer */}
              <div className={`text-center transition-all duration-1000 ${isPlaying ? 'animate-fade-in' : ''}`}>
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-2">
                  <Users className="text-white" size={32} />
                </div>
                <p className="text-sm font-semibold text-warm-brown">Customer Orders</p>
              </div>

              {/* Arrow 1 */}
              <div className={`transition-all duration-1000 delay-500 ${isPlaying ? 'animate-slide-in-right' : ''}`}>
                <div className="w-16 h-0.5 bg-primary"></div>
              </div>

              {/* Restaurant */}
              <div className={`text-center transition-all duration-1000 delay-1000 ${isPlaying ? 'animate-fade-in' : ''}`}>
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl">🍽️</span>
                </div>
                <p className="text-sm font-semibold text-warm-brown">Restaurant Prepares</p>
              </div>

              {/* Arrow 2 */}
              <div className={`transition-all duration-1000 delay-1500 ${isPlaying ? 'animate-slide-in-right' : ''}`}>
                <div className="w-16 h-0.5 bg-primary"></div>
              </div>

              {/* Driver */}
              <div className={`text-center transition-all duration-1000 delay-2000 ${isPlaying ? 'animate-fade-in' : ''}`}>
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl">🏍️</span>
                </div>
                <p className="text-sm font-semibold text-warm-brown">Your Driver Delivers</p>
              </div>
            </div>

            {/* Benefits Strip */}
            <div className={`mt-12 text-center transition-all duration-1000 delay-2500 ${isPlaying ? 'animate-scale-in' : ''}`}>
              <div className="bg-white p-4 rounded-lg shadow-warm inline-block">
                <p className="text-primary font-bold">No Third-Party Fees • Full Control • Higher Profits</p>
              </div>
            </div>
          </div>
        )}

        {/* Scene 3: Benefits */}
        {currentScene === 3 && (
          <div className="absolute inset-0 p-8 bg-gradient-sunset">
            <h2 className="text-2xl font-bold text-center mb-8 text-white">Key Benefits</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className={`bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-all duration-1000 ${isPlaying ? 'animate-fade-in' : ''}`}>
                <DollarSign className="text-white mb-3" size={32} />
                <h3 className="text-white font-semibold mb-2">200% More Orders</h3>
                <p className="text-white/80 text-sm">Guaranteed order increase with our network</p>
              </div>
              
              <div className={`bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-all duration-1000 delay-500 ${isPlaying ? 'animate-fade-in' : ''}`}>
                <MapPin className="text-white mb-3" size={32} />
                <h3 className="text-white font-semibold mb-2">Control Delivery Area</h3>
                <p className="text-white/80 text-sm">Set your own delivery boundaries</p>
              </div>
              
              <div className={`bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-all duration-1000 delay-1000 ${isPlaying ? 'animate-fade-in' : ''}`}>
                <CheckCircle className="text-white mb-3" size={32} />
                <h3 className="text-white font-semibold mb-2">Handle Own Orders</h3>
                <p className="text-white/80 text-sm">Process orders from your website/POS</p>
              </div>
              
              <div className={`bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-all duration-1000 delay-1500 ${isPlaying ? 'animate-fade-in' : ''}`}>
                <Users className="text-white mb-3" size={32} />
                <h3 className="text-white font-semibold mb-2">Trusted Network</h3>
                <p className="text-white/80 text-sm">Reliable drivers you can count on</p>
              </div>
            </div>
          </div>
        )}

        {/* Scene 4: Call to Action */}
        {currentScene === 4 && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-primary">
            <div className={`text-center transition-all duration-1000 ${isPlaying ? 'animate-scale-in' : ''}`}>
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Save 50%?</h2>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              >
                Get Started Today
              </Button>
              <p className="text-white/80 mt-4">Join hundreds of restaurants saving thousands</p>
            </div>
          </div>
        )}

        {/* Control Buttons */}
        <div className="absolute bottom-4 right-4 space-x-2">
          {!isPlaying ? (
            <Button onClick={startAnimation} variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
              ▶ Play
            </Button>
          ) : (
            <Button onClick={stopAnimation} variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
              ⏹ Stop
            </Button>
          )}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <div 
            className="h-full bg-white transition-all duration-300"
            style={{ 
              width: isPlaying ? `${((currentScene + 1) / scenes.length) * 100}%` : '0%'
            }}
          />
        </div>
      </Card>
    </div>
  );
};

export default AnimatedVideo;