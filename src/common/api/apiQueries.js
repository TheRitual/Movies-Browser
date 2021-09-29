const getApiKey = (version) => {
    switch (version) {
        case "v4": return "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTllY2QwNWM1MGI3OGNkNTY3ZmQ4YmVmMjgxZWRjNiIsInN1YiI6IjYxNGUwNmI1MmY4ZDA5MDAyY2NhODBlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pwo2LLcLB__58mUpujtrxxGF-HE3izTvOZcpGj1bmcM";
        default: return "b19ecd05c50b78cd567fd8bef281edc6";
    }
}

export const fetchList = async (type, page) => {
    let link = type === "people" ? "person/popular" : "movie/popular";
    const response = await fetch(`https://api.themoviedb.org/3/${link}?api_key=${getApiKey()}&language=en-US&page=${page || 1}`);
    if (!response.ok) {
        new Error((response).statusText);
    }
    return await response.json();
};

export const fetchDetails = async (type, id) => {
    const link = type === "person" ? "person" : "movie";
    const response = await fetch(`https://api.themoviedb.org/3/${link}/${id}?api_key=${getApiKey()}&language=en-US`);
    if (!response.ok) {
        new Error((response).statusText);
    }
    return await response.json();
};

export const fetchSearch = async (type, query, page) => {
    const link = type === "people" || type === "person" ? "person" : "movie";
    const response = await fetch(`https://api.themoviedb.org/3/search/${link}?api_key=${getApiKey()}&language=en-US&query=${query}&page=${page}&include_adult=false`);
    if (!response.ok) {
        new Error((response).statusText);
    }
    return await response.json();
};