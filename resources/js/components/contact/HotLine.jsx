import React from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function HotLine({ title, title_number, number, titleEmail, placeholder }) {
    return (
        <ContinerHotLine>
            <div className="continer">
                <div className="continer2">
                    <h1 className="title">{title}</h1>
                    <h2 className="subTitle">{title_number}</h2>
                    <h3 className="subTitle_2">{number}</h3>
                    <div className="continerEmailSend">
                        <div className="continer">
                            <div className="continer2">
                                <h2 className="title">{titleEmail}</h2>
                                <div className="continerEmail">
                                    <div className="continer">
                                        <div className="continer2">
                                            <input
                                                type="text"
                                                placeholder={placeholder}
                                            />
                                            <button>
                                                <ArrowForwardIosIcon className="iconArrow" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContinerHotLine>
    );
}

const ContinerHotLine = styled.div`
    min-width: 290px;
    flex-basis: 33.33%;
    height: auto;
    position: relative;
    margin: 0 8px 8px 0;
    & > .continer {
        width: 100%;
        height: auto;
        position: relative;
        & > .continer2 {
            width: 100%;
            height: auto;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            & > .title {
                font-size: 1.2rem;
                text-align: center;
                color: #000;
                text-transform: uppercase;
                padding: 16px 0;
            }
            & > .subTitle {
                font-size: 1rem;
                text-align: center;
                color: #444;
                margin: 8px 0;
                &::first-letter {
                    text-transform: uppercase;
                }
            }
            & > .subTitle_2 {
                font-size: 1.5rem;
                text-align: center;
                color: #f00;
            }
            .continerEmailSend {
                height: auto;
                position: relative;

                & > .continer {
                    width: 100%;
                    height: auto;
                    position: relative;
                    padding: 16px 0;
                    & > .continer2 {
                        width: 100%;
                        height: auto;
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        align-items: stretch;
                        justify-content: flex-start;
                        & > .title {
                            font-size: 1.2rem;
                            color: #000;
                            text-transform: uppercase;
                            padding: 32px 0;
                            text-align: center;
                        }
                        & > .continerEmail {
                            height: auto;
                            position: relative;
                            & > .continer {
                                width: 100%;
                                height: auto;
                                position: relative;
                                & > .continer2 {
                                    width: 100%;
                                    height: 40px;
                                    position: relative;
                                    display: flex;
                                    justify-content: flex-start;
                                    align-items: center;
                                    & > input[type="text"] {
                                        height: 100%;
                                        flex-basis: 80%;
                                        font-size: 1rem;
                                        outline: none;
                                        background-color: #fff;
                                        color: #000;
                                        border: 1px solid #0004;
                                        padding: 4px 0 4px 4px;
                                        &::placeholder {
                                            font-size: 1.2rem;
                                            color: #aaa;
                                        }
                                    }
                                    & > button {
                                        border: none;
                                        height: 100%;
                                        flex-basis: 20%;
                                        background-color: #f00;
                                        & > .iconArrow {
                                            width: 100%;
                                            height: 100%;
                                            color: #fff;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default HotLine;
