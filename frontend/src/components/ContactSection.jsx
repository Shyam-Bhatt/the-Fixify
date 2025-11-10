import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactSection() {
    const [contactInfo, setContactInfo] = useState(null);
    const [loadingInfo, setLoadingInfo] = useState(true);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState(null); // { type: 'success'|'error', msg: '' }

    // Fetch contact information (phone, email, address, hours)
    useEffect(() => {
        let mounted = true;
        axios
            .get("http://localhost:8020/api/contact/info")
            .then((res) => {
                if (!mounted) return;
                if (res.data.status === 1 && res.data.data) {
                    setContactInfo(res.data.data);
                } else {
                    setContactInfo(null);
                }
            })
            .catch(() => setContactInfo(null))
            .finally(() => mounted && setLoadingInfo(false));

        return () => (mounted = false);
    }, []);

    // Basic client-side validation
    const validate = () => {
        if (!form.name.trim()) return "Please enter your full name.";
        if (!form.email.trim()) return "Please enter your email address.";
        // simple email check
        if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Please enter a valid email.";
        if (!form.phone.trim()) return "Please enter your phone number.";
        if (!form.service) return "Please choose a service type.";
        if (!form.message.trim()) return "Please describe your service needs.";
        return null;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((p) => ({ ...p, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const err = validate();
        if (err) {
            setStatus({ type: "error", msg: err });
            window.setTimeout(() => setStatus(null), 4000);
            return;
        }

        setSubmitting(true);
        setStatus(null);

        try {
            const res = await axios.post("http://localhost:8020/api/contact/submit", form);
            if (res.data?.status === 1) {
                setStatus({ type: "success", msg: res.data.message || "Request submitted." });
                setForm({ name: "", email: "", phone: "", service: "", message: "" });
            } else {
                setStatus({ type: "error", msg: res.data.message || "Submission failed." });
            }
        } catch (err) {
            setStatus({ type: "error", msg: "Server error. Please try again later." });
        } finally {
            setSubmitting(false);
            window.setTimeout(() => setStatus(null), 4000);
        }
    };

    return (
        <section id="contact" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Contact <span className="text-orange-500">Us</span></h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Have questions or ready to book a service? Get in touch with our team.</p>
                </div>

                <div className="flex flex-col md:flex-row">
                    {/* LEFT: FORM */}
                    <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                        <form id="contactForm" className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                                    <input
                                        id="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        type="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Your email"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    type="tel"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your phone number"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Type</label>
                                <select
                                    id="service"
                                    name="service"
                                    value={form.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    required
                                >
                                    <option value="" disabled> Select a service </option>
                                    <option value="Appliance Repair">Appliance Repair</option>
                                    <option value="Home Services">Home Services</option>
                                    <option value="CCTV Installation">CCTV Installation</option>
                                    <option value="Construction">Construction</option>
                                    <option value="Emergency Services">Emergency Services</option>
                                    <option value="Interior Design">Interior Design</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={form.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Describe your service needs"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={submitting}
                                className={`w-full ${submitting ? "opacity-70 cursor-not-allowed" : ""} bg-orange-500 hover:bg-opacity-90 text-white px-6 py-3 rounded-lg font-medium transition`}
                            >
                                {submitting ? "Submitting..." : "Submit Request"}
                            </button>

                            {status && (
                                <div className={`text-sm mt-2 ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
                                    {status.msg}
                                </div>
                            )}
                        </form>
                    </div>

                    {/* RIGHT: Contact Info / Get in Touch */}
                    <div className="md:w-1/2 md:pl-10">
                        <div className="bg-light p-8 rounded-xl shadow-sm h-full">
                            <h3 className="text-xl font-extrabold mb-6">Get in Touch</h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-primary bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <FaPhoneAlt className="text-orange-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Phone</h4>
                                        {loadingInfo ? (
                                            <p className="text-gray-600">Loading...</p>
                                        ) : (
                                            <>
                                                <p className="text-gray-600">{contactInfo?.phone || "—"}</p>
                                                <p className="text-gray-600">{contactInfo?.phoneNote || "Available 24/7 for emergency services"}</p>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-primary bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <FaEnvelope className="text-orange-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Email</h4>
                                        {loadingInfo ? (
                                            <p className="text-gray-600">Loading...</p>
                                        ) : (
                                            <>
                                                <p className="text-gray-600">{contactInfo?.email || "—"}</p>
                                                {contactInfo?.altEmail && <p className="text-gray-600">{contactInfo.altEmail}</p>}
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-primary bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <FaMapMarkerAlt className="text-orange-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Office Location</h4>
                                        {loadingInfo ? (
                                            <p className="text-gray-600">Loading...</p>
                                        ) : (
                                            <>
                                                <p className="text-gray-600">{contactInfo?.addressLine1 || "—"}</p>
                                                {contactInfo?.addressLine2 && <p className="text-gray-600">{contactInfo.addressLine2}</p>}
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-primary bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <FaClock className="text-orange-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Business Hours</h4>
                                        {loadingInfo ? (
                                            <p className="text-gray-600">Loading...</p>
                                        ) : (
                                            <>
                                                <p className="text-gray-600">{contactInfo?.hours || "—"}</p>
                                                {contactInfo?.emergency && <p className="text-gray-600">{contactInfo.emergency}</p>}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="font-semibold mb-3">Follow Us</h4>
                                <div className="flex space-x-4">
                                    <a href={contactInfo?.facebook || "#"} className="bg-primary bg-opacity-10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href={contactInfo?.twitter || "#"} className="bg-primary bg-opacity-10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href={contactInfo?.instagram || "#"} className="bg-primary bg-opacity-10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href={contactInfo?.linkedin || "#"} className="bg-primary bg-opacity-10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
