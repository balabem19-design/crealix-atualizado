
import React from 'react';
import { PRICING_PLANS, CONTACT_INFO } from '../constants';
import { Check, Sparkles, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  const handleSubscribe = (planName: string) => {
     const msg = encodeURIComponent(`Olá! Gostaria de saber mais sobre o plano ${planName} da Crealix.`);
     window.open(`https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsapp}&text=${msg}`, '_blank');
  };

  const getPlanStyles = (name: string, isPopular?: boolean) => {
    switch (name) {
      case 'Start Up':
        return 'bg-[#08080a] border-white/10 animate-breathe hover:animate-none hover:scale-105 hover:border-[#00D4FF]/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] transition-all duration-[300ms]';
      case 'Traction AI':
        return 'bg-[#0c0c12] border-transparent ring-1 ring-pink-500/50 shadow-[0_0_40px_rgba(236,72,153,0.15)] hover:scale-[1.05] hover:shadow-[0_0_60px_rgba(236,72,153,0.6)] transition-all duration-[250ms] z-10 lg:-translate-y-4 hover:animate-vibrate';
      case 'Scale Pro':
        return 'bg-[#08080a] border-white/10 animate-breathe hover:animate-none hover:scale-[1.06] hover:border-[#7A00FF]/50 hover:shadow-[0_0_30px_rgba(122,0,255,0.3)] transition-all duration-[300ms]';
      default:
        return 'bg-[#08080a] border-white/10 animate-breathe hover:animate-none hover:scale-105';
    }
  };

  return (
    <section id="plans" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-4 text-white uppercase">
            ACELERE SEU NEGÓCIO COM A <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">INTELIGÊNCIA CERTA</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Do básico bem feito à escala total. Estratégias desenhadas para cada estágio do seu crescimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 lg:items-end max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`
                relative p-8 rounded-2xl border flex flex-col cursor-pointer group h-full overflow-hidden
                ${getPlanStyles(plan.name, plan.isPopular)}
              `}
              onClick={() => handleSubscribe(plan.name)}
            >
              {/* Light Trail Effect (Inside Card - Hover Only) */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                  <div className="absolute -top-full left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent group-hover:animate-[lightTrail_1.5s_ease-in-out_infinite]"></div>
              </div>
              
              {/* Idle Pulsing Light at Top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm group-hover:opacity-0 transition-opacity duration-500 animate-pulse"></div>

              {/* Gradient Border for Popular Plan */}
              {plan.isPopular && (
                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 -z-10 opacity-100">
                   <div className="w-full h-full bg-[#0c0c12] rounded-2xl"></div>
                </div>
              )}

              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                   <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1 whitespace-nowrap border border-white/10">
                      <Sparkles size={10} fill="currentColor" />
                      <div className="flex flex-col items-center leading-none">
                         <span>Melhor</span>
                         <span>Custo-Benefício</span>
                      </div>
                   </div>
                </div>
              )}

              <div className="mb-6 mt-2 relative z-10">
                <h3 className="text-xl font-bold mb-2 text-white tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">{plan.name}</h3>
                
                <div className="flex items-baseline gap-1 mb-4">
                  <span className={`font-black ${plan.isPopular ? 'text-pink-500' : 'text-purple-600'} ${plan.price === 'Sob Consulta' ? 'text-2xl' : 'text-4xl'}`}>
                    {plan.price}
                  </span>
                  {plan.price !== 'Sob Consulta' && <span className="text-gray-500 text-xs font-medium">/mês</span>}
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed min-h-[60px]">
                  {plan.description}
                </p>
                
                {plan.minimumContract && (
                    <p className="text-[10px] text-gray-500 mt-2 font-medium border-t border-white/5 pt-2">
                        * Contrato mínimo: {plan.minimumContract}
                    </p>
                )}
              </div>

              {plan.isPopular && (
                 <div className="bg-pink-500/5 border border-pink-500/20 rounded-lg p-3 mb-6">
                    <p className="text-[10px] text-pink-400 font-semibold leading-tight flex gap-2 items-start">
                      <Zap size={12} className="shrink-0 mt-0.5" />
                      A escolha inteligente para quem quer vender mais rápido.
                    </p>
                 </div>
              )}

              <div className={`h-px w-full mb-6 ${plan.isPopular ? 'bg-white/10' : 'bg-white/5'}`}></div>

              <ul className="space-y-4 mb-8 flex-grow relative z-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 leading-snug">
                    <div className={`mt-0.5 p-0.5 rounded-full shrink-0 ${plan.isPopular ? 'text-pink-500' : 'text-blue-500'}`}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`
                  w-full py-4 rounded-lg font-bold text-sm transition-all duration-300 mt-auto relative overflow-hidden z-10 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] uppercase tracking-wide
                  ${plan.isPopular 
                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg hover:shadow-pink-500/25' 
                    : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white shadow-lg'
                  }
                `}
              >
                <span className="relative z-10">{plan.ctaText || 'Contratar'}</span>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_linear_infinite]"></div>
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 text-gray-500 text-xs font-medium">
          Valores referentes à gestão estratégica. Investimento em mídia (anúncios) pago separadamente às plataformas.
        </div>
      </div>
    </section>
  );
};

export default Pricing;
