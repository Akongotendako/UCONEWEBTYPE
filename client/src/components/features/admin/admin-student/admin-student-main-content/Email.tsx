import Description from '../../../../ui/Description'

interface EmailProps {
    email: string
}

const Email = (props: EmailProps) => {
  return (
    <Description>{props.email}</Description>
  )
}

export default Email