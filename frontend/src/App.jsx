import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Services from './components/services'
import Products from './components/Products'
import HowItWorks from './components/HowItWorks'
import FeedbackSection from './components/FeedbackSection'
import AboutSection from './components/AboutSection'
import CTASection from './components/CTASection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'


export default function App() {
    const [offers, setOffers] = useState([])
    const [products, setProducts] = useState([])


    useEffect(() => {
        async function fetchData() {
            try {
                const [oRes, pRes] = await Promise.all([
                    axios.get('http://localhost:8020/api/offers'),
                    axios.get('http://localhost:8020/api/products')
                ])
                setOffers(oRes.data.offers || [])
                setProducts(pRes.data.products || [])
            } catch (err) {
                console.error('Failed to fetch data', err)
            }
        }
        fetchData()
    }, [])


    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <HeroSection />
            <Services />
            <Products />
            <HowItWorks />
            <FeedbackSection />
            <AboutSection />
            <CTASection />
            <ContactSection />

            <Footer />
        </div>
    )
}