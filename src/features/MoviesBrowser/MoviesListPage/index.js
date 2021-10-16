import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListPage from "../ListPage";
import Main from "../Main";
import { setSearchQuery, setType } from "../moviesBrowserSlice";

const MoviesListPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setType("movie"));
        dispatch(setSearchQuery(""));
        // eslint-disable-next-line
    }, []);
    return (
        <Main>
            <ListPage header="Popular Movies" />
        </Main>
    );
}



export default MoviesListPage;