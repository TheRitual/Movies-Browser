import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchMoviesListData, fetchPeopleListData, fetchSearchData, selectPage, selectSearchQuery, selectTotalPages, selectType, setPage } from "../../moviesBrowserSlice";
import { LeftArrow, PaginatorButton, PaginatorPage, PaginatorText, PaginatorWrapper, RightArrow } from "./styled";

const Paginator = () => {
    const dispatch = useDispatch();
    const page = useSelector(selectPage);
    const totalPages = useSelector(selectTotalPages);
    const query = useSelector(selectSearchQuery);
    const type = useSelector(selectType);

    const onSetPage = (page) => {
        dispatch(setPage(page));
        if (query) {
            dispatch(fetchSearchData());
        } else {
            type === "person" ? dispatch(fetchPeopleListData()) : dispatch(fetchMoviesListData());
        }
    }

    return (
        <PaginatorWrapper>
            <PaginatorButton disabled={page === "1" || page === 1} onClick={() => onSetPage(1)}>
                <LeftArrow /> First
            </PaginatorButton>

            <PaginatorButton disabled={page === "1" || page === 1} onClick={() => onSetPage(page - 1)}>
                <LeftArrow /> Previous
            </PaginatorButton>

            <PaginatorText>
                Page <PaginatorPage>{page}</PaginatorPage> from <PaginatorPage>{totalPages}</PaginatorPage>
            </PaginatorText>

            <PaginatorButton disabled={page === totalPages} onClick={() => onSetPage(page + 1)}>
                Next <RightArrow />
            </PaginatorButton>

            <PaginatorButton disabled={page === totalPages} onClick={() => onSetPage(totalPages)}>
                Last <RightArrow />
            </PaginatorButton>
        </PaginatorWrapper>
    );
}

export default Paginator;