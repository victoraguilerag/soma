import React from 'react'
import Perk from '../Perk'
function Perks () {
    const items = [
        {
            image: '/static/perks/perk-icon-1.svg',
            imageActive: '/static/perks/perk-icon-1-active.svg',
            title: 'Profesionales',
            subtitle: 'Técnicos matriculados con más de 20 años de experiencia'
        },
        {
            image: '/static/perks/perk-icon-2.svg',
            imageActive: '/static/perks/perk-icon-2-active.svg',
            title: 'Rápidos',
            subtitle: 'Tiempos de respuesta competitivos.'
        },
        {
            image: '/static/perks/perk-icon-3.svg',
            imageActive: '/static/perks/perk-icon-3-active.svg',
            title: 'Confiables ',
            subtitle: 'Asesoría y reparaciones de calidad'
        },
    ]
    return (
        <div id="Perks" className="Perks">
            {
                items && items.map((item, i) => (
                    <Perk
                        {...item}
                    />
                ))
            }
            <style jsx>
                {`
                    .Perks {
                        padding-top: 72px;
                        height: 450px;
                        background: #0F144C;
                        z-index: 2;
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                    }
                    @media screen and (max-width: 768px) {
                        .Perks {
                            grid-template-columns: 1fr;
                            height: 900px;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default Perks