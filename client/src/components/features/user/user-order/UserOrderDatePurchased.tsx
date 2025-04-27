import { IOrder } from '../../../../types/order.type'
import Description from '../../../ui/Description'
import { dateFormatter } from '../../../utils/dateFormatter'

interface UserOrderDatePurchasedProps {
  order: IOrder
}

const UserOrderDatePurchased = (props: UserOrderDatePurchasedProps) => {
  return (
    <Description>{dateFormatter(props.order.createdAt)}</Description>
  )
}

export default UserOrderDatePurchased