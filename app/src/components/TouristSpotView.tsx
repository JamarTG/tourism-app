import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import SpotDetails from "../types/spot";

const TouristSpotView = ({ spot }: { spot: SpotDetails }): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card maxW="sm">
      <CardBody>
        {spot.images.map((imageSrc) => (
          <Image
            src={imageSrc}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        ))}

        <Stack mt="6" spacing="3">
          <Heading size="md">{spot.name}</Heading>
          <Text>{spot.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            Price : $4,500 - $7,000
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            View Contact Details
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Visit Website
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default TouristSpotView;
