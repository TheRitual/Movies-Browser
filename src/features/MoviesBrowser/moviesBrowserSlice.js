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
        cast: [],
        crew: [],
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
            Number(state.page) > Number(state.totalPages) && (state.page = state.totalPages);
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
        setCast: (state, { payload: cast }) => {
            state.cast = cast;
        },
        setCrew: (state, { payload: crew }) => {
            state.crew = crew;
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
    setCast,
    setCrew,
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
export const selectIsListEmpty = state => Array.isArray(selectMoviesBrowserState(state).itemsList) && selectMoviesBrowserState(state).itemsList.length === 0;
export const selectGenres = (state) => selectMoviesBrowserState(state).genres;
export const selectIsGenresListEmpty = state => Array.isArray(selectMoviesBrowserState(state).genres) && selectMoviesBrowserState(state).genres.length === 0;
export const selectCrew = (state) => selectMoviesBrowserState(state).crew;
export const selectIsCrewEmpty = state => Array.isArray(selectMoviesBrowserState(state).crew) && selectMoviesBrowserState(state).crew.length === 0;
export const selectCast = (state) => selectMoviesBrowserState(state).cast;
export const selectIsCastEmpty = state => Array.isArray(selectMoviesBrowserState(state).cast) && selectMoviesBrowserState(state).cast.length === 0;

export default moviesBrowserSlice.reducer;