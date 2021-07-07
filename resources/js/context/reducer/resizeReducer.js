import resizeInitObject from "../object/resizeObject";

function resizeReducer(state = resizeInitObject, action) {
    switch (action.type) {
        case "IS_MOVILE_320PX":
            return {
                ...state,
                movile: action.object,
            };

        case "IS_DESKTOP_1050PX":
            return {
                ...state,
                desktop: action.object,
            };

        default:
            return state;
    }
}

export default resizeReducer;
