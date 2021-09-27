import React from "react";
import {
    StyledNavigation,
    NavigationList,
    StyledTitle,
    StyledNavLink,
    StyledNavWrapper,
    StyledInput,
    StyledLabel,
    InputIcon,
    StyledCameraIcon,
} from "./styled";
import { toActorsList, toMoviesList } from "../../core/config/routes";
import cameraIcon from "./assets/images/CameraIcon.svg";
import search from "./assets/images/SearchIcon.svg";


const Navigation = () => {
    return (
        <StyledNavigation>
            <StyledNavWrapper>
                <StyledCameraIcon src={cameraIcon} />
                <StyledTitle>Movies Browser</StyledTitle>
                <NavigationList>
                    <StyledNavLink 
                    to={toMoviesList()}
                    >
                        Movies</StyledNavLink>
                    <StyledNavLink 
                    to={toActorsList()}
                    >
                        People </StyledNavLink>
                </NavigationList>
                <StyledLabel>
                <InputIcon src={search} />
                <StyledInput 
/>
                    </StyledLabel>
            </StyledNavWrapper>
        </StyledNavigation>
    )
}

export default Navigation;