import ListPage from "../../../../generic/components/ListPage";

const MoviesListPage = () => {
    return (
        <ListPage header="Movies List" isActors={false}>
            <div class="movie-tile">GridElement1</div>
            <div class="movie-tile">GridElement2</div>
        </ListPage>
    );
}

export default MoviesListPage;