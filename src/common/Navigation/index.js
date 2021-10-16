import { useDispatch } from "react-redux";
import { toPeopleList, toMoviesList, toSearch } from "../../core/config/routes";
import { fetchMoviesListData, fetchPeopleListData, fetchSearchData, selectPage, selectSearchQuery, selectType, setPage, setSearchQuery, setType } from "../../features/moviesBrowser/moviesBrowserSlice";
import cameraIcon from "../../assets/images/CameraIcon.svg";
import { useQueryParameter, useReplaceQueryParameter } from "../../common/api/useQueryParameters";
import { searchQueryParamName, pageQueryParamName, typeQueryParamName } from "../../features/moviesBrowser/queryParamNames";
import {
    StyledNavigation,
    NavigationList,
    NavigationListItem,
    StyledTitle,
    StyledNavLink,
    StyledNavWrapper,
    StyledInput,
    StyledCameraIcon,
} from "./styled";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = () => {
    const dispatch = useDispatch();
    const search = useQueryParameter(searchQueryParamName);
    const locationPage = useQueryParameter(pageQueryParamName);
    const locationType = useQueryParameter(typeQueryParamName);
    const replaceParam = useReplaceQueryParameter();
    const type = useSelector(selectType);
    const page = useSelector(selectPage);
    const query = useSelector(selectSearchQuery);

    useEffect(() => {
        if (search !== query && search) { dispatch(setSearchQuery(search)) };
        if (locationType !== type && locationType) { dispatch(setType(locationType)); }
        if (locationPage) { dispatch(setPage(locationPage)) } else { dispatch(setPage("1")); }
        // eslint-disable-next-line
    }, [search, locationPage, locationType]);

    useEffect(() => {
        query ? dispatch(fetchSearchData()) : type === "person" ? dispatch(fetchPeopleListData()) : dispatch(fetchMoviesListData());
        // eslint-disable-next-line
    }, [query, type, page]);

    const onSearchChange = ({ target }) => {
        dispatch(setSearchQuery(target.value));
        const params = [
            { key: searchQueryParamName, value: target.value },
            { key: pageQueryParamName, value: "1" },
            { key: typeQueryParamName, value: type }
        ];
        replaceParam(params, toSearch());
    }

    return (
        <StyledNavigation>
            <StyledNavWrapper>
                <StyledCameraIcon src={cameraIcon} />

                <Link to="/"><StyledTitle> Movies Browser </StyledTitle></Link>
                <NavigationList>
                    <NavigationListItem>
                        <StyledNavLink to={toMoviesList()}> Movies </StyledNavLink>
                    </NavigationListItem>
                    <NavigationListItem>
                        <StyledNavLink to={toPeopleList()}> People </StyledNavLink>
                    </NavigationListItem>
                </NavigationList>
                <StyledInput value={query || ""} onChange={onSearchChange} placeholder={`Search for ${type}`} />
            </StyledNavWrapper>
        </StyledNavigation>
    )
}

export default Navigation;