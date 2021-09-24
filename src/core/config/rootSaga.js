import { all } from "@redux-saga/core/effects";
import { moviesListSaga } from "../../features/MoviesBrowser/MoviesListPage/moviesListSaga"

function* rootSaga () {
    yield all([
        moviesListSaga(),
    ])
}

export default rootSaga;