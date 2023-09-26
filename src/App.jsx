import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [excuse, setExcuse] = useState("");
  const [choice, setChoice] = useState("");

  const fetchExcuse = async (choice) => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/${choice}`)
      .then((response) => {
        setExcuse(response.data);
        console.log(response.data);
      });
  };

  return (
    <div>
      <button className="todos" onClick={() => fetchExcuse("todos")}>
        Todos
      </button>
      <button className="todos" onClick={() => fetchExcuse("posts")}>
        Todos
      </button>
      {/* {excuse.map((item, index) => (
        <div>{<p key={index}>{item.title} </p>}</div>
      ))} */}
    </div>
  );
}

export default App;
