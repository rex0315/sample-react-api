import axios from 'axios'

// const API_URL = import.meta.env.VITE_API_URL;

export const APIService = async () => {

    return await axios.get("https://catfact.ninja/fact").then((res) => res.data);
  };

export default APIService