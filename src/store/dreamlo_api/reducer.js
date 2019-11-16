import { FETCHING_DATA, DATA_FETCHED, FETCH_ERROR } from "./enums";

let initialState = { data: [] };

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_DATA:
            return { ...state, msg: "Loading Data..." };

        case DATA_FETCHED:
            console.log('action.payload', action.payload);
            return { ...state, data: action.payload, msg: "Data fetched" };

        case FETCH_ERROR:
            return { ...state, msg: action.payload };

        default:
            return state;
    }
};
