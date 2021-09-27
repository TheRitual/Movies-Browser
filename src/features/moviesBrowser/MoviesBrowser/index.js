import { useSelector } from "react-redux";
import { HashRouter, Link } from "react-router-dom";
import { toPeopleList, toMoviesList } from "../../../core/config/routes";
import { selectIsLoading } from "../moviesBrowserSlice";
import PageSwitch from "./PageSwitch";
import LoadingPage from "../../../common/LoadingPage";
import { Main } from "./styled";


const MoviesBrowser = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <HashRouter>
      <Link to={toMoviesList()}> Movies </Link>
      <Link to={toPeopleList()}> People </Link>
      <Main>
        {isLoading ?
          <LoadingPage />
          :
          <PageSwitch />
        }

      </Main>
    </HashRouter>
  );
}

export default MoviesBrowser;