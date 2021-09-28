const pallette = {
    white: "#FFFFFF",
    black: "#000000",
    waterloo: "#7E839A",
    woodsmoke: "#18181B",
    mercury: "#E5E5E5",
    scienceBlue: "#0044CC",
}

export const theme = {
    colors: {
        bodyBackground: pallette.white,
        navBackground: pallette.woodsmoke,
        navText: pallette.white,
        inputIcon: pallette.waterloo,
        headers: pallette.woodsmoke,
        noResultPageBackground: pallette.mercury,
        errorButton: pallette.scienceBlue,
        subpageBackground: pallette.mercury,
    },
    breakpoints: {
        small: "576px",
        tabletPortrait: "767px",
    }
}