import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectIsLoading, selectIsMoviesListLoaded, selectMoviesList, selectPage, selectTotalPages } from "./moviesListSlice";
import { fetchMovies } from "./moviesListSlice";

const MoviesListPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const isListEmpty = useSelector(selectIsMoviesListLoaded);
    const page = useSelector(selectPage);
    const totalPages = useSelector(selectTotalPages);
    const movieList = useSelector(selectMoviesList);
    return (
        <>
            <button onClick={() => dispatch(fetchMovies())}>Pobierz</button>
            <p> Ładuje {isLoading ? "Loadinguje" : "NieLoadinguje"} </p>
            <p> Czy pusta: {isListEmpty ? "pustak" : "pełniak"} </p>
            <p> Strona: {page} / {totalPages} </p>
            <div>
                {
                    movieList.map((movie, index) => {
                        return (<img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt={movie.title} key={index} />)
                    })
                }
            </div>
        </>
    );
}

export default MoviesListPage;