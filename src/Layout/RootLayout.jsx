import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

export const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};
