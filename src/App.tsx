// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Suspense } from "react";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";

import routes from "./routes/rotues";
import ThemeProviderWrapper from "./theme/ThemeProvider";

function App() {
  return (
    <ThemeProviderWrapper>
      <CssBaseline />
      <Suspense fallback={<p>Loading...</p>}>
        <RouterProvider router={routes} fallbackElement={<p>Loading...</p>} />
      </Suspense>
    </ThemeProviderWrapper>
  );
}

export default App;
