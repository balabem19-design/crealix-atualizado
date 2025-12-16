

import React, { useState } from 'react';
import { Check, X, ArrowRight, MessageCircle, Star, Zap, Bot, Calendar, TrendingUp } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface SmartSecretaryLPProps {
  onClose: () => void;
}

// Official High-Ticket Images (Generated & Fixed)
const LP_IMAGES = {
    hero: "https://i.ibb.co/HfBw9DhH/avatar-Secretaria-Smart-1024x919.webp",
    vehicle: "https://i.ibb.co/rvWjdc1/crealix-lp-highticket-vehicle.png",
    process: "https://i.ibb.co/k3P5jmd/crealix-lp-highticket-process.png",
    cta: "https://i.ibb.co/VWVf60y/crealix-lp-highticket-cta.png"
};

const SmartSecretaryLP: React.FC<SmartSecretaryLPProps> = ({ onClose }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const faqs = [
    { q: "Funciona mesmo no meu ramo?", a: "Sim. A Secretária Smart é treinada para qualquer negócio que precise de atendimento: clínicas, escritórios, e-commerce, restaurantes, etc. A personalização é a chave." },
    { q: "E se eu não souber configurar nada?", a: "Você não precisa. Nosso pacote 'High Performance' inclui a configuração completa feita por especialistas da Crealix. Entregamos a solução pronta para usar." },
    { q: "A IA realmente entende meu negócio?", a: "Sim. O processo de diagnóstico e treinamento é a nossa especialidade. A IA aprende suas regras, produtos e tom de voz para responder como um membro da sua equipe." },
    { q: "Quanto tempo leva para começar a funcionar?", a: "Após o diagnóstico, a implementação premium leva em média de 5 a 7 dias úteis para estar 100% ativa e vendendo para você." },
    { q: "Ela realmente ajuda nas vendas?", a: "Sim. Ela não apenas responde, mas é programada com fluxos de pré-venda para qualificar leads, quebrar objeções e direcionar clientes para a compra." },
  ];

  const handleCta = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsapp}&text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl flex justify-center animate-fade-in">
      <div className="relative w-full h-full max-w-5xl bg-[#0A0A0A] overflow-y-auto scroll-smooth">
        <button onClick={onClose} className="absolute top-4 right-4 z-50 text-white/50 hover:text-white transition-colors">
          <X size={32} />
        </button>

        {/* 1. HERO (Big Money Statement) */}
        <header className="relative py-24 px-8 text-center bg-[#0A0A0A] border-b border-purple-500/10 overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-grid-pattern opacity-5"></div>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-[#0A0A0A] z-10"></div>
          
          <div className="relative z-20 flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6 leading-tight max-w-4xl mx-auto drop-shadow-2xl">
              Transforme cada mensagem em lucro com sua 
              
              <div className="relative w-full max-w-[300px] md:max-w-[400px] mx-auto my-6 animate-float">
                 <div className="absolute inset-0 bg-gradient-to-t from-crealix-purple/20 to-transparent blur-xl rounded-full"></div>
                 <img 
                    src={LP_IMAGES.hero} 
                    alt="Secretária Smart" 
                    className="relative w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(122,0,255,0.4)]"
                 />
              </div>

              treinada pessoalmente para vender como um humano.
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10">
              Atenda, responda e converta clientes automaticamente 24h por dia com tecnologia premium desenvolvida pela Crealix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button onClick={() => handleCta("Quero ativar minha Secretária Smart High Performance!")} className="bg-crealix-purple text-white font-bold py-4 px-8 rounded-lg hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(122,0,255,0.4)]">
                👉 Ativar Secretária Smart High Performance
              </button>
              <a href="#demo" className="bg-transparent border border-white/20 text-white font-bold py-4 px-8 rounded-lg hover:bg-white/10 transition-colors">
                Ver demonstração exclusiva
              </a>
            </div>
          </div>
        </header>

        <main className="px-8 py-20 space-y-24">
          
          {/* 2. AUTHORITY BOOST */}
          <section className="max-w-4xl mx-auto text-center">
             <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">Uma solução Crealix</p>
             <div className="flex justify-center items-center gap-12">
                <p className="font-semibold text-gray-300">Tecnologia Proprietária</p>
                <p className="font-semibold text-gray-300">Treinamento Personalizado</p>
                <p className="font-semibold text-gray-300">Configuração por Especialistas</p>
             </div>
          </section>

          {/* 3. STORYTELLING (Transformation Journey) */}
          <section className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Não é sobre automatizar mensagens.<br/>É sobre <span className="text-crealix-pink">recuperar seu tempo</span>.</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              É sobre nunca mais perder vendas por falta de atendimento. É sobre finalmente ter um atendimento de nível premium, que impressiona e converte, mesmo quando você não está online.
            </p>
          </section>

          {/* 4. THE PREMIUM VEHICLE */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
              <img src={LP_IMAGES.vehicle} alt="AI Digital Attendant" className="rounded-2xl shadow-2xl"/>
              <div>
                  <h2 className="text-3xl font-bold mb-4">Uma solução de elite, não um chatbot comum.</h2>
                  <ul className="space-y-3 text-lg text-gray-300">
                      <li className="flex items-center gap-3"><Check className="text-green-500"/> IA com intenção contextual</li>
                      <li className="flex items-center gap-3"><Check className="text-green-500"/> Fluxos de venda inteligentes</li>
                      <li className="flex items-center gap-3"><Check className="text-green-500"/> Tom de voz 100% humanizado</li>
                      <li className="flex items-center gap-3"><Check className="text-green-500"/> Aprende com seu negócio</li>
                  </ul>
              </div>
          </section>

          {/* 5. BENEFITS HIGH TICKET */}
          <section>
            <div className="grid md:grid-cols-3 gap-6">
                <BenefitCard icon={Zap} title="Atendimento Impecável 24h" />
                <BenefitCard icon={TrendingUp} title="Conversão Automática de Leads" />
                <BenefitCard icon={Bot} title="IA Treinada Para Você" />
            </div>
          </section>

          {/* 6. HOW IT WORKS */}
          <section id="how-it-works" className="text-center">
            <h2 className="text-3xl font-bold mb-12">Processo Premium em 3 Passos</h2>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <Step number="1" title="Diagnóstico e Treinamento" description="Analisamos seu negócio e treinamos a IA com suas informações." />
              <Step number="2" title="Implementação Premium" description="Configuramos e integramos a Secretária Smart em seus canais." />
              <Step number="3" title="Ativação e Performance" description="Sua IA começa a vender e atender, com otimização contínua." />
            </div>
            <img src={LP_IMAGES.process} alt="SaaS Interface" className="mt-12 rounded-lg shadow-lg" id="demo"/>
          </section>

          {/* 7. SOCIAL PROOF */}
          <section className="space-y-8">
             <Testimonial text="“Aumentamos os agendamentos em 3x. A IA qualifica e agenda sem que eu precise intervir. Surreal.”" author="Dr. Marcos, Clínica de Estética"/>
             <Testimonial text="“Reduzi em 70% o tempo que eu gastava respondendo o básico. Agora só falo com quem realmente quer comprar.”" author="Ana P., E-commerce de Moda"/>
          </section>
          
          {/* 8. OFFER STACK */}
          <section className="bg-[#111] p-10 rounded-2xl border border-crealix-purple/30">
            <h2 className="text-3xl font-bold text-center mb-8">Seu Pacote High Performance Completo:</h2>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-lg">
                <li className="flex items-center gap-3"><Check className="text-green-500"/> Treinamento Completo da IA</li>
                <li className="flex items-center gap-3"><Check className="text-green-500"/> Integração (WhatsApp, Insta, etc.)</li>
                <li className="flex items-center gap-3"><Check className="text-green-500"/> Fluxos de Venda Personalizados</li>
                <li className="flex items-center gap-3"><Check className="text-green-500"/> Suporte VIP Crealix</li>
                <li className="flex items-center gap-3"><Check className="text-green-500"/> Tom de Voz 100% da sua Marca</li>
                <li className="flex items-center gap-3"><Check className="text-green-500"/> Acompanhamento de Performance</li>
            </ul>
          </section>

          {/* 9. FAQ */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8">Suas Dúvidas, Respondidas.</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/5 rounded-lg border border-white/10">
                  <button onClick={() => setOpenFAQ(openFAQ === index ? null : index)} className="w-full flex justify-between items-center p-5 font-bold text-left">
                    <span>{faq.q}</span>
                    {openFAQ === index ? <X/> : <ArrowRight/>}
                  </button>
                  {openFAQ === index && (
                    <div className="p-5 border-t border-white/10 text-gray-400">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 10. FINAL CTA */}
          <section className="py-16 text-center bg-crealix-purple/10 rounded-2xl border border-crealix-purple/30 grid md:grid-cols-2 items-center gap-8">
            <div>
              <h2 className="text-4xl font-black mb-4">Cada minuto sem a Secretária Smart é um cliente perdido.</h2>
              <p className="text-lg text-gray-300 mb-8">Configure hoje, atenda hoje, venda hoje.</p>
              <button onClick={() => handleCta("Quero minha Secretária de IA Premium agora!")} className="bg-crealix-purple text-white font-bold py-4 px-10 rounded-lg hover:opacity-90 transition-opacity text-xl shadow-[0_0_20px_rgba(122,0,255,0.4)]">
                👉 Quero minha Secretária de IA Premium
              </button>
            </div>
            <img src={LP_IMAGES.cta} alt="AI and Human Collaboration" className="rounded-lg"/>
          </section>
        </main>
      </div>
    </div>
  );
};

// Helper components for LP
const BenefitCard: React.FC<{icon: React.ElementType, title: string}> = ({icon: Icon, title}) => (
    <div className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-crealix-purple transition-colors">
        <Icon className="text-crealix-blue mb-4" size={32}/>
        <h3 className="text-xl font-bold">{title}</h3>
    </div>
);

const Step: React.FC<{number: string, title: string, description: string}> = ({number, title, description}) => (
    <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-crealix-purple text-white font-bold text-xl mb-4 border-2 border-crealix-blue">{number}</div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

const Testimonial: React.FC<{text: string, author: string}> = ({text, author}) => (
    <div className="p-6 bg-white/5 rounded-lg border-l-4 border-crealix-blue italic">
        <p className="mb-4 text-lg">"{text}"</p>
        <p className="font-bold not-italic text-right text-crealix-blue">- {author}</p>
    </div>
);

export default SmartSecretaryLP;
