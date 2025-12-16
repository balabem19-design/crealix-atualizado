

import { 
  Globe, 
  Share2, 
  Palette, 
  Target, 
  MessageSquare, 
  Bot, 
  Users, 
  Zap, 
  TrendingUp, 
  Clock,
  Cpu,
  Rocket
} from 'lucide-react';
import { Service, PricingPlan, Testimonial, Feature, CaseStudy } from './types';

// Contact Info
export const CONTACT_INFO = {
  whatsapp: '5541988386087',
  whatsappDisplay: '(41) 98838-6087',
  email: 'contato@crealixmarketing.com',
  instagram: 'https://www.instagram.com/crealix.marketing/'
};

// Image Assets
export const IMAGES = {
  logo: 'https://i.ibb.co/JWvg1Sxb/crealix-logo-gradient.png',
  footerLogo: 'https://i.ibb.co/nsxt8KQm/logo-Crealix-fundo-transparente.png',
  cube: 'https://i.ibb.co/Z6w1Y0Bs/crealix-3d-cube.png',
  robot: 'https://i.ibb.co/b5rtrGDM/robo-crealix-fundo-transparente.png',
  smartSecretary: {
    // IMAGEM 1 (FIXA/OFICIAL) - USAR SOMENTE NA HOME PAGE
    home: 'https://i.ibb.co/HfBw9DhH/avatar-Secretaria-Smart-1024x919.webp',
  },
  services: {
    website: 'https://i.ibb.co/CKDbDZJC/service-website.png',
    social: 'https://i.ibb.co/99qbbrnM/service-social.png',
    branding: 'https://i.ibb.co/93sVTwV2/0a80159b-b487-49f0-b9a1-f22cb1fc67aa.png',
    traffic: 'https://i.ibb.co/GfQv6tt9/service-traffic.png',
    automation: 'https://i.ibb.co/4wjBsQcR/service-automation.png',
    ai: 'https://i.ibb.co/21PSTXGQ/service-ai.jpg',
  }
};

export const COMPANIES = [
  'NeoTech Solutions',
  'Bravus Motors',
  'Horizonte Center',
  'MundoPet Center',
  'SoftLink Systems',
  'Golden Home Design',
  'Orbital Labs',
  'Vox Digital',
  'PrimeStore Brasil',
  'UltraCommerce Cloud'
];

export const SERVICES: Service[] = [
  {
    id: 'websites',
    title: 'Websites e Landing Pages',
    shortDescription: 'Desenvolvimento moderno, responsivo e otimizado para conversão.',
    fullDescription: 'Desenvolvemos sites de alta performance que unem design impactante e tecnologia de ponta. Focados em SEO e experiência do usuário (UX), transformamos visitantes em leads qualificados desde o primeiro clique.',
    icon: Globe,
    imageUrl: IMAGES.services.website,
    benefits: ['Carregamento em menos de 2s', 'Otimização SEO Técnica', 'Design Mobile-First', 'Painel administrativo fácil'],
    differentiation: ['Arquitetura de conversão', 'Hospedagem Cloud inclusa', 'Integração direta com WhatsApp'],
    process: ['Briefing e Estratégia', 'Wireframe e Design UI', 'Desenvolvimento Full-Stack', 'Testes de Performance e Lançamento'],
    deliveryTime: '15 a 30 dias'
  },
  {
    id: 'socialmedia',
    title: 'Social Media e Conteúdo',
    shortDescription: 'Planejamento, design e gestão de redes sociais com foco em autoridade.',
    fullDescription: 'Transformamos sua rede social em um canal de autoridade e vendas. Nossa equipe cria estratégias de conteúdo alinhadas ao funil de vendas, garantindo que cada post tenha um propósito claro: engajar, educar ou vender.',
    icon: Share2,
    imageUrl: IMAGES.services.social,
    benefits: ['Calendário Editorial Estratégico', 'Design High-End', 'Legendas com Copywriting Persuasivo', 'Relatórios de Crescimento'],
    differentiation: ['Foco em métricas de negócio', 'Trend-hunting diário', 'Produção de roteiros para Reels'],
    process: ['Auditoria de Perfil', 'Definição de Linha Editorial', 'Produção Visual e Textual', 'Agendamento e Community Management'],
    deliveryTime: 'Recorrente mensal'
  },
  {
    id: 'branding',
    title: 'Branding e Identidade Visual',
    shortDescription: 'Criação de logos, paleta e conceito visual da marca.',
    fullDescription: 'Sua marca é o ativo mais valioso do seu negócio. Criamos identidades visuais que comunicam essência e profissionalismo, garantindo que sua empresa seja lembrada e reconhecida instantaneamente no mercado.',
    icon: Palette,
    imageUrl: IMAGES.services.branding,
    benefits: ['Logo Responsivo e Versátil', 'Manual da Marca Completo', 'Tipografia Exclusiva', 'Aplicações em Papelaria'],
    differentiation: ['Pesquisa semiótica aprofundada', 'Apresentação conceitual imersiva', 'Arquivos em vetor editáveis'],
    process: ['Imersão e Pesquisa', 'Brainstorming e Conceituação', 'Design e Refinamento', 'Entrega do Brandbook'],
    deliveryTime: '20 a 40 dias'
  },
  {
    id: 'trafego',
    title: 'Gestão de Tráfego Pago',
    shortDescription: 'Campanhas Meta Ads e Google Ads otimizadas para resultados reais.',
    fullDescription: 'Chega de gastar dinheiro sem retorno. Gerenciamos suas campanhas de anúncios com foco total em ROI (Retorno sobre Investimento). Utilizamos inteligência de dados para encontrar seu cliente ideal no momento certo de compra.',
    icon: Target,
    imageUrl: IMAGES.services.traffic,
    benefits: ['Segmentação de Público Avançada', 'Remarketing Inteligente', 'Dashboard de Resultados em Tempo Real', 'Otimização Diária'],
    differentiation: ['Criação de criativos inclusa', 'Rastreamento avançado (API de Conversões)', 'Testes A/B contínuos'],
    process: ['Setup de Contas e Pixels', 'Planejamento de Mídia', 'Criação e Lançamento', 'Otimização e Escala'],
    deliveryTime: 'Recorrente mensal'
  },
  {
    id: 'automacoes',
    title: 'Automação de Atendimento',
    shortDescription: 'Fluxos automatizados para Instagram, Facebook e WhatsApp.',
    fullDescription: 'Automatize a comunicação do seu negócio e não perca mais vendas por demora na resposta. Criamos fluxos de conversa inteligentes que qualificam leads, tiram dúvidas e agendam reuniões automaticamente, 24/7.',
    icon: MessageSquare,
    imageUrl: IMAGES.services.automation,
    benefits: ['Atendimento Imediato', 'Qualificação Automática de Leads', 'Integração com CRM', 'Recuperação de Carrinho'],
    differentiation: ['Fluxos humanizados', 'Gatilhos por palavras-chave', 'Dashboard de conversas'],
    process: ['Mapeamento da Jornada', 'Desenho do Fluxo', 'Implementação Técnica', 'Testes de Cenário'],
    deliveryTime: '7 a 15 dias'
  },
  {
    id: 'agente-ia',
    title: 'Agentes de IA Personalizados',
    shortDescription: 'Atendimento inteligente 24h para suporte e vendas.',
    fullDescription: 'Implemente a verdadeira Revolução da IA no seu negócio. Treinamos agentes virtuais com os dados da sua empresa para atuar como vendedores ou suporte técnico de nível especialista, capazes de manter conversas complexas e fechar negócios.',
    icon: Bot,
    imageUrl: IMAGES.services.ai,
    benefits: ['Aprendizado Contínuo da Base de Conhecimento', 'Tom de Voz da Marca', 'Respostas Contextuais Complexas', 'Redução Drástica de Custo Operacional'],
    differentiation: ['Treinamento com dados proprietários', 'Análise de sentimento', 'Handoff para humano quando necessário'],
    process: ['Curadoria de Dados', 'Treinamento do Modelo', 'Integração API', 'Monitoramento e Ajuste Fino'],
    deliveryTime: '15 a 30 dias'
  }
];

export const FEATURES: Feature[] = [
  {
    title: 'Inovação com IA aplicada',
    description: 'Tecnologia de ponta para automação e inteligência de negócios',
    icon: Cpu
  },
  {
    title: 'Design e Branding com propósito',
    description: 'Identidade visual estratégica que comunica e converte',
    icon: Palette
  },
  {
    title: 'Estratégias que geram performance',
    description: 'Resultados mensuráveis e crescimento consistente',
    icon: Rocket
  },
  {
    title: 'Automação inteligente 24h',
    description: 'Sistemas que trabalham por você, sem parar',
    icon: Bot
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Maria Lopes',
    role: 'Empreendedora',
    content: 'A Crealix revolucionou nosso digital. Atendimento impecável e resultado visível.',
    avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Eduardo Campos',
    role: 'Loja Virtual',
    content: 'Automação e branding impecáveis. Meu faturamento dobrou em 2 meses.',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Ana Ribeiro',
    role: 'Consultora',
    content: 'Equipe criativa e ágil. Trabalho de alto nível.',
    avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    name: 'Carlos Mendes',
    role: 'CEO Startup Tech',
    content: 'O ROI das campanhas superou todas as expectativas. Profissionalismo total.',
    avatarUrl: 'https://randomuser.me/api/portraits/men/22.jpg'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'START',
    price: 'R$297',
    description: 'Ideal para pequenos negócios iniciando no digital.',
    minimumContract: '2 meses',
    features: [
      'Gestão básica de redes sociais',
      '6 artes mensais',
      '1 landing page simples',
      'Suporte via WhatsApp comercial'
    ]
  },
  {
    name: 'BASIC',
    price: 'R$497',
    description: 'Gestão profissional para marcas em crescimento.',
    minimumContract: '3 meses',
    features: [
      'Social media completo',
      '12 artes mensais',
      '1 vídeo curto por mês',
      'Otimização de branding',
      'Suporte prioritário'
    ]
  },
  {
    name: 'PRO',
    price: 'R$997',
    description: 'O mais vendido — foco em performance.',
    isPopular: true,
    minimumContract: '3 meses',
    features: [
      'Social media completo',
      '20 artes mensais',
      '4 vídeos curtos',
      'Gestão de tráfego pago (até 3 campanhas)',
      'Ajustes ilimitados de identidade visual',
      'Automação básica',
      'Relatórios mensais'
    ]
  },
  {
    name: 'ADVANCED',
    price: 'R$1.997',
    description: 'Para empresas que querem escala máxima.',
    minimumContract: '3 meses',
    features: [
      'Social media completo + produção avançada',
      '30 artes mensais',
      '8 vídeos curtos',
      'Tráfego pago avançado (até 6 campanhas)',
      'Automação completa',
      'Agente de IA personalizado',
      'Suporte premium 24/7'
    ]
  }
];

export const CASES: CaseStudy[] = [
  {
    id: 'bella-vita',
    client: 'Bella Vita Cosméticos',
    segment: 'cosméticos & beleza',
    services: 'identidade visual, social media, tráfego pago, landing page',
    results: [
      { label: 'aumento em vendas', value: '+120%' },
      { label: 'engajamento', value: '+65%' },
      { label: 'retorno sobre investimento', value: '3.8x' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'magnus',
    client: 'Magnus Streetwear',
    segment: 'moda urbana',
    services: 'social media, design, tráfego pago',
    results: [
      { label: 'novos seguidores', value: '+15k' },
      { label: 'alcance orgânico', value: '+90%' },
      { label: 'vendas', value: '+110%' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'vidasaude',
    client: 'Clínica VidaSaúde',
    segment: 'saúde e bem-estar',
    services: 'Agente de IA personalizado + automação de WhatsApp',
    results: [
      { label: 'ocupação da agenda', value: '95%' },
      { label: 'agendamentos', value: '24/7' },
      { label: 'economia semanal', value: '35h' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cafe-aurora',
    client: 'Café Aurora',
    segment: 'restaurante & delivery',
    services: 'branding completo + social media + tráfego pago',
    results: [
      { label: 'vendas no iFood', value: '+95%' },
      { label: 'clientes na região', value: '12.5k' },
      { label: 'pedidos/mês', value: '4.3k' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'advocacia',
    client: 'Advocacia Oliveira & Sócios',
    segment: 'jurídico',
    services: 'Website institucional + SEO + Google Ads',
    results: [
      { label: 'aumento de consultas', value: '+150%' },
      { label: 'no Google Ads', value: 'Top 3' },
      { label: 'negócios gerados', value: 'R$ 420k' }
    ],
    imageUrl: 'https://i.ibb.co/4g73w8s5/case-Advocacia.png'
  },
  {
    id: 'urban-fit',
    client: 'Urban Fit Wear',
    segment: 'moda fitness',
    services: 'Estratégia completa de social media + automação',
    results: [
      { label: 'taxa de conversão', value: '4.5%' },
      { label: 'leads gerados', value: '6.5k' },
      { label: 'aumento de vendas', value: '+65%' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
  }
];

export const STATS = [
  {
    value: '50+',
    label: 'Projetos Entregues',
    icon: Rocket
  },
  {
    value: '97%',
    label: 'Satisfação dos Clientes',
    icon: Users
  },
  {
    value: '15M+',
    label: 'Gerados em Vendas',
    icon: TrendingUp
  },
  {
    value: '24/7',
    label: 'Suporte e Monitoramento',
    icon: Zap
  }
];
