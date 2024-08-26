import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-2xl">Real Estate</div>
            <ul className="flex space-x-4">
                <li><Link to="/" className="text-white">Home</Link></li>
                <li><Link to="/about" className="text-white">About</Link></li>
                <li><Link to="/contact" className="text-white">Contact</Link></li>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;