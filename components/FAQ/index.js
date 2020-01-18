import { useState, useEffect } from 'react'

function FAQ ({question, response}) {
    const [active, setActive] = useState(false);

    return (
        <div className={`FAQ ${active ? 'active':'deactive'}`} onClick={() => setActive(!active)}>
            <img className="question-icon" src="/static/faqs/question-icon.svg" />
            <div className="question">
                {question}
            </div>
            <img className="chevron" src="/static/faqs/chevron.svg" />

            <div className={`response ${active ? 'active':'deactive'}`}>
                {response}
            </div>
            <style jsx>
                {`
                    .FAQ {
                        position: relative;
                        bottom: 0;
                        min-height: 60px;
                        box-shadow: 0 1px 5px rgba(0,0,0,.2);
                        border-radius: 8px;
                        display: grid;
                        grid-template-columns: 40px 1fr 40px;
                        align-items: center;
                        padding-left: 24px;
                        cursor: pointer;
                    }
                    .FAQ.deactive {
                        max-height: 60px;
                        transition: .5 height ease;
                    }
                    .question-icon {
                        margin-right: 16px;
                    }
                    .question {
                        display: flex;
                        align-items: center;
                        min-height: 60px;
                        font-family: 'Lato';
                        font-weight: bold;
                    }
                    .chevron {
                    }
                    .response {
                        grid-column: 1/3;
                        padding: 0 32px 24px;
                        font-family: 'Lato';
                    }
                    .response.active {
                        display: flex;
                    }
                    .response.deactive {
                        display: none;
                    }
                    @media screen and (max-width: 768px) {
                        .response.active {
                            padding-left: 0;
                            padding-right: 0;
                        }
                    }                `}
            </style>
        </div>
    )
}

export default FAQ