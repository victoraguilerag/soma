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
                        height: 50px;
                        background: #0F144C;
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