import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListPage from "../ListPage";
import { fetchMoviesListData } from "../moviesBrowserSlice";

const MoviesListPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMoviesListData());
    });
    return <ListPage header="Popular Movies" />;
}

export default MoviesListPage;