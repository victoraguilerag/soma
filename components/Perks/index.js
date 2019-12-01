import React from 'react'
import Perk from '../Perk'
function Perks () {
    const items = [
        {
            image: '/static/perks/perk-icon-1.svg',
            title: 'Profesionales',
            subtitle: 'Técnicos matriculados con más de 20 años de experiencia'
        },
        {
            image: '/static/perks/perk-icon-2.svg',
            title: 'Rápidos',
            subtitle: 'Tiempos de respuesta competitivos.'
        },
        {
            image: '/static/perks/perk-icon-3.svg',
            title: 'Confiables ',
            subtitle: 'Asesoría y reparaciones de calidad'
        },
    ]
    return (
        <div className="Perks">
            {
                items && items.map((item, i) => (
                    <Perk image={item.image} title={item.title} subtitle={item.subtitle} />
                ))
            }
            <style jsx>
                {`
                    .Perks {
                        height: 450px;
                        background: #0F144C;
                        z-index: 2;
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                    }
                `}
            </style>
        </div>
    )
}

export default Perks