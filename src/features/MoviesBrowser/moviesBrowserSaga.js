import { call, put, takeLatest, select, debounce } from "redux-saga/effects";
import { fetchList, fetchDetails, fetchSearch } from "../../common/api/apiQueries";
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
} from "./moviesBrowserSlice";

function* fetchListHandler() {
    try {
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