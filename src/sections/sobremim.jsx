// src/sections/sobremim.jsx
// Seção "Sobre Mim" - apresentação e habilidades técnicas

import { motion } from 'framer-motion';

// Components
import { BioCard, IoTCard, CategoryCard } from '../components/SobreMim';

// Data & Constants
import { categoriesData } from '../data/techData';
import { containerVariants } from '../constants/sobremim';

function SobreMim() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-6 py-4 md:py-6 xl:py-6 flex flex-col justify-center min-h-full">
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-min"
      >
        
        {/* Card de Biografia (2x2) */}
        <BioCard />

        {/* Card de IoT (2 colunas) */}
        <IoTCard />

        {/* Cards de Categorias */}
        {categoriesData.map((category) => (
          <div 
            key={category.id} 
            className={category.fullWidth ? 'lg:col-span-2' : ''}
          >
            <CategoryCard 
              title={category.title}
              icon={category.icon}
              color={category.color}
              description={category.description}
              gradient={category.gradient}
              borderColor={category.borderColor}
              techs={category.techs}
            />
          </div>
        ))}

      </motion.div>
    </section>
  );
}

export default SobreMim;