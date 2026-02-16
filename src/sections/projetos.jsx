// src/sections/projetos.jsx

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FilterBar, ProjectCard, ProjectModal } from "../components/Projetos";
import { projectsData, projectCategoryColors } from "../data/projectsData";

export default function Projetos() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [activeTech, setActiveTech] = useState("Todas");
  const [hoveredId, setHoveredId] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projectsData.map((p) => p.category)));
    return ["Todos", ...unique];
  }, []);

  const techOptions = useMemo(() => {
    const all = projectsData.flatMap((p) => p.tech || []);
    const unique = Array.from(new Set(all));
    return ["Todas", ...unique];
  }, []);

  const filtered = useMemo(() => {
    return projectsData.filter((p) => {
      const okCat = activeCategory === "Todos" ? true : p.category === activeCategory;
      const okTech =
        activeTech === "Todas" ? true : (p.tech || []).includes(activeTech);
      return okCat && okTech;
    });
  }, [activeCategory, activeTech]);

  const colors = projectCategoryColors[activeCategory] || projectCategoryColors["Todos"];

  function openProject(project) {
    setSelected(project);
    setModalOpen(true);
  }

  return (
    <section id="projetos" className="w-full py-20 md:py-2">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        {!modalOpen && (


        <div className="mb-10 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl m-1 font-black text-white tracking-tight text-center"
          >
            Meus{" "}
            <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
            Projetos
            </span>
          </motion.h2>
        </div>
        )}

        {!modalOpen && (
        <FilterBar
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          techOptions={techOptions}
          activeTech={activeTech}
          setActiveTech={setActiveTech}
          colors={colors}
        />

        )}
        {!modalOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-10"
        >
          {filtered.map((p) => {
            const c = projectCategoryColors[p.category] || projectCategoryColors["Todos"];
            return (
              <ProjectCard
                key={p.id}
                project={p}
                colors={c}
                isHovered={hoveredId === p.id}
                onHoverStart={() => setHoveredId(p.id)}
                onHoverEnd={() => setHoveredId(null)}
                onOpen={openProject}
              />
            );
          })}
        </motion.div>
        )}

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-10 text-sm text-slate-500 bg-zinc-900/60 border border-white/10 rounded-2xl p-6">
            Nenhum projeto encontrado com esses filtros. Testa trocar a tecnologia ou voltar em “Todos”.
          </div>
        )}

        {/* Modal */}
        <ProjectModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          project={selected}
          colors={projectCategoryColors[selected?.category] || projectCategoryColors["Todos"]}
        />
      </div>
    </section>
  );
}
