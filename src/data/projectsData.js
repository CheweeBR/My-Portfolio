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
      github: "",
      live: "https://acesso-cmd-automacao.vercel.app/",
    },
    
    featured: true,

 details: {
      content: [
        {
          type: "text",
          value: "O sistema utiliza uma arquitetura em camadas para garantir escalabilidade e performance. O Client-side foi desenvolvido em React com Vite, proporcionando uma interface gráfica otimizada. O Server-side opera localmente utilizando Node-RED para orquestração dos fluxos de automação e protocolo MQTT para comunicação M2M (Machine-to-Machine) de baixa latência com os módulos de hardware, centralizando o controle de iluminação, exaustão e climatização."
        },
        {
          type: "image",
          src: "src/assets/projects/sap/imagem-01.png",
          caption: "Tela de login do sistema"
        },
        {
          type: "text",
          value: "A segurança é gerenciada por um servidor Express integrado a um banco de dados em nuvem. O módulo de autenticação realiza o gerenciamento de identidade, controle de acesso e validação de permissões através da emissão de tokens seguros."
        },
        {
          type: "text",
          value: "Implementa um fluxo seguro de recuperação de credenciais (Password Recovery), validando a existência do usuário na base e disparando códigos de verificação (OTP) via e-mail transacional para redefinição de acesso."
        },
        {
          type: "text",
          value: "O processo de onboarding conta com validação administrativa. O usuário solicita o cadastro e o administrador do condomínio realiza a aprovação ou recusa. Mediante aceite, o sistema provisiona as credenciais e notifica o usuário automaticamente via e-mail."
        },
        {
          type: "image",
          src: "src/assets/projects/sap/imagem-02.png",
          caption: "Tela de acionamentos de iluminação"
        },
        {
          type: "text",
          value: "Módulo de controle de iluminação com atuação em tempo real (Real-Time Actuation). O sistema suporta a gestão de múltiplos ambientes simultâneos. A visualização acima demonstra a aplicação em ambiente de produção (térreo condominial) com feedback instantâneo de estado."
        },
        {
          type: "image",
          src: "src/assets/projects/sap/imagem-03.png",
          caption: "Tela de acionamento de exaustores"
        },
        {
          type: "text",
          value: "Gerenciamento de exaustores com controle de estado binário e telemetria em tempo real. Inclui funcionalidade de parametrização de temporizadores (Timers) para automação dos ciclos de funcionamento dos equipamentos."
        },
        {
          type: "image",
          src: "src/assets/projects/sap/imagem-04.png",
          caption: "Tela de seleção de ambiente para ar-condicionado"
        },
        {
          type: "image",
          src: "src/assets/projects/sap/imagem-04.1.png",
          caption: "Tela de acionamento de ar-condicionado"
        },
        {
          type: "text",
          value: "Controle centralizado de climatização (HVAC). Permite a seleção setorizada de ambientes e o monitoramento do status operacional dos aparelhos de ar-condicionado em tempo real."
        },
        {
          type: "image",
          src: "src/assets/projects/sap/imagem-05.png",
          caption: "Tela de agendamento diário de exaustores e iluminação"
        },
        {
          type: "text",
          value: "Sistema de agendamento de tarefas (Scheduling) para automação de rotinas. Permite a configuração de triggers horários por ambiente para ativação e desativação automática de iluminação e exaustores."
        },
        {
          type: "image",
          src: "src/assets/projects/sap/imagem-06.png",
          caption: "Tela de monitoramento de alarme de caixa d'água"
        },
        {
          type: "text",
          value: "Monitoramento de infraestrutura crítica (Nível de Caixa d'água). O sistema apresenta o status dos sensores em tempo real e integra um sistema de alertas para notificações imediatas em caso de anomalias ou disparo de alarmes."
        },
        {
          type: "image",
          src: "src/assets/projects/sap/imagem-07.png",
          caption: "Relatórios e Logs"
        },
        {
          type: "text",
          value: "Dashboard de observabilidade e auditoria. Centraliza o histórico de eventos (Logs), incluindo disparos de alarmes e registros de acionamentos, além de relatórios de disponibilidade dos dispositivos monitorados."
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
    image: "src/assets/projects/monitor-thumb.png",
    
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
          src: "src/assets/projects/monitor-dashboard.png",
          caption: "Dashboard de monitoramento em tempo real"
        },
        {
          type: "text",
          value: "O sistema monitora dispositivos via ICMP (Ping) e verificação de portas TCP. Quando detecta uma falha, dispara mensagens automáticas no WhatsApp do técnico responsável.\n\nImplementei um algoritmo de 'debouncing' inteligente: o sistema só dispara o alerta após 3 falhas consecutivas em um intervalo de 2 minutos. Isso reduziu em 90% os falsos positivos."
        },
        {
          type: "image",
          src: "src/assets/projects/monitor-alerts.png",
          caption: "Sistema de alertas via WhatsApp"
        },
        {
          type: "text",
          value: "Interface web leve para cadastro de IPs e configuração de alertas personalizados por dispositivo."
        },
        {
          type: "image",
          src: "src/assets/projects/monitor-config.png",
          caption: "Painel de configuração de dispositivos"
        }
      ]
    }
  },
  {
    id: "check-trampo",
    title: "CheckTrampo",
    category: "Web Full Stack",
    description: "Plataforma de gerenciamento de tarefas e acompanhamento de atividades para equipes de trabalho presencial, gerando relatórios de produtividade e desempenho e podendo definir metas de atividades.",
    tech: ["React", "Vite", "Node.js", "NestJS", "PostgreSQL", "TypeScript"],
    image: "src/assets/projects/check-trampo/imagem-02.png",
    links: {
      live: "https://check-trampo.com/",
      github: "",
    },
    featured: false,
     details: {
      content: [
        {
          type: "text",
          value: "O CheckTrampo é um SAAS plataforma web full stack desenvolvida para otimizar o gerenciamento de tarefas e o acompanhamento de atividades em ambientes de trabalho presencial. A aplicação foi construída utilizando React com Vite no frontend, proporcionando uma interface rápida e responsiva, enquanto o backend foi desenvolvido com Node.js e NestJS, garantindo uma arquitetura robusta e escalável. O banco de dados PostgreSQL foi escolhido para armazenar de forma eficiente os dados relacionados a usuários, tarefas e relatórios."
        },
        {
          type: "image",
          src: "src/assets/projects/check-trampo/imagem-01.png",
          caption: "Tela de login"
        },
        {
          type: "text",
          value: "A tela de Login foi projetada para ser simples e intuitiva, permitindo que os usuários acessem suas contas de forma rápida. O sistema de autenticação é seguro, utilizando JWT para gerenciamento de sessões e garantindo a proteção dos dados dos usuários."
        },
        {
          type: "image",
          src: "src/assets/projects/check-trampo/imagem-02.png",
          caption: "Dashboard administrativo"
        },
        {
          type: "text",
          value: "O Dashboard Administrativo é o coração do CheckTrampo, onde os gestores podem criar serviços e suas respectivas atividades, administradores podem criar clientes e usuários, acompanhar o progresso das atividades e gerar relatórios detalhados de produtividade."
        },
        {
          type: "text",
          value: "A interface é projetada para ser intuitiva, permitindo que os gestores tenham uma visão clara do desempenho da equipe e possam tomar decisões informadas para melhorar a eficiência."
        },
        {
          type: "text",
          value: "o sistema conta com diferenciação de roles, onde cada role tem permissão de acesso restrita, garantindo a segurança e a integridade dos dados. Os gerentes têm acesso completo para criar e gerenciar serviços, atividades e usuários, enquanto supervisores, podem apenas criar metas e envia-las aos tecnicos e os tecnicos apenas suas tarefas e relatórios de desempenho."  
        },
        {
          type: "image",
          src: "src/assets/projects/check-trampo/imagem-03.png",
          caption: "Tela principal do técnico - clientes"
        },
        {
          type: "text",
          value: "A tela principal do técnico apresenta de forma intuitiva os clientes e ao selecionar um cliente, o técnico tem acesso às soluções vendidas a cada cliente." 
        }
      ]
    }
  }

  // Adicione mais projetos seguindo o mesmo padrão...
];