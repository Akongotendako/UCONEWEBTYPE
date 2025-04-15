import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

const AdminShop = () => {
  
  return (
    <Box w={'full'} p={5}>
        <Outlet/>
    </Box>
  )
}

export default AdminShop