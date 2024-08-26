import React, { useState } from "react";

const LeadForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        //Logica para envio dos dados 
        alert(`Nome: ${name}, Email: ${email}`);
    };

    return (
        <div className="bg-white p-8 rounded shadow-lg max-w-md mx-auto mt-12">
            <h2 className="text-2xl font-bold mb-4">Entre em Contato</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Nome</label>
                <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Enviar</button>
            </form>
        </div>
    );

};

export default LeadForm;