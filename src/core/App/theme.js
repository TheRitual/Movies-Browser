const pallette = {
    white: "#FFFFFF",
    black: "#000000",
    waterloo: "#7E839A",
    woodsmoke: "#18181B",
    mercury: "#F5F5FA",
    scienceBlue: "#0044CC",
    stormGrey: "#717486",
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
        subTekst: pallette.stormGrey,
    },
    breakpoints: {
        mobile: "320px",
        mobileLandscape: "568px",
        tablet: "767px",
        tabletLandscape: "1024px",
    }
}