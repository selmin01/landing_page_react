import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-2xl">Real Estate</div>
            <ul className="flex space-x-4">
                <li className="text-white">Home</li>
                <li className="text-white">About</li>
                <li className="text-white">Contact</li>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;