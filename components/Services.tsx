import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServicesProps {
  onServiceClick: (serviceId: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="services" className="py-24 bg-[#0A0A0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-4 text-white">
            SERVIÇOS <span className="text-gradient">CREALIX</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Tudo o que sua marca precisa, em um só lugar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              onClick={() => onServiceClick(service.id)}
              className="group relative rounded-3xl border border-white/10 bg-[#0E0E14] overflow-hidden cursor-pointer hover:border-crealix-purple/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(122,0,255,0.15)]"
            >
              {/* Image Header */}
              <div className="h-48 w-full overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E14] to-transparent z-10"></div>
                 <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                 />
                 <div className="absolute top-4 left-4 z-20 w-12 h-12 rounded-xl bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-crealix-blue group-hover:text-crealix-pink transition-colors">
                    <service.icon size={24} />
                 </div>
              </div>

              <div className="p-8 pt-4 relative z-10 flex flex-col h-[240px]">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-crealix-blue group-hover:to-crealix-purple transition-all">
                    {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {service.shortDescription}
                </p>

                <div className="flex items-center text-sm font-bold text-crealix-blue group-hover:text-crealix-pink transition-colors gap-2 mt-auto">
                  Ver Detalhes <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;