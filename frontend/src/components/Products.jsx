import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:8020/api/products")
            .then((res) => {
                if (res.data.status === 1 && res.data.products) {
                    setProducts(res.data.products);
                } else {
                    setError("No products found.");
                }
            })
            .catch(() => setError("Failed to fetch products."))
            .finally(() => setLoading(false));
    }, []);

    // Show 8 products by default, or all if showAll = true
    const visibleProducts = showAll ? products : products.slice(0, 8);

    return (
        <section id="products" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        Shop <span className="text-orange-500">Products</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Browse our selection of new and second-hand electronic appliances at
                        competitive prices.
                    </p>
                </div>

                {/* Loading & Error */}
                {loading ? (
                    <p className="text-center text-gray-500">Loading products...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <>
                        {/* Products Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {visibleProducts.map((product, index) => (
                                <div
                                    key={index}
                                    className="bg-light rounded-xl shadow-sm overflow-hidden transition duration-300 hover:shadow-lg hover:scale-105"
                                >
                                    {/* Image */}
                                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                                        {product.image ? (
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <svg
                                                className="w-24 h-24 text-gray-400"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M21 5H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-1 11H4V7h16v9z"></path>
                                                <path d="M5 18h14v1H5zM5 5h14v1H5z"></path>
                                            </svg>
                                        )}
                                    </div>

                                    {/* Info */}
                                    <div className="p-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="font-semibold">{product.title}</h3>
                                            <span
                                                className={`text-xs px-2 py-1 rounded-full ${product.condition === "New"
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-blue-100 text-blue-800"
                                                    }`}
                                            >
                                                {product.condition}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-3">
                                            {product.description}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-primary font-bold">
                                                ${product.price}
                                            </span>
                                            <button className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm hover:bg-opacity-90 transition">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* View All / View Less Button */}
                        {products.length > 8 && (
                            <div className="text-center mt-10">
                                <button
                                    onClick={() => setShowAll(!showAll)}
                                    className="inline-block bg-[#0056b3] hover:bg-opacity-90 text-white px-8 py-3 rounded-full font-extrabold transition"
                                >
                                    {showAll ? "View Less Products" : "View All Products"}
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}
