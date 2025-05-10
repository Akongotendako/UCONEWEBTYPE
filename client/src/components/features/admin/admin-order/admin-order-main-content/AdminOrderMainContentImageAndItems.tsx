import { HStack, Image } from "@chakra-ui/react";
import Description from "../../../../ui/Description";
import tShirt from "../../../../../assets/t-shirt.jpeg";
import { IOrderProduct } from "../../../../../types/order.type";
import { useEffect, useState } from "react";
import userStore from "../../../../../stores/userStore";
import { IProfile } from "../../../../../types/user.type";

interface AdminOrderMainContentImageAndItemsProps {
  products: IOrderProduct[];
  userId: string;
}

const AdminOrderMainContentImageAndItems = (
  props: AdminOrderMainContentImageAndItemsProps
) => {
  const { fetchSpecificUser } = userStore();
  
  const [userProfile, setUserProfile] = useState<IProfile | undefined>(undefined)

  useEffect(() => {
    const fetchUser = async() => {
      const profile = await fetchSpecificUser(props.userId)
      setUserProfile(profile as IProfile)
    }
    fetchUser()
  }, [fetchSpecificUser, props.userId]);

  const text = () => {
    return props.products.length === 1
      ? `${props.products.length} item`
      : `${props.products.length} items`;
  };

  return (
    <HStack gap={7}>
      <Image
        src={userProfile?.profilePic?.url ?? tShirt}
        boxSize={28}
        rounded={"sm"}
      />
      <Description>{text()}</Description>
    </HStack>
  );
};

export default AdminOrderMainContentImageAndItems;
