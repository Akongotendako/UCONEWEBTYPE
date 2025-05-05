import { Box } from "@chakra-ui/react";

const ScreenOverlay = () => {
  return (
    <Box
      top={0}
      left={0}
      w={"full"}
      h={"vh"}
      position={"fixed"}
      bg={"whiteAlpha.700"}
      zIndex={3000}
    />
  );
};

export default ScreenOverlay;
