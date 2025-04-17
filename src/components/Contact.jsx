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
        () => {
          setStatus("sucesso");
          formRef.current.reset();
        },
        (error) => {
          console.error("Erro:", error);
          setStatus("erro");
        }
      );
  };

  return (
    <section
      id="contato"
      className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto text-center mb-12 px-4 sm:px-0">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Entre em Contato
        </h2>
        <p className="text-gray-400 text-lg">
          Tem um projeto em mente ou apenas quer bater um papo? Nossa equipe está pronta para ajudar você a ir além do código.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-0">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl animate-fade-in">
          <h3 className="text-2xl font-semibold text-center mb-6">
            Envie uma Mensagem
          </h3>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="nome" className="sr-only">
                Seu Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Seu Nome"
                className="w-full p-4 bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="sr-only">
                Seu E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Seu E-mail"
                className="w-full p-4 bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="mensagem" className="sr-only">
                Sua Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Sua Mensagem"
                className="w-full p-4 bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows="5"
                required
              />
            </div>

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

            <div className="h-6">
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
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 animate-fade-in">
          {[
            {
              icon: <FaInstagram className="text-pink-500 text-3xl" />,
              title: "Instagram",
              desc: "Nos siga para ver nossos bastidores, projetos e novidades.",
              href: "https://www.instagram.com/beyond_system",
              hoverClass: "hover:shadow-pink-600/30",
            },
            {
              icon: <FaWhatsapp className="text-green-500 text-3xl" />,
              title: "WhatsApp",
              desc: "Converse com nossa equipe diretamente pelo WhatsApp.",
              href: "https://wa.me/5513988342378",
              hoverClass: "hover:shadow-green-500/30",
            },
            {
              icon: <FaEnvelope className="text-blue-400 text-3xl" />,
              title: "E-mail",
              desc: "Envie sua dúvida ou proposta por e-mail a qualquer momento.",
              href: "mailto:beyond.business.tech@gmail.com",
              hoverClass: "hover:shadow-blue-400/30",
            },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-6 bg-gray-800 rounded-2xl shadow-xl transition-shadow duration-300 ${item.hoverClass}`}
            >
              {item.icon}
              <div>
                <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
