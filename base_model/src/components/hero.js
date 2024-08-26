import React from "react";

const Hero = () => {
    return (
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
            <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
                <div className="text-center text-white">
                    <h1 className="text-5xl font-bold">Encontre o Imóvel dos Seus Sonhos</h1>
                    <p className="mt-4 text-lg">As melhores ofertas do mercado imobiliário, aqui.</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;