import React from "react";
import styled from "styled-components";

const sectionsLinks = [
    {
        title: "mobile",
        links: [
            { title: "mobiles", href: "#" },
            { title: "yphones", href: "#" },
            { title: "gianee mobiles gl", href: "#" },
            { title: "mobiles viva", href: "#" },
            { title: "mobiles micrumex", href: "#" },
            { title: "mobiles intex", href: "#" },
            { title: "mobiles bsus", href: "#" },
            { title: "mobiles karbonn", href: "#" },
            { title: "mobiles samsyng", href: "#" },
            { title: "mobiles lenova", href: "#" },
        ],
    },
    {
        title: "tablets",
        links: [
            { title: "plesc ypads", href: "#" },
            { title: "samsyng tablets", href: "#" },
            { title: "qindows tablets", href: "#" },
            { title: "calling tablets", href: "#" },
            { title: "mocrumex tablets", href: "#" },
            { title: "lenova tablets bsus", href: "#" },
            { title: "tablets iball", href: "#" },
            { title: "tablets swipe", href: "#" },
            { title: "tablets tvs, audio", href: "#" },
        ],
    },
    {
        title: "fashion",
        links: [
            { title: "sarees silk", href: "#" },
            { title: "sarees salwar", href: "#" },
            { title: "suits lehengas", href: "#" },
            { title: "diamond rings", href: "#" },
            { title: "biba jewellery", href: "#" },
            { title: "rings earrings", href: "#" },
            { title: "loose diamons shoes", href: "#" },
            { title: "bootsmen watches", href: "#" },
            { title: "women watches", href: "#" },
        ],
    },
];

function QuickLinks({ title }) {
    return (
        <ContinerQuickLinks>
            <div className="continer">
                <div className="continer2">
                    <h1 className="title">{title}</h1>
                    {sectionsLinks.map((section, index) => (
                        <SectionLinks
                            links={section.links}
                            title={section.title}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </ContinerQuickLinks>
    );
}

function SectionLinks({ title, links }) {
    return (
        <ContinerSectionLinks>
            <div className="continer">
                <div className="continer2">
                    <span className="linkTitle">{`${title}:`}</span>
                    {links.map((link, index) => (
                        <a className="link" href={link.href} key={index}>
                            {link.title.split(" ").map((elem, index) => (
                                <span key={index}>{elem}</span>
                            ))}
                        </a>
                    ))}
                </div>
            </div>
        </ContinerSectionLinks>
    );
}

const ContinerQuickLinks = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    & > .continer {
        width: 100%;
        height: auto;
        position: relative;
        padding: 32px 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        & > .continer2 {
            max-width: 720px;
            width: 100%;
            height: auto;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            & > .title {
                font-size: 1.2rem;
                text-transform: uppercase;
                color: #000;
                padding: 16px 0;
            }
        }
    }
`;

const ContinerSectionLinks = styled.div`
    height: auto;
    position: relative;
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
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            align-content: center;
            & > .linkTitle {
                font-size: 1rem;
                color: #000;
                text-align: center;
                &::first-letter {
                    text-transform: uppercase;
                }
            }
            & > .link {
                font-size: 1rem;
                text-decoration: none;
                /* padding: 0 8px; */
                border-right: 1px solid #777;
                margin-bottom: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                &:hover {
                    border-color: #f00;
                    & > span {
                        color: #f00;
                    }
                }
                span {
                    font-size: 1rem;
                    color: #aaa;
                    /* text-align: center; */
                    /* padding: 0; */
                    /* margin-right: 4px; */
                    text-align: center;
                    &::first-letter {
                        text-transform: uppercase;
                    }
                }
            }
        }
    }
`;

export default QuickLinks;
