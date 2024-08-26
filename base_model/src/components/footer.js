import React from 'react';

const Footer = () => {
    // return (
    //     <footer className="bg-gray-800 text-white p-4 text-center">
    //         <p>&copy; 2024 Real Estate. Todos os direitos reservados.</p>
    //     </footer>
    // );

    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Coluna de Contato */}
            <div>
                <h2 className="text-lg font-bold mb-4">Contato</h2>
                <p><strong>Telefone:</strong> (XX) XXXX-XXXX</p>
                <p><strong>Email:</strong> <a href="/" className="text-green-400">comercial@Empresa.com.br</a></p>
                <p><strong>WhatsApp:</strong> <a href="/" className="text-green-400">(48) 4042-0700</a></p>
            </div>

            {/* Coluna de Navegação */}
            <div>
                <h2 className="text-lg font-bold mb-4">Navegação</h2>
                <ul className="space-y-2">
                <li><a href="/" className="hover:text-green-400">Home</a></li>
                <li><a href="/about" className="hover:text-green-400">Sobre Nós</a></li>
                <li><a href="/solutions" className="hover:text-green-400">Soluções</a></li>
                <li><a href="/contact" className="hover:text-green-400">Contato</a></li>
                </ul>
            </div>

            {/* Coluna de Redes Sociais */}
            <div>
                <h2 className="text-lg font-bold mb-4">Siga-nos</h2>
                <div className="flex space-x-4">
                {/* <a href="/" className="hover:text-green-400"></a>
                <a href="/" className="hover:text-green-400"></a>
                <a href="/" className="hover:text-green-400"></a>
                <a href="/" className="hover:text-green-400"></a> */}
                </div>
            </div>
            </div>

            {/* Barra Inferior */}
            <div className="mt-8 border-t border-green-700 pt-4">
            <p className="text-center text-sm">&copy; 2022 Empresa. Todos os direitos reservados.</p>
            <div className="text-center text-sm space-x-4">
                <a href="/terms" className="hover:text-green-400">Termos de Uso</a>
                <span>&bull;</span>
                <a href="/privacy" className="hover:text-green-400">Política de Privacidade</a>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
