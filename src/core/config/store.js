import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        //reducers
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;