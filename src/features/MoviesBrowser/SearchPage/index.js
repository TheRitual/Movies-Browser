import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ListPage from "../ListPage";
import { fetchSearchData, selectSearchQuery, selectType } from "../moviesBrowserSlice";

const SearchPage = () => {
    const dispatch = useDispatch();
    const type = useSelector(selectType);
    const query = useSelector(selectSearchQuery);
    if (query) {
        dispatch(fetchSearchData());
    }
    return <ListPage header={`Search for ${type} "${query}""`} />;
}



export default SearchPage;