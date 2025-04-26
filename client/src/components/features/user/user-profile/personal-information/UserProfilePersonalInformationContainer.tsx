import { VStack } from '@chakra-ui/react'
import Title from '../../../../ui/Title'
import UserProfilePersonalInformationName from './UserProfilePersonalInformationName'
import UserProfilePersonalInformationCredential from './UserProfilePersonalInformationCredential'
import UserProfilePersonalInformationPhoneNumber from './UserProfilePersonalInformationPhoneNumber'
import UserProfilePersonalInformationSaveChangesButton from './UserProfilePersonalInformationSaveChangesButton'

const UserProfilePersonalInformationContainer = () => {
  return (
    <VStack w={'full'} rounded={"md"} borderColor={"#FFFFFF80"} borderWidth={"1px"} p={5} align={'flex-start'}>
        {/** title */}
        <Title>Personal Information</Title>
        <UserProfilePersonalInformationName/>
        <UserProfilePersonalInformationCredential/>
        <UserProfilePersonalInformationPhoneNumber/>
        <UserProfilePersonalInformationSaveChangesButton/>
    </VStack>
  )
}

export default UserProfilePersonalInformationContainer