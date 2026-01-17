
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent } from './ui/card';
import { Marquee } from './ui/3d-testimonials';

const crealixTestimonials = [
  {
    name: 'Carlos Mendes',
    username: '@carlos_tech',
    body: 'A Crealix transformou nossa operação com IA. O ROI foi imediato!',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    country: '🇧🇷 Brasil',
  },
  {
    name: 'Juliana Silva',
    username: '@ju_ecom',
    body: 'A automação de WhatsApp da Crealix é outro nível. Vendas 24/7!',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    country: '🇧🇷 Brasil',
  },
  {
    name: 'Roberto Amaral',
    username: '@roberto_ceo',
    body: 'Branding e Performance unidos. Minha marca nunca teve tanta autoridade.',
    img: 'https://randomuser.me/api/portraits/men/45.jpg',
    country: '🇧🇷 Brasil',
  },
  {
    name: 'Ana Paula',
    username: '@anapaula_mkt',
    body: 'O design das Landing Pages é impecável. Conversão dobrou em 1 mês.',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
    country: '🇧🇷 Brasil',
  },
  {
    name: 'Felipe Costa',
    username: '@felipe_crypto',
    body: 'Tecnologia de ponta. A Crealix está anos luz à frente do mercado.',
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
    country: '🇧🇷 Brasil',
  },
  {
    name: 'Mariana Luz',
    username: '@mari_startup',
    body: 'A Secretária Smart resolveu nosso gargalo de atendimento. Incrível!',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    country: '🇧🇷 Brasil',
  },
];

// Defined interface to ensure the component handles React props like 'key' correctly
interface TestimonialCardProps {
  img: string;
  name: string;
  username: string;
  body: string;
  country: string;
  // Added optional key property to satisfy TypeScript when spreading props alongside a key in JSX
  key?: string;
}

// Fixed: Using explicit interface for props to resolve property 'key' error and other JSX mismatches
function TestimonialCard({ img, name, username, body, country }: TestimonialCardProps) {
  return (
    <Card className="w-64 bg-white/5 border-white/10 backdrop-blur-md">
      <CardContent className="p-4">
        <div className="flex items-center gap-2.5">
          <Avatar className="size-9 border border-crealix-purple/30">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-white flex items-center gap-1">
              {name} <span className="text-xs opacity-70">{country}</span>
            </figcaption>
            <p className="text-xs font-medium text-crealix-blue">{username}</p>
          </div>
        </div>
        <blockquote className="mt-3 text-sm text-gray-300 italic">"{body}"</blockquote>
      </CardContent>
    </Card>
  );
}

export default function TestimonialsMarquee() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden gap-4 [perspective:1000px] py-10">
      <div
        className="flex flex-row items-center gap-6"
        style={{
          transform:
            'rotateX(15deg) rotateY(-10deg) rotateZ(5deg)',
        }}
      >
        <Marquee vertical pauseOnHover repeat={3} className="[--duration:30s]">
          {crealixTestimonials.map((review) => (
            <TestimonialCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:35s]">
          {crealixTestimonials.slice().reverse().map((review) => (
            <TestimonialCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee vertical pauseOnHover repeat={3} className="[--duration:32s] hidden md:flex">
          {crealixTestimonials.map((review) => (
            <TestimonialCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>

      {/* Sombras de gradiente para suavizar as bordas do efeito 3D */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050505]"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505]"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505]"></div>
    </div>
  );
}
