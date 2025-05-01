import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

const UserCartContainer = () => {
  return (
    <Box w={"full"}>
        <Outlet/>
    </Box>
  )
}

export default UserCartContainer