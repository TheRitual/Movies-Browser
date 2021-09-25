import { call, put, takeLatest, select } from "redux-saga/effects";
import { fetchList } from "../../common/api/apiQueries";
import { setMoviesList, fetchData, fetchDataError, setPage, setTotalPages, selectRequestType } from "./moviesBrowserSlice";
import { selectPage } from "./moviesBrowserSlice";

function* fetchMoviesHandler() {
    try {
        const page = yield select(selectPage);
        const requestType = yield select(selectRequestType);
        const moviesList = yield call(fetchList, requestType, page );
        yield put(setMoviesList(moviesList.results));
        yield put(setPage(moviesList.page));
        yield put(setTotalPages(moviesList.total_pages));
    } catch (error) {
        yield put(fetchDataError());
        yield call(Error, error);
    }
}

export function* moviesBrowserSaga() {
    yield takeLatest(fetchData.type, fetchMoviesHandler);
}