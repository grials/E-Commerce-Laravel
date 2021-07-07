import { useState } from "react";
import listStateCategories from "../constant/LIST_CATEGORIES_STATE";

function useCategoriesAccordion() {
    const [selectCategori, setSelectCategori] = useState(listStateCategories);

    function handleCategory(e) {
        let category = e.target.dataset.category;
        const newList = listStateCategories;
        const keys = Object.keys(listStateCategories);
        keys.map((key) => {
            if (key === category) {
                newList[key] = true;
            } else {
                newList[key] = false;
            }
        });
        setSelectCategori({ ...newList });
    }

    return {
        selectCategori,
        handleCategory,
    };
}

export default useCategoriesAccordion;
