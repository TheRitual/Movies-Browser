import { call, put, takeLatest, select, debounce } from "redux-saga/effects";
import { fetchList, fetchDetails, fetchSearch, fetchGenres, fetchPersonCredits, fetchMovieCredits } from "../../common/api/apiQueries";
import {
    fetchDetailedMovieData,
    fetchDetailedPersonData,
    setList,
    setDetailItem,
    fetchMoviesListData,
    fetchPeopleListData,
    fetchDataError,
    setTotalPages,
    selectDetailId,
    fetchSearchData,
    selectPage,
    selectSearchQuery,
    selectType,
    setResultsAmount,
    selectIsGenresListEmpty,
    setGenres,
    setCast,
    setCrew,
} from "./moviesBrowserSlice";

function* fetchListHandler() {
    try {
        const isGenresEmpty = yield select(selectIsGenresListEmpty);
        if (isGenresEmpty) {
            const genres = yield call(fetchGenres);
            yield put(setGenres(genres.genres));
        }
        const page = yield select(selectPage);
        const type = yield select(selectType);
        const list = yield call(fetchList, type, page);
        yield put(setList(list.results));
        yield put(setTotalPages(list.total_pages));
    } catch (error) {
        yield put(fetchDataError());
        yield call(Error, error);
    }
}

function* fetchDetailHandler() {
    try {
        const detail = yield select(selectDetailId);
        const requestType = yield select(selectType);
        const credits = yield requestType === "person" ? call(fetchPersonCredits, detail) : call(fetchMovieCredits, detail);
        const cast = credits.cast;
        yield yield put(setCast(cast));
        const crew = credits.crew;
        yield yield put(setCrew(crew));
        const detailedItem = yield call(fetchDetails, requestType, detail);
        yield put(setDetailItem(detailedItem));
    } catch (error) {
        yield put(fetchDataError());
        yield call(Error, error);
    }
}

function* fetchSearchHandler() {
    try {
        const page = yield select(selectPage);
        const query = yield select(selectSearchQuery);
        const requestType = yield select(selectType);
        const list = yield call(fetchSearch, requestType, query, page);
        yield put(setList(list.results || []));
        yield put(setResultsAmount(list.total_results));
        yield put(setTotalPages(list.total_pages));
    } catch (error) {
        yield put(fetchDataError());
        yield call(Error, error);
    }
}

export function* moviesBrowserSaga() {
    yield takeLatest(fetchMoviesListData.type, fetchListHandler);
    yield takeLatest(fetchPeopleListData.type, fetchListHandler);
    yield takeLatest(fetchDetailedMovieData.type, fetchDetailHandler);
    yield takeLatest(fetchDetailedPersonData.type, fetchDetailHandler);
    yield debounce(1000, fetchSearchData.type, fetchSearchHandler);
}