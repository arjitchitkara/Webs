
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building } from 'lucide-react';

type LogoProps = {
  variant?: 'default' | 'footer';
};

const Logo = ({ variant = 'default' }: LogoProps) => {
  const isFooter = variant === 'footer';
  const [taglineIndex, setTaglineIndex] = useState(0);
  const taglines = ["Innovative Design", "Expert Construction", "Building the Future"];
  
  // Cycle through taglines automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Link to="/" className="flex items-center group">
      <div className={`flex items-center gap-3 ${isFooter ? '' : 'py-1'}`}>
        {/* Animated logo mark */}
        <div className="relative">
          <div className={`relative flex items-center justify-center ${isFooter ? 'w-7 h-7' : 'w-9 h-9'} 
            bg-gradient-to-tr from-blue-500 to-white rounded-md 
            animate-bg-pan-slow shadow-lg shadow-white/10`}>
            <Building 
              className={`${isFooter ? 'w-4 h-4' : 'w-5 h-5'} text-construction-dark animate-pulse`} 
              strokeWidth={3} 
            />
            <div className="absolute inset-0 border border-white/40 rounded-md animate-rotate-slow opacity-70"></div>
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500/20 to-white/20 blur-sm rounded-md"></div>
          </div>
        </div>
        
        <div className="flex flex-col">
          {/* Company name */}
          <span 
            className={`font-display font-bold transition-all duration-300 ${
              isFooter ? 'text-lg' : 'text-xl'
            } text-white tracking-tight`}
          >
            Chitkara Constructions
          </span>
          
          {/* Animated tagline */}
          {!isFooter && (
            <span className="text-xs text-white/70 font-light overflow-hidden h-4 relative">
              {taglines.map((tagline, index) => (
                <span 
                  key={tagline}
                  className={`absolute left-0 transition-all duration-500 ${
                    index === taglineIndex ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-2'
                  }`}
                >
                  {tagline}
                </span>
              ))}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Logo;
