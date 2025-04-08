import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import UCMerchLogo from '../../assets/shopping-cart.png'

interface LogoContainerProps {
    isVisible?: false
}

const LogoContainer: React.FC<LogoContainerProps> = ({isVisible}) => {
  return (
    <HStack display={isVisible? "none": ""} gap={2}>
        <Image src={UCMerchLogo} fit={'cover'} boxSize={'50px'}/>
    </HStack>
  )
}

export default LogoContainer