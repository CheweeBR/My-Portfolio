// src/components/Projetos/ImageBlock.jsx
// Componente para renderizar blocos de imagem nos detalhes do projeto

import { motion } from "framer-motion";
import { useState } from "react";

function ImageBlock({ src, caption }) {
  const [imgError, setImgError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Se a imagem falhou ao carregar, mostra placeholder
  if (imgError) {
    return (
      <div className="w-full aspect-video bg-zinc-800/40 border border-white/10 rounded-lg flex items-center justify-center my-6">
        <p className="text-slate-500 text-sm">📷 Imagem não disponível</p>
      </div>
    );
  }

  return (
    <motion.figure
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="my-6 w-full"
    >
      {/* Container da imagem */}
      <div className="relative overflow-hidden rounded-lg border border-white/10">
        
        {/* Skeleton de loading (enquanto a imagem carrega) */}
        {isLoading && (
          <div className="absolute inset-0 bg-zinc-800/40 animate-pulse" />
        )}
        
        {/* Imagem */}
        <motion.img
          src={src}
          alt={caption || "Imagem do projeto"}
          onLoad={() => setIsLoading(false)}
          onError={() => setImgError(true)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="w-full h-auto object-cover rounded-lg shadow-xl shadow-black/50"
        />
      </div>

      {/* Caption (legenda) - só mostra se existir */}
      {caption && (
        <figcaption className="text-sm text-slate-400 text-center mt-3 italic">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}

export default ImageBlock;