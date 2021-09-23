import ListPage from "../../../../generic/components/ListPage";

const MoviesListPage = () => {
    return (
        <ListPage header="Movies List" isActors={false}>
            <div class="styled-large-tile">GridElement1</div>
            <div class="styled-large-tile">GridElement2</div>
        </ListPage >
    );
}

export default MoviesListPage;