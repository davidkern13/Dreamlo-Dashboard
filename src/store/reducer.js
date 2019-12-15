import { combineReducers } from 'redux';

import dreamloReducer from './login/reducer';
import dreamloApiReducer from './dreamlo_api/reducer';


const rootReducer = combineReducers({
    dreamlo_keys:dreamloReducer,
    dreamlo_api:dreamloApiReducer,
});

export default rootReducer;
