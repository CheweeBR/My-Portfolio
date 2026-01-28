// src/components/Projetos/TextBlock.jsx
// Componente para renderizar blocos de texto nos detalhes do projeto

import { motion } from "framer-motion";

function TextBlock({ value }) {
  // Quebra o texto em parágrafos (quando tem \n\n)
  const paragraphs = value.split('\n\n').filter(p => p.trim());

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      {paragraphs.map((paragraph, index) => (
        <p 
          key={index}
          className="text-slate-300 text-sm md:text-base leading-relaxed"
        >
          {paragraph}
        </p>
      ))}
    </motion.div>
  );
}

export default TextBlock;