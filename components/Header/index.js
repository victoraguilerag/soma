import { useEffect, useState } from 'react'
import LoadingBar from '../LoadingBar'
function Header () {
    const [menu, setMenu] = useState(true);
    const [target, setTarget] = useState(false);
    const [sticky, setSticky] = useState(false);
    const handleMenu = () => {
        setMenu(!menu);
    }
    useEffect(() => {
        window.onscroll = () => handleScroll()
    }, [])
    const handleScroll = () => {
        const header = document.getElementById('Header')
        const stickyLength = header.offsetTop;

        if (window.pageYOffset > (stickyLength + 100) && !sticky) {
            header.classList.add('sticky')
            document.body.classList.add('sticky')
            setSticky(true)
        } else {
            console.log('remove')
            header.classList.remove('sticky')
            document.body.classList.remove('sticky')
            setSticky(false)
        }
    }
    useEffect(() => {
        setMenu(false);
        if (document) {
            const sectionTag = document.getElementById(target)
            console.log(sectionTag)
            if (sectionTag) {
                setTimeout(() => {
                    console.log(sectionTag)
                    sectionTag.scrollIntoView({
                        'behavior': "smooth",
                        'block': 'start',
                        'alignToTop': false,
                    })
                }, 300)
            }
        }
    }, [target])
    return (
        <div id="Header" className="Header">
            <div className="logo">
                <img className="logo-icon" src="/static/header/logo.png" />
            </div>
            <div className="phone">
                <img className="phone-icon" src="/static/header/phone.svg" />
                +54 9 11 26454007
            </div>
            <div className="menu" onClick={handleMenu}>
                <img className="menu-icon" src="/static/header/hamburger.svg" />
            </div>
            <nav onClick={handleMenu} className={`menu-drawer ${menu ? 'active': 'inactive'}`}>
                <a onClick={() => setTarget('Header')} className="section">Conseguí un técnico</a>
                <a onClick={() => setTarget('Perks')} className="section">¿Por qué Soma Services?</a>
                <a onClick={() => setTarget('Services')} className="section">Servicios</a>
                <a onClick={() => setTarget('FAQS')} className="section">Preguntas Frecuentes</a>
                <a onClick={() => setTarget('Contact')} className="section">Contáctanos</a>
            </nav>
            <style jsx>
                {`

                    .menu-drawer {
                        display: flex;
                        flex-flow: column;
                        padding-top: 32px;
                    }
                    .menu-drawer .section {
                        width: 100%;
                        height: 50px;
                        margin-top: 24px;
                        padding-left: 24px;
                        font-size: 24px;
                        font-family: 'Open Sans';
                        font-weight: bold;
                        cursor: pointer;
                    }
                    .menu-drawer .section:hover {
                        text-decoration: underline;
                    }

                    .menu-drawer {
                        width: 100%;
                        height: 100vh;
                        position: absolute;
                        left: 100%;
                        transition: left .5s ease;
                        background: white;
                        z-index: 210;
                    }
                    .menu-drawer.active {
                        left: 0;
                        top: 0;
                        transition: left .5s ease;
                    }
                    .Header {
                        height: 100px;
                        padding: 0 16px;

                        background: white;
                        box-shadow: 0 0 5px rgba(0,0,0,.2);

                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        align-items: center;
                        justify-content: center;

                        z-index: 2;
                    }
                    .Header.sticky {
                        position: absolute;
                        top: 0;
                        position: fixed;
                        top: 0;
                        width: calc(100% - 32px);
                        z-index: 200;
                        animation: enter 1.5s ease;
                    }
                    @keyframes enter {
                        from {
                            top: -100%;
                        }
                        to {
                            top: 0;
                        }
                    }
                    .menu {
                        display: flex;
                        justify-content: flex-end;
                    }
                    .menu {
                        cursor: pointer;
                    }
                    .phone {
                        font-family: 'Open Sans';
                        font-weight: bold;
                        text-align: center;
                    }
                    .phone-icon {
                        position: relative;
                        top: 4px;
                        margin-right: 8px;
                    }
                    @media screen and (max-width: 768px) {
                        .Header {
                            display: grid;
                            grid-template-columns: 1fr;
                            justify-content: center;
                            align-items: center;
                            height: auto;
                        }
                        .phone {
                            margin: 16px 0;
                        }
                        .logo {
                            margin-top: 16px;
                        }
                        .menu {
                            position: absolute;
                            top: 32px;
                            right: 24px;
                        }
                        .menu .menu-icon {
                            width: 24px;
                            right: 24px;
                        }
                        .servicio {
                            width: 100%;
                            box-shadow: 0px 0 3px rgba(0,0,0,.4);
                            border-radius: 0;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default Header;