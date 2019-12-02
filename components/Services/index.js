import React from 'react';
import Service from '../Service'
function Services () {
    const items = [
        {
            icon: 'climate',
            name: 'Refrigeración'
        },
        {
            icon: 'house',
            name: 'Reparaciones del hogar'
        },
        {
            icon: 'light',
            name: 'Electricidad'
        },
        {
            icon: 'camara',
            name: 'Seguridad'
        },
        {
            icon: 'llave',
            name: 'Llaves'
        },
        {
            icon: 'tuberia',
            name: 'Plomería'
        }
    ]
    return (
        <div className="Services">
            <div className="title">Servicios</div>
            <div className="container">
                {
                    items && items.map(item => (
                        <Service icon={item.icon} name={item.name} />
                    ))
                }      
            </div>
            <style jsx>
                {`
                    .Services {
                        padding-top: 64px;
                        padding-bottom: 100px;
                        background: linear-gradient(147.09deg, #F8E540 38.73%, rgba(231, 107, 36, 0.8) 140.71%);
                    }
                    .title {
                        display: flex;
                        justify-content: flex-start;
                        padding-left: 40px;
                        align-items: center;
                        font-family: 'Lato';
                        font-size: 32px;
                        height: 50px;
                        width: 200px;
                        border-radius: 0 8px 8px 0;
                        background: white;
                        margin-bottom: 112px;
                    }
                    .container {
                        display: grid;
                        grid-template-columns: 274px 274px 274px;
                        grid-row-gap: 40px;
                        margin: o auto;
                        justify-content: space-around;
                        align-items: center;
                    }
                `}
            </style>
        </div>
    )
}

export default Services;