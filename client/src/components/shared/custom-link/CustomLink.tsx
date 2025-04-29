import { Link as ChakraLink } from "@chakra-ui/react";

interface CustomLinkProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const CustomLink = (props: CustomLinkProps) => {
  return (
    <ChakraLink
      onClick={props.onClick}
      color="#FFF"
      textDecoration="none"
      _hover={{ color: "#94ADC7" }}
    >
      {props.children}
    </ChakraLink>
  );
};

export default CustomLink;
