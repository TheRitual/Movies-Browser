import { all } from "@redux-saga/core/effects";
import { moviesBrowserSaga } from "../../features/MoviesBrowser/moviesBrowserSaga"

function* rootSaga () {
    yield all([
        moviesBrowserSaga(),
    ])
}

export default rootSaga;