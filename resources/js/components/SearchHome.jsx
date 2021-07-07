import React from "react";
import mainLogo from "../../images/logo-top-1.png";
import { Sling as Hamburger } from "hamburger-react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import "../../css/SearchHome.scss";
import "../../css/BarUtilities.scss";
import "../../css/SectionList.scss";

function SearchHome({
    isMovile,
    isDesktop,
    name_sectionFavorite,
    name_sectionCarList,
    itemsFavorite,
    itemsCarList,
    textPlaceholder,
}) {
    return (
        <div className={`searchHome`}>
            <div className="continer_searchHome">
                <div className="continer2_searchHome">
                    <div className="mainImage">
                        <a href="/">
                            <img src={mainLogo} alt="main Image" />
                        </a>
                    </div>
                    <BarUtilities
                        isMovile={isMovile}
                        name_sectionFavorite={name_sectionFavorite}
                        name_sectionCarList={name_sectionCarList}
                        itemsFavorite={itemsFavorite}
                        itemsCarList={itemsCarList}
                        isDesktop={isDesktop}
                    />
                    <div className="barSearch">
                        <div className="continer_barSearch">
                            <div className="continer2_barSearch">
                                <input
                                    type="text"
                                    name="searchHome"
                                    id="searchHome"
                                    placeholder={textPlaceholder}
                                />
                                <span>
                                    <SearchIcon className="iconSearch" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function BarUtilities({
    isMovile,
    isDesktop,
    name_sectionFavorite,
    name_sectionCarList,
    itemsFavorite,
    itemsCarList,
}) {
    return (
        <div className={`barUtilities`}>
            <div className="continer_barUtilities">
                <div className="continer2_barUtilities">
                    <SectionList
                        _className="sectionFavorite"
                        numberItems={itemsFavorite}
                        nameSection={name_sectionFavorite}
                        Logo={FavoriteIcon}
                        alert={""}
                    />
                    <SectionList
                        _className="sectionCarList"
                        numberItems={itemsCarList}
                        nameSection={name_sectionCarList}
                        Logo={ShoppingBasketIcon}
                        alert={"alert"}
                    />
                    {isDesktop ? null : isMovile ? (
                        <div
                            className="continerMenuHamburguer
                        continerMenuHamburguer_menuIcon"
                        >
                            <MenuIcon />
                        </div>
                    ) : (
                        <Hamburger className="continerMenuHamburguer" />
                    )}
                </div>
            </div>
        </div>
    );
}

function SectionList({ _className, numberItems, nameSection, Logo, alert }) {
    return (
        <div className={`${_className} sectionBarUtilities`}>
            <div className="continer_section">
                <div className="continer2_section">
                    <Logo className="iconSection" />
                    <div className="continerData">
                        <div className="continer_continerData">
                            <div className="continer2_continerData">
                                <span className={`item ${alert}`}>
                                    {numberItems}{" "}
                                    {numberItems > 0 ? "items" : "item"}
                                </span>
                                <span className="nameSection">
                                    {nameSection}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchHome;
