import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyles } from "./GlobalStyles";
import MoviesBrowser from "../../features/moviesBrowser/MoviesBrowser"
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyles />
      <MoviesBrowser />
    </ThemeProvider>
  );
}

export default App;