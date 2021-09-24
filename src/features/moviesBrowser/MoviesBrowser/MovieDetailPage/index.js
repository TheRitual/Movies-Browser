import { SiteTitle } from "../../../../generic/styledComponents/Header/styled";

const MovieDetailPage = () => {
    return (
        <>
            <section class="features/moviesBrowser/MovieDetailPage/MovieHeader" />
            <section class="features/moviesBrowser/MovieDetailPage/MovieDetailTile" />
            <SiteTitle>Cast</SiteTitle>
            <grid class="styled-grid-largeType">
                <div class="styled-large-tile">GridElement1</div>
                <div class="styled-large-tile">GridElement2</div>
            </grid>
            <SiteTitle>Crew</SiteTitle>
            <grid class="styled-grid-actorsType">
                <div class="styled-large-tile">GridElement1</div>
                <div class="styled-large-tile">GridElement2</div>
            </grid>
        </>
    );
}

export default MovieDetailPage;