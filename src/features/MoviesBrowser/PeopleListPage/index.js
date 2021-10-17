import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListPage from "../ListPage";
import Main from "../Main";
import { setSearchQuery, setType } from "../moviesBrowserSlice";

const ActorsListPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setType("person"));
        dispatch(setSearchQuery(""));
        // eslint-disable-next-line
    }, []);
    return (
        <Main>
            <ListPage header="Popular People" />
        </Main>);
}

export default ActorsListPage;