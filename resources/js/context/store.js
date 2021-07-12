import { createStore, combineReducers } from "redux";
import resizeReducer from "./reducer/resizeReducer";
import activeMenuObject from "./reducer/activeMenuReducer";

const mainReducer = combineReducers({
    resize: resizeReducer,
    menu: activeMenuObject,
});

const store = createStore(mainReducer);

export default store;
