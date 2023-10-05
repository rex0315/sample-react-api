import React, { useEffect, useState } from "react";
import { collection } from "firebase/firestore";
import { db } from "../services/FireBaseAuth";

export const Sample = () => {
  const [user, setUser] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {};
    getUsers();
  });
  return <div>Sample</div>;
};

export default Sample;
