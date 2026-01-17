
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
import { InteractiveFeature } from './components/InteractiveFeature';
import { ViewState } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [targetServiceId, setTargetServiceId] = useState<string | undefined>(undefined);
  
  // Transition State
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Scroll to top on view change (unless we are targeting a specific ID)
  useEffect(() => {
    if (!targetServiceId) {
      window.scrollTo(0, 0);
    }
  }, [currentView, targetServiceId]);

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

  const renderHome = () => (
    <>
      <Hero onCtaClick={() => handleNavNavigate('contact')} />
      <InteractiveFeature />
      <Stats />
      <Features />
      <Services onServiceClick={handleServiceNavigation} />
      <SmartSecretary />
      <Companies />
      <Testimonials />
      <Pricing />
      <CallToAction onContactClick={() => handleNavNavigate('contact')} />
    </>
  );

  const renderView = () => {
    switch (currentView) {
      case 'services':
        return <ServiceDetail targetId={targetServiceId} onContact={() => handleNavNavigate('contact')} />;
      case 'cases':
        return <Cases />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return renderHome();
    }
  };

  return (
    <div className={`min-h-screen bg-[#0A0A0F] text-white selection:bg-crealix-pink selection:text-white`}>
      <Navbar onNavigate={handleNavNavigate} currentView={currentView} />
      
      <main className={`transition-all duration-300 transform ${isTransitioning ? 'opacity-0 blur-sm scale-[0.98]' : 'opacity-100 blur-0 scale-100 animate-slide-up'}`}>
        {renderView()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
