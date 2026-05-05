import React from 'react';
import { FEATURES } from '../constants';
import { motion } from 'motion/react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            O FUTURO DO <span className="text-gradient">MARKETING</span> JÁ COMEÇOU.
          </h2>
          <p className="text-gray-400 text-lg">
            Soluções rápidas, aplicáveis e inteligentes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              key={index} 
              className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center mb-6 text-blue-500 group-hover:text-pink-500 transition-colors">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;