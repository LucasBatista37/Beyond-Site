import { motion } from "framer-motion";
import rafael from "../assets/rafael_almeida.jpeg";
import lucas from "../assets/lucas_batista.jpg";
import { Linkedin, Mail, Instagram, Github } from "lucide-react";

const membros = [
  {
    nome: "Rafael Almeida",
    cargo: "Fundador",
    descricao:
      "Rafael é o visionário por trás da Beyond, com vasta experiência em gestão e desenvolvimento de soluções digitais.",
    imagem: rafael,
    instagram: "https://www.instagram.com/rafokes",
    github: "https://github.com/rafokez",
    email: "raphael.k.business@gmail.com",
  },
  {
    nome: "Lucas Batista",
    cargo: "Co-Fundador",
    descricao:
      "Lucas é o co-fundador da Beyond, apaixonado por inovação e desenvolvimento tecnológico, ajudando a transformar ideias em realidade.",
    imagem: lucas,
    linkedin: "https://www.linkedin.com/in/lucas-batista-004212263/",
    instagram: "https://www.instagram.com/lucas_batista38",
    github: "https://github.com/LucasBatista37",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const Team = () => {
  return (
    <section
      id="equipe"
      className="bg-gradient-to-b from-gray-900 to-gray-900 text-white py-24 px-8"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossa Equipe</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A Beyond é formada por profissionais apaixonados por tecnologia e
          inovação. Conheça os responsáveis por nossa jornada.
        </p>
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {membros.map((membro, index) => (
          <motion.div
            key={index}
            className="group bg-gray-800 p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            variants={fadeInUp}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            <div className="flex justify-center mb-6 relative">
              <img
                src={membro.imagem}
                alt={membro.nome}
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-600 shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-1">
              {membro.nome}
            </h3>
            <p className="text-blue-500 font-medium text-sm text-center mb-4 tracking-wide uppercase">
              {membro.cargo}
            </p>
            <p className="text-gray-300 text-sm text-center leading-relaxed">
              {membro.descricao}
            </p>

            {/* Ícones sociais dinâmicos */}
            <div className="flex justify-center gap-4 mt-4">
              {membro.linkedin && (
                <a
                  href={membro.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {membro.instagram && (
                <a
                  href={membro.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition-colors"
                >
                  <Instagram size={20} />
                </a>
              )}
              {membro.github && (
                <a
                  href={membro.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
              )}
              {membro.email && (
                <a
                  href={`mailto:${membro.email}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Mail size={20} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Team;
