
import React from 'react';
import { Bot, CheckCircle2, CalendarClock, Zap, ArrowRight } from 'lucide-react';
import { IMAGES } from '../constants';
import { motion } from 'motion/react';

const SmartSecretary: React.FC = () => {

  const handleCtaClick = () => {
    window.open('https://secretariasmart.crealixmarketing.com/', '_blank');
  };

  return (
    <section id="smart-secretary" className="py-24 bg-[#0A0A0F] relative overflow-hidden">
      {/* Background Ambience - Focused on Cyan/White for the 'Clean Tech' look */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Avatar Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1 flex justify-center"
          >
             <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                
                {/* 1. Main Circular Portal Background */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-b from-cyan-100/10 via-cyan-500/10 to-transparent border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden">
                    {/* Inner spinning ring */}
                    <div className="absolute inset-0 border-[1px] border-cyan-400/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                    {/* Light sweep effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-pulse-slow"></div>
                </div>

                {/* 2. Outer Tech Rings */}
                <div className="absolute inset-0 border border-white/5 rounded-full scale-110 dashed-circle opacity-50"></div>
                <div className="absolute inset-0 border border-cyan-500/10 rounded-full scale-90 animate-[spin_15s_linear_infinite_reverse]"></div>

                {/* 3. The Avatar - USANDO A IMAGEM OFICIAL DA HOME (URL 1) */}
                <div className="relative z-10 w-[85%] h-[85%] rounded-full overflow-hidden flex items-end justify-center mask-image-gradient bg-cyan-950/50">
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-50"></div>
                    <img 
                      src={IMAGES.smartSecretary.home} 
                      alt="Secretária Smart" 
                      loading="lazy"
                      className="relative w-full h-full object-cover object-center drop-shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105 transition-transform duration-700"
                    />
                </div>

                {/* 4. Floating HUD Cards */}
                
                {/* Top Left: STATUS */}
                <div className="absolute top-[15%] -left-[5%] md:left-0 z-20 animate-float" style={{animationDuration: '6s'}}>
                    <div className="glass-panel bg-black/40 backdrop-blur-xl border border-white/10 p-3 pr-5 rounded-lg shadow-lg flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 border border-purple-500/20">
                            <CalendarClock size={20} />
                        </div>
                        <div>
                            <div className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">Status</div>
                            <div className="text-xs font-bold text-white flex items-center gap-1">
                                AGENDANDO...
                                <span className="flex h-2 w-2 relative ml-1">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Right: LEAD QUALIFIED */}
                <div className="absolute bottom-[20%] -right-[5%] md:right-0 z-20 animate-float" style={{animationDuration: '7s', animationDelay: '1s'}}>
                    <div className="glass-panel bg-black/40 backdrop-blur-xl border border-white/10 p-3 pr-5 rounded-lg shadow-lg flex items-center gap-3">
                         <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                            <CheckCircle2 size={20} />
                        </div>
                        <div>
                            <div className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">Lead</div>
                            <div className="text-xs font-bold text-white shadow-cyan-glow">
                                QUALIFICADO
                            </div>
                        </div>
                    </div>
                </div>

             </div>
          </motion.div>

          {/* Copy Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in">
                <Zap size={12} fill="currentColor" />
                Inteligência Artificial Premium
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 leading-[1.1]">
              🤖 Secretária Smart — <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-500">A assistente que nunca dorme.</span>
            </h2>

            <div className="glass-panel bg-gradient-to-b from-white/5 to-transparent p-6 md:p-8 rounded-2xl border border-white/10 mb-8 relative group hover:border-cyan-500/30 transition-colors duration-500">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  A Secretária Smart é a agente de IA da Crealix. Ela realiza agendamentos, suporte, vendas, atendimento ao cliente, triagem inteligente, follow-up automático e qualificação de leads, tudo em tempo real.
                </p>
                {/* Decorative corners */}
                <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-lg group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
                <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-cyan-500/50 rounded-br-lg group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
            </div>

            <button 
              onClick={handleCtaClick}
              className="group relative bg-white text-[#0A0A0F] px-8 py-4 rounded-lg font-bold text-lg shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(6,182,212,0.4)] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden mx-auto lg:mx-0 w-full md:w-auto hover:scale-105"
            >
               <Bot size={24} className="text-cyan-600 group-hover:rotate-12 transition-transform" />
               <span className="relative z-10">Conhecer a Secretária Smart</span>
               <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-100/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SmartSecretary;
