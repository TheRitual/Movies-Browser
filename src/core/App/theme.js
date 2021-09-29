const pallette = {
    white: "#FFFFFF",
    black: "#000000",
    waterloo: "#7E839A",
    woodsmoke: "#18181B",
    mercury: "#F5F5FA",
    scienceBlue: "#0044CC",
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
    },
    breakpoints: {
        small: "576px",
        tabletPortrait: "767px",
    }
}