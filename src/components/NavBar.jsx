import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Beyond</h1>

        <nav className="hidden md:flex space-x-6 text-white">
          <a href="#" className="hover:text-blue-400">Início</a>
          <a href="#" className="hover:text-blue-400">Serviços</a>
          <a href="#" className="hover:text-blue-400">Projetos</a>
          <a href="#" className="hover:text-blue-400">Contato</a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center text-white bg-black bg-opacity-50 rounded p-4">
          <a href="#" className="block">Início</a>
          <a href="#" className="block">Serviços</a>
          <a href="#" className="block">Projetos</a>
          <a href="#" className="block">Contato</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
