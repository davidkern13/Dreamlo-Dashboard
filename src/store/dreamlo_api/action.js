import { FETCHING_DATA, DATA_FETCHED, FETCH_ERROR } from './enums';

export const requestApi = () => {
    return { type: FETCHING_DATA }
};

export const fechedApiData = res => ({
    type: DATA_FETCHED,
    payload: res
})

export const fechedApiError = err => ({
    type: FETCH_ERROR,
    payload: err
})

