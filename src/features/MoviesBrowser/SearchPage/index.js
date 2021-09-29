import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListPage from "../ListPage";
import { fetchSearchData } from "../moviesBrowserSlice";

const SearchPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSearchData());
        // eslint-disable-next-line
    }, []);
    return <ListPage header="Search Movies" />;
}



export default SearchPage;