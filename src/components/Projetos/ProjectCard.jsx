// src/components/Projetos/ProjectCard.jsx

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { GitHubIcon, ExternalLinkIcon } from "./icons";

const ProjectCard = ({ project, isHovered, onHoverStart, onHoverEnd, colors, onOpen }) => {
  const [imgError, setImgError] = useState(false);

  const hasImage = useMemo(() => {
    const src = project?.image;
    return Boolean(src) && typeof src === "string" && src.trim().length > 0 && !imgError;
  }, [project?.image, imgError]);

  return (
    <motion.article
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onClick={() => onOpen(project)}
      whileHover={{ scale: 1.02, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`
        w-full bg-zinc-900/90 backdrop-blur-md
        border rounded-3xl overflow-hidden
        relative group cursor-pointer
        transition-all duration-300
      `}
      style={{
        borderColor: `${colors.hex}30`,
        boxShadow: isHovered
          ? `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px ${colors.hex}30`
          : `0 10px 30px -10px rgba(0, 0, 0, 0.3), 0 0 20px ${colors.hex}15`,
      }}
    >
      {/* Glow */}
      <motion.div
        animate={{ opacity: isHovered ? 0.18 : 0, scale: isHovered ? 1.2 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 blur-3xl"
        style={{ background: `linear-gradient(to bottom right, ${colors.hex}, ${colors.hex}80)` }}
      />

      {/* Shine */}
      <motion.div
        initial={{ x: "-120%", opacity: 0 }}
        animate={isHovered ? { x: "220%", opacity: 0.1 } : { x: "-120%", opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12"
      />

      <div className="relative z-10">
        {/* Thumb */}
        <div className="relative h-44 md:h-48 overflow-hidden">
          {hasImage ? (
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.5 }}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-zinc-950/60">
              {/* Placeholder com leve animação */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center px-6"
              >
                <motion.div
                  className="mx-auto mb-3 h-10 w-10 rounded-2xl border backdrop-blur-sm flex items-center justify-center"
                  style={{
                    borderColor: `${colors.hex}30`,
                    boxShadow: `0 0 24px ${colors.hex}20`,
                    background: `linear-gradient(to bottom right, ${colors.hex}25, transparent)`,
                  }}
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-lg">🖼️</span>
                </motion.div>

                <p className="text-sm font-bold text-slate-200">
                  Sem imagem de pré-visualização
                </p>
              </motion.div>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`
                inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold
                ${colors.bg} ${colors.text} border mb-0 backdrop-blur-sm
              `}
              style={{ borderColor: `${colors.hex}30` }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-7">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-bold text-white leading-tight"
          >
            {project.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm md:text-base leading-relaxed mt-3"
          >
            {project.description}
          </motion.p>

          {/* Tech tags */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap gap-2 mt-4"
          >
            {(project.tech || []).slice(0, 6).map((t) => (
              <span
                key={t}
                className="text-xs font-bold text-slate-300 bg-zinc-800/60 border border-white/10 px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </motion.div>

          {/* Actions */}
          <div
            className="flex flex-wrap items-center gap-2 mt-5"
            onClick={(e) => e.stopPropagation()}
          >
            {project?.links?.github && (
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  inline-flex items-center gap-2 px-4 py-2 rounded-lg
                  text-xs font-medium ${colors.text} ${colors.bg}
                  border backdrop-blur-sm
                `}
                style={{ borderColor: `${colors.hex}30` }}
              >
                <GitHubIcon />
                GitHub
              </motion.a>
            )}

            {project?.links?.live && (
              <motion.a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  inline-flex items-center gap-2 px-4 py-2 rounded-lg
                  text-xs font-medium text-slate-200 bg-zinc-800/60
                  border border-white/10 backdrop-blur-sm
                `}
              >
                <ExternalLinkIcon />
                Deploy
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
