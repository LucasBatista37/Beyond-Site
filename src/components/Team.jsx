import rafael from "../assets/rafael_almeida.jpeg";
import lucas from "../assets/lucas_batista.jpg";

const Team = () => {
  const membros = [
    {
      nome: "Rafael Almeida",
      cargo: "Fundador",
      descricao:
        "Rafael é o visionário por trás da Beyond, com vasta experiência em gestão e desenvolvimento de soluções digitais.",
      imagem: rafael,
    },
    {
      nome: "Lucas Batista",
      cargo: "Co-Fundador",
      descricao:
        "Lucas é o co-fundador da Beyond, apaixonado por inovação e desenvolvimento tecnológico, ajudando a transformar ideias em realidade.",
      imagem: lucas,
    },
  ];

  return (
    <section
      id="equipe"
      className="bg-gradient-to-bl from-gray-800 via-gray-900 to-black text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossa Equipe</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A Beyond é formada por profissionais apaixonados por tecnologia e
          inovação. Conheça os responsáveis por nossa jornada.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {membros.map((membro, index) => (
          <div
            key={index}
            className="group bg-gray-800 p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
