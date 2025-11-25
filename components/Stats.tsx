import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-[#08080C] border-b border-white/5 relative overflow-hidden">
       {/* Subtle Background Highlight */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-crealix-blue/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <AnimatedStat key={index} stat={stat} isVisible={isVisible} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedStat: React.FC<{ stat: any; isVisible: boolean; index: number }> = ({ stat, isVisible, index }) => {
  const [count, setCount] = useState(0);
  
  // Extract number and suffix/prefix
  const targetString = stat.value; // e.g. "150+" or "15M+"
  const numericValue = parseInt(targetString.replace(/\D/g, '')); // 150
  const suffix = targetString.replace(/[0-9]/g, ''); // "+" or "M+"

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = numericValue;
    const duration = 2000; // 2 seconds
    const incrementTime = Math.floor(duration / end);
    
    // Handle small numbers or very large numbers for smooth animation
    const step = end > 100 ? Math.ceil(end / 100) : 1;
    const timerDuration = end > 100 ? 20 : incrementTime;

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, timerDuration);

    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  return (
    <div className="text-center group p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
      <div className="mb-4 flex justify-center relative">
         <div className="absolute inset-0 bg-crealix-purple/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
         <stat.icon className="text-crealix-blue group-hover:text-crealix-pink transition-colors duration-300 relative z-10" size={36} />
      </div>
      <div className="text-3xl md:text-5xl font-display font-black text-white mb-2 tracking-tight">
        {isVisible ? count : 0}{suffix}
      </div>
      <div className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors">
        {stat.label}
      </div>
    </div>
  );
};

export default Stats;