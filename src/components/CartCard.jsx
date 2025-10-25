import QuantityCounter from "./QuantityCounter";

export default function CartCard({
  id,
  productName,
  image,
  brand,
  price,
  cartQuantity,
  handleAddToQuantity,
  handleRemoveQuantity,
  handleRemoveFromCart,
}) {
  return (
    <div className="CartCard">
      <div className="CartCardInfo">
        <h3>{productName}</h3>
        <img src={image} alt="" />
        <p>{brand}</p>
        <p>{price}</p>
        <QuantityCounter
          id={id}
          productQuantity={cartQuantity.quantity}
          handleAddToQuantity={handleAddToQuantity}
          handleRemoveQuantity={handleRemoveQuantity}
        />
      </div>

      <div>
        {/*displays total price for the product*/}
        <h3>Total: ${(parseFloat(price.replace('$', '')) * cartQuantity.quantity).toFixed(2)}</h3>

        {/*button to remove product from cart*/}
        <button className="RemoveButton" onClick={() => handleRemoveFromCart(id)}>Remove</button>
      </div>
    </div>
  );
}
