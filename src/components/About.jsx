import { Lightbulb, Eye, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const valores = [
  {
    titulo: "Inovação",
    descricao:
      "Estamos sempre à frente com as melhores tecnologias para impulsionar ideias criativas.",
    icon: <Lightbulb size={32} aria-hidden="true" />,
  },
  {
    titulo: "Design Estratégico",
    descricao:
      "Foco em usabilidade e estética para experiências digitais marcantes.",
    icon: <Eye size={32} aria-hidden="true" />,
  },
  {
    titulo: "Resultados Reais",
    descricao:
      "Cada projeto é pensado para gerar performance e impacto nos negócios.",
    icon: <TrendingUp size={32} aria-hidden="true" />,
  },
];

const ValorCard = ({ icon, titulo, descricao }) => (
  <motion.div
    className="bg-gray-700 p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="mx-auto mb-4 text-blue-400">{icon}</div>
    <h4 className="text-blue-400 font-semibold text-lg mb-2">{titulo}</h4>
    <p className="text-gray-300 text-sm">{descricao}</p>
  </motion.div>
);

const About = () => (
  <section
    id="sobre"
    className="bg-gradient-to-bl from-gray-800 via-gray-900 to-black text-white py-16 px-4 sm:px-8 lg:px-16"
    aria-labelledby="sobre-title"
  >
    <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-12">
      <motion.h2
        id="sobre-title"
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Por que escolher a{" "}
        <span className="text-blue-500">Beyond?</span>
      </motion.h2>

      <motion.div
        className="space-y-4 max-w-prose"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2 }
          }),
        }}
        custom={1}
      >
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          Aqui na Beyond, não nos limitamos a criar sites e apps.
          Desenvolvemos{" "}
          <span className="text-blue-400 font-semibold">
            soluções digitais inovadoras
          </span>{" "}
          que geram valor real e escalável para nossos clientes.
        </p>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          Combinamos tecnologia, design e estratégia para entregar{" "}
          <span className="text-blue-400 font-semibold">
            experiências únicas
          </span>{" "}
          e de alto impacto. Cada projeto é construído com atenção aos mínimos
          detalhes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
        {valores.map((item, i) => (
          <ValorCard
            key={i}
            icon={item.icon}
            titulo={item.titulo}
            descricao={item.descricao}
          />
        ))}
      </div>

      <motion.a
        href="#portfolio"
        className="mt-4 inline-block text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base font-medium"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        Veja alguns dos nossos projetos →
      </motion.a>
    </div>
  </section>
);

export default About;
