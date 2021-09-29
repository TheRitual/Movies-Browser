import { useDispatch } from "react-redux";
import { toPeopleList, toMoviesList, toSearch } from "../../core/config/routes";
import { fetchSearchData, selectPage, selectSearchQuery, selectType, setPage, setSearchQuery, setType } from "../../features/moviesBrowser/moviesBrowserSlice";
import cameraIcon from "../assets/svg/CameraIcon.svg";
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

const Navigation = () => {
    const dispatch = useDispatch();
    const search = useQueryParameter(searchQueryParamName) || "";
    const locationPage = useQueryParameter(pageQueryParamName) || 1;
    const locationType = useQueryParameter(typeQueryParamName) || "movie";
    const searchValue = useSelector(selectSearchQuery);
    const replaceParam = useReplaceQueryParameter();
    const page = useSelector(selectPage);
    const type = useSelector(selectType);

    useEffect(() => {
        dispatch(setSearchQuery(search));
        dispatch(setPage(locationPage));
        dispatch(setType(locationType));
        // eslint-disable-next-line
    }, []);

    const onSearchChange = ({ target }) => {
        dispatch(setSearchQuery(target.value));
        const params = [
            { key: searchQueryParamName, value: target.value },
            { key: pageQueryParamName, value: page },
            { key: typeQueryParamName, value: type }
        ];
        replaceParam(params, toSearch());
        dispatch(fetchSearchData());
    }

    

    return (
        <StyledNavigation>
            <StyledNavWrapper>
                <StyledCameraIcon src={cameraIcon} />
                <StyledTitle> Movies Browser </StyledTitle>
                <NavigationList>
                    <NavigationListItem>
                        <StyledNavLink to={toMoviesList()}> Movies </StyledNavLink>
                    </NavigationListItem>
                    <NavigationListItem>
                        <StyledNavLink to={toPeopleList()}> People </StyledNavLink>
                    </NavigationListItem>
                </NavigationList>
                <StyledInput value={searchValue} onChange={onSearchChange} placeholder={`Search for ${type}`} />
            </StyledNavWrapper>
        </StyledNavigation>
    )
}

export default Navigation;