import React, { useRef } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function CarruselSecondVersion({ children }) {
    // console.log("entre", children.length);
    const sliderRef = useRef(null);
    // const intervalRef = useRef(null);
    // const carruselRef = useRef(null);

    const leftFunction = () => {
        const index = sliderRef.current.children.length - 1;

        const lastElement = sliderRef.current.children[index];
        sliderRef.current.insertBefore(
            lastElement,
            sliderRef.current.firstChild
        );
        sliderRef.current.style.transition = "none";
        sliderRef.current.style.transform = `translateX(-${
            100 / children.length
        }%)`;
        setTimeout(() => {
            sliderRef.current.style.transition = "all 0.5s ease-in-out";
            sliderRef.current.style.transform = `translateX(0)`;
        }, 30);
    };

    const rightFunction = () => {
        if (sliderRef.current.children.length > 0) {
            const firstChild = sliderRef.current.children[0];
            sliderRef.current.style.transition = "all 500ms ease-in-out";

            sliderRef.current.style.transform = `translateX(-${
                100 / children.length
            }%)`;

            const finishTransition = () => {
                sliderRef.current.style.transition = "none";
                sliderRef.current.style.transform = "translateX(0)";
                sliderRef.current.appendChild(firstChild);
                sliderRef.current.removeEventListener(
                    "transitionend",
                    finishTransition
                );
            };

            sliderRef.current.addEventListener(
                "transitionend",
                finishTransition
            );
        }
    };

    // useEffect(() => {
    //     const enterCarrusel = () => {
    //         clearInterval(intervalRef.current);
    //     };
    //     const outCarrusel = () => {
    //         intervalRef.current = setInterval(() => {
    //             rightFunction();
    //         }, 2000);
    //     };
    //     intervalRef.current = setInterval(() => {
    //         rightFunction();
    //     }, 2000);

    //     carruselRef.current.addEventListener("mouseenter", enterCarrusel);
    //     carruselRef.current.addEventListener("mouseout", outCarrusel);
    // }, []);

    return (
        <ContinerCarrusel>
            <ShowSlider ref={sliderRef} index={children.length}>
                {children}
            </ShowSlider>
            <ContinerButtons>
                <Button onClick={leftFunction}>
                    <ArrowBackIosIcon />
                </Button>
                <Button right onClick={rightFunction}>
                    <ArrowForwardIosIcon />
                </Button>
            </ContinerButtons>
        </ContinerCarrusel>
    );
}

const ContinerCarrusel = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const ShowSlider = styled.div`
    position: relative;
    height: 100%;
    width: ${(props) => `${props.index * 100}%`};
    display: flex;
    flex-wrap: nowrap;
`;
const ContinerButtons = styled.div`
    position: relative;
    width: 100%;
    height: 40px;
    padding-top: 4px;
    pointer-events: none;
    top: 0;
    left: 0;
`;
const Button = styled.button`
    position: relative;
    width: 50%;
    height: 100%;
    top: 0;
    right: ${(props) => (props.right ? "0" : "")};
    pointer-events: all;
    background-color: #999;
    cursor: pointer;
    border: 1px solid #999;
    outline: none;
    color: #fff;
    &:hover {
        border-color: #f00;
    }
`;

export default CarruselSecondVersion;
