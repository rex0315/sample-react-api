import React from "react";

const Activity1 = () => {
  const [excuse, setExcuse] = useState("");
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
};

export default Activity1;
