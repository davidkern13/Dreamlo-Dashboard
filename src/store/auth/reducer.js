import {USER_AUTH} from '../auth/enums';

let initialState = { user: [] };

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTH:
            return { ...state, user: action.payload};

        default:
            return state;
    }
};
