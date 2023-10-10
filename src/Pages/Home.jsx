import { useState } from "react";
import Login from "../Pages/Login";

export const Home = () => {
  const [album, setAlbum] = useState([]);

  return (
    <>
      <div>
        <Login />
      </div>
    </>
  );
};

export default Home;
