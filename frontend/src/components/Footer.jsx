import React, { useEffect } from "react";

export default function Footer() {
    // Enable smooth scroll when any footer link is clicked
    useEffect(() => {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute("href"));
                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            });
        });
    }, []);

    return (
        <footer className="bg-black text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Brand Info */}
                    <div>
                        <div className="text-3xl font-bold mb-6">
                            <span className="text-orange-500">The</span>Fixify
                        </div>
                        <p className="text-gray-400 mb-6">
                            Your trusted partner for all home services, repairs, and products. We bring convenience and reliability to your doorstep.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-all duration-300">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-all duration-300">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-all duration-300">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-all duration-300">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-extrabold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#home" className="text-gray-400 hover:text-orange-500 transition-all duration-300">Home</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-orange-500 transition-all duration-300">Services</a></li>
                            <li><a href="#products" className="text-gray-400 hover:text-orange-500 transition-all duration-300">Products</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition-all duration-300">About Us</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-orange-500 transition-all duration-300">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-extrabold mb-6">Services</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-all duration-300">Appliance Repair</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-all duration-300">Home Services</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-all duration-300">CCTV Installation</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-all duration-300">Construction</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-all duration-300">Interior Design</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-extrabold mb-6">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <i className="fas fa-map-marker-alt mr-3 mt-1 text-orange-500"></i>
                                <span className="text-gray-400">123 Service Street, Repair City, RC 10001</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-phone-alt text-orange-500 mr-3 mt-1"></i>
                                <span className="text-gray-400">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-envelope mr-3 mt-1 text-orange-500"></i>
                                <span className="text-gray-400">info@thefixify.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 mb-4 md:mb-0">
                            © 2025 The Fixify. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-all duration-300">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-all duration-300">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-all duration-300">FAQ</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
