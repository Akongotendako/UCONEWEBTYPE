import { Box, Image } from "@chakra-ui/react"

interface UserCartMainContentImagesProps {
    url: string
}

const UserCartMainContentImages = (props: UserCartMainContentImagesProps) => {
  return (
     <Box w={"1/2"}>
          <Image src={props.url} rounded={"md"} boxSize={60} />
        </Box>
  )
}

export default UserCartMainContentImages