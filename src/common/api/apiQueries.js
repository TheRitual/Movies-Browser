const getApiKey = (version) => {
    switch (version) {
        case "v4": return "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTllY2QwNWM1MGI3OGNkNTY3ZmQ4YmVmMjgxZWRjNiIsInN1YiI6IjYxNGUwNmI1MmY4ZDA5MDAyY2NhODBlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pwo2LLcLB__58mUpujtrxxGF-HE3izTvOZcpGj1bmcM";
        default: return "b19ecd05c50b78cd567fd8bef281edc6";
    }
}

export const getMovies = async (page) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${getApiKey()}&language=en-US&page=${page || 1}`);
    if (!response.ok) {
        new Error((response).statusText);
    }
    return await response.json();
};