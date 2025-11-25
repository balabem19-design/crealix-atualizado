import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reviews Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-4 text-white">
            RESULTADOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">REAIS</span>.
          </h2>
          <p className="text-gray-400 tracking-[0.2em] uppercase text-sm font-bold">
            HISTÓRIAS DE SUCESSO.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-[#0A0A0F] p-8 rounded-2xl border border-white/5 hover:border-pink-500/30 transition-all duration-300 group hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                    <div className="absolute inset-0 bg-pink-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <img src={testimonial.avatarUrl} alt={testimonial.name} className="relative w-12 h-12 rounded-full object-cover border border-white/10 group-hover:border-pink-500/50 transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg leading-tight">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4 text-pink-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" className="drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed italic opacity-90">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;