import React from "react";
import "../../../css/layoutPage.scss";
import useApp from "../../hooks/useApp";
import HeaderHome from "../../components/HeaderHome";
import SearchHome from "../../components/SearchHome";
import BarMenu from "../../components/BarMenu";
import BarMenuDesktop from "../../components/BarMenuDesktop";
import ServicesExtra from "../../components/ServicesExtra";
import ContactSection from "../../components/ContactSection";
import QuickLinks from "../../components/QuickLinks";
import Footer from "../../components/footer";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import PaymentIcon from "@material-ui/icons/Payment";
import LoopIcon from "@material-ui/icons/Loop";
import FormLogin from "../../components/FormLogin";

const listServices = [
    {
        icon: LocalShippingIcon,
        title: "free shipping",
        description: "free on order over $99",
    },
    {
        icon: SupervisedUserCircleIcon,
        title: "online suport",
        description: "we have support 24/7",
    },
    {
        icon: PaymentIcon,
        title: "safe payment",
        description: "safe your online payment",
    },
    {
        icon: LoopIcon,
        title: "guarantee",
        description: "30 days money back",
    },
];

function App() {
    const { isMovile, isDesktop } = useApp();
    return (
        <div className="layoutPage">
            <HeaderHome
                textContact={"Contacto: (+146)4044502"}
                linkContact={"#"}
                linkLogin={"/login"}
                linkRegister={"/register"}
                textLogin={"Login"}
                textRegister={"Registrarse"}
                linksLanguage={["#", "#", "#", "#", "#", "#"]}
                linksCoins={["#", "#", "#"]}
            />
            <SearchHome
                isMovile={isMovile}
                isDesktop={isDesktop}
                name_sectionFavorite="WISHLIST"
                name_sectionCarList="CART"
                itemsFavorite={0}
                itemsCarList={4}
                textPlaceholder="SEARCH"
            />
            {isDesktop ? null : <BarMenu isMovile={isMovile} />}

            {isDesktop ? <BarMenuDesktop /> : null}
            {/* Code extra */}
            <FormLogin />
            {/* Code extra */}
            <ServicesExtra listServices={listServices} />
            <ContactSection />
            <QuickLinks title={"quick links"} />
            <Footer
                copyright={"Copyright © 2021 Grials"}
                subTitle={"Media. All rights reserved."}
                linksFooter={[
                    { title: "about us", href: "#" },
                    { title: "privacy policy", href: "#" },
                    { title: "terms & conditions", href: "#" },
                    { title: "return policy", href: "#" },
                ]}
            />
        </div>
    );
}

export default App;
