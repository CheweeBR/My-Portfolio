// src/components/Projetos/TextBlock.jsx

import { motion } from "framer-motion";

function SectionBlock({ value }) {
  const { title, content } = value;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-bold text-white border border-white/10 p-2 rounded-lg text-center">{title}</h3>
    </motion.div>
  );
}

export default SectionBlock;