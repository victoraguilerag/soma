import React from 'react'
import HeroForm from '../HeroForm'

function Hero () {
    return (
        <div id="Hero" className="Hero">
            <h1 className="title">
                Encontrá un técnico
            </h1>
            <h2 className="subtitle">
                Tareas de instalación, reparación y mantenimiento del hogar.
            </h2>
            <HeroForm />
            <img className="human-1" src="/static/hero/hero-human.svg" />
            <img className="human-2" src="/static/hero/hero-human-2.svg" />
            <div className="sun-illustration" />
            <style jsx>
                {`
                    .Hero {
                        font-family: 'Lato';
                        padding: 200px 16px 0;
                        padding-top: 200px;
                        margin: 0;
                        height: calc(100vh - 300px);
                    }
                    @media screen and (min-width: 1200px) {
                        .Hero {
                            padding-left: 32px;
                        }
                    }
                    .title {
                        font-size: 32px;
                        margin-bottom: 8px;
                    }
                    .subtitle {
                        font-size: 16px;
                        margin: 0 0 32px;
                    }
                    .sun-illustration {
                        z-index: -1;
                        position: absolute;
                        right: -30%;
                        width: 700px;
                        height: 700px;
                        background: linear-gradient(173.63deg, #F8E540 54.93%, rgba(231, 107, 36, 0.8) 88.77%);;
                        box-shadow: inset 0px 0px 15px rgba(0, 0, 0, 0.25);
                        top: 0;
                        border-radius: 50%;
                        z-index: -2;
                    }
                    .human-1 {
                        z-index: -1;
                        position: absolute;
                        right: 15%;
                        transform: scale(.86);
                        top: 200px;
                    }
                    .human-2 {
                        z-index: -1;
                        position: absolute;
                        top: 93px;
                        right: -60px;
                        transform: scale(.8);
                    }
                    @media screen and (max-width: 768px) {
                        .Hero {
                            padding-top: 40px;
                            height: 800px;
                        }
                        .human-1, .human-2 {
                            right: 0;
                            left: -75px;
                            bottom: 0;
                            top: auto;
                            transform: scale(.7);
                        }
                        .human-1 {
                            bottom: -370px;
                        }
                        .human-2 {
                            right: 0;
                            left: auto;
                            right: -75px;
                            bottom: -400px;
                        }
                        .sun-illustration {
                            bottom: -650px;
                            left: -101px;
                            z-index: -1;
                            position: absolute;
                            /* right: -30%; */
                            width: 700px;
                            height: 700px;
                            background: linear-gradient(173.63deg,#F8E540 54.93%,rgba(231,107,36,0.8) 88.77%);
                            box-shadow: inset 0px 0px 15px rgba(0,0,0,0.25);
                            /* top: 0; */
                            top: auto;
                            border-radius: 50%;
                            z-index: -2;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default Hero;