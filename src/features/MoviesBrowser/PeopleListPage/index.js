import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListPage from "../ListPage";
import { fetchPeopleListData } from "../moviesBrowserSlice";

const ActorsListPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPeopleListData());
        // eslint-disable-next-line
    },[]);
    return <ListPage header="Popular Actors" />;
}

export default ActorsListPage;