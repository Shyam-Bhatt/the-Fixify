import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HeroSection() {
    const [features, setFeatures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:8020/api/features/view")
            .then((res) => {
                if (res.data.status === 1 && res.data.features) {
                    setFeatures(res.data.features);
                } else {
                    setError("No features found.");
                }
            })
            .catch((err) => {
                console.error("Error fetching features:", err);
                setError("Failed to fetch features.");
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section
                id="home"
                className="hero-gradient pt-28 pb-20 md:pt-40 md:pb-28 bg-[#0056b3]"
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        {/* Left Side */}
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                                Your One-Stop Solution for{" "}
                                <span className="text-secondary">Home Services</span> &{" "}
                                <span className="text-secondary">Repairs</span>
                            </h1>
                            <p className="text-gray-100 text-lg mb-8">
                                From fixing appliances to complete home renovations, The Fixify
                                delivers reliable, 24/7 professional services you can trust.
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <a
                                    href="#services"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const target = document.getElementById("services");
                                        target?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className="bg-secondary hover:bg-opacity-90 text-white px-8 py-3 rounded-full font-medium text-center transition"
                                >
                                    Explore Services
                                </a>

                                <a
                                    href="#contact"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const target = document.getElementById("contact");
                                        target?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-full font-medium text-center transition"
                                >
                                    Book a Service
                                </a>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="md:w-1/2 flex justify-center">
                            <div className="relative">
                                <svg
                                    className="w-full max-w-lg"
                                    viewBox="0 0 500 400"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="50"
                                        y="50"
                                        width="400"
                                        height="300"
                                        rx="20"
                                        fill="#ffffff"
                                    />
                                    <circle cx="250" cy="150" r="50" fill="#ff6b00" />
                                    <rect
                                        x="100"
                                        y="220"
                                        width="300"
                                        height="20"
                                        rx="10"
                                        fill="#0056b3"
                                    />
                                    <rect
                                        x="100"
                                        y="260"
                                        width="200"
                                        height="20"
                                        rx="10"
                                        fill="#0056b3"
                                    />
                                    <rect
                                        x="100"
                                        y="300"
                                        width="250"
                                        height="20"
                                        rx="10"
                                        fill="#0056b3"
                                    />
                                    <path d="M250 120 L270 150 L230 150 Z" fill="#ffffff" />
                                    <path d="M250 180 L270 150 L230 150 Z" fill="#ffffff" />
                                    <rect x="240" y="120" width="20" height="60" fill="#ffffff" />
                                </svg>

                                <div className="absolute top-0 right-0 bg-white p-4 rounded-full shadow-lg transform translate-x-1/4 -translate-y-1/4 text-center">
                                    <div className="text-secondary text-xl font-bold">24/7</div>
                                    <div className="text-xs text-gray-600">Support</div>
                                </div>
                                <div className="absolute bottom-0 left-0 bg-white p-4 rounded-full shadow-lg transform -translate-x-1/4 translate-y-1/4 text-center">
                                    <div className="text-primary text-xl font-bold">100%</div>
                                    <div className="text-xs text-gray-600">Verified Pros</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">
                            Why Choose <span className="text-orange-500">The Fixify</span>?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our commitment to excellence and customer satisfaction sets us apart
                            from the competition.
                        </p>
                    </div>

                    {loading ? (
                        <p className="text-center text-gray-500">Loading features...</p>
                    ) : error ? (
                        <p className="text-center text-red-500">{error}</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-light p-8 rounded-xl shadow-sm text-center hover:shadow-md transition"
                                >
                                    <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <i className={`${feature.icon} text-2xl text-primary text-primary`} style={{ color: '#0056b3' }}></i>
                                    </div>
                                    <h3 className="text-xl font-extrabold mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">{feature.summary}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
