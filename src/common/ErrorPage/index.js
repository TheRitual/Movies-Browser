import { toMoviesList } from "../../core/config/routes";
import { Wrapper, ErrorImage, Title, Subtitle, StyledLink } from "./styled";



const ErrorPage = () => {
  return (
    <Wrapper>
      <ErrorImage />
      <Title>Ooops! Something went wrong...</Title>
      <Subtitle>Please check your network connection and try again</Subtitle>
      
        <StyledLink to={toMoviesList}> AA </StyledLink>
      
    </Wrapper>

  );
};

export default ErrorPage;