import { useState } from 'react';
import Service from '../Service'
import Formulario from '../Formulario'
function Services ({ items }) {
    const [activeModal, setActiveModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(false);

    const activateModal = (i) => {
        setSelectedItem(items[i])
        setActiveModal(true)
    }
    const deactiveModal = () => {
        setSelectedItem(false)
        setActiveModal(false)
    }
    return (
        <div id="Services" className="Services">
            <div className="title">Servicios</div>
            <div className="container">
                {
                    items && items.map((item, i) => (
                        <Service icon={item.icon} name={item.name} handleClick={() => activateModal(i)} />
                    ))
                }     
            </div>
            <div className="band" />
            <Formulario item={selectedItem} active={activeModal} deactiveModal={() => setActiveModal(false)} />
            <style jsx>
                {`
                    .Services {
                        position: relative;
                        padding-top: 140px;
                        padding-bottom: 32px;
                        background: linear-gradient(147.09deg, #F8E540 38.73%, rgba(231, 107, 36, 0.8) 140.71%);
                    }
                    .title {
                        display: flex;
                        justify-content: flex-start;
                        padding-left: 40px;
                        align-items: center;
                        font-family: 'Lato';
                        font-size: 32px;
                        height: 50px;
                        width: 200px;
                        border-radius: 0 8px 8px 0;
                        background: white;
                        margin-bottom: 40px;
                    }
                    .container {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, 274px);
                        grid-column-gap: 16px;
                        grid-row-gap: 40px;
                        margin: o auto;
                        justify-content: space-around;
                        align-items: center;
                    }
                    .band {
                        width: 5%;
                        height: 100%;
                        background: #E55D21;
                        position: absolute;
                        right: 0;
                        top: 0;
                        z-index: 1;
                    }
                    @media screen and (min-width: 1024px) {
                        .container {
                            grid-template-columns: 274px 274px 274px;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default Services;