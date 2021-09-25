import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import { toActor, toActorsList, toMovie, toMoviesList } from "../../../core/config/routes";
import MovieDetailPage from "../MovieDetailPage";
import ActorDetailPage from "../ActorDetailPage";
import MoviesListPage from "../MoviesListPage";
import ActorsListPage from "../ActorsListPage";
import Navigation from "../../../common/Navigation";
import { Main } from "./styled";
import NotFound from "../../../common/NotFound";

const MoviesBrowser = () => {
  return (
    <HashRouter>
      <Navigation />
      <Main>
        <Switch>
          <Route path={toMoviesList()} component={MoviesListPage} />  
          <Route path={toMovie()} component={MovieDetailPage} />          
          <Route path={toActorsList()} component={ActorsListPage} />
          <Route path={toActor()} component={ActorDetailPage} />
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