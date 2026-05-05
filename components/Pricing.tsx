
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { PRICING_PLANS, CONTACT_INFO } from '../constants';
import { Check, Sparkles, Zap, X, List, Columns } from 'lucide-react';
import { PricingPlan } from '../types';
import { motion, AnimatePresence } from 'motion/react';

const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [showCompare, setShowCompare] = useState(false);

  const handleSubscribe = (e: React.MouseEvent, planName: string) => {
     e.stopPropagation();
     const msg = encodeURIComponent(`Olá! Gostaria de saber mais sobre o plano ${planName} da Crealix.`);
     window.open(`https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsapp}&text=${msg}`, '_blank');
  };

  const handleCompare = (e: React.MouseEvent) => {
     e.stopPropagation();
     setShowCompare(true);
  };

  const getPlanStyles = (name: string, isPopular?: boolean) => {
    switch (name) {
      case 'Start Up':
        return 'bg-[#08080a] border-white/10 hover:border-[#00D4FF]/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]';
      case 'Traction AI':
        return 'bg-[#0c0c12] border-transparent ring-2 ring-crealix-pink shadow-[0_0_50px_rgba(255,0,212,0.25)] hover:shadow-[0_0_80px_rgba(255,0,212,0.6)] z-10 lg:-translate-y-4';
      case 'Scale Pro':
        return 'bg-[#08080a] border-white/10 hover:border-[#7A00FF]/50 hover:shadow-[0_0_30px_rgba(122,0,255,0.25)]';
      default:
        return 'bg-[#08080a] border-white/10';
    }
  };

  return (
    <section id="plans" className="py-24 bg-[#050505] relative overflow-hidden text-white">
      {/* Cinematic Background Light */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-crealix-pink/5 rounded-full blur-[150px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-crealix-purple/5 rounded-full blur-[150px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-7xl font-display font-black mb-6 uppercase tracking-tighter">
            ACELERE SEU NEGÓCIO COM A <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">INTELIGÊNCIA CERTA</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            O ecossistema completo para quem não aceita ser apenas mais um no digital.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 lg:items-end max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`
                relative p-8 rounded-3xl border flex flex-col group h-full overflow-hidden transition-all duration-500
                ${getPlanStyles(plan.name, plan.isPopular)}
              `}
            >
              <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity duration-700"></div>
              
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                   <motion.div 
                    animate={{ scale: [1, 1.05, 1], boxShadow: ['0 0 20px rgba(255,0,212,0.4)', '0 0 30px rgba(255,0,212,0.6)', '0 0 20px rgba(255,0,212,0.4)'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-gradient-to-r from-pink-500 via-crealix-pink to-purple-600 text-white text-[10px] font-black px-6 py-2 rounded-full flex items-center gap-2 whitespace-nowrap border border-white/20 uppercase tracking-widest"
                   >
                      <Sparkles size={12} fill="currentColor" className="text-yellow-400" />
                      <span>⭐ MAIS ESCOLHIDO</span>
                   </motion.div>
                </div>
              )}

              <div className="mb-6 mt-2 relative z-10">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-crealix-blue transition-colors duration-300">{plan.name}</h3>
                
                <div className="flex items-baseline gap-1 mb-4">
                  <span className={`font-black tracking-tight ${plan.isPopular ? 'text-crealix-pink text-5xl' : 'text-white text-4xl'}`}>
                    {plan.price}
                  </span>
                  {plan.price !== 'Sob Consulta' && <span className="text-gray-500 text-xs font-bold uppercase">/mês</span>}
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed min-h-[60px] font-medium">
                  {plan.description}
                </p>
              </div>

              <div className={`h-px w-full mb-6 ${plan.isPopular ? 'bg-pink-500/20' : 'bg-white/5'}`}></div>

              <ul className="space-y-4 mb-8 flex-grow relative z-10">
                {plan.features.map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <div className={`mt-0.5 p-0.5 rounded-full shrink-0 ${plan.isPopular ? 'text-crealix-pink' : 'text-crealix-blue'}`}>
                      <Check size={14} strokeWidth={4} />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto relative z-10 flex flex-col items-center">
                <button 
                  type="button"
                  onClick={(e) => { 
                    e.preventDefault(); 
                    e.stopPropagation(); 
                    setSelectedPlan(plan); 
                  }}
                  className="mb-6 text-gray-400 hover:text-white transition-all text-[10px] font-black uppercase tracking-[0.25em] flex items-center gap-2 group/link cursor-pointer"
                >
                  <List size={14} className="text-crealix-blue group-hover/link:translate-x-0.5 transition-transform" />
                  <span className="border-b border-white/10 group-hover/link:border-crealix-blue pb-1 transition-all">Ver Detalhes do Plano</span>
                </button>
                
                <button 
                  type="button"
                  onClick={(e) => handleSubscribe(e, plan.name)}
                  className={`
                    group/btn w-full py-4.5 rounded-2xl font-black text-sm transition-all duration-300 overflow-hidden uppercase tracking-widest flex items-center justify-center gap-2
                    ${plan.isPopular 
                      ? 'bg-gradient-to-r from-crealix-pink to-crealix-purple text-white shadow-[0_10px_20px_-10px_rgba(255,0,212,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(255,0,212,0.6)] hover:scale-[1.03]' 
                      : 'bg-white/10 hover:bg-white/15 text-white border border-white/5'
                    }
                  `}
                >
                  <span className="relative z-10">{plan.ctaText || 'Contratar'}</span>
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_linear_infinite]"></div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Comparison Reveal */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mt-16"
        >
          <button 
            onClick={handleCompare}
            className="group flex items-center gap-3 px-10 py-5 bg-[#0c0c12] border border-white/5 rounded-full hover:border-crealix-blue/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,212,255,0.1)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <Columns size={18} className="text-crealix-blue group-hover:rotate-90 transition-transform duration-500" />
            <span className="font-black text-[11px] tracking-[0.3em] text-gray-400 group-hover:text-white uppercase transition-colors">Tabela Comparativa</span>
          </button>
          
          <p className="mt-8 text-gray-600 text-[10px] font-bold uppercase tracking-widest">
            Investimento em tráfego pago não incluso nos valores acima.
          </p>
        </motion.div>
      </div>

      {/* Plan Details Modal */}
      {selectedPlan && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md z-0 transition-opacity" 
            onClick={() => setSelectedPlan(null)}
          ></div>
          <div 
            className="relative z-10 w-full max-w-2xl bg-[#0c0c12] border border-white/10 rounded-[2.5rem] shadow-[0_0_100px_rgba(122,0,255,0.2)] p-8 md:p-12 max-h-[90vh] overflow-y-auto no-scrollbar animate-slide-up"
          >
            <button 
              onClick={() => setSelectedPlan(null)}
              className="absolute top-6 right-6 text-gray-500 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-crealix-pink/10 border border-crealix-pink/20 text-crealix-pink text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                <Sparkles size={14} />
                Intelligence Specs
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-4 tracking-tighter">{selectedPlan.name}</h3>
              <div className="flex items-center gap-3 mb-6">
                <p className="text-2xl font-black text-crealix-blue">{selectedPlan.price}</p>
                <div className="h-4 w-px bg-white/10"></div>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Growth Plan</p>
              </div>
              <p className="text-gray-400 text-lg font-medium">{selectedPlan.description}</p>
            </div>

            <div className="space-y-8">
              <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] border-b border-white/5 pb-4">Entregas de Alta Performance</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {(selectedPlan.detailedFeatures || selectedPlan.features).map((feature, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5"
                  >
                    <div className="mt-1 p-1 rounded-full bg-crealix-blue/10 text-crealix-blue shrink-0">
                      <Check size={14} strokeWidth={4} />
                    </div>
                    <span className="text-gray-300 text-sm font-medium leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={(e) => handleSubscribe(e, selectedPlan.name)}
                className="flex-1 py-5 bg-gradient-to-r from-crealix-pink to-crealix-purple text-white font-black rounded-2xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3"
              >
                Ativar Estratégia
                <Zap size={16} fill="currentColor" />
              </button>
              <button 
                onClick={() => setSelectedPlan(null)}
                className="flex-1 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all uppercase tracking-[0.2em] text-xs"
              >
                Review Planos
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Compare Plans Modal */}
      {showCompare && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-xl z-0 transition-opacity" 
            onClick={() => setShowCompare(false)}
          ></div>
          <div 
            className="relative z-10 w-full max-w-5xl bg-[#0c0c12] border border-white/10 rounded-[3rem] shadow-[0_0_120px_rgba(0,212,255,0.15)] p-6 md:p-12 overflow-y-auto max-h-[90vh] animate-slide-up"
          >
            <button 
              onClick={() => setShowCompare(false)}
              className="absolute top-8 right-8 text-gray-500 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors z-20"
            >
              <X size={28} />
            </button>
            
            <div className="relative z-10">
              <div className="mb-12 text-center max-w-2xl mx-auto">
                 <div className="inline-block px-4 py-1.5 rounded-full bg-crealix-blue/10 border border-crealix-blue/20 text-crealix-blue text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                   Deep Comparison
                 </div>
                 <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-4 tracking-tighter">Comparativo de Performance</h3>
                 <p className="text-gray-400 font-medium">A transparência total sobre o que cada nível entrega para o seu crescimento.</p>
              </div>

              <div className="overflow-x-auto pb-4 no-scrollbar">
                 <table className="w-full text-left border-collapse min-w-[800px]">
                   <thead>
                     <tr>
                       <th className="p-6 border-b border-white/5 text-gray-500 font-black text-[10px] uppercase tracking-[0.3em]">Vertical Feature</th>
                       <th className="p-6 border-b border-white/5 text-center text-white font-black text-xl tracking-tighter">🚀 START UP</th>
                       <th className="p-6 border-b border-white/5 text-center font-black text-xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-crealix-pink to-crealix-purple relative">
                         📈 TRACTION AI
                         <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] text-white bg-crealix-pink px-3 py-1 rounded-full whitespace-nowrap font-black uppercase tracking-widest shadow-[0_0_15px_rgba(255,0,212,0.5)]">MAIS ESCOLHIDO</div>
                       </th>
                       <th className="p-6 border-b border-white/5 text-center text-white font-black text-xl tracking-tighter">👑 SCALE PRO</th>
                     </tr>
                   </thead>
                   <tbody className="text-xs">
                     {[
                       { feature: 'Preço', start: 'R$ 497/mês', traction: 'R$ 1.497/mês', scale: 'R$ 3.997/mês', highlight: true },
                       { feature: 'Indicado para', start: 'Início digital', traction: 'Crescimento e vendas', scale: 'Escala agressiva' },
                       { feature: 'Posts (Feed)', start: '8/mês', traction: '12/mês', scale: '20/mês' },
                       { feature: 'Stories', start: '4/mês', traction: '12/mês', scale: '30/mês' },
                       { feature: 'Copywriting', start: 'Básico', traction: 'Avançado (vendas)', scale: 'Persuasão completa' },
                       { feature: 'Planejamento', start: 'Mensal simples', traction: 'Estratégico', scale: 'Estratégia + expansão' },
                       { feature: 'Gestão de Tráfego', start: '❌', traction: '✅', scale: '✅ Avançado' },
                       { feature: 'IA para atendimento', start: 'Básico', traction: 'IA vendedora', scale: 'IA + CRM completo' },
                       { feature: 'Qualificação de leads', start: '❌', traction: '✅', scale: '✅ Avançado' },
                       { feature: 'Websites / LPs', start: '❌', traction: '❌', scale: '✅ Incluso' },
                       { feature: 'Consultoria estratégica', start: '❌', traction: '❌', scale: '✅ Mensal' },
                       { feature: 'Automação completa', start: '❌', traction: 'Parcial', scale: 'Total' },
                       { feature: 'Suporte', start: 'Padrão', traction: 'Prioritário', scale: 'VIP' },
                     ].map((row, idx) => (
                       <tr key={idx} className="group/row hover:bg-white/[0.02] transition-colors">
                         <td className="p-5 border-b border-white/[0.03] text-gray-400 font-bold uppercase tracking-wider group-hover/row:text-crealix-blue transition-colors">{row.feature}</td>
                         <td className="p-5 border-b border-white/[0.03] text-center text-gray-500 font-medium">{row.start}</td>
                         <td className={`p-5 border-b border-white/[0.03] text-center font-black ${row.highlight ? 'text-crealix-pink text-base' : 'text-white'} bg-white/[0.02]`}>{row.traction}</td>
                         <td className="p-5 border-b border-white/[0.03] text-center text-gray-500 font-medium">{row.scale}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
              </div>
              
              <div className="mt-12 text-center">
                 <div className="bg-crealix-blue/5 border border-crealix-blue/10 rounded-2xl p-6 inline-block max-w-2xl">
                    <p className="text-gray-400 text-sm font-medium italic">
                      "Quanto mais estruturado o plano, mais o sistema trabalha por você — atraindo, filtrando e convertendo clientes automaticamente."
                    </p>
                 </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-crealix-pink/10 rounded-full blur-[80px] -z-0"></div>
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-crealix-blue/10 rounded-full blur-[80px] -z-0"></div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Pricing;
