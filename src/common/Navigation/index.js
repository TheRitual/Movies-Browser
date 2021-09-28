import React from "react";
import {
    StyledNavigation,
    NavigationList,
    NavigationListItem,
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
                    <NavigationListItem>
                    <StyledNavLink 
                    to={toMoviesList()}
                    >
                        Movies
                        </StyledNavLink>
                        </NavigationListItem>
                        <NavigationListItem>    
                    <StyledNavLink 
                    to={toActorsList()}
                    >
                        People 
                        </StyledNavLink>
                        </NavigationListItem>
                </NavigationList>
                <StyledLabel>

                <StyledInput />
                    </StyledLabel>
            </StyledNavWrapper>
        </StyledNavigation>
    )
}

export default Navigation;