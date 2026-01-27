// src/constants/timeline.js
// Esquema de cores e variantes de animação da Timeline

// ==========================================
// ESQUEMA DE CORES
// ==========================================

export const colorSchemes = {
  blue: {
    from: "from-blue-500",
    to: "to-cyan-500",
    text: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    glow: "shadow-lg shadow-blue-500/20",
    gradient: "bg-gradient-to-b from-blue-500 to-cyan-500",
    ring: "ring-blue-500/50",
    hex: "#3b82f6"
  },
  orange: {
    from: "from-orange-500",
    to: "to-red-500",
    text: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    glow: "shadow-lg shadow-orange-500/20",
    gradient: "bg-gradient-to-b from-orange-500 to-red-500",
    ring: "ring-orange-500/50",
    hex: "#f97316"
  },
  purple: {
    from: "from-purple-500",
    to: "to-pink-500",
    text: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    glow: "shadow-lg shadow-purple-500/20",
    gradient: "bg-gradient-to-b from-purple-500 to-pink-500",
    ring: "ring-purple-500/50",
    hex: "#a855f7"
  },
  red: {
    from: "from-red-500",
    to: "to-rose-500",
    text: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/30",
    glow: "shadow-lg shadow-red-500/20",
    gradient: "bg-gradient-to-b from-red-500 to-rose-500",
    ring: "ring-red-500/50",
    hex: "#ef4444"
  },
  green: {
    from: "from-green-500",
    to: "to-emerald-500",
    text: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    glow: "shadow-lg shadow-green-500/20",
    gradient: "bg-gradient-to-b from-green-500 to-emerald-500",
    ring: "ring-green-500/50",
    hex: "#22c55e"
  },
  gold: {
    from: "from-yellow-500",
    to: "to-amber-500",
    text: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
    glow: "shadow-lg shadow-yellow-500/20",
    gradient: "bg-gradient-to-b from-yellow-500 to-amber-500",
    ring: "ring-yellow-500/50",
    hex: "#eab308"
  }
};

// ==========================================
// VARIANTES DE ANIMAÇÃO (FRAMER MOTION)
// ==========================================

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.3, 
      delayChildren: 0.2 
    }
  }
};

export const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60, 
    scale: 0.95 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15,
      mass: 1
    }
  }
};

export const nodeVariants = {
  hidden: { 
    scale: 0, 
    opacity: 0 
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 200, 
      damping: 15,
      delay: 0.1
    }
  }
};

export const pulseVariants = {
  initial: { 
    scale: 1, 
    opacity: 0 
  },
  animate: {
    scale: [1, 1, 2],
    opacity: [0, 0.5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeOut",
      times: [0, 0.1, 1]
    }
  }
}