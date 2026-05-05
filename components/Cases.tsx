

import React, { useState, useEffect, useRef } from 'react';
import { CASES, CONTACT_INFO } from '../constants';

const Cases: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const handleWhatsAppClick = (message: string) => {
    const msg = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsapp}&text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] pt-28 pb-20 font-sans relative overflow-x-hidden">
      <style>{`
        @keyframes fadeUpScale {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Background Gradient */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-[#0A0A0F] via-[#0e0e14] to-[#0A0A0F] -z-50"></div>
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 animate-fade-in tracking-tight drop-shadow-lg">
          CASES DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00D4] via-[#7A00FF] to-[#00D4FF] animate-pulse">SUCESSO</span>
        </h1>
        <p className="text-[#B5B5B5] text-base md:text-lg max-w-2xl mx-auto font-normal">
          Resultados reais de clientes que transformaram seus negócios com a CREALIX.
        </p>
      </div>

      {/* Grid of Cases */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASES.map((item, index) => (
            <div 
              key={item.id}
              className={`
                group relative bg-[#0F0F14]/80 backdrop-blur-sm rounded-[14px] overflow-hidden border border-white/5
                hover:border-[#FF00D4] hover:shadow-[0_0_20px_rgba(255,0,212,0.25)] 
                hover:-translate-y-[6px] hover:scale-[1.04] transition-all duration-300
              `}
              style={{
                animation: `fadeUpScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                animationDelay: `${index * 100}ms`,
                opacity: 0
              }}
            >
              {/* Image Section with Reflection */}
              <div className="h-64 w-full overflow-hidden relative">
                {/* Neon Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F14] via-transparent to-transparent z-20"></div>
                
                {/* Reflection Effect - Animated vertical scan on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite] z-30 mix-blend-overlay"></div>
                
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF00D4]/20 to-[#00D4FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <img 
                  src={item.imageUrl} 
                  alt={item.client} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:blur-[2px] group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 pt-4 relative z-30 bg-[#0F0F14]">
                <div className="flex flex-col mb-4">
                   <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#FF00D4] transition-colors">
                     {item.client}
                   </h3>
                   <span className="text-[#FF00D4] text-sm font-medium uppercase tracking-wide">
                     {item.segment}
                   </span>
                </div>
                
                <p className="text-[#B5B5B5] text-sm leading-relaxed mb-6 min-h-[40px]">
                    {item.services}
                </p>

                <div className="flex flex-wrap gap-4 border-t border-white/10 pt-6">
                   {item.results.map((res, i) => (
                     <div key={i} className="flex flex-col">
                        <div className="text-2xl font-bold text-white group-hover:text-[#00D4FF] transition-colors duration-300 animate-[countUp_0.8s_ease-out_forwards]">
                            {res.value}
                        </div>
                        <div className="text-[#A0A0A0] text-[10px] uppercase font-bold tracking-wider leading-tight">
                            {res.label}
                        </div>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Neon Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent shadow-[0_0_10px_#00D4FF] opacity-70 mb-20"></div>

      {/* Bottom Stats & CTA */}
      <div ref={statsRef} className="max-w-5xl mx-auto px-4 text-center relative mb-12">
         {/* Background Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-64 bg-[#7A00FF]/10 rounded-full blur-[120px] -z-10"></div>

         <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16">
           Números que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00D4] to-[#00D4FF]">impressionam</span>
         </h2>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <StatItem value="60%" label="Crescimento Médio" isVisible={isVisible} delay={0} />
            <StatItem value="390k+" label="Leads Gerados" isVisible={isVisible} delay={200} />
            <StatItem value="97%" label="Satisfação" isVisible={isVisible} delay={400} />
         </div>

         <div className="flex flex-col items-center">
             <h3 className="text-xl md:text-2xl font-bold text-white mb-8">
                 Quer resultados assim?
             </h3>

             <button 
                onClick={() => handleWhatsAppClick("Olá! Vi os cases de sucesso e gostaria de saber como alcançar resultados similares para minha empresa.")}
                className="group relative bg-gradient-to-r from-[#00D4FF] via-[#7A00FF] to-[#FF00D4] text-white font-bold text-lg px-10 py-4 rounded-full shadow-[0_0_20px_rgba(122,0,255,0.4)] hover:shadow-[0_0_40px_rgba(255,0,212,0.6)] hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                   Solicitar Orçamento
                </span>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_linear_infinite]"></div>
             </button>
         </div>
      </div>
    </div>
  );
};

const StatItem: React.FC<{ value: string, label: string, isVisible: boolean, delay: number }> = ({ value, label, isVisible, delay }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  
  // Handle various formats: "4.2x", "Top 3", "350%", "150k+"
  // Match: prefix (non-digits), number (digits + optional dot), suffix (non-digits)
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
  
  const prefix = match ? match[1] : '';
  const numericPart = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : value.replace(/[0-9.]/g, ''); // Fallback

  useEffect(() => {
    if (!isVisible || numericPart === 0) {
        if (numericPart === 0 && isVisible) setIsFinished(true); // Handle non-numeric cases instantly
        return;
    }
    
    let start = 0;
    const duration = 2000;
    
    // If it's a small number (like 4.2), animating by integer steps is jarring.
    // We use a finer step if needed.
    const isFloat = numericPart % 1 !== 0;
    const steps = 60; // 60 frames
    const increment = numericPart / steps;
    
    const intervalTime = duration / steps;
    
    const timeout = setTimeout(() => {
        const timer = setInterval(() => {
            start += increment;
            
            if (start >= numericPart) {
                setDisplayValue(numericPart);
                setIsFinished(true);
                clearInterval(timer);
            } else {
                setDisplayValue(start);
            }
        }, intervalTime);
        return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, numericPart, delay]);

  const formattedValue = (() => {
      if (numericPart === 0) return value; // Fallback for pure text
      if (numericPart % 1 !== 0) return numericPart.toFixed(1); // e.g. 4.2
      return Math.floor(displayValue).toString();
  })();

  return (
    <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
       <div className={`text-5xl md:text-6xl font-black mb-2 drop-shadow-[0_0_15px_rgba(255,0,212,0.3)] transition-colors duration-500 ${isFinished ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#FF00D4] to-[#00D4FF]' : 'text-white'}`}>
          {isVisible ? `${prefix}${formattedValue}${suffix}` : '0'}
       </div>
       <div className="text-[#B5B5B5] font-bold text-sm uppercase tracking-widest">
          {label}
       </div>
    </div>
  );
};

export default Cases;
