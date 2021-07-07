import React from "react";
import styled from "styled-components";

function Footer({ copyright, subTitle, linksFooter }) {
    return (
        <ContinerFooter>
            <div className="continer">
                <div className="continer2">
                    <div className="continerTitles">
                        <h1 className="copyright">{copyright}</h1>
                        <h2 className="subtitle">{subTitle}</h2>
                    </div>
                    <div className="continerLinksFooter">
                        {linksFooter.map((link, index) => (
                            <a className="link" href={link.href} key={index}>
                                {link.title.split(" ").map((item, index) => (
                                    <span key={index}>{item}</span>
                                ))}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </ContinerFooter>
    );
}

const ContinerFooter = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    background-color: #222;
    & > .continer {
        width: 100%;
        height: auto;
        position: relative;
        padding: 16px;
        & > .continer2 {
            width: 100%;
            height: auto;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            & > .continerTitles {
                width: 100%;
                height: auto;
                position: relative;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                align-content: center;
                margin-bottom: 16px;
                .copyright {
                    font-size: 1.2rem;
                    color: #ddd;
                    text-align: center;
                    margin-right: 8px;
                }
                & > .subtitle {
                    font-size: 1rem;
                    color: #ddd;
                    text-align: center;
                }
            }
            .continerLinksFooter {
                width: 100%;
                height: auto;
                position: relative;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                align-content: center;
                & > .link {
                    font-size: 1rem;
                    color: #aaa;
                    text-decoration: none;
                    margin-right: 8px;
                    margin-bottom: 8px;
                    &:hover {
                        & > span {
                            color: #f00;
                        }
                    }
                    & > span {
                        margin-right: 4px;
                        &::first-letter {
                            text-transform: uppercase;
                        }
                    }
                }
            }
        }
    }
`;

export default Footer;
