import { motion } from "framer-motion";
import { Monitor, Smartphone, PenTool, Target } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const services = [
  {
    title: "Desenvolvimento Web",
    description:
      "Sites modernos, responsivos e otimizados para performance e SEO.",
    icon: <Monitor className="text-blue-500" size={36} />,
  },
  {
    title: "Aplicativos Mobile",
    description:
      "Apps intuitivos e rápidos para Android e iOS, feitos sob medida.",
    icon: <Smartphone className="text-green-500" size={36} />,
  },
  {
    title: "UI/UX Design",
    description:
      "Design centrado no usuário, com foco em usabilidade e identidade visual.",
    icon: <PenTool className="text-pink-500" size={36} />,
  },
  {
    title: "Consultoria Estratégica",
    description:
      "Ajudamos você a transformar ideias em soluções digitais de alto impacto.",
    icon: <Target className="text-yellow-500" size={36} />,
  },
];

const Services = () => {
  return (
    <section
      id="servicos"
      className="bg-gradient-to-b from-gray-900 to-gray-900 text-white py-24 px-8"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Serviços</h2>
        <p className="text-gray-400 text-lg">
          Do planejamento à execução, oferecemos soluções digitais completas que
          conectam inovação, design e tecnologia.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((servico, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition duration-300"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            <div className="flex justify-center mb-4">{servico.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              {servico.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {servico.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
