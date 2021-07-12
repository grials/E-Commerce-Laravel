import React from "react";
import styled from "styled-components";
import CategoriesAccordion from "./CategoriesAccordion";

function ProductCategories({ title, image, urlProductCategories }) {
    return (
        <ContinerProductCategories>
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
                            <a href={urlProductCategories}>
                                <img src={image} alt="" />
                            </a>
                        </figure>
                    </div>
                    <CategoriesAccordion
                        listCategories={[
                            "smartphone",
                            "watch",
                            "laptop",
                            "tablet",
                        ]}
                    />
                </div>
            </div>
        </ContinerProductCategories>
    );
}

const ContinerProductCategories = styled.div`
    margin-top: 32px;
    width: 100%;
    height: auto;
    position: relative;
    & > .continer {
        width: 100%;
        height: auto;
        position: relative;
        padding: 0 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        & > .continer2 {
            max-width: 1100px;
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
        }
    }
    @media (min-width: 550px) and (max-width: 850px) {
        & > .continer {
            & > .continer2 {
                & > .continerImage {
                    height: 120px;
                }
            }
        }
    }
    @media (min-width: 850px) {
        & > .continer {
            & > .continer2 {
                & > .continerImage {
                    height: 200px;
                }
            }
        }
    }
`;

export default ProductCategories;
