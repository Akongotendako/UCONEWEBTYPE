import { Grid, GridItem, HStack, Image, VStack } from "@chakra-ui/react";
import shirt from "../../../../../assets/t-shirt.jpeg";
import Description from "../../../../ui/Description";
import Title from "../../../../ui/Title";
import PrimaryButton from "../../../../ui/PrimaryButton";

const UserOrderDetailsRightContent = () => {
  return (
    <VStack
      w={"3/5"}
      rounded={"md"}
      borderColor={"#FFFFFF80"}
      borderWidth={"1px"}
      align={"flex-start"}
      p={5}
    >
      <Grid templateColumns={"650px 1fr"} gap={8} w={"full"}>
        <GridItem>
          <HStack align={"flex-start"} gap={5}>
            <Image src={shirt} boxSize={28} rounded={"sm"}/>
            <VStack gap={7}>
              <Description>T Shirt</Description>
              <Description>Qty: 1</Description>
            </VStack>
          </HStack>
        </GridItem>
        <GridItem>
            <VStack align={"flex-start"}>
                <Title textStyle="md">₱300</Title>
                <PrimaryButton width="auto" marginTop="2">Write a review</PrimaryButton>
            </VStack>
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default UserOrderDetailsRightContent;
