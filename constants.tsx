
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
  whatsapp: '5541988920031',
  whatsappDisplay: '(41) 98892-0031',
  email: 'contato@crealixmarketing.com',
  instagram: 'https://www.instagram.com/crealixmarketing/'
};

// Image Assets
export const IMAGES = {
  logo: 'https://i.ibb.co/JWvg1Sxb/crealix-logo-gradient.png',
  footerLogo: 'https://i.ibb.co/nsxt8KQm/logo-Crealix-fundo-transparente.png',
  cube: 'https://i.ibb.co/Z6w1Y0Bs/crealix-3d-cube.png',
  robot: 'https://i.ibb.co/b5rtrGDM/robo-crealix-fundo-transparente.png',
  smartSecretary: {
    // IMAGEM 1 (FIXA/OFICIAL) - USAR SOMENTE NA HOME PAGE
    home: 'https://i.ibb.co/gMBSVYXr/secertaria-smart-lp.png',
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
    name: 'Ricardo Silva',
    role: 'CEO E-commerce',
    avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
    date: 'Sexta-feira',
    conversation: [
      { from: 'me', text: 'Ricardo, bom dia! Aumentamos a carga nos servidores pra aguentar o pico da campanha.', time: '09:10' },
      { from: 'me', text: 'Como tá o fluxo de vendas aí?', time: '09:11' },
      { from: 'them', text: 'Fala pessoal! Passando pra agradecer.', time: '10:42' },
      { from: 'them', text: 'A automação tá segurando toda a demanda. Minha equipe de vendas tá focada só em fechar, surreal o resultado. 🚀', time: '10:43' }
    ]
  },
  {
    name: 'Camila Fernandes',
    role: 'Diretora Clínica Estética',
    avatarUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
    date: 'Ontem',
    conversation: [
      { from: 'me', text: 'Camila, acabamos de subir a escala das campanhas. Sentiu diferença nos agendamentos?', time: '14:20' },
      { from: 'them', text: 'Oie! Menino do céu... espera que eu tô respirando aqui kkk', time: '14:32' },
      { from: 'them', text: 'Batemos a meta do mês em 15 dias! 😱', time: '14:33' },
      { from: 'them', text: 'O design dos anúncios ficou perfeito, atraiu o público certo. Gratidão! 🙏', time: '14:35' }
    ]
  },
  {
    name: 'Maria Lopes',
    role: 'Empreendedora',
    avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    date: '15 de Outubro',
    conversation: [
      { from: 'me', text: 'Maria, o que achou da nova identidade visual no Instagram?', time: '09:00' },
      { from: 'me', text: 'O feed novo já está no ar.', time: '09:01' },
      { from: 'them', text: 'Gente, ficou incrível! 😍', time: '09:10' },
      { from: 'them', text: 'Todo mundo elogiando aqui. A Crealix revolucionou nossa cara no digital, atendimento impecável.', time: '09:12' }
    ]
  },
  {
    name: 'Eduardo Campos',
    role: 'Loja Virtual',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    date: 'Quarta-feira',
    conversation: [
      { from: 'me', text: 'Eduardo, o relatório de vendas fechou. Viu os números de conversão do bot?', time: '16:00' },
      { from: 'them', text: 'Vi agora. Tô impressionado.', time: '16:10' },
      { from: 'them', text: 'Branding e automação rodando liso... meu faturamento dobrou em 2 meses.', time: '16:15' },
      { from: 'them', text: 'Vocês são feras! 👊', time: '16:16' }
    ]
  },
  {
    name: 'Ana Ribeiro',
    role: 'Consultora',
    avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
    date: 'Segunda-feira',
    conversation: [
      { from: 'me', text: 'Ana, conseguimos entregar os criativos antes do prazo. Tudo certo pra subirmos?', time: '11:30' },
      { from: 'them', text: 'Nossa, que rapidez!', time: '11:32' },
      { from: 'them', text: 'Sim! Vocês são muito ágeis. Trabalho de alto nível, já aprovei tudo e já tá no ar. 😍', time: '11:35' }
    ]
  },
  {
    name: 'Carlos Mendes',
    role: 'CEO Startup Tech',
    avatarUrl: 'https://randomuser.me/api/portraits/men/22.jpg',
    date: '20 de Novembro',
    conversation: [
      { from: 'me', text: 'Carlos, como foi o ROI dessa semana com a estratégia nova?', time: '18:00' },
      { from: 'them', text: 'Cara, tenho que admitir.', time: '18:02' },
      { from: 'them', text: 'Superou todas as expectativas. O custo por lead caiu pela metade. 👏', time: '18:03' },
      { from: 'them', text: 'Profissionalismo total de vocês. Vamos renovar o contrato.', time: '18:05' }
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Start Up',
    price: 'R$ 497',
    description: 'Para quem precisa começar com presença profissional',
    minimumContract: '3 meses',
    ctaText: 'Começar Agora',
    features: [
      'Design Estratégico de Alto Padrão',
      'Presença Digital Ativa (Social Media)',
      'Setup de IA Inicial (Respostas Rápidas)',
      'Otimização de Perfil (Bio Magnética)'
    ],
    detailedFeatures: [
      'Criação de identidade visual básica',
      'Planejamento de linha editorial para o mês',
      '8 Posts mensais no feed',
      '4 Stories mensais',
      'Copywriting Básico',
      'Planejamento Mensal simples',
      'IA para atendimento Básico',
      'Suporte Padrão via email e WhatsApp em horário comercial'
    ]
  },
  {
    name: 'Traction AI',
    price: 'R$ 1.497',
    description: 'Para quem quer gerar leads e vender todos os dias',
    isPopular: true,
    minimumContract: '3 meses',
    ctaText: 'Escalar Vendas',
    features: [
      'Tudo do plano Start Up',
      'Gestão de Tráfego (Meta & Google)',
      'Agente de IA Vendedor (Qualificação)',
      'Sistema validado para gerar leads diariamente'
    ],
    detailedFeatures: [
      'Inclui todas as entregas do plano Start Up',
      '12 Posts mensais no feed',
      '12 Stories mensais',
      'Copywriting Avançado (vendas)',
      'Planejamento Estratégico',
      'Gestão de Tráfego Automática',
      'IA vendedora para atendimento',
      'Qualificação de leads',
      'Automação Parcial',
      'Suporte Prioritário'
    ]
  },
  {
    name: 'Scale Pro',
    price: 'R$ 3.997',
    description: 'Para empresas que querem dominar seu mercado',
    minimumContract: '3 meses',
    ctaText: 'Falar com Especialista',
    features: [
      'Ecossistema de Marketing 360º',
      'IA Avançada Integrada ao CRM',
      'Websites & LPs de Alta Conversão',
      'Consultoria Estratégica Mensal'
    ],
    detailedFeatures: [
      'Ecossistema Completo de Vendas',
      '20 Posts mensais no feed',
      '30 Stories mensais',
      'Copywriting de Persuasão completa',
      'Planejamento: Estratégia + expansão',
      'Gestão de Tráfego Avançado',
      'IA + CRM completo para atendimento',
      'Qualificação de leads avançada',
      'Websites / Landing Pages Inclusos',
      'Consultoria Estratégica Mensal',
      'Automação Total',
      'Suporte VIP'
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
    imageUrl: 'https://i.ibb.co/1frYg2Yn/advocacia-oliveira.webp'
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
    value: '390k+',
    label: 'Gerados em Vendas',
    icon: TrendingUp
  },
  {
    value: '24/7',
    label: 'Suporte e Monitoramento',
    icon: Zap
  }
];
