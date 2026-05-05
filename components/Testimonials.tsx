
import React, { lazy } from 'react';
import { TestimonialsColumn } from './ui/testimonials-columns-1';
import { motion } from 'motion/react';

const testimonials = [
  {
    text: "A Crealix transformou nossa operação com IA. O ROI foi imediato e o atendimento da equipe é excepcional e estratégico.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Juliana Silva",
    role: "Diretora de Operações",
  },
  {
    text: "A automação de WhatsApp da Crealix é outro nível. Vendas 24/7 de forma rápida, eficiente e totalmente personalizada.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Roberto Amaral",
    role: "Gestor Comercial",
  },
  {
    text: "Branding e Performance unidos. Minha marca nunca teve tanta autoridade digital. Impressionante o nível de detalhe técnico.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Ana Paula Mendes",
    role: "CEO & Founder",
  },
  {
    text: "O design das Landing Pages é impecável e altamente persuasivo. A nossa conversão dobrou em apenas 1 mês de uso.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Felipe Costa",
    role: "Marketing Director",
  },
  {
    text: "Tecnologia de ponta com um suporte impecável. A Crealix está anos luz à frente do mercado, são verdadeiros parceiros.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Mariana Luz",
    role: "Tech Lead",
  },
  {
    text: "A Secretária Smart resolveu nosso gargalo de atendimento de imediato, escalando nossa retenção de clientes consideravelmente.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Thiago Oliveira",
    role: "Customer Success",
  },
  {
    text: "Escalar tráfego pago sem estrutura de inteligência artificial é perder dinheiro. Com a Crealix o ROAS foi pro teto em semanas.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Carlos Mendes",
    role: "E-commerce Manager",
  },
  {
    text: "Automação e CRM perfeitos para nossa operação. A solução superou todas as expectativas da nossa diretoria técnica e de vendas.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sana Sheikh",
    role: "Gerente de Vendas",
  },
  {
    text: "Nossa agência otimizou tempo e reduziu custos com os sistemas internos sob medida desenvolvidos e mantidos por eles.",
    image: "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Hassan Ali",
    role: "Head of Growth",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials: React.FC = () => {
  return (
    <section id="results" className="bg-[#050505] py-24 relative overflow-hidden text-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-crealix-purple/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-crealix-pink/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex justify-center items-center gap-2 px-4 py-1.5 rounded-full bg-crealix-purple/10 border border-crealix-purple/20 text-crealix-purple text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            Testimonials
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-black mb-4 tracking-tighter">
            RESULTADOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">REAIS</span>
          </h2>
          <p className="text-gray-400 tracking-[0.2em] uppercase text-sm font-bold mb-6">
            O IMPACTO DA CREALIX NO MERCADO
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg font-medium">
            Descubra o que nossos parceiros falam sobre o impacto estratégico de nossas soluções inteligentes.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden relative">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

