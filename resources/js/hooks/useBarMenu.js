import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isActiveMenu } from "../context/actions/activeMenuAction";

const dataMenu = {
    title_1: "sale info",
    title_2: "main menu",
    options: ["sale info", "main menu"],
    menu_1_options: [
        { title: "weekly featured", href: "#", alert: "hot" },
        { title: "hot sale items", href: "#", alert: "hot" },
        { title: "top new items", href: "#", alert: "hot" },
        { title: "top selling", href: "#", alert: "hot" },
        { title: "top rated items", href: "#", alert: "hot" },
    ],
    menu_2_options: [
        { title: "about us", href: "#" },
        { title: "shop", href: "#" },
        { title: "cart", href: "#" },
        { title: "checkout", href: "#" },
        { title: "contact us", href: "#" },
    ],
};

function useBarMenu() {
    const menuIsActive_reducer = useSelector(
        (state) => state.menu.isMenuActive
    );

    const dispatch = useDispatch();

    const [menuIsActive, setMenuIsActive] = useState(menuIsActive_reducer);
    const [selectOption, setSelectOption] = useState({
        option_1: false,
        option_2: false,
    });

    useEffect(() => {
        setMenuIsActive(menuIsActive_reducer);
    }, [menuIsActive_reducer]);

    function handleMenu(value) {
        dispatch(isActiveMenu(value));
        setSelectOption({
            option_1: false,
            option_2: false,
        });
    }

    function handleMenuSecundaries() {
        // console.log(selectOption);
        const keysState = Object.keys(selectOption);
        const newState = {};

        keysState.forEach((key) => {
            newState[key] = false;
        });

        setSelectOption(newState);
    }

    function isActiveBarMenu() {
        const values = Object.values(selectOption);
        let bandera = false;

        values.forEach((value) => {
            if (value) {
                bandera = true;
            }
        });

        return bandera;
    }

    function handleSelectOptionBarMenu(index) {
        setSelectOption({ ...selectOption, [`option_${index}`]: true });
    }

    return {
        dataMenu,
        menuIsActive,
        selectOption,
        handleMenu,
        handleMenuSecundaries,
        isActiveBarMenu,
        handleSelectOptionBarMenu,
    };
}

export default useBarMenu;
