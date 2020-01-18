import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Perks from '../components/Perks'
import Services from '../components/Services'
import FAQS from '../components/FAQS'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

function Home() {
    const items = [
        {
            icon: 'climate',
            name: 'Climatización',
            description: "Instalación, mantenimiento y reparación de equipos split, piso techo, centrales, torres de enfriamiento y calderas."
        },
        {
            icon: 'house',
            name: 'Reparaciones del hogar',
            description: "Instalación y mantenimiento de cielo raso, durlock, iluminación, PVC y falso techo. Pintura, decoración, exteriores y remodelaciones."
        },
        {
            icon: 'light',
            name: 'Electricidad',
            description: "Chequeo general, reparaciones y mediciones en casas particulares y empresas. Reemplazo de luminarias. Cableado y puesta a tierra. Emergencias relacionadas a cortes eléctricos."
        },
        {
            icon: 'camara',
            name: 'Seguridad',
            description: "Instalación y reparación de cámaras de vigilancia, circuitos cerrados y alarmas antirrobo en consorcios, casas particulares y empresas."
        },
        {
            icon: 'llave',
            name: 'Puertas y cerrajería',
            description: "Instalación y mantenimiento de puertas Blindex, frenos de puerta, bisagras, cortinas metálicas, rejas y vidrios de seguridad. Emergencias con llaves o puertas truncadas."
        },
        {
            icon: 'tuberia',
            name: 'Plomería',
            description: "Instalación y mantenimiento de sistemas de riego, desagües, equipos termoeléctricos, bachas, canillas y bombas cloacales. Destape de caños e inodoros, análisis de pérdidas de agua y reparaciones de fugas."
        }
    ]
    return (
        <Layout>
            <Hero items={items}/>
            <Perks />
            <Services items={items} />
            <FAQS />
            <ContactUs />
            <Footer />
        </Layout>
    )
}

export default Home;