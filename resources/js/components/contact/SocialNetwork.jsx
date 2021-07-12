import React from "react";
import styled from "styled-components";

function SocialNetwork({ title, icons_social }) {
    return (
        <ContinerSocialNetwork>
            <div className="continer">
                <div className="continer2">
                    <h1 className="title">{title}</h1>
                    <div className="continerIconsSocial">
                        {icons_social.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <a href={item.href} key={index}>
                                    <Icon className="icon" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </ContinerSocialNetwork>
    );
}

const ContinerSocialNetwork = styled.div`
    min-width: 290px;
    max-width: 500px;
    flex-basis: 33.33%;
    height: auto;
    position: relative;
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
            & > .title {
                font-size: 1.2rem;
                color: #000;
                padding: 16px 0;
                text-transform: uppercase;
                text-align: center;
            }
            & > .continerIconsSocial {
                height: 40px;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                & > a {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-color: #888;
                    transition: all 0.3s ease-in-out;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    &:not(:last-child) {
                        margin-right: 8px;
                    }
                    &:hover {
                        background-color: #f00;
                        & > .icon {
                            color: #fff;
                        }
                    }
                    & > .icon {
                        color: #222;
                        font-size: 2rem;
                    }
                }
            }
        }
    }
`;

export default SocialNetwork;
