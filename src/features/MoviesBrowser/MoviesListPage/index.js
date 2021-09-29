import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import ListPage from "../ListPage";
import { fetchMoviesListData } from "../moviesBrowserSlice";

const MoviesListPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        console.log(location);
        dispatch(fetchMoviesListData());
        // eslint-disable-next-line
    },[]);
    return <ListPage header="Popular Movies" />;
}

export default MoviesListPage;