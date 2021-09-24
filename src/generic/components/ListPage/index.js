import { SiteTitle } from "../../styledComponents/Header/styled";

const ListPage = ({ isActors, children, header }) => {
    return (
        <>
            <SiteTitle>{header}</SiteTitle>
            {isActors ?
                <grid class="styled-actors-type-grid">{children}</grid>
                :
                <grid class="styled-movies-type-grid">{children}</grid>
            }
            <section class="paginator" />
        </>
    );
}

export default ListPage;