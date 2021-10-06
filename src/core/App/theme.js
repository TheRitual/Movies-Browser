const pallette = {
    white: "#FFFFFF",
    black: "#000000",
    waterloo: "#7E839A",
    woodsmoke: "#18181B",
    mercury: "#F5F5FA",
    scienceBlue: "#0044CC",
    mystic: "#E4E6F0",
    stormGrey: "#74788B",
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
        titleHeader: pallette.black,
        tagBackground: pallette.mystic,
        subText: pallette.stormGrey,
        linkHeader: pallette.black,
    },
    breakpoints: {
        mobile: "320px",
        mobileLandscape: "568px",
        tablet: "767px",
        tabletLandscape: "1024px",
    }
}