import { HStack, Image, VStack } from "@chakra-ui/react";
import Title from "../../../components/typography/Title";
import Description from "../../../components/typography/Description";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import TShirt from "../../../assets/t-shirt.jpeg";

const UserHome = () => {
  return (
    <VStack w={"full"} h={"full"}>
      {/** Hero section */}
      <HStack gap={20}>
        <VStack>
          <Title>UC Merch</Title>
          <Description>
            Skip the long walks and social media searches! Discover the latest
            products for students, order online, and pick up at your department
            hassle-free.
          </Description>
          <PrimaryButton>SHOP NOW</PrimaryButton>

          
        </VStack>
        <Image src={TShirt} boxSize={"4/5"}/>
      </HStack>
    </VStack>
  );
};

export default UserHome;
