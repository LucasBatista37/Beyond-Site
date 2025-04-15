import { User } from "lucide-react";

const Team = () => {
  const membros = [
    {
      nome: "Rafael Almeida",
      cargo: "Fundador",
      descricao:
        "Rafael é o visionário por trás da Beyond, com vasta experiência em gestão e desenvolvimento de soluções digitais.",
      imagem: "https://via.placeholder.com/150", // Coloque a URL da imagem do Rafael
    },
    {
      nome: "Lucas Batista",
      cargo: "Co-Fundador",
      descricao:
        "Lucas é o co-fundador da Beyond, apaixonado por inovação e desenvolvimento tecnológico, ajudando a transformar ideias em realidade.",
      imagem: "https://via.placeholder.com/150", // Coloque a URL da imagem do Lucas
    },
  ];

  return (
    <section className="bg-gray-800 text-white py-20 px-6" id="equipe">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossa Equipe</h2>
        <p className="text-gray-400 text-lg">
          A Beyond é formada por profissionais apaixonados por tecnologia e
          inovação. Conheça os responsáveis por nossa jornada.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {membros.map((membro, index) => (
          <div
            key={index}
            className="bg-gray-900 p-8 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex justify-center mb-6">
              <img
                src={membro.imagem}
                alt={membro.nome}
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-600"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center">
              {membro.nome}
            </h3>
            <p className="text-lg font-medium text-center text-blue-600">
              {membro.cargo}
            </p>
            <p className="text-gray-300 text-sm text-center mt-4">
              {membro.descricao}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
