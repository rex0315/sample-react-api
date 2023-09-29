import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./Components/NavBar";
import { Home } from "./Pages/Home";
import { Features } from "./Pages/Features";
import { How } from "./Pages/How";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RootLayout } from "./Layout/RootLayout";
import { Center, ChakraProvider, Flex } from "@chakra-ui/react";
import { Container, Box, Spacer, HStack, Link } from "@chakra-ui/react";
import { Business } from "./Pages/Business";
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import "./App.css";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/Features" element={<Features />} />
      <Route path="/How" element={<How />} />
      <Route path="/Business" element={<Business />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
