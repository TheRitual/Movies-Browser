const getApiKey = (version) => {
    switch (version) {
        case "v4": return "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTllY2QwNWM1MGI3OGNkNTY3ZmQ4YmVmMjgxZWRjNiIsInN1YiI6IjYxNGUwNmI1MmY4ZDA5MDAyY2NhODBlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pwo2LLcLB__58mUpujtrxxGF-HE3izTvOZcpGj1bmcM";
        default: return "b19ecd05c50b78cd567fd8bef281edc6";
    }
}

export const fetchList = async (type = "movie", page = 1) => {
    const response = await fetch(`https://api.themoviedb.org/3/${type}/popular?api_key=${getApiKey()}&language=en-US&page=${page || 1}`);
    if (!response.ok) {
        new Error((response).statusText);
    }
    return await response.json();
};

export const fetchDetails = async (type = "movie", id) => {
    const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${getApiKey()}&language=en-US`);
    if (!response.ok) {
        new Error((response).statusText);
    }
    return await response.json();
};

export const fetchSearch = async (type = "movie", query = "", page = 1) => {
    if (query || query !== "") {
        const response = await fetch(`https://api.themoviedb.org/3/search/${type}?api_key=${getApiKey()}&language=en-US&query=${query}&page=${page}&include_adult=false`);
        if (!response.ok) {
            new Error((response).statusText);
        }
        return await response.json();
    } else {
        return null;
    }
};

export const fetchGenres = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${getApiKey()}&language=en-US`);
    if (!response.ok) {
        new Error((response).statusText);
    }
    return await response.json();
};

export const fetchMovieCredits = async (movie_id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${getApiKey()}&language=en-US`);
    if (!response.ok) {
        new Error((response).statusText);
    }
    return await response.json();
};

export const fetchPersonCredits = async (person_id) => {
    const response = await fetch(`https://api.themoviedb.org/3/person/${person_id}/movie_credits?api_key=${getApiKey()}&language=en-US`);
    if (!response.ok) {
        new Error((response).statusText);
    }
    return await response.json();
};