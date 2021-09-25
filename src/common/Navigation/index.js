import React from "react";
import {
    StyledNavigation,
    NavigationList,
    StyledTitle,
    StyledNavLink,
    StyledNavWrapper,
    StyledInput
} from "./styled";
import { toActorsList, toMoviesList } from "../../core/config/routes";


const Navigation = () => {
    return (
        <StyledNavigation>
            <StyledNavWrapper>
                <>StyledCameraIcon</>
                {/*tu miejsce na ikonkę SVG kamery*/}
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
                <StyledInput>
                    <>InputIcon</>
                    {/*tu będzie ikonka search SVG <>InputIcon */}
                    Search
                </StyledInput>
            </StyledNavWrapper>
        </StyledNavigation>
    )
}

export default Navigation;