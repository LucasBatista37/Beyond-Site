import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("enviando");

    emailjs
      .sendForm(
        "service_pb27koh",
        "template_hkm90jx", 
        formRef.current,
        "6-T-Tod7BbpuzvopL" 
      )
      .then(
        (result) => {
          setStatus("sucesso");
          formRef.current.reset();
        },
        (error) => {
          setStatus("erro");
          console.error("Erro:", error);
        }
      );
  };

  return (
    <section
      className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-24 px-6"
      id="contato"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Entre em Contato
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Tem um projeto em mente ou apenas quer bater um papo? Nossa equipe
          está pronta para ajudar você a ir além do código.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Envie uma Mensagem
          </h3>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              name="nome"
              placeholder="Seu Nome"
              className="w-full p-4 bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Seu E-mail"
              className="w-full p-4 bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400"
              required
            />
            <textarea
              name="mensagem"
              placeholder="Sua Mensagem"
              className="w-full p-4 bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400"
              rows="5"
              required
            />

            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString("pt-BR")}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold py-3 rounded-full shadow-lg"
            >
              Enviar Mensagem
            </button>

            {status === "enviando" && (
              <p className="text-sm text-blue-400 mt-2">Enviando...</p>
            )}
            {status === "sucesso" && (
              <p className="text-sm text-green-400 mt-2">
                Mensagem enviada com sucesso!
              </p>
            )}
            {status === "erro" && (
              <p className="text-sm text-red-400 mt-2">
                Ocorreu um erro. Tente novamente.
              </p>
            )}
          </form>
        </div>

        <div className="grid gap-6">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-pink-600/30 transition-shadow duration-300">
            <a
              href="https:/www.instagram.com/beyond_system"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4"
            >
              <FaInstagram className="text-pink-500 text-4xl" />
              <div>
                <h4 className="text-xl font-semibold">Instagram</h4>
                <p className="text-gray-400 text-sm">
                  Nos siga para ver nossos bastidores, projetos e novidades.
                </p>
              </div>
            </a>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-green-500/30 transition-shadow duration-300">
            <a
              href="https://wa.me/5513988342378"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4"
            >
              <FaWhatsapp className="text-green-500 text-4xl" />
              <div>
                <h4 className="text-xl font-semibold">WhatsApp</h4>
                <p className="text-gray-400 text-sm">
                  Converse com nossa equipe diretamente pelo WhatsApp.
                </p>
              </div>
            </a>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-blue-400/30 transition-shadow duration-300">
            <a
              href="mailto:beyond.business.tech@gmail.com"
              className="flex items-center gap-4"
            >
              <FaEnvelope className="text-blue-400 text-4xl" />
              <div>
                <h4 className="text-xl font-semibold">E-mail</h4>
                <p className="text-gray-400 text-sm">
                  Envie sua dúvida ou proposta por e-mail a qualquer momento.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
