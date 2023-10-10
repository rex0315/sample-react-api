import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppRoutes from "./AppRoutes";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={client}>
        <Router>
          {/* <NavBar /> */}
          <AppRoutes />
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
