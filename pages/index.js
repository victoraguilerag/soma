import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Perks from '../components/Perks'
import Services from '../components/Services'
import FAQS from '../components/FAQS'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
function Home() {
    return (
        <Layout>
            <Hero />
            <Perks />
            <Services />
            <FAQS />
            <ContactUs />
            <Footer />
        </Layout>
    )
}

export default Home;