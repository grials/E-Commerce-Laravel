import React from "react";
import styled from "styled-components";

function CardPayments({ title, icons_cards }) {
    return (
        <ContinerCardPayments>
            <div className="continer">
                <div className="continer2">
                    <h1 className="title">{title}</h1>
                    <figure>
                        <img src={icons_cards} alt="" />
                    </figure>
                </div>
            </div>
        </ContinerCardPayments>
    );
}

const ContinerCardPayments = styled.div`
    min-width: 290px;
    max-width: 500px;
    flex-basis: 33.33%;
    height: auto;
    position: relative;
    margin-bottom: 16px;
    & > .continer {
        width: 100%;
        height: auto;
        position: relative;
        padding: 16px 0;
        & > .continer2 {
            width: 100%;
            height: auto;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            & > .title {
                font-size: 1.2rem;
                color: #000;
                padding: 16px;
                text-align: center;
                text-transform: uppercase;
            }
            & > figure {
                height: 40px;
                position: relative;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
        }
    }
`;

export default CardPayments;
