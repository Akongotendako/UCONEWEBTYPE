import { Box, Image } from '@chakra-ui/react'

interface ItemImageProps {
    imagePath: string
}

const ItemImage = ({imagePath}: ItemImageProps) => {
  return (
    <Box w={"1/2"}>
        <Image src={imagePath} rounded={"md"} boxSize={60}/>
    </Box>
  )
}

export default ItemImage