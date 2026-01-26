import { motion } from 'framer-motion';

// ==========================================
// 1. MAPEAMENTO DE LINKS (DOCUMENTAÇÃO)
// ==========================================
const techLinks = {
  // IoT
  "Raspberry Pi": "https://www.raspberrypi.org/documentation/",
  "Arduino": "https://docs.arduino.cc/",
  "Espressif (ESP32)": "https://docs.espressif.com/projects/esp-idf/en/latest/esp32/",
  "MQTT": "https://mqtt.org/",
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
// 2. ÍCONES PROFISSIONAIS ANIMADOS (SVG)
// ==========================================

const IconIoT = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-white">
    <motion.rect 
      x="4" y="4" width="16" height="16" rx="2" 
      initial={{ pathLength: 0, opacity: 0.2 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
    />
    <motion.path 
      d="M9 9h6v6H9z" 
      fill="currentColor" 
      animate={{ opacity: [0.3, 1, 0.3] }} 
      transition={{ duration: 1.5, repeat: Infinity }} 
      className="text-red-500" 
      style={{ stroke: 'none' }}
    />
    <motion.path 
      d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" 
      strokeLinecap="round" 
      className="text-slate-500"
      animate={{ opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
    />
  </svg>
);

const IconBackend = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <motion.g
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "12px 12px" }}
    >
      <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.5.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
    </motion.g>
  </svg>
);

const IconFrameworks = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <motion.path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" 
       animate={{ y: [0, -1, 0] }}
       transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
  </svg>
);

const IconFrontend = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <motion.path d="M8 21h8" strokeLinecap="round" />
    <motion.path d="M12 17v4" strokeLinecap="round" />
    <motion.path 
      d="M6 8h2M6 12h8" 
      strokeLinecap="round" 
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </svg>
);

const IconDatabase = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <motion.ellipse cx="12" cy="5" rx="9" ry="3" />
    <motion.path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" strokeLinecap="round" />
    <motion.path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" strokeLinecap="round" />
    <motion.circle 
      cx="18" cy="18" r="1" fill="currentColor" 
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 1, repeat: Infinity }}
      stroke="none"
    />
  </svg>
);

const IconCloud = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <g transform="translate(1, 1) scale(0.92)">
      <motion.path 
        d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" 
        strokeLinecap="round" strokeLinejoin="round"
      />
      <motion.path 
        d="M12 17v-4" 
        strokeLinecap="round"
        animate={{ y: [0, -3], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.path 
        d="M10 15l2-2 2 2" 
        strokeLinecap="round" strokeLinejoin="round"
        animate={{ y: [0, -3], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
    </g>
  </svg>
);

// ==========================================
// 3. VARIANTES E COMPONENTES AUXILIARES
// ==========================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 120 }
  }
};

const TechBadge = ({ name, colorClass }) => {
  const url = techLinks[name] || "#"; 

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`px-3 py-1.5 rounded-md text-xs font-bold border ${colorClass} bg-opacity-10 backdrop-blur-sm cursor-pointer inline-block no-underline hover:brightness-110`}
    >
      {name}
    </motion.a>
  );
};

const CategoryCard = ({ title, IconComponent, color, children }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.3)" }}
    className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col gap-4 transition-colors shadow-xl backdrop-blur-sm group"
  >
    <div className="flex items-center gap-3 mb-2">
      <div className={`p-3 rounded-xl bg-white/5 ${color} group-hover:scale-110 transition-transform duration-300`}>
        <IconComponent />
      </div>
      <h3 className="font-bold text-slate-200 text-lg">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {children}
    </div>
  </motion.div>
);

function SobreMim() {
  return (
    // ALTERAÇÃO 1: Adicionado flex-col, justify-center e min-h-full. Ajustado padding.
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-6 py-4 md:py-6 xl:py-6 flex flex-col justify-center min-h-full">
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        // ALTERAÇÃO 3: Ajustado gap-6 para gap-4 em telas médias (md) para economizar espaço
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-min"
      >
        
        {/* BLOCO 1: BIOGRAFIA */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-8 rounded-3xl relative overflow-hidden group"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"
          />

          <div className="relative z-10 flex flex-col h-full justify-between gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                Olá, sou <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                  Tiago Possidonio
                </span>
              </h1>
              
              <p className="text-green-400 font-mono text-sm tracking-widest uppercase mb-6 flex flex-wrap items-center gap-2">
                <span>Full Stack Dev •</span>
                <motion.a 
                  href="https://www.utfpr.edu.br/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold border-b-2 border-green-500 hover:text-white hover:border-white transition-colors cursor-pointer inline-flex items-center gap-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  UTFPR
                </motion.a>
              </p>

              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>🎓 Formado em <b>Análise e Desenvolvimento de Sistemas</b> na UTFPR.</p>
                <p className="border-l-4 border-yellow-500 pl-4 italic text-slate-400">
                  "Meu sonho é tornar o mundo um lugar melhor com a tecnologia."
                </p>
                <p>
                  Acredito que o código é uma ferramenta para resolver problemas reais. 
                  Meu foco atual é criar soluções robustas, unindo a performance do <b>Node.js</b> com a interatividade do <b>React</b>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BLOCO 2: IoT */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="lg:col-span-2 bg-gradient-to-r from-red-900/40 to-slate-900 border border-red-500/20 p-6 rounded-2xl flex flex-col justify-center gap-4 hover:border-red-500/40 transition-colors"
        >
          <div className="flex items-center gap-3">
             <div className="p-2 bg-red-500/10 rounded-lg">
                <IconIoT />
             </div>
            <h3 className="text-xl font-bold text-white">IoT & Hardware</h3>
          </div>
          <p className="text-slate-400 text-sm">
            Onde o software encontra o mundo físico. Minha especialidade inclui protocolos industriais e sistemas embarcados.
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            <TechBadge name="Raspberry Pi" colorClass="border-red-500 text-red-400 bg-red-500/10" />
            <TechBadge name="Arduino" colorClass="border-cyan-500 text-cyan-400 bg-cyan-500/10" />
            <TechBadge name="Espressif (ESP32)" colorClass="border-red-600 text-red-500 bg-red-600/10" />
            <TechBadge name="MQTT" colorClass="border-purple-500 text-purple-400 bg-purple-500/10" />
            <TechBadge name="TCP/IP" colorClass="border-blue-500 text-blue-400 bg-blue-500/10" />
            <TechBadge name="Node-RED" colorClass="border-red-800 text-red-300 bg-red-800/10" />
          </div>
        </motion.div>

        {/* OUTROS CARDS */}
        
        <CategoryCard title="Back End" IconComponent={IconBackend} color="text-green-500">
          <TechBadge name="Node.js" colorClass="border-green-600 text-green-400 bg-green-600/10" />
          <TechBadge name="Java" colorClass="border-orange-500 text-orange-400 bg-orange-500/10" />
          <TechBadge name="Python" colorClass="border-blue-500 text-blue-400 bg-blue-500/10" />
          <TechBadge name="C" colorClass="border-slate-500 text-slate-300 bg-slate-500/10" />
        </CategoryCard>

        <CategoryCard title="Frameworks" IconComponent={IconFrameworks} color="text-slate-200">
          <TechBadge name="Fastify" colorClass="border-white text-white bg-white/10" />
          <TechBadge name="Express.js" colorClass="border-slate-400 text-slate-300 bg-slate-400/10" />
        </CategoryCard>

        <CategoryCard title="Front End" IconComponent={IconFrontend} color="text-blue-400">
          <TechBadge name="React" colorClass="border-cyan-400 text-cyan-300 bg-cyan-400/10" />
          <TechBadge name="Vite" colorClass="border-purple-400 text-purple-300 bg-purple-400/10" />
          <TechBadge name="Tailwind CSS" colorClass="border-teal-400 text-teal-300 bg-teal-400/10" />
        </CategoryCard>

        <CategoryCard title="Database" IconComponent={IconDatabase} color="text-blue-600">
          <TechBadge name="PostgreSQL" colorClass="border-blue-600 text-blue-400 bg-blue-600/10" />
          <TechBadge name="MySQL" colorClass="border-blue-800 text-blue-300 bg-blue-800/10" />
          <TechBadge name="MongoDB" colorClass="border-green-500 text-green-400 bg-green-500/10" />
        </CategoryCard>

        <div className="lg:col-span-2">
           <CategoryCard title="DevOps & Cloud" IconComponent={IconCloud} color="text-pink-500">
            <TechBadge name="Vercel" colorClass="border-white text-white bg-black/50" />
            <TechBadge name="Netlify" colorClass="border-teal-500 text-teal-400 bg-teal-500/10" />
            <TechBadge name="Cloudflare" colorClass="border-yellow-400 text-yellow-300 bg-yellow-400/10" />
            <TechBadge name="Docker" colorClass="border-blue-500 text-blue-400 bg-blue-500/10" />
            <TechBadge name="NGINX" colorClass="border-green-600 text-green-400 bg-green-600/10" />
           </CategoryCard>
        </div>

      </motion.div>
    </section>
  );
}

export default SobreMim;