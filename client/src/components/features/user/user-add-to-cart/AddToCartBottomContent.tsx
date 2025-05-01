import {
  Tabs,
  VStack,
  HStack,
  RatingGroup,
  Separator,
  For,
} from "@chakra-ui/react";
import Description from "../../../ui/Description";
import SecondaryButton from "../../../ui/SecondaryButton";
import Title from "../../../ui/Title";
import reviewStore from "../../../../stores/reviewStore";

const AddToCartBottomContent = () => {
  const { reviews } = reviewStore();

  return (
    <Tabs.Root
      variant="enclosed"
      w={"full"}
      fitted
      defaultValue={"Description"}
    >
      <Tabs.List
        w={"full"}
        bg={"transparent"}
        borderColor={"#FFFFFF80"}
        borderWidth={"1px"}
      >
        <Tabs.Trigger
          value="Description"
          flex={1}
          color={"#FFFFFF80"}
          _selected={{
            bg: "#2985E5",
            color: "#FFF",
          }}
        >
          Description
        </Tabs.Trigger>
        <Tabs.Trigger
          value="CustomerReview"
          flex={1}
          color={"#FFFFFF80"}
          _selected={{
            bg: "#2985E5",
            color: "#FFF",
          }}
        >
          Customer Review
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="Description" color={"#FFFFFF80"}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
        ex sapien vitae pellentesque sem placerat. In id cursus mi pretium
        tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
        Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis
        massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper
        vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
        inceptos himenaeos. Lorem ipsum dolor sit amet consectetur adipiscing
        elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id
        cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
        urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
        egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
        hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
        per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit amet
        consectetur adipiscing elit. Quisque faucibus ex sapien vitae
        pellentesque sem placerat. In id cursus mi pretium tellus duis
        convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
        fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada
        lacinia integer nunc posuere. Ut hendrerit semper vel class aptent
        taciti sociosqu. Ad litora torquent per conubia nostra inceptos
        himenaeos.
      </Tabs.Content>
      <Tabs.Content value="CustomerReview">
        <VStack w={"full"} align={"flex-start"}>
          <HStack w={"full"} justify={"flex-end"}>
            <SecondaryButton width="auto">WRITE A REVIEW</SecondaryButton>
          </HStack>

          {/** Titlte indicator */}
          <Title mb={10}>{reviews.length > 1 ? `${reviews.length} REVIEWS` : `${reviews.length} REVIEW`}</Title>

          <For each={reviews}>
            {(review, index) => (
              <>
                <VStack w={"full"} align={"flex-start"} key={index}>
                  <HStack gap={7}>
                    <Title textStyle="md">Lord Jan Rolmar</Title>
                    <RatingGroup.Root
                      readOnly
                      count={5}
                      value={review.rating}
                      size="sm"
                      colorPalette={"yellow"}
                    >
                      <RatingGroup.HiddenInput />
                      <RatingGroup.Control />
                    </RatingGroup.Root>
                  </HStack>
                  <Description mb={15}>
                    Posted by Lord Jan Rolmar January 22, 2025
                  </Description>

                  <Description mb={15}>{review.comment}</Description>
                </VStack>
                {reviews.length - 1 !== index && (
                  <Separator w={"full"} borderColor={"#FFFFFF80"} mb={5}/>
                )}
              </>
            )}
          </For>
        </VStack>
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default AddToCartBottomContent;
