const About = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6" id="sobre">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre a Beyond
          </h2>
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            Somos uma equipe apaixonada por transformar ideias em experiências
            digitais de alto impacto. Combinamos tecnologia, design e estratégia
            para criar soluções personalizadas que realmente fazem a diferença.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Acreditamos que um bom produto nasce da colaboração, empatia e
            atenção aos detalhes. Cada projeto é único, e é por isso que
            oferecemos um atendimento próximo e sob medida, do planejamento ao
            lançamento.
          </p>
        </div>

        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1581090700227-1e8a1f259201?auto=format&fit=crop&w=800&q=80"
            alt="Equipe Beyond trabalhando"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
