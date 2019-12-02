import React from 'react'

function Service ({ name, icon }) {
    return (
        <div className="Service">
            <img className="selected" src="/static/service/selected-icon.svg" />
            <img className={`icon ${name}`} src={`/static/service/${icon}.svg`} />
            <div className="circle" />
            <h4 className="title">{name}</h4>
            <style jsx>
                {`
                    .Service {
                        width: 276px;
                        height: 276px;
                        background: white;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-flow: column;
                        border-radius: 8px;
                        position: relative;
                        cursor: pointer;
                    }
                    .Service:hover {
                        transition: box-shadow ease .3s;
                        transition: transform ease .3s;
                        transform: scale(1.04);
                        box-shadow: 0 0 5px rgba(0,0,0,.2);
                    }
                    .icon {
                        z-index: 2;
                    }
                    .Electricidad {
                        position: relative;
                        top: -6px;
                    }
                    .circle {
                        width: 112px;
                        height: 112px;
                        background: yellow;
                        opacity: .18;
                        position: absolute;
                        border-radius: 50%;
                    }
                    .title {
                        font-family: Lato;
                        position: absolute;
                        bottom: 10%;
                    }
                    .selected {
                        position: absolute;
                        top: 16px;
                        right: 16px;
                        opacity: 0;
                    }
                    .Service:hover .selected {
                        opacity: 1;
                    }
                `}
            </style>
        </div>
    )
}

export default Service;