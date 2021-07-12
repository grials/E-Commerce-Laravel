import React from "react";
import styled from "styled-components";

function SliderOfert({
    image,
    urlSliderOfert,
    urlNameProduct,
    textNameProduct,
    textPriceProduct,
    textPriceReductionProduct,
    textStriking,
    textViewProduct,
    urlViewProduct,
}) {
    return (
        <ContinerSliderOfert>
            <div className="continer">
                <div className="continer2">
                    <div className="continerDescriptionProduct">
                        <figure className="continerImage">
                            <img src={image} alt="" />
                            <div className="textStriking">
                                {textStriking ? (
                                    <span>{textStriking}</span>
                                ) : null}
                            </div>
                            <a
                                href={urlViewProduct}
                                className="textViewProduct"
                            >
                                {textViewProduct}
                            </a>
                        </figure>
                        <div className="continerNameProduct">
                            <a href={urlNameProduct}>
                                <h1>{textNameProduct}</h1>
                            </a>
                        </div>
                        <div className="continerPrice">
                            <div className="continer">
                                <div className="continer2">
                                    <span
                                        className={`textPrice ${
                                            textPriceReductionProduct
                                                ? "ofertPrice"
                                                : ""
                                        }`}
                                    >
                                        {textPriceProduct}
                                    </span>
                                    {textPriceReductionProduct && (
                                        <span className="textPriceOfert">
                                            {textPriceReductionProduct}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContinerSliderOfert>
    );
}

const ContinerSliderOfert = styled.div`
    width: 100%;
    height: 400px;
    position: relative;
    cursor: pointer;
    & > .continer {
        width: 100%;
        height: 100%;
        position: relative;
        & > .continer2 {
            width: 100%;
            height: 100%;
            position: relative;
            .continerDescriptionProduct {
                width: 100%;
                height: 100%;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: stretch;
                border: 1px solid #fff;
                &:hover {
                    border-color: #ffa67b;
                    .continerImage {
                        img {
                            transform: scale(1.09);
                        }
                    }
                }
                .continerImage {
                    /* flex-basis: 80%; */
                    height: 80%;
                    position: relative;
                    width: 100%;
                    padding: 16px;
                    img {
                        transition: all 0.5s ease-in-out;
                        width: 100%;
                        height: 100%;
                    }
                    .textStriking {
                        position: absolute;
                        top: 5%;
                        left: 5%;
                        span {
                            position: relative;
                            width: 100px;
                            height: 15px;
                            background-color: #f00;
                            font-size: 0.8rem;
                            color: #fff;
                            padding: 4px 8px;
                            &::before {
                                position: absolute;
                                content: "";
                                top: 100%;
                                left: calc(50% - 5px);
                                border-top: 5px solid #f00;
                                border-right: 5px solid #fff;
                                border-bottom: 5px solid #fff;
                                border-left: 5px solid #fff;
                            }
                        }
                    }
                    .textViewProduct {
                        position: absolute;
                        bottom: 0;
                        right: 5%;
                        padding: 8px 8px;
                        text-decoration: none;
                        background-color: #000;
                        color: #fff;
                        font-size: 1rem;
                        text-align: center;
                        transition: all 0.3s ease-in-out;
                        &::first-letter {
                            text-transform: uppercase;
                        }
                        &:hover {
                            background-color: #f00;
                        }
                    }
                }
                .continerNameProduct {
                    flex-basis: 10%;
                    width: 100%;
                    a {
                        width: 100%;
                        height: 100%;
                        text-decoration: none;
                        color: #000;
                        &:hover {
                            color: #f00;
                        }
                        h1 {
                            padding-left: 8px;
                            width: 100%;
                            height: 100%;
                            font-size: 0.8rem;
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                        }
                    }
                }
                .continerPrice {
                    flex-basis: 10%;
                    width: 100%;
                    position: relative;
                    & > .continer {
                        width: 100%;
                        height: 100%;
                        position: relative;
                        padding-left: 8px;
                        padding-bottom: 16px;
                        & > .continer2 {
                            width: 100%;
                            height: 100%;
                            position: relative;
                            font-size: 1.2rem;
                            display: flex;
                            align-items: center;
                            span {
                                font-size: 1rem;
                            }
                            .textPrice {
                                margin-right: 8px;
                                color: #000;
                            }
                            .ofertPrice {
                                color: #f00;
                            }
                            .textPriceOfert {
                                color: #999;
                                text-decoration: line-through;
                            }
                        }
                    }
                }
            }
        }
    }
    @media (min-width: 550px) {
        width: 220px;
    }
`;

export default SliderOfert;
