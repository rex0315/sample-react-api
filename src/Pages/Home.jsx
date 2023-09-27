import React, { useState } from "react";
import { getUserName } from "../Redux/store";
import { useDispatch } from "react-redux";

export const Home = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <button> Get Name: {() => dispatch(getUserName)}</button>
    </div>
  );
};

export default Home;
