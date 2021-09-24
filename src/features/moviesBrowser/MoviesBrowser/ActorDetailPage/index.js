import { SiteTitle } from "../../../../generic/styledComponents/Header/styled";

const ActorDetailPage = () => {
    return (
        <> 
            <section class="features/moviesBrowser/ActorDetailPage/ActorDetailTile" />
            <SiteTitle>Movies - Cast</SiteTitle>
            <grid class="styled-grid-largeType">
                <div class="styled-movie-tile">GridElement1</div>
                <div class="styled-movie-tile">GridElement2</div>
            </grid>
            <SiteTitle>Movies - Crew</SiteTitle>
            <grid class="styled-grid-largeType">
                <div class="styled-movie-tile">GridElement1</div>
                <div class="styled-movie-tile">GridElement2</div>
            </grid>
        </>
    );
}

export default ActorDetailPage;