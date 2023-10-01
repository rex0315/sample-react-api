import axios from 'axios'

// const API_URL = import.meta.env.VITE_API_URL;

export const APIService = async () => {

    return await axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => res.data);
  };

export default APIService