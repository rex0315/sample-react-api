import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Divider, Heading, Stack, HStack, Text } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/react";

const CardLayout = ({ album, isFetching }) => {
  return (
    <div>
      <HStack gap={10}>
        <Skeleton isLoaded={!isFetching} height="100%">
          <Card maxW="sm">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Image src={`${album?.url}`} borderRadius="lg" />
                <Heading size="md">{album?.albumId}</Heading>
                <Text>{album?.title}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter></CardFooter>
          </Card>
        </Skeleton>
      </HStack>
    </div>
  );
};

export default CardLayout;
