import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { NavBar } from "../Components/NavBar";
import { useEffect, useState } from "react";
import supabase from "../services/SupabaseClient";

export const Home = () => {
  const [book, setBook] = useState([]);
  const [fetchError, setfetchError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const { data, error } = await supabase.from("books1").select();

      if (error) {
        setBook(null);
        setfetchError(error);
        console.log(error);
      }
      if (data) {
        setBook(data);
        console.log(data);
      }
    };
    fetchBook();
  }, []);

  return (
    <div>
      {book.map((books) => (
        <Card justifyContent={"center"} maxW={"sm"} key={books.id}>
          <CardBody>
            <Box boxSize={"sm"}>
              <Image
                boxSize={"-webkit-fit-content"}
                objectFit={"cover"}
                src={`${books.coverURL}`}
              />
            </Box>
            <Heading></Heading>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Home;
