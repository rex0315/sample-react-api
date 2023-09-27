import React, { useState } from "react";
import { getUserName } from "../Redux/store";
import { useDispatch } from "react-redux";

export const Home = () => {
  const [uname, setUName] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        onChange={(e) => {
          setUName(e.target.value);
        }}
      />
      <button onClick={() => dispatch(getUserName({ userName: uname }))}>
        Get Name:
      </button>
      <p>asdas</p>
    </div>
  );
};

export default Home;
