function Header() {
  const opcoes = ["Sobre Mim", "Projetos", "Contato"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-zinc-200 shadow-sm">
      <nav className="flex justify-between items-center h-16 px-8 mx-auto">
        <div className="font-bold text-xl tracking-tight text-zinc-900">
          TIAGO POSSIDONIO
        </div>

        <ul className="flex flex-row gap-8">
          {opcoes.map((item, index) => (
            <li 
              key={index} 
              className="text-sm font-medium text-zinc-600 hover:text-black transition-colors cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

      </nav>
    </header>
  );
}

export default Header;