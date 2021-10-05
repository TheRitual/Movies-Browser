import { useDispatch } from "react-redux";
import { toPeopleList, toMoviesList, toSearch } from "../../core/config/routes";
import { selectSearchQuery, selectType, setPage, setSearchQuery, setType } from "../../features/moviesBrowser/moviesBrowserSlice";
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
    const search = useQueryParameter(searchQueryParamName);
    const locationPage = useQueryParameter(pageQueryParamName);
    const locationType = useQueryParameter(typeQueryParamName);
    const replaceParam = useReplaceQueryParameter();
    const type = useSelector(selectType);
    const query = useSelector(selectSearchQuery);

    useEffect(() => {
        search && dispatch(setSearchQuery(search));
        locationPage ? dispatch(setPage(locationPage)) : dispatch(setPage("1"));
        locationType && dispatch(setType(locationType));
        // eslint-disable-next-line
    }, [search, locationPage, locationType]);

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
                <StyledTitle> Movies Browser </StyledTitle>
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