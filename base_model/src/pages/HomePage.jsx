import React from "react";

const HomePage = () => (
    <div className="container mx-auto mt-12 p-4">
      <h2 className="text-4xl font-bold text-center mb-8">Nossas Ofertas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/path/to/property1.jpg" alt="Imóvel 1" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Imóvel 1</h3>
                <p className="text-gray-700 mt-2">Descrição breve do imóvel 1.</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Ver Detalhes
                </button>
              </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/path/to/property2.jpg" alt="Imóvel 2" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Imóvel 2</h3>
                <p className="text-gray-700 mt-2">Descrição breve do imóvel 2.</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Ver Detalhes
                </button>
              </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/path/to/property3.jpg" alt="Imóvel 3" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Imóvel 3</h3>
                <p className="text-gray-700 mt-2">Descrição breve do imóvel 3.</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Ver Detalhes
                </button>
              </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/path/to/property1.jpg" alt="Imóvel 4" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Imóvel 4</h3>
                <p className="text-gray-700 mt-2">Descrição breve do imóvel 4.</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Ver Detalhes
                </button>
              </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/path/to/property2.jpg" alt="Imóvel 5" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Imóvel 5</h3>
                <p className="text-gray-700 mt-2">Descrição breve do imóvel 5.</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Ver Detalhes
                </button>
              </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/path/to/property3.jpg" alt="Imóvel 6" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Imóvel 6</h3>
                <p className="text-gray-700 mt-2">Descrição breve do imóvel 6.</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Ver Detalhes
                </button>
              </div>
          </div>
      </div>
    </div>
);

export default HomePage;
