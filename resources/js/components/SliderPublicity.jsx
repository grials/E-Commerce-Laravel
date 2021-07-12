import React from "react";
import styled from "styled-components";

function SliderPublicity({
    image,
    title,
    subtitle_1,
    subtitle_2,
    subtitle_3,
    textCode,
    code,
}) {
    return (
        <ContinerSlider>
            <div className="continerImage">
                <img src={image} alt="#" />
            </div>
            <div className="card">
                <div className="continer_card">
                    <div className="continerText">
                        <h1 className="title">{title}</h1>
                        <h2 className="subtitle_1">{subtitle_1}</h2>
                        <div className="continerCode">
                            <span className="textCode">{textCode}</span>
                            <span className="code">{code}</span>
                        </div>
                        <h2 className="subtitle_2">{subtitle_2}</h2>
                        <h2 className="subtitle_3">{subtitle_3}</h2>
                    </div>
                </div>
            </div>
        </ContinerSlider>
    );
}

const ContinerSlider = styled.div`
    min-height: 200px;
    position: relative;
    width: 100%;
    height: 100%;
    .continerImage {
        min-height: 200px;
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .card {
        min-height: 200px;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        .continer_card {
            width: 100%;
            height: 100%;
            position: relative;
            padding: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            .continerText {
                max-width: 350px;
                max-height: 180px;
                width: 100%;
                height: 100%;
                padding: 8px;
                position: relative;
                background-color: #9997;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-evenly;
                transition: all 0.3s ease-in-out;
                &:hover {
                    z-index: 100;
                    transform: scale(1.1);
                    background-color: #999;
                }
                .title {
                    font-size: 1rem;
                    text-transform: uppercase;
                    color: #f00;
                    margin-bottom: 4px;
                }
                .subtitle_1 {
                    font-size: 1.2rem;
                    text-transform: lowercase;
                    color: #fff;
                    margin-bottom: 2px;
                    &:first-letter {
                        text-transform: uppercase;
                    }
                }
                .subtitle_2 {
                    font-size: 1.4rem;
                    text-transform: uppercase;
                    color: #111;
                    margin-bottom: 2px;
                }
                .subtitle_3 {
                    font-size: 1.4rem;
                    text-transform: uppercase;
                    color: #555;
                    margin-bottom: 2px;
                }
                .continerCode {
                    width: 80%;
                    height: auto;
                    position: relative;
                    background-color: #111;
                    padding: 6px;
                    .textCode {
                        font-size: 1.2rem;
                        text-transform: uppercase;
                        color: #fff;
                    }
                    .code {
                        font-size: 1.2rem;
                        text-transform: uppercase;
                        color: #fff;
                    }
                }
            }
        }
    }
`;

export default SliderPublicity;
