import mockup from "../assets/pc.jpg";

const About = () => {
  const valores = [
    {
      titulo: "Inovação",
      descricao:
        "Estamos sempre à frente com as melhores tecnologias para impulsionar ideias criativas.",
    },
    {
      titulo: "Design Estratégico",
      descricao:
        "Foco em usabilidade e estética para experiências digitais marcantes.",
    },
    {
      titulo: "Resultados Reais",
      descricao:
        "Cada projeto é pensado para gerar performance e impacto nos negócios.",
    },
  ];

  return (
    <section
      id="sobre"
      className="bg-gradient-to-bl from-gray-800 via-gray-900 to-black text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-16">
        <div className="md:w-1/2 animate-fade-in">
          <img
            src={mockup}
            alt="Imagem ilustrativa de um projeto de site desenvolvido pela Beyond"
            className="rounded-2xl shadow-2xl"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
            Por que escolher a <span className="text-blue-500">Beyond?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Aqui na Beyond, não nos limitamos a criar sites e apps.
            Desenvolvemos{" "}
            <span className="text-blue-400 font-semibold">
              soluções digitais inovadoras
            </span>{" "}
            que geram valor real e escalável para nossos clientes.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Combinamos tecnologia, design e estratégia para entregar{" "}
            <span className="text-blue-400 font-semibold">
              experiências únicas
            </span>{" "}
            e de alto impacto. Cada projeto é construído com atenção aos mínimos
            detalhes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {valores.map((item, i) => (
              <div
                key={i}
                className="bg-gray-700 p-6 rounded-xl text-center shadow-md hover:shadow-xl transition"
              >
                <h4 className="text-blue-400 font-semibold text-lg mb-2">
                  {item.titulo}
                </h4>
                <p className="text-gray-300 text-sm">{item.descricao}</p>
              </div>
            ))}
          </div>

          <a
            href="#portfolio"
            className="mt-8 inline-block text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
          >
            Veja alguns dos nossos projetos →
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
