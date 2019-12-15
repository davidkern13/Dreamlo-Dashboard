import { all, call  } from 'redux-saga/effects'
import watchFetchApi from './dreamlo_api/saga'

export default function* rootSaga() {

    yield all(
        [
            call(watchFetchApi)
        ]
    );
}