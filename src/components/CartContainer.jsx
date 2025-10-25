import CartCard from "./CartCard";

export default function CartContainer({
  data,
  cartQuantity,
  handleAddToQuantity,
  handleRemoveQuantity,
  handleRemoveFromCart,
  handleEmptyCart,
}) {
  {/*calculates the total price of all items in the cart*/}
  const totalPrice = () => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const quantityObj = cartQuantity.find((p) => p.id === item.id);
      const quantity = quantityObj ? quantityObj.quantity : 0;
      sum += (parseFloat(item.price.replace("$", ""))) * quantity;
    }
    return sum.toFixed(2);
  };
  
  {/*if cart is empty: */}
  if (data.length === 0) {
    return (
      <div>
        <h2>Cart Items: 0</h2>
        <p>No items in cart</p>
      </div>
    );
  }

  return (
    <div className="CartContainer">
      <h2>Cart Items: {data.length}</h2>
      {data.map((product) => (
        <CartCard
          key={product.id}
          {...product}
          cartQuantity={cartQuantity.find((p) => p.id === product.id)}
          handleAddToQuantity={handleAddToQuantity}
          handleRemoveQuantity={handleRemoveQuantity}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      ))}
      <div className="CartListBtns">
        {/*button to empty the cart*/}
        <button className="RemoveButton" onClick={() => handleEmptyCart()}>
          EmptyCart
        </button>
        {/*buy button (no functionality)*/}
        <button id="BuyButton">Checkout<br/>${totalPrice()}</button>
      </div>
    </div>
  );
}
