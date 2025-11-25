import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Companies from './components/Companies';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import Cases from './components/Cases';
import Contact from './components/Contact';
import Stats from './components/Stats';
import SmartSecretary from './components/SmartSecretary';
import SmartSecretaryLP from './components/SmartSecretaryLP';
import { ViewState } from './types';
import { IMAGES } from './constants';

// Preloader Component
const Preloader = ({ onFinish }: { onFinish: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onFinish, 500); // Wait for exit animation
    }, 2500); // Minimum load time matches rotation
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0A0F] transition-all duration-500 ${isExiting ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="relative w-32 h-32 mb-8">
        {/* Pulsing Glow behind Cube */}
        <div className="absolute inset-0 bg-gradient-to-r from-crealix-pink via-crealix-purple to-crealix-blue rounded-full blur-2xl opacity-40 animate-pulse-slow"></div>
        
        {/* Rotating Cube */}
        <img 
          src={IMAGES.cube} 
          alt="Loading..." 
          className="w-full h-full object-contain animate-[spin_2.5s_linear_infinite] relative z-10 drop-shadow-[0_0_20px_rgba(122,0,255,0.5)]" 
        />
      </div>
      <h2 className="text-white font-display font-bold text-lg tracking-[0.3em] animate-fade-in">
        CARREGANDO...
      </h2>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [targetServiceId, setTargetServiceId] = useState<string | undefined>(undefined);
  
  // Transition State
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Scroll to top on view change (unless we are targeting a specific ID)
  useEffect(() => {
    if (!targetServiceId && !loading) {
      window.scrollTo(0, 0);
    }
  }, [currentView, targetServiceId, loading]);

  const handleServiceNavigation = (serviceId: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setTargetServiceId(serviceId);
      setCurrentView('services');
      setIsTransitioning(false);
    }, 300);
  };

  const handleNavNavigate = (view: ViewState) => {
    if (view === currentView && !targetServiceId) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (view !== 'services') {
        setTargetServiceId(undefined);
      }
      setCurrentView(view);
      setIsTransitioning(false);
    }, 300); // Match fade-out duration
  };

  const renderView = () => {
    switch (currentView) {
      case 'services':
        return (
           <ServiceDetail 
              targetId={targetServiceId} 
              onContact={() => handleNavNavigate('contact')} 
           />
        );
      case 'cases':
        return <Cases />;
      case 'contact':
        return <Contact />;
      case 'smart-secretary':
        return <SmartSecretaryLP onBack={() => handleNavNavigate('home')} />;
      case 'home':
      default:
        return (
          <>
            <Hero onCtaClick={() => handleNavNavigate('contact')} />
            <Stats />
            <Features />
            <SmartSecretary onNavigate={handleNavNavigate} />
            <Services onServiceClick={handleServiceNavigation} />
            <Companies />
            <Testimonials />
            <Pricing />
            <CallToAction onContactClick={() => handleNavNavigate('contact')} />
          </>
        );
    }
  };

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      
      <div className={`min-h-screen bg-[#0A0A0F] text-white selection:bg-crealix-pink selection:text-white ${loading ? 'h-screen overflow-hidden' : ''}`}>
        {!loading && (
          <>
            {/* Conditional Navbar: Hide standard navbar on exclusive LP, or keep it. 
                Prompt says "Landing page exclusiva". Usually standard nav is removed or simplified. 
                I will hide the main navbar for the LP view to focus on conversion. */}
            {currentView !== 'smart-secretary' && (
               <Navbar onNavigate={handleNavNavigate} currentView={currentView} />
            )}
            
            <main className={`transition-all duration-300 transform ${isTransitioning ? 'opacity-0 blur-sm scale-[0.98]' : 'opacity-100 blur-0 scale-100 animate-slide-up'}`}>
              {renderView()}
            </main>
            
            {/* Keep footer only if not on LP, as LP has its own footer/CTA section? 
                Prompt implies a "CTA Final" section. Standard footer might distract. 
                I will hide standard footer for LP. */}
            {currentView !== 'smart-secretary' && <Footer />}
          </>
        )}
      </div>
    </>
  );
}

export default App;