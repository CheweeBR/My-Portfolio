// src/components/Projetos/ProjectModal.jsx

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitHubIcon, ExternalLinkIcon } from "./icons";

export default function ProjectModal({ open, onClose, project, colors }) {
  return (
    <AnimatePresence>
      {open && project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="relative w-full max-w-3xl bg-zinc-900/95 border rounded-3xl overflow-hidden"
            style={{ borderColor: `${colors.hex}30` }}
          >
            {/* Glow */}
            <div
              className="absolute inset-0 blur-3xl opacity-20"
              style={{ background: `linear-gradient(to bottom right, ${colors.hex}, ${colors.hex}80)` }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between p-5 md:p-6 border-b border-white/10">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-xs text-slate-400 mt-1">{project.category}</p>
                </div>

                <button
                  onClick={onClose}
                  className="text-slate-300 hover:text-white transition px-3 py-2 rounded-xl bg-zinc-800/50 border border-white/10"
                  type="button"
                >
                  ✕
                </button>
              </div>

              <div className="p-5 md:p-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 md:h-72 object-cover rounded-2xl border border-white/10"
                />

                <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-4">
                  {project.longDescription || project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {(project.tech || []).map((t) => (
                    <span
                      key={t}
                      className="text-xs font-bold text-slate-300 bg-zinc-800/60 border border-white/10 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project?.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        inline-flex items-center gap-2 px-4 py-2 rounded-lg
                        text-xs font-medium ${colors.text} ${colors.bg}
                        border backdrop-blur-sm
                      `}
                      style={{ borderColor: `${colors.hex}30` }}
                    >
                      <GitHubIcon />
                      GitHub
                    </a>
                  )}

                  {project?.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-slate-200 bg-zinc-800/60 border border-white/10"
                    >
                      <ExternalLinkIcon />
                      Deploy
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
