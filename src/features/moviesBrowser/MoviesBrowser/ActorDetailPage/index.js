const ActorDetailPage = () => {
    return (
        <> 
            <section class="features/moviesBrowser/common/ActorDetailTile" />
            <h2 class="styled-header">Movies - Cast</h2>
            <grid class="styled-grid-moviesType">
                <div class="movie-tile">GridElement1</div>
                <div class="movie-tile">GridElement2</div>
            </grid>
            <h2 class="styled-header">Movies - Crew</h2>
            <grid class="styled-grid-moviesType">
                <div class="movie-tile">GridElement1</div>
                <div class="movie-tile">GridElement2</div>
            </grid>
        </>
    );
}

export default ActorDetailPage;