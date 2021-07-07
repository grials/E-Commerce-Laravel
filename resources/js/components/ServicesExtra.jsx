import React from "react";
import styled from "styled-components";

function ServicesExtra({ listServices }) {
    return (
        <ContinerServicesExtra>
            <div className="continer">
                <div className="continer2">
                    {listServices.map((service, index) => (
                        <CardService
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </ContinerServicesExtra>
    );
}

function CardService({ title, description, icon: Icon }) {
    return (
        <ContinerCardService>
            <div className="continer">
                <div className="continer2">
                    <div className="continerIconCard">
                        <Icon className="icon" />
                    </div>
                    <h1 className="titleCard">{title}</h1>
                    <p className="descriptionCard">{description}</p>
                </div>
            </div>
        </ContinerCardService>
    );
}

const ContinerServicesExtra = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 16px;
    position: relative;
    background-color: #f00;
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
            justify-content: flex-start;
            align-items: stretch;
        }
    }
`;

const ContinerCardService = styled.div`
    width: 100%;
    height: 150px;
    position: relative;
    border: 1px solid #999;
    margin-bottom: 16px;
    & > .continer {
        width: 100%;
        height: 100%;
        position: relative;
        & > .continer2 {
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: stretch;
            & > .continerIconCard {
                width: 100%;
                height: auto;
                margin: 16px 0 8px 0;
                display: flex;
                justify-content: center;
                align-items: center;
                & > .icon {
                    font-size: 32px;
                    color: #fff;
                }
            }
            & > .titleCard {
                width: 100%;
                height: auto;
                font-size: 1.2rem;
                text-transform: uppercase;
                color: #fff;
                padding: 8px 0;
                text-align: center;
            }
            & > .descriptionCard {
                width: 100%;
                height: auto;
                font-size: 0.8rem;
                color: #bbb;
                text-align: center;
            }
        }
    }
`;

export default ServicesExtra;
