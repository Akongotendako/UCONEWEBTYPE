import { HStack, Image } from "@chakra-ui/react"
import Description from "../../../../ui/Description";
import Title from "../../../../ui/Title";

interface StudentImageNamePros {
    url: string;
    firstName: string;
    lastName: string;
    index: number;
}

const StudentImageName = (props: StudentImageNamePros) => {
  return (
    <HStack gap={4}>
      <Title>{`# ${props.index + 1}`}</Title>
        <Image src={props.url} boxSize={14} rounded={"full"}/>
        <Description>{`${props.firstName} ${props.lastName}`}</Description>
    </HStack>
  )
}

export default StudentImageName