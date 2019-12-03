import React from 'react'

function Formulario ({ item, active, deactiveModal }) {
    return (
        <div className={`formulario ${active ? 'active': ''}`}>
            <img onClick={deactiveModal} className="close" src="/static/contact/close.svg" />
            <div className="icon-container">
                <div className="icon-circle">
                    <img className="icon" src="/static/service/camara.svg" />
                </div>
                <h4>Seguridad</h4>
                <p>Instalación y reparación de cámaras, circuito cerrado y alarmas.
    (Instalacion de camaras de circuito cerrado, alarmas, antirrobo, seguridad, vigilancia, consorcio, hogar)</p>
            </div>
            <form className="contact-form">
                <h3 className="form-title">Escribenos y te contactaremos.</h3>
                <div className="inputs">
                    <label className="label">
                        Nombre
                        <input type="text" className="input" placeholder="Victor" />
                    </label>
                    <label>
                        Telefono
                        <input type="text" className="input" placeholder="+54 9 11 69512868" />
                    </label>
                </div>
                <p className="section-label">Direccion</p>
                <div className="inputs">
                    <label className="label">
                        Calle
                        <input type="text" className="input" placeholder="Terrero" />
                    </label>
                    <label>
                        Altura
                        <input type="text" className="input" placeholder="1231" />
                    </label>
                    <label>
                        Email
                        <input type="text" className="input" placeholder="victoraguilerago@gmail.com" />
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
                        z-index: 5;
                        display: flex;
                        transition: 1.5s ease left;
                    }
                    .formulario.active {
                        left: 0;
                        transition: 1.5s ease left;
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
                        font-size: 32px;
                    }
                    .icon-container p {
                        font-family: 'Lato';
                        margin-top: 0;
                        color: white;
                        text-align: center;
                        padding: 0 24px;
                    }
                `}
            </style>
        </div>
    )
}

export default Formulario;