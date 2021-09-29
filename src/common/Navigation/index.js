import React from "react";
import { toPeopleList, toMoviesList } from "../../core/config/routes";
import { useReplaceQueryParameter } from "../../common/api/useQueryParameters";
import { searchQueryParamName} from "../../features/moviesBrowser/searchQueryParamName";
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


const Navigation = () => {
    const replaceQueryParameter = useReplaceQueryParameter();
    const setSearchString = ({target}) => {
        replaceQueryParameter({key: searchQueryParamName, value: target.value || undefined});
    }
    
    return (
        <StyledNavigation>
            <StyledNavWrapper>
                <StyledCameraIcon src={cameraIcon} />
                <StyledTitle>Movies Browser</StyledTitle>
                <NavigationList>
                    <NavigationListItem>
                        <StyledNavLink to={toMoviesList()}> Movies </StyledNavLink>
                    </NavigationListItem>
                    <NavigationListItem>
                        <StyledNavLink to={toPeopleList()}> People </StyledNavLink>
                    </NavigationListItem>
                </NavigationList>
                <StyledInput onChange={setSearchString} />
            </StyledNavWrapper>
        </StyledNavigation>
    )
}

export default Navigation;