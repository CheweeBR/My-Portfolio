// src/data/timelineData.js
import {
  SparklesIcon,
  SeedlingIcon,
  MountainIcon,
  CompassIcon,
  RocketIcon,
  CrownIcon,
  RadarIcon
} from '../components/Timeline/icons';

export const timelineData = [
  {
    year: "2018",
    phase: "O Despertar",
    title: "A Primeira Linha de Código",
    quote: '"Todo grande desenvolvedor começou com um Hello World"',
    story: "Tudo começou com curiosidade. Descobri o canal Curso em Vídeo e mergulhei no universo Python. Das variáveis aos loops, cada conceito era uma nova descoberta. O projeto Jokenpô não era apenas um jogo - era a prova de que eu poderia transformar lógica em realidade.",
    icon: SparklesIcon,
    color: "green",
    emotion: "Curiosidade • Descoberta",
    milestone: "Primeiro Projeto",
    link: {
      url: "https://github.com/CheweeBR/Jokenpo-python",
      label: "Ver o começo de tudo"
    }
  },
  {
    year: "2019",
    phase: "O Primeiro Passo",
    title: "Do Código para o Mundo Real",
    quote: '"A teoria encontra a prática"',
    story: "Menor aprendiz, grandes responsabilidades. Assumi o TI da Pé Vermelho Transportes. Não era só formatar computadores - era resolver problemas reais, conectar pessoas, fazer a empresa funcionar. Cada impressora configurada, cada servidor mantido, era um tijolo na construção do profissional que eu queria ser.",
    icon: SeedlingIcon,
    color: "blue",
    emotion: "Responsabilidade • Crescimento",
    milestone: "Primeira Experiência Profissional"
  },
  {
    year: "2021",
    phase: "A Fundamentação",
    title: "Tecnologia em ADS na UTFPR",
    quote: '"Aprender fazendo, ensinar compartilhando"',
    // Atualizado com base no Histórico Escolar e correção da nomenclatura [cite: 59, 91]
    story: "Início do curso de Tecnologia em Análise e Desenvolvimento de Sistemas. Não foi apenas passar nas matérias, foi dominar os fundamentos. Com desempenho de destaque em Banco de Dados e Estratégias de Programação, transformei a teoria da sala de aula em uma base sólida para arquitetura de software.",
    icon: MountainIcon,
    color: "purple",
    emotion: "Determinação • Aprendizado",
    milestone: "Início da Graduação",
    highlight: "Tecnólogo em ADS"
  },
  {
    year: "2022",
    phase: "A Transição",
    title: "Além do Suporte Técnico",
    quote: '"Quando você vê um problema, você vê uma oportunidade de automatizar"',
    // Mantido com base no Currículo [cite: 38, 39]
    story: "Na ATOS, o que começou como suporte técnico evoluiu. A insatisfação com tarefas repetitivas me levou a criar automações. Foi o momento de virada: de resolver tickets para criar soluções que impediam os tickets de existirem. Programar tornou-se minha forma de pensar.",
    icon: CompassIcon,
    color: "red",
    emotion: "Inovação • Proatividade",
    milestone: "Automação de Processos"
  },
  {
    year: "2024",
    phase: "A Prática",
    title: "Estágio & Full Stack",
    quote: '"Código que controla o mundo físico"',
    // Atualizado com stacks específicas do Currículo e início na Comando [cite: 29, 30]
    story: "Início na Comando Soluções em Segurança. React com Vite no front, Fastify e Node.js no back, integrados a Raspberry Pi e ESP32. Do protocolo MQTT ao deploy na Cloudflare, cada linha de código agora acendia luzes e controlava ambientes reais.",
    icon: RocketIcon,
    color: "orange",
    emotion: "Realização • Integração",
    milestone: "Desenvolvimento IoT"
  },
  {
    year: "2025",
    phase: "A Consolidação",
    title: "Desenvolvedor & Líder de Equipe",
    quote: '"O fim de um ciclo, o início do legado"',
    // Atualizado com a colação de grau [cite: 75] e os novos cargos informados pelo usuário
    story: "Um ano de marcos definitivos. Colação de grau oficial como Tecnólogo em ADS pela UTFPR em março. Profissionalmente, fui efetivado como Desenvolvedor Júnior e assumi o desafio de Líder de Equipe na Comando Soluções, unindo a gestão técnica com a arquitetura de novas soluções.",
    icon: CrownIcon,
    color: "gold",
    emotion: "Liderança • Formatura",
    milestone: "Graduado & Líder Técnico"
  },
  {
    year: "2026",
    phase: "A Nova Jornada",
    title: "Em Busca de Novos Horizontes",
    quote: '"O futuro pertence àqueles que acreditam na beleza de seus sonhos"',
    story: "Com a conclusão de um ciclo intenso e vitorioso como líder técnico, decidi abrir as portas para novas oportunidades. Estou focado em aplicar minha experiência Full Stack e IoT em projetos desafiadores, buscando ambientes que respirem inovação e onde eu possa continuar transformando café em soluções de alto impacto.",
    icon: RadarIcon,
    color: "cyan",
    emotion: "Abertura • Propósito",
    milestone: "Open to Work",
    highlight: "Disponível para Projetos"
  },
];