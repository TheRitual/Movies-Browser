import { useSelector } from "react-redux";
import { HashRouter } from "react-router-dom";
import ErrorPage from "../../../common/ErrorPage";
import Navigation from "../../../common/Navigation";
import { selectIsError } from "../moviesBrowserSlice";
import PageSwitch from "./PageSwitch";
import { Main } from "./styled";

const MoviesBrowser = () => {
  const isError = useSelector(selectIsError);
  return (
    <HashRouter>
      <Navigation />
      <Main>
        {isError ? <ErrorPage /> : <PageSwitch />}
      </Main>
    </HashRouter>
  );
}

export default MoviesBrowser;