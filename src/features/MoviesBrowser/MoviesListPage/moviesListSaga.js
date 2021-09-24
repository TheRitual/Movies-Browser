import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMoviesApi } from "../../../common/api/apiQueries";
import { setMovies, fetchMovies, fetchMoviesError, setPage, setTotalPages } from "./moviesListSlice";

function* fetchMoviesHandler() {
    try {
        const moviesList = yield call(fetchMoviesApi);
        yield put(setMovies(moviesList.results));
        yield put(setPage(moviesList.page));
        yield put(setTotalPages(moviesList.total_pages));
        console.log(moviesList);
    } catch (error) {
        yield put(fetchMoviesError());
        yield call(Error, error);
    }
}

export function* moviesListSaga() {
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}