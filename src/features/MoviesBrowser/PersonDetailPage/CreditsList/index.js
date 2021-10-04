import { useSelector } from "react-redux";
import { selectCast, selectCrew, selectIsCastEmpty, selectIsCrewEmpty } from "../../moviesBrowserSlice";
import { toMovie } from "../../../../core/config/routes";
import { Link } from "react-router-dom";

const CreditsList = () => {
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
                        <div key={castItem.id}>
                            {castItem.profile_path && <img src={`https://image.tmdb.org/t/p/w185/${castItem.poster_path}`} alt={castItem.name} />}
                            <p><Link to={toMovie({ id: castItem.id })}>{castItem.title}</Link></p>
                            <p>{castItem.character}</p>
                        </div>
                    ))}
                </>
            }
            {isCrewEmpty ||
                (<>
                    <h4>Crew</h4>
                    {crew.map(crewItem => (
                        <div key={crewItem.id}>
                            {crewItem.profile_path && <img src={`https://image.tmdb.org/t/p/w185/${crewItem.poster_path}`} alt={crewItem.name} />}
                            <p><Link to={toMovie({ id: crewItem.id })}>{crewItem.title}</Link></p>
                            <p>{crewItem.job}</p>
                        </div>
                    ))}
                </>)
            }
        </div>
    );
}

export default CreditsList;