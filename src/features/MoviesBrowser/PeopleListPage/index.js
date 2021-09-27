import ListPage from "../ListPage";
import Paginator from "../ListPage/Paginator";

const ActorsListPage = () => {
    return (
        <>
            <ListPage header="Popular Actors " />
            <Paginator />
        </>
    );
}

export default ActorsListPage;