import { Flex } from '@chakra-ui/react'
import AdminOrderMainContent from '../../../../components/features/admin/admin-order/admin-order-main-content/AdminOrderMainContent'
import Title from '../../../../components/ui/Title'

const AdminOrderMainContentContainer = () => {
  return (
    <Flex w={'full'} direction={'column'} gap={5}>
        <Title>Orders</Title>
        <AdminOrderMainContent/>
    </Flex>
  )
}

export default AdminOrderMainContentContainer