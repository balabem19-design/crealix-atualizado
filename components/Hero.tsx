import React, { useEffect, useRef, useState } from 'react';
import { Rocket } from 'lucide-react';
import { IMAGES } from '../constants';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let animationFrameId: number;
    
    // Track mouse for interaction
    const mouse = { x: -1000, y: -1000 };

    // Dynamic configuration based on screen size
    const getConfig = () => {
      const isMobile = window.innerWidth < 768;
      return {
        particleCount: isMobile ? 40 : 90, // Reduced on mobile
        connectionDistance: isMobile ? 100 : 160,
        pulseCount: isMobile ? 0 : 6, // Disable pulses on mobile for performance
        glowIntensity: isMobile ? 5 : 15,
        baseVelocity: 0.5,
        colors: ['#00D4FF', '#7A00FF', '#FF00D4']
      };
    };

    let config = getConfig();

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * config.baseVelocity;
        this.vy = (Math.random() - 0.5) * config.baseVelocity;
        this.size = Math.random() * 2 + 1.5;
        this.color = config.colors[Math.floor(Math.random() * config.colors.length)];
      }

      update() {
        // Interaction: Attract to mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 300;

        if (distance < interactionRadius) {
          const force = (interactionRadius - distance) / interactionRadius;
          const strength = 0.03; // Gentle attraction
          this.vx += (dx / distance) * force * strength;
          this.vy += (dy / distance) * force * strength;
        }

        // Friction (damping) to prevent infinite acceleration
        this.vx *= 0.98;
        this.vy *= 0.98;

        // Maintain minimum ambient movement
        if (Math.abs(this.vx) < 0.1) this.vx += (Math.random() - 0.5) * 0.05;
        if (Math.abs(this.vy) < 0.1) this.vy += (Math.random() - 0.5) * 0.05;

        this.x += this.vx;
        this.y += this.vy;

        // Boundary Bounce
        if (this.x < 0 || this.x > width) {
          this.vx *= -1;
          this.x = Math.max(0, Math.min(width, this.x));
        }
        if (this.y < 0 || this.y > height) {
          this.vy *= -1;
          this.y = Math.max(0, Math.min(height, this.y));
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        
        if (config.glowIntensity > 0) {
          ctx.shadowBlur = config.glowIntensity;
          ctx.shadowColor = this.color;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    class Pulse {
      startNode: Particle | null = null;
      endNode: Particle | null = null;
      progress = 0;
      speed = 0.02;
      active = false;

      findPath(particles: Particle[]) {
        if (particles.length < 2) return;
        
        const startIdx = Math.floor(Math.random() * particles.length);
        const start = particles[startIdx];
        let bestTarget: Particle | null = null;

        // Find a nearby neighbor to travel to
        for (let i = 0; i < particles.length; i++) {
          if (i === startIdx) continue;
          const p = particles[i];
          const dist = Math.hypot(p.x - start.x, p.y - start.y);
          if (dist < config.connectionDistance) {
            bestTarget = p;
            break;
          }
        }

        if (bestTarget) {
          this.startNode = start;
          this.endNode = bestTarget;
          this.progress = 0;
          this.active = true;
          this.speed = 0.02 + Math.random() * 0.03;
        }
      }

      update(particles: Particle[]) {
        if (!this.active) {
          // Randomly spawn new pulses
          if (Math.random() < 0.015) this.findPath(particles);
          return;
        }

        if (!this.startNode || !this.endNode) {
          this.active = false;
          return;
        }

        // If connection is broken (too far), kill pulse
        const dist = Math.hypot(this.endNode.x - this.startNode.x, this.endNode.y - this.startNode.y);
        if (dist > config.connectionDistance + 20) {
          this.active = false;
          return;
        }

        this.progress += this.speed;
        
        // When pulse reaches destination
        if (this.progress >= 1) {
          // Try to chain to next node
          this.startNode = this.endNode;
          this.endNode = null;
          this.progress = 0;
          
          // Find next connection
          for (const p of particles) {
             if (p === this.startNode) continue;
             if (Math.hypot(p.x - this.startNode.x, p.y - this.startNode.y) < config.connectionDistance) {
                 this.endNode = p;
                 break;
             }
          }
          
          // If no path continues, die
          if (!this.endNode) this.active = false;
        }
      }

      draw() {
        if (!this.active || !this.startNode || !this.endNode || !ctx) return;
        
        const x = this.startNode.x + (this.endNode.x - this.startNode.x) * this.progress;
        const y = this.startNode.y + (this.endNode.y - this.startNode.y) * this.progress;
        
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#ffffff';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    let particles: Particle[] = [];
    let pulses: Pulse[] = [];

    const init = () => {
      // Refresh config based on new width
      config = getConfig();
      
      particles = [];
      pulses = [];
      
      for (let i = 0; i < config.particleCount; i++) {
        particles.push(new Particle());
      }
      for (let i = 0; i < config.pulseCount; i++) {
        pulses.push(new Pulse());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Lines first (background layer)
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < config.connectionDistance) {
            const opacity = 1 - (dist / config.connectionDistance);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            // Very subtle gradient lines matching the theme
            ctx.strokeStyle = `rgba(122, 0, 255, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // 2. Draw Particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // 3. Draw Energy Pulses (top layer)
      pulses.forEach(p => {
        p.update(particles);
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init(); // Re-initialize to adjust particle count for mobile/desktop
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Adjust for scroll if necessary, but for fixed hero usually clientX/Y is fine relative to viewport
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      setMousePos({ x: e.clientX, y: e.clientY }); // Update state for spotlight
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative pt-28 pb-12 lg:pt-0 lg:pb-0 min-h-[90vh] lg:h-screen overflow-hidden flex items-center bg-[#0A0A0F]"
    >
      {/* 2.4 Iluminação Reativa ao Cursor (Spotlight) */}
      <div 
        className="fixed pointer-events-none z-[5] transition-opacity duration-300"
        style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(122, 0, 255, 0.07), transparent 40%)`
        }}
      ></div>

      {/* 2.1 Neblina Neon em Camadas (Mist Layers) with Parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         {/* Layer 1 - Slow */}
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#7A00FF]/5 to-transparent animate-[mistFlow_20s_ease-in-out_infinite_alternate] opacity-60"></div>
         {/* Layer 2 - Medium Inverse */}
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent via-[#00D4FF]/5 to-transparent animate-[mistFlow_15s_ease-in-out_infinite_alternate-reverse] opacity-40" style={{animationDelay: '2s'}}></div>
         {/* Layer 3 - Fast Accent */}
         <div className="absolute top-[-20%] right-[-20%] w-[800px] h-[800px] bg-[#FF00D4]/5 rounded-full blur-[120px] animate-pulse-slow"></div>
         <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#00D4FF]/5 rounded-full blur-[120px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      {/* 2.2 Feixe de Luz Lateral (Light Beam) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-[300px] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] animate-beam-slide blur-xl mix-blend-overlay"></div>
      </div>

      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0 pointer-events-none mix-blend-screen" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Content Block */}
        <div className="text-left relative">
          
          {/* Mobile Layout: Title + Cube */}
          <div className="flex flex-row items-center justify-between gap-2 lg:block">
            {/* 2.3 Destaque Cinemático no Título */}
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-black leading-[1.1] mb-6 tracking-tight text-white flex-1 drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              INTELIGÊNCIA,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#7A00FF] to-[#FF00D4] animate-pulse">DESIGN E</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00D4] to-[#7A00FF]">PERFORMANCE</span><br />
              PARA SUA MARCA.
            </h1>

            {/* Mobile Cube */}
            <div className="lg:hidden relative w-[100px] h-[100px] flex-shrink-0">
                <div className="animate-float">
                   <img 
                       src={IMAGES.cube} 
                       alt="Crealix 3D Cube" 
                       className="w-full h-full object-contain relative z-10" 
                   />
                </div>
            </div>
          </div>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 max-w-xl leading-relaxed mr-auto lg:mx-0 font-light">
            Unimos criatividade humana e tecnologia para impulsionar negócios com automação, branding e resultados reais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <button 
              onClick={onCtaClick}
              className="group relative bg-gradient-to-r from-crealix-blue via-crealix-purple to-crealix-pink px-8 py-4 rounded-lg font-bold text-base md:text-lg text-white shadow-[0_0_20px_rgba(122,0,255,0.4)] hover:shadow-[0_0_40px_rgba(255,0,212,0.6)] transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_linear_infinite]"></div>
              <Rocket className="group-hover:rotate-12 transition-transform relative z-10" size={20} />
              <span className="relative z-10">Quero Impulsionar Meu Negócio</span>
            </button>
          </div>
        </div>

        {/* Desktop Cube - Floating Only */}
        <div className="hidden lg:flex relative justify-center items-center perspective-container">
            <div className="relative w-[130px] h-[130px] md:w-[200px] md:h-[200px]">
                {/* Wrapper for floating animation */}
                <div className="w-full h-full">
                    {/* Floating Animation */}
                    <div className="w-full h-full animate-float">
                        <img 
                            src={IMAGES.cube} 
                            alt="Crealix 3D Cube" 
                            className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(122,0,255,0.5)] relative z-10" 
                        />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;