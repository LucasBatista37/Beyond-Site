import mockup from "../assets/mockup_app3.png";
import {
  FaEnvelope,
  FaBriefcase,
  FaTags,
  FaSmile,
  FaArrowDown,
  FaFolderOpen,
} from "react-icons/fa";

const scrollToSection = (id) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    <section
      id="inicio"
      role="region"
      aria-label="Seção principal do site - Hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 px-6 md:px-20 py-12 bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden"
    >
      <div className="z-10 w-full md:w-1/2 max-w-2xl text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Transformamos ideias em{" "}
          <span className="text-blue-600">soluções digitais</span>
        </h1>

        <p className="text-base sm:text-lg md:text-2xl text-gray-300 mb-8">
          Na Beyond, performance, design e tecnologia se unem para tirar sua
          ideia do papel e levar sua marca além do código.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
          <a
            href="#contato"
            aria-label="Ir para o formulário de contato"
            className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white font-medium px-6 py-3 rounded-full shadow-lg"
          >
            <FaEnvelope />
            Fale com a gente
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 border border-gray-400 hover:border-white text-gray-300 hover:text-white transition-colors duration-300 font-medium px-6 py-3 rounded-full"
          >
            <FaFolderOpen />
            Ver Portfólio
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 text-white">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center animate-fade-in">
            <FaBriefcase className="text-blue-500 text-xl mx-auto mb-2" />
            <div className="text-xl font-bold">+50</div>
            <p className="text-sm text-gray-400">Projetos entregues</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center animate-fade-in delay-100">
            <FaTags className="text-blue-500 text-xl mx-auto mb-2" />
            <div className="text-xl font-bold">+10</div>
            <p className="text-sm text-gray-400">Segmentos atendidos</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center animate-fade-in delay-200">
            <FaSmile className="text-blue-500 text-xl mx-auto mb-2" />
            <div className="text-xl font-bold">5⭐</div>
            <p className="text-sm text-gray-400">Clientes satisfeitos</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center z-10 mt-12 md:mt-0">
        <img
          src={mockup}
          alt="Mockup de aplicação digital desenvolvida pela Beyond"
          className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[280px] drop-shadow-2xl animate-fade-in"
        />
      </div>

      <div className="absolute bottom-6 left-20 flex items-center gap-2 group cursor-pointer">
        <FaArrowDown className="text-blue-500 text-base animate-bounce" />
        <button
          onClick={() => scrollToSection("#sobre")}
          className="text-sm text-blue-400 group-hover:text-blue-300 transition font-medium"
        >
          Ver mais
        </button>
      </div>
    </section>
  );
};

export default Hero;
