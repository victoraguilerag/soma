import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Perks from '../components/Perks'
import FAQS from '../components/FAQS'
function Home() {
    return (
        <Layout>
            <Hero />
            <Perks />
            <FAQS />
        </Layout>
    )
}

export default Home;