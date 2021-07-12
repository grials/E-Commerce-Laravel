import React from "react";
import styled from "styled-components";

function DataContact({ title_1, content_1, title_2, content_2 }) {
    return (
        <ContinerDataContact>
            <div className="continer">
                <div className="continer2">
                    <CardContentData title={title_1} content={content_1} />
                    <CardContentData title={title_2} content={content_2} />
                </div>
            </div>
        </ContinerDataContact>
    );
}

function CardContentData({ title, content }) {
    return (
        <ContinerCardContentData>
            <div className="continer">
                <div className="continer2">
                    <h1 className="title">{title}</h1>
                    <div className="continerData">
                        {content.map((item, index) => (
                            <a href={item.href} key={index}>
                                <span>{item.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </ContinerCardContentData>
    );
}

const ContinerDataContact = styled.div`
    min-width: 290px;
    max-width: 500px;
    flex-basis: 33.33%;
    height: auto;
    position: relative;
    margin: 32px 0;
    & > .continer {
        width: 100%;
        height: auto;
        position: relative;
        & > .continer2 {
            width: 100%;
            height: auto;
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            flex-wrap: nowrap;
        }
    }
`;

const ContinerCardContentData = styled.div`
    flex-basis: 50%;
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
                color: #000;
                text-align: center;
                text-transform: uppercase;
                padding: 8px 0;
            }

            & > .continerData {
                height: auto;
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: stretch;
                justify-content: center;
                & > a {
                    text-decoration: none;
                    padding: 4px;
                    text-align: center;
                    font-size: 1rem;
                    color: #444;
                    transition: all 0.3s ease-in-out;
                    &:hover {
                        color: #f00;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
`;

export default DataContact;
