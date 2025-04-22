import AddToCartBottomContent from "./AddToCartBottomContent";
import AddToCartTopContent from "./AddToCartTopContent";

const AddToCartContainer = () => {
  return (
    <>
      {/** Top content which consist of the images and additional information of the product or item like product name, quantity, price, discount, and ratings */}
      <AddToCartTopContent/>

      {/** Bottom content which consist of description and customer reviews tab */}
      <AddToCartBottomContent />
    </>
  );
};

export default AddToCartContainer;
