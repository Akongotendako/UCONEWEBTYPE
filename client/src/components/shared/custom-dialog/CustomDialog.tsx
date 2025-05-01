import {
  Dialog,
  Portal,
  CloseButton,
  VStack,
  Image,
  HStack,
  RatingGroup,
} from "@chakra-ui/react";
import { IProduct } from "../../../types/product.type";
import Description from "../../ui/Description";
import Title from "../../ui/Title";
import TextArea from "../../form/TextArea";
import reviewStore from "../../../stores/reviewStore";
import PrimaryButton from "../../ui/PrimaryButton";

interface CustomDialogProps {
  isOpen: boolean;
  onClick: () => void;
  product: IProduct;
  onSubmit: () => void;
}

const CustomDialog = (props: CustomDialogProps) => {
  const { review, setField } = reviewStore();

  const handleChange = (
    field: "rating" | "comment",
    value: number | string
  ) => {
    if (field === "comment") {
      setField("comment", value as string);
    } else {
      setField("rating", value as number);
    }
  };

  return (
    <Dialog.Root open={props.isOpen} onOpenChange={props.onClick}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content bg={"#243647"}>
            <Dialog.Header>
              <Dialog.Title color={"#FFF"}>Write a review</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <VStack align={"flex-start"}>
                <HStack gap={4} align={"flex-start"}>
                  <Image
                    src={props.product.images[0]?.url}
                    boxSize={28}
                    rounded={"sm"}
                  />
                  <VStack align={"flex-start"} gap={5}>
                    <Description>{props.product.productName}</Description>
                    <Description>Qty: {props.product.quantity}</Description>
                    {/** Rating */}
                    <RatingGroup.Root
                      count={5}
                      value={review.rating}
                      onValueChange={(e) => handleChange("rating", e.value)}
                      size="sm"
                      direction="ltr"
                      colorPalette={"yellow"}
                    >
                      <RatingGroup.HiddenInput />
                      <RatingGroup.Control />
                    </RatingGroup.Root>
                  </VStack>
                </HStack>

                {/** Review */}
                <VStack gap={3} w={"full"} align={"flex-start"}>
                  <Title>Review</Title>
                  <TextArea
                    onChange={(value) => handleChange("comment", value)}
                    value={review.comment}
                  />
                </VStack>

                {/** Submit button */}
                <PrimaryButton>Submit</PrimaryButton>
              </VStack>
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton
                size="sm"
                color={"#FFFFFF80"}
                _hover={{ color: "#000" }}
              />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default CustomDialog;
