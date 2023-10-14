import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import supabase from "../services/SupabaseClient";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";
import Services from "../Components/Services";

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
    <Grid autoRows={"min-content"}>
      <GridItem pb={10}>
        <NavBar />
      </GridItem>
      <GridItem px={75}>
        <SimpleGrid columns={[2, null, 3]} spacing={3}>
          {book.map((books) => (
            <Container>
              <Card key={books.id}>
                <CardBody>
                  <Flex>
                    <Box boxSize="-webkit-max-content">
                      <Image
                        boxSize={"200px"}
                        objectFit={"contain"}
                        src={`${books.coverURL}`}
                      />
                    </Box>

                    <VStack>
                      <Box px={5}>
                        <Heading size={"sm"}>
                          <span>{books.title}</span>
                        </Heading>
                        <Text fontSize={"sm"}>{books.category}</Text>
                      </Box>
                    </VStack>
                  </Flex>
                </CardBody>
              </Card>
            </Container>
          ))}
        </SimpleGrid>
      </GridItem>
      <GridItem px={75} py={75}>
        <AboutUs />
      </GridItem>
      <GridItem px={75} py={75}>
        <Services />
      </GridItem>
      <GridItem px={75}>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Home;
