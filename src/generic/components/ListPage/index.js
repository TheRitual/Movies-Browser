const ListPage = ({ isActors, children, header }) => {
    return (
        <>
            <h1 class="styled-header">{header}</h1>
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