import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toMoviesList } from "../../core/config/routes";
import { setError } from "../../features/moviesBrowser/moviesBrowserSlice";
import { Wrapper, ErrorImage, Title, Subtitle, StyledLink } from "./styled";

const ErrorPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setError(false));
    // eslint-disable-next-line
  }, []);
  return (
    <Wrapper>
      <ErrorImage />
      <Title>Ooops! Something went wrong...</Title>
      <Subtitle>Please check your network connection and try again</Subtitle>
      <StyledLink to={toMoviesList}> Back to home page </StyledLink>
    </Wrapper>
  );
};

export default ErrorPage;