
'use client'

import React from 'react';
import { SplineScene } from "./ui/splite";
import { Card } from "./ui/card";
import { Spotlight } from "./ui/spotlight";
import { MousePointer2 } from 'lucide-react';

export function InteractiveFeature() {
  return (
    <section className="py-24 bg-black overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Card className="w-full h-auto lg:h-[650px] bg-black/[0.96] relative overflow-hidden rounded-[2.5rem] border-white/5 shadow-2xl group flex flex-col lg:flex-row">
          {/* Spotlight Interativo (Efeito de Cursor) */}
          <Spotlight className="from-crealix-purple/30 via-crealix-blue/10" size={500} />
          
          <div className="flex h-full w-full flex-col lg:flex-row">
            {/* Left content - Adaptado para Crealix conforme o layout do prompt */}
            <div className="flex-1 p-8 md:p-16 lg:p-20 relative z-20 flex flex-col justify-center order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-crealix-purple/10 border border-crealix-purple/20 text-crealix-purple text-xs font-bold uppercase tracking-widest mb-8 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crealix-purple opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-crealix-purple"></span>
                </span>
                Interactive 3D
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-black leading-[1.1] text-white mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                DESIGN QUE <br />
                <span className="text-crealix-pink">GANHA VIDA</span>
              </h1>
              
              <p className="mt-4 text-neutral-300 max-w-lg text-lg md:text-xl font-light leading-relaxed mb-8">
                Traga sua interface para uma nova dimensão. Crie experiências imersivas que capturam a atenção e elevam a autoridade da sua marca instantaneamente.
              </p>

              <div className="flex items-center gap-4 text-xs font-bold text-crealix-blue uppercase tracking-[0.2em] group-hover:text-crealix-pink transition-colors duration-300">
                <MousePointer2 size={16} className="animate-bounce" />
                Interaja com o guardião Crealix
              </div>
            </div>

            {/* Right content - Spline Scene com escala reduzida */}
            <div className="flex-1 relative h-[450px] lg:h-full order-1 lg:order-2 overflow-visible">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full transform scale-[0.65] md:scale-[0.8] lg:scale-[0.9] transition-transform duration-700"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
