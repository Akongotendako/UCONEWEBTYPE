import { VStack, Input } from '@chakra-ui/react';
import React, { useRef } from 'react'
import UserProfileImagePicker from '../../../components/features/user/user-profile/profile/UserProfileImagePicker';
import PrimaryButton from '../../../components/ui/PrimaryButton';
import Title from '../../../components/ui/Title';
import userStore from '../../../stores/userStore';
import { IProfilePic } from '../../../types/user.type';

const ProfileContainer = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const { user, setImage } = userStore();
    
    const handleButtonClick = () => {
      inputRef.current?.click();
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
  
      if (file) {
        const image: IProfilePic = { file, url: URL.createObjectURL(file) };
        setImage(image);
      }
    };
    return (
      <VStack
        w={"1/3"}
        p={5}
        borderColor={"#FFFFFF80"}
        borderWidth={"1px"}
        rounded={"md"}
        align={"flex-start"}
        gap={8}
      >
        <UserProfileImagePicker />
        <Title>{`${user.profile.firstName} ${user.profile.lastName}`}</Title>
        <Input
          type="file"
          ref={inputRef}
          onChange={handleChange}
          display={"none"}
        />
        <PrimaryButton onclick={handleButtonClick}>Choose Photo</PrimaryButton>
      </VStack>
    );
}

export default ProfileContainer