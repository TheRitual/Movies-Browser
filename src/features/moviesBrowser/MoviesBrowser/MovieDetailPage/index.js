const MovieDetailPage = () => {
    return (
        <>
            <section class="features/moviesBrowser/MovieDetailPage/MovieHeader" />
            <section class="features/moviesBrowser/MovieDetailPage/MovieDetailTile" />
            <h2 class="styled-header">Cast</h2>
            <grid class="styled-grid-largeType">
                <div class="styled-large-tile">GridElement1</div>
                <div class="styled-large-tile">GridElement2</div>
            </grid>
            <h2 class="styled-header">Crew</h2>
            <grid class="styled-grid-actorsType">
                <div class="styled-large-tile">GridElement1</div>
                <div class="styled-large-tile">GridElement2</div>
            </grid>
        </>
    );
}

export default MovieDetailPage;