import { Main } from "./styled";
import { Tile } from "../../Tile";
import Image from "../../images/poster.png";

const MoviesBrowser = () => {
    return (
        <>
        <nav>Navigation</nav>
        <Main>
            Main Page Content
        </Main>
        <Tile>
        <Image src={poster} alt="" />
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

export default MoviesBrowser;