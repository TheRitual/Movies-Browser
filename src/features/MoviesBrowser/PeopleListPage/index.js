import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListPage from "../ListPage";
import Paginator from "../ListPage/Paginator";
import { fetchPeopleListData } from "../moviesBrowserSlice";

const ActorsListPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPeopleListData(1));
    });
    return (
        <>
            <ListPage header="Popular Actors " />
            <Paginator />
        </>
    );
}

export default ActorsListPage;