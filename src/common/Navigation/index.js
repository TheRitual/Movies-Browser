import React from "react";
import { toActorsList, toMoviesList } from "../../core/config/routes";
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
                        <StyledNavLink to={toActorsList()}> People </StyledNavLink>
                    </NavigationListItem>
                </NavigationList>
                <StyledInput />
            </StyledNavWrapper>
        </StyledNavigation>
    )
}

export default Navigation;