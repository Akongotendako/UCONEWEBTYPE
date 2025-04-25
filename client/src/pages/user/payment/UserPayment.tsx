import { Flex } from '@chakra-ui/react'
import UserPaymentContainer from '../../../components/features/user/user-payment/UserPaymentContainer'
import Title from '../../../components/ui/Title'

const UserPayment = () => {
  return (
    <Flex w={'full'} direction={'column'}>
      {/** title */}
      <Title>Payment Method</Title>
      <UserPaymentContainer/>
    </Flex>
  )
}

export default UserPayment