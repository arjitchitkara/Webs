
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const heroTexts = [
    "Building the Future",
    "Innovative Design",
    "Expert Construction"
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    
    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="noise-bg"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-construction-dark z-10"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale"
        >
          <source src="https://cdn.gpteng.co/videos/construction-timelapse.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="container-custom relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className={`heading-xl text-white mb-4 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block overflow-hidden relative">
              <span className="block">{heroTexts[currentTextIndex]}</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white animate-text-reveal"></span>
            </span>
            
            <span className="block text-white mt-2">
              with <span className="text-white font-bold">Excellence</span> & Innovation
            </span>
          </h1>
          
          <p 
            className={`text-lg text-gray-300 mb-8 transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            A team of architects, engineers, draughtsmen, valuers, and landscape architects 
            dedicated to turning your vision into reality with precision and expertise.
          </p>
          
          <div 
            className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button className="btn-primary cursor-grow group">
              Explore Our Projects 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button className="btn-outline cursor-grow">
              Our Services
            </Button>
          </div>

          <div 
            className={`mt-16 flex items-center justify-center gap-8 transition-all duration-1000 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center">
              <p className="text-3xl font-display font-bold text-white">25+</p>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div className="h-12 w-px bg-gray-700"></div>
            <div className="text-center">
              <p className="text-3xl font-display font-bold text-white">350+</p>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
            <div className="h-12 w-px bg-gray-700"></div>
            <div className="text-center">
              <p className="text-3xl font-display font-bold text-white">45+</p>
              <p className="text-sm text-gray-400">Expert Professionals</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center items-start p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
