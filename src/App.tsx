// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Suspense } from "react";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import routes from "./routes/rotues";
import ThemeProviderWrapper from "./theme/ThemeProvider";

function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeProviderWrapper>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <Suspense fallback={<p>Loading...</p>}>
          <RouterProvider router={routes} fallbackElement={<p>Loading...</p>} />
        </Suspense>
      </QueryClientProvider>
    </ThemeProviderWrapper>
  );
}

export default App;
