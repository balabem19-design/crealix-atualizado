import React from 'react';
import { MessageCircle } from 'lucide-react';
import { IMAGES } from '../constants';
import { motion } from 'motion/react';

interface CtaProps {
  onContactClick: () => void;
}

const CallToAction: React.FC<CtaProps> = ({ onContactClick }) => {
  return (
    <section className="relative py-20 lg:py-24 bg-[#020202] overflow-hidden">
        {/* Background Stripes */}
       <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'linear-gradient(45deg, #111 25%, transparent 25%, transparent 50%, #111 50%, #111 75%, transparent 75%, transparent)', backgroundSize: '60px 60px'}}></div>
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-crealix-purple/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-12 lg:gap-16 relative z-10">
        
        {/* Robot Image - Desktop Only */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1 relative hidden lg:flex justify-center lg:justify-start"
        >
           <div className="relative z-10 w-[180px] sm:w-[220px] md:w-[250px]"> 
               <div className="absolute inset-0 bg-gradient-to-t from-crealix-blue/30 to-crealix-purple/30 blur-[60px] rounded-full opacity-60"></div>
               <img 
                src={IMAGES.robot} 
                alt="AI Robot Crealix" 
                loading="lazy"
                className="w-full h-auto relative z-10 drop-shadow-[0_0_30px_rgba(0,212,255,0.2)] animate-float"
               />
           </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="order-1 lg:order-2 text-center lg:text-left"
        >
          
          <div className="flex flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6 mb-6">
              {/* Robot Image - Mobile Only */}
              <div className="lg:hidden relative w-[100px] sm:w-[120px] flex-shrink-0">
                  <div className="relative z-10">
                      <div className="absolute inset-0 bg-gradient-to-t from-crealix-blue/30 to-crealix-purple/30 blur-[40px] rounded-full opacity-60"></div>
                      <img 
                          src={IMAGES.robot} 
                          alt="AI Robot Crealix" 
                          loading="lazy"
                          className="w-full h-auto relative z-10 drop-shadow-[0_0_20px_rgba(0,212,255,0.2)] animate-float"
                      />
                  </div>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-black leading-[1] text-white">
                VAMOS LEVAR SUA<br />
                MARCA PARA O<br />
                <span className="text-gradient">PRÓXIMO NÍVEL</span>
              </h2>
          </div>

          <p className="text-base md:text-lg text-gray-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            Entre em contato e descubra como unir automação, branding e performance em uma única estratégia.
          </p>
          <div className="flex flex-col items-center lg:items-start gap-4">
            <button 
              onClick={onContactClick}
              className="group relative w-full sm:w-auto bg-gradient-to-r from-crealix-purple to-crealix-pink px-8 py-5 rounded-lg font-bold text-white text-lg shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(236,72,153,0.5)] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
            >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                <MessageCircle size={24} fill="currentColor" />
                Falar com a Equipe Crealix Agora
            </button>
            <p className="text-xs text-gray-500 flex items-center gap-2 mt-2">
                Resposta em até 24h • Consultoria gratuita • Sem compromisso
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
