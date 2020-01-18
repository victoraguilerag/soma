import React from 'react'

function Footer () {
    return (
        <div className="Footer">
            <p className="copy">Todos los derechos reservados</p>
            <style jsx>
                {`
                    .Footer {
                        width: 100%;
                        background: blue;
                        height: 100px;
                        background: #0F144C;

                        display: flex;
                        justify-content: center;
                        align-items: flex-end;
                        color: white;
                    }
                    .Footer .copy {
                        font-family: Open Sans;
                        font-weight: bold;
                    }
                `}
            </style>
        </div>
    )
}

export default Footer;