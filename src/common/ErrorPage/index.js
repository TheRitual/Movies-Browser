import { Wrapper, ErrorImage, Title, Subtitle, ErrorButton } from "./styled";

const ErrorPage = () => {
  return (
    <Wrapper>
      <ErrorImage />
      <Title>Ooops! Something went wrong...</Title>
      <Subtitle>Please check your network connection and try again</Subtitle>
      <ErrorButton> Back to home page </ErrorButton>
    </Wrapper>

  );
};

export default ErrorPage;