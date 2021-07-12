import React from "react";
import Carrusel from "./Carrusel";
import styled from "styled-components";
import SliderSold from "./SliderSold";
import SliderPublicity from "./SliderPublicity";
import Sliderimag_1 from "../../images/main-slider-1-1.jpg";
import Sliderimag_2 from "../../images/main-slider-1-2.jpg";
import Sliderimag_3 from "../../images/main-slider-1-3.jpg";
import ImageBanner_1 from "../../images/home-1-banner-1.jpg";
import ImageBanner_2 from "../../images/home-1-banner-2.jpg";

function Publicity() {
    return (
        <ContinerPublicity>
            <div className="continer_publicity">
                <div className="continer2_publicity">
                    <div className="continerCarrusel">
                        <Carrusel>
                            <SliderSold
                                image={Sliderimag_1}
                                title={"kid smart watches"}
                                subtitle={
                                    "buy all your product smart for internet"
                                }
                                textPrice={"only price:"}
                                price={"$59.99"}
                                textButton={"shop now"}
                            />
                            <SliderPublicity
                                image={Sliderimag_2}
                                title={"extra 25% off"}
                                subtitle_1={"on online payments"}
                                subtitle_2={"get free"}
                                subtitle_3={"transparent bra straps"}
                                textCode={"use code"}
                                code={"#fa6868"}
                            />
                            <SliderSold
                                image={Sliderimag_3}
                                title={"great range of exclusive"}
                                subtitle={
                                    "furniture packages exclusive furniture packages to suit need"
                                }
                                textPrice={"stating at: "}
                                price={"$225.00"}
                                textButton={"shop now"}
                            />
                        </Carrusel>
                    </div>
                    <div className="continerPublicitiesAloners">
                        <PublicityAloner image={ImageBanner_1} />
                        <PublicityAloner image={ImageBanner_2} />
                    </div>
                </div>
            </div>
        </ContinerPublicity>
    );
}

function PublicityAloner({ image }) {
    return (
        <ContinerPublicityAloner>
            <div className="continer">
                <div className="continer2">
                    <div className="continerImage">
                        <a href="#">
                            <img src={image} alt="" />
                        </a>
                    </div>
                    <div className="animation"></div>
                </div>
            </div>
        </ContinerPublicityAloner>
    );
}

const ContinerPublicityAloner = styled.div`
    max-width: 525px;
    width: 100%;
    height: 100%;
    position: relative;
    margin: 16px 0;
    .continer {
        width: 100%;
        height: 100%;
        position: relative;
        .continer2 {
            width: 100%;
            height: 100%;
            position: relative;
            .continerImage {
                width: 100%;
                height: 100%;
                position: relative;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .animation {
                width: 0;
                height: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                bottom: 50%;
                right: 50%;
                pointer-events: none;
                background-color: #0005;
                transition: all 0.5s ease-in-out;
            }

            &:hover {
                .animation {
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
`;

const ContinerPublicity = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    margin-top: 16px;
    .continer_publicity {
        position: relative;
        width: 100%;
        height: auto;
        padding: 0 16px;
        .continer2_publicity {
            position: relative;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .continerPublicitiesAloners {
                max-width: 1100px;
                width: 100%;
                height: auto;
                position: relative;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-evenly;
                align-items: center;
                align-content: center;
            }
            .continerCarrusel {
                max-width: 1100px;
                width: 100%;
                height: auto;
                position: relative;
            }
        }
    }
`;

export default Publicity;
