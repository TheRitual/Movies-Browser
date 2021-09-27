import { Redirect, Route, Switch } from "react-router";
import { toMovie, toMoviesList, toPeopleList, toPerson } from "../../../../core/config/routes";
import NotFound from "../../../../common/NotFound";
import MovieDetailPage from "../../MovieDetailPage";
import PersonDetailPage from "../../PersonDetailPage";
import MoviesListPage from "../../MoviesListPage";
import PeopleListPage from "../../PeopleListPage";

const PageSwitch = () => {
    return (
        <Switch>
            <Route path={toMoviesList()} component={MoviesListPage} />
            <Route path={toPeopleList()} component={PeopleListPage} />
            <Route path={toMovie()} component={MovieDetailPage} />
            <Route path={toPerson()} component={PersonDetailPage} />
            <Route exact path="/">
                <Redirect to={toMoviesList()} />
            </Route>
            <Route component={NotFound} />
        </Switch>
    );
}

export default PageSwitch;