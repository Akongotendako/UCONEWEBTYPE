import PrimaryButton from '../../../../ui/PrimaryButton'
import userStore from '../../../../../stores/userStore'

const UserProfilePersonalInformationSaveChangesButton = () => {

    const userId = localStorage.getItem("userId")
    const {updateProfile} = userStore()
  return (
    <PrimaryButton onclick={() => updateProfile(userId as string)}>Save Changes</PrimaryButton>
  )
}

export default UserProfilePersonalInformationSaveChangesButton