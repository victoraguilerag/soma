import { useRef, useState } from 'react';
import Formulario from '../Formulario';

function HeroForm ({ items }) {
    const telefono = useRef()
    const servicio = useRef()
    const [selected, setSelected] = useState(false)
    const [active, setActive] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('servicio', servicio.current.value);
        localStorage.setItem('telefono', telefono.current.value);
        console.log(items[servicio.current.value]);
        setSelected(items[servicio.current.value]);
        setActive(true);
    }
    // action="https://formspree.io/xrgevrpp"
    // method="POST"
    return (
        <form
            className="HeroForm"
        >
            <Formulario
                item={selected}
                active={active}
                deactiveModal={() => setActive(false)}
                telefono={telefono.current ? telefono.current.value: ""}
            />
            <select
                className="servicio"
                type="text"
                placeholder="Necesito..."
                required
                ref={servicio}
                name="Servicio"
            >
                <option value={false}>Necesito...</option>
                {
                    items.map((item, i) => (
                        <option value={i}>{item.name}</option>
                    ))
                }
            </select>
            <input
                required
                name="Telefono"
                className="telefono"
                type="text"
                ref={telefono}
                placeholder="Mi telefono es..."
            />
            <input
                type="submit"
                className="solicitar"
                value="Solicitar"
                onClick={handleSubmit}
            />
            <img src="/static/hero/right.svg" className="solicitar-icon" />

            <style jsx>
                {`
                    .HeroForm {
                        display: flex;
                        align-items: center;
                        position: relative;
                        font-family: 'Open Sans';
                        font-weight: bold;
                        color: white;
                    }
                    .servicio {
                        cursor: pointer;
                        font-family: 'Open Sans';
                        font-weight: 600;
                        width: 214px;
                        height: 52px;
                        max-height: 52px;
                        border: none;
                        border-radius: 32px 0 0 32px;
                        box-shadow: 0 1px 2px rgba(0,0,0,.2);
                        padding-left: 24px;
                        padding-right: 24px;
                        background: white;
                    }
                    .telefono {
                        
                        cursor: pointer;
                        font-family: 'Open Sans';
                        font-weight: 600;
                        width: calc(214px - 48px);
                        height: 50px;
                        max-height: 50px;
                        border: none;
                        box-shadow: 0 1px 2px rgba(0,0,0,.2);
                        padding-left: 8px;
                        padding-right: 24px;
                    }
                    .solicitar {
                        cursor: pointer;
                        font-family: 'Open Sans';
                        font-weight: 600;
                        width: 214px;
                        height: 52px;
                        max-height: 52px;
                        border: none;
                        background: #0F144C;
                        color: white;
                        border-radius: 0 32px 32px 0;
                        box-shadow: 0 1px 2px rgba(0,0,0,.2);
                        padding-left: 24px;
                        padding-right: 24px;
                    }
                    .solicitar-icon {
                        position: relative;
                        right: 32px;
                    }
                    @media screen and (max-width: 768px) {
                        .HeroForm {
                            padding-bottom: 600px;
                            flex-flow: column;
                            width: 100%;
                            padding: 0;
                        }
                        .HeroForm .servicio, .HeroForm .telefono, .HeroForm .solicitar  {
                            border-radius: 0;
                            width: 100%;
                            margin-bottom: 24px;
                        }
                        .HeroForm .telefono {
                            width: calc(100% - 48px);
                        }
                    }
                `}
            </style>
        </form>
    );
}
export default HeroForm