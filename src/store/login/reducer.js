import { DREAMLO_PUBLIC_CODE, DREAMLO_PRIVATE_CODE } from './enums';

let initialState = { public_code: null, private_code : null};

export default (state = initialState, action) => {
    switch (action.type) {
        case DREAMLO_PUBLIC_CODE:
            console.log('action.payload', action.payload);

            return {
                ...state,
                public_code: action.payload
            };

        case DREAMLO_PRIVATE_CODE:
            console.log('action.payload', action.payload);

            return {
                ...state,
                private_code: action.payload
            };

        default:
            return state;
    }
};
