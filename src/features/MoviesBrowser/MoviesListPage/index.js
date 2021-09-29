import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListPage from "../ListPage";
import { fetchMoviesListData, setType } from "../moviesBrowserSlice";

const MoviesListPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setType("movie"));
        dispatch(fetchMoviesListData());
        // eslint-disable-next-line
    }, []);
    return <ListPage header="Popular Movies" />;
}



export default MoviesListPage;