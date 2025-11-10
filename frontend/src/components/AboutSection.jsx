import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AboutSection() {
    const [aboutData, setAboutData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:8020/api/about")
            .then((res) => {
                if (res.data.status === 1) {
                    setAboutData(res.data.about);
                } else {
                    setError("Failed to load about data.");
                }
            })
            .catch(() => setError("Server not responding."))
            .finally(() => setLoading(false));
    }, []);

    return (
        <section id="about" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Side - Text */}
                    <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                        <h2 className="text-3xl font-bold mb-6">
                            About <span className="text-orange-500">The Fixify</span>
                        </h2>

                        {loading ? (
                            <p className="text-gray-500">Loading content...</p>
                        ) : error ? (
                            <p className="text-red-500">{error}</p>
                        ) : (
                            aboutData?.paragraphs?.map((para, i) => (
                                <p key={i} className="text-gray-600 mb-6">
                                    {para}
                                </p>
                            ))
                        )}
                    </div>

                    {/* Right Side - Stats */}
                    <div className="md:w-1/2">
                        {loading ? (
                            <div className="text-center text-gray-500">Loading stats...</div>
                        ) : (
                            <div className="grid grid-cols-2 gap-4">
                                {aboutData?.stats?.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition"
                                    >
                                        <div className="text-4xl text-[#0056b3] font-bold mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-gray-600">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
