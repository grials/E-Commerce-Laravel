import React from "react";
import styled from "styled-components";

function SliderSold({ image, title, subtitle, textPrice, price, textButton }) {
    return (
        <ContinerSlider>
            <div className="continerImage">
                <img src={image} alt="" />
            </div>
            <div className="card">
                <div className="continer_card">
                    <div className="continerText">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                        <div className="continerPrice">
                            <span className="textPrice">{textPrice}</span>
                            <span className="price">{price}</span>
                        </div>
                        <button>{textButton}</button>
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
            justify-content: center;
            align-items: center;
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
                h1 {
                    font-size: 1.4rem;
                    text-transform: uppercase;
                    color: #fff;
                    margin-bottom: 4px;
                }
                p {
                    font-size: 1rem;
                    text-transform: lowercase;
                    color: #fff;
                    margin-bottom: 4px;
                }
                .continerPrice {
                    width: 100%;
                    height: auto;
                    position: relative;
                    .textPrice {
                        font-size: 0.8rem;
                        text-transform: uppercase;
                        color: #0f0;
                    }
                    .price {
                        font-size: 1rem;
                        text-transform: uppercase;
                        color: #f00;
                    }
                }
                & > button {
                    outline: none;
                    border: none;
                    height: 40px;
                    width: 120px;
                    color: #fff;
                    background-color: #f00;
                    cursor: pointer;
                }
            }
        }
    }
`;

export default SliderSold;
