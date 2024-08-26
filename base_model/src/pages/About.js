import React from "react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Bem-vindo à [Nome da Imobiliária]</h1>
          <p className="text-lg text-gray-600">
            Na [Nome da Imobiliária], transformamos sonhos em realidade. Com anos de experiência no mercado imobiliário,
            nossa missão é encontrar o lar perfeito para cada um de nossos clientes. Desde a nossa fundação, temos trabalhado
            incansavelmente para oferecer um serviço excepcional, guiado pela integridade, profissionalismo e uma profunda
            compreensão das necessidades de nossos clientes.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa História</h2>
          <p className="text-lg text-gray-600">
            Fundada em [Ano de Fundação], a [Nome da Imobiliária] começou com uma simples ideia: proporcionar uma experiência
            de compra e venda de imóveis mais personalizada e eficiente. Ao longo dos anos, crescemos e evoluímos, sempre
            mantendo o foco no que realmente importa - nossos clientes. Com uma equipe dedicada e apaixonada pelo que faz,
            temos orgulho de ter ajudado milhares de pessoas a encontrar seu lugar no mundo.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa Missão e Visão</h2>
          <div className="flex flex-col md:flex-row md:space-x-12">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Missão</h3>
              <p className="text-lg text-gray-600">
                Oferecer soluções imobiliárias inovadoras e de alta qualidade, criando valor para nossos clientes e superando
                suas expectativas.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Visão</h3>
              <p className="text-lg text-gray-600">
                Ser a imobiliária de referência, reconhecida pela excelência no atendimento e pela capacidade de transformar
                o mercado imobiliário.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Equipe</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="[URL_da_Foto]" alt="[Nome do Profissional]" className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">[Nome do Profissional]</h3>
                <p className="text-gray-600">[Cargo]</p>
              </div>
            </div>
            {/* Adicione mais membros da equipe conforme necessário */}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossos Valores</h2>
          <ul className="list-disc list-inside text-lg text-gray-600">
            <li><strong>Integridade:</strong> Mantemos os mais altos padrões de honestidade e ética em tudo o que fazemos.</li>
            <li><strong>Compromisso:</strong> Estamos dedicados a superar as expectativas dos nossos clientes.</li>
            <li><strong>Excelência:</strong> Buscamos a excelência em cada aspecto do nosso trabalho.</li>
            <li><strong>Inovação:</strong> Estamos sempre em busca de novas e melhores maneiras de servir nossos clientes.</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Depoimentos</h2>
          <div className="space-y-6">
            <blockquote className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-600">
                "O atendimento da [Nome da Imobiliária] foi excepcional! Eles entenderam exatamente o que eu procurava e
                encontraram o imóvel perfeito para minha família. Recomendo fortemente!"
              </p>
              <footer className="mt-4 text-gray-800">- [Nome do Cliente]</footer>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-600">
                "A equipe é extremamente profissional e atenciosa. A compra do meu novo apartamento foi tranquila e sem
                estresse, graças ao excelente trabalho da [Nome da Imobiliária]."
              </p>
              <footer className="mt-4 text-gray-800">- [Nome do Cliente]</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Entre em Contato</h2>
          <p className="text-lg text-gray-600 mb-4">
            Tem alguma dúvida ou precisa de mais informações? Entre em contato conosco:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 mb-6">
            <li><strong>Telefone:</strong> [Número de Telefone]</li>
            <li><strong>Email:</strong> [Email de Contato]</li>
            <li><strong>Endereço:</strong> [Endereço Físico]</li>
          </ul>
          <form className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Formulário de Contato</h3>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Nome</label>
              <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">Mensagem</label>
              <textarea id="message" rows="4" className="w-full p-2 border border-gray-300 rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Enviar</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default About;
