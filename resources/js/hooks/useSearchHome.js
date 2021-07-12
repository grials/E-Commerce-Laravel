import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isActiveMenu } from "../context/actions/activeMenuAction";

function useSearchHome() {
    const isMenuActive_reducer = useSelector(
        (state) => state.menu.isMenuActive
    );

    const dispatch = useDispatch();

    const [isMenuActive, setIsMenuActive] = useState(isMenuActive_reducer);

    useEffect(() => {
        setIsMenuActive(isMenuActive_reducer);
        // console.log(isMenuActive_reducer);
    }, [isMenuActive_reducer]);

    function handleMenuMovile(value) {
        dispatch(isActiveMenu(value));
    }

    return {
        isMenuActive,
        dispatch,
        isActiveMenu,
        handleMenuMovile,
    };
}

export default useSearchHome;
