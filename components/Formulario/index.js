import React from 'react'

function Formulario ({ item, active, deactiveModal }) {
    return (
        <div className={`formulario ${active ? 'active': ''}`}>
            <img onClick={deactiveModal} className="close" src="/static/contact/close.svg" />
            <div className="icon-container">
                <div className="icon-circle">
                    <img className="icon" src={`/static/service/${item.icon}.svg`} />
                </div>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
            </div>
            <form action="https://formspree.io/xrgevrpp" method="POST" className="contact-form">
                <h3 className="form-title">Déjanos tus datos y te contactaremos:</h3>
                <p className="section-label">Datos personales:</p>
                <div className="inputs">
                    <label className="label">
                        Nombre
                        <input name="Nombre" type="text" className="input" placeholder="" />
                    </label>
                    <label>
                        Teléfono
                        <input name="Telefono" type="text" className="input" placeholder="" />
                    </label>
                    <label>
                        Email
                        <input name="Email" type="text" className="input" placeholder="" />
                    </label>
                </div>
                <p className="section-label">Dirección:</p>
                <div className="inputs">
                    <label className="label">
                        Calle
                        <input name="Calle" type="text" className="input" placeholder="" />
                    </label>
                    <label>
                        Altura
                        <input name="Altura" type="text" className="input" placeholder="" />
                    </label>
                </div>
                <input type="submit" className="submit" value="Solicitar" />
            </form>
            <style jsx>
                {`
                    .close {
                        position: absolute;
                        top: 5%;
                        right: 5%;
                        cursor: pointer;
                    }
                    .contact-form {
                        width: 60%;
                        padding-right: 10%:
                    }
                    .submit {
                        background: #E55D21;
                        color: white;
                        border: none;
                        font-family: 'Lato';
                        font-size: 20px;
                        width: 180px;
                        height: 40px;
                        border-radius: 4px;
                        cursor: pointer;
                        box-shadow: 0 0 4px rgba(0,0,0,.2);
                        margin-left: 32px;
                        margin-top: 40px;
                    }
                    .contact-form .inputs {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-gap: 32px;
                        margin-left: 32px;
                    }

                    .contact-form .form-title {
                        font-family: 'Lato';
                        font-size: 32px;
                        color: #E55D21;
                        margin-left: 32px;
                        margin-top: 15%;
                    }
                    .contact-form label {
                        display: flex;
                        flex-flow: column;
                        font-family: 'Lato';
                        font-weight: bold;
                    }
                    .contact-form label input {
                        border: 0;
                        height: 40px;
                        box-shadow: 1px 1px 4px rgba(0,0,0,.2);
                        padding-left: 16px;
                        margin-top: 8px;
                    }
                    .section-label {
                        margin-left: 32px;
                        font-family: 'Lato';
                        font-size: 20px;
                        font-weight: light;
                    }
                    .formulario {
                        width: 100%;
                        height: 100%;
                        background: white;
                        position: fixed;
                        top: 0;
                        left: 100%;
                        z-index: 201;
                        display: flex;
                        transition: 1.5s ease left;
                    }
                    .formulario.active {
                        left: 0;
                        transition: 1s ease left;
                    }
                    .formulario .icon-circle {
                        width: 200px;
                        height: 200px;
                        background: white;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .formulario .icon-container {
                        width: 30%;
                        height: 90%;
                        background: #E55D21;
                        display: flex;
                        flex-flow: column;
                        align-items: center;
                        justify-content: flex-start;
                        padding-top: 10%;
                    }
                    .formulario .icon-container .icon {
                        width: 90%;
                        height: auto;
                    }
                    .icon-container h4 {
                        font-family: 'Lato';
                        color: white;
                        margin: 40px auto 16px;
                        font-size: 24px;
                    }
                    .icon-container p {
                        font-family: 'Lato';
                        margin-top: 0;
                        color: white;
                        text-align: center;
                        padding: 0 24px;
                    }
                    @media screen and (max-width: 768px) {
                        .contact-form .inputs {
                            grid-template-columns: 1fr;
                        }
                        .form-title, .contact-form {
                            width: 100%;
                        }
                        .formulario {
                            flex-flow: column;
                            overflow-y: scroll;
                        }
                        .formulario .icon-container {
                            width: 100%;
                            height: fit-content;
                            padding-bottom: 32px;
                        }
                        .inputs {
                            width: 80%;
                        }
                        .contact-form {
                            padding-bottom: 64px;
                        }
                        .close {
                            width: 32px;
                            filter: brightness(0) invert(1);
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default Formulario;