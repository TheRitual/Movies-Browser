import { useSelector } from "react-redux";
import { selectList } from "../moviesBrowserSlice";
import { ListGrid, ListHeader } from "./styled";

const ListPage = ({ header, showPaginator, type }) => {
    const list = useSelector(selectList);
    return (
        <>
            <ListHeader> {header} </ListHeader>
            <ListGrid columns={type === "movies" ? 4 : 6}>
                {list && list.map(listItem => {
                    return (<section>
                        {type === "movies" ? listItem.title : listItem.name}
                    </section>);
                })}
            </ListGrid>
            {showPaginator && <span>Paginator start page</span>}
        </>
    );
}

export default ListPage;