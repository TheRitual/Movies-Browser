import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toPerson, toMovie } from "../../../core/config/routes";
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
                        <Link to={
                            type === "movies" ? toMovie(listItem) : toPerson(listItem)
                        }>
                            <p>{type === "movies" ? listItem.title : listItem.name}</p>
                        </Link>
                    </section>);
                })}
            </ListGrid>
            {showPaginator && <span>Paginator start page</span>}
        </>
    );
}

export default ListPage;