import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useReplaceQueryParameter } from "../../../../common/api/useQueryParameters";
import { toMoviesList, toPeopleList, toSearch } from "../../../../core/config/routes";
import { fetchMoviesListData, fetchPeopleListData, fetchSearchData, selectPage, selectSearchQuery, selectTotalPages, selectType, setPage } from "../../moviesBrowserSlice";
import { pageQueryParamName, searchQueryParamName, typeQueryParamName } from "../../queryParamNames";
import { LeftArrow, PaginatorButton, PaginatorPage, PaginatorText, PaginatorWrapper, RightArrow } from "./styled";

const Paginator = () => {
    const dispatch = useDispatch();
    const page = useSelector(selectPage);
    const totalPages = useSelector(selectTotalPages);
    const query = useSelector(selectSearchQuery);
    const type = useSelector(selectType);
    const replaceParam = useReplaceQueryParameter();

    const onSetPage = (page) => {
        dispatch(setPage(page));
        if (query) {
            dispatch(fetchSearchData());
            const params = [
                { key: searchQueryParamName, value: query },
                { key: pageQueryParamName, value: page },
                { key: typeQueryParamName, value: type }
            ];
            replaceParam(params, toSearch());
        } else {
            const params = [
                { key: searchQueryParamName, value: undefined },
                { key: pageQueryParamName, value: page },
                { key: typeQueryParamName, value: undefined }
            ];
                if(type === "person")
                    {
                        replaceParam(params, toPeopleList());
                        dispatch(fetchPeopleListData());
                    } else {
                        replaceParam(params, toMoviesList()) ;
                        dispatch(fetchMoviesListData());
                    }
        }
    }

    return (
        <PaginatorWrapper>
            <PaginatorButton disabled={page === "1" || page === 1} onClick={() => onSetPage(1)}>
                <LeftArrow /> First
            </PaginatorButton>

            <PaginatorButton disabled={page === "1" || page === 1} onClick={() => onSetPage((Number(page) - 1))}>
                <LeftArrow /> Previous
            </PaginatorButton>

            <PaginatorText>
                Page <PaginatorPage>{page}</PaginatorPage> from <PaginatorPage>{totalPages}</PaginatorPage>
            </PaginatorText>

            <PaginatorButton disabled={page === totalPages} onClick={() => onSetPage((Number(page) + 1))}>
                Next <RightArrow />
            </PaginatorButton>

            <PaginatorButton disabled={page === totalPages} onClick={() => onSetPage(totalPages)}>
                Last <RightArrow />
            </PaginatorButton>
        </PaginatorWrapper>
    );
}

export default Paginator;