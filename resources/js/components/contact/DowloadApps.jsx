import React from "react";
import styled from "styled-components";

function DowloadApps({ title, icons_apps }) {
    return (
        <ContinerDownloadApps>
            <div className="continer">
                <div className="continer2">
                    <h1 className="title">{title}</h1>
                    <div className="continerIconsApp">
                        {icons_apps.map((item, index) => (
                            <a href={item.href} key={index}>
                                <img src={item.icon} alt="#" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </ContinerDownloadApps>
    );
}

const ContinerDownloadApps = styled.div`
    min-width: 290px;
    max-width: 500px;
    flex-basis: 33.33%;
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
            & > .title {
                font-size: 1.2rem;
                text-align: center;
                text-transform: uppercase;
                color: #111;
                padding: 16px 0;
            }
            & > .continerIconsApp {
                height: 50px;
                position: relative;
                display: flex;
                justify-content: space-between;
                align-items: center;
                & > a {
                    flex-basis: 45%;
                    height: 100%;
                    border: 2px solid #fff;
                    background-color: #fff;
                    border-radius: 15px;
                    transition: all 0.3s ease-in-out;
                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 15px;
                    }
                    &:hover {
                        border-color: #f00;
                        background-color: #f00;
                    }
                }
            }
        }
    }
`;

export default DowloadApps;
