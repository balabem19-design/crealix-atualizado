
import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Stats from './components/Stats';
import { ViewState } from './types';

// Lazy loading components for performance optimization
const InteractiveFeature = lazy(() => import('./components/InteractiveFeature').then(m => ({ default: m.InteractiveFeature })));
const Services = lazy(() => import('./components/Services'));
const Features = lazy(() => import('./components/Features'));
const Companies = lazy(() => import('./components/Companies'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Pricing = lazy(() => import('./components/Pricing'));
const CallToAction = lazy(() => import('./components/CallToAction'));
const ServiceDetail = lazy(() => import('./components/ServiceDetail'));
const Cases = lazy(() => import('./components/Cases'));
const Contact = lazy(() => import('./components/Contact'));
const SmartSecretary = lazy(() => import('./components/SmartSecretary'));

const Loader = () => (
  <div className="flex items-center justify-center min-h-[300px]">
    <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-crealix-purple animate-spin"></div>
  </div>
);

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
      <Stats />
      <Suspense fallback={<Loader />}>
        <InteractiveFeature />
        <Features />
        <Services onServiceClick={handleServiceNavigation} />
        <SmartSecretary />
        <Companies />
        <Testimonials />
        <Pricing />
        <CallToAction onContactClick={() => handleNavNavigate('contact')} />
      </Suspense>
    </>
  );

  const renderView = () => {
    switch (currentView) {
      case 'services':
        return (
          <Suspense fallback={<Loader />}>
            <ServiceDetail targetId={targetServiceId} onContact={() => handleNavNavigate('contact')} />
          </Suspense>
        );
      case 'cases':
        return (
          <Suspense fallback={<Loader />}>
            <Cases />
          </Suspense>
        );
      case 'contact':
        return (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        );
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
