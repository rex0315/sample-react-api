import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Home from "../Pages/Home";
import { Box } from "@chakra-ui/react";

export const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />

      <Box>asdasd</Box>
    </>
  );
};
