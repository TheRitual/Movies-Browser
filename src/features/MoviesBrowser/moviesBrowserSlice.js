import { createSlice } from "@reduxjs/toolkit";

const moviesBrowserSlice = createSlice({
    name: 'moviesBrowser',
    initialState: {
        requestType: "movies",
        page: 1,
        moviesList: [],
        actorsList: [],
        isLoading: true,
        totalPages: 1,
    },
    reducers: {
        fetchData: (state, { payload: request }) => {
            console.log(request)
            state.requestType = request.type;
            state.page = request.page;
            state.isLoading = true;
        },
        setPage: (state, { payload: pageNumber }) => {
            state.page = pageNumber;
        },
        setTotalPages: (state, { payload: pagesAmount }) => {
            state.totalPages = pagesAmount;
        },
        setMoviesList: (state, { payload: moviesList }) => {
            state.moviesList = moviesList;
            state.isLoading = false;
        },
        fetchDataError: state => {
            state.isLoading = false;
        }
    }
});

export const { setMoviesList, fetchData, fetchDataError, setPage, setTotalPages } = moviesBrowserSlice.actions;

export const selectMoviesBrowserState = state => state.moviesBrowser;
export const selectIsLoading = state => selectMoviesBrowserState(state).isLoading;
export const selectRequestType = state => selectMoviesBrowserState(state).requestType;
export const selectPage = state => selectMoviesBrowserState(state).page;
export const selectTotalPages = state => selectMoviesBrowserState(state).totalPages;
export const selectMoviesList = state => selectMoviesBrowserState(state).moviesList;
export const selectIsMoviesListEmpty = state => selectMoviesBrowserState(state).moviesList.length === 0;

export default moviesBrowserSlice.reducer;