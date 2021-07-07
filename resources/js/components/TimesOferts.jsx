import React from "react";
import styled from "styled-components";

function TimesOferts({ textDays, textHors, textMin, textSec }) {
    return (
        <ContinerTimesOferts>
            <div className="continer">
                <div className="continer2">
                    <div className="continerClock">
                        <span>
                            <strong className="timeNum">{"00"}</strong>
                            <strong className="timeText">{textDays}</strong>
                            {":"}
                        </span>
                        <span>
                            <strong className="timeNum">{"00"}</strong>
                            <strong className="timeText">{textHors}</strong>
                            {":"}
                        </span>
                        <span>
                            <strong className="timeNum">{"00"}</strong>
                            <strong className="timeText">{textMin}</strong>
                            {":"}
                        </span>
                        <span>
                            <strong className="timeNum">{"00"}</strong>
                            <strong className="timeText">{textSec}</strong>
                            {""}
                        </span>
                    </div>
                </div>
            </div>
        </ContinerTimesOferts>
    );
}

const ContinerTimesOferts = styled.div`
    width: 100%;
    height: 40px;
    position: relative;
    background-color: #ddd;
    & > .continer {
        width: 100%;
        height: 100%;
        position: relative;
        & > .continer2 {
            width: 100%;
            height: 100%;
            position: relative;
            .continerClock {
                width: 100%;
                height: 100%;
                position: relative;
                padding: 0 16px;
                display: flex;
                justify-content: center;
                align-items: center;
                span {
                    color: #111;
                    font-size: 1rem;
                    &:not(:last-child) {
                        margin-right: 4px;
                    }
                    .timeNum {
                        margin-right: 2px;
                    }
                    .timeText {
                        color: #777;
                    }
                }
            }
        }
    }
`;

export default TimesOferts;
