
import React from 'react';
import TestimonialsMarquee from './TestimonialsMarquee';

const Testimonials: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reviews Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-4 text-white">
            RESULTADOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">REAIS</span>.
          </h2>
          <p className="text-gray-400 tracking-[0.2em] uppercase text-sm font-bold">
            O IMPACTO DA CREALIX NO MERCADO
          </p>
        </div>

        {/* 3D Testimonials Marquee Component */}
        <div className="relative">
          <TestimonialsMarquee />
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
