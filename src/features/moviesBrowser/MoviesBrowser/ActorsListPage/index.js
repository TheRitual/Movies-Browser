import ListPage from "../../../../generic/components/ListPage";

const ActorsListPage = () => {
    return (
        <ListPage header="Popular People" isActors={true}>
            <div>GridElement1</div>
            <div>GridElement2 </div>
        </ListPage>
    );
}

export default ActorsListPage;