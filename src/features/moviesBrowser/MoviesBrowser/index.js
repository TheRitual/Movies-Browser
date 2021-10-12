import { useSelector } from "react-redux";
import { HashRouter } from "react-router-dom";
import Navigation from "../../../common/Navigation";
import { toError } from "../../../core/config/routes";
import { selectIsError } from "../moviesBrowserSlice";
import PageSwitch from "./PageSwitch";
import { Main } from "./styled";
import { Redirect } from "react-router";

const MoviesBrowser = () => {
  const isError = useSelector(selectIsError);
  return (
    <HashRouter>
      <Navigation />
      <Main>
        {isError && <Redirect to={toError()} />}
        <PageSwitch />
      </Main>
    </HashRouter>
  );
}

export default MoviesBrowser;