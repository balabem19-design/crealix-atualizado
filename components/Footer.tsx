import React from 'react';
import { Instagram, Linkedin, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <span className="text-2xl font-display font-bold tracking-tighter text-white mb-6 block">
              CREALIX<span className="text-pink-500">.</span>
            </span>
            <p className="text-gray-400 text-sm max-w-sm mb-6">
              A agência que une inteligência artificial, design estratégico e performance para transformar negócios no digital.
            </p>
            <div className="flex gap-4">
              <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white transition-all">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Empresa</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-pink-500 transition-colors">Serviços</a></li>
              <li><a href="#results" className="hover:text-pink-500 transition-colors">Cases de Sucesso</a></li>
              <li><a href="#plans" className="hover:text-pink-500 transition-colors">Planos</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Sobre Nós</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-pink-500 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Crealix Marketing. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            Feito com <span className="text-pink-500">❤</span> e Tecnologia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;