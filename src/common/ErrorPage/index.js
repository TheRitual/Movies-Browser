import { toMoviesList } from "../../core/config/routes";
import { Wrapper, ErrorImage, Title, Subtitle, StyledLink } from "./styled";
import error from "./error.svg";

const ErrorPage = () => {
  return (
    <Wrapper>
      <ErrorImage src={error} />
      <Title>Ooops! Something went wrong...</Title>
      <Subtitle>Please check your network connection and try again</Subtitle>
      <StyledLink to={toMoviesList}> Back to home page </StyledLink>
    </Wrapper>
  );
};

export default ErrorPage;