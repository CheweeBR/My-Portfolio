// sections/header.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ... (Mantenha seus ícones MenuIcon e XIcon aqui) ...
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
);
const XIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
);

// Recebe props do App
function Header({ activeTab, onTabChange, sections }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Nota: Como o scroll agora está dentro do MainContent no App, 
    // este listener global window.scroll pode não disparar dependendo do CSS.
    // Se precisar detectar scroll do conteúdo, teria que passar o ref do main.
    // Por enquanto, vou manter simples.
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    onTabChange(section);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`w-full z-50 transition-all duration-300 bg-black/80 backdrop-blur-md border-b border-white/10 py-3`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <nav className="flex justify-between items-center px-6 md:px-12 max-w-[1400px] mx-auto">
          
          {/* LOGO */}
          <div className="font-bold text-xl tracking-tighter text-zinc-100 z-50 relative">
            TIAGO <span className="text-green-500">POSSIDONIO</span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex flex-row gap-2">
            {sections.map((item) => (
              <li 
                key={item} 
                onClick={() => handleNavClick(item)}
                className="relative px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer group"
              >
                <span className="relative z-10">{item}</span>
                {activeTab === item && (
                  <motion.div
                    layoutId="activeTabHeader"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button 
            className="md:hidden text-zinc-100 p-2 z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </nav>
      </motion.header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center md:hidden"
          >
             <button 
              className="absolute top-6 right-6 text-zinc-400 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
               <XIcon />
            </button>

            <ul className="flex flex-col gap-8 text-center">
              {sections.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <span 
                    onClick={() => handleNavClick(item)}
                    className={`text-3xl font-bold cursor-pointer tracking-tight ${
                      activeTab === item ? "text-green-400" : "text-zinc-300"
                    }`}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;