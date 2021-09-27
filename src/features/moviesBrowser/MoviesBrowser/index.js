import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { HashRouter, Link } from "react-router-dom";
import { toPeopleList, toMoviesList } from "../../../core/config/routes";
import { fetchMoviesListData, fetchPeopleListData, selectIsLoading } from "../moviesBrowserSlice";
import PageSwitch from "./PageSwitch";
import LoadingPage from "../../../common/LoadingPage";
import { Main } from "./styled";


const MoviesBrowser = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchMoviesListData());
    // eslint-disable-next-line
  }, []);
  return (
    <HashRouter>
      <Link to={toMoviesList()} onClick={() => dispatch(fetchMoviesListData())}> Movies </Link>
      <Link to={toPeopleList()} onClick={() => dispatch(fetchPeopleListData())}> People </Link>
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