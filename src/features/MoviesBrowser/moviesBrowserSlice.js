import { createSlice } from "@reduxjs/toolkit";

const moviesBrowserSlice = createSlice({
    name: 'moviesBrowser',
    initialState: {
        requestType: "movies",
        detailItem: {},
        page: 1,
        detailId: 100,
        moviesList: [],
        actorsList: [],
        isLoading: true,
        totalPages: 1,
    },
    reducers: {
        fetchListData: (state, { payload: request }) => {
            state.requestType = request.type || "movies";
            state.page = request.page || 1;
            state.isLoading = true;
        },
        fetchDetailedData : (state, {payload: request}) => {
            state.requestType = request.type || "movie";
            state.detailId = request.id || 100;
            state.isLoading = true;
        },
        setTotalPages: (state, { payload: pagesAmount }) => {
            state.totalPages = pagesAmount;
        },
        setMoviesList: (state, { payload: moviesList }) => {
            state.moviesList = moviesList;
            state.isLoading = false;
        },
        setDetailItem: (state, { payload: item }) => {
            state.detailItem = item;
            state.isLoading = false;
        },
        fetchDataError: state => {
            state.isLoading = false;
        }
    }
});

export const { setMoviesList, fetchListData, fetchDataError, setTotalPages, fetchDetailedData, setDetailItem } = moviesBrowserSlice.actions;

export const selectMoviesBrowserState = state => state.moviesBrowser;
export const selectIsLoading = state => selectMoviesBrowserState(state).isLoading;
export const selectRequestType = state => selectMoviesBrowserState(state).requestType;
export const selectPage = state => selectMoviesBrowserState(state).page;
export const selectDetailId = state => selectMoviesBrowserState(state).detailId;
export const selectTotalPages = state => selectMoviesBrowserState(state).totalPages;
export const selectMoviesList = state => selectMoviesBrowserState(state).moviesList;
export const selectDetailItem = state => selectMoviesBrowserState(state).detailItem;
export const selectIsMoviesListEmpty = state => selectMoviesBrowserState(state).moviesList.length === 0;

export default moviesBrowserSlice.reducer;