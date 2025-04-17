import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import logo from "../assets/b.png";

const navItems = [
  { label: "Início", to: "inicio" },
  { label: "Sobre", to: "sobre" },
  { label: "Portifólio", to: "portfolio" },
  { label: "Serviços", to: "servicos" },
  { label: "Equipe", to: "equipe" },
  { label: "Contato", to: "contato" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={handleLogoClick}
            className="flex items-center space-x-2 focus:outline-none"
            aria-label="Voltar ao topo"
          >
            <img
              src={logo}
              alt="Logo Beyond"
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
            />
            <span className="text-2xl font-bold text-white">Beyond</span>
          </button>

          <nav className="hidden md:flex space-x-8 text-white">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                className="cursor-pointer hover:text-blue-400 transition-colors duration-200"
                activeClass="text-blue-500 font-semibold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 bg-black bg-opacity-90 backdrop-blur-sm transform transition-all duration-300 ease-in-out
          ${
            menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        aria-label="Menu mobile"
      >
        {navItems.map((item) => (
          <a
            key={item.to}
            href={`#${item.to}`}
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl font-semibold hover:text-blue-400 transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}

        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white focus:outline-none transition-transform duration-200 hover:scale-110"
          aria-label="Fechar menu"
        >
          <X size={32} />
        </button>
      </div>
    </>
  );
};

export default Navbar;
