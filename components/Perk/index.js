import React from 'react'

function Perk ({image, title, subtitle}) {
    return (
        <div className="Perk">
            <div className="perk-card">
                <img src={image} className="perk-icon-1" />
                <h3 className="title">{title}</h3>
                <p className="subtitle">{subtitle}</p>
            </div>
            <style jsx>
                {`
                    .Perk {
                        display: flex;
                        justify-content: flex-start;
                        margin-top: 150px;
                    }
                    .perk-card {
                        display: flex;
                        height: auto;
                        width: 100%;
                        flex-flow: column;
                        justify-content: flex-start;
                    }
                    .title, .subtitle {
                        font-family: 'Open Sans';
                        text-align: center;
                        color: white;
                    }
                    .subtitle {
                        margin-top: 0;
                        max-width: 284px;
                        text-align: center;
                        margin: 0 auto;
                    }

                `}
            </style>
        </div>
    )
}

export default Perk;