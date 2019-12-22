import React from 'react'
import Header from '../Header'
import LoadingBar from '../LoadingBar'
function Layout (props) {
    return (
        <div className="Layout">
            <Header />
            <LoadingBar />
            {props.children}
            <style jsx>
                {`
                    :global(body) {
                        margin: 0;
                        padding: 0;
                        overflow-x: hidden;
                    }
                    :global(body.sticky) {
                        padding-top: 127px;
                    }
                    @import url('https://fonts.googleapis.com/css?family=Lato|Open+Sans&display=swap');
                `}
            </style>
        </div>
    )
}

export default Layout;