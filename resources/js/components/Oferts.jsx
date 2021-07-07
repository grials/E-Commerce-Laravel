import React from "react";
import styled from "styled-components";
import OnSale from "./OnSale";
import LatesProducts from "./LatesProducts";
import imageLatestProduct from "../../images/digital-electronic-banner.jpg";

function Oferts({
    titleOnsale,
    titleLatestProduct,
    textDays,
    textHors,
    textMin,
    textSec,
    urlLatesProduct,
}) {
    return (
        <ContinerOferts>
            <div className="continer">
                <div className="continer2">
                    <OnSale
                        title={titleOnsale}
                        textDays={textDays}
                        textHors={textHors}
                        textMin={textMin}
                        textSec={textSec}
                    />
                    <LatesProducts
                        title={titleLatestProduct}
                        image={imageLatestProduct}
                        urlLatesProduct={urlLatesProduct}
                    />
                </div>
            </div>
        </ContinerOferts>
    );
}

const ContinerOferts = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    margin-bottom: 32px;
    & > .continer {
        width: 100%;
        height: auto;
        position: relative;
        padding: 0 16px;
        & > .continer2 {
            width: 100%;
            height: auto;
            position: relative;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: center;
        }
    }
`;

export default Oferts;
