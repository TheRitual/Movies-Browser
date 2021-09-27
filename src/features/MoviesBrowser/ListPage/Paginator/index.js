import { useSelector } from "react-redux";
import { selectPage, selectTotalPages } from "../../moviesBrowserSlice";

const Paginator = () => {

    const page = useSelector(selectPage);
    const totalPages = useSelector(selectTotalPages);
    return (
        <div>
            Page {page} from {totalPages}
        </div>
    );
}

export default Paginator;