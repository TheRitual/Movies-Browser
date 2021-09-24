import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
    name: 'moviesList',
    initialState: {
        moviesList: [],
        isLoading: true,
        page: 1,
        totalPages: 1,
    },
    reducers: {
        fetchMovies: state => {
            state.isLoading = true;
        },
        setPage: (state, {payload : pageNumber}) => {
            state.page = pageNumber;
        },
        setTotalPages: (state, {payload : pagesAmount}) => {
            state.totalPages = pagesAmount;
        },
        setMovies : (state, {payload : moviesList}) => {
            state.moviesList = moviesList;
            state.isLoading = false;
        },
        fetchMoviesError : state => {
            state.isLoading = false;
        }
    }
});

export const { setMovies, fetchMovies, fetchMoviesError, setPage, setTotalPages } = moviesListSlice.actions;

export const selectMoviesListState = state => state.moviesList;
export const selectIsLoading = state => selectMoviesListState(state).isLoading;
export const selectPage = state => selectMoviesListState(state).page;
export const selectTotalPages = state => selectMoviesListState(state).totalPages;
export const selectMoviesList = state => selectMoviesListState(state).moviesList;
export const selectIsMoviesListLoaded = state => selectMoviesListState(state).moviesList.length === 0;

export default moviesListSlice.reducer;