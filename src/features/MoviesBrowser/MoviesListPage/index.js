import ListPage from "../ListPage";
import Paginator from "../ListPage/Paginator";

const MoviesListPage = () => {
    return (
        <>
            <ListPage header="Popular Movies" />
            <Paginator />
        </>
    );
}

export default MoviesListPage;