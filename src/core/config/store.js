import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import moviesListReducer from "../../features/MoviesBrowser/MoviesListPage/moviesListSlice";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        moviesList: moviesListReducer,
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;