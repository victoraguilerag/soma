import React from 'react'

function ContactUs () {
    return (
        <div id="Contact" className="ContactUs">
            <h3 className="title">Sobre nosotros</h3>
            <div className="container">
                <div className="map">
                    <img className="map" src="/static/contact/map.png" />
                </div>
                <div className="information-container">
                    <div className="information">
                        <div className="information-title">Dirección:</div>
                        <div className="information-subtitle">Capital Federal y GBA, Buenos Aires, Argentina.</div>
                        <img className="information-icon" src="/static/contact/location.svg" />
                    </div>
                    <div className="information">
                        <div className="information-title">Horario comercial:</div>
                        <div className="information-subtitle">Lunes a Viernes, disponible en feriados.</div>
                        <div className="extra">De 9:00hs a 19:00hs</div>
                        <img className="information-icon" src="/static/contact/time.svg" />
                    </div>
                    <div className="information">
                        <div className="information-title">Emergencias:</div>
                        <div className="information-subtitle">Todos los dias, 24 horas.</div>
                        <img className="information-icon" src="/static/contact/alert.svg" />
                    </div>
                </div>
                <img src="/static/contact/background.svg" className="background" />
                <img src="/static/contact/woman.png" className="woman" />
            </div>
            <style jsx>
                {`
                    .ContactUs {
                        padding-top: 64px;
                        padding-bottom: 60px;
                    }
                    .title {
                        margin-top: 100px;
                        margin-left: 16px;
                        margin-bottom: 64px;
                        font-family: 'Lato';
                        font-size: 32px;
                    }
                    .container {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-column-gap: 32px;
                        padding: 0 16px;
                        position: relative;
                    }
                    .information {
                        padding: 16px;
                        border-radius: 8px;
                        box-shadow: 0 0 2px rgba(0,0,0,.2);
                        position: relative;
                        margin-bottom: 16px;
                        background: white;
                    }
                    .information-container {
                    }
                    .information-title {
                        margin: 0 0 8px;
                        font-size: 24px;
                        font-family: Lato;
                        font-weight: bold;
                    }
                    .information-subtitle {
                        margin: 0 0;
                        font-size: 16px;
                        font-family: Lato;
                    }
                    .extra {
                        font-size: 16px;
                        font-family: Lato;
                        margin-top: 8px;
                    }
                    .information-icon {
                        position: absolute;
                        top: 16px;
                        right: 16px;
                    }
                    .background {
                        position: absolute;
                        z-index: -1;
                        top: -4%;
                        left: 10%;
                    }
                    .woman {
                        position: absolute;
                        bottom: -110px;
                        width: 400px;
                        right: -40px;
                    }
                    @media screen and (max-width: 768px) {
                        .ContactUs {
                            padding-bottom: 300px;
                        }
                        .container {
                            grid-template-columns: 1fr;
                        }
                        .woman {
                            bottom: -360px;
                        }
                        .information-container {
                        }
                        .map {
                            width: 100%;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default ContactUs;