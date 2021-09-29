import { HashRouter } from "react-router-dom";
import Navigation from "../../../common/Navigation";
import PageSwitch from "./PageSwitch";
import { Main } from "./styled";


const MoviesBrowser = () => {
  return (
    <HashRouter>
      <Navigation />
      <Main>
          <PageSwitch />
      </Main>
    </HashRouter>
  );
}

export default MoviesBrowser;