import { useState } from "react";

const Portfolio = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  const categorias = ["Todos", "Web", "Mobile"];

  const projetos = [
    {
      titulo: "Travel",
      descricao:
        "Site de busca de voos baratos",
      imagem:
        "https://images.unsplash.com/photo-1581091870622-6f6e1b0b0e4e?auto=format&fit=crop&w=800&q=80",
      link: "https://exemplo.com/plataforma-educacional",
      categoria: "Web",
    },
    {
      titulo: "Ciclou - Coleta de Óleo",
      descricao:
        "Aplicativo mobile que visa juntar a pessoa que quer com a que precisa da coleta.",
      imagem:
        "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80",
      link: "https://exemplo.com/app-delivery",
      categoria: "Mobile",
    },
    {
      titulo: "Pet Litoral",
      descricao: "Site feito para agendamendo de banho e tosa.",
      imagem:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      link: "https://exemplo.com/site-institucional",
      categoria: "Web",
    },
  ];

  const projetosFiltrados =
    categoriaSelecionada === "Todos"
      ? projetos
      : projetos.filter((p) => p.categoria === categoriaSelecionada);

  return (
    <section className="bg-black text-white py-20 px-6" id="portfolio">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Nosso Portfólio</h2>
        <p className="text-gray-400 text-lg">
          Conheça alguns dos projetos que tivemos orgulho de desenvolver.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaSelecionada(cat)}
              className={`px-4 py-2 rounded-full border ${
                categoriaSelecionada === cat
                  ? "bg-blue-600 text-white"
                  : "border-gray-600 text-gray-300 hover:bg-gray-800"
              } transition-colors`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projetosFiltrados.map((projeto, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={projeto.imagem}
              alt={projeto.titulo}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  {projeto.titulo}
                </h3>
                <p className="text-gray-300 text-sm">{projeto.descricao}</p>
              </div>
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 transition-colors text-white text-sm font-medium px-4 py-2 rounded-full"
              >
                Ver projeto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
