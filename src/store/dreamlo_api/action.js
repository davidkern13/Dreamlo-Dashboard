import { FETCHING_DATA, DATA_FETCHED, FETCH_ERROR } from "./enums";
import demoApi from '../../json/demo';

export const fechedApiData = res => ({
    type: DATA_FETCHED,
    payload: res
})

export const fechedApiError = err => ({
    type: FETCH_ERROR,
    payload: err
})



export function getDreamloData(dispatch) {
    return () => {

        dispatch(fechedApiData(demoApi))

        // dispatch({ type: FETCHING_DATA });
        //
        // return fetch("http://dreamlo.com/lb/5d7e6ab6d1041303eca3b810/json")
        //     .then(res => res.json())
        //     .then(res => {
        //         dispatch(fechedApiData(res))
        //     })
        //     .catch(err =>
        //         dispatch(fechedApiError(err))
        //     );
    };
}
