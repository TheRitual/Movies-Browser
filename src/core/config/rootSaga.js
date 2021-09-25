import { all } from "@redux-saga/core/effects";
import { moviesBrowserSaga } from "../../features/moviesBrowser/moviesBrowserSaga"

function* rootSaga () {
    yield all([
        moviesBrowserSaga(),
    ])
}

export default rootSaga;