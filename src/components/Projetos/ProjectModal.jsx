import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitHubIcon, ExternalLinkIcon } from "./icons";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";

export default function ProjectModal({ open, onClose, project }) {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") {
        lightboxSrc ? setLightboxSrc(null) : onClose?.();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, lightboxSrc, onClose]);

  if (!open || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-3 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        aria-modal="true"
        role="dialog"
      >
        <div className="absolute inset-0 bg-black/80" />

        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.98, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 12 }}
          className="relative w-full max-w-5xl bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden flex flex-col"
          style={{ maxHeight: "85vh" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-white truncate">{project.title}</h3>
              <p className="text-xs text-slate-400 mt-0.5">{project.category}</p>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition p-2 rounded-lg hover:bg-white/5"
              aria-label="Fechar"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 min-h-0 lg:grid lg:grid-cols-[320px_1fr] overflow-hidden">
            
            {/* Sidebar - Dados do Card */}
            <div className="lg:border-r border-white/10 p-5 space-y-4 overflow-y-auto">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-xl border border-white/10"
                />
              )}

              {project.description && (
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              )}

              {project.tech?.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Tecnologias
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-slate-300 bg-zinc-800 px-2.5 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 pt-2">
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-green-300 bg-green-500/10 hover:bg-green-500/20 transition"
                  >
                    <ExternalLinkIcon /> Deploy
                  </a>
                )}
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 transition"
                  >
                    <GitHubIcon /> GitHub
                  </a>
                )}
              </div>
            </div>

            {/* Main - Detalhes do Projeto */}
            <div className="p-5 overflow-y-auto space-y-5">
              {project.details?.content?.length > 0 ? (
                project.details.content.map((block, i) => {
                  if (block.type === "text") {
                    return <TextBlock key={i} value={block.value} />;
                  }
                  if (block.type === "image") {
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setLightboxSrc(block.src)}
                        className="block w-full text-left"
                      >
                        <div className="rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition">
                          <ImageBlock src={block.src} caption={block.caption} />
                        </div>
                      </button>
                    );
                  }
                  return null;
                })
              ) : (
                <p className="text-slate-500 text-sm">Sem detalhes adicionais.</p>
              )}
            </div>
          </div>

          {/* Lightbox */}
          <AnimatePresence>
            {lightboxSrc && (
              <motion.div
                className="absolute inset-0 z-[110] flex items-center justify-center p-6 bg-black/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxSrc(null)}
              >
                <button
                  className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
                  onClick={() => setLightboxSrc(null)}
                >
                  ✕
                </button>
                <img
                  src={lightboxSrc}
                  alt="Imagem ampliada"
                  className="max-w-full max-h-full object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}