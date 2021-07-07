import React from "react";
import styled from "styled-components";
import CarruselSecondVersion from "./CarruselSecondVersion";
import SliderOfert from "./SliderOfert";
import sliders from "./dataSliders";
import sliders_2 from "../constant/dataSliders_2";
import sliders_3 from "../constant/dataSliders_3";
import useCategoriesAccordion from "../hooks/useCategoriesAccordion";

function CategoriesAccordion({ listCategories }) {
    const { selectCategori, handleCategory } = useCategoriesAccordion();

    return (
        <ContinerCategoriesAccordion>
            <div className="continer">
                <div className="continer2">
                    <div className="continerTextsCategories">
                        <div className="continer">
                            <div className="continer2">
                                {listCategories.map((catg, index) => (
                                    <div
                                        className={`category ${
                                            selectCategori[catg]
                                                ? "isSelectCategory"
                                                : ""
                                        }`}
                                        data-category={`${catg}`}
                                        key={index}
                                        onClick={(e) => handleCategory(e)}
                                    >
                                        <h1 data-category={catg}>{catg}</h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="continerCarrusels">
                        {
                            <CarruselCategorySelected
                                selectCategory={selectCategori}
                            />
                        }
                    </div>
                </div>
            </div>
        </ContinerCategoriesAccordion>
    );
}

function CarruselCategorySelected({ selectCategory }) {
    return (
        <>
            {selectCategory["smartphone"] ? (
                <CarruselCategory slidersCategories={sliders} />
            ) : null}
            {selectCategory["watch"] ? (
                <CarruselCategory slidersCategories={sliders_2} />
            ) : null}
            {selectCategory["laptop"] ? (
                <CarruselCategory slidersCategories={sliders_3} />
            ) : null}
            {selectCategory["tablet"] ? (
                <CarruselCategory slidersCategories={sliders} />
            ) : null}
        </>
    );
}

function CarruselCategory({ slidersCategories }) {
    return (
        <CarruselSecondVersion>
            {slidersCategories.map((elem, index) => (
                <SliderOfert
                    image={elem.image}
                    urlSliderOfert={elem.urlSliderOfert}
                    urlNameProduct={elem.urlNameProduct}
                    textNameProduct={elem.textNameProduct}
                    textPriceProduct={elem.textPriceProduct}
                    textPriceReductionProduct={elem.textPriceReductionProduct}
                    textStriking={elem.textStriking}
                    textViewProduct={elem.textViewProduct}
                    urlViewProduct={elem.urlViewProduct}
                    key={index}
                />
            ))}
        </CarruselSecondVersion>
    );
}
const ContinerCategoriesAccordion = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    border: 1px solid #999;
    margin-bottom: 32px;
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
            justify-content: flex-start;
            align-items: stretch;

            .continerTextsCategories {
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
                        justify-content: flex-start;
                        align-items: stretch;
                        .category {
                            width: 100%;
                            height: 40px;
                            position: relative;
                            background-color: #ddd;
                            border: 1px solid #ccc;
                            cursor: pointer;
                            & > h1 {
                                width: 100%;
                                height: 100%;
                                position: relative;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                color: #111;
                                font-size: 1rem;
                            }
                        }
                        .isSelectCategory {
                            background-color: #aaa;
                        }
                    }
                }
            }

            .continerCarrusels {
                margin: 16px 0;
                width: 100%;
                height: auto;
                position: relative;
            }
        }
    }
`;

export default CategoriesAccordion;
