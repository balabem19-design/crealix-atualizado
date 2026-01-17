
import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Zap, Star } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '../constants';

interface ServiceDetailProps {
  targetId?: string;
  onContact: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ targetId, onContact }) => {
  useEffect(() => {
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [targetId]);

  const handleWhatsAppClick = (serviceTitle: string) => {
      const msg = encodeURIComponent(`Olá! Tenho interesse no serviço de ${serviceTitle}.`);
      window.open(`https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsapp}&text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section com estilização cinematográfica e maior espaçamento */}
        <div className="text-center mb-24 relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-9xl font-display font-black text-white/5 uppercase select-none pointer-events-none -z-10">
             Nossas
           </div>
           <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6 text-white animate-fade-in tracking-tighter">
             <span className="opacity-20">NOSSAS</span> <span className="text-gradient animate-pulse">SOLUÇÕES</span>
           </h1>
           <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
             Detalhamento completo de como nossa inteligência estratégica transforma o futuro do seu negócio.
           </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {SERVICES.map((service, index) => (
            <div 
                key={service.id} 
                id={service.id} 
                className={`scroll-mt-32 relative p-6 md:p-10 lg:p-14 rounded-[2.5rem] border border-white/10 bg-[#0E0E14]/80 backdrop-blur-sm overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row gap-8 lg:gap-16 items-center group hover:border-crealix-purple/30 transition-all duration-700`}
            >
                {/* Decorative Background Glows */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                    <div className={`absolute w-[600px] h-[600px] ${index % 2 === 0 ? '-right-40 -top-40 bg-crealix-blue/10' : '-left-40 -bottom-40 bg-crealix-pink/10'} rounded-full blur-[120px] opacity-50`}></div>
                </div>

                {/* Image Section - Ajustada para visibilidade total sem cortes (object-contain) */}
                <div className="w-full lg:w-1/2 relative aspect-video md:aspect-[16/10] lg:aspect-square overflow-hidden rounded-3xl shadow-2xl border border-white/5 bg-black/60 flex items-center justify-center p-2 md:p-4 lg:p-6">
                   {/* Camada de luz dinâmica interna */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-crealix-purple/10 to-crealix-blue/10 z-20 pointer-events-none group-hover:opacity-100 transition-opacity duration-700 opacity-40"></div>
                   
                   <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="relative w-full h-full object-contain transition-all duration-700 group-hover:scale-105 z-10 drop-shadow-[0_0_25px_rgba(0,0,0,0.5)]"
                   />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 relative z-10">
                    <div className="flex items-center gap-5 mb-8">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-crealix-blue group-hover:text-crealix-pink transition-all duration-500 group-hover:scale-110 shadow-lg">
                            <service.icon size={32} />
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                            {service.title}
                        </h2>
                    </div>

                    <p className="text-lg text-gray-400 leading-relaxed mb-10 font-light">
                        {service.fullDescription}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5 hover:border-crealix-pink/20 transition-all duration-500">
                            <h4 className="text-crealix-pink font-display font-bold mb-4 flex items-center gap-3">
                                <CheckCircle size={20} /> Benefícios
                            </h4>
                            <ul className="space-y-3">
                                {service.benefits.map((item, idx) => (
                                    <li key={idx} className="text-sm text-gray-400 flex items-start gap-3 leading-relaxed">
                                        <span className="w-1.5 h-1.5 rounded-full bg-crealix-pink mt-1.5 shrink-0 shadow-[0_0_8px_#FF00D4]"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                         <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5 hover:border-crealix-blue/20 transition-all duration-500">
                            <h4 className="text-crealix-blue font-display font-bold mb-4 flex items-center gap-3">
                                <Star size={20} /> Diferenciais
                            </h4>
                            <ul className="space-y-3">
                                {service.differentiation.map((item, idx) => (
                                    <li key={idx} className="text-sm text-gray-400 flex items-start gap-3 leading-relaxed">
                                        <span className="w-1.5 h-1.5 rounded-full bg-crealix-blue mt-1.5 shrink-0 shadow-[0_0_8px_#00D4FF]"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mb-10">
                        <h4 className="text-white font-display font-bold mb-5 flex items-center gap-3">
                            <Zap size={20} className="text-yellow-400" /> Fluxo de Trabalho
                        </h4>
                        <div className="flex flex-wrap gap-3">
                             {service.process.map((step, idx) => (
                                <div key={idx} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 font-semibold hover:border-white/30 transition-all hover:bg-white/10">
                                    {idx + 1}. {step}
                                </div>
                             ))}
                        </div>
                    </div>

                    <button 
                        onClick={() => handleWhatsAppClick(service.title)}
                        className="w-full md:w-auto bg-gradient-to-r from-crealix-blue via-crealix-purple to-crealix-pink px-10 py-5 rounded-xl font-display font-black text-white shadow-xl shadow-purple-900/20 hover:shadow-purple-900/40 transition-all flex items-center justify-center gap-3 group hover:scale-105 duration-300 uppercase tracking-widest text-sm"
                    >
                        Solicitar Orçamento
                        <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
