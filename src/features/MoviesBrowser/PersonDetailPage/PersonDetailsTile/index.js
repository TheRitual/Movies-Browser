import { useSelector } from "react-redux";
import { selectDetailItem } from "../../moviesBrowserSlice";
import {
    PersonDetailTile,
    TileInnerWrapper,
    PersonName,
    Subtitle,
    StyledDetails,
    Description,
    StyledPoster,
} from "./styled";

const PersonDetailsTile = () => {
    const person = useSelector(selectDetailItem);
    return (
<TileInnerWrapper>
        <PersonDetailTile>
            <TileInnerWrapper>
                <StyledPoster
                    src={`https://image.tmdb.org/t/p/w400${person.profile_path}`}
                    alt={person.name} />
{/* Content */}
                <PersonName /*title*/
                    alt={person.name}
                />
                <Subtitle>
                    Birthday:
                    <StyledDetails>{person.birthday}</StyledDetails>
                </Subtitle>

                <Subtitle>
                    Place of birth:
                    <StyledDetails>{person.place_of_birth}</StyledDetails>
                </Subtitle>

                <Description>
                    <p>Bio: {person.biography}</p>
                </Description>
{/* Content */}

            </TileInnerWrapper>
        </PersonDetailTile>
        </TileInnerWrapper>


    );
}

export default PersonDetailsTile;