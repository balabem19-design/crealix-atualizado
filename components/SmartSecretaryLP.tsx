
import React, { useState } from 'react';
import { 
  Bot, 
  MessageSquare, 
  Calendar, 
  Users, 
  Zap, 
  Clock, 
  Briefcase, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  XCircle,
  Stethoscope,
  Scale,
  Building,
  Store,
  ArrowRight,
  MessageCircle,
  Target
} from 'lucide-react';
import { IMAGES } from '../constants';

const LP_WHATSAPP = '5541993386087';

interface SmartSecretaryLPProps {
  onBack: () => void;
}

const SmartSecretaryLP: React.FC<SmartSecretaryLPProps> = ({ onBack }) => {
  const handleConversion = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://api.whatsapp.com/send?phone=${LP_WHATSAPP}&text=${encoded}`, '_blank');
  };

  return (
    <div className="bg-[#050508] text-white overflow-hidden pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-10 pb-20 overflow-hidden">
        {/* Neon Backgrounds */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#7A00FF]/10 via-[#00D4FF]/5 to-[#050508] -z-10"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#7A00FF]/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#00D4FF]/10 rounded-full blur-[100px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-bold text-crealix-blue mb-6 animate-fade-in">
              ✨ Revolução no Atendimento 24h
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black leading-[1.1] mb-6 text-white drop-shadow-[0_0_15px_rgba(122,0,255,0.5)]">
              Secretária Smart –<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#7A00FF] to-[#FF00D4]">Sua nova assistente de IA,</span><br/>
              atendendo 24h por dia.
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Agendamentos, suporte, vendas e atendimento aos clientes, tudo automático, humanizado e inteligente – como uma secretária e um vendedor trabalhando juntos, sem férias nem folga.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => handleConversion("Olá! Gostaria de saber valores da Secretária Smart.")}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-crealix-purple to-crealix-pink text-white font-bold text-lg shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:shadow-[0_0_50px_rgba(236,72,153,0.6)] hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Quero saber valores</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
              </button>
              
              <button 
                onClick={() => handleConversion("Olá! Quero falar com a equipe Crealix.")}
                className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 hover:border-crealix-blue/50 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Falar no WhatsApp
              </button>
            </div>
            
            <p className="mt-6 text-sm text-gray-500 font-medium italic flex items-center justify-center lg:justify-start gap-2">
              <CheckCircle size={14} className="text-green-500" />
              Já pensou sua empresa atendendo bem até enquanto você dorme?
            </p>
          </div>
          
          <div className="relative flex justify-center lg:justify-end animate-float">
             {/* Avatar Composition for LP - USANDO A IMAGEM OFICIAL DA LP (URL 2) */}
             <div className="relative w-[320px] md:w-[450px] aspect-square">
                 {/* Back Glow */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full blur-[60px]"></div>
                 
                 {/* Avatar Image */}
                 <div className="relative z-10 w-full h-full rounded-full overflow-hidden border border-white/10 shadow-2xl bg-cyan-950/50">
                     <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-60 z-10"></div>
                     <img src={IMAGES.smartSecretary.lp} alt="Secretária Smart Avatar" className="w-full h-full object-cover" />
                 </div>

                 {/* Floating Interface Elements */}
                 <div className="absolute top-10 -left-10 z-20 bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-lg border-l-4 border-l-green-500 animate-slide-left">
                     <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><MessageSquare size={16}/></div>
                         <div>
                             <p className="text-[10px] text-gray-400 uppercase font-bold">Nova Mensagem</p>
                             <p className="text-xs text-white">"Gostaria de agendar..."</p>
                         </div>
                     </div>
                 </div>

                 <div className="absolute bottom-20 -right-5 z-20 bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-lg border-l-4 border-l-purple-500 animate-slide-up" style={{animationDelay: '1s'}}>
                     <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500"><Calendar size={16}/></div>
                         <div>
                             <p className="text-[10px] text-gray-400 uppercase font-bold">Agenda</p>
                             <p className="text-xs text-white">Consulta marcada: 14:00h</p>
                         </div>
                     </div>
                 </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. TARGET AUDIENCE */}
      <section className="py-20 bg-[#08080C] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Para quem é a <span className="text-gradient">Secretária Smart?</span></h2>
                <p className="text-gray-400">Solução ideal para quem precisa de organização e escala.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AudienceCard 
                    icon={Stethoscope} 
                    title="Saúde" 
                    desc="Clínicas e consultórios que perdem pacientes por demora no agendamento."
                    color="text-green-400"
                />
                <AudienceCard 
                    icon={Scale} 
                    title="Jurídico" 
                    desc="Advogados que precisam filtrar casos e responder clientes ansiosos."
                    color="text-blue-400"
                />
                <AudienceCard 
                    icon={Briefcase} 
                    title="Serviços" 
                    desc="Agências e consultores que querem automatizar o comercial."
                    color="text-purple-400"
                />
                <AudienceCard 
                    icon={Store} 
                    title="Pequenas Empresas" 
                    desc="Negócios com alto fluxo de mensagens e equipe reduzida."
                    color="text-pink-400"
                />
            </div>
        </div>
      </section>

      {/* 3. PAIN POINTS (CONTRAST) */}
      <section className="py-20 bg-[#020202] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-12">
                Você está perdendo clientes por <span className="text-red-500">demora ou desorganização?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
                <ul className="space-y-4">
                    <PainPointItem text="Mensagens que ficam sem resposta por horas." />
                    <PainPointItem text="Clientes que desistem e fecham com o concorrente." />
                    <PainPointItem text="Agenda confusa com horários duplicados." />
                </ul>
                <ul className="space-y-4">
                    <PainPointItem text="Responder WhatsApp até tarde da noite." />
                    <PainPointItem text="Falta de histórico organizado dos clientes." />
                    <PainPointItem text="Equipe sobrecarregada com perguntas repetitivas." />
                </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 inline-block backdrop-blur-sm">
                <p className="text-gray-300 font-medium text-lg">
                    Se você sente que <span className="text-white font-bold">"não dá conta"</span> do volume de mensagens, a Secretária Smart foi criada exatamente para isso.
                </p>
            </div>
        </div>
      </section>

      {/* 4. SOLUTION (PILLARS) */}
      <section className="py-24 bg-gradient-to-b from-[#050508] to-[#0A0A0F]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-20">
                 <h2 className="text-4xl font-display font-bold text-white mb-4">Ela atende, organiza, vende e agenda por você.</h2>
                 <p className="text-gray-400 text-lg max-w-2xl mx-auto">Uma agente de IA treinada para falar a língua da sua empresa e conduzir seus clientes com clareza e segurança.</p>
             </div>

             <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="relative order-2 md:order-1">
                     <div className="absolute inset-0 bg-gradient-to-r from-crealix-purple to-crealix-blue rounded-full blur-[80px] opacity-20"></div>
                     {/* REPEAT AVATAR FOR SOLUTION SECTION - CONSISTENT WITH LP */}
                     <img src={IMAGES.smartSecretary.lp} alt="AI Core" className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl animate-float" />
                 </div>
                 
                 <div className="grid gap-6 order-1 md:order-2">
                     <FeatureCard 
                        icon={Zap} 
                        title="Atendimento Imediato" 
                        desc="Responde na hora, sem deixar seu cliente esperando, 24/7." 
                     />
                     <FeatureCard 
                        icon={Calendar} 
                        title="Agendamentos Automáticos" 
                        desc="Conecta com sua agenda e marca consultas e reuniões sozinha." 
                     />
                     <FeatureCard 
                        icon={Target} 
                        title="Pré-vendas e Qualificação" 
                        desc="Faz perguntas inteligentes e entrega apenas leads quentes." 
                     />
                     <FeatureCard 
                        icon={Bot} 
                        title="Suporte Inteligente" 
                        desc="Tira dúvidas frequentes, envia links e documentos automaticamente." 
                     />
                 </div>
             </div>
         </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-20 bg-[#08080C] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-center text-3xl font-bold mb-16">Como funciona na prática</h2>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-crealix-purple via-crealix-blue to-crealix-pink opacity-30"></div>

                <StepCard 
                    step="1" 
                    title="Entendimento" 
                    desc="A equipe Crealix entende seu serviço, seu público e sua forma de falar." 
                />
                <StepCard 
                    step="2" 
                    title="Configuração" 
                    desc="Treinamos a IA com suas ofertas, regras de agenda e objeções." 
                />
                <StepCard 
                    step="3" 
                    title="Ativação" 
                    desc="Ela começa a atender no WhatsApp e Instagram como sua funcionária." 
                />
            </div>

            <div className="text-center mt-12">
                <button 
                    onClick={() => handleConversion("Quero ativar a Secretária Smart na minha empresa.")}
                    className="bg-white text-black font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2 mx-auto"
                >
                    <Zap size={20} className="text-crealix-purple" />
                    Quero ativar a Secretária Smart
                </button>
            </div>
        </div>
      </section>

      {/* 6. BENEFITS */}
      <section className="py-20 bg-[#050508]">
          <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-center mb-12">Benefícios que você sente no <span className="text-crealix-pink">primeiro mês</span></h2>
              <div className="grid md:grid-cols-2 gap-4">
                  {[
                      "Mais leads bem atendidos e convertidos.",
                      "Menos mensagens acumuladas no WhatsApp.",
                      "Agenda organizada automaticamente.",
                      "Redução drástica do estresse com atendimento.",
                      "Mais tempo para focar na gestão e crescimento.",
                      "Sensação de profissionalismo total para o cliente."
                  ].map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-crealix-purple/30 transition-colors">
                          <CheckCircle className="text-green-500 shrink-0" size={20} />
                          <span className="text-gray-300 font-medium">{benefit}</span>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 7. COMPARISON */}
      <section className="py-20 bg-[#0A0A0F]">
          <div className="max-w-6xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8">
                  {/* Before */}
                  <div className="p-8 rounded-2xl bg-red-900/10 border border-red-500/20">
                      <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2"><XCircle/> Antes da Secretária Smart</h3>
                      <ul className="space-y-4">
                          <li className="flex gap-2 text-gray-400"><XCircle size={18} className="text-red-500 mt-1"/> Respostas demoradas (horas ou dias)</li>
                          <li className="flex gap-2 text-gray-400"><XCircle size={18} className="text-red-500 mt-1"/> Clientes sem retorno desistem</li>
                          <li className="flex gap-2 text-gray-400"><XCircle size={18} className="text-red-500 mt-1"/> Você respondendo até tarde da noite</li>
                          <li className="flex gap-2 text-gray-400"><XCircle size={18} className="text-red-500 mt-1"/> Perda de oportunidades de venda</li>
                          <li className="flex gap-2 text-gray-400"><XCircle size={18} className="text-red-500 mt-1"/> Zero automação, tudo manual</li>
                      </ul>
                  </div>

                  {/* After */}
                  <div className="p-8 rounded-2xl bg-green-900/10 border border-green-500/20 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-2 bg-green-500/20 rounded-bl-xl text-green-400 text-xs font-bold uppercase">Recomendado</div>
                      <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2"><CheckCircle/> Depois da Secretária Smart</h3>
                      <ul className="space-y-4">
                          <li className="flex gap-2 text-white"><CheckCircle size={18} className="text-green-500 mt-1"/> Atendimento imediato (segundos)</li>
                          <li className="flex gap-2 text-white"><CheckCircle size={18} className="text-green-500 mt-1"/> Agendamentos 100% automáticos</li>
                          <li className="flex gap-2 text-white"><CheckCircle size={18} className="text-green-500 mt-1"/> Leads filtrados e prontos para fechar</li>
                          <li className="flex gap-2 text-white"><CheckCircle size={18} className="text-green-500 mt-1"/> Você com tempo livre real</li>
                          <li className="flex gap-2 text-white"><CheckCircle size={18} className="text-green-500 mt-1"/> Sistema operando 24h por dia</li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      {/* 8. SOCIAL PROOF */}
      <section className="py-20 bg-[#050508]">
          <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">O que dizem nossos parceiros</h2>
              <div className="grid md:grid-cols-3 gap-6">
                  <TestimonialCard 
                      name="Dra. Ana Souza" 
                      role="Clínica Odontológica" 
                      text="Depois da Secretária Smart, parei de perder consultas porque não respondi a tempo. Minha agenda está sempre cheia."
                      img="https://randomuser.me/api/portraits/women/68.jpg"
                  />
                  <TestimonialCard 
                      name="Ricardo Mendes" 
                      role="Advogado Trabalhista" 
                      text="A triagem é perfeita. Só chegam para mim os clientes que realmente têm potencial. Economizou horas do meu dia."
                      img="https://randomuser.me/api/portraits/men/32.jpg"
                  />
                  <TestimonialCard 
                      name="Fernanda Lima" 
                      role="Loja de Decoração" 
                      text="Ela vende sozinha pelo Instagram de madrugada! Acordo com os pedidos prontos. Surreal."
                      img="https://randomuser.me/api/portraits/women/44.jpg"
                  />
              </div>
          </div>
      </section>

      {/* 9. PLANS */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0F] to-[#000]">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Planos Flexíveis</h2>
                  <p className="text-gray-400">Escolha o nível de inteligência que seu negócio precisa.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 items-end">
                  <PlanCard 
                    title="Essencial" 
                    subtitle="Para começar" 
                    features={['Secretária Smart básica', '1 Canal (WhatsApp)', 'Respostas de dúvidas', 'Encaminhamento de leads']}
                    cta="Cotar Essencial"
                    onCta={() => handleConversion("Olá, gostaria de cotar o Plano Essencial da Secretária Smart.")}
                  />
                  <PlanCard 
                    title="Profissional" 
                    subtitle="O mais escolhido" 
                    isPopular 
                    features={['Múltiplos Canais (Whats + Insta)', 'Agendamento Automático', 'Fluxo de Pré-venda', 'Qualificação de Leads', 'Dashboard Básico']}
                    cta="Cotar Profissional"
                    onCta={() => handleConversion("Olá, gostaria de cotar o Plano Profissional da Secretária Smart.")}
                  />
                  <PlanCard 
                    title="Premium" 
                    subtitle="Personalização Total" 
                    features={['Treinamento Avançado (Deep Learning)', 'Integração CRM Completa', 'Tom de voz 100% da marca', 'Gerente de Conta Dedicado', 'Suporte Prioritário']}
                    cta="Cotar Premium"
                    onCta={() => handleConversion("Olá, gostaria de cotar o Plano Premium da Secretária Smart.")}
                  />
              </div>
          </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-20 bg-[#050508]">
          <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
              <div className="space-y-4">
                  <Accordion question="A Secretária Smart substitui uma secretária humana?">
                      Ela assume todas as tarefas repetitivas, agendamentos e triagem, permitindo que sua equipe humana foque em tarefas estratégicas e no atendimento presencial de alta qualidade.
                  </Accordion>
                  <Accordion question="Em quanto tempo ela pode ser implementada?">
                      O processo de configuração e treinamento básico leva entre 5 a 10 dias úteis, dependendo da complexidade do seu negócio.
                  </Accordion>
                  <Accordion question="Ela funciona apenas no WhatsApp?">
                      Não! O plano Profissional e Premium incluem integração com Instagram Direct, Facebook Messenger e até chat no site.
                  </Accordion>
                  <Accordion question="E se o cliente quiser falar com um humano?">
                      A IA identifica essa solicitação ou situações complexas e transfere o atendimento imediatamente para um atendente humano (handoff).
                  </Accordion>
                  <Accordion question="Posso alterar as configurações depois?">
                      Sim, nossa equipe oferece suporte contínuo para ajustes de agenda, preços e respostas conforme seu negócio evolui.
                  </Accordion>
              </div>
          </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="py-24 relative bg-[#020202] overflow-hidden text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-crealix-purple/20 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto px-4 relative z-10">
              <div className="mb-8 flex justify-center">
                   <div className="w-24 h-24 rounded-full border-2 border-crealix-pink/50 p-1">
                       {/* AVATAR FINAL - URL 2 */}
                       <img src={IMAGES.smartSecretary.lp} alt="Avatar" className="w-full h-full rounded-full object-cover" />
                   </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6">
                  Pronto para ter uma secretária que <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-crealix-blue to-crealix-pink">nunca esquece e nunca dorme?</span>
              </h2>
              
              <button 
                  onClick={() => handleConversion("Quero a Secretária Smart na minha empresa agora!")}
                  className="bg-gradient-to-r from-crealix-purple to-crealix-pink text-white font-bold text-xl px-12 py-6 rounded-full shadow-[0_0_40px_rgba(236,72,153,0.5)] hover:scale-105 transition-transform animate-pulse-slow mb-6"
              >
                  Quero a Secretária Smart na minha empresa
              </button>
              
              <p className="text-gray-500 text-sm">A Crealix cuida da configuração, você colhe os resultados.</p>
              
              <button onClick={onBack} className="mt-12 text-gray-600 hover:text-white underline text-sm">
                  Voltar para o site principal
              </button>
          </div>
      </section>
    </div>
  );
};

// --- Subcomponents for LP ---

const AudienceCard = ({ icon: Icon, title, desc, color }: any) => (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-300">
        <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 ${color}`}>
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{desc}</p>
    </div>
);

const PainPointItem = ({ text }: { text: string }) => (
    <li className="flex items-start gap-3 text-gray-400">
        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_5px_red] shrink-0"></div>
        {text}
    </li>
);

const FeatureCard = ({ icon: Icon, title, desc }: any) => (
    <div className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-crealix-purple/20 to-crealix-blue/20 flex items-center justify-center text-white shrink-0 border border-white/10">
            <Icon size={24} />
        </div>
        <div>
            <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
            <p className="text-sm text-gray-400">{desc}</p>
        </div>
    </div>
);

const StepCard = ({ step, title, desc }: any) => (
    <div className="relative z-10 bg-[#0A0A0F] border border-white/10 p-8 rounded-2xl text-center group hover:border-crealix-purple/50 transition-colors">
        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 text-xl font-bold flex items-center justify-center mx-auto mb-6 text-crealix-purple group-hover:bg-crealix-purple group-hover:text-white transition-all shadow-[0_0_15px_rgba(122,0,255,0.1)]">
            {step}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm">{desc}</p>
    </div>
);

const TestimonialCard = ({ name, role, text, img }: any) => (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 italic">
        <p className="text-gray-300 mb-6">"{text}"</p>
        <div className="flex items-center gap-3">
            <img src={img} alt={name} className="w-10 h-10 rounded-full grayscale opacity-70" />
            <div>
                <p className="text-white font-bold text-sm">{name}</p>
                <p className="text-xs text-gray-500 uppercase">{role}</p>
            </div>
        </div>
    </div>
);

const PlanCard = ({ title, subtitle, features, cta, isPopular, onCta }: any) => (
    <div className={`p-8 rounded-2xl border flex flex-col h-full ${isPopular ? 'bg-white/10 border-crealix-purple shadow-[0_0_30px_rgba(122,0,255,0.2)] scale-105 z-10' : 'bg-white/5 border-white/10'}`}>
        <div className="mb-6">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
        <ul className="space-y-4 mb-8 flex-1">
            {features.map((f: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle size={16} className={`shrink-0 mt-0.5 ${isPopular ? 'text-crealix-purple' : 'text-gray-500'}`} />
                    {f}
                </li>
            ))}
        </ul>
        <button 
            onClick={onCta}
            className={`w-full py-3 rounded-lg font-bold transition-all ${isPopular ? 'bg-crealix-purple hover:bg-crealix-purple/80 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
        >
            {cta}
        </button>
    </div>
);

const Accordion = ({ question, children }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-white/10 rounded-lg bg-white/5 overflow-hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 text-left font-bold text-white hover:bg-white/5 transition-colors"
            >
                {question}
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isOpen && (
                <div className="p-4 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5">
                    {children}
                </div>
            )}
        </div>
    );
};

export default SmartSecretaryLP;
