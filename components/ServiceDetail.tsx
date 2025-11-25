import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Zap, Star } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '../constants';

interface ServiceDetailProps {
  targetId?: string;
  onContact: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ targetId, onContact }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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
    <div className="min-h-screen pt-24 pb-20 bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h1 className="text-4xl md:text-6xl font-display font-black mb-6 text-white animate-fade-in">
             NOSSAS <span className="text-gradient animate-pulse">SOLUÇÕES</span>
           </h1>
           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
             Detalhamento completo de como podemos transformar o seu negócio.
           </p>
        </div>

        <div className="space-y-24">
          {SERVICES.map((service, index) => (
            <div 
                key={service.id} 
                id={service.id} 
                className={`scroll-mt-28 relative p-8 md:p-12 rounded-3xl border border-white/10 bg-[#0E0E14] overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row gap-12 items-center group hover:border-crealix-purple/30 transition-colors duration-500`}
            >
                {/* Decorative Background Blur */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className={`absolute w-[500px] h-[500px] ${index % 2 === 0 ? '-right-20 -top-20 bg-crealix-blue/5' : '-left-20 -bottom-20 bg-crealix-pink/5'} rounded-full blur-[100px]`}></div>
                </div>

                {/* Image Section with Parallax */}
                <div className="w-full lg:w-1/2 relative h-[300px] md:h-[400px] overflow-hidden rounded-2xl shadow-2xl border border-white/10">
                   <div className="absolute inset-0 bg-gradient-to-tr from-crealix-purple to-crealix-blue rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-20 pointer-events-none"></div>
                   <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="relative w-full h-[120%] object-cover transition-transform duration-75 z-10"
                    style={{ transform: `translateY(${scrollY * 0.05}px)` }}
                   />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-crealix-blue group-hover:text-crealix-pink transition-colors group-hover:scale-110 duration-300">
                            <service.icon size={28} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{service.title}</h2>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                        {service.fullDescription}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                            <h4 className="text-crealix-pink font-bold mb-4 flex items-center gap-2">
                                <CheckCircle size={18} /> Benefícios
                            </h4>
                            <ul className="space-y-2">
                                {service.benefits.map((item, idx) => (
                                    <li key={idx} className="text-sm text-gray-400 flex items-start gap-2 animate-slide-left" style={{animationDelay: `${idx * 100}ms`}}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-crealix-pink mt-1.5 shrink-0 shadow-[0_0_5px_#FF00D4]"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                         <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                            <h4 className="text-crealix-blue font-bold mb-4 flex items-center gap-2">
                                <Star size={18} /> Diferenciais
                            </h4>
                            <ul className="space-y-2">
                                {service.differentiation.map((item, idx) => (
                                    <li key={idx} className="text-sm text-gray-400 flex items-start gap-2 animate-slide-left" style={{animationDelay: `${(idx + 4) * 100}ms`}}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-crealix-blue mt-1.5 shrink-0 shadow-[0_0_5px_#00D4FF]"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                            <Zap size={18} className="text-yellow-400" /> Processo de Trabalho
                        </h4>
                        <div className="flex flex-wrap gap-3">
                             {service.process.map((step, idx) => (
                                <div key={idx} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-medium hover:border-white/30 transition-colors">
                                    {idx + 1}. {step}
                                </div>
                             ))}
                        </div>
                    </div>

                    <button 
                        onClick={() => handleWhatsAppClick(service.title)}
                        className="bg-gradient-to-r from-crealix-blue to-crealix-purple hover:to-crealix-pink px-8 py-4 rounded-lg font-bold text-white shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 transition-all flex items-center gap-2 group hover:scale-105 duration-300"
                    >
                        Solicitar Orçamento
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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