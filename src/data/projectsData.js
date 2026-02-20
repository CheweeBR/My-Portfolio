// src/data/projectsData.js
// Dados dos projetos com estrutura de blocos dinâmicos

import { details, title } from "framer-motion/client";

export const projectCategoryColors = {
  "Todos": { hex: "#22c55e", bg: "bg-green-500/10", text: "text-green-300" },
  "Web Full Stack": { hex: "#60a5fa", bg: "bg-blue-500/10", text: "text-blue-300" },
  "IoT & Integrações": { hex: "#a78bfa", bg: "bg-violet-500/10", text: "text-violet-300" },
  "Backend": { hex: "#fbbf24", bg: "bg-yellow-500/10", text: "text-yellow-300" },
};

export const projectsData = [
  {
    id: "sap-predial",
    title: "Sistema de Automação Predial",
    category: "Web Full Stack",
    
    // === DADOS DO CARD (sempre visível na home) ===
    description: "Sistema completo para gestão de edifícios, permitindo acionamento remoto de hardware (luzes, exaustores, ar-condicionado) e monitoramento de nivel de caixa d'agua.",
    tech: ["React", "Vite", "Node-RED", "MQTT", "Raspberry Pi"],
    image: "/assets/projects/sap/imagem-02.png",
    
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
          src: "/assets/projects/sap/imagem-01.png",
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
          src: "/assets/projects/sap/imagem-02.png",
          caption: "Tela de acionamentos de iluminação"
        },
        {
          type: "text",
          value: "Módulo de controle de iluminação com atuação em tempo real (Real-Time Actuation). O sistema suporta a gestão de múltiplos ambientes simultâneos. A visualização acima demonstra a aplicação em ambiente de produção (térreo condominial) com feedback instantâneo de estado."
        },
        {
          type: "image",
          src: "/assets/projects/sap/imagem-03.png",
          caption: "Tela de acionamento de exaustores"
        },
        {
          type: "text",
          value: "Gerenciamento de exaustores com controle de estado binário e telemetria em tempo real. Inclui funcionalidade de parametrização de temporizadores (Timers) para automação dos ciclos de funcionamento dos equipamentos."
        },
        {
          type: "image",
          src: "/assets/projects/sap/imagem-04.png",
          caption: "Tela de seleção de ambiente para ar-condicionado"
        },
        {
          type: "image",
          src: "/assets/projects/sap/imagem-04.1.png",
          caption: "Tela de acionamento de ar-condicionado"
        },
        {
          type: "text",
          value: "Controle centralizado de climatização (HVAC). Permite a seleção setorizada de ambientes e o monitoramento do status operacional dos aparelhos de ar-condicionado em tempo real."
        },
        {
          type: "image",
          src: "/assets/projects/sap/imagem-05.png",
          caption: "Tela de agendamento diário de exaustores e iluminação"
        },
        {
          type: "text",
          value: "Sistema de agendamento de tarefas (Scheduling) para automação de rotinas. Permite a configuração de triggers horários por ambiente para ativação e desativação automática de iluminação e exaustores."
        },
        {
          type: "image",
          src: "/assets/projects/sap/imagem-06.png",
          caption: "Tela de monitoramento de alarme de caixa d'água"
        },
        {
          type: "text",
          value: "Monitoramento de infraestrutura crítica (Nível de Caixa d'água). O sistema apresenta o status dos sensores em tempo real e integra um sistema de alertas para notificações imediatas em caso de anomalias ou disparo de alarmes."
        },
        {
          type: "image",
          src: "/assets/projects/sap/imagem-07.png",
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
    id: "check-trampo",
    title: "CheckTrampo",
    category: "Web Full Stack",
    description: "Plataforma de gerenciamento de tarefas e acompanhamento de atividades para equipes de trabalho presencial, gerando relatórios de produtividade e desempenho e podendo definir metas de atividades.",
    tech: ["React", "Vite", "Node.js", "NestJS", "PostgreSQL", "TypeScript"],
    image: "/assets/projects/check-trampo/imagem-02.png",
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
          src: "/assets/projects/check-trampo/imagem-01.png",
          caption: "Tela de login"
        },
        {
          type: "text",
          value: "A tela de Login foi projetada para ser simples e intuitiva, permitindo que os usuários acessem suas contas de forma rápida. O sistema de autenticação é seguro, utilizando JWT para gerenciamento de sessões e garantindo a proteção dos dados dos usuários."
        },
        {
          type: "section",
          title: "Experiência administrativa"
        },
        {
          type: "image",
          src: "/assets/projects/check-trampo/imagem-02.png",
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
          type: "section",
          title: "Criando Serviços e Atividades"
        },
        {
          type: "image",
          src: "/assets/projects/check-trampo/imagem-09.png",
          caption: "Tela de criação de serviços e atividades"
        },
        {
          type: "text",
          value: "A tela acima demonstra a seleção do cliente para o qual o serviço será criado, a definição do nome do serviço e a criação de atividades relacionadas a cada serviço."
        },
        {
          type: "image",
          src: "/assets/projects/check-trampo/imagem-10.png",
          caption: "Tela de seleção da Solução do novo serviço"
        },
        {
          type: "text",
          value: "Ao criar um serviço, o gerente tem a opção de selecionar uma solução, onde todos serviços relacionados àquela solução ficam agrupados, facilitando a organização e o acompanhamento das atividades relacionadas a cada solução vendida ao cliente."
        },
        {
          type: "image",
          src: "/assets/projects/check-trampo/imagem-11.png",
          caption: "Tela de criação da atividade"
        },
        {
          type: "text",
          value: "Na criação das atividades, o administrador ou gerente deve definir o tipo, se é checkbox ou numerico. Sua obrigatóriedade, se é obrigatório para completar a tarefa uma imagem ou o campo de texto preenchido. E por fim, o nome da atividade, sendo possível adicionar uma instrução em PDF para auxiliar o tecnico na realização daquela atividade."
        },
        {
          type: "image",
          src: "/assets/projects/check-trampo/imagem-12.png",
          caption: "Tela de criação do conjunto de tarefas"
        },
        {
          type: "text",
          value: "Após criar as atividades, o gerente deve informar o numero de vezes que aquela atividade deve ser realizada para completar a tarefa, no exemplo acima temos um projeto de instalação de cameras em 3 andares, onde havera a mesma quantidade de cameras em cada andar, logo definimos 3 conjuntos de tarefas para aquela atividade, onde cada conjunto de tarefas tem a mesma atividade, mas com a necessidade de serem realizadas 3 vezes para completar o serviço."
        },
        {
          type: "image",
          src: "/assets/projects/check-trampo/imagem-13.png",
          caption: "Tela de review do serviço criado"
        },
        {
          type: "text",
          value: "Na tela de review do serviço, o gerente tem uma visão geral de como aquele serviço ficou, podendo revisar as atividades criadas e os conjuntos de tarefas definidos para cada atividade."
        },
        {
          type: "section",
          title: "Experiência do Técnico"
        },
        {
          type: "image",
          src: "/assets/projects/check-trampo/imagem-04.png",
          caption: "Tela principal do técnico - clientes"
        },
        {
          type: "text",
          value: "A tela principal do técnico apresenta de forma intuitiva os clientes e ao selecionar um cliente, o técnico tem acesso às soluções vendidas a cada cliente." 
        },
        {
          type: "image",
          src: "/assets/projects/check-trampo/imagem-05.png",
          caption: "Tela de soluções vendidas ao cliente"
        },
        {
          type: "text",
          value: "Ao acessar as soluções vendidas, o técnico tem acesso às atividades relacionadas a cada solução, selecionando a solução onde se encontra o serviço que ele irá realizar."
        }, 
        {
          type: "image",
          src: "/assets/projects/check-trampo/imagem-06.png",
          caption: "Listas de Serviços relacionados à solução"
        },
        {
          type: "text",
          value: "Lista de serviços relacionados à solução, onde o técnico seleciona o serviço que irá realizar."
        },
        {
          type: "image",
          src: "/assets/projects/check-trampo/imagem-07.png",
          caption: "Tela de atividades relacionadas ao serviço"
        },
        {
          type: "text",
          value: "Na tela do serviço, o técnico tem acesso às atividades relacionadas a cada serviço, podendo marcar as atividades como concluídas e gerar relatórios de desempenho para cada atividade realizada."
        },
        {
          type: "image",
          src: "/assets/projects/check-trampo/imagem-08.png",
          caption: "Atividade marcada como concluída"
        },
        {
          type: "text",
          value: "Ao marcar uma atividade como concluída, fica registrado o horário em que aquela atividade foi realizada, sendo possivel adicionar um detalhe escrito e uma foto do serviço."
        }
      ]
    }
  },

  {
    "id": "jokenpo-game",
    "title": "Jokenpo Game",
    "category": "Backend",
    "description": "Meu marco inicial na programação: um script em Python focado em lógica estrutural e fluxos de decisão, desenvolvido durante os primeiros passos no estudo de algoritmos.",
    "tech": ["Python"],
    "image": "/assets/projects/jokenpo/imagem-01.png",
    "links": {
      "github": "https://github.com/CheweeBR/Jokenpo-python",
      "live": ""
    },
    "featured": false,
    "details": {
      "content": [
        {
          type: "text",
          value: "Este foi o primeiro projeto da minha trajetória como desenvolvedor, realizado durante o curso de Python do 'Curso em Vídeo'. O foco central foi a aplicação prática de algoritmos estruturais, lidando com o fluxo completo de uma aplicação de terminal: entrada de dados, processamento de regras de negócio e saída visual formatada."
        },
        {
          type: "image",
          src: "/assets/projects/jokenpo/gif-01.gif",
          caption: "Video demonstrativo da interface CLI"
        },
        {
          type: "text",
          value: "Tecnicamente, o script explora o uso intensivo de estruturas de repetição (while) e condicionais aninhadas (if/elif/else) para gerenciar o estado do jogo e do placar. Além da lógica do Jokenpô, implementei manipulação de bibliotecas nativas como 'os' para controle de interface, 'time' para animações de loading, e 'random' para a inteligência da CPU, demonstrando a base necessária para a construção de fluxos de software funcionais."
        }
      ]
    }
  },

];