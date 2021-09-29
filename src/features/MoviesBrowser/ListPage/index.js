import { useSelector } from "react-redux";
import { selectIsLoading, selectList, selectType } from "../moviesBrowserSlice";
import MovieTile from "./MovieTile";
import PersonTile from "./PersonTile";
import { ListGrid, ListHeader } from "./styled";
import Loading from "../../../common/Loading";
import Paginator from "../ListPage/Paginator";

const ListPage = ({ header }) => {
    const list = useSelector(selectList);
    const type = useSelector(selectType);
    const isLoading = useSelector(selectIsLoading);
    return (
        <>
            <ListHeader> {header} </ListHeader>
            {isLoading ?
                <Loading />
                :
                <>
                    <ListGrid columns={type === "movies" ? 4 : 6}>
                        {list && list.map(listItem => {
                            return type === "movies" ? <MovieTile movie={listItem} key={listItem.id} /> : <PersonTile key={listItem.id} person={listItem} />
                        })}
                    </ListGrid>
                    <Paginator />
                </>
            }

        </>
    );
}

export default ListPage;