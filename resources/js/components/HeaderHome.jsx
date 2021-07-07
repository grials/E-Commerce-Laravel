import React from "react";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import iconLanguage_es from "../../images/lang-es.png";
import iconLanguage_en from "../../images/lang-en.png";
import iconLanguage_ger from "../../images/lang-ger.png";
import iconLanguage_hun from "../../images/lang-hun.png";
import iconLanguage_fran from "../../images/lang-fra.png";
import iconLanguage_can from "../../images/lang-can.png";
import "../../css/HeaderHome.scss";
import "../../css/Language.scss";
import "../../css/TypeCoins.scss";

const languageImage = [
    iconLanguage_es,
    iconLanguage_en,
    iconLanguage_can,
    iconLanguage_fran,
    iconLanguage_ger,
    iconLanguage_hun,
];

const textsLanguage = [
    "Español",
    "English",
    "Canadian",
    "fances",
    "Deutsche",
    "Hungary",
];

const textsCoins = ["Dolares (USD)", "Pound (GBP)", "Euro (EUR)"];

function HeaderHome({
    textContact,
    linkContact,
    linkLogin,
    linkRegister,
    textLogin,
    textRegister,
    linksLanguage,
    linksCoins,
}) {
    return (
        <div className={"headerHome"}>
            <div className="continer_headerHome">
                <div className="continer2_headerHome">
                    <div className="headerContact">
                        <div className="continer_headerContact">
                            <a href={linkContact}>
                                <PhoneAndroidIcon className="iconHeaderContact" />
                                <span>{textContact}</span>
                            </a>
                        </div>
                    </div>
                    <div className="headerNav">
                        <div className="continer_headerNav">
                            <div className="continer2_headerNav">
                                <a href={linkLogin}>{textLogin}</a>
                                <a href={linkRegister}>{textRegister}</a>
                                <Language linksLanguage={linksLanguage} />
                                <TypeCoins linksCoins={linksCoins} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Language({ linksLanguage }) {
    return (
        <div className="language">
            <div className="continer_language">
                <div className="continerTitle_language">
                    <div className="continerTitle">
                        <div className="continer_continerTitle">
                            <img src={languageImage[0]} alt="icon_language" />
                            <span>{textsLanguage[0]}</span>
                            <KeyboardArrowDownIcon className="iconArrowDown" />
                        </div>
                    </div>
                </div>
                <div className={`continerLanguage`}>
                    <div className="continer_continerLanguage">
                        {languageImage.map((elem, index) => {
                            if (textsLanguage[0] === textsLanguage[index])
                                return null;
                            return (
                                <a
                                    className="typeLanguage"
                                    href={linksLanguage[index]}
                                    key={index}
                                >
                                    <img src={elem} alt="languageIcon" />
                                    <span>{textsLanguage[index]}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

function TypeCoins({ linksCoins }) {
    return (
        <div className="typeCoins">
            <div className="continer_typeCoins">
                <div className="continerTitle_typeCoins">
                    <div className="continerTitle">
                        <div className="continer_continerTitle">
                            <span>{textsCoins[0]}</span>
                            <KeyboardArrowDownIcon className="iconArrowDown" />
                        </div>
                    </div>
                </div>
                <div className={`continerCoins`}>
                    <div className="continer_continerCoins">
                        {textsCoins.map((elem, index) => {
                            if (textsCoins[0] === elem) return null;
                            return (
                                <a
                                    className="typeCoin"
                                    href={linksCoins[index]}
                                    key={index}
                                >
                                    <span>{elem}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderHome;
