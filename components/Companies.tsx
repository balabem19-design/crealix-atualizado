import React from 'react';
import { COMPANIES } from '../constants';
import { motion } from 'motion/react';

const Companies: React.FC = () => {
  return (
    <section className="py-16 bg-black border-y border-white/5 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 mb-12 text-center"
      >
         <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 text-white">
            EMPRESAS QUE <span className="text-transparent bg-clip-text bg-gradient-to-r from-crealix-blue to-crealix-pink">CONFIAM</span>
          </h3>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative flex overflow-hidden group"
      >
        {/* Gradient masks for smooth fade effect */}
        <div className="absolute top-0 left-0 h-full w-12 md:w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute top-0 right-0 h-full w-12 md:w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

        {/* Slower scrolling animation (duration extended via inline style override if needed, using tailwind 'animate-[scroll_60s_linear_infinite]') */}
        <div className="flex gap-16 py-4 animate-[scroll_60s_linear_infinite] whitespace-nowrap">
          {[...COMPANIES, ...COMPANIES, ...COMPANIES, ...COMPANIES].map((company, index) => (
            <span 
              key={index} 
              className="text-xl md:text-2xl font-display font-bold text-white/20 hover:text-white/80 transition-colors cursor-default"
            >
              {company}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Companies;