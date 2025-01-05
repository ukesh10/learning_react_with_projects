import Page from "./Page";
import ThemeContextProvider from "./theme-context";

function App() {
  return (
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
  );
}

export default App;
