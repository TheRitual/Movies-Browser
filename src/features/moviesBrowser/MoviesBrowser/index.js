import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import { toActor, toActorsList, toMovie, toMoviesList } from "../../../core/config/routes";
import { Main } from "./styled";
import Navigation from "../../../Navigation";

const MoviesBrowser = () => {
    return (
        <HashRouter>
            <Navigation />
            <Main>
                <Switch>
                    <Route path={toMoviesList()}>
                        <div>features/moviesBrowser/MoviesListPage</div>
                    </Route>
                    <Route path={toMovie()}>
                        <div>features/movieBrowser/MovieDetailPage</div>
                    </Route>
                    <Route path={toActorsList()}>
                        <div>features/moviesBrowser/ActorsListPage</div>
                    </Route>
                    <Route path={toActor()}>
                        <div>features/movieBrowser/ActorDetailPage</div>
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