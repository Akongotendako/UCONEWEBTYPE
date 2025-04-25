import { Flex } from "@chakra-ui/react"
import UserProfileContainer from "../../../components/features/user/user-profile/profile/UserProfileContainer"
import UserProfilePersonalInformationContainer from "../../../components/features/user/user-profile/personal-information/UserProfilePersonalInformationContainer"

const UserProfile = () => {
  return (
    <Flex w={"full"} p={5} direction={"row"} gap={5} align={"flex-start"}>
      <UserProfileContainer/>
      <UserProfilePersonalInformationContainer/>
    </Flex>
  )
}

export default UserProfile