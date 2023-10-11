import { Outlet } from "react-router-dom";
import { Grid } from "@chakra-ui/react";
import { useRef } from "react";

export const RootLayout = () => {
  const btnRef = useRef();
  return (
    <Grid>
      <Outlet />
    </Grid>
  );
};
