import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListPage from "../ListPage";
import { fetchMoviesListData } from "../moviesBrowserSlice";


const MoviesListPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMoviesListData(1));
    });

    return (
        <ListPage header="Popular Movies " showPaginator={true} type="movies" />
    );
}

export default MoviesListPage;