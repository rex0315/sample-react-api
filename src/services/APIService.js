import axios from 'axios'

// const API_URL = import.meta.env.VITE_API_URL;

 export const APIService = async () => {


  const {data} = await axios.get("https://jsonplaceholder.typicode.com/photos/?_limit=5").then((res) => res.data);
  console.log(data);
  return data;  

  };

export default APIService