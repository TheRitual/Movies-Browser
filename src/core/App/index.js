import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyles } from "./GlobalStyles";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyles />
      Movies Browser App
    </ThemeProvider>
  );
}

export default App;