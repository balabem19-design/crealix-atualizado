import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ViewState } from '../types';
import { IMAGES } from '../constants';

interface NavbarProps {
  onNavigate: (view: ViewState) => void;
  currentView: ViewState;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    setIsOpen(false);

    // Independent Views (Contact, Cases, Home top)
    if (target === 'contact') {
      onNavigate('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'cases') {
      onNavigate('cases');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'home') {
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Section Navigation for Home Page Anchors (Services, Plans, Results/Testimonials)
    const scrollToSection = () => {
      const element = document.getElementById(target);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    if (currentView !== 'home') {
      onNavigate('home');
      // Wait for view transition/render then scroll
      setTimeout(scrollToSection, 100);
    } else {
      scrollToSection();
    }
  };

  const navLinkClasses = "text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-crealix-pink transition-colors cursor-pointer";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0A0F]/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={(e) => handleNavigation(e, 'home')}
        >
            <img src={IMAGES.logo} alt="Crealix" className="h-8 sm:h-10 drop-shadow-[0_0_10px_rgba(255,0,212,0.3)] transition-transform group-hover:scale-105" />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" onClick={(e) => handleNavigation(e, 'home')} className={navLinkClasses}>Início</a>
          <a href="#services" onClick={(e) => handleNavigation(e, 'services')} className={navLinkClasses}>Serviços</a>
          <a href="#plans" onClick={(e) => handleNavigation(e, 'plans')} className={navLinkClasses}>Planos</a>
          <a href="#" onClick={(e) => handleNavigation(e, 'cases')} className={navLinkClasses}>Cases</a>
          
          <button 
            onClick={(e) => handleNavigation(e, 'contact')}
            className="bg-gradient-to-r from-crealix-blue to-crealix-purple px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide hover:opacity-90 transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] text-white"
          >
            Contato
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 hover:text-crealix-pink transition-colors">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full h-screen bg-[#0A0A0F]/95 backdrop-blur-xl p-8 flex flex-col space-y-8 animate-fade-in border-t border-white/10">
          <a href="#" onClick={(e) => handleNavigation(e, 'home')} className="text-2xl font-bold text-white hover:text-crealix-pink text-left">INÍCIO</a>
          <a href="#services" onClick={(e) => handleNavigation(e, 'services')} className="text-2xl font-bold text-white hover:text-crealix-pink text-left">SERVIÇOS</a>
          <a href="#plans" onClick={(e) => handleNavigation(e, 'plans')} className="text-2xl font-bold text-white hover:text-crealix-pink text-left">PLANOS</a>
          <a href="#" onClick={(e) => handleNavigation(e, 'cases')} className="text-2xl font-bold text-white hover:text-crealix-pink text-left">CASES</a>
          <button onClick={(e) => handleNavigation(e, 'contact')} className="bg-gradient-to-r from-crealix-blue to-crealix-pink px-6 py-4 rounded-lg text-center font-bold w-full text-white shadow-lg uppercase">
            Entre em Contato
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;