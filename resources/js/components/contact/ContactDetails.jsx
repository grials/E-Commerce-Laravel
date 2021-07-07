import React from "react";
import styled from "styled-components";
import RoomIcon from "@material-ui/icons/Room";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import EmailIcon from "@material-ui/icons/Email";

function ContactDetails({ title, direction_1, number, email }) {
    return (
        <ContinerContactDetails>
            <div className="continer">
                <div className="continer2">
                    <h1>{title}</h1>
                    <div className="continerLocalitation">
                        <div className="continer">
                            <div className="continer2">
                                <RoomIcon className="iconDetails" />
                                <p className="descriptionDetails">
                                    {direction_1}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="continerPhoneNumber">
                        <div className="continer">
                            <div className="continer2">
                                <LocalPhoneIcon className="iconDetails" />
                                <h2 className="descriptionDetails">{number}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="continerEmail">
                        <div className="continer">
                            <div className="continer2">
                                <EmailIcon className="iconDetails" />
                                <h2 className="descriptionDetails">{email}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContinerContactDetails>
    );
}

const ContinerContactDetails = styled.div`
    min-width: 290px;
    flex-basis: 33.33%;
    height: auto;
    position: relative;
    margin: 0 8px 8px 0;
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
            & > h1 {
                font-size: 1.2rem;
                color: #000;
                text-align: center;
                padding: 16px 0;
                text-transform: uppercase;
            }
            .continerLocalitation {
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
                        padding: 8px 0;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        .iconDetails {
                            font-size: 24px;
                            color: #222;
                            margin-right: 8px;
                        }
                        .descriptionDetails {
                            font-size: 0.8rem;
                            color: #444;
                        }
                    }
                }
            }
            .continerPhoneNumber {
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
                        padding: 8px 0;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        .iconDetails {
                            font-size: 24px;
                            color: #222;
                            margin-right: 8px;
                        }
                        .descriptionDetails {
                            font-size: 0.8rem;
                            color: #444;
                        }
                    }
                }
            }
            .continerEmail {
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
                        padding: 8px 0;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        .iconDetails {
                            font-size: 24px;
                            color: #222;
                            margin-right: 8px;
                        }
                        .descriptionDetails {
                            font-size: 0.8rem;
                            color: #444;
                        }
                    }
                }
            }
        }
    }
`;

export default ContactDetails;
