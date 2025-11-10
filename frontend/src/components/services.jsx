import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Services() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:8020/api/services/view")
            .then((res) => {
                if (res.data.status === 1) setServices(res.data.services);
                else setError("No services found");
            })
            .catch(() => setError("Failed to fetch services"))
            .finally(() => setLoading(false));
    }, []);

    return (
        <section id="services" className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Our <span className="text-orange-500">Services</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    From quick repairs to complete renovations, we've got all your home service needs covered.
                </p>

                {loading ? (
                    <p className="text-gray-500">Loading...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                        {services.map((service, i) => (
                            <div key={i} className="bg-white shadow-md rounded-xl p-6 text-left hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 font-extrabold">
                                    <i className={`${service.icon}`}></i> {service.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{service.summary}</p>
                                <ul className="text-gray-500 space-y-2 mb-4">
                                    {service.features.map((f, index) => (
                                        <li key={index}>
                                            <i className="fas fa-check text-orange-500 mr-2"></i>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="#contact"
                                    className="text-[#0056b3] font-medium hover:underline flex items-center"
                                >
                                    Book Service <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
