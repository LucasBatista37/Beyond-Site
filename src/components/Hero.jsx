import mockup from "../assets/mockup_app3.png";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaBriefcase,
  FaTags,
  FaSmile,
  FaArrowDown,
  FaFolderOpen,
  FaRocket,
} from "react-icons/fa";

const scrollToSection = (id) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const mockupAnimation = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
};

const container = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <section
      id="inicio"
      role="region"
      aria-label="Seção principal do site - Hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 px-6 md:px-20 py-12 pt-[80px] md:pt-12 bg-gradient-to-b from-black via-gray-900 to-gray-800 overflow-hidden"
    >
      <motion.div
        className="z-10 w-full md:w-1/2 max-w-2xl text-white"
        initial="initial"
        animate="animate"
        variants={container}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Transformamos ideias em{" "}
          <span className="text-blue-600">soluções digitais</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-2xl text-gray-300 mb-8"
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Na Beyond, performance, design e tecnologia se unem para tirar sua
          ideia do papel e levar sua marca além do código.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row flex-wrap gap-4"
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <a
            href="#contato"
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
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 text-white"
          variants={container}
        >
          {[
            { icon: FaBriefcase, value: "+20", label: "Projetos entregues" },
            { icon: FaTags, value: "+10", label: "Segmentos atendidos" },
            { icon: FaRocket, value: "100%", label: "Comprometimento" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-md text-center"
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <item.icon className="text-blue-500 text-xl mx-auto mb-2" />
              <div className="text-xl font-bold">{item.value}</div>
              <p className="text-sm text-gray-400">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex justify-center z-10 mt-12 md:mt-0"
        variants={mockupAnimation}
        initial="initial"
        animate="animate"
        transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
      >
        <img
          src={mockup}
          alt="Mockup de aplicação digital desenvolvida pela Beyond"
          className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[280px] drop-shadow-2xl"
        />
      </motion.div>

      <motion.div
        className="hidden md:flex absolute bottom-6 left-20 items-center gap-2 group cursor-pointer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
      >
        <FaArrowDown className="text-blue-500 text-base animate-bounce" />
        <button
          onClick={() => scrollToSection("#sobre")}
          className="text-sm text-blue-400 group-hover:text-blue-300 transition font-medium"
        >
          Saiba mais
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
