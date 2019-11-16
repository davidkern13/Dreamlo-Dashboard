import { combineReducers } from "redux";

import dreamloReducer from "./login/reducer";

const rootReducer = combineReducers({
    dreamloReducer,
});

export default rootReducer;
