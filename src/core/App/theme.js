const pallette = {
    white: "#FFFFFF",
    black: "#000000",
    waterloo: "#7E839A",
    woodsmoke: "#18181B",
    mercury: "#F5F5FA",
    mystic: "#E4E6F0",
    scienceBlue: "#0044CC",
    stormGrey: "#74788B",
    mineShaft: "#333333",
    pattensBlue: "#D6E4FF",
}

export const theme = {
    colors: {
        bodyBackground: pallette.mercury,
        navBackground: pallette.black,
        navText: pallette.white,
        inputIcon: pallette.waterloo,
        headers: pallette.woodsmoke,
        noResultPageBackground: pallette.mercury,
        errorButton: pallette.scienceBlue,
        tileBackground: pallette.white,
        titleHeader: pallette.black,
        tagBackground: pallette.mystic,
        subText: pallette.stormGrey,
        linkHeader: pallette.black,
        subtitleColor: pallette.waterloo,
        personDetail: pallette.waterloo,
        paginatorText: pallette.waterloo,
        paginatorPage: pallette.woodsmoke,
        paginatorButton: pallette.pattensBlue,
        paginatorButtonText: pallette.mineShaft,
        paginatorArrow: pallette.scienceBlue,
        paginatorDisabledButton: pallette.mystic,
        paginatorDisabledArrow: pallette.waterloo,
        headerBackground: pallette.black,
        listTitles: pallette.black,
        voteListScore: pallette.woodsmoke,
        voteHeaderScore: pallette.white,
    },
    breakpoints: {
        mobile: "320px",
        mobileLandscape: "568px",
        tablet: "767px",
        tabletLandscape: "1024px",
        container: "1368px"
    }
}