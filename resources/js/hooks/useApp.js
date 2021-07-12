import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    resizeIsDesktop,
    resizeIsMovile,
} from "../context/actions/resizeAction";

function useApp() {
    const context_movile = useSelector((state) => state.resize.movile);
    const context_desktop = useSelector((state) => state.resize.desktop);
    const dispatch = useDispatch();

    const [isMovile, setIsMovile] = useState(context_movile);
    const [isDesktop, setIsDesktop] = useState(context_desktop);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 550) {
                dispatch(resizeIsMovile(false));
            } else {
                dispatch(resizeIsMovile(true));
            }

            if (window.innerWidth < 550) {
                dispatch(resizeIsMovile(true));
            } else {
                dispatch(resizeIsMovile(false));
            }

            if (window.innerWidth >= 1050) {
                dispatch(resizeIsDesktop(true));
            } else {
                dispatch(resizeIsDesktop(false));
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });
    useEffect(() => {
        setIsMovile(context_movile);
        if (window.innerWidth < 550) {
            setIsMovile(true);
            setIsDesktop(false);
        }
    }, [context_movile]);
    useEffect(() => {
        setIsDesktop(context_desktop);
        if (window.innerWidth >= 1050) {
            setIsDesktop(true);
            setIsMovile(false);
        }
    }, [context_desktop]);

    return {
        isMovile,
        isDesktop,
    };
}

export default useApp;
