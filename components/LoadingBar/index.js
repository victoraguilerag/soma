import React from 'react'

function LoadingBar () {
    return (
        <div className="LoadingBar">
            <div className="color-1" />
            <div className="color-2" />
            <div className="color-3" />
            <style jsx>
                {`
                    .LoadingBar {
                        width: 100%;
                        height: 3px;

                        grid-column: 1/4;

                        display: flex;
                        grid-template-columns: 1fr 1fr 1fr;
                    }
                    .color-1 {
                        width: 100%;
                        background: #E55D21;
                    }
                    .color-2 {
                        width: 100%;
                        background: #ECAD2D;
                    }
                    .color-3 {
                        width: 100%;
                        background: #0F144C;
                    }
                `}
            </style>
        </div>
    )
}

export default LoadingBar;