import { For, HStack } from "@chakra-ui/react";
import cartStore from "../../../../../stores/cartStore";
import UserCartMainContentImages from "./UserCartMainContentImages";
import UserCartMainContentDetails from "./UserCartMainContentDetails";
import UserMainContentCheckOut from "./UserMainContentCheckOut";

const UserCartMainContentContainer = () => {
  const { cart } = cartStore();
  return (
    <>
      <For each={cart.items}>
        {(item, index) => (
          <HStack
            borderColor={"#FFFFFF80"}
            borderWidth={"1px"}
            rounded={"md"}
            p={5}
            align={"flex-start"}
            key={index}
            mt={index !== 0 ? "5" : ""}
          >
            <UserCartMainContentImages
              url={item.product.images[0]?.url as string}
            />

            {/** Product details */}
            <UserCartMainContentDetails item={item} index={index} />
          </HStack>
        )}
      </For>
      {cart.items.length !== 0 && <UserMainContentCheckOut />}
    </>
  );
};

export default UserCartMainContentContainer;
