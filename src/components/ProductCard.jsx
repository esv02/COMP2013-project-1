import QuantityCounter from "./QuantityCounter";

export default function ProductCard({
  id,
  productName,
  image,
  brand,
  price,
  productQuantity,
  handleAddToQuantity,
  handleRemoveQuantity,
  handleAddToCart,
}) {
  return (
    //product info
    <div className="ProductCard">
      <h3>{productName}</h3>
      <img src={image} alt=""/>
      <p>{brand}</p>
      <QuantityCounter
        id={id}
        productQuantity={productQuantity.quantity}
        handleAddToQuantity={handleAddToQuantity}
        handleRemoveQuantity={handleRemoveQuantity}
      />
      <p>{price}</p>

      {/*button to add product to cart*/}
      <button onClick={() => handleAddToCart(id)}>Add to Cart</button>
    </div>
  );
}
