export const toMoviesList = () => `/movies-list`;
export const toActorsList = () => `/actors-list`;
export const toMovie = ({id} = {id:":id"}) => `/movie/${id}`;
export const toActor = ({id} = {id:":id"}) => `/actor/${id}`;