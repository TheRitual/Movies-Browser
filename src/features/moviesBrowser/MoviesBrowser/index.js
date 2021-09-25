import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import { toActor, toActorsList, toMovie, toMoviesList } from "../../../core/config/routes";
import MovieDetailPage from "../MovieDetailPage";
import ActorDetailPage from "../ActorDetailPage";
import MoviesListPage from "../MoviesListPage";
import ActorsListPage from "../ActorsListPage";
import Navigation from "../../../common/Navigation";
import { Main } from "./styled";

const MoviesBrowser = () => {
  return (
    <HashRouter>
      <Navigation />
      <Main>
        <Switch>
          <Route path={toMoviesList()}>
            <MoviesListPage />
          </Route>
          <Route path={toMovie()}>
            <MovieDetailPage />
          </Route>
          <Route path={toActorsList()}>
            <ActorsListPage />
          </Route>
          <Route path={toActor()}>
            <ActorDetailPage />
          </Route>
          <Route>
            <Redirect to={toMoviesList()} />
          </Route>
        </Switch>
      </Main>
    </HashRouter>
  );
}

export default MoviesBrowser;