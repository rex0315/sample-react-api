import axios from 'axios'

// const API_URL = import.meta.env.VITE_API_URL;

 export const APIService = async () => {
   try {
       const { data } = await axios.get("https://jsonplaceholder.typicode.com/photos/?_limit=5");
  return data;  
  
   } catch (error) {
     console.log(error);
     
}


  };

export default APIService