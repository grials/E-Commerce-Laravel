import initialObjectMenu from "../object/activeMenuObject";

function activeMenuObject(state = initialObjectMenu, action) {
    switch (action.type) {
        case "IS_ACTIVE_MENU":
            return {
                ...state,
                isMenuActive: action.value,
            };

        default:
            return state;
    }
}

export default activeMenuObject;
