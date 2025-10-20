import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, DollarSign, Users, MapPin, Volume2, VolumeX, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

// Type declarations for external libraries
declare global {
  interface Window {
    responsiveVoice?: {
      speak: (text: string, voice: string, options: {
        rate?: number;
        pitch?: number;
        volume?: number;
        onend?: () => void;
        onerror?: () => void;
      }) => void;
    };
  }
}

// Animated Character Components
const AnimatedDeliveryDriver = ({
  className = "",
  delay = 0
}: {
  className?: string;
  delay?: number;
}) => <div className={`${className}`} style={{
  animationDelay: `${delay}ms`
}}>
    <svg width="80" height="80" viewBox="0 0 80 80" className="animate-pulse">
      {/* Scooter */}
      <g>
        <circle cx="20" cy="60" r="8" fill="currentColor" opacity="0.8" />
        <circle cx="60" cy="60" r="8" fill="currentColor" opacity="0.8" />
        <rect x="25" y="50" width="30" height="15" rx="3" fill="currentColor" opacity="0.6" />
        <rect x="35" y="30" width="15" height="25" rx="2" fill="currentColor" opacity="0.7" />
      </g>
      {/* Driver */}
      <g>
        <circle cx="45" cy="25" r="8" fill="#FF6B35" />
        <rect x="40" y="30" width="10" height="20" rx="2" fill="#FF6B35" />
        <rect x="35" y="15" width="20" height="8" rx="4" fill="#4A90E2" />
      </g>
      {/* Food bag */}
      <rect x="55" y="35" width="12" height="10" rx="2" fill="#FFD700" />
    </svg>
  </div>;
const AnimatedRestaurant = ({
  className = "",
  delay = 0
}: {
  className?: string;
  delay?: number;
}) => <div className={`${className}`} style={{
  animationDelay: `${delay}ms`
}}>
    <svg width="80" height="80" viewBox="0 0 80 80">
      {/* Building */}
      <rect x="15" y="30" width="50" height="40" rx="4" fill="currentColor" opacity="0.8" />
      <rect x="20" y="35" width="10" height="8" rx="1" fill="#FFD700" />
      <rect x="35" y="35" width="10" height="8" rx="1" fill="#FFD700" />
      <rect x="50" y="35" width="10" height="8" rx="1" fill="#FFD700" />
      
      {/* Chef */}
      <g>
        <circle cx="40" cy="20" r="6" fill="#FF6B35" />
        <rect x="37" y="10" width="6" height="8" rx="3" fill="white" />
        <rect x="35" y="25" width="10" height="15" rx="2" fill="white" />
      </g>
      
      {/* Sign */}
      <rect x="25" y="15" width="30" height="8" rx="2" fill="#4A90E2" />
      <text x="40" y="21" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">RESTAURANT</text>
    </svg>
  </div>;
const AnimatedCustomer = ({
  className = "",
  delay = 0
}: {
  className?: string;
  delay?: number;
}) => <div className={`${className}`} style={{
  animationDelay: `${delay}ms`
}}>
    <svg width="80" height="80" viewBox="0 0 80 80">
      {/* Customer */}
      <g>
        <circle cx="40" cy="25" r="10" fill="#FF6B35" />
        <rect x="30" y="35" width="20" height="25" rx="3" fill="#4A90E2" />
        <rect x="25" y="45" width="8" height="15" rx="2" fill="#4A90E2" />
        <rect x="47" y="45" width="8" height="15" rx="2" fill="#4A90E2" />
      </g>
      
      {/* Phone */}
      <rect x="50" y="30" width="8" height="12" rx="2" fill="#333" />
      <rect x="51" y="31" width="6" height="8" rx="1" fill="#FFD700" />
    </svg>
  </div>;

// Voice over script (removed key benefits scene)
const voiceOverScript = [{
  scene: 0,
  text: "Welcome to Savory Synergy - the solution that lowers your delivery commission up to 50%",
  duration: 3000
}, {
  scene: 1,
  text: "Right now, platforms like DoorDash and GrubHub charge you 30% in total fees - that's 15% for marketing plus 15% for delivery. With Savory Synergy, you reduce your delivery commission by up to 50%, saving restaurants anywhere from $5,000 to $50,000 per year depending on delivery volume.",
  duration: 8000
}, {
  scene: 2,
  text: "Here's how seamless it is: Your customer places an order through DoorDash, GrubHub, or your own website. You receive and prepare the order exactly as you always do. Meanwhile, our driver network is automatically notified and dispatched to arrive right when your food is ready. The result? Same great service, but you keep significantly more money in your pocket.",
  duration: 12000
}, {
  scene: 3,
  text: "Ready to reduce your delivery commission by up to 50% and keep more of your money? Get started today and join restaurants saving thousands.",
  duration: 5000
}];
const AnimatedVideo = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [isVoiceAvailable, setIsVoiceAvailable] = useState(false);
  const [currentUtterance, setCurrentUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  // Check if speech synthesis is available
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsVoiceAvailable(true);
    }
  }, []);
  const scenes = [{
    id: 0,
    duration: 4000,
    name: "intro"
  }, {
    id: 1,
    duration: 12000,
    name: "comparison"
  }, {
    id: 2,
    duration: 15000,
    name: "process"
  }, {
    id: 3,
    duration: 6000,
    name: "cta"
  }];

  // Advance to next scene
  const advanceToNextScene = () => {
    if (currentScene < scenes.length - 1) {
      setCurrentScene(currentScene + 1);
    } else {
      setIsPlaying(false);
      setCurrentScene(0);
    }
  };

  // Advanced TTS with multiple provider support
  const playVoiceOver = async (sceneIndex: number) => {
    if (!audioEnabled || typeof window === 'undefined') {
      setTimeout(advanceToNextScene, scenes[sceneIndex].duration);
      return;
    }
    const script = voiceOverScript[sceneIndex];
    if (!script) {
      setTimeout(advanceToNextScene, scenes[sceneIndex].duration);
      return;
    }

    // Stop any existing speech
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    try {
      // Try OpenAI TTS first (if API key is available)
      const openaiApiKey = localStorage.getItem('openai_api_key');
      if (openaiApiKey && (await tryOpenAITTS(script.text))) {
        return;
      }

      // Try ResponsiveVoice (free alternative)
      if (await tryResponsiveVoice(script.text)) {
        return;
      }

      // Fallback to enhanced Web Speech API
      useWebSpeechAPI(script.text);
    } catch (error) {
      console.error('Error playing voice over:', error);
      setTimeout(advanceToNextScene, scenes[sceneIndex].duration);
    }
    async function tryOpenAITTS(text: string): Promise<boolean> {
      try {
        const apiKey = localStorage.getItem('openai_api_key');
        if (!apiKey) return false;
        const response = await fetch('https://api.openai.com/v1/audio/speech', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: 'tts-1',
            input: text,
            voice: 'alloy',
            // More energetic and upbeat than nova
            speed: 1.3 // Faster for more energy
          })
        });
        if (response.ok) {
          const audioBlob = await response.blob();
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          audio.onended = () => {
            URL.revokeObjectURL(audioUrl);
            advanceToNextScene();
          };
          audio.onerror = () => {
            URL.revokeObjectURL(audioUrl);
            useWebSpeechAPI(text);
          };
          await audio.play();
          return true;
        }
      } catch (error) {
        console.log('OpenAI TTS failed, trying next option');
      }
      return false;
    }
    async function tryResponsiveVoice(text: string): Promise<boolean> {
      // Load ResponsiveVoice if not already loaded
      if (!window.responsiveVoice) {
        try {
          const script = document.createElement('script');
          script.src = 'https://code.responsivevoice.org/responsivevoice.js?key=free';
          document.head.appendChild(script);

          // Wait for it to load
          await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject;
            setTimeout(reject, 3000); // 3 second timeout
          });
        } catch (error) {
          return false;
        }
      }
      if (window.responsiveVoice) {
        try {
          window.responsiveVoice.speak(text, "US English Female", {
            rate: 1.4,
            // Much faster for energy
            pitch: 1.5,
            // Higher pitch for enthusiasm  
            volume: 1,
            onend: () => advanceToNextScene(),
            onerror: () => useWebSpeechAPI(text)
          });
          return true;
        } catch (error) {
          console.log('ResponsiveVoice failed, using Web Speech API');
        }
      }
      return false;
    }
    function useWebSpeechAPI(text: string) {
      if (!isVoiceAvailable) {
        setTimeout(advanceToNextScene, scenes[sceneIndex].duration);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(text);

      // Enhanced voice settings for maximum energy and enthusiasm
      utterance.rate = 1.4; // Much faster 
      utterance.pitch = 1.6; // Very high pitch for excitement
      utterance.volume = 1.0;
      utterance.onend = () => {
        setCurrentUtterance(null);
        advanceToNextScene();
      };
      utterance.onerror = () => {
        setCurrentUtterance(null);
        setTimeout(advanceToNextScene, scenes[sceneIndex].duration);
      };

      // Find the best available voice
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(voice =>
      // Try for most natural voices first
      voice.name.includes('Google UK English Female') || voice.name.includes('Microsoft Zira') || voice.name.includes('Samantha') || voice.name.includes('Karen') || voice.name.includes('Serena') || voice.name.includes('Alex') || voice.lang.startsWith('en') && voice.name.toLowerCase().includes('female'));
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
      setCurrentUtterance(utterance);
      window.speechSynthesis.speak(utterance);
    }
  };
  useEffect(() => {
    if (!isPlaying) return;

    // Play voice over for current scene (which will handle scene advancement)
    playVoiceOver(currentScene);

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      if (currentUtterance) {
        setCurrentUtterance(null);
      }
    };
  }, [currentScene, isPlaying]); // Removed audioEnabled from dependencies to prevent restart

  const startAnimation = () => {
    setIsPlaying(true);
    setCurrentScene(0);
  };
  const stopAnimation = () => {
    setIsPlaying(false);
    setCurrentScene(0);
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (currentUtterance) {
      setCurrentUtterance(null);
    }
  };
  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
  };
  const goToPreviousScene = () => {
    if (currentScene > 0) {
      setIsPlaying(false);
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      setCurrentScene(currentScene - 1);
    }
  };
  const goToNextScene = () => {
    if (currentScene < scenes.length - 1) {
      setIsPlaying(false);
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      setCurrentScene(currentScene + 1);
    }
  };
  return <div className="w-full max-w-4xl mx-auto space-y-4">
      <Card className="relative overflow-hidden bg-gradient-primary border-0 h-96">
        {/* Scene 0: Intro */}
        {currentScene === 0 && <div className="absolute inset-0 flex items-center justify-center bg-gradient-primary">
            <div className={`text-center transition-all duration-1000 ${isPlaying ? 'animate-fade-in' : ''}`}>
              <h1 className="text-4xl font-logo text-white mb-4 drop-shadow-lg">
                <span className="text-white font-bold text-shadow-lg">Savory</span>{" "}
                <span className="text-white font-bold text-shadow-lg">Synergy</span>
              </h1>
              <p className="text-xl text-white/90">Save Up to 50% on Delivery Commissions</p>
            </div>
          </div>}

        {/* Scene 1: Comparison */}
        {currentScene === 1 && <div className="absolute inset-0 p-8 bg-gradient-warm">
            <h2 className="text-2xl font-bold text-center mb-8 text-warm-brown">Commission Comparison</h2>
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

              {/* Savory Synergy Side */}
              <div className={`space-y-4 transition-all duration-1000 delay-500 ${isPlaying ? 'animate-slide-in-right' : ''}`}>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-warm-brown mb-2">With Savory Synergy</h3>
                  <AnimatedDeliveryDriver className="mx-auto mb-4 text-primary" delay={1000} />
                  <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="text-white" size={32} />
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-warm">
                  <p className="text-primary font-semibold">Up to 50% Lower Costs</p>
                  <p className="text-sm text-muted-foreground">Reduced delivery commission</p>
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
          </div>}

        {/* Scene 2: Process Flow */}
        {currentScene === 2 && <div className="absolute inset-0 p-8 bg-gradient-warm">
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
                <p className="text-sm font-semibold text-warm-brown">Our Partner Network Delivers</p>
              </div>
            </div>

            {/* Benefits Strip */}
            <div className={`mt-12 text-center transition-all duration-1000 delay-2500 ${isPlaying ? 'animate-scale-in' : ''}`}>
              <div className="bg-white p-4 rounded-lg shadow-warm inline-block">
                <p className="text-primary font-bold">Reduced Commission • Higher Profits</p>
              </div>
            </div>
          </div>}

        {/* Scene 3: Call to Action */}
        {currentScene === 3 && <div className="absolute inset-0 flex items-center justify-center bg-gradient-primary">
            <div className={`text-center transition-all duration-1000 ${isPlaying ? 'animate-scale-in' : ''}`}>
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Save Up to 50%?</h2>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                Get Started Today
              </Button>
              <p className="text-white/80 mt-4">Join restaurants saving thousands</p>
            </div>
          </div>}

        {/* Navigation Controls */}
        <div className="absolute bottom-4 left-4 space-x-2">
          <Button onClick={goToPreviousScene} variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30" disabled={currentScene === 0}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button onClick={goToNextScene} variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30" disabled={currentScene === scenes.length - 1}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Control Buttons */}
        <div className="absolute bottom-4 right-4 space-x-2">
          <Button onClick={toggleAudio} variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30" disabled={!isVoiceAvailable}>
            {audioEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </Button>
          
          <Button onClick={isPlaying ? stopAnimation : startAnimation} variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <div className="h-full bg-white transition-all duration-300" style={{
          width: `${(currentScene + 1) / scenes.length * 100}%`
        }} />
        </div>
      </Card>
      
      {/* Scene Description */}
      {currentScene < voiceOverScript.length && <Card className="p-4 bg-muted/50">
          <p className="text-sm text-muted-foreground italic">
            "{voiceOverScript[currentScene]?.text}"
          </p>
        </Card>}

      {/* TTS Setup Info */}
      
    </div>;
};
export default AnimatedVideo;