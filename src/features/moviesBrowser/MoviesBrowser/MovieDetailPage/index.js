import {
    Tile,
    Title,
    Subtitle,
    Content,
    Tags,
    Tag,
    Description,
    
} from "./styled";

const MovieDetailPage = () => {
    return (
        <>
            MovieDetailPage
            <Tile>
        {/*tu miejsce na SVG <Image src={poster} alt="" /> */}
        <Content>
          <Title>Mulan</Title>
          <Subtitle>
          2020
          </Subtitle>
          <Tags>
            <Tag>Action</Tag>
            <Tag>Adventure</Tag>
            <Tag>Drama</Tag>
          </Tags>
          <Description>
            A young Chinese maiden disguises herself as a male warrior in order to save her father.
            Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.
          </Description>

        </Content>
      </Tile>
        </>
    );
}

export default MovieDetailPage;