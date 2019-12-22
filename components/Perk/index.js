import React from 'react'

function Perk ({image, imageActive, title, subtitle}) {
    return (
        <div className="Perk">
            <div className="perk-card">
                <img src={image} className="perk-icon" />
                <img src={imageActive} className="perk-icon active" />
                <h3 className="title">{title}</h3>
                <p className="subtitle">{subtitle}</p>
            </div>
            <style jsx>
                {`
                    .Perk {
                        width: 100%;
                        height: 100%;

                        display: flex;
                        justify-content: center;
                        align-items: center;

                        color: blue;

                        width: 90%;
                        margin: 0 auto;
                        height: 50%;
                        align-self: center;
                    }
                    @media screen and (max-width: 768px) {
                        .Perk:hover {
                            height: 70%;
                            transition: color 1s ease;
                        }
                    }
                    .perk-icon.active {
                        display: none;
                    }
                    .Perk:hover .perk-icon.active {
                        display: flex;
                    }
                    .Perk:hover .perk-icon {
                        width: 100%;
                        height: 90px;
                        display: none;
                    }
                    .Perk:hover .title, .Perk:hover .subtitle {
                        color: #0F144C;
                        color: black;
                        transition: .1s ease-in color;
                        font-weight: bold;
                        margin-bottom: 0;

                    }
                    .Perk:hover title {
                    }
                    .Perk:hover {
                        cursor: pointer;
                        background: white;
                        color: blue;
                        background: white;
                        border-radius: 15px;
                    }
                    .perk-card {
                        display: flex;
                        height: auto;
                        width: 100%;
                        flex-flow: column;
                        justify-content: flex-start;
                    }
                    .perk-card.active {
                        background: white;
                    }
                    .title, .subtitle {
                        margin-bottom: 0;
                        font-family: 'Open Sans';
                        text-align: center;
                        color: white;
                        transition: .1s ease-in color;
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