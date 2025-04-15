const Contact = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6" id="contato">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Entre em Contato
        </h2>
        <p className="text-gray-400 text-lg">
          Se você tem alguma dúvida, sugestão ou quer saber mais sobre nossos
          serviços, ficaremos felizes em conversar com você.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Formulário de Contato */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-center mb-6">
            Envie uma Mensagem
          </h3>
          <form action="#" method="POST">
            <div className="space-y-4">
              <input
                type="text"
                name="nome"
                placeholder="Seu Nome"
                className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Seu E-mail"
                className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <textarea
                name="mensagem"
                placeholder="Sua Mensagem"
                className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows="4"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-full shadow-lg transition-colors duration-300"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>

        {/* Informações de Contato */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-center mb-6">
            Nos Encontre
          </h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-blue-600">📍</span>
              <p className="ml-2">Endereço: Rua Exemplo, 123 - São Paulo, SP</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-600">📞</span>
              <p className="ml-2">Telefone: (11) 1234-5678</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-600">🌐</span>
              <p className="ml-2">Email: contato@beyond.com.br</p>
            </div>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="text-blue-600 hover:text-blue-400">
                Facebook
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-400">
                Instagram
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-400">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
