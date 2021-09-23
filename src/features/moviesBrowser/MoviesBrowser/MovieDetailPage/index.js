const MovieDetailPage = () => {
    return (
        <>
            <section class="features/moviesBrowser/common/MovieHeader" />
            <section class="features/moviesBrowser/common/MovieDetailTile" />
            <section class="features/moviesBrowser/common/MovieDetailTile" />
            <h2 class="styled-header">Cast</h2>
            <grid class="styled-grid-actorsType">
                <div class="actor-tile">GridElement1</div>
                <div class="actor-tile">GridElement2</div>
            </grid>
            <h2 class="styled-header">Crew</h2>
            <grid class="styled-grid-actorsType">
                <div class="actor-tile">GridElement1</div>
                <div class="actor-tile">GridElement2</div>
            </grid>
        </>
    );
}

export default MovieDetailPage;