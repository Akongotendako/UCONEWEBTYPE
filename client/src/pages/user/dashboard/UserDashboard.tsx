import { Box, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import NavBarContainer from '../../../components/shared/nav-bar/NavBarContainer'

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