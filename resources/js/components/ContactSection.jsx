import React from "react";
import styled from "styled-components";
import ContactDetails from "./contact/ContactDetails";
import HotLine from "./contact/HotLine";
import DataContact from "./contact/DataContact";
import CardPayments from "./contact/CardPayments";
import SocialNetwork from "./contact/SocialNetwork";
import DowloadApps from "./contact/DowloadApps";
import cardsIcon from "../../images/payment.png";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";
import iconAppsStore from "../../images/brands/apple-store.png";
import iconAppsGoogleStore from "../../images/brands/google-play-store.png";

const dataContact = {
    contactDetails: {
        title: "contact details",
        direction_1:
            "45 Grand Central Terminal New York,NY 1017 United State USA",
        number: "(+123) 456 789 - (+123) 666 888",
        email: "Contact@yourcompany.com",
    },
    hotline: {
        title: "hotline",
        title_number: "Call Us toll Free",
        number: "(+123) 456 789 - (+123) 666 888",
        titleEmail: "Sign up for newsletter",
        placeholder: "enter your email address",
    },
    data_contact: {
        title_1: "mi account",
        content_1: [
            { title: "mi account", href: "#" },
            { title: "brands", href: "#" },
            { title: "gift certificates", href: "#" },
            { title: "affiliates", href: "#" },
            { title: "wish list", href: "#" },
        ],
        title_2: "information",
        content_2: [
            { title: "contact us", href: "#" },
            { title: "returns", href: "#" },
            { title: "site map", href: "#" },
            { title: "specials", href: "#" },
            { title: "order history", href: "#" },
        ],
    },
    cardsPayments: {
        title: "we use safe payments",
        icons_cards: cardsIcon,
    },
    socialNetwork: {
        title: "social network",
        icons_social: [
            { icon: TwitterIcon, href: "#" },
            { icon: FacebookIcon, href: "#" },
            { icon: PinterestIcon, href: "#" },
            { icon: InstagramIcon, href: "#" },
        ],
    },
    dowloadApps: {
        title: "dowload apps",
        icons_apps: [
            { icon: iconAppsStore, href: "#" },
            { icon: iconAppsGoogleStore, href: "#" },
        ],
    },
};

function ContactSection() {
    const {
        contactDetails,
        hotline,
        data_contact,
        cardsPayments,
        socialNetwork,
        dowloadApps,
    } = dataContact;
    return (
        <ContinerContactSection>
            <div className="continer">
                <div className="continer2">
                    <ContactDetails
                        title={contactDetails.title}
                        direction_1={contactDetails.direction_1}
                        number={contactDetails.number}
                        email={contactDetails.email}
                    />
                    <HotLine
                        title={hotline.title}
                        title_number={hotline.title_number}
                        number={hotline.number}
                        titleEmail={hotline.titleEmail}
                        placeholder={hotline.placeholder}
                    />
                    <DataContact
                        title_1={data_contact.title_1}
                        content_1={data_contact.content_1}
                        title_2={data_contact.title_2}
                        content_2={data_contact.content_2}
                    />
                    <CardPayments
                        title={cardsPayments.title}
                        icons_cards={cardsPayments.icons_cards}
                    />
                    <SocialNetwork
                        title={socialNetwork.title}
                        icons_social={socialNetwork.icons_social}
                    />
                    <DowloadApps
                        title={dowloadApps.title}
                        icons_apps={dowloadApps.icons_apps}
                    />
                </div>
            </div>
        </ContinerContactSection>
    );
}

const ContinerContactSection = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    border-bottom: 1px solid #000;
    & > .continer {
        width: 100%;
        height: auto;
        position: relative;
        padding: 16px 16px 32px 16px;
        & > .continer2 {
            width: 100%;
            height: auto;
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            align-content: center;
        }
    }
`;

export default ContactSection;
