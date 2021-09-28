import { HashRouter, Link } from "react-router-dom";
import { toPeopleList, toMoviesList } from "../../../core/config/routes";
import PageSwitch from "./PageSwitch";
import { Main } from "./styled";


const MoviesBrowser = () => {
  return (
    <HashRouter>
      <Link to={toMoviesList()}> Movies </Link>
      <Link to={toPeopleList()}> People </Link>
      <Main>
          <PageSwitch />
      </Main>
    </HashRouter>
  );
}

export default MoviesBrowser;