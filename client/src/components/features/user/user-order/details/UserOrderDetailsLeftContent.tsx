import { Grid, GridItem, VStack } from "@chakra-ui/react";
import Description from "../../../../ui/Description";
import Title from "../../../../ui/Title";
import { IOrder } from "../../../../../types/order.type";
import { dateFormatter } from "../../../../utils/dateFormatter";

interface UserOrderDetailsLeftContentProps {
  order: IOrder
}

const UserOrderDetailsLeftContent = (props: UserOrderDetailsLeftContentProps) => {
  return (
    <VStack
      w={"2/5"}
      rounded={"md"}
      borderColor={"#FFFFFF80"}
      borderWidth={"1px"}
      align={"flex-start"}
      p={5}
    >
      <Title>Order Details</Title>

      <Grid templateColumns="300px 1fr" w="full" mt={5} gap={8}>
        <GridItem>
          <Description color="#FFF">Order Date</Description>
        </GridItem>
        <GridItem>
          <Description>{dateFormatter(props.order.createdAt)}</Description>
        </GridItem>

        <GridItem>
          <Description color="#FFF">Order Item</Description>
        </GridItem>
        <GridItem>
          <Description>{props.order.products.length}</Description>
        </GridItem>

        <GridItem>
          <Description color="#FFF">Payment Method</Description>
        </GridItem>
        <GridItem>
          <Description>{props.order.paymentMethod}</Description>
        </GridItem>

        <GridItem>
          <Description color="#FFF">Status</Description>
        </GridItem>
        <GridItem>
          <Description>{props.order.paymentStatus}</Description>
        </GridItem>

        <GridItem>
          <Description color="#FFF">Total Amount</Description>
        </GridItem>
        <GridItem>
          <Description>{props.order.totalAmount}</Description>
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default UserOrderDetailsLeftContent;
