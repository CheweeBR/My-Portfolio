// src/data/techData.js
// Links de documentação e dados das categorias de tecnologia

import {
  IconIoT,
  IconBackend,
  IconFrameworks,
  IconFrontend,
  IconDatabase,
  IconCloud
} from '../components/SobreMim/icons';

// ==========================================
// LINKS DE DOCUMENTAÇÃO
// ==========================================

export const techLinks = {
  // IoT
  "Raspberry Pi": "https://www.raspberrypi.org/documentation/",
  "Arduino": "https://docs.arduino.cc/",
  "Espressif (ESP32)": "https://docs.espressif.com/projects/esp-idf/en/latest/esp32/",
  "MQTT": "https://mqtt.org/",
  "LoRa": "https://lora.readthedocs.io/en/latest/",
  "TCP/IP": "https://developer.mozilla.org/pt-BR/docs/Web/Network",
  "Node-RED": "https://nodered.org/docs/",
  // Backend
  "Node.js": "https://nodejs.org/docs/latest/api/",
  "Java": "https://docs.oracle.com/en/java/",
  "Python": "https://docs.python.org/3/",
  "C": "https://en.cppreference.com/w/c",
  // Frameworks
  "Fastify": "https://fastify.dev/docs/latest/",
  "Express.js": "https://expressjs.com/",
  "nestJS": "https://docs.nestjs.com/",
  // Frontend
  "React": "https://react.dev/",
  "Vite": "https://vitejs.dev/guide/",
  "Tailwind CSS": "https://tailwindcss.com/docs",
  // Database
  "PostgreSQL": "https://www.postgresql.org/docs/",
  "MySQL": "https://dev.mysql.com/doc/",
  "MongoDB": "https://www.mongodb.com/docs/",
  // DevOps
  "Vercel": "https://vercel.com/docs",
  "Netlify": "https://docs.netlify.com/",
  "Cloudflare": "https://developers.cloudflare.com/docs/",
  "Docker": "https://docs.docker.com/",
  "NGINX": "https://nginx.org/en/docs/"
};

// ==========================================
// DADOS DAS CATEGORIAS
// ==========================================

export const categoriesData = [
  {
    id: 'backend',
    title: 'Back End',
    icon: IconBackend,
    color: 'text-green-500',
    description: 'Arquitetura sólida para aplicações com APIs REST, autenticação JWT e padrões MVC.',
    gradient: 'bg-gradient-to-r from-green-900/30 to-slate-900',
    borderColor: 'border-green-500/20 hover:border-green-500/40',
    techs: [
      { name: 'Node.js', colorClass: 'border-green-600 text-green-400 bg-green-600/10' },
      { name: 'Java', colorClass: 'border-orange-500 text-orange-400 bg-orange-500/10' },
      { name: 'Python', colorClass: 'border-blue-500 text-blue-400 bg-blue-500/10' },
      { name: 'C', colorClass: 'border-slate-500 text-slate-300 bg-slate-500/10' }
    ]
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    icon: IconFrameworks,
    color: 'text-slate-200',
    description: 'Ferramentas modernas com foco em performance e agilidade.',
    gradient: 'bg-gradient-to-r from-indigo-900/30 to-slate-900',
    borderColor: 'border-indigo-500/20 hover:border-indigo-500/40',
    techs: [
      { name: 'Fastify', colorClass: 'border-white text-white bg-white/10' },
      { name: 'nestJS', colorClass: 'border-red-500 text-red-400 bg-red-500/10' },
      { name: 'Express.js', colorClass: 'border-slate-400 text-slate-300 bg-slate-400/10' }
    ]
  },
  {
    id: 'frontend',
    title: 'Front End',
    icon: IconFrontend,
    color: 'text-blue-400',
    description: 'Interfaces intuitivas, responsivas e componentizadas.',
    gradient: 'bg-gradient-to-r from-blue-900/30 to-slate-900',
    borderColor: 'border-blue-500/20 hover:border-blue-500/40',
    techs: [
      { name: 'React', colorClass: 'border-cyan-400 text-cyan-300 bg-cyan-400/10' },
      { name: 'Vite', colorClass: 'border-purple-400 text-purple-300 bg-purple-400/10' },
      { name: 'Tailwind CSS', colorClass: 'border-teal-400 text-teal-300 bg-teal-400/10' }
    ]
  },
  {
    id: 'database',
    title: 'Database',
    icon: IconDatabase,
    color: 'text-blue-600',
    description: 'Modelagem eficiente para persistência de dados.',
    gradient: 'bg-gradient-to-r from-cyan-900/30 to-slate-900',
    borderColor: 'border-cyan-500/20 hover:border-cyan-500/40',
    techs: [
      { name: 'PostgreSQL', colorClass: 'border-blue-600 text-blue-400 bg-blue-600/10' },
      { name: 'MySQL', colorClass: 'border-blue-800 text-blue-300 bg-blue-800/10' },
      { name: 'MongoDB', colorClass: 'border-green-500 text-green-400 bg-green-500/10' }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    icon: IconCloud,
    color: 'text-pink-500',
    description: 'Da codificação ao deploy. Controle de versão, CI/CD e hospedagem em nuvem completam o ciclo de desenvolvimento.',
    gradient: 'bg-gradient-to-r from-orange-900/30 to-slate-900',
    borderColor: 'border-orange-500/20 hover:border-orange-500/40',
    fullWidth: true,
    techs: [
      { name: 'Vercel', colorClass: 'border-white text-white bg-black/50' },
      { name: 'Netlify', colorClass: 'border-teal-500 text-teal-400 bg-teal-500/10' },
      { name: 'Cloudflare', colorClass: 'border-yellow-400 text-yellow-300 bg-yellow-400/10' },
      { name: 'Docker', colorClass: 'border-blue-500 text-blue-400 bg-blue-500/10' },
      { name: 'NGINX', colorClass: 'border-green-600 text-green-400 bg-green-600/10' }
    ]
  }
];

// ==========================================
// DADOS DO IoT (CARD ESPECIAL)
// ==========================================

export const iotData = {
  title: 'IoT & Hardware',
  icon: IconIoT,
  description: 'Onde o software encontra o mundo físico. Minha especialidade inclui protocolos industriais e sistemas embarcados.',
  techs: [
    { name: 'Raspberry Pi', colorClass: 'border-red-500 text-red-400 bg-red-500/10' },
    { name: 'Arduino', colorClass: 'border-cyan-500 text-cyan-400 bg-cyan-500/10' },
    { name: 'Espressif (ESP32)', colorClass: 'border-red-600 text-red-500 bg-red-600/10' },
    { name: 'MQTT', colorClass: 'border-purple-500 text-purple-400 bg-purple-500/10' },
    { name: 'LoRa', colorClass: 'border-white text-white bg-grey-700' },
    { name: 'TCP/IP', colorClass: 'border-blue-500 text-blue-400 bg-blue-500/10' },
    { name: 'Node-RED', colorClass: 'border-red-800 text-red-300 bg-red-800/10' }
  ]
};

// ==========================================
// DADOS DA BIOGRAFIA
// ==========================================

export const bioData = {
  name: 'Tiago Possidonio',
  role: 'Full Stack Dev',
  university: {
    name: 'UTFPR',
    url: 'https://www.utfpr.edu.br/'
  },
  degree: 'Análise e Desenvolvimento de Sistemas',
  quote: 'Meu sonho é tornar o mundo um lugar melhor com a tecnologia.',
  description: 'Acredito que o código é uma ferramenta para resolver problemas reais. Meu foco atual é criar soluções robustas, unindo a performance do Node.js com a interatividade do React.'
};