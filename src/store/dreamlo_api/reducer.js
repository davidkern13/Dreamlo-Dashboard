import { FETCHING_DATA, DATA_FETCHED, FETCH_ERROR } from './enums';

let initialState = { data: [] };

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_DATA:
            return {
                ...state,
                msg: 'Loading Data...',
                status: false
            };

        case DATA_FETCHED:
            console.log('action.payload', action.payload);
            return {
                ...state,
                data: action.payload,
                msg: 'Data fetched',
                status: true
            };

        case FETCH_ERROR:
            return {
                ...state,
                msg: action.payload,
                status: false
            };

        default:
            return state;
    }
};
