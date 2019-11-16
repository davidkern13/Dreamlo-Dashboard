import { FETCHING_DATA, DATA_FETCHED, FETCH_ERROR } from "./enums";

export function getData(dispatch) {
    return () => {
        dispatch({ type: FETCHING_DATA });

        return fetch("http://dreamlo.com/lb/5d7e6ab6d1041303eca3b810/json")
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: DATA_FETCHED,
                    payload: res
                })
            })
            .catch(err =>
                dispatch({
                    type: FETCH_ERROR,
                    payload: err.message
                })
            );
    };
}
