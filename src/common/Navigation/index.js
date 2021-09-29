import { useDispatch } from "react-redux";
import { toPeopleList, toMoviesList } from "../../core/config/routes";
import { setPage, setSearchQuery } from "../../features/moviesBrowser/moviesBrowserSlice";
import cameraIcon from "../assets/svg/CameraIcon.svg";
import { useQueryParameter } from "../../common/api/useQueryParameters";
import { searchQueryParamName, pageQueryParamName } from "../../features/moviesBrowser/queryParamNames";
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

const Navigation = () => {
    const dispatch = useDispatch();
    const search = useQueryParameter(searchQueryParamName) || "";
    const page = useQueryParameter(pageQueryParamName) || 1;

    useEffect(() => {
        dispatch(setSearchQuery(search));
        dispatch(setPage(page));
        // eslint-disable-next-line
    }, []);

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
                <StyledInput />
            </StyledNavWrapper>
        </StyledNavigation>
    )
}

export default Navigation;