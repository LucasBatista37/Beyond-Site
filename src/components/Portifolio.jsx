import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ciclou from "../assets/banner-ciclou.png";
import condoview from "../assets/condoview-banner.png";
import petlitoral from "../assets/petlitoral.png";
import sabrina from "../assets/sabrina.png";
import express from "../assets/starexpress.jpg";
import paises from "../assets/paises-latinos.webp";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
};

const Portfolio = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  const categorias = ["Todos", "Web", "Mobile"];

  const projetos = [
    {
      titulo: "CondoView ",
      descricao:
        "Condoview é um app que busca facilitar a administração do condomínio oferecendo benefícios ao administrador e morador.",
      imagem: condoview,
      link: "https://github.com/LucasBatista37/Condoview-App?tab=readme-ov-file#condoview---app-e-sistema-de-condom%C3%ADnio-tcc",
      categoria: "Mobile",
    },
    {
      titulo: "Ciclou - Coleta de Óleo",
      descricao:
        "Um aplicativo que busca conectar coletores e solicitantes que desejam descartar seu óleo de cozinha usado.",
      imagem: ciclou,
      link: "https://play.google.com/store/apps/details?id=com.beyondsystem.ciclou_novo_app&hl=pt_BR",
      categoria: "Mobile",
    },
    {
      titulo: "Pet Litoral",
      descricao:
        "Site feito para agendamento de banho e tosa feito para o pet shop Pet Litoral.",
      imagem: petlitoral,
      link: "https://petlitoral.shop",
      categoria: "Web",
    },
    {
      titulo: "Rota Express",
      descricao:
        "O Rota Express é uma site moderno, dinâmica e intuitivo, especializado em encontrar rapidamente as viagens aéreas mais baratas do mercado.",
      imagem: express,
      link: "https://star-rotaexpress.com",
      categoria: "Web",
    },
    {
      titulo: "Sabrina Camara",
      descricao:
        "Site desenvolvido para divulgar com sofisticação e eficiência o trabalho da artista Sabrina Camara. Especializada em eternizar momentos únicos através de livros artesanais de casamento.",
      imagem: sabrina,
    link: "https://www.sabrinacamara.art.br ",
      categoria: "Web",
    },
    {
      titulo: "Países Latinos",
      descricao:
        "Um site feito para quem quer conhecer um pouco mais de todos os países da américa latina!",
      imagem: paises,
      link: "https://paises-latinos.netlify.app/src/",
      categoria: "Web",
    },
  ];

  const projetosFiltrados =
    categoriaSelecionada === "Todos"
      ? projetos
      : projetos.filter((p) => p.categoria === categoriaSelecionada);

  return (
    <section
      id="portfolio"
      className="bg-gradient-to-b from-gray-900 to-gray-900 text-white py-24 px-8"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Nosso Portfólio</h2>
        <p className="text-gray-400 text-lg">
          Conheça alguns dos projetos que tivemos orgulho de desenvolver.
        </p>

        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaSelecionada(cat)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                categoriaSelecionada === cat
                  ? "bg-blue-500 text-white"
                  : "border-gray-600 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
      >
        <AnimatePresence>
          {projetosFiltrados.map((projeto, index) => (
            <motion.div
              key={projeto.titulo}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              <img
                src={projeto.imagem}
                alt={projeto.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {projeto.titulo}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {projeto.descricao}
                </p>
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300"
                >
                  Ver Projeto
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Portfolio;
