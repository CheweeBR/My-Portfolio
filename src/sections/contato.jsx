// sections/contato.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ==========================================
// 1. ÍCONES & COMPONENTES VISUAIS
// ==========================================

const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);

const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const IconGitHub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

// Loading Spinner para o botão
const Spinner = () => (
  <motion.svg 
    viewBox="0 0 24 24" 
    className="w-5 h-5 text-white"
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
  >
    <path fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="15 80" strokeLinecap="round" d="M12 2a10 10 0 1 0 10 10" />
  </motion.svg>
);

// Ícone de Sucesso
const IconSuccess = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-5 h-5">
    <motion.path 
      d="M20 6L9 17l-5-5" 
      initial={{ pathLength: 0 }} 
      animate={{ pathLength: 1 }} 
      transition={{ duration: 0.5 }} 
    />
  </svg>
);

// Avião de papel que voa
const FlyingPlane = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <motion.path 
      d="M22 2L11 13" 
      initial={{ pathLength: 1 }}
      animate={{ x: 50, y: -50, opacity: 0 }} 
      transition={{ duration: 0.8, ease: "easeIn" }}
    />
    <motion.path 
      d="M22 2l-7 20-4-9-9-4 20-7z" 
      initial={{ x: 0, y: 0, opacity: 1 }}
      animate={{ x: 50, y: -50, opacity: 0 }} 
      transition={{ duration: 0.8, ease: "easeIn" }}
    />
  </svg>
);

const StaticPlane = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M22 2L11 13" />
    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

// ==========================================
// 2. DADOS
// ==========================================

const contactLinks = [
  {
    name: "WhatsApp",
    url: "https://wa.me/5543996494126", 
    label: "(43) 996494126",
    icon: IconWhatsApp,
    color: "text-green-400",
    hoverBorder: "group-hover:border-green-500/50",
    hoverBg: "group-hover:bg-green-500/10",
    gradient: "from-green-500/0 via-green-500/10 to-green-500/0"
  },
  {
    name: "Email",
    url: "mailto:tiagoeloypossi@gmail.com",
    label: "tiagoeloypossi@gmail.com",
    icon: IconMail,
    color: "text-slate-200",
    hoverBorder: "group-hover:border-slate-400/50",
    hoverBg: "group-hover:bg-slate-500/10",
    gradient: "from-slate-500/0 via-slate-500/10 to-slate-500/0"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/tiago-possidonio",
    label: "/tiago-possidonio",
    icon: IconLinkedIn,
    color: "text-[#0077b5]",
    hoverBorder: "group-hover:border-[#0077b5]/50",
    hoverBg: "group-hover:bg-[#0077b5]/10",
    gradient: "from-[#0077b5]/0 via-[#0077b5]/10 to-[#0077b5]/0"
  },
  {
    name: "GitHub",
    url: "https://github.com/cheweebr",
    label: "/cheweebr",
    icon: IconGitHub,
    color: "text-white",
    hoverBorder: "group-hover:border-white/50",
    hoverBg: "group-hover:bg-white/10",
    gradient: "from-white/0 via-white/10 to-white/0"
  }
];

// ==========================================
// 3. VARIANTES DE ANIMAÇÃO
// ==========================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

// ==========================================
// 4. COMPONENTE PRINCIPAL
// ==========================================

export default function Contato() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulando envio
    setTimeout(() => {
        setFormStatus('success');
        // Reset após sucesso
        setTimeout(() => setFormStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 md:px-6 py-12 lg:py-20 flex flex-col justify-center min-h-full">
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Anima quando entra no scroll
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
      >

        {/* --- COLUNA ESQUERDA --- */}
        <div className="flex flex-col gap-10">
          
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              Vamos construir algo <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                incrível juntos?
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Seja para um projeto de <strong className="text-slate-200">IoT</strong>, uma aplicação <strong className="text-slate-200">Full Stack</strong> ou apenas para trocar uma ideia sobre tecnologia.
            </p>
          </motion.div>

          {/* GRID DE REDES SOCIAIS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className={`group relative flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm transition-all duration-300 overflow-hidden ${link.hoverBorder}`}
                whileHover="hover"
              >
                {/* Efeito de Shimmer no Background */}
                <motion.div 
                    className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-100`}
                    initial={{ x: '-100%' }}
                    variants={{
                        hover: { x: '100%', transition: { duration: 1.5, repeat: Infinity, ease: "linear" } }
                    }}
                />
                
                {/* Ícone com Animação */}
                <motion.div 
                    className={`relative z-10 p-3 rounded-xl bg-zinc-950 border border-white/5 ${link.color}`}
                    variants={{
                        hover: { rotate: [0, -10, 10, 0], scale: 1.1 }
                    }}
                >
                  <link.icon />
                </motion.div>

                <div className="flex flex-col relative z-10">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">{link.name}</span>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{link.label}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* --- COLUNA DIREITA: Formulário --- */}
        <motion.div 
          variants={itemVariants}
          className="bg-zinc-900/80 border border-white/10 p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-2xl shadow-black/50"
        >
          {/* Brilho decorativo Animado */}
           <motion.div 
             className="absolute top-0 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-[100px] pointer-events-none -mr-20 -mt-20" 
             animate={{ 
                 scale: [1, 1.2, 1],
                 opacity: [0.3, 0.5, 0.3]
             }}
             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           />

          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-5">
            <h3 className="text-2xl font-bold text-white mb-2">Envie um email direto</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <InputGroup label="Nome" type="text" placeholder="Seu nome" />
              <InputGroup label="Email" type="email" placeholder="seu@email.com" />
            </div>

            <InputGroup label="Assunto" type="text" placeholder="Projeto, Dúvida ou Café?" />
            
            <div className="flex flex-col gap-2 group">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 group-focus-within:text-green-400 transition-colors">Mensagem</label>
              <motion.textarea 
                whileFocus={{ scale: 1.01, borderColor: "rgba(74, 222, 128, 0.5)", backgroundColor: "rgba(0,0,0,0.6)" }}
                rows="4" 
                placeholder="Escreva sua mensagem aqui..." 
                required 
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none transition-all placeholder:text-slate-600 resize-none" 
              />
            </div>

            {/* BOTÃO ANIMADO */}
            <motion.button
              layout
              whileHover={{ scale: 1.02, backgroundColor: formStatus === 'idle' ? 'rgba(34, 197, 94, 1)' : '' }}
              whileTap={{ scale: 0.98 }}
              disabled={formStatus !== 'idle'}
              className={`mt-2 h-14 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors overflow-hidden relative ${
                formStatus === 'success' ? 'bg-green-600 text-white cursor-default' : 
                formStatus === 'sending' ? 'bg-zinc-700 text-white cursor-wait' :
                'bg-white text-black'
              }`}
            >
              <AnimatePresence mode='wait'>
                {formStatus === 'idle' && (
                  <motion.div 
                    key="idle"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <span>Enviar Mensagem</span>
                    <StaticPlane />
                  </motion.div>
                )}

                {formStatus === 'sending' && (
                  <motion.div 
                    key="sending"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <FlyingPlane /> {/* Elemento decorativo voando */}
                    </div>
                    <Spinner />
                  </motion.div>
                )}

                {formStatus === 'success' && (
                  <motion.div 
                    key="success"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <span>Mensagem Enviada!</span>
                    <IconSuccess />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </motion.div>

      </motion.div>
    </section>
  );
}

// Sub-componente para Input para limpar o código
const InputGroup = ({ label, type, placeholder }) => (
    <div className="flex flex-col gap-2 group">
      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 group-focus-within:text-green-400 transition-colors">{label}</label>
      <motion.input 
        whileFocus={{ scale: 1.01, borderColor: "rgba(74, 222, 128, 0.5)", backgroundColor: "rgba(0,0,0,0.6)" }}
        type={type} 
        placeholder={placeholder} 
        required 
        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none transition-all placeholder:text-slate-600" 
      />
    </div>
);