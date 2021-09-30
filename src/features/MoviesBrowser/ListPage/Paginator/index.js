import { useSelector } from "react-redux";
import { selectPage, selectTotalPages } from "../../moviesBrowserSlice";
import { LeftArrow, PaginatorButton, PaginatorPage, PaginatorText, PaginatorWrapper, RightArrow } from "./styled";

const Paginator = () => {
    const page = useSelector(selectPage);
    const totalPages = useSelector(selectTotalPages);
    return (
        <PaginatorWrapper>
            <PaginatorButton disabled>
                <LeftArrow /> First
            </PaginatorButton>

            <PaginatorButton disabled>
                <LeftArrow /> Previous
            </PaginatorButton>

            <PaginatorText>
                Page <PaginatorPage>{page}</PaginatorPage> from <PaginatorPage>{totalPages}</PaginatorPage>
            </PaginatorText>

            <PaginatorButton>
                Next <RightArrow />
            </PaginatorButton>

            <PaginatorButton>
                Last <RightArrow />
            </PaginatorButton>
        </PaginatorWrapper>
    );
}

export default Paginator;