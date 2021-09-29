import { useHistory, useLocation } from "react-router"

export const useQueryParameter = (key) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(key);
}

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

    return (paramsArray) => {
        const searchParams = new URLSearchParams(location.search);
        paramsArray.forEach( ({key, value}) => {
            if (value === undefined) {
                searchParams.delete(key);
            } else {
                searchParams.set(key, value.replace(/\s\s+/g, ' '));
            }
        });
        const newSearch = searchParams.toString();
        history.replace(`${location.pathname}?${newSearch}`);
    }
}