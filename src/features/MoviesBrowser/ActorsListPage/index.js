import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListPage from "../ListPage";
import { fetchPeopleListData } from "../moviesBrowserSlice";

const ActorsListPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPeopleListData(1));
    });
    return (
        <ListPage header="Popular Actors " showPaginator={true} columns="6" type="people" />
    );
}

export default ActorsListPage;