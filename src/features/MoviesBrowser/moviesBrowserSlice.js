import { createSlice } from "@reduxjs/toolkit";

const moviesBrowserSlice = createSlice({
    name: 'moviesBrowser',
    initialState: {
        requestType: "movies",
        detailItem: {},
        page: 1,
        detailId: 293660,
        itemsList: [],
        isLoading: true,
        totalPages: 1,
        searchQuery: "",
    },
    reducers: {
        fetchMoviesListData: (state, { payload: page }) => {
            state.requestType = "movies";
            state.page = page || 1;
            state.isLoading = true;
        },
        fetchPeopleListData: (state, { payload: page }) => {
            state.requestType = "people";
            state.page = page || 1;
            state.isLoading = true;
        },
        fetchDetailedMovieData: (state, { payload: id }) => {
            state.requestType = "movie";
            state.detailId = id || 293660;
            state.isLoading = true;
        },
        fetchDetailedPersonData: (state, { payload: id }) => {
            state.requestType = "person";
            state.detailId = id || 10859;
            state.isLoading = true;
        },
        setTotalPages: (state, { payload: pagesAmount }) => {
            state.totalPages = pagesAmount;
        },
        setList: (state, { payload: list }) => {
            state.itemsList = list;
            state.isLoading = false;
        },
        setPeopleList: (state, { payload: peopleList }) => {
            state.itemsList = peopleList;
            state.isLoading = false;
        },
        setDetailItem: (state, { payload: item }) => {
            state.detailItem = item;
            state.isLoading = false;
        },
        fetchDataError: state => {
            state.isLoading = false;
        },
        setSearchQuery: (state, {payload: query}) => {
            state.searchQuery = query;
        }
    }
});

export const {
    setList,
    fetchMoviesListData,
    fetchPeopleListData,
    fetchDataError,
    setTotalPages,
    fetchDetailedMovieData,
    fetchDetailedPersonData,
    setDetailItem,
    setSearchQuery,
} = moviesBrowserSlice.actions;

export const selectMoviesBrowserState = state => state.moviesBrowser;
export const selectIsLoading = state => selectMoviesBrowserState(state).isLoading;
export const selectRequestType = state => selectMoviesBrowserState(state).requestType;
export const selectPage = state => selectMoviesBrowserState(state).page;
export const selectDetailId = state => selectMoviesBrowserState(state).detailId;
export const selectTotalPages = state => selectMoviesBrowserState(state).totalPages;
export const selectList = state => selectMoviesBrowserState(state).itemsList;
export const selectDetailItem = state => selectMoviesBrowserState(state).detailItem;
export const selectType = state => selectMoviesBrowserState(state).requestType;
export const selectIsListEmpty = state => selectMoviesBrowserState(state).itemsList.length === 0;

export default moviesBrowserSlice.reducer;