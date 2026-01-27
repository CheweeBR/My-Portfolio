// src/sections/contato.jsx
// Seção de Contato - formulário e redes sociais

import { motion } from 'framer-motion';

// Components
import { ContactLink, ContactForm } from '../components/Contato';

// Data & Constants
import { contactLinks } from '../data/contactData';
import { containerVariants, itemVariants } from '../constants/contato';

export default function Contato() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 md:px-6 py-12 lg:py-20 flex flex-col justify-center min-h-full">
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
      >

        {/* --- COLUNA ESQUERDA --- */}
        <div className="flex flex-col gap-10">
          
          {/* Header */}
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

          {/* Grid de Redes Sociais */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactLinks.map((link) => (
              <ContactLink key={link.name} link={link} />
            ))}
          </div>
        </div>

        {/* --- COLUNA DIREITA: Formulário --- */}
        <ContactForm />

      </motion.div>
    </section>
  );
}