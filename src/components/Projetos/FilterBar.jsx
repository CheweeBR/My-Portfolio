// src/components/Projetos/FilterBar.jsx

import React from "react";
import { motion } from "framer-motion";
import { FilterIcon } from "./icons";

const pillMotion = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.03, y: -2 },
  tap: { scale: 0.98 },
};

export default function FilterBar({
  categories,
  activeCategory,
  setActiveCategory,
  colors,
}) {
  return (
    <div className="w-full flex flex-col gap-4 md:gap-5">
      <div className="flex items-center gap-2 text-slate-300">
        <FilterIcon />
        <span className="text-sm font-semibold tracking-wide">Categorias</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat, idx) => {
          const isActive = activeCategory === cat;
          return (
            <motion.button
              key={cat}
              variants={pillMotion}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveCategory(cat)}
              className={`
                px-4 py-2 rounded-full text-xs md:text-sm font-bold
                border backdrop-blur-sm transition-all duration-300
                ${isActive ? `${colors.bg} ${colors.text}` : "bg-zinc-900/60 text-slate-300"}
              `}
              style={{ borderColor: isActive ? `${colors.hex}40` : "rgba(148,163,184,0.15)" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + idx * 0.03 }}
              >
                {cat}
              </motion.span>
            </motion.button>
          );
        })}
      </div>

    </div>
  );
}
