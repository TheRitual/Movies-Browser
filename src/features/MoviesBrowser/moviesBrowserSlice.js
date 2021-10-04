import { createSlice } from "@reduxjs/toolkit";

const moviesBrowserSlice = createSlice({
    name: 'moviesBrowser',
    initialState: {
        type: "movie",
        detailItem: {},
        page: "1",
        detailId: "293660",
        itemsList: [],
        isLoading: true,
        totalPages: "1",
        searchQuery: "",
        resultsAmount: "0",
        genres: [],
    },
    reducers: {
        fetchMoviesListData: (state) => {
            state.isLoading = true;
        },
        fetchSearchData: (state) => {
            state.isLoading = true;
        },
        fetchPeopleListData: (state) => {
            state.isLoading = true;
        },
        fetchDetailedMovieData: (state, { payload: id }) => {
            state.detailId = id || 293660;
            state.isLoading = true;
        },
        fetchDetailedPersonData: (state, { payload: id }) => {
            state.detailId = id || 10859;
            state.isLoading = true;
        },
        setTotalPages: (state, { payload: pagesAmount }) => {
            state.totalPages = pagesAmount.toString();
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
        setSearchQuery: (state, { payload: query }) => {
            state.searchQuery = query;
        },
        setPage: (state, { payload: page }) => {
            Number(page) < 1 && (page = "1");
            Number(page) > state.totalPages && (page = state.totalPages);
            state.page = page.toString();
        },
        setType: (state, { payload: type }) => {
            state.type = type;
        },
        setResultsAmount: (state, { payload: amount }) => {
            state.resultsAmount = amount.toString();
        },
        setGenres: (state, { payload: genresList }) => {
            state.genres = genresList;
        },
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
    fetchSearchData,
    setSearchQuery,
    setPage,
    setType,
    setResultsAmount,
    setGenres,
} = moviesBrowserSlice.actions;

export const selectMoviesBrowserState = state => state.moviesBrowser;
export const selectIsLoading = state => selectMoviesBrowserState(state).isLoading;
export const selectPage = state => selectMoviesBrowserState(state).page;
export const selectDetailId = state => selectMoviesBrowserState(state).detailId;
export const selectTotalPages = state => selectMoviesBrowserState(state).totalPages;
export const selectList = state => selectMoviesBrowserState(state).itemsList;
export const selectDetailItem = state => selectMoviesBrowserState(state).detailItem;
export const selectType = state => selectMoviesBrowserState(state).type;
export const selectSearchQuery = state => selectMoviesBrowserState(state).searchQuery;
export const selectResultsAmount = state => selectMoviesBrowserState(state).resultsAmount;
export const selectIsListEmpty = state => selectMoviesBrowserState(state).itemsList.length === 0;
export const selectGenres = (state) => selectMoviesBrowserState(state).genres;
export const selectIsGenresListEmpty = state => selectMoviesBrowserState(state).genres.length === 0;

export default moviesBrowserSlice.reducer;