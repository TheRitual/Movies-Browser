const pallette = {
    white: "#FFFFFF",
    black: "#000000",
    waterloo: "#7E839A",
    woodsmoke: "#18181B",
    mercury: "#F5F5FA",
    scienceBlue: "#0044CC",
    mineShaft: "#333333",
    pattensBlue: "#D6E4FF",
    mystic: "#E4E6F0",
}

export const theme = {
    colors: {
        bodyBackground: pallette.mercury,
        navBackground: pallette.woodsmoke,
        navText: pallette.white,
        inputIcon: pallette.waterloo,
        headers: pallette.woodsmoke,
        noResultPageBackground: pallette.mercury,
        errorButton: pallette.scienceBlue,
        tileBackground: pallette.white,
        linkHeader: pallette.black,
        personDetail: pallette.waterloo,
        paginatorText: pallette.waterloo,
        paginatorPage: pallette.woodsmoke,
        paginatorButton: pallette.pattensBlue,
        paginatorButtonText: pallette.mineShaft,
        paginatorArrow: pallette.scienceBlue,
        paginatorDisabledButton: pallette.mystic,
        paginatorDisabledArrow: pallette.waterloo,
    },
    breakpoints: {
        mobile: "320px",
        mobileLandscape: "568px",
        tablet: "767px",
        tabletLandscape: "1024px",
    }
}