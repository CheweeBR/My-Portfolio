// src/data/projectsData.js
// Dados dos projetos com estrutura de blocos dinâmicos

export const projectCategoryColors = {
  "Todos": { hex: "#22c55e", bg: "bg-green-500/10", text: "text-green-300" },
  "Web Full Stack": { hex: "#60a5fa", bg: "bg-blue-500/10", text: "text-blue-300" },
  "IoT & Integrações": { hex: "#a78bfa", bg: "bg-violet-500/10", text: "text-violet-300" },
};

export const projectsData = [
  {
    id: "sap-predial",
    title: "Sistema de Automação Predial",
    category: "Web Full Stack",
    
    // === DADOS DO CARD (sempre visível na home) ===
    description: "Sistema completo para gestão de edifícios, permitindo acionamento remoto de hardware (luzes, ar-condicionado) e relatórios de consumo.",
    tech: ["React", "Vite", "Node-RED", "MQTT", "Raspberry Pi"],
    image: "src/assets/projects/sap/imagem-02.png",
    
    links: {
      github: "https://github.com/seuuser/sap-predial",
      live: "https://sap-demo.vercel.app",
    },
    
    featured: true,

    details: {
      content: [
        {
          type: "text",
          value: "Tela de Login: Aqui temos uma tela de login para acesso ao sistema, onde por trás roda um servidor nodejs responsável pela gestão dos usuários e pelo acesso ao seu determinado condominio."
        },
        {
          type: "image",
          src: "src/assets/projects/sap/imagem-01.png",
          caption: "Visão geral da interface do sistema"
        },
        {
          type: "text",
          value: "Esse sistema foi arquitetado em camadas, por ser um sistema de automação, temos a interface gráfica feita em Vite + React e o seu back-end alocado em um servidor local com o backend em Node-red que faz a comunicação com os módulos via MQTT, efetivando os acionamentos.\n\nSistema possui tela para acionamento dos espaços de iluminação, exaustores e áreas com ar condicionados."
        },
        {
          type: "image",
          src: "/projects/sap-acionamentos.png",
          caption: "Tela de acionamentos dos dispositivos"
        },
        {
          type: "text",
          value: "Sistema de monitoramento de nível de caixa d'água"
        },
        {
          type: "image",
          src: "/projects/sap-caixa.png",
          caption: "Monitoramento em tempo real da caixa d'água"
        },
        {
          type: "text",
          value: "Agendamento de acionamentos"
        },
        {
          type: "image",
          src: "/projects/sap-agenda.png",
          caption: "Sistema de agendamento automatizado"
        },
        {
          type: "text",
          value: "Tela de relatórios de atividades"
        },
        {
          type: "image",
          src: "/projects/sap-relatorios.png",
          caption: "Relatórios detalhados de consumo e uso"
        }
      ]
    }
  },

  {
    id: "device-monitor",
    title: "Monitor de Rede & Alertas",
    category: "IoT & Integrações",
    
    description: "Agente inteligente que vigia a estabilidade de dispositivos críticos na rede e notifica quedas via WhatsApp e E-mail.",
    tech: ["Node.js", "WhatsApp API", "Network Protocols", "Fastify"],
    image: "/projects/monitor-thumb.png",
    
    links: {
      github: "https://github.com/seuuser/device-monitor",
      live: null,
    },
    
    featured: false,

    details: {
      content: [
        {
          type: "text",
          value: "Solução focada em Provedores de Internet e equipes de TI interna. O objetivo é reduzir o tempo de resposta (downtime) avisando os técnicos antes que o cliente final reclame."
        },
        {
          type: "image",
          src: "/projects/monitor-dashboard.png",
          caption: "Dashboard de monitoramento em tempo real"
        },
        {
          type: "text",
          value: "O sistema monitora dispositivos via ICMP (Ping) e verificação de portas TCP. Quando detecta uma falha, dispara mensagens automáticas no WhatsApp do técnico responsável.\n\nImplementei um algoritmo de 'debouncing' inteligente: o sistema só dispara o alerta após 3 falhas consecutivas em um intervalo de 2 minutos. Isso reduziu em 90% os falsos positivos."
        },
        {
          type: "image",
          src: "/projects/monitor-alerts.png",
          caption: "Sistema de alertas via WhatsApp"
        },
        {
          type: "text",
          value: "Interface web leve para cadastro de IPs e configuração de alertas personalizados por dispositivo."
        },
        {
          type: "image",
          src: "/projects/monitor-config.png",
          caption: "Painel de configuração de dispositivos"
        }
      ]
    }
  },

  // Adicione mais projetos seguindo o mesmo padrão...
];