import { Flex } from "@chakra-ui/react"
import UserCartCheckoutContainer from "../../../../components/features/user/user-cart/checkout/UserCartCheckoutContainer"

const UserCartCheckout = () => {
  return (
    <Flex w={"full"} direction={"column"}>
        <UserCartCheckoutContainer/>
    </Flex>
  )
}

export default UserCartCheckout