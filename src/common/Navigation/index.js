import React from "react";
import { toPeopleList, toMoviesList } from "../../core/config/routes";
import { useReplaceQueryParameter } from "../../common/api/useQueryParameters";
import { searchQueryParamName } from "../../features/moviesBrowser/queryParamNames";
import cameraIcon from "../assets/svg/CameraIcon.svg";
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
import { selectType } from "../../features/moviesBrowser/moviesBrowserSlice";
import { useSelector } from "react-redux";


const Navigation = () => {
    const replaceQueryParameter = useReplaceQueryParameter();
    const pageType = useSelector(selectType);
    const getType = () => { return pageType === "person" || pageType === "people" ? "person" : "movie"; }
    const setSearchString = ({ target }) => {
        replaceQueryParameter([{ key: searchQueryParamName, value: target.value || undefined }]);
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
                <StyledInput onChange={setSearchString} placeholder={`Search for a ${getType()}`} />
            </StyledNavWrapper>
        </StyledNavigation>
    )
}

export default Navigation;