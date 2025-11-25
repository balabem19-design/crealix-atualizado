import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  // FIX: Explicitly define the type for the formData state to prevent type widening
  // when using computed property names in the 'handleChange' function. This ensures
  // that 'keyof typeof formData' remains a union of string literals ('name' | 'email' | ...)
  // instead of a broad 'string | number', resolving the type error.
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    whatsapp: string;
    message: string;
  }>({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });

  const [touched, setTouched] = useState<{
    name: boolean;
    email: boolean;
    whatsapp: boolean;
    message: boolean;
  }>({
    name: false,
    email: false,
    whatsapp: false,
    message: false
  });

  // FIX: Changed `field` type from `string` to the more specific `keyof typeof formData`.
  // This ensures type safety and resolves the error where the compiler couldn't
  // assign the specific key to the broader `string` type.
  const isValid = (field: keyof typeof formData, value: string) => {
    if (!value) return false;
    if (field === 'email') return /\S+@\S+\.\S+/.test(value);
    if (field === 'whatsapp') return value.length >= 10;
    return value.length > 2;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, whatsapp, message } = formData;
    if (!name || !email || !whatsapp) return;

    const finalMessage = 
      "Olá, me chamo " + name + "\n" +
      "Email: " + email + "\n" +
      "WhatsApp: " + whatsapp + "\n\n" +
      "Mensagem: " + message;

    const url = 
      "https://api.whatsapp.com/send?phone=" + CONTACT_INFO.whatsapp + "&text=" + 
      encodeURIComponent(finalMessage);

    window.open(url, "_blank");
  };

  const getInputClass = (field: keyof typeof formData) => {
    const baseClass = "w-full bg-[#050508] rounded-lg px-4 py-3 text-white focus:outline-none transition-all shadow-inner border";
    // FIX: With the state type now correctly defined, 'formData[field]' is guaranteed
    // to be a string, so the explicit 'String()' cast is no longer necessary.
    const valid = isValid(field, formData[field]);
    
    if (touched[field]) {
      return valid 
        ? `${baseClass} border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.3)] bg-green-500/5` 
        : `${baseClass} border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]`;
    }
    
    return `${baseClass} border-white/10 focus:border-crealix-purple focus:shadow-[0_0_15px_rgba(122,0,255,0.3)] focus:bg-[#0A0A0F]`;
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#0A0A0F] flex items-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-crealix-blue/10 to-crealix-purple/10 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <span className="text-crealix-pink font-bold tracking-widest uppercase text-sm mb-4 block">Fale Conosco</span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6">
                    VAMOS CRIAR ALGO <span className="text-gradient animate-pulse">EXTRAORDINÁRIO</span>?
                </h1>
                <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                    Estamos prontos para entender seu negócio e traçar a melhor estratégia. Preencha o formulário e entraremos em contato rapidamente.
                </p>
                
                <div className="space-y-6">
                    <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-crealix-green/30 transition-colors cursor-pointer group">
                        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.2)] group-hover:scale-110 transition-transform">
                            <MessageCircle size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 font-bold">WhatsApp Comercial</p>
                            <p className="text-lg text-white font-bold">{CONTACT_INFO.whatsappDisplay}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-crealix-blue/30 transition-colors cursor-pointer group">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:scale-110 transition-transform">
                            <Send size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 font-bold">E-mail Oficial</p>
                            <p className="text-lg text-white font-bold">{CONTACT_INFO.email}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="glass-panel p-6 md:p-10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 transform hover:scale-[1.01] transition-transform duration-500 relative overflow-hidden">
                {/* Form Glow Effect */}
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 animate-[beamSlide_8s_infinite] pointer-events-none"></div>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="relative">
                        <label className="block text-sm font-bold text-gray-400 mb-2">Seu Nome</label>
                        <input 
                            type="text" 
                            name="name"
                            required
                            className={getInputClass('name')}
                            placeholder="Como podemos te chamar?"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.name && isValid('name', formData.name) && (
                            <CheckCircle size={18} className="absolute right-4 top-[42px] text-green-500 animate-fade-in" />
                        )}
                    </div>
                    <div className="relative">
                        <label className="block text-sm font-bold text-gray-400 mb-2">Seu E-mail</label>
                        <input 
                            type="email" 
                            name="email"
                            required
                            className={getInputClass('email')}
                            placeholder="seu@email.com"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.email && isValid('email', formData.email) && (
                            <CheckCircle size={18} className="absolute right-4 top-[42px] text-green-500 animate-fade-in" />
                        )}
                    </div>
                    <div className="relative">
                        <label className="block text-sm font-bold text-gray-400 mb-2">WhatsApp</label>
                        <input 
                            type="tel" 
                            name="whatsapp"
                            required
                            className={getInputClass('whatsapp')}
                            placeholder="(00) 00000-0000"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                         {touched.whatsapp && isValid('whatsapp', formData.whatsapp) && (
                            <CheckCircle size={18} className="absolute right-4 top-[42px] text-green-500 animate-fade-in" />
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-400 mb-2">Mensagem</label>
                        <textarea 
                            name="message"
                            rows={4}
                            className={getInputClass('message')}
                            placeholder="Conte um pouco sobre seu projeto..."
                            onChange={handleChange}
                            onBlur={handleBlur}
                        ></textarea>
                    </div>
                    
                    <button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-crealix-blue to-crealix-purple hover:to-crealix-pink py-4 rounded-lg font-bold text-white shadow-lg shadow-purple-900/30 transition-all flex items-center justify-center gap-2 group overflow-hidden relative hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,0,212,0.4)]"
                    >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                        <Send size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
                        <span className="relative z-10">Enviar Mensagem</span>
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
