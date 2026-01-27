// src/components/SobreMim/CategoryCard.jsx
// Card de categoria de tecnologia

import { motion } from 'framer-motion';
import { itemVariants } from '../../constants/sobremim';
import TechBadge from './TechBadge';

const CategoryCard = ({ 
  title, 
  icon: IconComponent, 
  color, 
  description, 
  gradient, 
  borderColor, 
  techs = [] 
}) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.3)" }}
    className={`
      ${gradient} border ${borderColor} p-6 rounded-2xl 
      flex flex-col gap-4 transition-colors 
      shadow-xl backdrop-blur-sm group
    `}
  >
    {/* Header */}
    <div className="flex items-center gap-3 mb-2">
      <div className={`
        p-3 rounded-xl bg-white/5 ${color} 
        group-hover:scale-110 transition-transform duration-300
      `}>
        <IconComponent />
      </div>
      <h3 className="font-bold text-slate-200 text-lg">{title}</h3>
    </div>

    {/* Description */}
    {description && (
      <p className="text-slate-400 text-sm">
        {description}
      </p>
    )}

    {/* Tech Badges */}
    <div className="flex flex-wrap gap-2">
      {techs.map((tech) => (
        <TechBadge 
          key={tech.name} 
          name={tech.name} 
          colorClass={tech.colorClass} 
        />
      ))}
    </div>
  </motion.div>
);

export default CategoryCard;