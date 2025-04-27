import { IOrder } from '../../../../types/order.type'
import Description from '../../../ui/Description'

interface UserOrderMethodProps {
  order: IOrder
}

const UserOrderMethod = (props: UserOrderMethodProps) => {
  return (
    <Description>{props.order.paymentMethod}</Description>
  )
}

export default UserOrderMethod