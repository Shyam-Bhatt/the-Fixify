import React from "react";

export default function CTASection() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="cta-gradient py-16 text-white bg-orange-500">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                <p className="text-white text-opacity-90 max-w-2xl mx-auto mb-8">
                    Book a service, shop for products, or request a quote today. Our team
                    of professionals is ready to help you with all your home service
                    needs.
                </p>

                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition"
                    >
                        Book a Service
                    </button>
                    <button
                        onClick={() => scrollToSection("products")}
                        className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 text-white px-8 py-3 rounded-full font-medium transition"
                    >
                        Shop Products
                    </button>
                </div>
            </div>
        </section>
    );
}
