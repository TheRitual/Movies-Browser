import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { useQueryParameter } from "../../../common/api/useQueryParameters";
import { toMoviesList, toPeopleList } from "../../../core/config/routes";
import ListPage from "../ListPage";
import { fetchSearchData, selectResultsAmount, selectSearchQuery, selectType } from "../moviesBrowserSlice";
import { searchQueryParamName } from "../queryParamNames";

const SearchPage = () => {
    const dispatch = useDispatch();
    const type = useSelector(selectType);
    const query = useSelector(selectSearchQuery);
    const results = useSelector(selectResultsAmount);
    const search = useQueryParameter(searchQueryParamName);
    useEffect(() => {
        if (query) {
            dispatch(fetchSearchData());
        }
        // eslint-disable-next-line
    }, [query]);
    return query || search ? <ListPage header={`Search results for ${type} "${query}" (${results})`} /> : type === "person" ? <Redirect to={toPeopleList()} /> : <Redirect to={toMoviesList()} />;
}



export default SearchPage;