import React from "react";
import { 
    StyledNavigation,
    NavigationList,
    StyledTitle,
    StyledNavLink,
    StyledNavWrapper,
    StyledInput
 } from "./styled";


const Navigation = () => {
return(
    <StyledNavigation>
        <StyledNavWrapper>
            <>StyledCameraIcon</>
            {/*tu miejsce na ikonkę SVG kamery*/}
                        <StyledTitle>Movies Browser</StyledTitle>
            <NavigationList>
                <StyledNavLink>Movies</StyledNavLink>
                <StyledNavLink>People</StyledNavLink>
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

