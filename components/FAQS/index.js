import React from 'react'

function FAQS () {
    const items = [
        {
            question: 'Pregunta',
            response: 'Respuesta'
        },
        {
            question: 'Pregunta',
            response: 'Respuesta'
        },
    ]
    return (
        <div className="FAQS">
            {
                items && items.map(item => (
                    <div className="FAQ">
                        <div className="question">
                            {item.question}
                            <div className="response">
                                {item.response}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default FAQS;