// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { RouterProvider } from "react-router-dom";
import routes from "./routes/rotues";
import ThemeProviderWrapper from "./theme/ThemeProvider";

function App() {
  return (
    <ThemeProviderWrapper>
      <RouterProvider router={routes} fallbackElement={<p>Loading...</p>} />
    </ThemeProviderWrapper>
  );
}

export default App;
