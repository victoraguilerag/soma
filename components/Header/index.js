import React from 'react'
import LoadingBar from '../LoadingBar'
function Header () {
    return (
        <div className="Header">
            <div className="logo">
                <img className="logo-icon" src="/static/header/logo.png" />
            </div>
            <div className="phone">
                <img className="phone-icon" src="/static/header/phone.svg" />
                +54 9 11 69512868
            </div>
            <div className="menu">
                <img className="menu-icon" src="/static/header/hamburger.svg" />
            </div>
            <style jsx>
                {`
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
                    .menu {
                        display: flex;
                        justify-content: flex-end;
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
                `}
            </style>
        </div>
    )
}

export default Header;