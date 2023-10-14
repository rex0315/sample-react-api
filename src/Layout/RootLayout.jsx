import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import { useRef } from "react";
import NavBar from "../Components/NavBar";

export const RootLayout = () => {
  const btnRef = useRef();
  return (
    <Grid autoRows={"min-content"}>
      <GridItem></GridItem>
      <GridItem>
        <Outlet />
      </GridItem>
    </Grid>
  );
};
