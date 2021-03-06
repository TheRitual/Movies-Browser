export const toMoviesList = () => `/movies-list`;
export const toPeopleList = () => `/people-list`;
export const toError = () => `/error`;
export const toSearch = () => `/search`;
export const toMovie = ({id} = {id:":id"}) => `/movie/${id}`;
export const toPerson = ({id} = {id:":id"}) => `/person/${id}`;