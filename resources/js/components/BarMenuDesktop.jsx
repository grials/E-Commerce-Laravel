import React from "react";
import styled from "styled-components";

const infoBar = {
    options_bar_info: [
        { title: "weekly featured", href: "#" },
        { title: "hot sale items", href: "#" },
        { title: "top new items", href: "#" },
        { title: "top selling", href: "#" },
        { title: "top rated items", href: "#" },
    ],
    options_bar_nav: [
        { title: "home", href: "/" },
        { title: "about us", href: "/about" },
        { title: "shop", href: "/shop" },
        { title: "cart", href: "/cart" },
        { title: "checkout", href: "/checkout" },
        { title: "contact us", href: "contact" },
    ],
};

function BarMenuDesktop() {
    return (
        <ContinerBarMenuDesktop>
            <div className="continer">
                <div className="continer2">
                    <BarInfo options={infoBar.options_bar_info} />
                    <BarNav options={infoBar.options_bar_nav} />
                </div>
            </div>
        </ContinerBarMenuDesktop>
    );
}

function BarInfo({ options }) {
    return (
        <ContinerBarInfo>
            <div className="continer">
                <div className="continer2">
                    {options.map((option, index) => (
                        <a
                            className={`${
                                location.pathname === option.href
                                    ? "active"
                                    : ""
                            }`}
                            href={option.href}
                            key={index}
                        >
                            <h1>{option.title}</h1>
                        </a>
                    ))}
                </div>
            </div>
        </ContinerBarInfo>
    );
}

function BarNav({ options }) {
    return (
        <ContinerBarNav>
            <div className="continer">
                <div className="continer2">
                    {options.map((option, index) => (
                        <a
                            className={`${
                                location.pathname === option.href
                                    ? "active"
                                    : ""
                            }`}
                            href={option.href}
                            key={index}
                        >
                            <h1>{option.title}</h1>
                        </a>
                    ))}
                </div>
            </div>
        </ContinerBarNav>
    );
}

const ContinerBarMenuDesktop = styled.div`
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
            justify-content: center;
            align-items: stretch;
        }
    }
`;

const ContinerBarInfo = styled.div`
    height: 40px;
    position: relative;
    background-color: #fff;
    border-top: 1px solid #aaa;
    & > .continer {
        width: 100%;
        height: 100%;
        position: relative;
        padding: 0 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        & > .continer2 {
            max-width: 1200px;
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            justify-content: space-evenly;
            & > a {
                width: auto;
                flex-grow: 1;
                height: 100%;
                text-decoration: none;
                padding: 8px 0;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 0.3s ease-in-out;
                & > h1 {
                    width: 100%;
                    text-align: center;
                    font-size: 1rem;
                    text-transform: uppercase;
                    color: #000;
                    border-right: 1px solid #777;
                    padding: 0 8px;
                    transition: all 0.3s ease-in-out;
                }
                &:hover {
                    background-color: #ddd;
                    & > h1 {
                        color: #00aa00;
                        border-color: #00aa00;
                    }
                }
            }
        }
    }
`;

const ContinerBarNav = styled.div`
    height: 50px;
    width: 100%;
    position: relative;
    background-color: #444;
    & > .continer {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 32px;
        & > .continer2 {
            max-width: 1200px;
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: stretch;
            & > a {
                text-decoration: none;
                border-right: 1px solid #7775;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 0.3s ease-in-out;
                & > h1 {
                    font-size: 1rem;
                    text-transform: uppercase;
                    color: #fff;
                    padding: 8px;
                    transition: all 0.3s ease-in-out;
                }
                &:hover {
                    & > h1 {
                        color: #00ff00;
                    }
                }
            }
            & > .active {
                & > h1 {
                    color: #f00;
                }
            }
        }
    }
`;

export default BarMenuDesktop;
