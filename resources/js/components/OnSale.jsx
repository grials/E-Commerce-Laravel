import React from "react";
import styled from "styled-components";
import TimesOferts from "./TimesOferts";
import CarruselSecondVersion from "./CarruselSecondVersion";
import SliderOfert from "./SliderOfert";
import sliders from "./dataSliders";

function OnSale({ title, textDays, textHors, textMin, textSec }) {
    return (
        <ContinerOnSale>
            <div className="continer">
                <div className="continer2">
                    <div className="continerTitle">
                        <div className="continer_continerTitle">
                            <div className="continer2_continerTitle">
                                <h1>{title}</h1>
                            </div>
                        </div>
                    </div>
                    <TimesOferts
                        textDays={textDays}
                        textHors={textHors}
                        textMin={textMin}
                        textSec={textSec}
                    />
                    <div className="continerCarrusel">
                        <CarruselSecondVersion>
                            {sliders.map((elem, index) => (
                                <SliderOfert
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
                                    key={index}
                                />
                            ))}
                        </CarruselSecondVersion>
                    </div>
                </div>
            </div>
        </ContinerOnSale>
    );
}

const ContinerOnSale = styled.div`
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
            & > .continerTitle {
                height: 40px;
                width: 100%;
                position: relative;
                background-color: #f00;
                .continer_continerTitle {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    .continer2_continerTitle {
                        width: 100%;
                        height: 100%;
                        position: relative;
                        h1 {
                            width: 100%;
                            height: 100%;
                            position: relative;
                            display: flex;
                            align-items: center;
                            justify-content: flex-start;
                            padding: 0 16px;
                            color: #fff;
                            font-size: 1.2rem;
                        }
                    }
                }
            }
            & > .continerCarrusel {
                width: 100%;
                height: auto;
                position: relative;
            }
        }
    }
`;

export default OnSale;
