import { HStack, IconButton } from "@chakra-ui/react";
import { MdDelete, MdModeEdit } from "react-icons/md";

const EditDeleteButtons = () => {
  return (
    <HStack gap={5}>
      <IconButton colorPalette={"green"} _hover={{bg: "black"}}>
        <MdModeEdit />
      </IconButton>
      <IconButton colorPalette={"red"} _hover={{bg: "black"}}>
        <MdDelete  />
      </IconButton>
    </HStack>
  );
};

export default EditDeleteButtons;
