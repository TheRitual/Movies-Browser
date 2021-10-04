import { useSelector } from "react-redux";
import { selectIsListEmpty, selectIsLoading, selectList, selectType } from "../moviesBrowserSlice";
import MovieTile from "./MovieTile";
import PersonTile from "./PersonTile";
import { ListGrid, ListHeader } from "./styled";
import Loading from "../../../common/Loading";
import NoResultPage from "../../../common/NoResultPage";
import Paginator from "../ListPage/Paginator";

const ListPage = ({ header }) => {
    const list = useSelector(selectList);
    const type = useSelector(selectType);
    const isLoading = useSelector(selectIsLoading);
    const isEmpty = useSelector(selectIsListEmpty);
    return (
        <>
            {!isEmpty && <ListHeader> {header} </ListHeader>}
            {isLoading ?
                <Loading />
                :
                isEmpty ?
                    <NoResultPage />
                    :
                    <>
                        <ListGrid columns={type === "movie" ? 4 : 6}>
                            {list && list.map(listItem => {
                                return type === "movie" ? <MovieTile movie={listItem} key={listItem.id} /> : <PersonTile key={listItem.id} person={listItem} />
                            })}
                        </ListGrid>
                        <Paginator />
                    </>
            }

        </>
    );
}

export default ListPage;