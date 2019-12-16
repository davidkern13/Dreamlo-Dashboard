import { call, put, takeEvery } from 'redux-saga/effects'
import { fechedApiData, fechedApiError  } from '../dreamlo_api/action';

import { FETCHING_DATA } from '../dreamlo_api/enums';
const key = '5d7e6ab6d1041303eca3b810';

export default function* watchFetchApi() {
    yield takeEvery(FETCHING_DATA, fetchApiAsync);
}

function* fetchApiAsync() {
    try {
        const data = yield call(() => {
                return fetch(`http://dreamlo.com/lb/${key}/json`)
                    .then(res => res.json())
            }
        );

        yield put(fechedApiData(data));
    } catch (err) {
        yield put(fechedApiError(err));
    }
}