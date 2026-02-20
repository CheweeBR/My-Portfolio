// src/App.jsx
import React from "react";

import Header from "./sections/header";
import Footer from "./sections/footer";

import SobreMim from "./sections/sobremim";
import Timeline from "./sections/timeline";
import Projetos from "./sections/projetos";
import Contato from "./sections/contato";

import SwipeTabs from "./components/SwipeTabs/SwipeTabs";
import { useSwipeTabs } from "./hooks/useSwipeTabs";

function App() {
  // Lista centralizada de seções
  const sections = ["Sobre Mim", "Timeline", "Projetos", "Contato"];

  // Estado + lógica do swipe/tab (separado)
  const { activeTab, direction, changeTab, handleDragEnd } = useSwipeTabs(
    sections,
    "Sobre Mim"
  );

  // Mapeamento de String para Componente
  const renderContent = () => {
    switch (activeTab) {
      case "Sobre Mim":
        return <SobreMim />;
      case "Timeline":
        return <Timeline />;
      case "Projetos":
        return <Projetos />;
      case "Contato":
        return <Contato />;
      default:
        return <SobreMim />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black text-slate-200 overflow-hidden font-sans">
      <div className="flex-none z-50 relative">
        <Header
          activeTab={activeTab}
          sections={sections}
          onTabChange={changeTab}
        />
      </div>

      <main className="flex-1 relative overflow-hidden bg-zinc-900/50">
        <SwipeTabs
          activeKey={activeTab}
          direction={direction}
          onDragEnd={handleDragEnd}
        >
          {renderContent()}
        </SwipeTabs>
      </main>

      <div className="flex-none z-50 relative">
        <Footer
          activeTab={activeTab}
          sections={sections}
          onTabChange={changeTab}
        />
      </div>
    </div>
  );
}

export default App;