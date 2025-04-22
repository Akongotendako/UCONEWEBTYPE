import { HStack } from '@chakra-ui/react'
import AccountMenus from './AccountMenus'
import LogoContainer from '../../logo/LogoContainer'
import NavigationMenu from './NavigationMenu'

const NavBarContainer = () => {
  return (
    <HStack
      borderColor="#FFF"
      borderBottomWidth="1px"
      w="100%"
      bg="#121A21"
      position="sticky"
      top="0"
      left="0"
      zIndex="1000"
      align="center"
      justify="space-between"
      p="5"
    >

      {/** Logo */}
      <LogoContainer isVisible={true}/>


      {/** Link buttons */}
      <NavigationMenu/>

      {/** Accounts */}
      <AccountMenus/>
    </HStack>
  )
}

export default NavBarContainer