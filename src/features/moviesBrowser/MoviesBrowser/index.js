import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import { toPerson, toPeopleList, toMovie, toMoviesList } from "../../../core/config/routes";
import MovieDetailPage from "../MovieDetailPage";
import PersonDetailPage from "../PersonDetailPage";
import MoviesListPage from "../MoviesListPage";
import PeopleListPage from "../PeopleListPage";
import { Main } from "./styled";
import NotFound from "../../../common/NotFound";
import NoResultPage from "../../../common/NoResultPage";

const MoviesBrowser = () => {
  return (
    <HashRouter>
      Navigation
      <Main>
        <Switch>
          <Route path={toMoviesList()} component={MoviesListPage} />
          <Route path={toMovie()} component={MovieDetailPage} />
          <Route path={toPeopleList()} component={PeopleListPage} />
          <Route path={toPerson()} component={PersonDetailPage} />
          <Route exact path="/noresults" component={NoResultPage} />
          <Route exact path="/">
            <Redirect to={toMoviesList()} />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Main>
    </HashRouter>
  );
}

export default MoviesBrowser;