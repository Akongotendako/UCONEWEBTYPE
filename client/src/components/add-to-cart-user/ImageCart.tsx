import { Image } from '@chakra-ui/react';
import productStore from '../../stores/productStore';

const ImageCart = () => {

  const {product, currentIndex} = productStore()
  return (
    <Image src={product.images[currentIndex]?.url} w={96} h={'full'} rounded={"sm"}/>
  )
}

export default ImageCart