const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-6">
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>{" "}
      <div className="z-10 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
          Levamos sua ideia <br /> além do código.
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          A Beyond cria soluções digitais sob medida com performance, design e
          tecnologia.
        </p>
        <a
          href="#contato"
          className="inline-block bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-medium px-6 py-3 rounded-full shadow-lg"
        >
          Fale com a gente
        </a>
      </div>
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517336714731-1c5b8d9c1b88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjc5OXwwfDF8c2VhcmNofDkxfGZ1bGwtb3V0ZG9vciUyMGF1dG9tYXRlY3N8ZW58MHx8fDE2Nzc2NzU2NDQ&ixlib=rb-1.2.1&q=80&w=1080')", // Nova imagem de teste
        }}
      />
    </section>
  );
};

export default Hero;
