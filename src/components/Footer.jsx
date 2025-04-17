import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-800 text-gray-400 py-12 px-6 sm:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-2xl font-bold mb-4">Beyond</h3>
          <p className="text-sm">Conectando tecnologia, design e estratégia para levar sua marca além do código.</p>
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Navegação</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#inicio" className="hover:text-white transition">Início</a></li>
            <li><a href="#sobre" className="hover:text-white transition">Sobre</a></li>
            <li><a href="#portfolio" className="hover:text-white transition">Portfólio</a></li>
            <li><a href="#contato" className="hover:text-white transition">Contato</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Siga-nos</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
            <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Contato</h4>
          <p className="text-sm mt-2">Telefone: (13) 98834-2378</p>
          <p className="text-sm mt-2">Email: beyond.business.tech@gmail.com</p>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Beyond. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;