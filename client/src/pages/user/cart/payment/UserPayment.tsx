import { Flex } from "@chakra-ui/react"
import UserCartPaymentContainer from "../../../../components/features/user/user-cart/payment/UserCartPaymentContainer"

const UserPayment = () => {
  return (
    <Flex w={'full'} direction={"column"}>
        <UserCartPaymentContainer/>
    </Flex>
  )
}

export default UserPayment