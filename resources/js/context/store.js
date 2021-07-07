import { createStore, combineReducers } from "redux";
import resizeReducer from "./reducer/resizeReducer";

const mainReducer = combineReducers({
    resize: resizeReducer,
});

const store = createStore(mainReducer);

export default store;
