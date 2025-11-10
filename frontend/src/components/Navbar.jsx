// import React from 'react'


// export default function Navbar() {
//     return (
//         <header className="bg-white shadow">
//             <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold">MS</div>
//                     <span className="text-xl font-bold">MyStore</span>
//                 </div>


//                 <nav className="space-x-4">
//                     <a href="#" className="hover:underline">Home</a>
//                     <a href="#" className="hover:underline">Shop</a>
//                     <a href="#" className="hover:underline">Contact</a>
//                 </nav>
//             </div>
//         </header>
//     )
// }
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="bg-white shadow-sm fixed w-full z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <div className="text-3xl font-bold text-orange-500">
                        <span className="text-gray-800">The</span>Fixify
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8">
                    <a href="#home" className="font-medium text-gray-700 hover:text-orange-500 transition">Home</a>
                    <a href="#services" className="font-medium text-gray-700 hover:text-orange-500 transition">Services</a>
                    <a href="#products" className="font-medium text-gray-700 hover:text-orange-500 transition">Products</a>
                    <a href="#about" className="font-medium text-gray-700 hover:text-orange-500 transition">About Us</a>
                    <a href="#contact" className="font-medium text-gray-700 hover:text-orange-500 transition">Contact</a>
                    <a href="/login" className="font-medium text-gray-700 hover:text-orange-500 transition">Login</a>
                </nav>

                {/* Right section */}
                <div className="flex items-center space-x-4">
                    <a
                        href="#contact"
                        className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium transition"
                    >
                        Book Now
                    </a>

                    {/* Mobile menu button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-gray-700 focus:outline-none"
                    >
                        {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-lg absolute w-full">
                    <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
                        <a href="#home" className="font-medium text-gray-700 hover:text-orange-500 py-2 transition">Home</a>
                        <a href="#services" className="font-medium text-gray-700 hover:text-orange-500 py-2 transition">Services</a>
                        <a href="#products" className="font-medium text-gray-700 hover:text-orange-500 py-2 transition">Products</a>
                        <a href="#about" className="font-medium text-gray-700 hover:text-orange-500 py-2 transition">About Us</a>
                        <a href="#contact" className="font-medium text-gray-700 hover:text-orange-500 py-2 transition">Contact</a>
                        <a
                            href="#contact"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium text-center transition"
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
