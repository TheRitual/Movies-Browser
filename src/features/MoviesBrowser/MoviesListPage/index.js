import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQueryParameter } from "../../../common/api/useQueryParameters";
import ListPage from "../ListPage";
import { fetchMoviesListData } from "../moviesBrowserSlice";
import { searchQueryParamName } from "../queryParamNames";

const MoviesListPage = () => {
    const dispatch = useDispatch();
    const search = useQueryParameter(searchQueryParamName);
    useEffect(() => {
        search ? dispatch(fetchSearchMoviesData()) : dispatch(fetchMoviesListData());
        // eslint-disable-next-line
    }, []);
    return <ListPage header="Popular Movies" />;
}



export default MoviesListPage;