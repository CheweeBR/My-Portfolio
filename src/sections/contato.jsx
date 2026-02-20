// src/sections/contato.jsx
// Seção de Contato - redes sociais (sem formulário)

import { motion } from 'framer-motion';

// Components
import { ContactLink } from '../components/Contato';

// Data & Constants
import { contactLinks } from '../data/contactData';
import { containerVariants, itemVariants } from '../constants/contato';

export default function Contato() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 md:px-6 py-12 lg:py-20 flex items-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full max-w-3xl mx-auto flex flex-col items-center gap-10"
      >
        {/* Header centralizado */}
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            Vamos construir algo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              incrível juntos?
            </span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed max-w-1xl mx-auto">
            Seja para um projeto de <strong className="text-slate-200">IoT</strong>, uma aplicação{" "}
            <strong className="text-slate-200">Full Stack</strong> ou apenas para trocar uma ideia
            sobre tecnologia.
          </p>
        </motion.div>

        {/* Grid central */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
          {contactLinks.map((link) => (
            <div key={link.name} className="w-full max-w-sm">
              <ContactLink link={link} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
