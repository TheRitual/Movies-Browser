import { NavigationList, StyledNavigation, StyledNavWrapper, StyledTitle, StyledNavLink, StyledInput } from "./styled";
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
                        Movies
                    </StyledNavLink>


                    <StyledNavLink
                        to={toActorsList()}
                    >
                        People
                    </StyledNavLink>

                </NavigationList>
                <StyledInput />
                <>InputIcon</>
                {/*tu będzie ikonka search SVG <>InputIcon */}
                Search

            </StyledNavWrapper>
        </StyledNavigation>
    )
}

export default Navigation;