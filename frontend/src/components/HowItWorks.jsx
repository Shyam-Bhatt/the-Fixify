import React from "react";

export default function HowItWorks() {
    const steps = [
        {
            number: 1,
            title: "Book a Service",
            description:
                "Request a service through our website, upcoming app, or by calling our customer service.",
        },
        {
            number: 2,
            title: "Get Matched",
            description:
                "We'll assign a verified professional technician based on your specific needs.",
        },
        {
            number: 3,
            title: "Service Completion",
            description:
                "Track your technician's arrival, get the service done, and provide feedback.",
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        How <span className="text-orange-500">It Works</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Getting your home services has never been easier with The Fixify.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center">
                            {/* Step Number Circle */}
                            <div className="bg-white w-20 h-20 rounded-full shadow-sm flex items-center justify-center mx-auto mb-6 border-4 border-primary border-opacity-20">
                                <span className="text-2xl font-bold text-primary">{step.number}</span>
                            </div>

                            {/* Step Title */}
                            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>

                            {/* Step Description */}
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
