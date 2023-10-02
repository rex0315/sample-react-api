import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { Home } from "./Pages/Home";
import { Features } from "./Pages/Features";
import { How } from "./Pages/How";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RootLayout } from "./Layout/RootLayout";
import { Business } from "./Pages/Business";
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import AppRoutes from "./AppRoutes";
import NavBar from "./Components/NavBar";

function App() {
  const client = new QueryClient({
    // defaultOptions: {
    //   queries: {
    //     refetchOnWindowFocus: false,
    //   },
    // },
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
