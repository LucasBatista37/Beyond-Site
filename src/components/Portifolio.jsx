import { useState } from "react";
import ciclou from "../assets/banner-ciclou.png";
import condoview from "../assets/condoview-banner.png";
import petlitoral from "../assets/petlitoral.png";

const Portfolio = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  const categorias = ["Todos", "Web", "Mobile"];

  const projetos = [
    {
      titulo: "CondoView",
      descricao:
        "Condoview é um app que busca facilitar a administração do condomínio oferecendo benefícios ao administrador e morador.",
      imagem: condoview,
      link: "https://exemplo.com/plataforma-educacional",
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
  ];

  const projetosFiltrados =
    categoriaSelecionada === "Todos"
      ? projetos
      : projetos.filter((p) => p.categoria === categoriaSelecionada);

  return (
    <section
      className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-20 px-6"
      id="portfolio"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projetosFiltrados.map((projeto, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-1 hover:shadow-2xl transition duration-300"
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
              <p className="text-gray-400 text-sm mb-4">{projeto.descricao}</p>
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300"
              >
                Ver Projeto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;