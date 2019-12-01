import React from 'react'

function HeroForm () {
    return (
        <form className="HeroForm">
            <select
                className="servicio"
                type="text"
                placeholder="Necesito..."
                required
            >
                <option value={false}>Necesito...</option>
                <option>Herreria</option>
                <option>Refrigeracion</option>
                <option>Refrigeracion</option>
            </select>
            <input
                required
                className="telefono"
                type="text"
                placeholder="Mi telefono es..."
            />
            <input
                className="solicitar"
                type="submit"
                value="Solicitar"
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
                        padding-left: 24px;
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
                `}
            </style>
        </form>
    );
}
export default HeroForm