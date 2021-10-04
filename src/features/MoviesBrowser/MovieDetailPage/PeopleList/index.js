import { useSelector } from "react-redux";
import { selectCast, selectCrew, selectIsCastEmpty, selectIsCrewEmpty } from "../../moviesBrowserSlice";
import { toPerson } from "../../../../core/config/routes";
import { Link } from "react-router-dom";

const PeopleList = () => {
    const crew = useSelector(selectCrew);
    const cast = useSelector(selectCast);
    const isCrewEmpty = useSelector(selectIsCrewEmpty);
    const isCastEmpty = useSelector(selectIsCastEmpty);

    return (
        <div>
            {isCastEmpty ||
                <>
                    <h4>Cast</h4>
                    {cast.map(castItem => (
                        <div>
                            {castItem.profile_path && <img src={`https://image.tmdb.org/t/p/w185/${castItem.profile_path}`} alt={castItem.name} />}
                            <p><Link to={toPerson({ id: castItem.id })}>{castItem.name}</Link></p>
                            <p>{castItem.character}</p>
                        </div>
                    ))}
                </>
            }
            {isCrewEmpty ||
                <>
                    <h4>Crew</h4>
                    {crew.map(castItem => (
                        <div>
                            {castItem.profile_path && <img src={`https://image.tmdb.org/t/p/w185/${castItem.profile_path}`} alt={castItem.name} />}
                            <p><Link to={toPerson({ id: castItem.id })}>{castItem.name}</Link></p>
                            <p>{castItem.job}</p>
                        </div>
                    ))}
                </>
            }
        </div>
    );
}

export default PeopleList;