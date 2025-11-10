import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function FeedbackSection() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showAll, setShowAll] = useState(false); // ✅ toggle state

    useEffect(() => {
        axios
            .get("http://localhost:8020/api/feedback")
            .then((res) => {
                if (res.data.status === 1 && res.data.feedbacks) {
                    setFeedbacks(res.data.feedbacks);
                } else {
                    setError("No feedback found.");
                }
            })
            .catch(() => setError("Failed to load feedback."))
            .finally(() => setLoading(false));
    }, []);

    // ✅ Helper: Render stars
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
        }
        if (halfStar) stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
        }
        return stars;
    };

    // ✅ Determine visible feedbacks
    const visibleFeedbacks = showAll ? feedbacks : feedbacks.slice(0, 3);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        What Our <span className="text-orange-500">Customers Say</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our satisfied customers have to say.
                    </p>
                </div>

                {/* Loading & Error */}
                {loading ? (
                    <p className="text-center text-gray-500">Loading feedback...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <>
                        {/* Feedback Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {visibleFeedbacks.map((item, index) => (
                                <div
                                    key={index}
                                    className="testimonial-card p-6 rounded-xl shadow-sm hover:shadow-md transition bg-gray-50"
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                                            <span className="text-gray-500 font-semibold">
                                                {item.name
                                                    ? item.name
                                                        .split(" ")
                                                        .map((n) => n[0])
                                                        .join("")
                                                        .toUpperCase()
                                                    : "?"}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">{item.name || "Anonymous"}</h4>
                                            <div className="flex">{renderStars(item.rating || 0)}</div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 italic">
                                        “{item.feedback || "No feedback text available."}”
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* ✅ View All / Show Less Button */}
                        {feedbacks.length > 3 && (
                            <div className="text-center mt-10">
                                <button
                                    onClick={() => setShowAll(!showAll)}
                                    className="inline-block bg-[#0056b3] hover:bg-opacity-90 text-white px-8 py-3 rounded-full font-extrabold transition"
                                >
                                    {showAll ? "Show Less" : "View All Reviews"}
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}
