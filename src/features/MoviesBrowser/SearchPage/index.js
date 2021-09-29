import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { toMoviesList, toPeopleList } from "../../../core/config/routes";
import ListPage from "../ListPage";
import { fetchSearchData, selectSearchQuery, selectType } from "../moviesBrowserSlice";

const SearchPage = () => {
    const dispatch = useDispatch();
    const type = useSelector(selectType);
    const link = type === "person" ? toPeopleList() : toMoviesList();
    const query = useSelector(selectSearchQuery);
    console.log("Query: " + query);
    if (query) {
        dispatch(fetchSearchData());
    }

    return query && query !== "" ? <ListPage header={`Search for ${type} "${query}""`} /> : <Redirect push to={link} />;
    
}



export default SearchPage;