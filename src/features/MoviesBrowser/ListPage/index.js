import { useSelector } from "react-redux";
import { selectList, selectType } from "../moviesBrowserSlice";
import MovieTile from "./MovieTile";
import PersonTile from "./PersonTile";
import { ListGrid, ListHeader } from "./styled";

const ListPage = ({ header } ) => {
    const list = useSelector(selectList);
    const type = useSelector(selectType);
    return (
        <>
            <ListHeader> {header} </ListHeader>
            <ListGrid columns={type === "movies" ? 4 : 6}>
                {list && list.map(listItem => {
                    return type === "movies" ? <MovieTile movie={listItem} key={listItem.id} /> : <PersonTile key={listItem.id} person={listItem} />
                })}
            </ListGrid>
        </>
    );
}

export default ListPage;