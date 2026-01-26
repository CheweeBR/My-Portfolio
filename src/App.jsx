// App.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './sections/header';
import Footer from './sections/footer';

// Importe seus componentes reais aqui
import SobreMim from './sections/sobremim';
import Projetos from './sections/projetos';
import Contato from './sections/contato';
import Timeline from './sections/timeline';

function App() {
  // Lista centralizada de seções
  const sections = ["Sobre Mim", "Timeline", "Projetos", "Contato"];
  
  const [activeTab, setActiveTab] = useState("Sobre Mim");
  const [direction, setDirection] = useState(0); // Para saber se o slide vai para esq ou dir

  // Mapeamento de String para Componente
  const renderContent = () => {
    switch (activeTab) {
      case "Sobre Mim": return <SobreMim />;
      case "Timeline": return <Timeline />;
      case "Projetos": return <Projetos />;
      case "Contato": return <Contato />;
      default: return <SobreMim />;
    }
  };

  // Função inteligente para trocar de aba e definir direção da animação
  const changeTab = (newTab) => {
    const currentIndex = sections.indexOf(activeTab);
    const newIndex = sections.indexOf(newTab);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveTab(newTab);
  };

  // Lógica de Swipe (Arrastar)
  const handleDragEnd = (event, info) => {
    const currentIndex = sections.indexOf(activeTab);
    const threshold = 50; // Distância mínima para contar como swipe

    // Arrastou para esquerda (Próximo)
    if (info.offset.x < -threshold && currentIndex < sections.length - 1) {
      changeTab(sections[currentIndex + 1]);
    } 
    // Arrastou para direita (Anterior)
    else if (info.offset.x > threshold && currentIndex > 0) {
      changeTab(sections[currentIndex - 1]);
    }
  };

  const slideVariants = {
      // Era "pageEnter", mudei para "enter" para não confundir
      enter: (direction) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        position: 'absolute'
      }),
      // O TRUQUE: Mudei de "pageCenter" para "visible". 
      // Agora o SobreMim vai reconhecer este comando!
      visible: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        position: 'relative',
        transition: {
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
          when: "beforeChildren", // Isso garante que o slide termina antes dos itens aparecerem
        }
      },
      // Era "pageExit", mudei para "exit"
      exit: (direction) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        position: 'absolute' 
      })
    };

  return (
    <div className="flex flex-col h-screen bg-black text-slate-200 overflow-hidden font-sans">
      
      <div className="flex-none z-50 relative"> 
        <Header activeTab={activeTab} sections={sections} onTabChange={changeTab} />
      </div>

      <main className="flex-1 relative overflow-hidden bg-zinc-900/50">
        <AnimatePresence initial={true} custom={direction} mode="wait">
          <motion.div
            key={activeTab}
            custom={direction}
            variants={slideVariants}
            
            // ALTERAÇÃO 2: Atualizamos os nomes aqui para bater com o slideVariants acima
            initial="enter"   
            animate="visible" // <--- A MÁGICA: O App manda "visible", o SobreMim entende e anima!
            exit="exit"
            
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="w-full h-full overflow-y-auto scroll-smooth custom-scrollbar absolute top-0 left-0"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <div className="flex-none z-50 relative">
        <Footer activeTab={activeTab} sections={sections} onTabChange={changeTab} />
      </div>

    </div>
  );
}

export default App;