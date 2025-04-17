import { Box, Flex } from '@chakra-ui/react'
import NavBarContainer from '../../../layout/nav-bar/NavBarContainer'
import { Outlet } from 'react-router-dom'

const UserDashboard = () => {
  return (
    <Flex w={'full'} h={'full'} position={'relative'} direction={'column'}>
        <NavBarContainer/>
        <Box flex={1} overflow={'auto'}>
            <Outlet/>
        </Box>
    </Flex>
  )
}

export default UserDashboard