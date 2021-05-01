import CustomCard from "../CustomCard";

const Product = ({ basket, product, categoryName, addProduct, RemoveItemFromBasket }) => (
  <CustomCard
    basket={basket}
    product={product}
    categoryName={categoryName}
    addProduct={addProduct}
    RemoveItemFromBasket={RemoveItemFromBasket}
  />
);

export default Product;