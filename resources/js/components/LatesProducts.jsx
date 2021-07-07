import React from "react";
import styled from "styled-components";
import CarruselSecondVersion from "./CarruselSecondVersion";
import SliderOfert from "./SliderOfert";
import imageCarrusel_1 from "../../images/products/digital_01.jpg";
import imageCarrusel_2 from "../../images/products/digital_02.jpg";
import imageCarrusel_3 from "../../images/products/digital_03.jpg";
import imageCarrusel_4 from "../../images/products/digital_04.jpg";
import imageCarrusel_5 from "../../images/products/digital_05.jpg";
import imageCarrusel_6 from "../../images/products/digital_06.jpg";
import imageCarrusel_7 from "../../images/products/digital_07.jpg";
import imageCarrusel_8 from "../../images/products/digital_08.jpg";

const sliders = [
    {
        image: imageCarrusel_1,
        urlSliderOfert: "#",
        urlNameProduct: "#",
        textNameProduct:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, enim!",
        textPriceProduct: "$250.00",
        textPriceReductionProduct: "",
        textStriking: "sale",
        textViewProduct: "quick view",
        urlViewProduct: "#",
    },
    {
        image: imageCarrusel_2,
        urlSliderOfert: "#",
        urlNameProduct: "#",
        textNameProduct:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, enim!",
        textPriceProduct: "$450.00",
        textPriceReductionProduct: "$550.00",
        textStriking: "sale",
        textViewProduct: "quick view",
        urlViewProduct: "#",
    },
    {
        image: imageCarrusel_3,
        urlSliderOfert: "#",
        urlNameProduct: "#",
        textNameProduct:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, enim!",
        textPriceProduct: "$150.00",
        textPriceReductionProduct: "",
        textStriking: "sale",
        textViewProduct: "quick view",
        urlViewProduct: "#",
    },
    {
        image: imageCarrusel_4,
        urlSliderOfert: "#",
        urlNameProduct: "#",
        textNameProduct:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, enim!",
        textPriceProduct: "$1250.00",
        textPriceReductionProduct: "$1650.00",
        textStriking: "sale",
        textViewProduct: "quick view",
        urlViewProduct: "#",
    },
    {
        image: imageCarrusel_5,
        urlSliderOfert: "#",
        urlNameProduct: "#",
        textNameProduct:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, enim!",
        textPriceProduct: "$550.00",
        textPriceReductionProduct: "",
        textStriking: "sale",
        textViewProduct: "quick view",
        urlViewProduct: "#",
    },
    {
        image: imageCarrusel_6,
        urlSliderOfert: "#",
        urlNameProduct: "#",
        textNameProduct:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, enim!",
        textPriceProduct: "$250.00",
        textPriceReductionProduct: "",
        textStriking: "sale",
        textViewProduct: "quick view",
        urlViewProduct: "#",
    },
    {
        image: imageCarrusel_7,
        urlSliderOfert: "#",
        urlNameProduct: "#",
        textNameProduct:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, enim!",
        textPriceProduct: "$250.00",
        textPriceReductionProduct: "",
        textStriking: "sale",
        textViewProduct: "quick view",
        urlViewProduct: "#",
    },
    {
        image: imageCarrusel_8,
        urlSliderOfert: "#",
        urlNameProduct: "#",
        textNameProduct:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, enim!",
        textPriceProduct: "$250.00",
        textPriceReductionProduct: "",
        textStriking: "sale",
        textViewProduct: "quick view",
        urlViewProduct: "#",
    },
];

function LatesProducts({ title, image, urlLatesProduct }) {
    return (
        <ContinerLatesProduct>
            <div className="continer">
                <div className="continer2">
                    <div className="continerTitle">
                        <div className="continer">
                            <div className="continer2">
                                <h1>{title}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="continerImage">
                        <figure>
                            <a href={urlLatesProduct}>
                                <img src={image} alt="" />
                            </a>
                        </figure>
                    </div>
                    <div className="continerCarrusel">
                        <CarruselSecondVersion>
                            {sliders.map((elem, index) => (
                                <SliderOfert
                                    key={index}
                                    image={elem.image}
                                    urlSliderOfert={elem.urlSliderOfert}
                                    urlNameProduct={elem.urlNameProduct}
                                    textNameProduct={elem.textNameProduct}
                                    textPriceProduct={elem.textPriceProduct}
                                    textPriceReductionProduct={
                                        elem.textPriceReductionProduct
                                    }
                                    textStriking={elem.textStriking}
                                    textViewProduct={elem.textViewProduct}
                                    urlViewProduct={elem.urlViewProduct}
                                />
                            ))}
                        </CarruselSecondVersion>
                    </div>
                </div>
            </div>
        </ContinerLatesProduct>
    );
}

const ContinerLatesProduct = styled.div`
    margin-top: 32px;
    width: 100%;
    height: auto;
    position: relative;
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
            .continerTitle {
                height: 40px;
                display: flex;
                background-color: #f00;
                & > .continer {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    & > .continer2 {
                        width: 100%;
                        height: 100%;
                        position: relative;
                        & > h1 {
                            text-transform: uppercase;
                            width: 100%;
                            height: 100%;
                            padding: 0 16px;
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            font-size: 1.2rem;
                            color: #fff;
                        }
                    }
                }
            }
            .continerImage {
                height: 60px;
                position: relative;
                margin-bottom: 16px;
                & > figure {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    &::before,
                    &::after {
                        content: "";
                        position: absolute;
                        height: 100%;
                        width: 0;
                        background-color: #9995;
                        top: 0;
                        pointer-events: none;
                        transition: all 0.3s ease-in-out;
                    }
                    &::before {
                        left: 0;
                    }
                    &::after {
                        right: 0;
                    }
                    &:hover {
                        &::before,
                        &::after {
                            width: 50%;
                        }
                    }
                    & > a {
                        width: 100%;
                        height: 100%;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
            .continerCarrusel {
                width: 100%;
                height: auto;
                position: relative;
            }
        }
    }
`;

export default LatesProducts;
