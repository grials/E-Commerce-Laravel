import React from "react";
import styled from "styled-components";
import useBarMenu from "../hooks/useBarMenu";
import CloseIcon from "@material-ui/icons/Close";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"; // rieght
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"; // left
import HomeIcon from "@material-ui/icons/Home";

function BarMenu({ isMovile }) {
    const {
        dataMenu,
        menuIsActive,
        selectOption,
        handleMenu,
        handleMenuSecundaries,
        isActiveBarMenu,
        handleSelectOptionBarMenu,
    } = useBarMenu();

    return (
        <ContinerBarMenu
            isActive={menuIsActive}
            isActiveBarMenu={isActiveBarMenu()}
        >
            <div className="continer">
                <div className="continer2">
                    <div className="continerHeader">
                        <div className="continer">
                            <div className="continer2">
                                {isActiveBarMenu() ? (
                                    <div
                                        className="closeMenuSecundarie"
                                        onClick={handleMenuSecundaries}
                                    >
                                        <ArrowBackIosIcon />
                                    </div>
                                ) : null}
                                {selectOption.option_1 ? (
                                    <h1 className="title">
                                        {dataMenu.title_1}
                                    </h1>
                                ) : null}
                                {selectOption.option_2 ? (
                                    <h1 className="title">
                                        {dataMenu.title_2}
                                    </h1>
                                ) : null}
                                {isMovile ? (
                                    <div
                                        className="closeMainMenu"
                                        onClick={() => handleMenu(false)}
                                    >
                                        <CloseIcon />
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="continerSelection">
                        <div className="continer">
                            <div className="continer2">
                                {dataMenu.options.map((option, index) => (
                                    <SelectOption
                                        optionTitle={option}
                                        key={index}
                                        option={index + 1}
                                        border={
                                            (index + 1) % 2 === 0 ? true : false
                                        }
                                        setSelect={handleSelectOptionBarMenu}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="continerBarMenus">
                        <div className="continer">
                            <div className="continer2">
                                <BarMenuInfo
                                    options={dataMenu.menu_1_options}
                                    isSelect={selectOption.option_1}
                                />
                                <BarMainMenu
                                    options={dataMenu.menu_2_options}
                                    isSelect={selectOption.option_2}
                                />
                                <div className="ocult"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContinerBarMenu>
    );
}

function SelectOption({ optionTitle, option, setSelect, border }) {
    return (
        <ContinerSelectOption border={border}>
            <div className="continer">
                <div className="continer2">
                    <h2 className="title">{optionTitle}</h2>
                    <div
                        className="closeArrow"
                        onClick={() => setSelect(option)}
                    >
                        <ArrowForwardIosIcon />
                    </div>
                </div>
            </div>
        </ContinerSelectOption>
    );
}

function BarMenuInfo({ options, isSelect }) {
    return (
        <ContinerBarMenuInfo isSelect={isSelect}>
            <div className="continer">
                <div className="continer2">
                    {options.map((option, index) => (
                        <a
                            className={`${(index + 1) % 2 ? "border" : ""}`}
                            href={option.href}
                            key={index}
                        >
                            <h2>{option.title}</h2>
                            {option.alert && <span>{option.alert}</span>}
                        </a>
                    ))}
                </div>
            </div>
        </ContinerBarMenuInfo>
    );
}

function BarMainMenu({ options, isSelect }) {
    return (
        <ContinerBarMainMenu isSelect={isSelect}>
            <div className="continer">
                <div className="continer2">
                    <a href="/">
                        <HomeIcon className="icon" />
                    </a>
                    {options.map((option, index) => (
                        <a
                            className={`${(index + 1) % 2 ? "border" : ""}`}
                            href={option.href}
                            key={index}
                        >
                            <h2>{option.title}</h2>
                            {option.alert && <span>{option.alert}</span>}
                        </a>
                    ))}
                </div>
            </div>
        </ContinerBarMainMenu>
    );
}

const ContinerBarMenu = styled.div`
    min-height: 100vh;
    width: 100%;
    height: auto;
    position: fixed;
    overflow: hidden;
    top: 0;
    right: ${(props) => (props.isActive ? "0" : "100%")};
    background-color: #fff;
    z-index: 1500;
    overflow-y: hidden;
    transition: right 0.5s ease-in-out;
    & > .continer {
        min-height: 100vh;
        width: 100%;
        height: auto;
        position: relative;
        & > .continer2 {
            min-height: 100vh;
            width: 100%;
            height: auto;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: stretch;
            & > .continerHeader {
                width: 100%;
                height: 40px;
                position: relative;
                border-bottom: 1px solid #aaa;
                & > .continer {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    & > .continer2 {
                        width: 100%;
                        height: 100%;
                        position: relative;
                        display: grid;
                        grid-template-columns: 10% 80% 10%;
                        grid-template-rows: 100%;
                        grid-template-areas: "closeMenuSecundarie title closeMainMenu";
                        & > .closeMenuSecundarie {
                            grid-area: closeMenuSecundarie;
                            position: relative;
                            height: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 32px;
                            /* border-bottom: 1px solid #aaa; */
                            border-right: 1px solid #aaa;
                            border-top: 1px solid #aaa;
                            color: #000;
                            cursor: pointer;
                            transition: color 0.3s ease-in-out;
                            &:hover {
                                color: #f00;
                            }
                        }
                        & > .title {
                            grid-area: title;
                            text-align: center;
                            font-size: 1.2rem;
                            color: #000;
                            padding: 8px 0;
                            text-transform: uppercase;
                        }
                        & > .closeMainMenu {
                            grid-area: closeMainMenu;
                            position: relative;
                            height: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 32px;
                            /* border-bottom: 1px solid #aaa; */
                            border-left: 1px solid #aaa;
                            border-top: 1px solid #aaa;
                            cursor: pointer;
                            color: #000;
                            &:hover {
                                color: #f00;
                            }
                        }
                    }
                }
            }
            & > .continerSelection {
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
                    }
                }
            }
            & > .continerBarMenus {
                width: 100%;
                height: auto;
                position: absolute;
                background-color: #fff;
                transition: left 0.3s ease-in-out;
                top: 40px;
                left: ${(props) => (props.isActiveBarMenu ? "0" : "100%")};
                & > .continer {
                    width: 100%;
                    height: auto;
                    position: relative;
                    & > .continer2 {
                        width: 100%;
                        height: auto;
                        position: relative;
                        & > .ocult {
                            width: 100%;
                            height: 100vh;
                            background-color: #fff;
                            position: relative;
                            z-index: 950;
                        }
                    }
                }
            }
        }
    }
    @media (min-width: 550px) and (max-width: 1050px) {
        width: 350px;
        left: ${(props) => (props.isActive ? "0" : "-350px")};
        transition: left 0.5s ease-in-out;
    }
`;

const ContinerSelectOption = styled.div`
    height: 40px;
    position: relative;
    border-top: ${(props) => (props.border ? "1px solid #aaa" : "none")};
    border-bottom: ${(props) => (props.border ? "1px solid #aaa" : "none")};
    & > .continer {
        width: 100%;
        height: 100%;
        position: relative;
        & > .continer2 {
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            align-items: stretch;
            justify-content: flex-start;
            & > .title {
                flex-basis: 90%;
                text-align: center;
                color: #000;
                font-size: 1rem;
                padding: 8px 0;
                &::first-letter {
                    text-transform: uppercase;
                }
            }
            & > .closeArrow {
                flex-basis: 10%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #000;
                &:hover {
                    color: #00aa00;
                }
            }
        }
    }
`;

const ContinerBarMainMenu = styled.div`
    min-height: calc(100vh - 40px);
    width: 100%;
    height: auto;
    position: absolute;
    z-index: ${(props) => (props.isSelect ? "1000" : "900")};
    top: 0;
    left: 0;
    background-color: #fff;
    & > .continer {
        width: 100%;
        height: auto;
        position: relative;
        & > .continer2 {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            & > a {
                width: 100%;
                height: 40px;
                display: flex;
                justify-content: flex-start;
                cursor: pointer;
                padding: 8px 0 8px 8px;
                text-decoration: none;
                & > .icon {
                    color: #000;
                }
                & > h2 {
                    text-align: center;
                    font-size: 1rem;
                    text-transform: uppercase;
                    margin-right: 8px;
                    color: #000;
                }

                &:hover {
                    background-color: #ccc;
                    & > h2 {
                        color: #fff;
                    }
                    & .icon {
                        color: #fff;
                    }
                }
            }
            & > .border {
                border-bottom: 1px solid #aaa;
                border-top: 1px solid #aaa;
            }
        }
    }
`;

const ContinerBarMenuInfo = styled.div`
    min-height: calc(100vh - 40px);
    width: 100%;
    height: auto;
    position: absolute;
    z-index: ${(props) => (props.isSelect ? "1000" : "900")};
    top: 0;
    left: 0;
    background-color: #fff;
    & > .continer {
        width: 100%;
        height: auto;
        position: relative;
        & > .continer2 {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            & > a {
                width: 100%;
                height: 40px;
                display: flex;
                justify-content: flex-start;
                cursor: pointer;
                padding: 8px 0 8px 8px;
                text-decoration: none;
                & > h2 {
                    text-align: center;
                    font-size: 1rem;
                    text-transform: uppercase;
                    margin-right: 8px;
                    color: #000;
                }
                & > span {
                    font-size: 0.5rem;
                    align-self: flex-start;
                    color: #fff;
                    background-color: #f59524;
                    text-transform: uppercase;
                    padding: 2.5px 6px;
                }
                &:hover {
                    background-color: #ccc;
                    & > h2 {
                        color: #fff;
                    }
                }
            }
            & > .border {
                border-bottom: 1px solid #aaa;
                border-top: 1px solid #aaa;
            }
        }
    }
`;

export default BarMenu;
