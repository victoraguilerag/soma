import React from 'react'
import FAQ from '../FAQ'
function FAQS () {
    const items = [
        {
            question: '¿Cuánto tardan en contactarme?',
            response: 'Si tenés una duda o queja con respecto al técnico o la gestión ofrecida, podés comunicarte al correo contacto@somaservices para recibir una solución. '
        },
        {
            question: '¿Qué pasa si tengo un problema?',
            response: 'Si tenés una duda o queja con respecto al técnico o la gestión ofrecida, podés comunicarte al correo contacto@somaservices para recibir una solución. '
        },
        {
            question: '¿Los técnicos están matriculados?',
            response: 'Si tenés una duda o queja con respecto al técnico o la gestión ofrecida, podés comunicarte al correo contacto@somaservices para recibir una solución. '
        },
        {
            question: '¿Los técnicos están matriculados?',
            response: 'Si tenés una duda o queja con respecto al técnico o la gestión ofrecida, podés comunicarte al correo contacto@somaservices para recibir una solución. '
        }
    ]
    return (
        <div id="FAQS" className="FAQS">
            <h3 className="title">Preguntas Frecuentes</h3>
            <div className="faqs-container">
                {
                    items && items.map(item => (
                        <FAQ question={item.question} response={item.response} />
                    ))
                }
            </div>
            <style jsx>
                {`
                    .FAQS {
                        padding-top: 64px;
                    }
                    .title {
                        margin-top: 100px;
                        margin-left: 16px;
                        margin-bottom: 64px;
                        font-family: 'Lato';
                        font-size: 32px;
                    }
                    .faqs-container {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-column-gap: 40px;
                        grid-row-gap: 32px;
                        padding: 0 16px;
                    }
                    @media screen and (max-width: 768px) {
                        .faqs-container {
                            grid-template-columns: 1fr;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default FAQS;