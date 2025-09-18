import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, DollarSign, Users, MapPin, Volume2, VolumeX } from "lucide-react";

// Animated Character Components
const AnimatedDeliveryDriver = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div className={`${className}`} style={{ animationDelay: `${delay}ms` }}>
    <svg width="80" height="80" viewBox="0 0 80 80" className="animate-bounce">
      {/* Scooter */}
      <g>
        <circle cx="20" cy="60" r="8" fill="currentColor" opacity="0.8" />
        <circle cx="60" cy="60" r="8" fill="currentColor" opacity="0.8" />
        <rect x="25" y="50" width="30" height="15" rx="3" fill="currentColor" opacity="0.6" />
        <rect x="35" y="30" width="15" height="25" rx="2" fill="currentColor" opacity="0.7" />
      </g>
      {/* Driver */}
      <g className="animate-pulse">
        <circle cx="45" cy="25" r="8" fill="#FF6B35" />
        <rect x="40" y="30" width="10" height="20" rx="2" fill="#FF6B35" />
        <rect x="35" y="15" width="20" height="8" rx="4" fill="#4A90E2" />
      </g>
      {/* Food bag */}
      <rect x="55" y="35" width="12" height="10" rx="2" fill="#FFD700" className="animate-pulse" />
    </svg>
  </div>
);

const AnimatedRestaurant = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div className={`${className}`} style={{ animationDelay: `${delay}ms` }}>
    <svg width="80" height="80" viewBox="0 0 80 80">
      {/* Building */}
      <rect x="15" y="30" width="50" height="40" rx="4" fill="currentColor" opacity="0.8" />
      <rect x="20" y="35" width="10" height="8" rx="1" fill="#FFD700" className="animate-pulse" />
      <rect x="35" y="35" width="10" height="8" rx="1" fill="#FFD700" className="animate-pulse" />
      <rect x="50" y="35" width="10" height="8" rx="1" fill="#FFD700" className="animate-pulse" />
      
      {/* Chef */}
      <g className="animate-bounce" style={{ animationDelay: `${delay + 500}ms` }}>
        <circle cx="40" cy="20" r="6" fill="#FF6B35" />
        <rect x="37" y="10" width="6" height="8" rx="3" fill="white" />
        <rect x="35" y="25" width="10" height="15" rx="2" fill="white" />
      </g>
      
      {/* Sign */}
      <rect x="25" y="15" width="30" height="8" rx="2" fill="#4A90E2" />
      <text x="40" y="21" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">RESTAURANT</text>
    </svg>
  </div>
);

const AnimatedCustomer = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div className={`${className}`} style={{ animationDelay: `${delay}ms` }}>
    <svg width="80" height="80" viewBox="0 0 80 80">
      {/* Customer */}
      <g className="animate-pulse">
        <circle cx="40" cy="25" r="10" fill="#FF6B35" />
        <rect x="30" y="35" width="20" height="25" rx="3" fill="#4A90E2" />
        <rect x="25" y="45" width="8" height="15" rx="2" fill="#4A90E2" />
        <rect x="47" y="45" width="8" height="15" rx="2" fill="#4A90E2" />
      </g>
      
      {/* Phone */}
      <rect x="50" y="30" width="8" height="12" rx="2" fill="#333" className="animate-bounce" />
      <rect x="51" y="31" width="6" height="8" rx="1" fill="#FFD700" className="animate-pulse" />
    </svg>
  </div>
);

// Voice over script
const voiceOverScript = [
  {
    scene: 0,
    text: "Welcome to Savory Synergy - the solution that lowers your delivery commission up to 50%",
    duration: 3000
  },
  {
    scene: 1,
    text: "Right now, platforms like DoorDash and GrubHub charge you 30% in total fees - that's 15% for marketing plus 15% for delivery. With Savory Synergy, you only pay 15% marketing commission and handle deliveries with your own drivers, saving you thousands every month.",
    duration: 8000
  },
  {
    scene: 2,
    text: "Here's how it works: Your customer places an order through the app, your restaurant receives and prepares it, then your dedicated driver picks up and delivers - giving you complete control over the entire process.",
    duration: 12000
  },
  {
    scene: 3,
    text: "The benefits are clear: 200% more orders guaranteed, full control over your delivery area, the ability to handle orders from your own website, and access to our trusted driver network.",
    duration: 10000
  },
  {
    scene: 4,
    text: "Ready to save 50% on delivery costs and take control of your delivery operations? Get started today and join hundreds of restaurants already saving thousands.",
    duration: 5000
  }
];

const AnimatedVideo = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showApiInput, setShowApiInput] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

  const scenes = [
    { id: 0, duration: 3000, name: "intro" },
    { id: 1, duration: 8000, name: "comparison" },
    { id: 2, duration: 12000, name: "process" },
    { id: 3, duration: 10000, name: "benefits" },
    { id: 4, duration: 5000, name: "cta" }
  ];

  // Generate voice over audio
  const generateVoiceOver = async (text: string): Promise<string | null> => {
    if (!apiKey) return null;
    
    try {
      const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/9BWtsMINqrJLrRacOk9x', {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': apiKey
        },
        body: JSON.stringify({
          text,
          model_id: 'eleven_multilingual_v2',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5
          }
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate audio');
      }

      const audioBlob = await response.blob();
      return URL.createObjectURL(audioBlob);
    } catch (error) {
      console.error('Error generating voice over:', error);
      return null;
    }
  };

  // Play voice over for current scene
  const playVoiceOver = async (sceneIndex: number) => {
    if (!audioEnabled || !apiKey) return;
    
    const script = voiceOverScript[sceneIndex];
    if (!script) return;

    try {
      const audioUrl = await generateVoiceOver(script.text);
      if (audioUrl) {
        const audio = new Audio(audioUrl);
        setCurrentAudio(audio);
        audio.play();
      }
    } catch (error) {
      console.error('Error playing voice over:', error);
    }
  };

  useEffect(() => {
    if (!isPlaying) return;

    // Play voice over for current scene
    if (audioEnabled && currentScene < voiceOverScript.length) {
      playVoiceOver(currentScene);
    }

    const timer = setTimeout(() => {
      if (currentScene < scenes.length - 1) {
        setCurrentScene(currentScene + 1);
      } else {
        setIsPlaying(false);
        setCurrentScene(0);
      }
    }, scenes[currentScene].duration);

    return () => {
      clearTimeout(timer);
      if (currentAudio) {
        currentAudio.pause();
        setCurrentAudio(null);
      }
    };
  }, [currentScene, isPlaying, audioEnabled, apiKey]);

  const startAnimation = () => {
    setIsPlaying(true);
    setCurrentScene(0);
  };

  const stopAnimation = () => {
    setIsPlaying(false);
    setCurrentScene(0);
    if (currentAudio) {
      currentAudio.pause();
      setCurrentAudio(null);
    }
  };

  const toggleAudio = () => {
    if (!audioEnabled && !apiKey) {
      setShowApiInput(true);
    } else {
      setAudioEnabled(!audioEnabled);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* API Key Input */}
      {showApiInput && (
        <Card className="p-4 bg-primary/5 border-primary/20">
          <div className="space-y-3">
            <Label htmlFor="apiKey" className="text-sm font-medium">
              ElevenLabs API Key (for voice over)
            </Label>
            <div className="flex gap-2">
              <Input
                id="apiKey"
                type="password"
                placeholder="Enter your ElevenLabs API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={() => {
                  if (apiKey) {
                    setAudioEnabled(true);
                    setShowApiInput(false);
                  }
                }}
                disabled={!apiKey}
              >
                Enable Audio
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Get your API key from{" "}
              <a href="https://elevenlabs.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                elevenlabs.io
              </a>
            </p>
          </div>
        </Card>
      )}

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
                  <AnimatedDeliveryDriver className="mx-auto mb-4" delay={500} />
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
                  <AnimatedDeliveryDriver className="mx-auto mb-4 text-primary" delay={1000} />
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
                <AnimatedCustomer delay={0} />
                <p className="text-sm font-semibold text-warm-brown">Customer Orders</p>
              </div>

              {/* Arrow 1 */}
              <div className={`transition-all duration-1000 delay-500 ${isPlaying ? 'animate-slide-in-right' : ''}`}>
                <div className="w-16 h-0.5 bg-primary"></div>
              </div>

              {/* Restaurant */}
              <div className={`text-center transition-all duration-1000 delay-1000 ${isPlaying ? 'animate-fade-in' : ''}`}>
                <AnimatedRestaurant delay={1000} />
                <p className="text-sm font-semibold text-warm-brown">Restaurant Prepares</p>
              </div>

              {/* Arrow 2 */}
              <div className={`transition-all duration-1000 delay-1500 ${isPlaying ? 'animate-slide-in-right' : ''}`}>
                <div className="w-16 h-0.5 bg-primary"></div>
              </div>

              {/* Driver */}
              <div className={`text-center transition-all duration-1000 delay-2000 ${isPlaying ? 'animate-fade-in' : ''}`}>
                <AnimatedDeliveryDriver className="text-primary" delay={2000} />
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
          <Button 
            onClick={toggleAudio} 
            variant="outline" 
            size="sm"
            className="bg-white/20 border-white/30 text-white hover:bg-white/30"
          >
            {audioEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </Button>
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
      
      {/* Scene Description */}
      {currentScene < voiceOverScript.length && (
        <Card className="p-4 bg-muted/50">
          <p className="text-sm text-muted-foreground italic">
            "{voiceOverScript[currentScene]?.text}"
          </p>
        </Card>
      )}
    </div>
  );
};

export default AnimatedVideo;