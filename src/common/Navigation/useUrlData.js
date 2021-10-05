import { useDispatch } from "react-redux";
import { setPage, setSearchQuery, setType } from "../../features/moviesBrowser/moviesBrowserSlice";

export const useUrlData = (search, locationPage, locationType) => {
    const dispatch = useDispatch();
    search && dispatch(setSearchQuery(search));
    locationPage ? dispatch(setPage(locationPage)) : dispatch(setPage("1"));
    locationType && dispatch(setType(locationType));
}