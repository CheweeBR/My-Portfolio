// src/data/projectsData.js

export const projectCategoryColors = {
  "Todos": { hex: "#22c55e", bg: "bg-green-500/10", text: "text-green-300" },
  // Categoria principal para sistemas completos (React + Node/Java)
  "Web Full Stack": { hex: "#60a5fa", bg: "bg-blue-500/10", text: "text-blue-300" },
  // Categoria para coisas "sem tela" ou hardware (APIs, Scripts, Sensores)
  "IoT & Integrações": { hex: "#a78bfa", bg: "bg-violet-500/10", text: "text-violet-300" },
};

export const projectsData = [
  {
    id: "sap-predial", // IDs descritivos são melhores para SEO/URLs
    title: "Sistema de Automação Predial",
    category: "Web Full Stack", // Mudamos de "Front End" para a realidade
    
    // Resumo para o card
    description: "Sistema completo para gestão de edifícios, permitindo acionamento remoto de hardware (luzes, ar-condicionado) e relatórios de consumo.",
    
    tech: ["React", "Tailwind", "Node.js", "WebSocket"], 
    image: "/projects/sap.png",
    links: {
      github: "https://github.com/seuuser/checktrampo-dashboard",
      live: "https://seu-deploy.com/checktrampo",
    },
    featured: true,

    // NOVO: Objeto para a página de detalhes ("quando abrisse o post")
    details: {
      about: "Este projeto nasceu da necessidade de centralizar o controle de dispositivos dispersos em grandes edifícios. O desafio principal foi garantir que o comando enviado pela interface web chegasse ao hardware em tempo real.",
      features: [
        "Dashboard interativo com status em tempo real (via WebSocket).",
        "Módulo de agendamento de tarefas (ligar ar-condicionado às 08:00).",
        "Sistema de permissões (Administrador vs Usuário Comum).",
        "Relatórios exportáveis de tempo de uso dos equipamentos."
      ],
      challenges: "A maior dificuldade foi lidar com a instabilidade da rede local dos dispositivos. Implementei um sistema de 'heartbeat' para que o painel saiba instantaneamente se um dispositivo ficou offline.",
      stackDetails: {
        frontend: "React com Context API para gerenciamento de estado global.",
        backend: "Node.js servindo como broker entre o cliente e os controladores físicos.",
        database: "PostgreSQL para logs e usuários."
      }
    }
  },
  {
    id: "device-monitor",
    title: "Monitor de Rede & Alertas", // Nome mais comercial
    category: "IoT & Integrações", // Se encaixa melhor que "Full Stack" genérico
    
    description: "Agente inteligente que vigia a estabilidade de dispositivos críticos na rede e notifica quedas via WhatsApp e E-mail.",
    
    tech: ["Node.js", "WhatsApp API", "Network Protocols"],
    image: "/projects/deviceMonitor.png",
    links: {
      github: "https://github.com/seuuser/whatsapp-ai-agent",
      // Se não tiver live (por ser backend/local), pode remover ou por um demo
      live: null, 
    },
    featured: false,

    details: {
      about: "Solução focada em Provedores de Internet e TI interna. O objetivo é reduzir o tempo de resposta (Downtime) avisando os técnicos antes que o cliente final reclame.",
      features: [
        "Monitoramento via ICMP (Ping) e verificação de portas TCP.",
        "Disparo de mensagens automáticas no WhatsApp do técnico responsável.",
        "Logs de instabilidade para auditoria de SLA.",
        "Interface web leve para cadastro de IPs a monitorar."
      ],
      challenges: "Evitar falsos positivos. Foi criado um algoritmo de 'debouncing' que só alerta após X falhas consecutivas, evitando spam quando a rede apenas oscila.",
      stackDetails: {
        backend: "Node.js com Fastify para alta performance.",
        integrations: "Baileys (Lib de WhatsApp) e Nodemailer."
      }
    }
  },
];