import { call, put, takeLatest, select } from "redux-saga/effects";
import { fetchList, fetchDetails } from "../../common/api/apiQueries";
import { setMoviesList, setDetailItem, fetchListData, fetchDetailedData, fetchDataError, setTotalPages, selectRequestType, selectDetailId } from "./moviesBrowserSlice";
import { selectPage } from "./moviesBrowserSlice";

function* fetchListHandler() {
    try {
        const page = yield select(selectPage);
        const requestType = yield select(selectRequestType);
        const list = yield call(fetchList, requestType, page);
        yield put(setMoviesList(list.results));
        yield put(setTotalPages(list.total_pages));
    } catch (error) {
        yield put(fetchDataError());
        yield call(Error, error);
    }
}

function* fetchDetailHandler() {
    try {
        const detail = yield select(selectDetailId);
        const requestType = yield select(selectRequestType);
        const detailedItem = yield call(fetchDetails, requestType, detail);
        yield put(setDetailItem(detailedItem));
    } catch (error) {
        yield put(fetchDataError());
        yield call(Error, error);
    }
}

export function* moviesBrowserSaga() {
    yield takeLatest(fetchListData.type, fetchListHandler);
    yield takeLatest(fetchDetailedData.type, fetchDetailHandler);
}