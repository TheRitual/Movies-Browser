import ListPage from "../../../../generic/components/ListPage";

const ActorsListPage = () => {
    return (
        <ListPage header="Popular People" isActors={true}>
            <div class="styled-small-tile">GridElement1</div>
            <div class="styled-small-tile">GridElement2</div>
        </ListPage>
    );
}

export default ActorsListPage;